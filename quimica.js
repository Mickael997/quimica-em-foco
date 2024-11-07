document.addEventListener('DOMContentLoaded', () => {
    console.log("Menu carregado!");
});

function verificarResposta(questao, respostaCorreta) {
    const radios = document.getElementsByName(questao);
    let respostaSelecionada = "";

    for (let radio of radios) {
        if (radio.checked) {
            respostaSelecionada = radio.value;
            break;
        }
    }

    const feedback = document.getElementById(`feedback-${questao}`);
    if (respostaSelecionada === "correto") {
        feedback.textContent = "Resposta correta!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Resposta incorreta. A resposta correta é: ${respostaCorreta}.`;
        feedback.style.color = "red";
    }
}

// Seleciona o menu hamburguer e os submenus
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const subMenus = document.querySelectorAll('.submenu');

// Função para alternar o menu hamburguer
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    document.querySelectorAll('.hamburger').forEach(hamburger => hamburger.classList.toggle('active'));
});

// Função para alternar a exibição dos submenus ao clicar
subMenus.forEach(subMenu => {
    subMenu.addEventListener('click', (e) => {
        e.stopPropagation();  // Previne que o clique propague e feche o submenu
        subMenu.classList.toggle('active');
    });
});