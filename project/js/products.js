// Dados dos produtos (simulando uma base de dados)
const productsData = [
    {
        id: 'prod-001',
        name: 'Sabonete Natural de Lavanda',
        description: 'Sabonete artesanal feito com ingredientes 100% naturais e óleo essencial de lavanda.',
        price: 24.90,
        category: 'beleza',
        image: 'https://images.pexels.com/photos/4465829/pexels-photo-4465829.jpeg?auto=compress&cs=tinysrgb&w=400',
        store: 'BioNaturais',
        rating: 4.8,
        reviews: 127,
        badge: 'Orgânico'
    },
    {
        id: 'prod-002',
        name: 'Detergente Biodegradável Coco',
        description: 'Detergente concentrado feito à base de coco, eficiente e amigável ao meio ambiente.',
        price: 18.50,
        category: 'limpeza',
        image: 'https://images.pexels.com/photos/4202388/pexels-photo-4202388.jpeg?auto=compress&cs=tinysrgb&w=400',
        store: 'EcoClean',
        rating: 4.6,
        reviews: 89,
        badge: 'Concentrado'
    },
    {
        id: 'prod-003',
        name: 'Quinoa Orgânica Premium',
        description: 'Quinoa orgânica cultivada de forma sustentável, rica em proteínas e nutrientes.',
        price: 32.90,
        category: 'alimentos',
        image: 'https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?auto=compress&cs=tinysrgb&w=400',
        store: 'Orgânicos da Terra',
        rating: 4.9,
        reviews: 203,
        badge: 'Premium'
    },
    {
        id: 'prod-004',
        name: 'Shampoo Sólido Sem Sulfato',
        description: 'Shampoo em barra sem sulfatos, parabenos ou conservantes sintéticos.',
        price: 28.90,
        category: 'beleza',
        image: 'https://images.pexels.com/photos/7262771/pexels-photo-7262771.jpeg?auto=compress&cs=tinysrgb&w=400',
        store: 'Cabelos Naturais',
        rating: 4.7,
        reviews: 156,
        badge: 'Zero Waste'
    },
    {
        id: 'prod-005',
        name: 'Multiuso Ecológico Citrus',
        description: 'Produto de limpeza multiuso com fórmula vegana e fragrância natural de citrus.',
        price: 22.90,
        category: 'limpeza',
        image: 'https://images.pexels.com/photos/5217850/pexels-photo-5217850.jpeg?auto=compress&cs=tinysrgb&w=400',
        store: 'Verde Limpo',
        rating: 4.5,
        reviews: 94,
        badge: 'Vegano'
    },
    {
        id: 'prod-006',
        name: 'Mix de Nuts Orgânicos',
        description: 'Mistura especial de castanhas, nozes e amêndoas orgânicas sem conservantes.',
        price: 45.90,
        category: 'alimentos',
        image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400',
        store: 'NutriVida',
        rating: 4.8,
        reviews: 178,
        badge: 'Superfood'
    },
    {
        id: 'prod-007',
        name: 'Condicionador Vegano Coco',
        description: 'Condicionador cremoso com óleo de coco orgânico para cabelos hidratados.',
        price: 26.90,
        category: 'beleza',
        image: 'https://images.pexels.com/photos/7262774/pexels-photo-7262774.jpeg?auto=compress&cs=tinysrgb&w=400',
        store: 'Cabelos Naturais',
        rating: 4.6,
        reviews: 142,
        badge: 'Hidratante'
    },
    {
        id: 'prod-008',
        name: 'Amaciante Natural Bamboo',
        description: 'Amaciante concentrado feito com extratos de bambu, suave e biodegradável.',
        price: 19.90,
        category: 'limpeza',
        image: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=400',
        store: 'EcoClean',
        rating: 4.4,
        reviews: 76,
        badge: 'Concentrado'
    }
];

let currentProducts = [...productsData];
let currentCategory = '';

// Carregamento inicial dos produtos
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('produtos.php') || 
        window.location.pathname.includes('index.php') || 
        window.location.pathname === '/') {
        loadProducts();
    }
    
    // Verificar se há categoria na URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoria = urlParams.get('categoria');
    if (categoria) {
        filterByCategory(categoria);
    }
});

