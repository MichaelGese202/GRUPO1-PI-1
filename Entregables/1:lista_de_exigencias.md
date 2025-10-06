<h1>Lista de Exigencias y Plan de Trabajo</h1>

<table border="1">
  <tr>
    <td colspan="4"><strong>LISTA DE EXIGENCIAS</strong></td>
    <td><strong>Páginas:</strong> 4</td>
  </tr>
  <tr>
    <td colspan="4"></td>
    <td><strong>Edición:</strong> Rev. 1</td>
  </tr>
  <tr>
    <td><strong>PROYECTO:</strong></td>
    <td colspan="3">SoilScope</td>
    <td><strong>Fecha:</strong> 18/08/25</td>
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
    <tr><td>18/08/25</td><td>E</td><td>Función Principal: El sistema debe realizar una medición remota de las condiciones del suelo (humedad volumétrica, temperatura y nutrientes NPK) para apoyar la toma de decisiones en riego y fertilización en cultivos de café [1].</td><td>A.D, D.H, MG.A, M.A, Y.H</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Geometría: El prototipo tiene una medición estimada de 20 cm * 20 cm de base y una altura mínima de 50 cm, definida para permitir la inserción del sensor en el suelo y dejar visible la parte del sistema. El diseño se compone de dos elementos: módulo de sensores y el módulo superior.</td><td>D.H</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Cinemática: El prototipo contempla un panel solar con orientación ajustable al sol, mientras que la base es estática.</td><td>M.A</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Fuerzas: El diseño estructural del sistema debe considerar dimensiones que garanticen estabilidad frente a condiciones ambientales, como viento. Estas especificaciones ayudan a minimizar los efectos de fuerzas ambientales (e.g., viento) sobre la estructura, asegurando su operación estable en campo (2).</td><td>Y.H</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Energía: El sistema debe garantizar operación continua en zonas rurales mediante fuente primaria (red eléctrica), fuente secundaria (energía renovable), reserva (autonomía mínima de 24h sin suministro primario) y conversión de energía (voltaje ≤ 3.3 V DC).</td><td>Y.H</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Materia: No aplica, dado que el sistema de monitoreo no procesa ni transforma un material físico. Su función es captar y registrar en tiempo real variables críticas del suelo agrícola (humedad, nutrientes NPK y temperatura) a través de sensores, generando datos digitales para la toma de decisiones agronómicas.</td><td>Y.H</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Señales (Información): Cuenta con las siguientes señales de entrada (encendido, humedad, temperatura, NPK, parada) y señales de salida (estado y alerta).</td><td>M.A</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Control: El sistema de control del prototipo debe permanecer estable en todas las etapas de funcionamiento, gestionando activación y lectura de sensores, con tasa de muestreo definida y transmisión confiable.</td><td>Y.H</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Electrónico (hardware): El sistema debe asegurar la captura confiable de datos del suelo, con sensores ubicados estratégicamente y una unidad de control que gestione la operación de los componentes electrónicos.</td><td>Y.H</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Software: Procesará los datos de nutrientes (NPK) obtenidos en la medición al insertar el dispositivo en el suelo, los comparará con rangos de referencia definidos según el tipo de cultivo y mostrará en una web la concentración de nutrientes como recomendación de abono.</td><td>M.A</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Comunicaciones: El sistema transmitirá los datos obtenidos por los sensores hacia una plataforma web en la nube mediante un protocolo de comunicación orientado al IoT, garantizando una conexión estable y la interacción sin interferencias entre módulos.</td><td>Y.H</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Seguridad: El sistema de evaluación de suelos debe garantizar la integridad, exactitud y coherencia de los datos generados. Los elementos físicos deberán contar con protección NEMA [4] y transmisión cifrada end-to-end [5].</td><td>M.A</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Ergonomía: Los elementos de control del equipo se ubicarán y ajustarán a una altura y posición ergonómica conforme a la norma ISO 7250, considerando estaturas promedio de 178 cm (hombres) y 165 cm (mujeres).</td><td>Y.H</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Fabricación: La construcción del equipo se llevará a cabo con materiales y componentes electrónicos disponibles en el mercado nacional, priorizando la accesibilidad local y el diseño modular para facilitar la producción y compatibilidad entre componentes.</td><td>M.A</td></tr>
    <tr><td>18/08/25</td><td>D</td><td>Control de calidad: El sistema deberá cumplir estrictamente con los requisitos de diseño establecidos (dimensiones, tolerancias y materiales), así como con las normativas vigentes de seguridad, sanidad, producción y medio ambiente. Asimismo, se establecerán procedimientos de calibración periódica para los sensores de humedad y temperatura, recomendándole una frecuencia mínima de cada 6 meses o posterior a condiciones críticas de operación (como lluvias intensas, variaciones extremas de temperatura o mantenimientos correctivos) [7].</td><td>A.D</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Montaje: El sistema debe permitir instalación estable y segura sobre superficies niveladas, conforme a la norma ASTM F1371 – Standard Specification for Electric Food Machines, Vegetable Peelers.</td><td>M.A</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Transporte: El sistema debe tener dimensiones y peso adecuados para transporte manual o mediante vehículos ligeros en entornos agrícolas.</td><td>A.D</td></tr>
    <tr><td>18/08/25</td><td>D</td><td>Uso: El sistema deberá operar en zonas cafetaleras hasta 1,800 m.s.n.m., temperaturas de 18–24 °C, alta humedad y lluvias > 2,000 mm. (Guía técnica del café del INIA).</td><td>D.H</td></tr>
    <tr><td>18/08/25</td><td>D</td><td>Mantenimiento: El diseño deberá permitir inspecciones y reparaciones en un máximo de 30 minutos, con reemplazo directo de sensores y componentes electrónicos, según enfoques de mantenibilidad en sistemas de monitoreo de bajo costo (2).</td><td>M.A</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Costos: El costo total de materiales y componentes no debe superar los S/ 500.</td><td>A.D</td></tr>
    <tr><td>18/08/25</td><td>E</td><td>Plazos: El proyecto se desarrollará en 138 horas efectivas, entre el 19 de agosto y el 9 de diciembre de 2025, con hitos definidos en un cronograma.</td><td>M.A</td></tr>
  </tbody>
