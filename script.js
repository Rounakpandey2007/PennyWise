document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('budgetChart').getContext('2d');
    
    // Create Gradients
    let gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, '#8A2BE2');
    gradient1.addColorStop(1, '#FF00FF');

    const budgetChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Investments', 'Essentials', 'Wants'],
            datasets: [{
                label: 'Spending Breakdown',
                data: [45, 30, 25], // Percentage values
                backgroundColor: [
                    gradient1,  // The "Attractive" Savings part
                    '#333333',
                    '#555555'
                ],
                borderColor: '#1a1a1a',
                borderWidth: 5,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            cutout: '70%', // Thin, modern donut look
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#fff',
                        padding: 20,
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    }
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
});