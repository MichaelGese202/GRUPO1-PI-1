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
      <td>Función Principal: El sistema debe monitorear de forma intermitente y remota las condiciones del suelo (humedad volumétrica, temperatura y nutrientes NPK) en intervalos de 30 minutos, para apoyar la toma de decisiones en riego y fertilización en cultivos de café [1]</td>
      <td>A.D, D.H, MG.A, M.A, Y.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Geometria: El prototipo tiene una medición estimada de 20cm * 20cm de base y una latura mínima de 50cm, definida para permitir la inserción del sensor en el suelo y dejar visuble la parte del sistema. </td>
      <td>D.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Cinemática: El prototipo contempla un panel solar con orientación ajustable al sol, mientras que la base es estática.</td>
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
      <td>Materia: El sistema monitorea variables del suelo agrícola (humedad, nutrientes (NPK) y temperatura). Los sensores tendrán una precisión de ±3% para humedad, ±2% en nutrientes NPK и ±0.5 °C en temperatura, garantizando mediciones fiables para un manejo eficiente (4) (5). La salida será un registro digital de datos accesible vía aplicación móvil o plataforma web, con funciones de alerta y trazabilidad agronómica para decisiones de riesgo y fertilización.</td>
      <td>MG.A</td>
    </tr>
    <tr>
  <td>18/08/25</td>
  <td>E</td>
  <td>Señales (Información): Cuenta con las siguientes señales de entrada y salida: <br><br>
  Señales de entrada:<br>
  ● Señal de encendido: Activa la alimentación de los componentes eléctricos y electrónicos que conforman la máquina.<br>
  ● Señales en relación a cada parámetro (humedad, temperatura, npk) con la misma precisión definida (±3%,±2%, ±0.5°C)<br>
  ● Señal de parada: Esta señal detiene el proceso en cualquier etapa con un tiempo de respuesta < 3 segundos.<br><br>
  Señales de salida (señales visuales):<br>
  ● Señales de estado: Muestra la información recopilada (humedad, temperatura y NPK) por la plataforma web mediantes gráficos, actualizados con una frecuencia de 1 dato por minuto y retardo de máximo 8 segundos.<br>
  ● Señal de alerta: El sistema enviará notificaciones push en la plataforma web en caso de condiciones críticas o errores, con un tiempo de reacción de < 3 segundos.
  </td>
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
  <td>Software: <br>
  ● El algoritmo de lectura procesa datos con media móvil de 5 muestras y generará alertas por umbrales configurables por el usuario.<br>
  ● La visualización de datos se realizará en dashboard web y/o app móvil, con actualización mínima de 1 dato por 30 min y retardo máximo de 150 segundos entre la captura y la visualización.</td>
  <td>M.A</td>
</tr>
<tr>
  <td>18/08/25</td>
  <td>E</td>
  <td>Comunicaciones: El sistema de monitoreo garantizará una conexión estable y directa entre la unidad de control, los sensores y los actuadores, asegurando la transmisión continua de los datos. Asimismo, deberá interpretar correctamente las entradas provenientes tanto del entorno como del operador. La interacción entre los distintos módulos se llevará a cabo sin interferencias, de modo que todos los componentes trabajen en conjunto sin comprometer la funcionalidad general del sistema.</td>
  <td>Y.H</td>
</tr>
<tr>
  <td>18/08/25</td>
  <td>E</td>
  <td>Seguridad: El sistema de evaluación de suelos debe garantizar la integridad, exactitud y coherencia de los datos generados, reflejando fielmente las condiciones físicas, químicas y biológicas del suelo. Debe alinearse con los lineamientos técnicos establecidos por organismos internacionales como la FAO y el USDA, los cuales destacan la importancia de contar con datos fiables y consistentes para una adecuada gestión agrícola.</td>
  <td>M.A</td>
