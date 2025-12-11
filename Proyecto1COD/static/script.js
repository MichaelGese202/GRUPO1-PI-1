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

// Función para analizar nutrientes y condiciones del suelo
function analyzeSoilConditions(n, p, k, humidity, temperature) {
    const idealRanges = {
        n: { min: 80, max: 120 },
        p: { min: 10, max: 25 },
        k: { min: 80, max: 200 },
        humidity: { min: 40, max: 60 },
        temperature: { min: 18, max: 24 }
    };

    let messages = [];
    let allIdeal = true;

    // Analizar Nitrógeno
    if (n < idealRanges.n.min) {
        messages.push(`<span style="color: #ff6b6b;">⚠️ Nitrógeno bajo: falta ${(idealRanges.n.min - n).toFixed(1)} mg/kg</span>`);
        allIdeal = false;
    } else if (n > idealRanges.n.max) {
        messages.push(`<span style="color: #ffa500;">⚠️ Nitrógeno alto: exceso de ${(n - idealRanges.n.max).toFixed(1)} mg/kg</span>`);
        allIdeal = false;
    }

    // Analizar Fósforo
    if (p < idealRanges.p.min) {
        messages.push(`<span style="color: #ff6b6b;">⚠️ Fósforo bajo: falta ${(idealRanges.p.min - p).toFixed(1)} mg/kg</span>`);
        allIdeal = false;
    } else if (p > idealRanges.p.max) {
        messages.push(`<span style="color: #ffa500;">⚠️ Fósforo alto: exceso de ${(p - idealRanges.p.max).toFixed(1)} mg/kg</span>`);
        allIdeal = false;
    }

    // Analizar Potasio
    if (k < idealRanges.k.min) {
        messages.push(`<span style="color: #ff6b6b;">⚠️ Potasio bajo: falta ${(idealRanges.k.min - k).toFixed(1)} mg/kg</span>`);
        allIdeal = false;
    } else if (k > idealRanges.k.max) {
        messages.push(`<span style="color: #ffa500;">⚠️ Potasio alto: exceso de ${(k - idealRanges.k.max).toFixed(1)} mg/kg</span>`);
        allIdeal = false;
    }

    // Analizar Humedad
    if (humidity < idealRanges.humidity.min) {
        messages.push(`<span style="color: #74b9ff;">💧 Humedad baja: falta ${(idealRanges.humidity.min - humidity).toFixed(1)}%</span>`);
        allIdeal = false;
    } else if (humidity > idealRanges.humidity.max) {
        messages.push(`<span style="color: #74b9ff;">💧 Humedad alta: exceso de ${(humidity - idealRanges.humidity.max).toFixed(1)}%</span>`);
        allIdeal = false;
    }

    // Analizar Temperatura
    if (temperature < idealRanges.temperature.min) {
        messages.push(`<span style="color: #fd79a8;">🌡️ Temperatura baja: ${(idealRanges.temperature.min - temperature).toFixed(1)}°C por debajo</span>`);
        allIdeal = false;
    } else if (temperature > idealRanges.temperature.max) {
        messages.push(`<span style="color: #fd79a8;">🌡️ Temperatura alta: ${(temperature - idealRanges.temperature.max).toFixed(1)}°C por encima</span>`);
        allIdeal = false;
    }

    if (allIdeal) {
        return '<div style="color: #00ff88; font-weight: 600; display: flex; align-items: center; gap: 8px;"><span style="font-size: 18px;">✅</span> ¡Los valores son ideales para el cultivo!</div>';
    } else {
        return '<div style="color: #ffa500; font-weight: 500;">Necesidades del suelo:</div><div style="margin-top: 8px; line-height: 1.6;">' + messages.join('<br>') + '</div>';
    }
}