</table>

<section class="bibliografia">
  <h2>Bibliografía</h2>
  <ol>
    <li>Instituto Nacional de Innovación Agraria (INIA). Guía técnica del caficultor. Lima: INIA; 2018. https://repositorio.inia.gob.pe/items/5137a33f-f068-420d-b088-b7f6ea464ea3</li>
    <li>Servicio Nacional de Meteorología e Hidrología del Perú (SENAMHI). Protocolo para la instalación y operación de estaciones meteorológicas, agrometeorológicas e hidrológicas. Lima: SENAMHI; 2013. https://www.gob.pe/institucion/senamhi/informes-publicaciones/739743-resolucion-presidencial-ejecutiva-n-0174-senamhi-prej-ogot-2013</li>
    <li>Ministerio de Energía y Minas (MINEM). Norma Técnica de los Sistemas Eléctricos Rurales No Convencionales abastecidos por Sistemas Fotovoltaicos Autónomos. Lima: MINEM; 2018. https://www.gob.pe/institucion/minem/informes-publicaciones/4726072-norma-tecnica-de-los-sistemas-electricos-rurales-no-convencionales-abastecidos-por-sistemas-fotovoltaicos-autonomos</li>
    <li>Unirioja.es. Dialnet. https://dialnet.unirioja.es/servlet/articulo?codigo=5210281</li>
    <li>IBM. ¿Qué es el cifrado de extremo a extremo? 2024. https://www.ibm.com/mx-es/think/topics/end-to-end-encryption</li>
    <li>IEEE. IEEE Std 142-2007. https://standards.ieee.org/ieee/142/3548/</li>
    <li>Rotronic Instrument Corp. (2001). MP101A Humidity Temperature Probe: Instruction Manual (MP101A-09/18/2001). Rotronic Instrument Corp. https://calright.com/wp-content/uploads/2018/03/5187.pdf</li>
  </ol>
</section>
