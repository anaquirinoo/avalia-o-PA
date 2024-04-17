// Função para reagir
function reagir(emoji) {
    alert('Você reagiu com: ' + emoji);
}

// Função para comentar em cada post
function comentar(button) {
    // Seleciona o post pai do botão
    var post = button.parentNode;

    // Solicita o comentário ao usuário
    var comentario = prompt('Digite seu comentário:');

    // Verifica se o usuário inseriu um comentário
    if (comentario) {
        // Cria um elemento de parágrafo para o comentário
        var comentarioElement = document.createElement('p');
        comentarioElement.textContent = 'Comentário: ' + comentario;

        // Adiciona o comentário ao post
        post.appendChild(comentarioElement);
    }
}

// Função para exibir/ocultar a barra de navegação ao clicar no ícone de menu
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('show');
});
