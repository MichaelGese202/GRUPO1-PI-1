# 📦 Caja Negra - Análisis de Sistema

<div align="center">

![Sistema](https://img.shields.io/badge/Tipo-Sistema%20IoT-blueviolet?style=for-the-badge)
![Análisis](https://img.shields.io/badge/Análisis-Funcional-success?style=for-the-badge)
![Documentación](https://img.shields.io/badge/Docs-Actualizada-blue?style=for-the-badge)

**Análisis funcional del sistema SoilScope mediante metodología de caja negra**

[🔍 Entradas/Salidas](#-definición-de-entradas-y-salidas) • [💻 Software](#-entradas-y-salidas-software) • [⚙️ Funciones](#-esquema-de-funciones)

</div>

---

## 🔄 Definición de Entradas y Salidas

<div align="center">

### 📥 Sistema Hardware Completo

</div>

La siguiente imagen muestra el flujo completo de información del sistema, desde las señales físicas de entrada hasta las salidas de control y visualización:

<div align="center">

![Diagrama de Entradas y Salidas - Hardware](/Imagenes/final1.png)

</div>

## 💻 Entradas y Salidas (Software)

<div align="center">

### 🖥️ Arquitectura del Software

</div>

El siguiente diagrama ilustra el flujo de datos desde la capa de adquisición hasta la interfaz de usuario:

<div align="center">

![Diagrama de Software](/Imagenes/final2.png)

</div>

## ⚙️ Esquema de Funciones

<div align="center">

### 🔄 Diagrama Funcional del Sistema

</div>

El siguiente esquema muestra la interrelación entre las diferentes funciones del sistema:

<div align="center">

<img src="/Imagenes/final3.png" alt="Esquema de Funciones" width="1500">
</div>

### 🎯 Funciones Principales

<table>
<tr>
<td width="33%" align="center">

#### 📡 ADQUISICIÓN
![Sensor](https://img.shields.io/badge/Función-Sensado-blue?style=flat-square)

**Tareas:**
- Lectura de sensores
- Muestreo continuo
- Validación de datos
- Timestamp automático

**Frecuencia:**
⏱️ Cada 15 minutos

</td>
<td width="33%" align="center">

#### 🧠 PROCESAMIENTO
![Process](https://img.shields.io/badge/Función-Análisis-green?style=flat-square)

**Tareas:**
- Filtrado de ruido
- Cálculo de estadísticas
- Comparación con umbrales
- Generación de alertas

**Latencia:**
⚡ < 2 segundos

</td>
<td width="33%" align="center">

#### 📤 TRANSMISIÓN
![Cloud](https://img.shields.io/badge/Función-IoT-purple?style=flat-square)

**Tareas:**
- Encriptación de datos
- Envío a la nube
- Sincronización
- Confirmación de recepción

**Protocolo:**
🔒 

</td>
</tr>
</table>

### 📊 Matriz de Funciones vs Requisitos

| Función | Entrada | Proceso | Salida | Prioridad |
|---------|---------|---------|--------|-----------|
| 🌡️ Medición de Temperatura | Sensor DHT22 | Conversión analógico-digital | Valor °C | 🔴 Alta |
| 💧 Medición de Humedad | Sensor capacitivo | Calibración y filtrado | Porcentaje % | 🔴 Alta |
| 🧪 Análisis NPK | Sensor NPK | Conversión ppm | Valores N-P-K | 🟠 Media |
| 📡 Comunicación IoT | Datos procesados | Empaquetado JSON | Transmisión MQTT | 🔴 Alta |
| ⚡ Gestión de Energía | Panel solar/Batería | Monitoreo de carga | Estado energético | 🟠 Media |
| 🔔 Sistema de Alertas | Umbrales superados | Evaluación de condiciones | Notificación push | 🟡 Baja |

---

**Valores típicos para café:**
- N óptimo: 40-60 ppm
- P óptimo: 25-40 ppm
- K óptimo: 120-180 ppm
- f ≈ 0.7 (70% de eficiencia)

</details>

---

## 🎓 Metodología de Análisis

### 🔬 Enfoque de Caja Negra

> **Principio fundamental:** Analizar el sistema únicamente desde sus interfaces externas, sin considerar la implementación interna.

#### ✅ Ventajas del Método

| Ventaja | Descripción |
|---------|-------------|
| 🎯 **Claridad** | Enfoque simplificado en entradas/salidas |
| 🔄 **Modularidad** | Permite cambios internos sin afectar interfaces |
| 📝 **Documentación** | Especificaciones claras y concisas |
| 🧪 **Testing** | Facilita pruebas de integración |
| 🔌 **Interoperabilidad** | Compatible con diferentes implementaciones |

## 📊 Resumen Ejecutivo

<div align="center">

### 🎯 Métricas Clave del Sistema

| Métrica | Valor | Estado |
|---------|-------|--------|
| ⏱️ **Frecuencia de muestreo** | 15 min | ✅ Óptimo |
| 🎯 **Precisión temperatura** | ±0.5°C | ✅ Alta |
| 💧 **Precisión humedad** | ±3% | ✅ Buena |
| 🧪 **Precisión NPK** | ±0.5% | ✅ Alta |
| 📡 **Latencia de transmisión** | <2s | ✅ Excelente |
| 🔋 **Autonomía batería** | 24h | ✅ Suficiente |
| 💰 **Costo total** | <S/500 | ✅ Económico |

</div>

---

## 🚀 Próximos Pasos

- [ ] 🔬 Pruebas de integración de sensores
- [ ] 📡 Validación de protocolo IoT
- [ ] 🎨 Diseño de interfaz web
- [ ] 🧪 Calibración en campo
- [ ] 📊 Análisis de datos históricos
- [ ] 🔒 Implementación de seguridad
- [ ] 📱 Desarrollo de app móvil

---

<div align="center">

**📦 Análisis de Caja Negra - SoilScope**

*Diseñado para la excelencia en agricultura de precisión* 🌱

[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)](https://github.com/soilscope)

</div>