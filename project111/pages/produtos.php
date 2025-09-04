<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Produtos Sustentáveis - EcoMarket</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/produtos.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <?php 
    $current_page = 'produtos';
    include '../includes/header_pages.php'; 
    ?>

    <!-- Hero Section -->
    <section class="produtos-hero">
        <div class="container">
            <h1>Produtos Sustentáveis</h1>
            <p>Descubra nossa coleção completa de produtos ecológicos selecionados especialmente para você</p>
        </div>
    </section>

    <!-- Filtros e Busca -->
    <section class="filtros-produtos">
        <div class="container">
            <div class="filtros-row">
                <div class="filtros-left">
                    <div class="categoria-tabs">
                        <button class="tab-btn active" onclick="filterByCategory('')">Todos</button>
                        <button class="tab-btn" onclick="filterByCategory('limpeza')">Limpeza</button>
                        <button class="tab-btn" onclick="filterByCategory('beleza')">Beleza</button>
                        <button class="tab-btn" onclick="filterByCategory('alimentos')">Alimentos</button>
                    </div>
                </div>
                <div class="filtros-right">
                    <div class="filtro-preco">
                        <label>Preço:</label>
                        <select id="precoFilter" onchange="filterProducts()">
                            <option value="">Todos os preços</option>
                            <option value="0-25">Até R$ 25</option>
                            <option value="25-50">R$ 25 - R$ 50</option>
                            <option value="50-100">R$ 50 - R$ 100</option>
                            <option value="100+">Acima de R$ 100</option>
                        </select>
                    </div>
                    <div class="filtro-ordenar">
                        <label>Ordenar:</label>
                        <select id="ordenarFilter" onchange="sortProducts()">
                            <option value="relevancia">Relevância</option>
                            <option value="preco-menor">Menor Preço</option>
                            <option value="preco-maior">Maior Preço</option>
                            <option value="nome">Nome A-Z</option>
                            <option value="avaliacao">Melhor Avaliado</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Lista de Produtos -->
    <section class="produtos-lista">
        <div class="container">
            <div class="produtos-header">
                <div class="resultados-info">
                    <span id="produtosCount">Carregando produtos...</span>
                </div>
                <div class="view-toggle">
                    <button class="view-btn active" onclick="changeView('grid')" title="Visualização em Grade">
                        <i class="fas fa-th"></i>
                    </button>
                    <button class="view-btn" onclick="changeView('list')" title="Visualização em Lista">
                        <i class="fas fa-list"></i>
                    </button>
                </div>
            </div>
            
            <div class="produtos-grid" id="produtosGrid">
                <!-- Produtos serão carregados via JavaScript -->
            </div>

            <div class="loading-section" id="loadingSection" style="display: none;">
                <div class="loading"></div>
                <p>Carregando produtos...</p>
            </div>
        </div>
    </section>

    <?php include '../includes/footer.php'; ?>

    <script src="../js/main.js"></script>
    <script src="../js/produtos.js"></script>
</body>
</html>