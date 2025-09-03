// Estado Global da Aplicação
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    updateCounters();
    loadCartContent();
    loadFavoritesContent();
});

// Navegação
function navigateTo(page) {
    if (page.startsWith('pages/') || page === 'index.php') {
        window.location.href = page;
    } else {
        window.location.href = `pages/${page}`;
    }
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    
    if (mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        overlay.classList.remove('show');
    } else {
        mobileMenu.classList.add('show');
        overlay.classList.add('show');
    }
}

// Busca
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    
    if (query) {
        showNotification(`Buscando por: "${query}"`, 'info');
        // Aqui você implementaria a lógica de busca real
        setTimeout(() => {
            window.location.href = `pages/produtos.php?search=${encodeURIComponent(query)}`;
        }, 500);
    }
}

// Enter key na busca
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});

// Carrinho
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    const favoritesSidebar = document.getElementById('favoritesSidebar');
    
    // Fechar favoritos se estiver aberto
    favoritesSidebar.classList.remove('open');
    
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

function addToCart(productId, productName, productPrice, productImage) {
    const existingItem = cartItems.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        showNotification('Quantidade atualizada no carrinho!', 'success');
    } else {
        cartItems.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
        showNotification('Produto adicionado ao carrinho!', 'success');
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCounters();
    loadCartContent();
}

function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCounters();
    loadCartContent();
    showNotification('Produto removido do carrinho', 'info');
}

function updateCartQuantity(productId, newQuantity) {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            updateCounters();
            loadCartContent();
        }
    }
}

function loadCartContent() {
    const cartContent = document.getElementById('cartContent');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartContent) return;
    
    if (cartItems.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Seu carrinho está vazio</p>
                <p class="empty-cart-subtitle">Adicione produtos sustentáveis e faça a diferença!</p>
            </div>
        `;
        if (cartTotal) cartTotal.textContent = '0,00';
        return;
    }
    
    let total = 0;
    let cartHTML = '<div class="cart-items">';
    
    cartItems.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=200'">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>R$ ${item.price.toFixed(2)}</p>
                    <div class="quantity-controls">
                        <button onclick="updateCartQuantity('${item.id}', ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQuantity('${item.id}', ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <button onclick="removeFromCart('${item.id}')" class="remove-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    cartHTML += '</div>';
    cartContent.innerHTML = cartHTML;
    
    if (cartTotal) {
        cartTotal.textContent = total.toFixed(2).replace('.', ',');
    }
}

// Favoritos
function toggleFavorites() {
    const favoritesSidebar = document.getElementById('favoritesSidebar');
    const overlay = document.getElementById('overlay');
    const cartSidebar = document.getElementById('cartSidebar');
    
    // Fechar carrinho se estiver aberto
    cartSidebar.classList.remove('open');
    
    favoritesSidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

function addToFavorites(productId, productName, productPrice, productImage) {
    const existingItem = favoriteItems.find(item => item.id === productId);
    
    if (existingItem) {
        // Remover dos favoritos
        favoriteItems = favoriteItems.filter(item => item.id !== productId);
        showNotification('Produto removido dos favoritos', 'info');
    } else {
        // Adicionar aos favoritos
        favoriteItems.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage
        });
        showNotification('Produto adicionado aos favoritos!', 'success');
    }
    
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    updateCounters();
    loadFavoritesContent();
    updateFavoriteButtons();
}

function loadFavoritesContent() {
    const favoritesContent = document.getElementById('favoritesContent');
    
    if (!favoritesContent) return;
    
    if (favoriteItems.length === 0) {
        favoritesContent.innerHTML = `
            <div class="empty-favorites">
                <i class="fas fa-heart"></i>
                <p>Nenhum favorito ainda</p>
                <p class="empty-favorites-subtitle">Salve produtos que você ama!</p>
            </div>
        `;
        return;
    }
    
    let favoritesHTML = '<div class="favorites-items">';
    
    favoriteItems.forEach(item => {
        favoritesHTML += `
            <div class="favorite-item">
                <div class="favorite-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=200'">
                </div>
                <div class="favorite-item-info">
                    <h4>${item.name}</h4>
                    <p>R$ ${item.price.toFixed(2)}</p>
                    <div class="favorite-actions">
                        <button onclick="addToCart('${item.id}', '${item.name}', ${item.price}, '${item.image}')" class="btn btn-small btn-primary">
                            <i class="fas fa-cart-plus"></i>
                        </button>
                        <button onclick="addToFavorites('${item.id}', '${item.name}', ${item.price}, '${item.image}')" class="btn btn-small btn-outline">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    favoritesHTML += '</div>';
    favoritesContent.innerHTML = favoritesHTML;
}

