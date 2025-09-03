// Selecionando os elementos
const openMenuButton = document.querySelector('.open-menu');
const closeMenuButton = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.main-menu');

// Função para verificar se está no modo mobile
function isMobile() {
  return window.innerWidth <= 1500; // Ajuste conforme seu breakpoint do CSS
}

// Função para abrir o menu
function openMenu() {
  if (isMobile()) {
    mobileMenu.style.transform = 'translateX(-100%)'; // Move o menu para dentro da tela
    mobileMenu.style.transition = 'transform 0.3s ease'; // Adiciona uma transição suave
  }
}

// Função para fechar o menu
function closeMenu() {
  if (isMobile()) {
    mobileMenu.style.transform = 'translateX(0%)'; // Move o menu para fora da tela
    mobileMenu.style.transition = 'transform 0.3s ease'; // Adiciona uma transição suave
  }
}

// Adicionando os eventos de clique para abrir e fechar o menu
openMenuButton.addEventListener('click', (e) => {
  e.preventDefault(); // Evita o comportamento padrão do link
  openMenu();
});

closeMenuButton.addEventListener('click', (e) => {
  e.preventDefault(); // Evita o comportamento padrão do link
  closeMenu();
});

// Seleciona todos os links dentro do menu
const menuLinks = document.querySelectorAll('.main-menu .main-button');

// Adiciona um evento de clique em cada link do menu
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    if (isMobile()) {
        menu.style.transform = 'translateX(100%)'; // Oculta o menu (ajuste conforme seu código de fechamento)
        menu.style.transition = 'transform 0.3s ease'; // Mantém a transição suave
    }
  });
});