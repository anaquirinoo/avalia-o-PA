// Suponha que você tenha os dados de visualizações, seguidores e não seguidores disponíveis em variáveis
// Aqui, estamos apenas simulando esses dados com valores aleatórios
const views = Math.floor(Math.random() * 1000);
const followers = Math.floor(Math.random() * views);
const nonFollowers = views - followers;

// Atualiza o texto dentro dos elementos HTML com os valores simulados
document.getElementById('views').textContent = views;
document.getElementById('followers').textContent = followers;
document.getElementById('non-followers').textContent = nonFollowers;

// Configuração do gráfico de pizza
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Seguidores', 'Não Seguidores'],
        datasets: [{
            label: 'Visualizações',
            data: [followers, nonFollowers],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 99, 132, 0.5)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
            labels: {
                fontSize: 14,
                fontColor: '#333'
            }
        }
    }
});

function voltarTelaInicial() {
    window.location.href = "meuperfil.html"; // Substitua "index.html" pelo nome da sua página inicial
}
