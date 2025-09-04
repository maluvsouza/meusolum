// Dados das lojas (simulando uma base de dados)
const lojasData = [
    {
        id: 'loja-001',
        nome: 'BioNaturais',
        categoria: 'Beleza & Cuidados',
        descricao: 'Especializada em cosméticos naturais e produtos de cuidado pessoal livres de químicos nocivos. Todos os produtos são testados e aprovados por dermatologistas.',
        regiao: 'sudeste',
        imagem: 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=800',
        logo: '🌿',
        produtos: 45,
        vendas: 1250,
        avaliacao: 4.8,
        avaliacoes: 127,
        produtos_lista: [
            { nome: 'Sabonete Lavanda', preco: 24.90, imagem: 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Shampoo Sólido', preco: 28.90, imagem: 'https://images.pexels.com/photos/7262771/pexels-photo-7262771.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Condicionador Coco', preco: 26.90, imagem: 'https://images.pexels.com/photos/7262774/pexels-photo-7262774.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Creme Hidratante', preco: 32.90, imagem: 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=200' }
        ]
    },
    {
        id: 'loja-002',
        nome: 'EcoClean',
        categoria: 'Produtos de Limpeza',
        descricao: 'Produtos de limpeza 100% biodegradáveis que cuidam da sua casa e do meio ambiente. Fórmulas concentradas e embalagens retornáveis.',
        regiao: 'sul',
        imagem: 'https://images.pexels.com/photos/4202388/pexels-photo-4202388.jpeg?auto=compress&cs=tinysrgb&w=800',
        logo: '🧽',
        produtos: 32,
        vendas: 890,
        avaliacao: 4.6,
        avaliacoes: 89,
        produtos_lista: [
            { nome: 'Detergente Coco', preco: 18.50, imagem: 'https://images.pexels.com/photos/4202388/pexels-photo-4202388.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Multiuso Citrus', preco: 22.90, imagem: 'https://images.pexels.com/photos/5217850/pexels-photo-5217850.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Amaciante Bamboo', preco: 19.90, imagem: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Sabão em Pó', preco: 35.90, imagem: 'https://images.pexels.com/photos/4202388/pexels-photo-4202388.jpeg?auto=compress&cs=tinysrgb&w=200' }
        ]
    },
    {
        id: 'loja-003',
        nome: 'Orgânicos da Terra',
        categoria: 'Alimentos Naturais',
        descricao: 'Alimentos orgânicos certificados, direto do produtor rural. Priorizamos a agricultura familiar e práticas regenerativas de cultivo.',
        regiao: 'centro-oeste',
        imagem: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=800',
        logo: '🌾',
        produtos: 78,
        vendas: 2100,
        avaliacao: 4.9,
        avaliacoes: 203,
        produtos_lista: [
            { nome: 'Quinoa Orgânica', preco: 32.90, imagem: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Mix de Nuts', preco: 45.90, imagem: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Açaí Orgânico', preco: 28.50, imagem: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Granola Artesanal', preco: 24.90, imagem: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200' }
        ]
    },
    {
        id: 'loja-004',
        nome: 'Verde Limpo',
        categoria: 'Produtos de Limpeza',
        descricao: 'Produtos de limpeza veganos e cruelty-free. Desenvolvemos soluções eficazes sem comprometer a segurança da sua família ou do planeta.',
        regiao: 'sudeste',
        imagem: 'https://images.pexels.com/photos/5217850/pexels-photo-5217850.jpeg?auto=compress&cs=tinysrgb&w=800',
        logo: '🧿',
        produtos: 28,
        vendas: 650,
        avaliacao: 4.5,
        avaliacoes: 94,
        produtos_lista: [
            { nome: 'Limpador Multiuso', preco: 22.90, imagem: 'https://images.pexels.com/photos/5217850/pexels-photo-5217850.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Desinfetante Natural', preco: 19.90, imagem: 'https://images.pexels.com/photos/4202388/pexels-photo-4202388.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Sabão Líquido', preco: 16.50, imagem: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=200' }
        ]
    },
    {
        id: 'loja-005',
        nome: 'NutriVida',
        categoria: 'Alimentos Naturais',
        descricao: 'Superfoods e suplementos naturais para uma vida mais saudável. Produtos selecionados com foco na máxima qualidade nutricional.',
        regiao: 'nordeste',
        imagem: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=800',
        logo: '🥜',
        produtos: 56,
        vendas: 1580,
        avaliacao: 4.8,
        avaliacoes: 178,
        produtos_lista: [
            { nome: 'Mix de Nuts Premium', preco: 45.90, imagem: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Chia Orgânica', preco: 28.90, imagem: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Protein Vegana', preco: 89.90, imagem: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=200' }
        ]
    },
    {
        id: 'loja-006',
        nome: 'Cabelos Naturais',
        categoria: 'Beleza & Cuidados',
        descricao: 'Especializada em produtos para cabelos cacheados e crespos com ingredientes 100% naturais. Livre de sulfatos, parabenos e petrolatos.',
        regiao: 'sudeste',
        imagem: 'https://images.pexels.com/photos/7262771/pexels-photo-7262771.jpeg?auto=compress&cs=tinysrgb&w=800',
        logo: '💇‍♀️',
        produtos: 38,
        vendas: 920,
        avaliacao: 4.7,
        avaliacoes: 156,
        produtos_lista: [
            { nome: 'Shampoo Sólido', preco: 28.90, imagem: 'https://images.pexels.com/photos/7262771/pexels-photo-7262771.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Leave-in Natural', preco: 35.90, imagem: 'https://images.pexels.com/photos/7262774/pexels-photo-7262774.jpeg?auto=compress&cs=tinysrgb&w=200' },
            { nome: 'Máscara Hidratante', preco: 42.90, imagem: 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=200' }
        ]
    }
];

let currentLojas = [...lojasData];

// Inicialização da página de lojas
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('lojas.php')) {
        loadLojas();
    }
});

function loadLojas() {
    const lojasGrid = document.getElementById('lojasGrid');
    if (!lojasGrid) return;
    
    if (currentLojas.length === 0) {
        lojasGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fas fa-store"></i>
                <h3>Nenhuma loja encontrada</h3>
                <p>Tente ajustar os filtros ou aguarde novas lojas parceiras</p>
            </div>
        `;
        return;
    }
    
    let lojasHTML = '';
    
    currentLojas.forEach(loja => {
        lojasHTML += `
            <div class="loja-card fade-in" data-categoria="${loja.categoria.toLowerCase()}" data-regiao="${loja.regiao}">
                <div class="loja-header">
                    <img src="${loja.imagem}" alt="${loja.nome}" loading="lazy">
                    <div class="loja-logo">${loja.logo}</div>
                </div>
                <div class="loja-info">
                    <h3 class="loja-nome">${loja.nome}</h3>
                    <div class="loja-categoria">${loja.categoria}</div>
                    <p class="loja-descricao">${loja.descricao}</p>
                    
                    <div class="loja-stats">
                        <div class="loja-stat">
                            <span class="stat-number">${loja.produtos}</span>
                            <span class="stat-label">Produtos</span>
                        </div>
                        <div class="loja-stat">
                            <span class="stat-number">${loja.vendas}</span>
                            <span class="stat-label">Vendas</span>
                        </div>
                        <div class="loja-stat">
                            <span class="stat-number">${loja.avaliacao}</span>
                            <span class="stat-label">Avaliação</span>
                        </div>
                    </div>
                    
                    <div class="loja-rating">
                        <div class="stars">
                            ${generateStars(loja.avaliacao)}
                        </div>
                        <span class="rating-text">(${loja.avaliacoes} avaliações)</span>
                    </div>
                    
                    <div class="loja-actions">
                        <button class="btn btn-outline" onclick="viewStore('${loja.id}')">
                            <i class="fas fa-eye"></i>
                            Ver Loja
                        </button>
                        <button class="btn btn-primary" onclick="viewProducts('${loja.id}')">
                            <i class="fas fa-shopping-bag"></i>
                            Produtos
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    lojasGrid.innerHTML = lojasHTML;
    observeElements();
}

function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt star"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star star"></i>';
    }
    
    return stars;
}

// Filtros
function filterLojas() {
    let filteredLojas = [...lojasData];
    
    const categoriaFilter = document.getElementById('categoriaFilter');
    const regiaoFilter = document.getElementById('regiaoFilter');
    
    // Filtrar por categoria
    if (categoriaFilter && categoriaFilter.value) {
        const categoria = categoriaFilter.value;
        filteredLojas = filteredLojas.filter(loja => {
            switch (categoria) {
                case 'limpeza':
                    return loja.categoria.includes('Limpeza');
                case 'beleza':
                    return loja.categoria.includes('Beleza');
                case 'alimentos':
                    return loja.categoria.includes('Alimentos');
                default:
                    return true;
            }
        });
    }
    
    // Filtrar por região
    if (regiaoFilter && regiaoFilter.value) {
        const regiao = regiaoFilter.value;
        filteredLojas = filteredLojas.filter(loja => loja.regiao === regiao);
    }
    
    currentLojas = filteredLojas;
    loadLojas();
    
    showNotification(`${filteredLojas.length} loja${filteredLojas.length !== 1 ? 's' : ''} encontrada${filteredLojas.length !== 1 ? 's' : ''}`, 'info');
}

function sortLojas() {
    const ordenarFilter = document.getElementById('ordenarFilter');
    if (!ordenarFilter || !ordenarFilter.value) return;
    
    const sortBy = ordenarFilter.value;
    
    switch (sortBy) {
        case 'nome':
            currentLojas.sort((a, b) => a.nome.localeCompare(b.nome));
            break;
        case 'avaliacao':
            currentLojas.sort((a, b) => b.avaliacao - a.avaliacao);
            break;
        case 'produtos':
            currentLojas.sort((a, b) => b.produtos - a.produtos);
            break;
        default:
            currentLojas.sort((a, b) => b.vendas - a.vendas);
    }
    
    loadLojas();
}

// Visualizar loja
function viewStore(lojaId) {
    const loja = lojasData.find(l => l.id === lojaId);
    if (!loja) return;
    
    const modal = document.getElementById('lojaModal');
    const overlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalLojaNome');
    const modalContent = document.getElementById('modalLojaContent');
    
    modalTitle.textContent = loja.nome;
    
    let produtosHTML = '';
    loja.produtos_lista.forEach(produto => {
        produtosHTML += `
            <div class="produto-modal-card">
                <div class="produto-modal-image">
                    <img src="${produto.imagem}" alt="${produto.nome}" loading="lazy">
                </div>
                <div class="produto-modal-info">
                    <div class="produto-modal-nome">${produto.nome}</div>
                    <div class="produto-modal-preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
                </div>
            </div>
        `;
    });
    
    modalContent.innerHTML = `
        <div class="loja-modal-info">
            <div class="loja-modal-image">
                <img src="${loja.imagem}" alt="${loja.nome}">
            </div>
            <div class="loja-modal-details">
                <h4>Sobre a ${loja.nome}</h4>
                <p>${loja.descricao}</p>
                <div class="modal-stats">
                    <div class="modal-stat">
                        <div class="stat-number">${loja.produtos}</div>
                        <div class="stat-label">Produtos</div>
                    </div>
                    <div class="modal-stat">
                        <div class="stat-number">${loja.vendas}</div>
                        <div class="stat-label">Vendas</div>
                    </div>
                    <div class="modal-stat">
                        <div class="stat-number">${loja.avaliacao}</div>
                        <div class="stat-label">Avaliação</div>
                    </div>
                    <div class="modal-stat">
                        <div class="stat-number">${loja.avaliacoes}</div>
                        <div class="stat-label">Avaliações</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="produtos-loja">
            <h4>Produtos da Loja</h4>
            <div class="produtos-modal-grid">
                ${produtosHTML}
            </div>
        </div>
    `;
    
    modal.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function viewProducts(lojaId) {
    const loja = lojasData.find(l => l.id === lojaId);
    if (!loja) return;
    
    // Simular navegação para produtos da loja
    showNotification(`Redirecionando para produtos da ${loja.nome}...`, 'info');
    setTimeout(() => {
        window.location.href = `produtos.php?loja=${lojaId}`;
    }, 1000);
}

function closeModal() {
    const modal = document.getElementById('lojaModal');
    const overlay = document.getElementById('modalOverlay');
    
    modal.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Fechar modal ao pressionar ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Inicializar observer para animações
function observeElements() {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}