// Función para actualizar los datos
function updateData() {
    fetch('/api/sensor_data')
        .then(response => response.json())
        .then(data => {
            // Actualizar valores
            document.getElementById('humidity-value').textContent = data.humidity.toFixed(1);
            document.getElementById('temperature-value').textContent = data.temperature.toFixed(1);
            document.getElementById('soil-status-value').textContent = data.soil_status;
            document.getElementById('n-value').textContent = data.npk.n.toFixed(1);
            document.getElementById('p-value').textContent = data.npk.p.toFixed(1);
            document.getElementById('k-value').textContent = data.npk.k.toFixed(1);

            // Analizar condiciones del suelo y mostrar mensaje
            const analysisMessage = analyzeSoilConditions(data.npk.n, data.npk.p, data.npk.k, data.humidity, data.temperature);
            document.getElementById('soil-analysis-message').innerHTML = analysisMessage;

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
}

// Event listener para el selector de rango de tiempo
document.getElementById('time-range').addEventListener('change', updateHistoricalData);

// Función para iniciar lectura de sensores
function startSensorReading() {
    const btn = document.getElementById('start-reading-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Iniciando...';
    btn.disabled = true;

    fetch('/api/start_sensor_reading', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            btn.textContent = 'Lectura Iniciada';
            btn.style.background = 'linear-gradient(135deg, #00ff88, #00cc66)';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = 'linear-gradient(135deg, #00d4ff, #0099cc)';
            }, 3000);
        } else {
            btn.textContent = 'Error';
            btn.style.background = 'linear-gradient(135deg, #ff4757, #c44569)';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = 'linear-gradient(135deg, #00d4ff, #0099cc)';
            }, 3000);
        }
    })
    .catch(error => {
        console.error('Error al iniciar lectura:', error);
        btn.textContent = 'Error';
        btn.style.background = 'linear-gradient(135deg, #ff4757, #c44569)';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
            btn.style.background = 'linear-gradient(135deg, #00d4ff, #0099cc)';
        }, 3000);
    });
}

// Event listener para el botón de iniciar lectura
document.getElementById('start-reading-btn').addEventListener('click', startSensorReading);

// Variables para medición de áreas
let currentAreaMeasurement = null;
let areaMeasurements = [];
let currentAreaIndex = 0;

// Función para iniciar medición de áreas
function startAreaMeasurement() {
    const numAreas = parseInt(document.getElementById('num-areas').value);
    const container = document.getElementById('area-measurement-container');
    const measurementsDiv = document.getElementById('area-measurements');

    // Resetear mediciones anteriores
    areaMeasurements = [];
    currentAreaIndex = 0;

    // Crear tarjetas de medición para cada área
    measurementsDiv.innerHTML = '';
    for (let i = 1; i <= numAreas; i++) {
        const areaCard = document.createElement('div');
        areaCard.className = 'area-card';
        areaCard.style.cssText = `
            background: linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
            padding: 18px;
            border-radius: 12px;
            margin-bottom: 18px;
            border: 1px solid rgba(255,255,255,0.15);
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        `;

        areaCard.innerHTML = `
            <div style="flex: 1;">
                <div style="color: #00d4ff; font-weight: 600; margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
                    <span style="font-size: 16px;">📍</span>
                    Área ${i}
                </div>
                <div id="area-${i}-status" style="color: #b0b0b0; font-size: 14px; line-height: 1.4;">Esperando medición...</div>
            </div>
            <button id="measure-area-${i}" class="measure-btn" style="
                background: linear-gradient(135deg, #00d4ff, #0099cc);
                color: white;
                padding: 10px 18px;
                border-radius: 8px;
                border: none;
                cursor: pointer;
                font-weight: 500;
                transition: all 0.3s ease;
                box-shadow: 0 2px 8px rgba(0,212,255,0.3);
                min-width: 80px;
            ">Medir</button>
        `;

        measurementsDiv.appendChild(areaCard);

        // Agregar event listener al botón
        document.getElementById(`measure-area-${i}`).addEventListener('click', function() {
            measureArea(i);
        });
    }

    // Mostrar contenedor con animación
    container.style.display = 'block';
    container.style.animation = 'slideIn 0.5s ease-out';

    // Resetear resultados promedio
    document.getElementById('area-average-results').innerHTML = '<div style="color: #b0b0b0; font-style: italic;">Complete todas las mediciones para ver el promedio</div>';
}

