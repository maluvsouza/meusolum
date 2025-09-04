<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lojas Parceiras - EcoMarket</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/lojas.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <?php 
    $current_page = 'lojas';
    include '../includes/header_pages.php'; 
    ?>

    <!-- Hero Section -->
    <section class="lojas-hero">
        <div class="container">
            <h1>Nossas Lojas Parceiras</h1>
            <p>Conheça os empreendedores sustentáveis que fazem parte da nossa comunidade</p>
        </div>
    </section>

    <!-- Filtros -->
    <section class="filtros-section">
        <div class="container">
            <div class="filtros-container">
                <div class="filtro-grupo">
                    <label>Categoria:</label>
                    <select id="categoriaFilter" onchange="filterLojas()">
                        <option value="">Todas as Categorias</option>
                        <option value="limpeza">Produtos de Limpeza</option>
                        <option value="beleza">Beleza & Cuidados</option>
                        <option value="alimentos">Alimentos Naturais</option>
                    </select>
                </div>
                <div class="filtro-grupo">
                    <label>Região:</label>
                    <select id="regiaoFilter" onchange="filterLojas()">
                        <option value="">Todas as Regiões</option>
                        <option value="sudeste">Sudeste</option>
                        <option value="sul">Sul</option>
                        <option value="nordeste">Nordeste</option>
                        <option value="centro-oeste">Centro-Oeste</option>
                        <option value="norte">Norte</option>
                    </select>
                </div>
                <div class="filtro-grupo">
                    <label>Ordenar por:</label>
                    <select id="ordenarFilter" onchange="sortLojas()">
                        <option value="relevancia">Relevância</option>
                        <option value="nome">Nome A-Z</option>
                        <option value="avaliacao">Melhor Avaliada</option>
                        <option value="produtos">Mais Produtos</option>
                    </select>
                </div>
            </div>
        </div>
    </section>

    <!-- Lista de Lojas -->
    <section class="lojas-section">
        <div class="container">
            <div class="lojas-grid" id="lojasGrid">
                <!-- Lojas serão carregadas via JavaScript -->
            </div>
        </div>
    </section>

    <!-- Modal Loja -->
    <div class="modal" id="lojaModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="modalLojaNome"></h3>
                <button onclick="closeModal()" class="close-modal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body" id="modalLojaContent">
                <!-- Conteúdo da loja será carregado aqui -->
            </div>
        </div>
    </div>

    <div class="overlay" id="modalOverlay" onclick="closeModal()"></div>

    <?php include '../includes/footer.php'; ?>

    <script src="../js/main.js"></script>
    <script src="../js/lojas.js"></script>
</body>
</html>