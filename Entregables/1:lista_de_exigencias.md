<h1>Lista de exigencias y plan de trabajo</h1>

<h2>Lista de Exigencias</h2>

<p><strong>Tabla 1: Lista de Exigencias</strong></p>

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
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Función Principal: El sistema debe realizar una medición remota de las condiciones del suelo (humedad volumétrica, temperatura y nutrientes NPK) para apoyar la toma de decisiones en riego y fertilización en cultivos de café [1].</td>
      <td>A.D, D.H, MG.A, M.A, Y.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Geometría: El prototipo tiene una medición estimada de 20 cm * 20 cm de base y una altura mínima de 50cm, definida para permitir la inserción del sensor en el suelo y dejar visible la parte del sistema. El diseño se compone de dos elementos: módulo de sensores y el módulo superior.</td>
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
      <td>
        Fuerzas: El diseño estructural del sistema debe considerar dimensiones que garanticen estabilidad frente a condiciones ambientales, como viento:<br><br>
        ● <strong>Estación de monitoreo:</strong><br>
        - Altura &lt; 4,5 m<br>
        - Ancho &lt; 1 m<br>
        - Profundidad &lt; 1 m<br><br>
        ● <strong>Gabinete de control:</strong><br>
        - Altura: 300–400 mm<br>
        - Ancho: 200–450 mm<br>
        - Profundidad: 150–200 mm<br><br>
        Estas especificaciones ayudan a minimizar los efectos de fuerzas ambientales (e.g., viento) sobre la estructura, asegurando su operación estable en campo (2).
      </td>
      <td>Y.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>
        Energía: El sistema debe garantizar operación continua en zonas rurales mediante:<br><br>
        ● <strong>Fuente primaria:</strong> red eléctrica (AC).<br>
        ● <strong>Fuente secundaria:</strong> energía renovable (ej. panel fotovoltaico).<br>
        ● <strong>Reserva:</strong> autonomía mínima de 24 h sin suministro primario.<br>
        ● <strong>Conversión de energía:</strong><br>
        - Voltaje para microcontrolador ≤ 3.3 V DC.<br>
        - Variación de voltaje permitida: –10 % a +25 %. <br>
        - Consumo máximo: 5 000 mAh<br><br>
        Con ello se asegura un funcionamiento confiable y adaptable, independiente de la solución técnica específica (3).
      </td>
      <td>Y.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Materia: No aplica, dado que el sistema de monitoreo no procesa ni transforma un material físico. Su función es captar y registrar en tiempo real variables críticas del suelo agrícola (humedad, nutrientes NPK y temperatura) a través de sensores, generando datos digitales para la toma de decisiones agronómicas.</td>
      <td>Y.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>
        Señales (Información):Cuenta con las siguientes señales de entrada y salida:<br><br>
        <em>Señales de entrada:</em><br>
        ● Señal de encendido: Activa la alimentación de los componentes eléctricos y electrónicos que conforman la máquina.<br>
        ● Señales en relación a cada parámetro (humedad, temperatura, NPK) con la misma precisión definida (±3%, ±2%, ±0.5ºC)<br>
        ● Señal de parada: Esta señal detiene el proceso en cualquier etapa.<br><br>
        <em>Señales de salida (señales visuales):</em><br>
        ● Señales de estado: Muestra la información recopilada (humedad, temperatura y NPK) por la plataforma web mediantes gráficos.<br>
        ● Señal de alerta: El sistema enviará notificaciones push en la plataforma web en caso de condiciones críticas o errores.
      </td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Control: El sistema de control del prototipo debe permanecer estable en todas las etapas de funcionamiento. Se gestionará la activación y lectura de los sensores de humedad, temperatura y NPK según la tasa de muestreo definida, asegurando la recolección y transmisión de datos.</td>
      <td>Y.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Electrónico (hardware): El sistema debe asegurar la captura confiable de datos del suelo, con sensores ubicados en sitios estratégicos según las variables a medir y una unidad de control que gestione la operación de los componentes electrónicos para mantener la coherencia en la información obtenida.</td>
      <td>Y.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>
        Software:<br>
        Procesará los datos de nutrientes (NPK) obtenidos en la medición al insertar el dispositivo en el suelo, los comparará con rangos de referencia definidos según el tipo de cultivo y calculará la cantidad de abono necesaria. Finalmente, se muestra en una web la concentración de nutrientes como recomendación de abono.
      </td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Comunicaciones: El sistema transmitirá los datos obtenidos por los sensores hacia una plataforma web en la nube mediante un protocolo de comunicación orientado al IoT, garantizando una conexión estable, la interpretación correcta de las entradas y la interacción sin interferencias entre los módulos del dispositivo.</td>
      <td>Y.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>
        Seguridad: El sistema de evaluación de suelos debe garantizar la integridad, exactitud y coherencia de los datos generados. Los elementos físicos deberán contar con un grado de protección NEMA [4] para resistir el polvo y la humedad. La transmisión de información hacia la plataforma web se realizará mediante encriptación end-to-end [5], asegurando la confidencialidad de los datos. El gabinete de control contará con sistemas de protección contra cortocircuitos y sobrecargas, además de un esquema de tierra aislada según la norma IEEE 142-2007 [6], garantizando operación segura y confiable
      </td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>
        Ergonomía:<br>
        Los elementos de control del equipo se ubicarán y ajustarán a una altura y posición que evitan incomodidades y riesgos para la salud del operador. El diseño se fundamenta en los lineamientos de la norma ISO 7250, la cual define las dimensiones corporales básicas para el diseño ergonómico de dispositivos tecnológicos. Considerando las estaturas promedio de referencia, 178 cm para hombres y 165 cm para mujeres, se garantizará que el sistema pueda ser operado de manera cómoda, segura y eficiente por la mayoría de los usuarios.
      </td>
      <td>Y.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>
        Fabricación:<br>
        La construcción del equipo se llevará a cabo con materiales y componentes electrónicos disponibles en el mercado nacional, priorizando la accesibilidad local de sensores, actuadores y unidades de control. Este enfoque garantiza la reposición rápida de piezas y reduce la dependencia de insumos importados. El diseño favorecerá un ensamblaje sencillo y estandarizado, de modo que las partes puedan integrarse de forma modular, facilitando la producción y asegurando la compatibilidad entre componentes.
      </td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>D</td>
      <td>
        Control de calidad:<br>
        El sistema deberá cumplir estrictamente con los requisitos de diseño establecidos (dimensiones, tolerancias y materiales), así como con las normativas vigentes de seguridad, sanidad, producción y medio ambiente. Asimismo, se establecerán procedimientos de calibración periódica para los sensores de humedad y temperatura, recomendándole una frecuencia mínima de cada 6 meses o posterior a condiciones críticas de operación (como lluvias intensas, variaciones extremas de temperatura o mantenimientos correctivos)[7].
      </td>
      <td>A.D</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Montaje: El sistema debe permitir una instalación estable y segura sobre superficies niveladas, con una base que evite desplazamientos. La instalación debe realizarse conforme a los lineamientos de seguridad y desempeño establecidos en la norma ASTM F1371 – Standard Specification for Electric Food Machines, Vegetable Peelers, la cual contempla criterios de estabilidad y seguridad operativa del equipo.</td>
      <td>M.A</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>E</td>
      <td>Transporte: El sistema debe tener dimensiones y peso que permitan su transporte manual o mediante vehículos ligeros en entornos agrícolas.</td>
      <td>A.D</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>D</td>
      <td>Uso: El sistema deberá operar en zonas cafetaleras hasta 1,800 m.s.n.m., temperaturas de 18–24 °C, alta humedad y lluvias &gt; 2,000 mm.Guía técnica para el cultivo sostenible del café del INIA (1).</td>
      <td>D.H</td>
    </tr>
    <tr>
      <td>18/08/25</td>
      <td>D</td>
      <td>
        Mantenimiento: El diseño deberá permitir inspecciones y reparaciones en un máximo de 30 minutos, con reemplazo directo de sensores y componentes electrónicos.Este enfoque coincide con la importancia de la mantenibilidad señalada en sistemas de monitoreo de bajo costo (2).
      </td>
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
      <td>Plazos: El proyecto se desarrollará en 138 horas efectivas, entre el 19 de agosto y el 9 de diciembre de 2025, con hitos definidos en un cronograma. Este enfoque es coherente con lineamientos de gestión propuestos para la planificación agrícola y ambiental.</td>
      <td>M.A</td>
    </tr>
  </tbody>
