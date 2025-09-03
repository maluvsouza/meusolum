// Página específica de produtos
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('produtos.php')) {
        initProductsPage();
    }
});

function initProductsPage() {
    // Verificar parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('categoria');
    const search = urlParams.get('search');
    const loja = urlParams.get('loja');
    
    if (categoria) {
        filterByCategory(categoria);
        updateActiveTab(categoria);
    }
    
    if (search) {
        performProductSearch(search);
        document.getElementById('searchInput').value = search;
    }
    
    if (loja) {
        filterByStore(loja);
    }
    
    if (!categoria && !search && !loja) {
        currentProducts = [...productsData];
        loadProducts();
    }
}

function updateActiveTab(category) {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    if (category === '') {
        document.querySelector('.tab-btn[onclick*="\'\'"]').classList.add('active');
    } else {
        const targetBtn = document.querySelector(`.tab-btn[onclick*="'${category}'"]`);
        if (targetBtn) {
            targetBtn.classList.add('active');
        }
    }
}

function performProductSearch(searchTerm) {
    currentProducts = productsData.filter(product => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
               product.store.toLowerCase().includes(searchTerm.toLowerCase());
    });
    
    loadProducts();
    showNotification(`Resultados para: "${searchTerm}"`, 'info');
}

function filterByStore(storeId) {
    const loja = lojasData.find(l => l.id === storeId);
    if (!loja) return;
    
    // Filtrar produtos por loja
    currentProducts = productsData.filter(product => product.store === loja.nome);
    loadProducts();
    
    showNotification(`Produtos da loja ${loja.nome}`, 'info');
}

// Busca em tempo real
function setupSearchListener() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function(e) {
            clearTimeout(searchTimeout);
            const searchTerm = e.target.value.trim();
            
            if (searchTerm.length >= 2) {
                searchTimeout = setTimeout(() => {
                    performProductSearch(searchTerm);
                }, 500);
            } else if (searchTerm.length === 0) {
                currentProducts = [...productsData];
                if (currentCategory) {
                    currentProducts = currentProducts.filter(p => p.category === currentCategory);
                }
                loadProducts();
            }
        });
    }
}

// Configurar busca quando a página carregar
document.addEventListener('DOMContentLoaded', setupSearchListener);

// Função para adicionar mais produtos (simulando paginação)
function loadMoreProducts() {
    const loadingSection = document.getElementById('loadingSection');
    if (loadingSection) {
        loadingSection.style.display = 'flex';
        
        setTimeout(() => {
            // Simular carregamento de mais produtos
            showNotification('Todos os produtos foram carregados', 'info');
            loadingSection.style.display = 'none';
        }, 2000);
    }
}

// Scroll infinito (opcional)
function setupInfiniteScroll() {
    window.addEventListener('scroll', function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 1000) {
            // Próximo do final da página
            loadMoreProducts();
        }
    });
}

// Função para visualizar produto individual (modal ou página)
function viewProduct(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    showNotification(`Visualizando ${product.name}...`, 'info');
    // Aqui você implementaria a visualização detalhada do produto
}

// Filtros avançados
function applyAdvancedFilters() {
    let filteredProducts = [...productsData];
    
    // Filtro por categoria atual
    if (currentCategory) {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }
    
    // Filtro por preço
    const precoFilter = document.getElementById('precoFilter');
    if (precoFilter && precoFilter.value) {
        const priceRange = precoFilter.value;
        filteredProducts = filteredProducts.filter(product => {
            const price = product.price;
            switch (priceRange) {
                case '0-25':
                    return price <= 25;
                case '25-50':
                    return price > 25 && price <= 50;
                case '50-100':
                    return price > 50 && price <= 100;
                case '100+':
                    return price > 100;
                default:
                    return true;
            }
        });
    }
    
    // Filtro por avaliação (se implementado)
    const minRating = 4.0; // Exemplo
    // filteredProducts = filteredProducts.filter(product => product.rating >= minRating);
    
    currentProducts = filteredProducts;
    loadProducts();
}

// Comparação de produtos (funcionalidade futura)
let compareList = [];

function addToCompare(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    if (compareList.length >= 3) {
        showNotification('Você pode comparar no máximo 3 produtos', 'error');
        return;
    }
    
    if (compareList.find(p => p.id === productId)) {
        showNotification('Produto já está na comparação', 'error');
        return;
    }
    
    compareList.push(product);
    updateCompareButton();
    showNotification(`${product.name} adicionado à comparação`, 'success');
}

function updateCompareButton() {
    const compareButton = document.getElementById('compareButton');
    if (compareButton) {
        compareButton.textContent = `Comparar (${compareList.length})`;
        compareButton.style.display = compareList.length > 0 ? 'block' : 'none';
    }
}

// Produto rápido (visualização rápida)
function quickView(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    // Implementar visualização rápida em modal
    showNotification(`Visualização rápida: ${product.name}`, 'info');
}