</tr>
<tr>
  <td>18/08/25</td>
  <td>E</td>
  <td>Ergonomía: Los elementos de control del equipo se ubicarán y ajustarán a una altura y posición que evitan incomodidades y riesgos para la salud del operador. El diseño se fundamenta en los lineamientos de la norma ISO 7250, la cual define las dimensiones corporales básicas para el diseño ergonómico de dispositivos tecnológicos. Considerando las estaturas promedio de referencia, 178 cm para hombres y 165 cm para mujeres, se garantizará que el sistema pueda ser operado de manera cómoda, segura y eficiente por la mayoría de los usuarios.</td>
  <td>Y.H</td>
</tr>
<tr>
  <td>18/08/25</td>
  <td>E</td>
  <td>Fabricación: El sistema deberá cumplir estrictamente con los requisitos de diseño establecidos (dimensiones, tolerancias y materiales), así como con las normativas vigentes de seguridad, sanidad, producción y medio ambiente. Para este fin, los integrantes del área de ingeniería ambiental serán responsables de investigar y verificar la normativa técnica aplicable al sector agrícola y al uso de sensores de monitoreo de suelos. Asimismo, se establecerán procedimientos de calibración periódica para los sensores de humedad y temperatura, recomendándole una frecuencia mínima de cada 6 meses o posterior a condiciones críticas de operación (como lluvias intensas, variaciones extremas de temperatura o mantenimientos correctivos). Esta práctica garantizará la precisión, coherencia y confiabilidad de los datos obtenidos, aspectos fundamentales para la toma de decisiones en entornos rurales..</td>
  <td>M.A</td>
</tr>
<tr>
  <td>18/08/25</td>
  <td>D</td>
  <td>Control de calidad: El sistema debe cumplir con los requisitos de diseño especificados (dimensiones, tolerancias y materiales), así como con las normativas vigentes de seguridad, sanidad, producción y medio ambiente. Debe incluir procedimientos de calibración periódica para sensores de humedad y temperatura del suelo, utilizando muestras de referencia. La calibración es necesaria para garantizar la precisión de las mediciones, especialmente en entornos rurales.</td>
  <td>A.D</td>
</tr>
<tr>
  <td>18/08/25</td>
  <td>E</td>
  <td>Montaje: El sistema debe permitir una instalación estable y segura sobre superficies niveladas, con una base que evite desplazamientos. Debe incorporar un método de alimentación energética adecuado a las condiciones del entorno, conforme to los lineamientos técnicos y normativos del Ministerio de Desarrollo Agrario y Riego (MIDAGR).</td>
  <td>M.A</td>
</tr>
<tr>
  <td>18/08/25</td>
  <td>E</td>
  <td>Transporte: El sistema debe tener dimensiones y peso que permitan su transporte manual o mediante vehículos ligeros en entornos agrícolas. El peso total no debe superar el límite que impida su manipulación y traslado de forma eficiente.</td>
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
  <td>Costos: El costo total de materiales y componentes no debe superar los S/ 500, considerando sensores de humedad, temperatura y nutrientes NPK, así como microcontroladores de bajo costo y disponibilidad local.</td>
  <td>A.D</td>
</tr>
<tr>
  <td>18/08/25</td>
  <td>E</td>
  <td>Plazos: El proyecto se desarrollará en 138 horas efectivas, entre el 19 de agosto y el 9 de diciembre de 2025, con hitos definidos en un cronograma. Este enfoque es coherente con lineamientos de gestión propuestos para la planificación agrícola y ambiental (5).</td>
  <td>M.A</td>
</tr>
  </tbody>