function updateFavoriteButtons() {
    const favoriteButtons = document.querySelectorAll('[data-product-id]');
    favoriteButtons.forEach(button => {
        const productId = button.dataset.productId;
        const isFavorite = favoriteItems.some(item => item.id === productId);
        
        if (isFavorite) {
            button.classList.add('active');
            button.innerHTML = '<i class="fas fa-heart"></i>';
        } else {
            button.classList.remove('active');
            button.innerHTML = '<i class="far fa-heart"></i>';
        }
    });
}

// Atualizar contadores
function updateCounters() {
    const cartCounter = document.getElementById('cartCounter');
    const favoritesCounter = document.getElementById('favoritesCounter');
    
    if (cartCounter) {
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        cartCounter.textContent = totalItems;
    }
    
    if (favoritesCounter) {
        favoritesCounter.textContent = favoriteItems.length;
    }
}

// Fechar sidebars
function closeSidebars() {
    const cartSidebar = document.getElementById('cartSidebar');
    const favoritesSidebar = document.getElementById('favoritesSidebar');
    const overlay = document.getElementById('overlay');
    const mobileMenu = document.getElementById('mobileMenu');
    
    cartSidebar.classList.remove('open');
    favoritesSidebar.classList.remove('open');
    mobileMenu.classList.remove('show');
    overlay.classList.remove('show');
}

// Notificações
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = type === 'success' ? 'check-circle' : 
                 type === 'error' ? 'exclamation-circle' : 'info-circle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Newsletter
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();
    
    if (!email) {
        showNotification('Por favor, insira um email válido', 'error');
        return;
    }
    
    // Simular inscrição
    emailInput.value = '';
    showNotification('Inscrição realizada com sucesso! Você receberá novidades em breve.', 'success');
}

// Funções de utilidade
function showComingSoon() {
    showNotification('Funcionalidade em desenvolvimento! Em breve disponível.', 'info');
}

function formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
}

function generateRandomId() {
    return Math.random().toString(36).substr(2, 9);
}

// Animações de scroll
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

// Chamar observeElements quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', observeElements);

// Estilos adicionais para cart e favorites
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .cart-items, .favorites-items {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        
        .cart-item, .favorite-item {
            display: flex;
            gap: 12px;
            padding: 16px;
            background: var(--light-gray);
            border-radius: 8px;
            align-items: center;
        }
        
        .cart-item-image, .favorite-item-image {
            width: 60px;
            height: 60px;
            border-radius: 8px;
            overflow: hidden;
            flex-shrink: 0;
        }
        
        .cart-item-image img, .favorite-item-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .cart-item-info, .favorite-item-info {
            flex: 1;
        }
        
        .cart-item-info h4, .favorite-item-info h4 {
            color: var(--primary-blue);
            font-weight: 600;
            margin-bottom: 4px;
            font-size: 14px;
        }
        
        .cart-item-info p, .favorite-item-info p {
            color: var(--primary-orange);
            font-weight: 600;
            margin-bottom: 8px;
        }
        
        .quantity-controls {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .quantity-controls button {
            width: 24px;
            height: 24px;
            border: none;
            background: var(--primary-blue);
            color: white;
            border-radius: 4px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }
        
        .quantity-controls span {
            font-weight: 600;
            min-width: 20px;
            text-align: center;
        }
        
        .remove-btn {
            background: #EF4444;
            color: white;
            border: none;
            padding: 8px;
            border-radius: 6px;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .remove-btn:hover {
            background: #DC2626;
        }
        
        .favorite-actions {
            display: flex;
            gap: 8px;
        }
        
        .favorite-actions button {
            padding: 6px 12px;
            font-size: 12px;
        }
    `;
    document.head.appendChild(style);
});