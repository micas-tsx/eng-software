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


// Obtém o modal
// biome-ignore lint/style/noVar: <explanation>
var modal = document.getElementById("myModal");

// Obtém o botão que abre o modal
// biome-ignore lint/style/noVar: <explanation>
var btn = document.getElementById("openModal");

// Obtém o <span> que fecha o modal
// biome-ignore lint/style/noVar: <explanation>
var span = document.getElementsByClassName("close")[0];

// Inicializa o saldo
// biome-ignore lint/style/noVar: <explanation>
var saldo = 0;

// Quando o usuário clica no botão, abre o modal
btn.onclick = () => {
    modal.style.display = "flex"; // Mostra o modal
}

// Quando o usuário clica no <span> (x), fecha o modal
span.onclick = () => {
    fecharModal();
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha-o
window.onclick = (event) => {
    // biome-ignore lint/suspicious/noDoubleEquals: <explanation>
    if (event.target == modal) {
        fecharModal();
    }
}

// Função para fechar o modal
function fecharModal() {
    modal.style.display = "none"; // Esconde o modal
}

// Função para adicionar informação
function adicionarInformacao() {
    const tipo = document.getElementById('tipo').value;
    const titulo = document.getElementById('titulo').value;
    const valor = Number.parseFloat(document.getElementById('valor').value);
    const data = document.getElementById('data').value;

    if (!titulo || !valor || !data) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Cria uma nova div para armazenar as informações
    const infoDiv = document.createElement('div');
    infoDiv.className = "informacao";

    // Adiciona as informações na div
    infoDiv.innerHTML = `
    <div>
        <div class="titulo-informacao">${titulo}</div>
        <div class="data">${data}</div>
    </div> 
    <div class="valor">
        ${tipo === 'lucro' ? '+R$' : '-$R$'}${valor.toFixed(2)}
    </div>
    `;
    
    // Adiciona a nova informação à lista
    document.getElementById('listaInformacoes').appendChild(infoDiv);

    // Atualiza o saldo
    if (tipo === 'lucro') {
        saldo += valor;
    } else {
        saldo -= valor;
    }

    // Atualiza o saldo na tela
    document.getElementById('saldo').innerText = saldo.toFixed(2);

    // Limpa os campos do modal
    document.getElementById('titulo').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('data').value = '';

    // Fecha o modal
    fecharModal();
}

document.getElementById('addItem').onclick = () => {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
    const input5 = document.getElementById('input5').value;

    const table = document.getElementById('itemTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = input1;
    newRow.insertCell(1).innerText = input2;
    newRow.insertCell(2).innerText = input3;
    newRow.insertCell(3).innerText = input4;
    newRow.insertCell(4).innerText = input5;

    // Limpar os inputs após adicionar
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    document.getElementById('input4').value = '';
    document.getElementById('input5').value = '';
};

