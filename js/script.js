console.log("O JavaScript está conectado e funcionando!");

// O "Vigia" (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry) // Se quiser ver o que acontece no console
        
        // Se o elemento estiver visível na tela
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Adiciona a classe .show (CSS faz o resto)
        } else {
            // Se quiser que a animação repita ao subir e descer, descomente a linha abaixo:
            // entry.target.classList.remove('show'); 
        }
    });
});

// Seleciona todos os elementos que têm a classe 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');

// Manda o vigia observar cada um deles
hiddenElements.forEach((el) => observer.observe(el));




// --- Função de Saudação Automática ---

function carregarSaudacao() {
    // 1. Pega a hora atual do sistema do usuário
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    
    // 2. Seleciona o elemento HTML onde vamos escrever
    const elementoSaudacao = document.getElementById('saudacao');
    
    // Variáveis para guardar o texto e o ícone
    let saudacaoTexto = '';
    let icone = '';

    // 3. Lógica para definir a mensagem
    if (hora >= 5 && hora < 12) {
        saudacaoTexto = 'Bom dia';
        icone = '🌤️'; // Sol com nuvem
    } else if (hora >= 12 && hora < 18) {
        saudacaoTexto = 'Boa tarde';
        icone = '☀️'; // Sol forte
    } else {
        saudacaoTexto = 'Boa noite';
        icone = '🌙'; // Lua
    }

    // 4. Injeta no HTML
    // Usamos crase (`) para criar uma Template String, que permite misturar texto e variáveis
    elementoSaudacao.innerHTML = `${icone} ${saudacaoTexto}. Bem-vindo ao meu portfólio.`;
}

// Chama a função assim que o site carregar
carregarSaudacao();