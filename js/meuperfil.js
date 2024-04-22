var seguindo = false;
var numSeguidores = 1000;

function alterarSeguir() {
    var botaoSeguir = document.getElementById("btnSeguir");
    var seguidoresElement = document.getElementById("seguidores");

    if (!seguindo) {
        if (confirm("Deseja seguir este usuário?")) {
            numSeguidores++;
            seguidoresElement.textContent = numSeguidores + " Seguidores";
            botaoSeguir.textContent = "Seguindo";
            botaoSeguir.classList.remove("botao-seguir");
            botaoSeguir.classList.add("botao-parar-seguir");
            botaoSeguir.setAttribute("onclick", "pararSeguir()");
            seguindo = true;
        }
    } else {
        pararSeguir();
    }
}

function pararSeguir() {
    var botaoSeguir = document.getElementById("btnSeguir");
    var seguidoresElement = document.getElementById("seguidores");

    if (confirm("Deseja parar de seguir este usuário?")) {
        numSeguidores--;
        seguidoresElement.textContent = numSeguidores + " Seguidores";
        botaoSeguir.textContent = "Seguir";
        botaoSeguir.classList.remove("botao-parar-seguir");
        botaoSeguir.classList.add("botao-seguir");
        botaoSeguir.setAttribute("onclick", "alterarSeguir()");
        seguindo = false;
    }
}

function voltarTelaInicial() {
    window.location.href = "corpo.html"; // Substitua "index.html" pelo nome da sua página inicial
}

function irParaDashboard() {
    window.location.href = "dashboard.html"; // Implemente a função para ir para o dashboard aqui
}
