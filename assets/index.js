function setActive(element, contentId) {
    // Remove a classe active de todos os itens do menu
    const menuItems = document.querySelectorAll('.menu-item');
    // biome-ignore lint/complexity/noForEach: <explanation>
    menuItems.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.menu-button').classList.remove('active');
    });

    // Adiciona a classe active ao item clicado
    element.classList.add('active');
    element.querySelector('.menu-button').classList.add('active');

    // Remove a classe active de todos os conteúdos
    const contents = document.querySelectorAll('.content');
    // biome-ignore lint/complexity/noForEach: <explanation>
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Adiciona a classe active ao conteúdo correspondente
    const activeContent = document.getElementById(contentId);
    activeContent.classList.add('active');
}

function selectButton(element) {
    // Remove a classe 'active' de todos os botões
    const buttons = document.querySelectorAll('.menu-button');
    // biome-ignore lint/complexity/noForEach: <explanation>
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Adiciona a classe 'active' ao botão clicado
    const button = element.querySelector('.menu-button');
    button.classList.add('active');
}