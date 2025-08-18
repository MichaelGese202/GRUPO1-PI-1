<p align="center">
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/1.png" alt="logo" width="200"/>
</p>

# FACULTAD DE CIENCIAS E INGENIERÍA

<p align="center">
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/2.png" alt="arduino" width="250"/>
</p>

## INFORME DE EJERCICIOS CON ARDUINO Y COMPONENTES ELECTRÓNICOS BÁSICOS

---

### CURSO:
**Fundamentos de Diseño**

### Integrantes:
- Cosme Pérez Yosselin Lizeth  
- Rebatta Jeri Patricia Del Pilar  
- Andres Andres Michael Geser
- Roldan Montalvan Jorge Esteban
---

## EJERCICIOS CON COMPONENTES ELECTRÓNICOS BÁSICOS

---

### Ejemplo 1: Dirección básica del motor

Control de dirección de un **motorreductor GA12-N20** usando un **módulo L298N** y una **placa Arduino UNO**. El motor cambia de sentido de giro cada 5 segundos.  
Se conectaron los pines IN1 e IN2 del L298N a los pines D4 y D5 del Arduino, y se habilitó ENA con un jumper.

Este ejercicio ayudó a entender cómo usar un controlador L298N para manejar motores DC.

#### Materiales:
- 1 motorreductor GA12-N20 (6 V)  
- 1 módulo controlador de motores L298N  
- 1 placa Arduino UNO o compatible  
- 1 fuente de alimentación externa (6–12 V)  
- 1 placa de pruebas (protoboard)  
- Cables Dupont  
- 1 cable USB  
- Arduino IDE  

#### Evidencia:
<p align="center">
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/3.jpg" alt="evidencia_1" width="400"/>
</p>

---

### Ejemplo 2: Potenciómetro de velocidad del motor

Control de **velocidad** de un **motor GA12-N20** usando un potenciómetro y módulo L298N.  
El valor analógico del potenciómetro se convierte en una señal PWM para variar la velocidad.  
El sentido de giro se mantuvo fijo (horario) y se visualizaron los valores ADC y PWM en el monitor serial.

#### Materiales:
- 1 motorreductor GA12-N20 (6 V)  
- 1 potenciómetro (10kΩ recomendado)  
- 1 módulo L298N  
- 1 placa Arduino UNO  
- 1 fuente de alimentación (6–12 V)  
- 1 protoboard  
- Cables Dupont  
- 1 cable USB  
- Arduino IDE  

#### Evidencia:
<p align="center">
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/4.jpg" width="250"/>
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/5.jpg" width="250"/>
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/6.jpg" width="250"/>
</p>

---

### Ejemplo 3: Servo DS3235 controlado con potenciómetro (ADC a PWM)

Control de **posición** del **servo DS3235** mediante un potenciómetro.  
El valor del potenciómetro se transformó en una señal PWM de 500 a 2400 μs usando `writeMicroseconds()`.  
Se visualizaron estimaciones de ángulo en el monitor serial, útil para aplicaciones como ortesis robóticas o simuladores.

#### Materiales:
- 1 servomotor DS3235  
- 1 potenciómetro (10kΩ)  
- 1 placa Arduino UNO  
- 1 fuente externa de 6V–7.4V (mínimo 2A)  
- 1 protoboard  
- Cables Dupont  
- 1 cable USB  
- Arduino IDE  

#### Evidencia:
<p align="center">
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/7.jpg" width="250"/>
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/8.jpg" width="250"/>
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/9.jpg" width="250"/>
</p>

---

### Ejemplo 4: Servo DS3235 – Control básico con posiciones fijas

Se programaron 4 posiciones fijas (0°, 90°, 180°, 270°) para un servo DS3235 usando `writeMicroseconds()`.  
Cada movimiento tenía una pausa de 5 segundos. Útil para mecanismos de precisión en aplicaciones biomédicas.

#### Materiales:
- 1 servomotor DS3235  
- 1 fuente externa de 6V–7.4V (mínimo 2A)  
- 1 placa Arduino UNO  
- Cables Dupont o de 3 pines  
- 1 cable USB  
- Arduino IDE  

#### Evidencia:
<p align="center">
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/10.jpg" width="300"/>
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/11.jpg" width="300"/>
</p>

---

### Ejemplo 5: Activación básica del motor de vibración

Activación de un **micromotor de vibración tipo moneda** con un **transistor NPN** controlado por señal digital del pin 3.  
El motor vibra por 2 segundos y se apaga 1 segundo, en bucle. Se usó un diodo para protección contra picos de voltaje.

#### Materiales:
- 1 micromotor de vibración tipo moneda (3V–5V)  
- 1 transistor NPN (2N2222 o S8050)  
- 1 diodo (1N4007)  
- 1 resistencia de 220Ω  
- 1 protoboard  
- Cables Dupont  
- 1 placa Arduino UNO  
- Arduino IDE  

#### Evidencia:
<p align="center">
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/12.jpg" width="300"/>
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/13.jpg" width="300"/>
</p>

---

### Ejemplo 6: Potenciómetro para controlar la vibración

Control de la **intensidad de vibración** del micromotor tipo moneda usando un **potenciómetro**.  
El valor del potenciómetro se convierte en PWM para regular la potencia a través de un transistor NPN.  
Los valores del ADC y PWM se mostraron en el monitor serial.

#### Materiales:
- 1 micromotor de vibración tipo moneda  
- 1 potenciómetro (10kΩ)  
- 1 transistor NPN (2N2222 o S8050)  
- 1 resistencia de 1kΩ  
- 1 diodo (1N4007)  
- 1 protoboard  
- Cables Dupont  
- 1 placa Arduino UNO  
- Arduino IDE  

#### Evidencia:
<p align="center">
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/14.jpg" width="300"/>
  <img src="https://raw.githubusercontent.com/Sawamurarebatta/GRUPO_4_FDD/main/Entregables/INFORME%20DE%20EJERCICIOS%20CON%20ARDUINO/imagenes_informe/15.jpg" width="300"/>
</p>

---

## 📎 Material audiovisual del taller

🔗 [Enlace a carpeta de Drive](https://drive.google.com/drive/folders/1baGlwDrrcqd-FUc9nttekGmv_WtFbSxM?usp=sharing)

---






