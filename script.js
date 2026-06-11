let imoveis = [
    {
        titulo: "Mansão Suspensa Triplex",
        finalidade: "Venda",
        categoria: "Casa",
        preco: "8.900.000",
        localizacao: "Bairro Nobre, Centro",
        imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    },
    {
        titulo: "Apartamento Vista Mar Exclusive",
        finalidade: "Aluguel",
        categoria: "Apartamento",
        preco: "6.500 / mês",
        localizacao: "Av. Beira Mar, Zona Sul",
        imagem: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
    },
    {
        titulo: "Residência Design Contemporâneo",
        finalidade: "Venda",
        categoria: "Casa",
        preco: "4.200.000",
        localizacao: "Condomínio Golden Hills",
        imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
    }
];
const TELEFONE_CORRETOR = "5549999999999";

function saveImoveisToStorage() {
    try {
        localStorage.setItem('imoveis', JSON.stringify(imoveis));
    } catch (e) {
        console.warn('Não foi possível salvar imoveis no localStorage', e);
    }
}

function loadImoveisFromStorage() {
    try {
        const raw = localStorage.getItem('imoveis');
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                imoveis = parsed;
            }
        }
    } catch (e) {
        console.warn('Erro ao carregar imoveis do localStorage', e);
    }
}

function parsePriceToNumber(priceStr) {
    if (!priceStr && priceStr !== 0) return 0;
    if (typeof priceStr === 'number') return priceStr;
    const s = String(priceStr);
    const digits = s.replace(/[^0-9]/g, '');
    if (!digits) return 0;
    return parseInt(digits, 10);
}

function applySorting(list) {
    const sort = document.getElementById('catalog-sort') ? document.getElementById('catalog-sort').value : 'recentes';
    const copy = list.slice();
    if (sort === 'preco-crescente') {
        copy.sort((a, b) => parsePriceToNumber(a.preco) - parsePriceToNumber(b.preco));
    } else if (sort === 'preco-decrescente') {
        copy.sort((a, b) => parsePriceToNumber(b.preco) - parsePriceToNumber(a.preco));
    } else if (sort === 'recentes') {
        copy.reverse();
    }
    return copy;
}

