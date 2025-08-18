# 🌱 Sistema de Monitoreo de Suelo con Energía Solar

## ✅ Esquema seleccionado (Esquema 3)

![Esquema 3 - Sistema de monitoreo](https://github.com/Sawamurarebatta/GRUPO_4_FDD/blob/main/IMAGENES/8.jpg)

### Descripción del funcionamiento – C3

El panel solar se encuentra **fuera del equipo principal**, separado del ESP32 para facilitar el posicionamiento óptimo de captación solar.  
Tres cables de longitud precisa permiten **insertar los sensores** (humedad, pH y temperatura) a varios centímetros bajo tierra **sin necesidad de mover la unidad central**.  
El software interno está programado para:

- Ejecutar **muestreos automáticos**.
- Aplicar **promedios para descartar lecturas atípicas**.
- Enviar resultados en tiempo real a la **plataforma móvil** mediante **conectividad inalámbrica (Bluetooth)**.

---

## 🧪 Otros esquemas evaluados

### 🔹 Esquema 1

![Esquema 1](https://github.com/Sawamurarebatta/GRUPO_4_FDD/blob/main/IMAGENES/6.png)

#### Descripción del funcionamiento – C1

El panel solar está integrado en la parte superior de la carcasa con diseño hermético.  
El microcontrolador recibe la energía solar y gestiona las lecturas de los tres sensores colocados en el suelo.  
La etiqueta "Carcasa" se reposicionó lateralmente para evitar confusiones con los cables.

---

### 🔹 Esquema 2

![Esquema 2](https://github.com/Sawamurarebatta/GRUPO_4_FDD/blob/main/IMAGENES/7.png)

#### Descripción del funcionamiento – C2

Utiliza un microcontrolador Arduino y una batería interna recargable.  
El panel solar montado en la parte superior recarga la batería.  
Tres cables conducen señales desde sensores de humedad, pH y temperatura.  
El sistema convierte señales analógicas, las almacena y las transmite a una app móvil.

---

## 🏆 Elección final: Esquema 3

Se seleccionó el **Esquema 3** por su mayor flexibilidad de instalación, separación del panel solar para mejor eficiencia energética, y una manera mejor de colocar los sensores