function loadProducts() {
    const productsGrid = document.getElementById('products-grid') || document.getElementById('produtosGrid');
    if (!productsGrid) return;
    
    if (currentProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-products" style="grid-column: 1 / -1;">
                <i class="fas fa-search"></i>
                <h3>Nenhum produto encontrado</h3>
                <p>Tente ajustar os filtros ou buscar por outros termos</p>
            </div>
        `;
        return;
    }
    
    const isListView = productsGrid.classList.contains('list-view');
    let productsHTML = '';
    
    currentProducts.forEach(product => {
        const isFavorite = favoriteItems.some(item => item.id === product.id);
        const favoriteIcon = isFavorite ? 'fas fa-heart' : 'far fa-heart';
        const favoriteClass = isFavorite ? 'active' : '';
        
        productsHTML += `
            <div class="product-card fade-in" data-category="${product.category}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <span class="product-badge">${product.badge}</span>
                </div>
                <div class="product-info">
                    <div class="product-store">${product.store}</div>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-rating">
                        <div class="rating-stars">
                            ${generateStars(product.rating)}
                        </div>
                        <span class="rating-count">(${product.reviews})</span>
                    </div>
                    <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                    <div class="product-actions">
                        <button class="btn btn-small btn-primary" onclick="addToCart('${product.id}', '${product.name}', ${product.price}, '${product.image}')">
                            <i class="fas fa-cart-plus"></i>
                            Comprar
                        </button>
                        <button class="btn-icon ${favoriteClass}" data-product-id="${product.id}" onclick="addToFavorites('${product.id}', '${product.name}', ${product.price}, '${product.image}')">
                            <i class="${favoriteIcon}"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    productsGrid.innerHTML = productsHTML;
    
    // Atualizar contador de produtos
    const produtosCount = document.getElementById('produtosCount');
    if (produtosCount) {
        const total = currentProducts.length;
        produtosCount.textContent = `${total} produto${total !== 1 ? 's' : ''} encontrado${total !== 1 ? 's' : ''}`;
    }
    
    // Reativar animações
    observeElements();
}

function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star rating-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt rating-star"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star rating-star"></i>';
    }
    
    return stars;
}

// Filtros
function filterByCategory(category) {
    currentCategory = category;
    
    // Atualizar tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    if (category === '') {
        document.querySelector('.tab-btn[onclick*="\'\'"]').classList.add('active');
        currentProducts = [...productsData];
    } else {
        document.querySelector(`.tab-btn[onclick*="'${category}'"]`).classList.add('active');
        currentProducts = productsData.filter(product => product.category === category);
    }
    
    loadProducts();
    showNotification(`Produtos filtrados: ${getCategoryDisplayName(category)}`, 'info');
}

function filterProducts() {
    let filteredProducts = [...productsData];
    
    // Filtrar por categoria
    if (currentCategory) {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }
    
    // Filtrar por preço
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
    
    currentProducts = filteredProducts;
    loadProducts();
}

function sortProducts() {
    const ordenarFilter = document.getElementById('ordenarFilter');
    if (!ordenarFilter || !ordenarFilter.value) return;
    
    const sortBy = ordenarFilter.value;
    
    switch (sortBy) {
        case 'preco-menor':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'preco-maior':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'nome':
            currentProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'avaliacao':
            currentProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            currentProducts = currentProducts.sort((a, b) => b.reviews - a.reviews);
    }
    
    loadProducts();
}

function changeView(viewType) {
    const productsGrid = document.getElementById('produtosGrid');
    const viewButtons = document.querySelectorAll('.view-btn');
    
    if (!productsGrid) return;
    
    viewButtons.forEach(btn => btn.classList.remove('active'));
    
    if (viewType === 'list') {
        productsGrid.classList.add('list-view');
        document.querySelector('.view-btn[onclick*="list"]').classList.add('active');
    } else {
        productsGrid.classList.remove('list-view');
        document.querySelector('.view-btn[onclick*="grid"]').classList.add('active');
    }
    
    loadProducts();
}

function getCategoryDisplayName(category) {
    switch (category) {
        case 'limpeza':
            return 'Produtos de Limpeza';
        case 'beleza':
            return 'Beleza & Cuidados';
        case 'alimentos':
            return 'Alimentos Naturais';
        default:
            return 'Todos os Produtos';
    }
}

// Para a página inicial
function filterProducts(category) {
    if (window.location.pathname.includes('index.php') || window.location.pathname === '/') {
        window.location.href = `pages/produtos.php?categoria=${category}`;
    } else {
        filterByCategory(category);
    }
}