</table>

<section class="bibliografia">
  <h2>Bibliografía</h2>
  <ol>
    <li>Instituto Nacional de Innovación Agraria (INIA). Guía técnica del caficultor. Lima: INIA; 2018 [citado 2025 May 19]. Disponible en: https://repositorio.inia.gob.pe/items/5137a33f-f068-420d-b088-b7f6ea464ea3</li>
    <li>Servicio Nacional de Meteorología e Hidrología del Perú (SENAMHI). Protocolo para la instalación y operación de estaciones meteorológicas, agrometeorológicas e hidrológicas. Lima: SENAMHI; 2013 [citado 2025 Ago 25]. Disponible en: https://www.gob.pe/institucion/senamhi/informes-publicaciones/739743-resolucion-presidencial-ejecutiva-n-0174-senamhi-prej-ogot-2013</li>
    <li>Ministerio de Energía y Minas (MINEM). Norma Técnica de los Sistemas Eléctricos Rurales No Convencionales abastecidos por Sistemas Fotovoltaicos Autónomos. Lima: MINEM; 2018 [citado 2025 Ago 25]. Disponible en: https://www.gob.pe/institucion/minem/informes-publicaciones/4726072-norma-tecnica-de-los-sistemas-electricos-rurales-no-convencionales-abastecidos-por-sistemas-fotovoltaicos-autonomos</li>
    <li>Unirioja.es. [citado el 6 de octubre de 2025]. Disponible en: https://dialnet.unirioja.es/servlet/articulo?codigo=5210281</li>
    <li>¿Qué es el cifrado de extremo a extremo? [Internet]. Ibm.com. 2024 [citado el 6 de octubre de 2025]. Disponible en: https://www.ibm.com/mx-es/think/topics/end-to-end-encryption</li>
    <li>Ieee.org. [citado el 6 de octubre de 2025]. Disponible en: https://standards.ieee.org/ieee/142/3548/</li>
    <li>Rotronic Instrument Corp. (2001). MP101A Humidity Temperature Probe: Instruction Manual (MP101A-09/18/2001). Rotronic Instrument Corp. https://calright.com/wp-content/uploads/2018/03/5187.pdf</li>
  </ol>
</section>
