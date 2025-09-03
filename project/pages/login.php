<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - EcoMarket</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/login.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <?php 
    $current_page = 'login';
    include '../includes/header_pages.php'; 
    ?>

    <section class="login-section">
        <div class="container">
            <div class="login-container">
                <div class="login-form-section">
                    <div class="login-tabs">
                        <button class="tab-btn active" onclick="switchTab('login')">Entrar</button>
                        <button class="tab-btn" onclick="switchTab('register')">Cadastrar</button>
                    </div>

                    <!-- Form de Login -->
                    <form id="loginForm" class="auth-form" onsubmit="submitLogin(event)">
                        <h2>Bem-vindo de volta!</h2>
                        <p>Entre em sua conta para continuar</p>

                        <div class="form-group">
                            <label for="loginEmail">Email</label>
                            <input type="email" id="loginEmail" required>
                        </div>

                        <div class="form-group">
                            <label for="loginPassword">Senha</label>
                            <input type="password" id="loginPassword" required>
                        </div>

                        <div class="form-options">
                            <label class="checkbox-label">
                                <input type="checkbox" id="rememberMe">
                                <span>Lembrar de mim</span>
                            </label>
                            <a href="#" onclick="showForgotPassword()">Esqueci a senha</a>
                        </div>

                        <button type="submit" class="btn btn-primary btn-full">
                            <i class="fas fa-sign-in-alt"></i>
                            Entrar
                        </button>

                        <div class="social-login">
                            <p>Ou entre com:</p>
                            <div class="social-buttons">
                                <button type="button" class="social-btn google" onclick="loginWithGoogle()">
                                    <i class="fab fa-google"></i>
                                    Google
                                </button>
                                <button type="button" class="social-btn facebook" onclick="loginWithFacebook()">
                                    <i class="fab fa-facebook"></i>
                                    Facebook
                                </button>
                            </div>
                        </div>
                    </form>

                    <!-- Form de Cadastro -->
                    <form id="registerForm" class="auth-form hidden" onsubmit="submitRegister(event)">
                        <h2>Crie sua conta</h2>
                        <p>Junte-se à comunidade sustentável</p>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="registerNome">Nome</label>
                                <input type="text" id="registerNome" required>
                            </div>
                            <div class="form-group">
                                <label for="registerSobrenome">Sobrenome</label>
                                <input type="text" id="registerSobrenome" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="registerEmail">Email</label>
                            <input type="email" id="registerEmail" required>
                        </div>

                        <div class="form-group">
                            <label for="registerTelefone">Telefone</label>
                            <input type="tel" id="registerTelefone" required>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="registerPassword">Senha</label>
                                <input type="password" id="registerPassword" required>
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">Confirmar Senha</label>
                                <input type="password" id="confirmPassword" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="aceitarTermos" required>
                                <span>Aceito os <a href="#" onclick="showTermos()">termos de uso</a> e <a href="#" onclick="showPrivacidade()">política de privacidade</a></span>
                            </label>
                        </div>

                        <div class="form-group">
                            <label class="checkbox-label">
                                <input type="checkbox" id="receberNewsletter">
                                <span>Quero receber novidades sobre produtos sustentáveis</span>
                            </label>
                        </div>

                        <button type="submit" class="btn btn-primary btn-full">
                            <i class="fas fa-user-plus"></i>
                            Criar Conta
                        </button>
                    </form>
                </div>

                <div class="login-info-section">
                    <div class="info-content">
                        <div class="info-icon">
                            <i class="fas fa-leaf"></i>
                        </div>
                        <h3>Junte-se ao EcoMarket</h3>
                        <p>Ao criar sua conta, você terá acesso a:</p>
                        
                        <ul class="benefits-list">
                            <li><i class="fas fa-check"></i> Lista de produtos favoritos</li>
                            <li><i class="fas fa-check"></i> Histórico de compras</li>
                            <li><i class="fas fa-check"></i> Ofertas exclusivas</li>
                            <li><i class="fas fa-check"></i> Programa de fidelidade</li>
                            <li><i class="fas fa-check"></i> Acompanhamento de pedidos</li>
                            <li><i class="fas fa-check"></i> Avaliações de produtos</li>
                        </ul>

                        <div class="eco-stats">
                            <div class="eco-stat">
                                <div class="stat-number">500+</div>
                                <div class="stat-label">Produtos Certificados</div>
                            </div>
                            <div class="eco-stat">
                                <div class="stat-number">15k+</div>
                                <div class="stat-label">Clientes Satisfeitos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include '../includes/footer.php'; ?>

    <script src="../js/main.js"></script>
    <script src="../js/login.js"></script>
</body>
</html>