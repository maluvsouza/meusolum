// Formulário de Vendedor
function submitVendedorForm(event) {
    event.preventDefault();
    
    const form = document.getElementById('vendedorForm');
    const formData = new FormData(form);
    
    // Validação básica
    const requiredFields = ['nome', 'email', 'telefone', 'cpf', 'nomeLoja', 'descricaoLoja', 'praticasSustentaveis'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        const value = formData.get(field);
        if (!value || value.trim() === '') {
            showNotification(`O campo ${getFieldDisplayName(field)} é obrigatório`, 'error');
            isValid = false;
        }
    });
    
    // Validar pelo menos uma categoria selecionada
    const categorias = formData.getAll('categorias[]');
    if (categorias.length === 0) {
        showNotification('Selecione pelo menos uma categoria de produtos', 'error');
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Simular envio do formulário
    const submitButton = form.querySelector('button[type="submit"]');
    const originalContent = submitButton.innerHTML;
    
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="loading"></i> Enviando...';
    
    setTimeout(() => {
        // Simular sucesso
        showSuccessMessage();
        form.reset();
        submitButton.disabled = false;
        submitButton.innerHTML = originalContent;
        
        // Scroll para o topo da página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
}

function showSuccessMessage() {
    const cadastroForm = document.querySelector('.cadastro-form');
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <h3><i class="fas fa-check-circle"></i> Cadastro Enviado com Sucesso!</h3>
        <p>Recebemos seu cadastro e nossa equipe irá analisá-lo. Você receberá um email de confirmação em até 24 horas com o status da aprovação.</p>
        <p><strong>Próximos passos:</strong> Aguarde nosso contato para orientações sobre como adicionar seus primeiros produtos à plataforma.</p>
    `;
    
    cadastroForm.style.display = 'none';
    cadastroForm.parentNode.insertBefore(successMessage, cadastroForm);
    successMessage.classList.add('show');
    
    setTimeout(() => {
        successMessage.classList.remove('show');
        setTimeout(() => {
            cadastroForm.style.display = 'block';
            successMessage.remove();
        }, 500);
    }, 8000);
}

function resetForm() {
    const form = document.getElementById('vendedorForm');
    form.reset();
    showNotification('Formulário limpo', 'info');
}

function getFieldDisplayName(field) {
    const fieldNames = {
        'nome': 'Nome Completo',
        'email': 'Email',
        'telefone': 'Telefone',
        'cpf': 'CPF',
        'nomeLoja': 'Nome da Loja',
        'descricaoLoja': 'Descrição da Loja',
        'praticasSustentaveis': 'Práticas Sustentáveis'
    };
    
    return fieldNames[field] || field;
}

// FAQ Toggle
function toggleFaq(element) {
    const isActive = element.classList.contains('active');
    
    // Fechar todos os FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Abrir o clicado se não estava ativo
    if (!isActive) {
        element.classList.add('active');
    }
}

// Máscaras de entrada
document.addEventListener('DOMContentLoaded', function() {
    // Máscara para telefone
    const telefoneInput = document.getElementById('telefone');
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
    
    // Máscara para CPF
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            e.target.value = value;
        });
    }
    
    // Máscara para CNPJ
    const cnpjInput = document.getElementById('cnpj');
    if (cnpjInput) {
        cnpjInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
            e.target.value = value;
        });
    }
});

// Validações específicas
function validateCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;
    
    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    
    // Validação do CPF (algoritmo simples)
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let checkDigit = 11 - (sum % 11);
    if (checkDigit === 10 || checkDigit === 11) checkDigit = 0;
    if (checkDigit !== parseInt(cpf.charAt(9))) return false;
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    checkDigit = 11 - (sum % 11);
    if (checkDigit === 10 || checkDigit === 11) checkDigit = 0;
    if (checkDigit !== parseInt(cpf.charAt(10))) return false;
    
    return true;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}