<header class="navbar">
    <div class="navbar-container">
        <div class="navbar-brand" onclick="navigateTo('index.php')">
            <div class="logo">
                <i class="fas fa-leaf"></i>
            </div>
            <span>EcoMarket</span>
        </div>

        <div class="navbar-search">
            <div class="search-box">
                <input type="text" id="searchInput" placeholder="Buscar produtos sustentáveis...">
                <button class="search-btn" onclick="performSearch()">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>

        <div class="navbar-actions">
            <div class="nav-item" onclick="navigateTo('pages/login.php')" title="Entrar">
                <i class="fas fa-user"></i>
                <span>Entrar</span>
            </div>
            <div class="nav-item" onclick="toggleFavorites()" title="Favoritos">
                <i class="fas fa-heart"></i>
                <span class="counter" id="favoritesCounter">0</span>
            </div>
            <div class="nav-item" onclick="toggleCart()" title="Carrinho">
                <i class="fas fa-shopping-cart"></i>
                <span class="counter" id="cartCounter">0</span>
            </div>
        </div>

        <div class="mobile-menu-toggle" onclick="toggleMobileMenu()">
            <i class="fas fa-bars"></i>
        </div>
    </div>

    <!-- Menu Mobile -->
    <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-search">
            <input type="text" placeholder="Buscar produtos...">
            <button><i class="fas fa-search"></i></button>
        </div>
        <div class="mobile-nav-items">
            <a href="index.php">Início</a>
            <a href="pages/produtos.php">Produtos</a>
            <a href="pages/lojas.php">Lojas</a>
            <a href="pages/sobre.php">Sobre Nós</a>
            <a href="pages/vendedor.php">Seja um Vendedor</a>
            <a href="pages/login.php">Entrar</a>
        </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="main-nav">
        <div class="container">
            <ul class="nav-links">
                <li><a href="index.php" class="active">Início</a></li>
                <li><a href="pages/produtos.php">Produtos</a></li>
                <li><a href="pages/lojas.php">Lojas</a></li>
                <li><a href="pages/sobre.php">Sobre Nós</a></li>
                <li><a href="pages/vendedor.php">Seja um Vendedor</a></li>
            </ul>
        </div>
    </nav>
</header>

<!-- Cart Sidebar -->
<div class="cart-sidebar" id="cartSidebar">
    <div class="cart-header">
        <h3>Carrinho de Compras</h3>
        <button onclick="toggleCart()" class="close-cart">
            <i class="fas fa-times"></i>
        </button>
    </div>
    <div class="cart-content" id="cartContent">
        <div class="empty-cart">
            <i class="fas fa-shopping-cart"></i>
            <p>Seu carrinho está vazio</p>
            <p class="empty-cart-subtitle">Adicione produtos sustentáveis e faça a diferença!</p>
        </div>
    </div>
    <div class="cart-footer">
        <div class="cart-total">
            <span>Total: R$ <span id="cartTotal">0,00</span></span>
        </div>
        <button class="btn btn-primary btn-full">Finalizar Compra</button>
    </div>
</div>

<!-- Favorites Sidebar -->
<div class="favorites-sidebar" id="favoritesSidebar">
    <div class="favorites-header">
        <h3>Produtos Favoritos</h3>
        <button onclick="toggleFavorites()" class="close-favorites">
            <i class="fas fa-times"></i>
        </button>
    </div>
    <div class="favorites-content" id="favoritesContent">
        <div class="empty-favorites">
            <i class="fas fa-heart"></i>
            <p>Nenhum favorito ainda</p>
            <p class="empty-favorites-subtitle">Salve produtos que você ama!</p>
        </div>
    </div>
</div>

<!-- Overlay -->
<div class="overlay" id="overlay" onclick="closeSidebars()"></div>