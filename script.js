// ================= BANCO DE DADOS EM MEMÓRIA (MOCK DATA) =================
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

// Configuração Global: Insira seu número de WhatsApp com DDD abaixo
const TELEFONE_CORRETOR = "5549999999999"; 

// ================= SISTEMA NATIVO DE NAVEGAÇÃO SPA =================
function showPage(pageId) {
    document.querySelectorAll('.app-page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(`page-${pageId}`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================= RENDERIZADORES DO FRONT-END =================

// 1. Renderiza os cards na Vitrine Pública
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

// 2. Renderiza a tabela dentro do Painel Admin (Tabela CRUD)
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
                        <button class="btn-edit" onclick="startEditProperty(${index})">Editar</button>
                        <button class="btn-delete" onclick="deleteProperty(${index})">Excluir</button>
                    </div>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// ================= CONTROLES DE FILTRO / BUSCA =================
function executeSearch() {
    const status = document.getElementById('search-status').value;
    const categoria = document.getElementById('search-category') ? document.getElementById('search-category').value : 'todos';
    const local = document.getElementById('search-city').value;
    renderVitrine({ status, categoria, local });
}

// ================= VALIDAÇÃO DE LOGIN ADMINISTRATIVO =================
function handleLogin(event) {
    event.preventDefault();
    const user = document.getElementById('auth-user').value;
    const pass = document.getElementById('auth-pass').value;
    const errorBox = document.getElementById('login-error');

    // Credenciais do Administrador
    if (user === "admin" && pass === "pribin123") {
        errorBox.style.display = "none";
        document.getElementById('login-form').reset();
        showPage('admin');
        renderAdminTable();
    } else {
        errorBox.style.display = "block";
    }
}

// Executa o encerramento da sessão administrativa
function handleLogout() {
    showPage('vitrine');
}

// ================= OPERAÇÕES DO BANCO DE DADOS (CRUD) =================
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
    const item = imoveis[index];
    
    document.getElementById('form-action-title').innerText = "Editar Dados do Imóvel";
    document.getElementById('btn-save-form').innerText = "Atualizar";
    document.getElementById('btn-cancel-edit').style.display = "inline-block";
    
    document.getElementById('edit-index').value = index;
    document.getElementById('prop-title').value = item.titulo;
    document.getElementById('prop-status').value = item.finalidade;
    if (document.getElementById('prop-category')) document.getElementById('prop-category').value = item.categoria || 'todos';
    document.getElementById('prop-price').value = item.preco;
    document.getElementById('prop-location').value = item.localizacao;
    document.getElementById('prop-image').value = item.imagem;
}

function deleteProperty(index) {
    if (confirm(`Excluir permanentemente o imóvel "${imoveis[index].titulo}"?`)) {
        imoveis.splice(index, 1);
        renderAdminTable();
        renderVitrine();
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

// ================= PROCESSAMENTO DINÂMICO DO MODAL WHATSAPP =================
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

// Inicializar Vitrine ao Carregar
window.onload = function() { renderVitrine(); };

// ================= ENGINE DO CARROSSEL DE CIDADES =================
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlides(index) {
    if (slides.length === 0) return; // Segurança caso a seção mude
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

// Rotação Automática Suave a cada 6 segundos
let autoSlideInterval = setInterval(() => moveSlide(1), 6000);

function resetSlideTimer() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => moveSlide(1), 6000);
}

document.querySelectorAll('.carousel-arrow, .dot').forEach(elem => {
    elem.addEventListener('click', resetSlideTimer);
});

// Vincula a ação das abas superiores aos filtros reais (Aluguel, Compra/Venda, Todos)
function executeSearchStatus(statusValue) {
    // Tira a classe active de todos os botões e adiciona no que foi clicado
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    
    // Atualiza o select de busca oculto (se aplicável) e renderiza a vitrine filtrada
    const searchStatusElem = document.getElementById('search-status');
    if (searchStatusElem) {
        searchStatusElem.value = statusValue;
    }
    
    const searchCityElem = document.getElementById('search-city');
    const currentCity = searchCityElem ? searchCityElem.value : "";
    
    // Dispara a renderização atualizada baseada nos dados em memória
    renderVitrine({ status: statusValue, local: currentCity });
}