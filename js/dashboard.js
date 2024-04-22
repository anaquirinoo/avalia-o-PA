window.onload = function() {
    // Simulação de dados aleatórios
    const views = Math.floor(Math.random() * 1000);
    const followers = Math.floor(Math.random() * views);
    const nonFollowers = views - followers;

    // Atualiza elementos HTML com os valores simulados
    document.getElementById('views').textContent = views;
    document.getElementById('followers').textContent = followers;
    document.getElementById('non-followers').textContent = nonFollowers;

    // Configuração do gráfico de pizza com Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Seguidores', 'Não Seguidores'],
            datasets: [{
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
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14,
                            family: 'Arial'
                        }
                    }
                }
            }
        }
    });

    // Função para voltar à tela inicial
    function voltarTelaInicial() {
        window.location.href = "meuperfil.html"; // Verifique o caminho e o nome do arquivo
    }

    // Define a função para o botão de voltar
    document.querySelector('.back-button').onclick = voltarTelaInicial;
};
