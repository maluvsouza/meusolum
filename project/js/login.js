// Alternância entre tabs de login e cadastro
function switchTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Remover active de todos os botões
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        document.querySelector('.tab-btn[onclick*="login"]').classList.add('active');
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        document.querySelector('.tab-btn[onclick*="register"]').classList.add('active');
    }
}

// Submit do formulário de login
function submitLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        showMessage('Por favor, preencha todos os campos', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showMessage('Por favor, insira um email válido', 'error');
        return;
    }
    
    // Simular login
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalContent = submitButton.innerHTML;
    
    submitButton.disabled = true;
    submitButton.innerHTML = '<div class="loading"></div> Entrando...';
    
    setTimeout(() => {
        // Simular sucesso do login
        showMessage('Login realizado com sucesso! Redirecionando...', 'success');
        
        setTimeout(() => {
            window.location.href = '../index.php';
        }, 1500);
    }, 2000);
}

// Submit do formulário de cadastro
function submitRegister(event) {
    event.preventDefault();
    
    const nome = document.getElementById('registerNome').value;
    const sobrenome = document.getElementById('registerSobrenome').value;
    const email = document.getElementById('registerEmail').value;
    const telefone = document.getElementById('registerTelefone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const aceitarTermos = document.getElementById('aceitarTermos').checked;
    
    // Validações
    if (!nome || !sobrenome || !email || !telefone || !password || !confirmPassword) {
        showMessage('Por favor, preencha todos os campos obrigatórios', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showMessage('Por favor, insira um email válido', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('A senha deve ter pelo menos 6 caracteres', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('As senhas não coincidem', 'error');
        return;
    }
    
    if (!aceitarTermos) {
        showMessage('Você deve aceitar os termos de uso', 'error');
        return;
    }
    
    // Simular cadastro
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalContent = submitButton.innerHTML;
    
    submitButton.disabled = true;
    submitButton.innerHTML = '<div class="loading"></div> Criando conta...';
    
    setTimeout(() => {
        // Simular sucesso do cadastro
        showMessage('Conta criada com sucesso! Redirecionando...', 'success');
        
        setTimeout(() => {
            window.location.href = '../index.php';
        }, 1500);
    }, 2000);
}

// Login social
function loginWithGoogle() {
    showNotification('Redirecionando para login com Google...', 'info');
    // Aqui seria implementada a integração real com Google OAuth
}

function loginWithFacebook() {
    showNotification('Redirecionando para login com Facebook...', 'info');
    // Aqui seria implementada a integração real com Facebook OAuth
}

// Funções auxiliares
function showMessage(message, type) {
    // Remover mensagens existentes
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Criar nova mensagem
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    
    const icon = type === 'success' ? 'check-circle' : 
                 type === 'error' ? 'exclamation-circle' : 'info-circle';
    
    messageDiv.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    // Inserir no formulário ativo
    const activeForm = document.querySelector('.auth-form:not(.hidden)');
    activeForm.insertBefore(messageDiv, activeForm.firstChild);
    
    setTimeout(() => {
        messageDiv.classList.add('show');
    }, 100);
    
    // Remover automaticamente após 5 segundos
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.classList.remove('show');
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 300);
        }
    }, 5000);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showForgotPassword() {
    showNotification('Funcionalidade de recuperação de senha em desenvolvimento', 'info');
}

function showTermos() {
    showNotification('Abrindo termos de uso...', 'info');
}

function showPrivacidade() {
    showNotification('Abrindo política de privacidade...', 'info');
}

// Máscaras para os campos
document.addEventListener('DOMContentLoaded', function() {
    // Máscara para telefone no cadastro
    const telefoneInput = document.getElementById('registerTelefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 11) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (value.length >= 7) {
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (value.length >= 3) {
                value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            }
            e.target.value = value;
        });
    }
});

// Validação em tempo real
document.addEventListener('DOMContentLoaded', function() {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordInput = document.getElementById('registerPassword');
    
    if (confirmPasswordInput && passwordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            const password = passwordInput.value;
            const confirmPassword = this.value;
            
            if (confirmPassword && password !== confirmPassword) {
                this.style.borderColor = '#EF4444';
            } else {
                this.style.borderColor = '#E2E8F0';
            }
        });
    }
});