<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EcoMarket - Marketplace de Produtos Sustentáveis</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/home.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>

<body>
    <?php include 'includes/header.php'; ?>

    <!-- Banner Principal -->
    <section class="hero-banner">
        <div class="hero-content">
            <div class="hero-text">
                <h1>Produtos Sustentáveis para um Futuro Melhor</h1>
                <p>Descubra uma ampla variedade de produtos ecológicos que cuidam de você e do planeta. Juntos,
                    construímos um mundo mais sustentável.</p>
                <div class="hero-buttons">
                    <a href="pages/produtos.php" class="btn btn-primary">Explorar Produtos</a>
                    <a href="pages/vendedor.php" class="btn btn-secondary">Seja um Vendedor</a>
                </div>
            </div>
            <div class="hero-image">
                <div class="eco-illustration">
                    <div class="leaf-1"></div>
                    <div class="leaf-2"></div>
                    <div class="leaf-3"></div>
                    <div class="leaf-4"></div>
                    <div class="leaf-5"></div>
                    <div class="earth-globe">
                        <img src="assets/banner/terra.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Categorias -->
    <section class="categories-section">
        <div class="container">
            <h2>Nossas Categorias</h2>
            <div class="categories-grid">
                <div class="category-card" onclick="filterProducts('limpeza')">
                    <div class="category-icon">
                        <i class="fas fa-spray-can"></i>
                    </div>
                    <h3>Produtos de Limpeza</h3>
                    <p>Produtos ecológicos para manter sua casa limpa sem agredir o meio ambiente</p>
                </div>
                <div class="category-card" onclick="filterProducts('beleza')">
                    <div class="category-icon">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <h3>Beleza & Cuidados</h3>
                    <p>Cosméticos naturais e produtos de cuidado pessoal livres de químicos</p>
                </div>
                <div class="category-card" onclick="filterProducts('alimentos')">
                    <div class="category-icon">
                        <i class="fas fa-leaf"></i>
                    </div>
                    <h3>Alimentos Naturais</h3>
                    <p>Alimentos orgânicos, superfoods e produtos naturais para sua saúde</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Produtos em Destaque -->
    <section class="featured-products">
        <div class="container">
            <h2>Produtos em Destaque</h2>
            <div class="products-grid" id="products-grid">
                <!-- Produtos serão carregados via JavaScript -->
            </div>
        </div>
    </section>

    <!-- Estatísticas -->
    <section class="stats-section">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">500+</div>
                    <div class="stat-label">Produtos Sustentáveis</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">150+</div>
                    <div class="stat-label">Vendedores Parceiros</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">10k+</div>
                    <div class="stat-label">Clientes Satisfeitos</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Lojas Cadastradas</div>
                </div>
            </div>
        </div>
    </section>

    <?php include 'includes/footer.php'; ?>

    <script src="js/main.js"></script>
    <script src="js/products.js"></script>
</body>

</html>