function showPage(pageId) {
    document.querySelectorAll('.app-page').forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(`page-${pageId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    if (pageId === 'imoveis') {
        executeSidebarSearch();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderVitrine(filtros = null) {
    const grid = document.getElementById('public-properties-grid');
    grid.innerHTML = "";

    let imoveisFiltrados = imoveis;

    if (filtros) {
        if (filtros.status && filtros.status !== 'todos') {
            imoveisFiltrados = imoveisFiltrados.filter(item => item.finalidade === filtros.status);
        }
        if (filtros.categoria && filtros.categoria !== 'todos') {
            imoveisFiltrados = imoveisFiltrados.filter(item => (item.categoria || '').toLowerCase() === filtros.categoria.toLowerCase());
        }
        if (filtros.local && filtros.local.trim() !== "") {
            const busca = filtros.local.toLowerCase();
            imoveisFiltrados = imoveisFiltrados.filter(item =>
                item.localizacao.toLowerCase().includes(busca) ||
                item.titulo.toLowerCase().includes(busca)
            );
        }
    }
    // aplica ordenação pela seleção atual (se existir)
    imoveisFiltrados = applySorting(imoveisFiltrados);

    if (imoveisFiltrados.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px;">Nenhum imóvel corresponde aos critérios de busca.</div>`;
        return;
    }

    imoveisFiltrados.forEach((item) => {
        const cardHTML = `
            <div class="card">
                <div class="badge-status">${item.finalidade}</div>
                <img src="${item.imagem}" alt="${item.titulo}">
                <div class="card-body">
                    <h3>${item.titulo}</h3>
                    <p class="loc">📍 ${item.localizacao}</p>
                    <p class="price-tag">R$ ${item.preco}</p>
                    <button class="btn-details" onclick="openContactModal('${item.titulo}')">Tenho Interesse</button>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}

function renderAdminTable() {
    const tbody = document.getElementById('admin-table-body');
    tbody.innerHTML = "";

    imoveis.forEach((item, index) => {
        const row = `
            <tr>
                <td><img src="${item.imagem}" class="table-img"></td>
                <td><strong>${item.titulo}</strong><br><small style="color: #666;">${item.localizacao}</small></td>
                <td>${item.categoria || ''}</td>
                <td><span style="color: ${item.finalidade === 'Venda' ? '#c5a059' : '#00bcd4'}">${item.finalidade}</span></td>
                <td><strong>R$ ${item.preco}</strong></td>
                <td>
                    <div class="actions-cell">
                        <button class="btn-edit" onclick="editProperty(${index})">Editar</button>
                        <button class="btn-delete" onclick="deleteProperty(${index})">Excluir</button>
                    </div>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function executeSearch() {
    const status = document.getElementById('search-status').value;
    const categoria = document.getElementById('search-category') ? document.getElementById('search-category').value : 'todos';
    const local = document.getElementById('search-city').value;
    renderVitrine({ status, categoria, local });
}

function handleLogin(event) {
    event.preventDefault();
    const user = document.getElementById('auth-user').value;
    const pass = document.getElementById('auth-pass').value;
    const errorBox = document.getElementById('login-error');

    if (user === "admin" && pass === "pribin123") {
        errorBox.style.display = "none";
        document.getElementById('login-form').reset();
        showPage('admin');
        renderAdminTable();
    } else {
        errorBox.style.display = "block";
    }
}

function handleLogout() {
    showPage('vitrine');
}

function handlePropertySubmit(event) {
    event.preventDefault();
    
    const index = parseInt(document.getElementById('edit-index').value);
    const titulo = document.getElementById('prop-title').value;
    const finalidade = document.getElementById('prop-status').value;
    const categoria = document.getElementById('prop-category') ? document.getElementById('prop-category').value : 'Casa';
    const preco = document.getElementById('prop-price').value;
    const localizacao = document.getElementById('prop-location').value;
    const imagem = document.getElementById('prop-image').value;

    const novoImovel = { titulo, finalidade, categoria, preco, localizacao, imagem };

    if (index === -1) {
        imoveis.push(novoImovel);
    } else {
        imoveis[index] = novoImovel;
    }

    resetPropertyForm();
    renderAdminTable();
    renderVitrine();
}

function startEditProperty(index) {
    // Mantida para compatibilidade, delega para editProperty
    editProperty(index);
}

function saveProperty(event) {
    event.preventDefault();

    const id = document.getElementById('form-property-id').value;
    const propertyData = {
        titulo: document.getElementById('form-title').value,
        finalidade: document.getElementById('form-status').value,
        categoria: document.getElementById('form-category').value,
        preco: document.getElementById('form-price').value,
        localizacao: document.getElementById('form-location').value,
        imagem: document.getElementById('form-image').value,
        quartos: parseInt(document.getElementById('form-bedrooms').value) || 0,
        banheiros: parseInt(document.getElementById('form-bathrooms').value) || 0,
        salas: parseInt(document.getElementById('form-livingrooms').value) || 0,
        cozinhas: parseInt(document.getElementById('form-kitchens').value) || 0,
        garagem: parseInt(document.getElementById('form-garages').value) || 0,
        areaTotal: document.getElementById('form-area-total').value ? document.getElementById('form-area-total').value + " m²" : "N/A",
        areaConstruida: document.getElementById('form-area-built').value ? document.getElementById('form-area-built').value + " m²" : "N/A",
        outrosComodos: document.getElementById('form-others').value || ""
    };

    // Envia os dados para o backend PHP
    fetch('salvar_imovel.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(propertyData)
    })
    .then(res => res.json())
    .then(data => {
        if (data.sucesso) {
            document.getElementById('property-form').reset();
            document.getElementById('form-property-id').value = "";
            if (typeof loadImoveisFromStorage === 'function') loadImoveisFromStorage();
            if (typeof renderAdminTable === 'function') renderAdminTable();
            if (typeof executeSidebarSearch === 'function') executeSidebarSearch();
            alert(data.mensagem);
        } else {
            alert('Erro ao salvar: ' + data.mensagem);
        }
    })
    .catch(err => {
        console.error('Erro na requisição:', err);
        alert('Erro ao conectar com o servidor. Verifique a API.');
    });
}

function createPropertyCard(item, index) {
    return `
        <div class="property-card">
            <div class="property-image-wrapper">
                <img src="${item.imagem}" alt="${item.titulo}" class="property-card-img">
                <span class="badge-status ${item.finalidade === 'Aluguel' ? 'badge-rent' : 'badge-sale'}">${item.finalidade}</span>
            </div>
            <div class="property-card-info">
                <span class="property-card-category">${item.categoria || 'Imóvel'}</span>
                <h3 class="property-card-title">${item.titulo}</h3>
                <p class="property-card-location">📍 ${item.localizacao}</p>
                
                <div class="property-card-features">
                    ${item.quartos > 0 ? `<span>🛏️ ${item.quartos} Qts</span>` : ''}
                    ${item.banheiros > 0 ? `<span>🚿 ${item.banheiros} Banh</span>` : ''}
                    ${item.garagem > 0 ? `<span>🚗 ${item.garagem} Vag</span>` : ''}
                    ${item.areaTotal !== 'N/A' ? `<span>📐 ${item.areaTotal}</span>` : ''}
                </div>
                
                ${item.areaConstruida !== 'N/A' || item.outrosComodos ? `
                    <div class="property-card-extra-details">
                        ${item.areaConstruida !== 'N/A' ? `<small>Construído: ${item.areaConstruida}</small>` : ''}
                        ${item.outrosComodos ? `<small class="block-text">Extra: ${item.outrosComodos}</small>` : ''}
                    </div>
                ` : ''}

                <div class="property-card-footer">
                    <span class="property-card-price">R$ ${item.preco}</span>
                    <a href="https://wa.me/${TELEFONE_CORRETOR}?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20im%C3%B3vel:%20${encodeURIComponent(item.titulo)}" target="_blank" class="btn-card-contact">Contato</a>
                </div>
            </div>
        </div>
    `;
}

function editProperty(index) {
    const item = imoveis[index];
    if (!item) return;

    document.getElementById('form-property-id').value = index;
    document.getElementById('form-title').value = item.titulo || '';
    document.getElementById('form-status').value = item.finalidade || 'Venda';
    document.getElementById('form-category').value = item.categoria || 'Casa';
    document.getElementById('form-price').value = item.preco || '';
    document.getElementById('form-location').value = item.localizacao || '';
    document.getElementById('form-image').value = item.imagem || '';

    document.getElementById('form-bedrooms').value = item.quartos || 0;
    document.getElementById('form-bathrooms').value = item.banheiros || 0;
    document.getElementById('form-livingrooms').value = item.salas || 0;
    document.getElementById('form-kitchens').value = item.cozinhas || 0;
    document.getElementById('form-garages').value = item.garagem || 0;
    document.getElementById('form-area-total').value = item.areaTotal ? item.areaTotal.replace(' m²', '') : '';
    document.getElementById('form-area-built').value = item.areaConstruida ? item.areaConstruida.replace(' m²', '') : '';
    document.getElementById('form-others').value = item.outrosComodos || '';
    // Navega para o painel admin para edição
    showPage('admin');
}


function deleteProperty(index) {
    if (confirm(`Excluir permanentemente o imóvel "${imoveis[index].titulo}"?`)) {
        imoveis.splice(index, 1);
        renderAdminTable();
        renderVitrine();
        if (typeof saveImoveisToStorage === 'function') saveImoveisToStorage();
    }
}

function resetPropertyForm() {
    document.getElementById('property-form').reset();
    document.getElementById('edit-index').value = "-1";
    document.getElementById('form-action-title').innerText = "Adicionar Novo Imóvel";
    document.getElementById('btn-save-form').innerText = "Salvar Imóvel";
    document.getElementById('btn-cancel-edit').style.display = "none";
    if (document.getElementById('prop-category')) document.getElementById('prop-category').value = 'Casa';
}

function openContactModal(propertyTitle) {
    document.getElementById('modal-prop-title').innerText = propertyTitle;
    
    const textoMensagem = `Olá! Tenho interesse em receber mais informações sobre o imóvel: "${propertyTitle}".`;
    const urlCompleta = `https://wa.me/${TELEFONE_CORRETOR}?text=${encodeURIComponent(textoMensagem)}`;
    
    document.getElementById('modal-whatsapp-link').href = urlCompleta;
    document.getElementById('contactModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) { modal.style.display = 'none'; }
}

function submitForm(event) {
    event.preventDefault();
    alert("Proposta enviada! Retornaremos o contato em breve.");
    closeModal();
    document.getElementById('contact-form').reset();
}

window.onload = function() { renderVitrine(); };

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlides(index) {
    if (slides.length === 0) return;
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

function moveSlide(step) {
    showSlides(slideIndex += step);
}

function currentSlide(index) {
    showSlides(slideIndex = index);
}

let autoSlideInterval = setInterval(() => moveSlide(1), 6000);

function resetSlideTimer() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => moveSlide(1), 6000);
}

if (document.querySelectorAll('.carousel-arrow, .dot').length) {
    document.querySelectorAll('.carousel-arrow, .dot').forEach(elem => {
        elem.addEventListener('click', resetSlideTimer);
    });
}

function executeSearchStatus(statusValue, el) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (el && el.classList) el.classList.add('active');

    const searchStatusElem = document.getElementById('search-status');
    if (searchStatusElem) {
        searchStatusElem.value = statusValue;
    }

    const searchCityElem = document.getElementById('search-city');
    const currentCity = searchCityElem ? searchCityElem.value : "";

    renderVitrine({ status: statusValue, local: currentCity });
}

function executeSidebarSearch() {
    const status = document.getElementById('sidebar-status').value;
    const category = document.getElementById('sidebar-category').value;
    const city = document.getElementById('sidebar-city').value.toLowerCase();
    
    const bedrooms = document.getElementById('sidebar-bedrooms').value;
    const bathrooms = document.getElementById('sidebar-bathrooms').value;
    const garages = document.getElementById('sidebar-garages').value;
    
    const priceMin = parseFloat(document.getElementById('sidebar-price-min').value) || 0;
    const priceMax = parseFloat(document.getElementById('sidebar-price-max').value) || Infinity;

    // Monta query string para a API
    const params = new URLSearchParams();
    params.set('status', status);
    params.set('categoria', category);
    params.set('local', city);
    params.set('quartos', bedrooms);
    params.set('banheiros', bathrooms);
    params.set('garagem', garages);
    if (priceMin > 0) params.set('preco_min', priceMin);
    if (priceMax < Infinity) params.set('preco_max', priceMax);

    fetch(`buscar_imoveis.php?${params.toString()}`)
        .then(res => res.json())
        .then(data => {
            const gridContainer = document.getElementById('catalog-properties-grid');
            if (Array.isArray(data)) {
                document.getElementById('catalog-counter').innerText = `${data.length} Imóveis encontrados`;
                if (gridContainer) gridContainer.innerHTML = data.map((item, index) => createPropertyCard(item, index)).join('');
            } else {
                // fallback local
                console.warn('Resposta inesperada da API, usando filtro local');
                executeSidebarSearchFallback();
            }
        })
        .catch(err => {
            console.warn('API indisponível, aplicando filtro local', err);
            executeSidebarSearchFallback();
        });
}

function executeSidebarSearchFallback() {
    const status = document.getElementById('sidebar-status').value;
    const category = document.getElementById('sidebar-category').value;
    const city = document.getElementById('sidebar-city').value.toLowerCase();
    const bedrooms = document.getElementById('sidebar-bedrooms').value;
    const bathrooms = document.getElementById('sidebar-bathrooms').value;
    const garages = document.getElementById('sidebar-garages').value;
    const priceMin = parseFloat(document.getElementById('sidebar-price-min').value) || 0;
    const priceMax = parseFloat(document.getElementById('sidebar-price-max').value) || Infinity;

    let filtrados = imoveis || [];
    if (status !== 'todos') filtrados = filtrados.filter(item => item.finalidade === status);
    if (category !== 'todos') filtrados = filtrados.filter(item => item.categoria === category);
    if (city) filtrados = filtrados.filter(item => item.localizacao && item.localizacao.toLowerCase().includes(city));
    if (bedrooms !== 'todos') filtrados = filtrados.filter(item => (item.quartos || 0) >= parseInt(bedrooms));
    if (bathrooms !== 'todos') filtrados = filtrados.filter(item => (item.banheiros || 0) >= parseInt(bathrooms));
    if (garages !== 'todos') filtrados = filtrados.filter(item => (item.garagem || 0) >= parseInt(garages));
    if (priceMin > 0 || priceMax < Infinity) {
        filtrados = filtrados.filter(item => {
            const valorLimpo = parseFloat(String(item.preco).replace(/\./g, '').replace(/[^0-9]/g, '')) || 0;
            return valorLimpo >= priceMin && valorLimpo <= priceMax;
        });
    }
    document.getElementById('catalog-counter').innerText = `${filtrados.length} Imóveis encontrados`;
    const gridContainer = document.getElementById('catalog-properties-grid');
    if (gridContainer) gridContainer.innerHTML = filtrados.map((item, index) => createPropertyCard(item, index)).join('');
}

function clearSidebarFilters() {
    document.getElementById('sidebar-status').value = 'todos';
    document.getElementById('sidebar-category').value = 'todos';
    document.getElementById('sidebar-city').value = '';
    document.getElementById('sidebar-bedrooms').value = 'todos';
    document.getElementById('sidebar-bathrooms').value = 'todos';
    document.getElementById('sidebar-garages').value = 'todos';
    document.getElementById('sidebar-price-min').value = '';
    document.getElementById('sidebar-price-max').value = '';
    executeSidebarSearch();
}

function renderCardsNoGrid(list, containerId) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    grid.innerHTML = '';

    if (!list || list.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px;">Nenhum imóvel corresponde aos critérios de busca.</div>`;
        return;
    }

    list.forEach((item) => {
        const cardHTML = `
            <div class="card">
                <div class="badge-status">${item.finalidade}</div>
                <img src="${item.imagem}" alt="${item.titulo}">
                <div class="card-body">
                    <h3>${item.titulo}</h3>
                    <p class="loc">📍 ${item.localizacao}</p>
                    <p class="price-tag">R$ ${item.preco}</p>
                    <button class="btn-details" onclick="openContactModal('${item.titulo}')">Tenho Interesse</button>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}

function sortCatalogProperties() {
    executeSidebarSearch();
}

// Carrega imoveis do localStorage ao iniciar e renderiza
window.addEventListener('DOMContentLoaded', () => {
    if (typeof loadImoveisFromStorage === 'function') loadImoveisFromStorage();
    renderVitrine();
    renderAdminTable();
});