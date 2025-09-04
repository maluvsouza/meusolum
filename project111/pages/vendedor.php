<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seja um Vendedor - EcoMarket</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/vendedor.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <?php 
    $current_page = 'vendedor';
    include '../includes/header_pages.php'; 
    ?>

    <!-- Hero Section -->
    <section class="vendedor-hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1>Venda seus Produtos Sustentáveis</h1>
                    <p>Faça parte da maior plataforma de produtos ecológicos do Brasil. Alcance milhares de consumidores conscientes e faça a diferença.</p>
                </div>
                <div class="hero-image">
                    <img src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Vendedor Sustentável">
                </div>
            </div>
        </div>
    </section>

    <!-- Benefícios -->
    <section class="benefits-section">
        <div class="container">
            <h2>Por que vender no EcoMarket?</h2>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Audiência Qualificada</h3>
                    <p>Acesso a milhares de consumidores que buscam ativamente produtos sustentáveis</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Crescimento Garantido</h3>
                    <p>Ferramentas de marketing e analytics para impulsionar suas vendas</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="fas fa-handshake"></i>
                    </div>
                    <h3>Suporte Completo</h3>
                    <p>Equipe dedicada para ajudar você em cada etapa do processo de venda</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                    <h3>Taxas Competitivas</h3>
                    <p>As menores taxas do mercado para maximizar seus lucros</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Formulário de Cadastro -->
    <section class="cadastro-section">
        <div class="container">
            <div class="cadastro-content">
                <div class="cadastro-info">
                    <h2>Cadastre sua Loja</h2>
                    <p>Preencha o formulário ao lado e nossa equipe entrará em contato em até 24 horas para aprovar seu cadastro.</p>
                    
                    <div class="processo-steps">
                        <div class="step">
                            <div class="step-number">1</div>
                            <div>
                                <h4>Cadastro</h4>
                                <p>Preencha suas informações</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">2</div>
                            <div>
                                <h4>Análise</h4>
                                <p>Verificamos os critérios sustentáveis</p>
                            </div>
                        </div>
                        <div class="step">
                            <div class="step-number">3</div>
                            <div>
                                <h4>Aprovação</h4>
                                <p>Sua loja fica disponível na plataforma</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="cadastro-form">
                    <form id="vendedorForm" onsubmit="submitVendedorForm(event)">
                        <div class="form-section">
                            <h3>Informações Pessoais</h3>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="nome">Nome Completo *</label>
                                    <input type="text" id="nome" name="nome" required>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email *</label>
                                    <input type="email" id="email" name="email" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="telefone">Telefone *</label>
                                    <input type="tel" id="telefone" name="telefone" required>
                                </div>
                                <div class="form-group">
                                    <label for="cpf">CPF *</label>
                                    <input type="text" id="cpf" name="cpf" required>
                                </div>
                            </div>
                        </div>

                        <div class="form-section">
                            <h3>Informações da Loja</h3>
                            <div class="form-group">
                                <label for="nomeLoja">Nome da Loja *</label>
                                <input type="text" id="nomeLoja" name="nomeLoja" required>
                            </div>
                            <div class="form-group">
                                <label for="cnpj">CNPJ</label>
                                <input type="text" id="cnpj" name="cnpj">
                            </div>
                            <div class="form-group">
                                <label for="descricaoLoja">Descrição da Loja *</label>
                                <textarea id="descricaoLoja" name="descricaoLoja" rows="4" placeholder="Conte sobre sua loja e seus produtos sustentáveis..." required></textarea>
                            </div>
                            <div class="form-group">
                                <label for="categorias">Categorias dos Produtos *</label>
                                <div class="checkbox-group">
                                    <label class="checkbox-label">
                                        <input type="checkbox" name="categorias[]" value="limpeza">
                                        <span>Produtos de Limpeza</span>
                                    </label>
                                    <label class="checkbox-label">
                                        <input type="checkbox" name="categorias[]" value="beleza">
                                        <span>Beleza & Cuidados</span>
                                    </label>
                                    <label class="checkbox-label">
                                        <input type="checkbox" name="categorias[]" value="alimentos">
                                        <span>Alimentos Naturais</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-section">
                            <h3>Certificações Sustentáveis</h3>
                            <div class="form-group">
                                <label for="certificacoes">Certificações Ambientais</label>
                                <textarea id="certificacoes" name="certificacoes" rows="3" placeholder="Liste suas certificações (ex: ISO 14001, Orgânico Brasil, etc.)"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="praticasSustentaveis">Práticas Sustentáveis *</label>
                                <textarea id="praticasSustentaveis" name="praticasSustentaveis" rows="4" placeholder="Descreva suas práticas sustentáveis (materiais, produção, embalagem, etc.)" required></textarea>
                            </div>
                        </div>

                        <div class="form-actions">
                            <button type="button" class="btn btn-secondary" onclick="resetForm()">Limpar</button>
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-paper-plane"></i>
                                Enviar Cadastro
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
        <div class="container">
            <h2>Perguntas Frequentes</h2>
            <div class="faq-grid">
                <div class="faq-item" onclick="toggleFaq(this)">
                    <div class="faq-question">
                        <h4>Quais são os critérios para aprovação?</h4>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Analisamos a origem dos produtos, práticas de produção, embalagens sustentáveis e certificações ambientais. Priorizamos produtos 100% naturais, orgânicos e com baixo impacto ambiental.</p>
                    </div>
                </div>
                <div class="faq-item" onclick="toggleFaq(this)">
                    <div class="faq-question">
                        <h4>Qual é a taxa de comissão?</h4>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Nossa comissão é de apenas 8% por venda, uma das menores do mercado. Não cobramos taxas de cadastro ou mensalidades.</p>
                    </div>
                </div>
                <div class="faq-item" onclick="toggleFaq(this)">
                    <div class="faq-question">
                        <h4>Como funciona o pagamento?</h4>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Os pagamentos são processados automaticamente e transferidos para sua conta em até 7 dias úteis após a confirmação da entrega.</p>
                    </div>
                </div>
                <div class="faq-item" onclick="toggleFaq(this)">
                    <div class="faq-question">
                        <h4>Preciso de certificações?</h4>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Certificações ajudam na aprovação, mas não são obrigatórias. Avaliamos também práticas sustentáveis e compromisso ambiental demonstrado.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include '../includes/footer.php'; ?>

    <script src="../js/main.js"></script>
    <script src="../js/vendedor.js"></script>
</body>
</html>