</table>
<section class="bibliografia">
  <h2>Referencias</h2>
 
  <h2>Bibliografía</h2>
  <ol>
    <li>Instituto Nacional de Innovación Agraria (INIA). Guía técnica para el cultivo sostenible del café. Lima: INIA; 2022 [citado 2025 May 19]. Disponible en: <a href="https://repositorio.inia.gob.pe/items/5137a33f-f068-420d-b088-b7f6ea464ea3" target="_blank" rel="noopener noreferrer">https://repositorio.inia.gob.pe/bitstream/20.500.12955/2015/1/GUIA-CAFE-INIA-2022.pdf</a></li>
    <li>Damia Solar. ¿Cuál es la vida útil de los paneles solares? [Internet]. 2023 [citado 2025 mayo 19]. Disponible en: <a href="https://www.damiasolar.com/blog/cual-es-la-vida-util-de-los-paneles-solares" target="_blank" rel="noopener noreferrer">https://www.damiasolar.com/blog/cual-es-la-vida-util-de-los-paneles-solares</a></li>
    <li>Redway Tech. ¿Cuánto dura una batería de litio de 12 V y 7 A [Internet]. 2023 [citado 2025 mayo 19]. Disponible en: <a href="https://www.redway-tech.com/es/how-long-will-a-12v-7ah-lithium-battery-last/" target="_blank" rel="noopener noreferrer">https://www.redway-tech.com/es/how-long-will-a-12v-7ah-lithium-battery-last/</a></li>
    <li>Renke. Soil NPK Sensor. [Internet]. [citado 2025 May 19]. Disponible en: <a href="https://www.renkeer.com/product/soil-npk-sensor/" target="_blank" rel="noopener noreferrer">https://www.renkeer.com/product/soil-npk-sensor/</a></li>
    <li>Catsensors. DL-SDD: Humedad, temperatura y salinidad del suelo. [Internet]. [citado 2025 May 19]. Disponible en: <a href="https://www.catsensors.com/es/lorawan/sensores-lorawan-decentlab/dl-sdd-humedad-temperatura-y-salinidad-del-suelo" target="_blank" rel="noopener noreferrer">https://www.catsensors.com/es/lorawan/sensores-lorawan-decentlab/dl-sdd-humedad-temperatura-y-salinidad-del-suelo</a></li>
    <li>Deshpande G, Goswami M, Kolhe J, et al. IoT-Based Low-Cost Soil Moisture and Soil Temperature Monitoring System. arXiv. 2022 Jun 14. Available from: <a href="https://arxiv.org/abs/2206.07488" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/2206.07488</a></li>
    <li>FAO. Datos para decisiones agrícolas: marco para la agricultura digital inclusiva [Internet]. Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura; 2021 [citado 2025 May 19]. Disponible en: <a href="https://openknowledge.fao.org/server/api/core/bitstreams/fb16a3f7-6c05-4508-bb40-8440aba30876/content" target="_blank" rel="noopener noreferrer">https://openknowledge.fao.org/server/api/core/bitstreams/fb16a3f7-6c05-4508-bb40-8440aba30876/content</a></li>
    <li>USDA-NRCS. Guía para la evaluación de la calidad y salud del suelo [Internet]. Washington, D.C.: Departamento de Agricultura de los Estados Unidos; 2022 [citado 2025 May 19]. Disponible en: <a href="https://www.nrcs.usda.gov/sites/default/files/2022-10/Gu%C3%ADa%20para%20la%20Evaluaci%C3%B3n%20de%20la%20Calidad%20y%20Salud%20del%20Suelo.pdf" target="_blank" rel="noopener noreferrer">https://www.nrcs.usda.gov/sites/default/files/2022-10/Gu%C3%ADa%20para%20la%20Evaluaci%C3%B3n%20de%20la%20Calidad%20y%20Salud%20del%20Suelo.pdf</a></li>
    <li>FAO. Manual técnico de buenas prácticas agrícolas – BPA [Internet]. Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura; 2003 [citado 2025 May 19]. Disponible en: <a href="https://www.fao.org/4/a1374s/a1374s02.pdf" target="_blank" rel="noopener noreferrer">https://www.fao.org/4/a1374s/a1374s02.pdf</a></li>
    <li>Ministerio de Desarrollo Agrario y Riego (MIDAGRI). Reglamento de Gestión Ambiental del Sector Agrario. Decreto Supremo Nº 019-2012-AG. Lima: MIDAGRI; 2012. Disponible en: <a href="https://www.senace.gob.pe/wp-content/uploads/filebase/senacenormativa/NAS-4-1-01-DS-019-2012-AG.pdf" target="_blank" rel="noopener noreferrer">https://www.senace.gob.pe/wp-content/uploads/filebase/senacenormativa/NAS-4-1-01-DS-019-2012-AG.pdf</a></li>
  </ol>
  </section>