// Función para medir un área específica con reintento y delay
function measureArea(areaNumber, retryCount = 0) {
    const statusDiv = document.getElementById(`area-${areaNumber}-status`);
    const button = document.getElementById(`measure-area-${areaNumber}`);
    const maxRetries = 3; // Aumentado a 3 reintentos

    // Cambiar estado a midiendo
    statusDiv.innerHTML = '<span style="color: #ffa500;">⏳ Midiendo...</span>';
    button.disabled = true;
    button.textContent = 'Midiendo...';
    button.style.background = 'linear-gradient(135deg, #ffa500, #ff8c00)';

    // Crear controlador para timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // Aumentado a 10 segundos

    // Agregar timestamp único para evitar cache
    const timestamp = Date.now();

    // Obtener datos actuales del sensor con timeout y timestamp único
    fetch(`/api/sensor_data?t=${timestamp}`, {
        signal: controller.signal,
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
        }
    })
        .then(response => {
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Verificar si los datos son válidos (al menos un valor no es cero)
            const isValidData = data.humidity > 0 || data.temperature > 0 ||
                              data.npk.n > 0 || data.npk.p > 0 || data.npk.k > 0;

            if (!isValidData) {
                throw new Error('Datos de sensores no válidos. Los valores parecen ser cero.');
            }

            // Guardar medición
            const measurement = {
                area: areaNumber,
                humidity: data.humidity,
                temperature: data.temperature,
                npk: {
                    n: data.npk.n,
                    p: data.npk.p,
                    k: data.npk.k
                },
                timestamp: new Date().toLocaleString()
            };

            areaMeasurements[areaNumber - 1] = measurement;

            // Actualizar UI
            statusDiv.innerHTML = `
                <div style="color: #00ff88;">✅ Medición completada</div>
                <div style="font-size: 12px; color: #b0b0b0; margin-top: 5px;">
                    H: ${data.humidity.toFixed(1)}% | T: ${data.temperature.toFixed(1)}°C<br>
                    N: ${data.npk.n.toFixed(1)} | P: ${data.npk.p.toFixed(1)} | K: ${data.npk.k.toFixed(1)} mg/kg
                </div>
            `;

            button.textContent = 'Completada';
            button.style.background = 'linear-gradient(135deg, #00ff88, #00cc66)';

            // Pequeño delay antes de verificar si todas las áreas están medidas
            setTimeout(() => {
                checkAllAreasMeasured();
            }, 500);
        })
        .catch(error => {
            clearTimeout(timeoutId);
            console.error('Error al medir área:', error);

            // Reintentar si no hemos alcanzado el máximo de reintentos
            if (retryCount < maxRetries && (error.name === 'AbortError' || error.message.includes('HTTP error') || error.message.includes('no válidos'))) {
                console.log(`Reintentando medición del área ${areaNumber} (intento ${retryCount + 1}/${maxRetries})`);
                statusDiv.innerHTML = `<span style="color: #ffa500;">⏳ Reintentando... (${retryCount + 1}/${maxRetries})</span>`;
                setTimeout(() => measureArea(areaNumber, retryCount + 1), 2000); // Esperar 2 segundos antes de reintentar
                return;
            }

            let errorMessage = '❌ Error en medición';
            if (error.name === 'AbortError') {
                errorMessage = '❌ Tiempo de espera agotado. Verifica la conexión al servidor.';
            } else if (error.message.includes('no válidos') || error.message.includes('sensores')) {
                errorMessage = '❌ Datos no válidos. Verifica que los sensores estén funcionando.';
            } else if (error.message.includes('HTTP error')) {
                errorMessage = '❌ Error del servidor. Inténtalo de nuevo.';
            }

            statusDiv.innerHTML = `<span style="color: #ff6b6b;">${errorMessage}</span>`;
            button.disabled = false;
            button.textContent = 'Reintentar';
            button.style.background = 'linear-gradient(135deg, #ff4757, #c44569)';
        });
}

// Función para verificar si todas las áreas están medidas
function checkAllAreasMeasured() {
    const numAreas = parseInt(document.getElementById('num-areas').value);
    const allMeasured = areaMeasurements.length === numAreas && areaMeasurements.every(m => m !== undefined);

    if (allMeasured) {
        calculateAreaAverages();
    }
}

