<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sobre Nós - EcoMarket</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/sobre.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <?php 
    $current_page = 'sobre';
    include '../includes/header_pages.php'; 
    ?>

    <!-- Hero Section -->
    <section class="sobre-hero">
        <div class="container">
            <div class="hero-content">
                <h1>Sobre o EcoMarket</h1>
                <p>Conectando pessoas conscientes com produtos que fazem a diferença para o planeta</p>
            </div>
        </div>
    </section>

    <!-- Nossa Missão -->
    <section class="mission-section">
        <div class="container">
            <div class="mission-content">
                <div class="mission-text">
                    <h2>Nossa Missão</h2>
                    <p>O EcoMarket nasceu da necessidade de criar uma ponte entre consumidores conscientes e produtos verdadeiramente sustentáveis. Acreditamos que pequenas escolhas diárias podem gerar grandes transformações ambientais.</p>
                    <p>Nosso objetivo é democratizar o acesso a produtos ecológicos, facilitando a vida de quem quer fazer escolhas mais sustentáveis sem abrir mão da qualidade e praticidade.</p>
                    
                    <div class="mission-stats">
                        <div class="mission-stat">
                            <div class="stat-icon">
                                <i class="fas fa-recycle"></i>
                            </div>
                            <div>
                                <h3>100% Sustentável</h3>
                                <p>Todos os produtos passam por rigorosa curadoria</p>
                            </div>
                        </div>
                        <div class="mission-stat">
                            <div class="stat-icon">
                                <i class="fas fa-leaf"></i>
                            </div>
                            <div>
                                <h3>Impacto Positivo</h3>
                                <p>Cada compra contribui para um planeta mais verde</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mission-image">
                    <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Sustentabilidade">
                </div>
            </div>
        </div>
    </section>

    <!-- Nossa Equipe -->
    <section class="team-section">
        <div class="container">
            <h2>Nossa Equipe</h2>
            <p class="team-subtitle">Conheça as pessoas por trás do EcoMarket que trabalham incansavelmente por um futuro mais sustentável</p>
            
            <div class="team-grid">
                <div class="team-member">
                    <div class="member-photo">
                        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Ana Silva">
                    </div>
                    <div class="member-info">
                        <h3>Ana Silva</h3>
                        <p class="member-role">CEO & Fundadora</p>
                        <p class="member-description">Especialista em sustentabilidade com 10 anos de experiência. Responsável pela visão estratégica e parcerias sustentáveis do marketplace.</p>
                        <div class="member-socials">
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>

                <div class="team-member">
                    <div class="member-photo">
                        <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Carlos Mendes">
                    </div>
                    <div class="member-info">
                        <h3>Carlos Mendes</h3>
                        <p class="member-role">CTO & Co-Fundador</p>
                        <p class="member-description">Desenvolvedor full-stack apaixonado por tecnologia verde. Lidera o desenvolvimento da plataforma e inovações tecnológicas.</p>
                        <div class="member-socials">
                            <a href="#"><i class="fab fa-github"></i></a>
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div class="team-member">
                    <div class="member-photo">
                        <img src="https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Maria Santos">
                    </div>
                    <div class="member-info">
                        <h3>Maria Santos</h3>
                        <p class="member-role">Head de Marketing</p>
                        <p class="member-description">Especialista em marketing digital sustentável. Responsável por conectar marcas eco-friendly com consumidores conscientes.</p>
                        <div class="member-socials">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div class="team-member">
                    <div class="member-photo">
                        <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400" alt="João Pereira">
                    </div>
                    <div class="member-info">
                        <h3>João Pereira</h3>
                        <p class="member-role">Head de Curadoria</p>
                        <p class="member-description">Biólogo e consultor em sustentabilidade. Garante que todos os produtos atendam aos mais altos padrões ecológicos.</p>
                        <div class="member-socials">
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div class="team-member">
                    <div class="member-photo">
                        <img src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Laura Costa">
                    </div>
                    <div class="member-info">
                        <h3>Laura Costa</h3>
                        <p class="member-role">UX/UI Designer</p>
                        <p class="member-description">Designer focada em experiências sustentáveis. Cria interfaces intuitivas que promovem escolhas conscientes.</p>
                        <div class="member-socials">
                            <a href="#"><i class="fab fa-dribbble"></i></a>
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>

                <div class="team-member">
                    <div class="member-photo">
                        <img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Pedro Oliveira">
                    </div>
                    <div class="member-info">
                        <h3>Pedro Oliveira</h3>
                        <p class="member-role">Head de Operações</p>
                        <p class="member-description">Especialista em logística sustentável. Garante que toda a operação siga práticas ambientalmente responsáveis.</p>
                        <div class="member-socials">
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Nossos Valores -->
    <section class="values-section">
        <div class="container">
            <h2>Nossos Valores</h2>
            <div class="values-grid">
                <div class="value-item">
                    <div class="value-icon">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h3>Transparência</h3>
                    <p>Informações claras sobre origem, produção e impacto ambiental de cada produto</p>
                </div>
                <div class="value-item">
                    <div class="value-icon">
                        <i class="fas fa-hands-helping"></i>
                    </div>
                    <h3>Comunidade</h3>
                    <p>Apoiamos pequenos produtores e empreendedores comprometidos com a sustentabilidade</p>
                </div>
                <div class="value-item">
                    <div class="value-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Qualidade</h3>
                    <p>Rigorosos critérios de seleção garantem produtos de alta qualidade e certificação</p>
                </div>
                <div class="value-item">
                    <div class="value-icon">
                        <i class="fas fa-globe"></i>
                    </div>
                    <h3>Impacto Global</h3>
                    <p>Cada venda contribui para projetos ambientais e comunidades sustentáveis</p>
                </div>
            </div>
        </div>
    </section>

    <?php include '../includes/footer.php'; ?>

    <script src="../js/main.js"></script>
</body>
</html>