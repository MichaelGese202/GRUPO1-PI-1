// Configuración de las gráficas
const humidityChart = new Chart(document.getElementById('humidity-chart'), {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Humedad (%)',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

const temperatureChart = new Chart(document.getElementById('temperature-chart'), {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Temperatura (°C)',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const npkChart = new Chart(document.getElementById('npk-chart'), {
    type: 'bar',
    data: {
        labels: ['N', 'P', 'K'],
        datasets: [{
            label: 'NPK (mg/kg)',
            data: [0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 205, 86, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfica mensual
const monthlyChart = new Chart(document.getElementById('monthly-chart'), {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Humedad Promedio (%)',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }, {
            label: 'Temperatura Promedio (°C)',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfica histórica
const historicalChart = new Chart(document.getElementById('historical-chart'), {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Humedad (%)',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }, {
            label: 'Temperatura (°C)',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Función para actualizar estadísticas
function updateStats() {
    fetch('/api/sensor_stats')
        .then(response => response.json())
        .then(data => {
            // Actualizar estadísticas generales
            document.getElementById('total-readings').textContent = data.total_readings;
            document.getElementById('avg-humidity').textContent = data.averages.humidity;
            document.getElementById('avg-temperature').textContent = data.averages.temperature;
            document.getElementById('avg-n').textContent = data.averages.n;
            document.getElementById('avg-p').textContent = data.averages.p;
            document.getElementById('avg-k').textContent = data.averages.k;

            // Actualizar gráfica mensual
            monthlyChart.data.labels = data.monthly_stats.map(stat => stat.month);
            monthlyChart.data.datasets[0].data = data.monthly_stats.map(stat => stat.humidity);
            monthlyChart.data.datasets[1].data = data.monthly_stats.map(stat => stat.temperature);
            monthlyChart.update();
        })
        .catch(error => console.error('Error al obtener estadísticas:', error));
}

// Función para actualizar datos históricos
function updateHistoricalData() {
    const days = document.getElementById('time-range').value;
    fetch(`/api/historical_data/${days}`)
        .then(response => response.json())
        .then(data => {
            // Actualizar gráfica histórica
            historicalChart.data.labels = data.map(item => new Date(item.timestamp).toLocaleDateString());
            historicalChart.data.datasets[0].data = data.map(item => item.humidity);
            historicalChart.data.datasets[1].data = data.map(item => item.temperature);
            historicalChart.update();
        })
        .catch(error => console.error('Error al obtener datos históricos:', error));
}

// Función para actualizar los datos
function updateData() {
    fetch('/api/sensor_data')
        .then(response => response.json())
        .then(data => {
            // Actualizar valores
            document.getElementById('humidity-value').textContent = data.humidity.toFixed(1);
            document.getElementById('temperature-value').textContent = data.temperature.toFixed(1);
            document.getElementById('n-value').textContent = data.npk.n.toFixed(1);
            document.getElementById('p-value').textContent = data.npk.p.toFixed(1);
            document.getElementById('k-value').textContent = data.npk.k.toFixed(1);

            // Actualizar gráficas
            const now = new Date().toLocaleTimeString();

            // Gráfica de humedad
            humidityChart.data.labels.push(now);
            humidityChart.data.datasets[0].data.push(data.humidity);
            if (humidityChart.data.labels.length > 20) {
                humidityChart.data.labels.shift();
                humidityChart.data.datasets[0].data.shift();
            }
            humidityChart.update();

            // Gráfica de temperatura
            temperatureChart.data.labels.push(now);
            temperatureChart.data.datasets[0].data.push(data.temperature);
            if (temperatureChart.data.labels.length > 20) {
                temperatureChart.data.labels.shift();
                temperatureChart.data.datasets[0].data.shift();
            }
            temperatureChart.update();

            // Gráfica NPK
            npkChart.data.datasets[0].data = [data.npk.n, data.npk.p, data.npk.k];
            npkChart.update();
        })
        .catch(error => console.error('Error al obtener datos:', error));

    // Actualizar último mensaje UDP
    fetch('/api/last_udp_message')
        .then(response => response.json())
        .then(data => {
            document.getElementById('last-udp-message').textContent = data.message;
        })
        .catch(error => console.error('Error al obtener último mensaje UDP:', error));
}

// Event listener para el selector de rango de tiempo
document.getElementById('time-range').addEventListener('change', updateHistoricalData);

// Actualizar datos cada 2 segundos
setInterval(updateData, 2000);

// Actualizar estadísticas cada 30 segundos
setInterval(updateStats, 30000);

// Cargar datos iniciales
updateData();
updateStats();
updateHistoricalData();
