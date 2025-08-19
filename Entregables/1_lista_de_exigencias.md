<h1>Lista de Exigencias</h1>

 <table border="1">
  <tr>
    <td colspan="4"><strong>LISTA DE EXIGENCIAS</strong></td>
    <td><strong>Páginas:</strong> 4</td>
  </tr>
  <tr>
    <td colspan="4" rowspan="1"></td>
    <td><strong>Edición:</strong> Rev. 1</td>
  </tr>
  <tr>
    <td><strong>PROYECTO:</strong></td>
    <td colspan="3">SoilScope</td>
    <td><strong>Fecha:</strong> 18/08/2025</td>
  </tr>
  <tr>
    <td><strong>CLIENTE:</strong></td>
    <td colspan="3"><strong>UNIVERSIDAD PERUANA CAYETANO HEREDIA</strong></td>
    <td><strong>Revisado:</strong></td>
  </tr>
  <tr>
    <td colspan="4"></td>
    <td><strong>Elaborado:</strong><br>A.D, D.H, MG.A, M.A, Y.H</td>
  </tr>
</table>

<br>
 <table border="1">
  <thead>
    <tr>
      <th>Fecha (cambios)</th>
      <th>Deseo o Exigencia</th>
      <th>Descripción</th>
      <th>Responsable</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Función Principal: Monitorear de forma intermitente y remota las condiciones del suelo (humedad volumétrica, temperatura y nutrientes NPK) para apoyar la toma de decisiones en riego y fertilización en cultivos de café [1]</td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Geometría: Cada módulo sensor ocupa una área no mayor a 0.3 m², con altura máxima de 30 cm (incluye parte enterrada de la plantación).</td>
      <td>D.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Cinemática: El diseño permite inserción y extracción sin alterar el estado del terreno ni afectar el crecimiento radicular.</td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Fuerzas: El sistema se inserta en suelos compactos sin necesidad de maquinaria pesada.</td>
      <td>D.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Energía: Está compuesto por un panel solar monocristalino de 20 W (eficiencia de 10,88%) y una batería recargable de 12 V / 7 Ah. Permitiendo almacenar y generar la energía suficiente para su uso durante la noche o en condiciones de baja radiación solar. Asegurando una operación continua y confiable del sistema de monitoreo, incluso en áreas con acceso limitado a la red eléctrica (2)(3).</td>
      <td>Y.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Materia: El sistema monitorea variables del suelo agrícola (humedad, nutrientes (NPK) y temperatura). Los sensores tendrán una precisión de ±3% para humedad, ±2% en nutrientes NPK y ±0.5 °C en temperatura, garantizando mediciones fiables para un manejo eficiente (3)(4). La salida será un registro digital de datos accesible vía aplicación móvil o plataforma web, con funciones de alerta y trazabilidad agronómica para decisiones de riesgo y fertilización (5).</td>
      <td>MG.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Señales (Información): Cuenta con las siguientes señales de entrada y salida:<br><br>
      Señales de entrada:<br>
      ● Señal de encendido: Activa la alimentación de los componentes eléctricos y electrónicos que conforman la máquina.<br>
      ● Señales en relación a cada parámetro (humedad, temperatura, npk) con la misma precisión definida (±3%, ±2%, ±0.5°C)<br>
      ● Señal de parada: Esta señal detiene el proceso en cualquier etapa con un tiempo de respuesta < 3 segundos.<br><br>
      Señales de salida (señales visuales):<br>
      ● Señales de estado: Muestra la información recopilada (humedad, temperatura y NPK) por la plataforma web mediantes gráficos, actualizados con una frecuencia de 1 dato por minuto y retardo de máximo 8 segundos.<br>
      ● Señal de alerta: El sistema enviará notificaciones push en la plataforma web en caso de condiciones críticas o errores, con un tiempo de reacción de < 3 segundos.</td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Control: El sistema de control debe mantenerse estable durante toda la operación, la activación de sensores con un tiempo de respuesta <3s, recolección y transmisión de datos con una tasa de error <3% y frecuencia mínima de actualización de 1 dato por minuto. Además, disponibilidad operacional >90% durante el periodo de uso y la ubicación de sensores y actuadores definida en el diseño para obtener lecturas representativas.</td>
      <td>Y.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Electrónico (hardware): El sistema debe asegurar la captura confiable de datos del suelo, con sensores dispuestos adecuadamente según las variables a medir y una unidad de control que coordine todos los dispositivos para mantener la coherencia en la información obtenida.</td>
      <td>Y.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Software:<br>
      ● Algoritmo de lectura con procesamiento básico (media móvil, alertas).<br>
      ● Visualización en dashboard web o app móvil.</td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Comunicaciones: El sistema de monitoreo garantizará una conexión estable y directa entre la unidad de control, los sensores y los actuadores, asegurando la transmisión clara y continua de los datos. Asimismo, deberá interpretar correctamente las entradas provenientes tanto del entorno como del operador. La interacción entre los distintos módulos se llevará a cabo sin interferencias, de modo que todos los componentes trabajen en conjunto sin comprometer la funcionalidad general del sistema.</td>
      <td>Y.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Seguridad: El sistema destinado a la evaluación de suelos debe garantizar la fiabilidad y precisión de los datos generados, asegurando que reflejen de manera veraz las condiciones reales del suelo. Esto es esencial para una gestión agrícola eficiente y sostenible. La Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) destaca que la calidad, oportunidad y fiabilidad de los datos son fundamentales para la toma de decisiones en el desarrollo agrícola (6). Asimismo, el Departamento de Agricultura de los Estados Unidos (USDA) enfatiza la importancia de evaluar propiedades físicas, químicas y biológicas del suelo mediante datos precisos y consistentes (7). Por lo tanto, los sistemas de evaluación de suelos deben incorporar mecanismos que aseguren la integridad, exactitud y coherencia de los datos recopilados, alineándose con estas directrices internacionales.</td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Ergonomía: Los elementos de control del equipo serán ubicados y ajustados en una altura y posición que prevenga molestias o riesgos para la salud del operador. Este diseño se alineará con los estándares de la norma ISO 7250, que establece las dimensiones corporales básicas necesarias para crear dispositivos tecnológicos ergonómicos y seguros.</td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Fabricación: La construcción del equipo consiste en el uso de materiales y componentes electrónicos disponibles en el mercado nacional, facilitando así la rápida reposición y mantenimiento de las partes. Es importante que los actuadores, sensores y demás elementos electrónicos sean accesibles localmente para asegurar tiempos de respuesta ágiles. Además, el ensamblaje se realizará en talleres próximos, lo que permitirá un transporte más sencillo y un mantenimiento eficiente.</td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>D</td>
      <td>Control de calidad: El sistema debe cumplir con los requisitos de diseño (dimensiones, tolerancias y materiales), además de respetar normativas de seguridad, sanidad, producción y medio ambiente. En zonas rurales, la calibración periódica es esencial para garantizar la precisión de las mediciones; esta puede realizarse de manera sencilla comparando los sensores con muestras de suelo de humedad conocida, preparadas manualmente. Según RikaSensor (2024), el mantenimiento y la calibración regular de los sensores de humedad y temperatura del suelo son fundamentales para asegurar su fiabilidad y correcto funcionamiento.</td>
      <td>A.D</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Montaje: El diseño del sistema permite una instalación estable y segura, asegurando que su base pueda fijarse firmemente sobre una superficie nivelada para evitar movimientos que comprometan su estabilidad, integridad y correcto funcionamiento. Esto es especialmente importante para garantizar la precisión de las mediciones y la durabilidad del sistema. Además, el sistema cuenta con un método de alimentación energética compatible con las condiciones y recursos disponibles en la zona de monitoreo, siguiendo lineamientos técnicos y normativos establecidos por el Ministerio de Desarrollo Agrario y Riego (MIDAGRI) para equipos de monitoreo agrícola (9).</td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Transporte: Peso y dimensiones adecuados para transporte manual o en vehículos ligeros en el entorno agrícola.</td>
      <td>A.D</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>D</td>
      <td>Uso: El sistema deberá operar en zonas cafetaleras hasta 1,800 m.s.n.m., temperaturas de 18–24 °C, alta humedad y lluvias > 2,000 mm. Es un requerimiento claro y medible, realista porque responde a condiciones locales, verificable en campo y formulado de manera neutral. Estas condiciones están descritas en la Guía técnica para el cultivo sostenible del café del INIA (1).</td>
      <td>D.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Mantenimiento: El diseño deberá permitir inspecciones y reparaciones en un máximo de 30 minutos, con reemplazo directo de sensores y componentes electrónicos. Es comprensible y medible, realista por su aplicabilidad, verificable mediante pruebas de mantenibilidad y redactado de forma neutral. Este enfoque coincide con la importancia de la mantenibilidad señalada en sistemas de monitoreo de bajo costo (2).</td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Costos: El costo total no superará los S/ 500, priorizando sensores y microcontroladores de bajo costo y disponibilidad local. Es claro y medible por el límite establecido, realista en función del presupuesto académico, verificable mediante cotizaciones y neutral al no depender de proveedores específicos. Existen sensores de humedad y NPK accesibles en el mercado que cumplen con este criterio (3,4).</td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Plazos: El proyecto se desarrollará en 138 horas efectivas, entre el 19 de agosto y el 9 de diciembre de 2025, con hitos definidos en un cronograma. Es un requerimiento claro y medible, realista por los tiempos disponibles, verificable al compararlo con el avance y neutral respecto a las herramientas de planificación. Este enfoque es coherente con lineamientos de gestión propuestos para la planificación agrícola y ambiental (5).</td>
      <td>M.A</td>
    </tr>
  </tbody>
