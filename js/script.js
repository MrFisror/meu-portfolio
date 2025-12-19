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


// --- Função do Relógio em Tempo Real ---
function atualizarRelogio() {
    const agora = new Date();
    
    // 1. Formatar a Hora (HH:MM:SS)
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    const horarioString = `${horas}:${minutos}:${segundos}`;
    
    // 2. Formatar a Data (ex: Sexta, 19 Dezembro)
    const opcoesData = { weekday: 'long', day: 'numeric', month: 'long' };
    const dataString = agora.toLocaleDateString('pt-BR', opcoesData);

    // 3. Injetar no HTML (Verificamos se o elemento existe para evitar erros)
    const elRelogio = document.getElementById('relogio-atual');
    const elData = document.getElementById('data-atual');

    if (elRelogio) elRelogio.innerText = horarioString;
    if (elData) elData.innerText = dataString;
}

// Atualiza a cada 1000 milissegundos (1 segundo)
setInterval(atualizarRelogio, 1000);

// Chama uma vez imediatamente para não esperar 1 segundo até aparecer
atualizarRelogio();

// --- LENIS SMOOTH SCROLL ---

// 1. Inicializa a biblioteca
const lenis = new Lenis({
    duration: 1.2, // Quanto tempo demora para parar (1.2s é bem suave)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva matemática de suavidade
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1, // Sensibilidade do mouse
    smoothTouch: false, // Geralmente deixamos falso para mobile (o nativo é melhor)
});

// 2. Cria o loop de animação (obrigatório)
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);