// Función para calcular promedios de áreas
function calculateAreaAverages() {
    const numAreas = areaMeasurements.length;

    // Calcular promedios
    const averages = {
        humidity: areaMeasurements.reduce((sum, m) => sum + m.humidity, 0) / numAreas,
        temperature: areaMeasurements.reduce((sum, m) => sum + m.temperature, 0) / numAreas,
        n: areaMeasurements.reduce((sum, m) => sum + m.npk.n, 0) / numAreas,
        p: areaMeasurements.reduce((sum, m) => sum + m.npk.p, 0) / numAreas,
        k: areaMeasurements.reduce((sum, m) => sum + m.npk.k, 0) / numAreas
    };

    // Mostrar resultados
    const resultsDiv = document.getElementById('area-average-results');
    resultsDiv.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 10px;">
            <div style="text-align: center; padding: 10px; background: rgba(0,212,255,0.1); border-radius: 8px; border: 1px solid rgba(0,212,255,0.2);">
                <div style="color: #00d4ff; font-weight: 600; font-size: 14px;">Humedad</div>
                <div style="color: #00ff88; font-size: 18px; font-weight: 700;">${averages.humidity.toFixed(1)}%</div>
            </div>
            <div style="text-align: center; padding: 10px; background: rgba(255,165,0,0.1); border-radius: 8px; border: 1px solid rgba(255,165,0,0.2);">
                <div style="color: #ffa500; font-weight: 600; font-size: 14px;">Temperatura</div>
                <div style="color: #00ff88; font-size: 18px; font-weight: 700;">${averages.temperature.toFixed(1)}°C</div>
            </div>
            <div style="text-align: center; padding: 10px; background: rgba(255,99,132,0.1); border-radius: 8px; border: 1px solid rgba(255,99,132,0.2);">
                <div style="color: #ff6b6b; font-weight: 600; font-size: 14px;">Nitrógeno</div>
                <div style="color: #00ff88; font-size: 18px; font-weight: 700;">${averages.n.toFixed(1)} mg/kg</div>
            </div>
            <div style="text-align: center; padding: 10px; background: rgba(54,162,235,0.1); border-radius: 8px; border: 1px solid rgba(54,162,235,0.2);">
                <div style="color: #74b9ff; font-weight: 600; font-size: 14px;">Fósforo</div>
                <div style="color: #00ff88; font-size: 18px; font-weight: 700;">${averages.p.toFixed(1)} mg/kg</div>
            </div>
            <div style="text-align: center; padding: 10px; background: rgba(255,205,86,0.1); border-radius: 8px; border: 1px solid rgba(255,205,86,0.2);">
                <div style="color: #ffa500; font-weight: 600; font-size: 14px;">Potasio</div>
                <div style="color: #00ff88; font-size: 18px; font-weight: 700;">${averages.k.toFixed(1)} mg/kg</div>
            </div>
        </div>
        <div style="margin-top: 15px; padding: 15px; background: rgba(0,255,136,0.1); border-radius: 8px; border: 1px solid rgba(0,255,136,0.2);">
            <div style="color: #00ff88; font-weight: 600; text-align: center; margin-bottom: 10px;">
                🎯 Valores promedio calculados de ${numAreas} áreas medidas
            </div>
            <div style="display: flex; justify-content: center; gap: 10px;">
                <button id="save-area-btn" style="
                    background: linear-gradient(135deg, #00ff88, #00cc66);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(0,255,136,0.3);
                ">💾 Guardar Área</button>
                <button id="reset-area-measurement" style="
                    background: linear-gradient(135deg, #ff6b6b, #c44569);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(255,107,107,0.3);
                ">🔄 Nueva Medición</button>
            </div>
        </div>
    `;

    // Agregar event listeners para los nuevos botones
    document.getElementById('save-area-btn').addEventListener('click', saveArea);
    document.getElementById('reset-area-measurement').addEventListener('click', resetAreaMeasurement);
}

// Función para guardar el área con nombre personalizado
function saveArea() {
    // Crear modal para ingresar nombre
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        animation: fadeIn 0.3s ease-out;
    `;

    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.9));
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.2);
            max-width: 400px;
            width: 90%;
            text-align: center;
        ">
            <div style="color: #00d4ff; font-size: 24px; margin-bottom: 15px;">💾 Guardar Área</div>
            <div style="color: #666; margin-bottom: 20px; font-size: 14px;">
                Ingresa un nombre para identificar esta medición de área
            </div>
            <input type="text" id="area-name-input" placeholder="Ej: Campo Norte, Huerto Principal, etc." style="
                width: 100%;
                padding: 12px;
                border: 2px solid #00d4ff;
                border-radius: 8px;
                font-size: 16px;
                margin-bottom: 20px;
                outline: none;
                transition: border-color 0.3s ease;
                box-sizing: border-box;
            " maxlength="50">
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button id="confirm-save-btn" style="
                    background: linear-gradient(135deg, #00ff88, #00cc66);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(0,255,136,0.3);
                ">💾 Guardar</button>
                <button id="cancel-save-btn" style="
                    background: linear-gradient(135deg, #ff6b6b, #c44569);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 8px;
                    border: none;
                    cursor: pointer;
                    font-weight: 600;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 8px rgba(255,107,107,0.3);
                ">❌ Cancelar</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Enfocar el input
    setTimeout(() => {
        document.getElementById('area-name-input').focus();
    }, 100);

    // Event listeners para los botones
    document.getElementById('confirm-save-btn').addEventListener('click', function() {
        const areaName = document.getElementById('area-name-input').value.trim();

        if (!areaName) {
            alert('Por favor ingresa un nombre para el área.');
            return;
        }

        // Preparar datos para guardar
        const areaData = {
            name: areaName,
            measurements: areaMeasurements,
            averages: {
                humidity: areaMeasurements.reduce((sum, m) => sum + m.humidity, 0) / areaMeasurements.length,
                temperature: areaMeasurements.reduce((sum, m) => sum + m.temperature, 0) / areaMeasurements.length,
                n: areaMeasurements.reduce((sum, m) => sum + m.npk.n, 0) / areaMeasurements.length,
                p: areaMeasurements.reduce((sum, m) => sum + m.npk.p, 0) / areaMeasurements.length,
                k: areaMeasurements.reduce((sum, m) => sum + m.npk.k, 0) / areaMeasurements.length
            },
            timestamp: new Date().toISOString(),
            numAreas: areaMeasurements.length
        };

        // Cambiar estado del botón
        const saveBtn = document.getElementById('save-area-btn');
        const originalText = saveBtn.textContent;
        saveBtn.textContent = 'Guardando...';
        saveBtn.disabled = true;

        // Enviar datos al servidor
        fetch('/api/save_area', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(areaData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Cerrar modal
                modal.remove();

                // Mostrar mensaje de éxito
                const successModal = document.createElement('div');
                successModal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease-out;
                `;

                successModal.innerHTML = `
                    <div style="
                        background: linear-gradient(135deg, rgba(0,255,136,0.95), rgba(0,255,136,0.9));
                        padding: 30px;
                        border-radius: 15px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                        text-align: center;
                        max-width: 300px;
                        width: 90%;
                    ">
                        <div style="color: white; font-size: 48px; margin-bottom: 15px;">✅</div>
                        <div style="color: white; font-size: 18px; font-weight: 600; margin-bottom: 10px;">¡Área guardada!</div>
                        <div style="color: rgba(255,255,255,0.9); font-size: 14px;">"${areaName}" se ha guardado correctamente.</div>
                    </div>
                `;

                document.body.appendChild(successModal);

                // Cerrar modal de éxito después de 2 segundos
                setTimeout(() => {
                    successModal.remove();
                }, 2000);

                // Resetear estado del botón
                saveBtn.textContent = originalText;
                saveBtn.disabled = false;

            } else {
                throw new Error(data.message || 'Error al guardar el área');
            }
        })
        .catch(error => {
            console.error('Error al guardar área:', error);
            alert('Error al guardar el área: ' + error.message);

            // Resetear estado del botón
            saveBtn.textContent = originalText;
            saveBtn.disabled = false;
        });
    });

    document.getElementById('cancel-save-btn').addEventListener('click', function() {
        modal.remove();
    });

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modal.remove();
        }
    });
}

// Función para resetear la medición de áreas
function resetAreaMeasurement() {
    if (confirm('¿Estás seguro de que quieres iniciar una nueva medición? Se perderán todas las mediciones actuales.')) {
        // Resetear variables
        areaMeasurements = [];
        currentAreaIndex = 0;

        // Ocultar contenedor
        document.getElementById('area-measurement-container').style.display = 'none';

        // Resetear selector de número de áreas
        document.getElementById('num-areas').value = '2';

        // Limpiar resultados
        document.getElementById('area-measurements').innerHTML = '';
        document.getElementById('area-average-results').innerHTML = '<div style="color: #b0b0b0; font-style: italic;">Complete todas las mediciones para ver el promedio</div>';
    }
}

// Event listener para el botón de iniciar medición de áreas
document.getElementById('start-area-measurement').addEventListener('click', startAreaMeasurement);

// Actualizar datos cada 2 segundos
setInterval(updateData, 2000);

// Actualizar estadísticas cada 30 segundos
setInterval(updateStats, 30000);

// Cargar datos iniciales
updateData();
updateStats();
updateHistoricalData();