</table>
<section class="bibliografia">
  <h2>Bibliografía</h2>
  <ol>
    <li>Instituto Nacional de Innovación Agraria (INIA). Guía técnica para el cultivo sostenible del café. Lima: INIA; 2022 [citado 2025 May 19]. Disponible en: <a href="https://repositorio.inia.gob.pe/bitstream/20.500.12955/2015/1/GUIA-CAFE-INIA-2022.pdf" target="_blank" rel="noopener noreferrer">https://repositorio.inia.gob.pe/bitstream/20.500.12955/2015/1/GUIA-CAFE-INIA-2022.pdf</a></li>
    <li>Damia Solar. ¿Cuál es la vida útil de los paneles solares? [Internet]. 2023 [citado 2025 mayo 19]. Disponible en: <a href="https://www.damiasolar.com/blog/cual-es-la-vida-util-de-los-paneles-solares" target="_blank" rel="noopener noreferrer">https://www.damiasolar.com/blog/cual-es-la-vida-util-de-los-paneles-solares</a></li>
    <li>Redway Tech. ¿Cuánto dura una batería de litio de 12 V y 7 A [Internet]. 2023 [citado 2025 mayo 19]. Disponible en: <a href="https://www.redway-tech.com/es/how-long-will-a-12v-7ah-lithium-battery-last/" target="_blank" rel="noopener noreferrer">https://www.redway-tech.com/es/how-long-will-a-12v-7ah-lithium-battery-last/</a></li>
    <li>Renke. Soil NPK Sensor. [Internet]. [citado 2025 May 19]. Disponible en: <a href="https://www.renkeer.com/product/soil-npk-sensor/" target="_blank" rel="noopener noreferrer">https://www.renkeer.com/product/soil-npk-sensor/</a></li>
    <li>Catsensors. DL-SDD: Humedad, temperatura y salinidad del suelo. [Internet]. [citado 2025 May 19]. Disponible en: <a href="https://www.catsensors.com/es/lorawan/sensores-lorawan-decentlab/dl-sdd-humedad-temperatura-y-salinidad-del-suelo" target="_blank" rel="noopener noreferrer">https://www.catsensors.com/es/lorawan/sensores-lorawan-decentlab/dl-sdd-humedad-temperatura-y-salinidad-del-suelo</a></li>
    <li>FAO. Datos para decisiones agrícolas: marco para la agricultura digital inclusiva [Internet]. Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura; 2021 [citado 2025 May 19]. Disponible en: <a href="https://openknowledge.fao.org/server/api/core/bitstreams/fb16a3f7-6c05-4508-bb40-8440aba30876/content" target="_blank" rel="noopener noreferrer">https://openknowledge.fao.org/server/api/core/bitstreams/fb16a3f7-6c05-4508-bb40-8440aba30876/content</a></li>
    <li>USDA-NRCS. Guía para la evaluación de la calidad y salud del suelo [Internet]. Washington, D.C.: Departamento de Agricultura de los Estados Unidos; 2022 [citado 2025 May 19]. Disponible en: <a href="https://www.nrcs.usda.gov/sites/default/files/2022-10/Gu%C3%ADa%20para%20la%20Evaluaci%C3%B3n%20de%20la%20Calidad%20y%20Salud%20del%20Suelo.pdf" target="_blank" rel="noopener noreferrer">https://www.nrcs.usda.gov/sites/default/files/2022-10/Gu%C3%ADa%20para%20la%20Evaluaci%C3%B3n%20de%20la%20Calidad%20y%20Salud%20del%20Suelo.pdf</a></li>
    <li>RikaSensor. The Importance of Regular Calibration for Soil Moisture Sensors. [Internet]. 2024 [citado 2025 May 19]. Disponible en: <a href="https://www.rikasensor.com/news/the-importance-of-regular-calibration-for-soil-moisture-sensors.html" target="_blank" rel="noopener noreferrer">https://www.rikasensor.com/news/the-importance-of-regular-calibration-for-soil-moisture-sensors.html</a></li>
    <li>Ministerio de Desarrollo Agrario y Riego (MIDAGRI). Reglamento de Gestión Ambiental del Sector Agrario. Decreto Supremo Nº 019-2012-AG. Lima: MIDAGRI; 2012. Disponible en: <a href="https://www.senace.gob.pe/wp-content/uploads/filebase/senacenormativa/NAS-4-1-01-DS-019-2012-AG.pdf" target="_blank" rel="noopener noreferrer">https://www.senace.gob.pe/wp-content/uploads/filebase/senacenormativa/NAS-4-1-01-DS-019-2012-AG.pdf</a></li>
  </ol>
</section>
