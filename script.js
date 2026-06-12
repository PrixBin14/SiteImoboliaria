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
    },
    {
        codigo: "CS-1020",
        titulo: "Casa Alvenaria de Alto Padrão",
        categoria: "Casa",
        finalidade: "Venda",
        localizacao: "Bortolon, Xanxerê - SC",
        preco: "1.450.000",
        imagem: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200", // Foto Externa
        quartos: 4,
        banheiros: 3,
        salas: 2,
        cozinhas: 1,
        garagem: 3,
        areaTotal: "450m²",
        areaConstruida: "280m²",
        outrosComodos: "Residência magnífica com acabamento em gesso, iluminação em LED, piso em porcelanato polido, suíte master com closet, área de festas privativa com churrasqueira gourmet e piscina aquecida.",
        galeria: [
            "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200", // Externa
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200"  // Interna (Sala)
        ]
    },
    {
        codigo: "AP-0402",
        titulo: "Apartamento Studio Integrado",
        categoria: "Apartamento",
        finalidade: "Aluguel",
        localizacao: "Centro, Xanxerê - SC",
        preco: "1.850",
        imagem: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200", // Foto Externa Prédio
        quartos: 1,
        banheiros: 1,
        salas: 1,
        cozinhas: 1,
        garagem: 1,
        areaTotal: "55m²",
        areaConstruida: "48m²",
        outrosComodos: "Studio completamente mobiliado sob medida (basta trazer as roupas). Sacada com pele de vidro e churrasqueira, ideal para profissionais independentes ou estudantes. Prédio com elevador e salão de festas.",
        galeria: [
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200", // Externa
            "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1200"  // Interna (Cozinha/Studio)
        ]
    },
    {
        codigo: "TR-0089",
        titulo: "Terreno Urbano Pronto para Construir",
        categoria: "Terreno",
        finalidade: "Venda",
        localizacao: "Tonial, Xanxerê - SC",
        preco: "320.000",
        imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200", // Foto do lote plano
        quartos: 0,
        banheiros: 0,
        salas: 0,
        cozinhas: 0,
        garagem: 0,
        areaTotal: "360m²",
        areaConstruida: "0m²",
        outrosComodos: "Excelente lote totalmente plano, posicionado em região alta e nobre do bairro Tonial. Medindo 12x30 metros, com viabilidade aprovada para até 4 pavimentos. Ruas asfaltadas e iluminação pública moderna.",
        galeria: [
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200"
        ]
    },
    {
        codigo: "CS-2055",
        titulo: "Casa Familiar com Amplo Quintal",
        categoria: "Casa",
        finalidade: "Aluguel",
        localizacao: "Veneza, Xanxerê - SC",
        preco: "2.900",
        imagem: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200", // Foto Externa Fachada
        quartos: 3,
        banheiros: 2,
        salas: 1,
        cozinhas: 1,
        garagem: 2,
        areaTotal: "400m²",
        areaConstruida: "150m²",
        outrosComodos: "Casa residencial aconchegante. Possui uma ampla cozinha com armários embutidos, sala de estar espaçosa, garagem coberta para dois carros e um excelente quintal gramado nos fundos com árvores frutíferas e canil.",
        galeria: [
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200", // Externa
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200"  // Interna (Quarto)
        ]
    },
    {
        codigo: "AP-1201",
        titulo: "Cobertura Duplex Vista Panorâmica",
        categoria: "Apartamento",
        finalidade: "Venda",
        localizacao: "La Salle, Xanxerê - SC",
        preco: "2.100.000",
        imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200", // Fachada Moderna/Luxo
        quartos: 3,
        banheiros: 4,
        salas: 3,
        cozinhas: 2,
        garagem: 4,
        areaTotal: "310m²",
        areaConstruida: "310m²",
        outrosComodos: "O topo da sofisticação urbana. Apartamento duplex com 3 suítes, lareira ecológica na sala principal, automação residencial por comando de voz, terraço privativo integrado com jacuzzi e uma vista de 360 graus da cidade.",
        galeria: [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200", // Externa/Varanda
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"  // Interna (Banheiro Luxo)
        ]
    },
    {
        codigo: "TR-0512",
        titulo: "Chácara / Área de Terra Próxima à Cidade",
        categoria: "Terreno",
        finalidade: "Venda",
        localizacao: "Linha Invernada, Xanxerê - SC",
        preco: "480.000",
        imagem: "https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=1200", // Campo/Chácara vista aérea
        quartos: 0,
        banheiros: 0,
        salas: 0,
        cozinhas: 0,
        garagem: 0,
        areaTotal: "24.200m²",
        areaConstruida: "0m²",
        outrosComodos: "Uma área de 1 alqueire inteiro a apenas 8 minutos do centro urbano. Possui riacho nos fundos, terra extremamente fértil para plantio ou lazer, e rede elétrica trifásica passando na frente. Perfeito para sítio familiar.",
        galeria: [
            "https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=1200"
        ]
    },
    {
        codigo: "AP-0730",
        titulo: "Apartamento Executivo Mobiliado",
        categoria: "Apartamento",
        finalidade: "Aluguel",
        localizacao: "Colatto, Xanxerê - SC",
        preco: "2.400",
        imagem: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200", // Sala interna estilosa
        quartos: 2,
        banheiros: 2,
        salas: 1,
        cozinhas: 1,
        garagem: 1,
        areaTotal: "85m²",
        areaConstruida: "78m²",
        outrosComodos: "Imóvel seminovo finamente decorado. Sacada fechada no sistema Reiki com churrasqueira rotativa, aquecimento a gás em todas as torneiras e chuveiros, eletrodomésticos em inox inclusos na locação e rebaixamento em gesso.",
        galeria: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200", // Interna (Estar)
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200"  // Interna (Cozinha Americana)
        ]
    }
]
const TELEFONE_WHATSAPP = "5549999999999";

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

    // Remove qualquer prefixo 'page-' caso a chamada venha com ele
    const cleanId = (pageId || '').toString().replace(/^page-/, '');
    const targetPage = document.getElementById(`page-${cleanId}`);
    if (targetPage) {
        targetPage.classList.add('active');
    } else {
        console.error(`Erro: A página com ID 'page-${cleanId}' não foi encontrada no HTML.`);
    }

    if (cleanId === 'imoveis') {
        if (typeof executeSidebarSearch === 'function') {
            executeSidebarSearch();
        } else if (typeof executeSidebarSearchFallback === 'function') {
            executeSidebarSearchFallback();
        }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderVitrine(filtros = null) {
    const grid = document.getElementById('public-properties-grid');
    if (!grid) return; // Proteção: evita TypeError quando página/elemento não está presente
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
        const idOriginal = imoveis.indexOf(item);
        const cardHTML = `
            <div class="card">
                <div class="badge-status">${item.finalidade}</div>
                <img src="${item.imagem}" alt="${item.titulo}">
                <div class="card-body">
                    <h3>${item.titulo}</h3>
                    <p class="loc">📍 ${item.localizacao}</p>
                    <p class="price-tag">R$ ${item.preco}</p>
                    <button class="btn-details" onclick="openPropertyDetails(${idOriginal})">Tenho Interesse</button>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}

function renderAdminTable() {
    const tbody = document.getElementById('admin-table-body');
    if (!tbody) return; // Proteção: se não houver painel admin visível, não faz nada
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

function saveProperty(event) {
    event.preventDefault();
    const id = document.getElementById('form-property-id').value;

    // Recupera o código existente (se edição) ou gera novo
    let codigoGerado = '';
    if (id && imoveis[id] && imoveis[id].codigo) {
        codigoGerado = imoveis[id].codigo;
    } else {
        codigoGerado = 'REF-' + Math.floor(1000 + Math.random() * 9000);
    }

    const propertyData = {
        codigo: codigoGerado,
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
        areaTotal: document.getElementById('form-area-total').value ? document.getElementById('form-area-total').value + ' m²' : 'N/A',
        areaConstruida: document.getElementById('form-area-built').value ? document.getElementById('form-area-built').value + ' m²' : 'N/A',
        outrosComodos: document.getElementById('form-others').value || ''
    };

    // Atualiza localmente para feedback rápido
    if (id) {
        imoveis[id] = propertyData;
    } else {
        imoveis.push(propertyData);
    }
    if (typeof saveImoveisToStorage === 'function') saveImoveisToStorage();
    if (typeof renderAdminTable === 'function') renderAdminTable();
    if (typeof executeSidebarSearch === 'function') executeSidebarSearch();

    // Envia os dados para o backend (tentativa assíncrona)
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
            alert(`Imóvel salvo com sucesso sob o código: ${codigoGerado}`);
        } else {
            alert('Erro ao salvar no servidor: ' + data.mensagem);
        }
    })
    .catch(err => {
        console.warn('Falha ao gravar no servidor, salvado localmente:', err);
        alert(`Imóvel salvo localmente sob o código: ${codigoGerado} (falha ao sincronizar com servidor)`);
    });
}

function createPropertyCard(item, index) {
    return `
        <div class="property-card" onclick="openPropertyDetails(${index})">
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
                    </div>
            </div>
        </div>
    `;
}

function openPropertyDetails(index) {
    const item = imoveis[index];
    if (!item) return;

    document.getElementById('detalhe-ref-topo').innerText = item.codigo || 'REF-NOVA';
    document.getElementById('detalhe-titulo').innerText = item.titulo;
    document.getElementById('detalhe-localizacao').innerText = `📍 ${item.localizacao}`;
    document.getElementById('detalhe-imagem').src = item.imagem;
    
    document.getElementById('detalhe-quartos').innerText = item.quartos || '0';
    document.getElementById('detalhe-banheiros').innerText = item.banheiros || '0';
    document.getElementById('detalhe-salas').innerText = item.salas || '0';
    document.getElementById('detalhe-cozinhas').innerText = item.cozinhas || '0';
    document.getElementById('detalhe-vagas').innerText = item.garagem || '0';
    document.getElementById('detalhe-area-total').innerText = item.areaTotal || 'N/A';
    document.getElementById('detalhe-area-construida').innerText = item.areaConstruida || 'N/A';
    document.getElementById('detalhe-descricao').innerText = item.outrosComodos || 'Imóvel de alto padrão perfeitamente acabado, pronto para habitação.';
    document.getElementById('detalhe-preco').innerText = `R$ ${item.preco}`;
    
    const badge = document.getElementById('detalhe-badge');
    badge.innerText = item.finalidade;
    badge.className = `badge-status ${item.finalidade === 'Aluguel' ? 'badge-rent' : 'badge-sale'}`;

    const mensagemZap = `Olá! Gostaria de receber mais informações sobre o imóvel ${item.titulo} (Código: ${item.codigo})`;
    document.getElementById('detalhe-btn-whatsapp').href = `https://wa.me/5549999999999?text=${encodeURIComponent(mensagemZap)}`;

    // =========================================================================
    // LOGICA ADICIONADA: GERAR SUGESTÕES DE IMÓVEIS (OUTRAS OPÇÕES)
    // =========================================================================
    const relatedContainer = document.getElementById('related-properties-grid');
    if (relatedContainer) {
        // Filtra para NÃO mostrar o próprio imóvel que já está aberto na tela
        let semelhantes = imoveis.filter((_, idx) => idx !== index);

        // Prioriza imóveis que tenham a mesma finalidade (Venda com Venda, Aluguel com Aluguel)
        let doMesmoStatus = semelhantes.filter(imovel => imovel.finalidade === item.finalidade);
        
        // Se houver pelo menos 3 da mesma finalidade usa eles, senão usa os gerais do catálogo
        let listaFinalSugestoes = doMesmoStatus.length >= 3 ? doMesmoStatus : semelhantes;

        // Limita a exibição para no máximo 3 imóveis no rodapé
        let topSugestoes = listaFinalSugestoes.slice(0, 3);

                if (topSugestoes.length === 0) {
            relatedContainer.innerHTML = `<p style="color: #888;">Nenhuma outra opção disponível no momento.</p>`;
        } else {
            relatedContainer.innerHTML = topSugestoes.map(sugestao => {
                const idOriginal = imoveis.indexOf(sugestao);
                return `
                    <div class="property-card" onclick="openPropertyDetails(${idOriginal})">
                        <div class="property-image-wrapper">
                            <img src="${sugestao.imagem}" class="property-card-img">
                            <span class="badge-status ${sugestao.finalidade === 'Aluguel' ? 'badge-rent' : 'badge-sale'}">${sugestao.finalidade}</span>
                        </div>
                        <div class="property-card-info">
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                <span class="property-card-category">${sugestao.categoria}</span>
                                <span style="color:#c5a059; font-size:11px; font-weight:700;">${sugestao.codigo || ''}</span>
                            </div>
                            <h3 class="property-card-title">${sugestao.titulo}</h3>
                            <p class="property-card-location">📍 ${sugestao.localizacao}</p>
                            <div class="property-card-footer">
                                <span class="property-card-price">R$ ${sugestao.preco}</span>
                                <span class="btn-card-contact" style="font-size:12px;">Ver Detalhes</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    // Move a visualização do usuário para o topo da página ao abrir um imóvel
    // Atualiza o bloco de mapa e o formulário de captura com os dados deste imóvel
    if (typeof updateMapsAndLead === 'function') updateMapsAndLead(item);

    // Move a visualização do usuário para o topo da página ao abrir um imóvel
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Transiciona para a tela de detalhes
    showPage('detalhes');
}

// Compatibilidade: wrapper simples que delega para a função completa
function abrirDetalhesImovel(id) {
    if (typeof openPropertyDetails === 'function') {
        openPropertyDetails(id);
    }
    // Garante que a navegação use apenas o nome limpo da página
    if (typeof navegarPara === 'function') navegarPara('detalhes');
}

// INSERIR BLOCO PARA MAPS E FORM NO OPENPROPERTYDETAILS
// (colocado como função auxiliar para manter o fluxo e evitar duplicação)
function updateMapsAndLead(item) {
    // 1. Descobre o nome do bairro baseado no campo localizacao
    const enderecoCompleto = item.localizacao || 'Região';
    const primeiraParte = enderecoCompleto.split(',')[0].trim();

    // Atualiza o título da região
    const regiaoTituloElem = document.getElementById('detalhe-regiao-titulo');
    if (regiaoTituloElem) regiaoTituloElem.innerText = `Conheça a região do bairro ${primeiraParte}`;

    // Monta o link de pesquisa do Google Maps
    const stringBuscaMaps = encodeURIComponent(`${enderecoCompleto}`);
    const mapsBtn = document.getElementById('detalhe-btn-maps');
    if (mapsBtn) mapsBtn.href = `https://www.google.com/maps/search/?api=1&query=${stringBuscaMaps}`;
}

function handleLeadSubmit(event) {
    event.preventDefault();
    alert('Obrigado pelo interesse! Nossa equipe de especialistas entrará em contato em breve.');
    event.target.reset();
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
    const urlCompleta = `https://wa.me/${TELEFONE_WHATSAPP}?text=${encodeURIComponent(textoMensagem)}`;
    
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

// removido window.onload em favor de DOMContentLoaded consolidado

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

    const statusElem = document.getElementById('search-status');
    if (statusElem) statusElem.value = statusValue;

    const local = document.getElementById('search-city')?.value || "";
    const categoria = document.getElementById('search-category')?.value || 'todos';
    renderVitrine({ status: statusValue, categoria, local });
}

function executeSidebarSearch() {
    const status = document.getElementById('sidebar-status').value;
    const category = document.getElementById('sidebar-category').value;
    const city = document.getElementById('sidebar-city').value.toLowerCase();
    
    // Nova captura via Radio Buttons (Pega o valor do botão selecionado. Se nenhum, será 'todos')
    const bedrooms = document.querySelector('input[name="sidebar-bedrooms"]:checked')?.value || 'todos';
    const bathrooms = document.querySelector('input[name="sidebar-bathrooms"]:checked')?.value || 'todos';
    const garages = document.querySelector('input[name="sidebar-garages"]:checked')?.value || 'todos';

    // Captura preço e áreas
    const priceMin = parseFloat(document.getElementById('sidebar-price-min').value) || 0;
    const priceMax = parseFloat(document.getElementById('sidebar-price-max').value) || Infinity;
    const areaMin = parseFloat(document.getElementById('sidebar-area-min')?.value) || 0;
    const areaMax = parseFloat(document.getElementById('sidebar-area-max')?.value) || Infinity;

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
    if (areaMin > 0) params.set('area_min', areaMin);
    if (areaMax < Infinity) params.set('area_max', areaMax);

    fetch(`buscar_imoveis.php?${params.toString()}`)
        .then(res => res.json())
        .then(data => {
            const gridContainer = document.getElementById('catalog-properties-grid');
            if (Array.isArray(data)) {
                const counterEl = document.getElementById('catalog-counter');
                if (counterEl) counterEl.innerText = `${data.length} Imóveis encontrados`;
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
    const bedrooms = document.querySelector('input[name="sidebar-bedrooms"]:checked')?.value || 'todos';
    const bathrooms = document.querySelector('input[name="sidebar-bathrooms"]:checked')?.value || 'todos';
    const garages = document.querySelector('input[name="sidebar-garages"]:checked')?.value || 'todos';
    const priceMin = parseFloat(document.getElementById('sidebar-price-min').value) || 0;
    const priceMax = parseFloat(document.getElementById('sidebar-price-max').value) || Infinity;
    const areaMin = parseFloat(document.getElementById('sidebar-area-min')?.value) || 0;
    const areaMax = parseFloat(document.getElementById('sidebar-area-max')?.value) || Infinity;

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

    // Filtro da nova Área
    if (areaMin > 0 || areaMax < Infinity) {
        filtrados = filtrados.filter(item => {
            const area = parseFloat(String(item.areaTotal || '').replace(/[^0-9.]/g, '')) || 0;
            return area >= areaMin && area <= areaMax;
        });
    }
    const counter = document.getElementById('catalog-counter');
    if (counter) counter.innerText = `${filtrados.length} Imóveis encontrados`;
    const gridContainer = document.getElementById('catalog-properties-grid');
    if (gridContainer) gridContainer.innerHTML = filtrados.map((item, index) => createPropertyCard(item, index)).join('');
}

function clearSidebarFilters() {
    document.getElementById('sidebar-status').value = 'todos';
    document.getElementById('sidebar-category').value = 'todos';
    document.getElementById('sidebar-city').value = '';
    // Desmarcar todos os botões rádio da sidebar
    document.querySelectorAll('input[name^="sidebar-"][type="radio"]').forEach(r => r.checked = false);
    // Limpa áreas
    document.getElementById('sidebar-area-min').value = '';
    document.getElementById('sidebar-area-max').value = '';
    document.getElementById('sidebar-price-min').value = '';
    document.getElementById('sidebar-price-max').value = '';
    executeSidebarSearch();
}

function sortCatalogProperties() {
    executeSidebarSearch();
}

// Execução segura ao carregar o DOM: carrega dados, renderiza e inicializa a dropzone
window.addEventListener('DOMContentLoaded', () => {
    if (typeof loadImoveisFromStorage === 'function') loadImoveisFromStorage();
    renderVitrine();
    renderAdminTable();

});

// Função para pré-visualizar a imagem de upload na página 'Anuncie'
function previewImage(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('image-preview');
        const wrapper = document.getElementById('upload-content-wrapper');
        if (output) {
            output.src = reader.result;
            output.style.display = 'block'; // Mostra a imagem carregada
        }
        if (wrapper) wrapper.style.display = 'none'; // Oculta o texto de aviso
    }
    reader.readAsDataURL(file);
}

function scrollToContactForm() {
    // Rola a página até o formulário de captação que fica próximo ao rodapé
    const formElement = document.querySelector('.form-container') || document.getElementById('contactModal');
    if(formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
}

// Função de navegação usada pelo rodapé e header para garantir scroll ao topo
function navegarPara(pageId) {
    showPage(pageId);
}

// ------------------ Upload drag&drop + validação e otimização ------------------
let announceSelectedFile = null;
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png'];

function setupAnuncieDropZone() {
    const zone = document.querySelector('.upload-placeholder-zone');
    if (!zone) return;

    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        const file = e.dataTransfer.files && e.dataTransfer.files[0];
        if (file) handleSelectedFile(file);
    });
}

function handleSelectedFile(file) {
    const statusEl = document.getElementById('anuncio-status');
    if (!ALLOWED_TYPES.includes(file.type)) {
        if (statusEl) statusEl.innerText = 'Formato não suportado. Use JPG ou PNG.';
        return;
    }
    if (file.size > MAX_FILE_SIZE) {
        if (statusEl) statusEl.innerText = 'Arquivo muito grande. Máx 5MB.';
        return;
    }
    announceSelectedFile = file;
    // mostra preview
    const fakeEvent = { target: { files: [file] } };
    previewImage(fakeEvent);
    if (statusEl) statusEl.innerText = 'Imagem pronta para upload.';
}

// Otimiza imagem redimensionando para largura máxima (ex: 1600px) e compressão JPG
function optimizeImageFile(file, maxWidth = 1600, quality = 0.8) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const reader = new FileReader();
        reader.onload = (ev) => {
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const scale = Math.min(1, maxWidth / img.width);
                canvas.width = Math.round(img.width * scale);
                canvas.height = Math.round(img.height * scale);
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                canvas.toBlob((blob) => {
                    if (!blob) return reject(new Error('Falha ao gerar blob da imagem.'));
                    const optimizedFile = new File([blob], file.name.replace(/\.[^.]+$/, '.jpg'), { type: 'image/jpeg' });
                    resolve(optimizedFile);
                }, 'image/jpeg', quality);
            };
            img.onerror = (err) => reject(err);
            img.src = ev.target.result;
        };
        reader.onerror = (err) => reject(err);
        reader.readAsDataURL(file);
    });
}

// Função para levar até o formulário
function scrollToForm() {
    const formSection = document.getElementById('anuncie-form-section');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função que pega os dados e abre o WhatsApp
function submitAnuncio(event) {
    event.preventDefault();

    const nome = document.getElementById('anunciante-nome').value;
    const email = document.getElementById('anunciante-email').value;
    const tel = document.getElementById('anunciante-telefone').value;
    const titulo = document.getElementById('anuncio-titulo').value;
    const preco = document.getElementById('anuncio-preco').value;
    const msg = document.getElementById('anuncio-mensagem').value;

    const textoWhatsApp = `*Olá, Tatiane! Gostaria de anunciar meu imóvel:*%0A%0A` +
                          `👤 *Nome:* ${nome}%0A` +
                          `📧 *E-mail:* ${email}%0A` +
                          `📱 *Telefone:* ${tel}%0A` +
                          `🏠 *Título do Imóvel:* ${titulo}%0A` +
                          `💰 *Preço:* ${preco}%0A` +
                          `📝 *Observações:* ${msg}`;

    window.open(`https://wa.me/${TELEFONE_WHATSAPP}?text=${textoWhatsApp}`, '_blank');
}

window.addEventListener('DOMContentLoaded', () => {
    setupAnuncieDropZone();
});
