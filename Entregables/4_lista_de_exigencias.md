<h1>Lista de Exigencias</h1>

 <table border="1">
  <tr>
    <td colspan="4"><strong>LISTA DE EXIGENCIAS</strong></td>
    <td><strong>Páginas:</strong></td>
  </tr>
  <tr>
    <td colspan="4" rowspan="1"></td>
    <td><strong>Edición:</strong> Rev.2</td>
  </tr>
  <tr>
    <td><strong>PROYECTO:</strong></td>
    <td colspan="3">SoilScope</td>
    <td><strong>Fecha:</strong> 15/06/2025</td>
  </tr>
  <tr>
    <td><strong>CLIENTE:</strong></td>
    <td colspan="3"><strong>UNIVERSIDAD PERUANA CAYETANO HEREDIA</strong></td>
    <td><strong>Revisado:</strong></td>
  </tr>
  <tr>
    <td colspan="4"></td>
    <td><strong>Elaborado:</strong><br>C.Y, P.R, J.R., M.A.</td>
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
      <td>14/05/25</td>
      <td>E</td>
      <td>Función Principal:Monitorear de forma intermitente y remota las condiciones del suelo (humedad volumétrica, temperatura y nutrientes NPK) para apoyar la toma de decisiones en riego y fertilización de café (11) </td>
      <td>Y.C.</td>
    </tr>
    <tr>
      <td>14/05/25</td>
      <td>E</td>
      <td>Geometría: 
        - El sistema estará compuesto por sondas verticales multipunto conectadas a una unidad de transmisión de datos.
        - Cada módulo sensor deberá ocupar un área no mayor a 0.3 m², con una altura máxima de 0.8 m (incluye para enterrada) adaptado para no interferir con el crecimiento de raíces en las plantaciones de café.
      </td>
      <td>M.A.</td>
    </tr>
    <tr>
      <td>14/05/25</td>
      <td>E</td>
      <td>Cinemática:
        - Presenta el case y sensores por separado para ensamblaje. Además, el diseño debe asegurar:
        - Inserción segura y estable en el suelo.
        - Extracción sin alterar el estado del terreno.
        - El sistema no debe alterar el entorno del cultivo ni afectar el crecimiento radicular.
      </td>
      <td>P.R.</td>
    </tr>
    <tr>
      <td>14/05/25</td>
      <td>E</td>
      <td>Fuerzas: El sistema debe poder insertarse en suelos compactos sin necesidad de maquinaria pesada. </td>
      <td>J.R.</td>
    </tr>
    <tr>
      <td>14/05/25</td>
      <td>E</td>
      <td>Energía: 
        Se propone la implementación de un sistema de alimentación energética compuesto por un panel solar monocristalino de 20 W y una batería recargable de 12 V y 7 Ah. El panel solar, con una eficiencia aproximada del 10.88%, es capaz de generar suficiente energía para alimentar sensores de bajo consumo durante el día. La batería recargable permite almacenar la energía generada para su uso durante la noche o en condiciones de baja radiación solar. Este sistema asegura una operación continua y confiable del sistema de monitoreo, incluso en áreas con acceso limitado a la red eléctrica (1)(2).
      </td>
      <td>Y.C</td>
    </tr>
    <tr>
      <td>14/05/25</td>
      <td>E</td>
      <td>Materia: Materia de ingreso: Suelo agrícola cultivado, con propiedades físico-químicas variables. El sistema deberá monitorear humedad, nutrientes (NPK) y temperatura del suelo. Se espera que los sensores para monitoreo de suelo tengan una precisión de ±3% para humedad, ±2% para nutrientes NPK y ±0.5 °C para temperatura (12), garantizando mediciones fiables para un manejo eficiente (3)(4). El material de salida será un registro digital de datos accesible vía aplicación móvil o plataforma web, útil para decisiones agronómicas en riego y fertilización. El sistema agregará valor al integrar funciones de alerta y trazabilidad agronómica (5).</td>
      <td>M.A.</td>
    </tr>
    <tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Señales (Información): Deberá contar con las siguientes señales de entrada y salida: <br><br>
  Señales de entrada:<br>
  ● Señal de encendido: Sirve para energizar los componentes eléctricos y electrónicos que conforman la máquina.<br>
  ● Señales en relación a cada parámetro (humedad, temperatura, npk)<br>
  ● Señal de parada: Esta señal detiene el proceso en cualquier etapa de su funcionamiento.<br><br>
  Señales de salida (señales visuales)<br>
  ● Señales de estado: Permite conocer el estado de los actuadores y sensores.<br>
  ● Señal de alerta: En caso de ocurrir una situación que comprometa al proceso se enviará una señal de salida que informará al operario.
  </td>
  <td>P.R.</td>
</tr>
<tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Control: El sistema de control del equipo de monitoreo de suelos debe mantenerse estable durante todas las etapas de operación, asegurando la correcta activación, recolección y transmisión de los datos agroclimáticos. Por otro lado, el posicionamiento exacto de los sensores y actuadores dentro del suelo es fundamental para obtener lecturas fiables y representativas.</td>
  <td>J.R.</td>
</tr>
<tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Electrónico (hardware): El diseño del sistema electrónico debe asegurar la captura confiable de los datos vinculados a las propiedades del suelo en cada unidad de monitoreo. Esto implica una disposición adecuada de los sensores según la naturaleza de las variables a medir, prestando atención a su funcionamiento en condiciones reales. Es imprescindible contar con una unidad de control que permita coordinar la operación de todos los dispositivos involucrados y que mantenga la coherencia en la obtención de datos.</td>
  <td>Y.C.</td>
</tr>
<tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Software: <br>
  - Código abierto para facilitar su modificación y adaptación.<br>
  - Visualización vía dashboard web o app móvil.<br>
  - Algoritmo de lectura con procesamiento básico (media móvil, alertas por umbral)</td>
  <td>M.A.</td>
</tr>
<tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Comunicaciones: Es fundamental que el sistema principal mantenga una conexión estable y directa con todos los sensores y elementos que ejecutan acciones, asegurando una transmisión clara de datos. El sistema debe ser capaz de interpretar correctamente las entradas recibidas, ya sean del entorno o del operador. Finalmente, la interacción entre los diferentes módulos del sistema debe realizarse sin generar interferencias, asegurando que todos trabajen de manera conjunta sin comprometer la funcionalidad general.</td>
  <td>P.R.</td>
</tr>
<tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Seguridad de los datos:<br>
  El sistema destinado a la evaluación de suelos debe garantizar la fiabilidad y precisión de los datos generados, asegurando que reflejen de manera veraz las condiciones reales del suelo. Esto es esencial para una gestión agrícola eficiente y sostenible. La FAO destaca que la calidad, oportunidad y fiabilidad de los datos son fundamentales para la toma de decisiones en el desarrollo agrícola (6). Asimismo, el Departamento de Agricultura de los Estados Unidos (USDA) enfatiza la importancia de evaluar propiedades físicas, químicas y biológicas del suelo mediante datos precisos y consistentes (7). Por lo tanto, los sistemas de evaluación de suelos deben incorporar mecanismos que aseguren la integridad, exactitud y coherencia de los datos recopilados, alineándose con estas directrices internacionales.</td>
  <td>J.R.</td>
</tr>
<tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Ergonomía: Los elementos de control del equipo serán ubicados y ajustados en una altura y posición que prevenga molestias o riesgos para la salud del operador. Este diseño se alineará con los estándares de la norma ISO 7250, que establece las dimensiones corporales básicas necesarias para crear dispositivos tecnológicos ergonómicos y seguros.</td>
  <td>Y.C.</td>
</tr>
<tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Fabricación: La construcción del equipo debe considerar el uso de materiales y componentes electrónicos disponibles en el mercado nacional, facilitando así la rápida reposición y mantenimiento de las partes. Es importante que los actuadores, sensores y demás elementos electrónicos sean accesibles localmente para asegurar tiempos de respuesta ágiles. Además, el ensamblaje deberá realizarse en talleres próximos, lo que permitirá un transporte más sencillo y un mantenimiento eficiente.</td>
  <td>M.A.</td>
</tr>
<tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Control de calidad: El diseño y la fabricación del sistema deben integrarse con todas las especificaciones establecidas, asegurando que el equipo funcione correctamente y satisfaga las necesidades del usuario dentro del contexto del sector agrario. Es fundamental que se respeten los estándares relacionados con dimensiones, tolerancias y selección de materiales, además de cumplir con normativas de higiene, seguridad, producción y medio ambiente. Particularmente en zonas rurales, donde las condiciones pueden variar significativamente, la calibración regular de los equipos es esencial para garantizar la precisión y fiabilidad de las mediciones. La Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) enfatiza la importancia de mantener los equipos de aplicación en buen estado mediante calibraciones y mantenimientos periódicos para asegurar su correcto funcionamiento y la seguridad en su uso (8).<br><br>
  Calibración zonas rurales: La forma más sencilla y económica de calibrar sensores en zonas rurales es compararlos con muestras de suelo con humedad conocida, preparadas manualmente.</td>
  <td>P.R.</td>
</tr>
<tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Montaje: El diseño del sistema debe permitir una instalación estable y segura, asegurando que su base pueda fijarse firmemente sobre una superficie nivelada para evitar movimientos que comprometan su estabilidad, integridad y correcto funcionamiento. Esto es especialmente importante para garantizar la precisión de las mediciones y la durabilidad del sistema. Además, el sistema debe contar con un método de alimentación energética compatible con las condiciones y recursos disponibles en la zona de monitoreo, siguiendo lineamientos técnicos y normativos establecidos por el Ministerio de Desarrollo Agrario y Riego (MIDAGRI) para equipos de monitoreo agrícola (9).</td>
  <td>J.R.</td>
</tr>
<tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Transporte: El sistema debe poseer un peso que permita su traslado mediante medios terrestres o marítimos, tales como camiones o embarcaciones de carga. Asimismo, para el desplazamiento o reubicación en las zonas agrícolas, su peso debe ser compatible con los equipos disponibles en el lugar como carretillas, vehículos pequeños o manualmente.</td>
  <td>Y.C.</td>
</tr>
<tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Uso: Se contempla que el uso del sistema de monitoreo de suelos podrá darse bajo diversas condiciones ambientales propias de las zonas cafetaleras del Perú. Como referencia, se considerarán altitudes máximas de hasta 1,800 m.s.n.m, correspondientes al rango óptimo de cultivo del café arábigo en regiones como el VRAEM, donde también se presentan temperaturas promedio entre 18 °C y 24 °C, alta humedad relativa y precipitaciones anuales que superan los 2,000 mm (Instituto Nacional de Innovación Agraria - INIA, 2022).
Estas condiciones se tendrán en cuenta para la selección adecuada de sensores, materiales, encapsulados y componentes electrónicos (10).</td>
  <td>M.A.</td>
</tr>
<tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Mantenimiento:
- Para los componentes mecánicos y eléctricos, el diseño debe facilitar un acceso sencillo que permita realizar inspecciones, reparaciones, lubricación o sustitución de piezas de forma rápida y segura.
- En cuanto a los componentes electrónicos, es habitual que su mantenimiento consista en su reemplazo directo mediante la adquisición de nuevas unidades, ya sea debido a fallas o por intervalos programados de reemplazo preventivo.</td>
  <td>P.R.</td>
</tr>
<tr>
  <td>14/05/25</td>
  <td>E</td>
  <td>Costos: Considerando la implementación de un sistema de monitoreo de suelo que abarque parámetros como humedad, temperatura y nutrientes (NPK), se estima que el costo total de materiales no exceda los S/. 500. Esta estimación se basa en la selección de sensores básicos y componentes electrónicos compatibles con microcontroladores de bajo costo, lo que permite mantener la viabilidad económica del proyecto sin comprometer la funcionalidad esencial requerida para aplicaciones agrícolas.</td>
  <td>J.R.</td>
</tr>
  </tbody>
</table>
<section class="bibliografia">
  <h2>Bibliografía</h2>
  <ol>
    <li>Damia Solar. ¿Cuál es la vida útil de los paneles solares? [Internet]. 2023 [citado 2025 mayo 19]. Disponible en: <a href="https://www.damiasolar.com/blog/cual-es-la-vida-util-de-los-paneles-solares" target="_blank" rel="noopener noreferrer">https://www.damiasolar.com/blog/cual-es-la-vida-util-de-los-paneles-solares</a></li>
    <li>Redway Tech. ¿Cuánto dura una batería de litio de 12 V y 7 A [Internet]. 2023 [citado 2025 mayo 19]. Disponible en: <a href="https://www.redway-tech.com/es/how-long-will-a-12v-7ah-lithium-battery-last/" target="_blank" rel="noopener noreferrer">https://www.redway-tech.com/es/how-long-will-a-12v-7ah-lithium-battery-last/</a></li>
    <li>Renke. Soil NPK Sensor. [Internet]. [citado 2025 May 19]. Disponible en: <a href="https://www.renkeer.com/product/soil-npk-sensor/" target="_blank" rel="noopener noreferrer">https://www.renkeer.com/product/soil-npk-sensor/</a></li>
    <li>Catsensors. DL-SDD: Humedad, temperatura y salinidad del suelo. [Internet]. [citado 2025 May 19]. Disponible en: <a href="https://www.catsensors.com/es/lorawan/sensores-lorawan-decentlab/dl-sdd-humedad-temperatura-y-salinidad-del-suelo" target="_blank" rel="noopener noreferrer">https://www.catsensors.com/es/lorawan/sensores-lorawan-decentlab/dl-sdd-humedad-temperatura-y-salinidad-del-suelo</a></li>
    <li>Deshpande G, Goswami M, Kolhe J, et al. IoT-Based Low-Cost Soil Moisture and Soil Temperature Monitoring System. arXiv. 2022 Jun 14. Available from: <a href="https://arxiv.org/abs/2206.07488" target="_blank" rel="noopener noreferrer">https://arxiv.org/abs/2206.07488</a></li>
    <li>FAO. Datos para decisiones agrícolas: marco para la agricultura digital inclusiva [Internet]. Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura; 2021 [citado 2025 May 19]. Disponible en: <a href="https://openknowledge.fao.org/server/api/core/bitstreams/fb16a3f7-6c05-4508-bb40-8440aba30876/content" target="_blank" rel="noopener noreferrer">https://openknowledge.fao.org/server/api/core/bitstreams/fb16a3f7-6c05-4508-bb40-8440aba30876/content</a></li>
    <li>USDA-NRCS. Guía para la evaluación de la calidad y salud del suelo [Internet]. Washington, D.C.: Departamento de Agricultura de los Estados Unidos; 2022 [citado 2025 May 19]. Disponible en: <a href="https://www.nrcs.usda.gov/sites/default/files/2022-10/Gu%C3%ADa%20para%20la%20Evaluaci%C3%B3n%20de%20la%20Calidad%20y%20Salud%20del%20Suelo.pdf" target="_blank" rel="noopener noreferrer">https://www.nrcs.usda.gov/sites/default/files/2022-10/Gu%C3%ADa%20para%20la%20Evaluaci%C3%B3n%20de%20la%20Calidad%20y%20Salud%20del%20Suelo.pdf</a></li>
    <li>FAO. Manual técnico de buenas prácticas agrícolas – BPA [Internet]. Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura; 2003 [citado 2025 May 19]. Disponible en: <a href="https://www.fao.org/4/a1374s/a1374s02.pdf" target="_blank" rel="noopener noreferrer">https://www.fao.org/4/a1374s/a1374s02.pdf</a></li>
    <li>Ministerio de Desarrollo Agrario y Riego (MIDAGRI). Reglamento de Gestión Ambiental del Sector Agrario. Decreto Supremo Nº 019-2012-AG. Lima: MIDAGRI; 2012. Disponible en: <a href="https://www.senace.gob.pe/wp-content/uploads/filebase/senacenormativa/NAS-4-1-01-DS-019-2012-AG.pdf" target="_blank" rel="noopener noreferrer">https://www.senace.gob.pe/wp-content/uploads/filebase/senacenormativa/NAS-4-1-01-DS-019-2012-AG.pdf</a></li>
    <li>Instituto Nacional de Innovación Agraria (INIA). Guía técnica para el cultivo sostenible del café. Lima: INIA; 2022 [citado 2025 May 19]. Disponible en: <a href="https://repositorio.inia.gob.pe/bitstream/20.500.12955/2015/1/GUIA-CAFE-INIA-2022.pdf" target="_blank" rel="noopener noreferrer">https://repositorio.inia.gob.pe/bitstream/20.500.12955/2015/1/GUIA-CAFE-INIA-2022.pdf</a></li>
  </ol>
  </section>
<section class="distancia-muestreo">
  <h2>Distancia mínima recomendada entre sensores para el monitoreo del suelo</h2>
  <p>
    La distancia mínima entre puntos para el monitoreo de suelos agrícolas extensos depende principalmente de la variabilidad espacial, el tipo de manejo agronómico y el nivel de precisión requerido. En terrenos considerados homogéneos y con un manejo uniforme —es decir, aquellos que comparten características similares de cultivo, riego y pendiente— diversos estudios sugieren que una medición cada 1 a 2 hectáreas, equivalente a distancias aproximadas de 70 a 140 metros entre puntos, puede ser suficiente para representar con aceptable precisión variables como la humedad, temperatura y niveles de NPK <strong>[5]</strong>.
  </p>
  <p>
    De manera más precisa, se recomienda que un área comprendida entre 0.8 y 1.6 hectáreas (2 a 4 acres) pueda ser representada mediante la instalación de entre 12 y 30 sensores distribuidos sistemáticamente. Este patrón, bajo una cuadrícula regular, implicaría distancias de separación entre sensores de aproximadamente 20 a 40 metros <strong>[5]</strong>.
  </p>
  <p>
    No obstante, en suelos con mayor heterogeneidad, es fundamental adaptar la estrategia de muestreo para garantizar que los datos obtenidos sean efectivamente representativos de las condiciones del terreno. Una técnica altamente recomendada para estos casos es el muestreo condicionado por variables ambientales, conocido como Partitioned Conditioned Latin Hypercube Sampling (PcLHS). Este enfoque consiste en dividir el área de estudio en subzonas homogéneas mediante el análisis multivariado de factores como pendiente, textura del suelo o cobertura vegetal. Posteriormente, los puntos de muestreo se seleccionan de forma condicionada a estas variables, permitiendo una cobertura más eficiente de la diversidad del terreno sin requerir una cantidad excesiva de sensores <strong>[1][4]</strong>.
  </p>
  <p>
    Aunque el suelo es intrínsecamente heterogéneo, tanto en la práctica agrícola como en la investigación científica se reconoce la existencia de zonas homogéneas relativas, es decir, sectores donde las propiedades del suelo presentan una variabilidad limitada. En tales zonas, una muestra puntual o un sensor bien ubicado puede representar con precisión aceptable a un área mayor.
  </p>
  <p>
    Sin embargo, investigaciones han demostrado que incluso en parcelas pequeñas como aquellas de 30 x 30 metros la variabilidad interna del suelo puede ser significativa. Por ejemplo, en otras investigaciones se evidenció que se requerían múltiples sensores o núcleos para representar adecuadamente las condiciones del suelo en dichas áreas <strong>[2][3]</strong>. En función de estos hallazgos, se recomienda que, en terrenos heterogéneos, la distancia entre sensores no supere los 50 metros, ya que separaciones mayores podrían pasar por alto cambios importantes en la humedad, temperatura o concentración de nutrientes <strong>[2][3]</strong>.
  </p>
</section>
 <section class="bibliografia">
  <h2>Bibliografía</h2>
  <ol>
    <li>
      Ministerio del Ambiente (MINAM). <em>Guía para el muestreo de suelos</em>. Lima: MINAM; 2013. Disponible en: 
      <a href="https://www.minam.gob.pe/calidadambiental/wp-content/uploads/sites/22/2013/10/GUIA-PARA-EL-MUESTREO-DE-SUELOS-final.pdf" target="_blank">
        https://www.minam.gob.pe/calidadambiental/wp-content/uploads/sites/22/2013/10/GUIA-PARA-EL-MUESTREO-DE-SUELOS-final.pdf
      </a>
    </li>
    <li>
      Li J. Sampling soils in a heterogeneous research plot. <em>Journal of Visualized Experiments</em>. 2018;(143). Disponible en: 
      <a href="https://www.jove.com/t/58519/sampling-soils-in-a-heterogeneous-research-plot" target="_blank">
        https://www.jove.com/t/58519/sampling-soils-in-a-heterogeneous-research-plot
      </a>
    </li>
    <li>
      Li J, Zhuang Q, et al. Sampling soils in a heterogeneous research plot. <em>J Vis Exp</em>. 2019;(e58519). Disponible en: 
      <a href="https://www.tnstate.edu/faculty/jli/Li_2018_JoVE.pdf" target="_blank">
        https://www.tnstate.edu/faculty/jli/Li_2018_JoVE.pdf
      </a>
    </li>
    <li>
      Brus DJ, et al. Sampling strategies for spatially heterogeneous soils. <em>Geoderma</em>. 2021;404:115288. Disponible en: 
      <a href="https://www.sciencedirect.com/science/article/abs/pii/S001670612100611X" target="_blank">
        https://www.sciencedirect.com/science/article/abs/pii/S001670612100611X
      </a>
    </li>
    <li>
      Kansas State University. How many cores should be taken for soil sampling? <em>K-State Agronomy eUpdate</em>. 2023. Article 3558. Disponible en: 
      <a href="https://eupdate.agronomy.ksu.edu/eu_article_prep.php?article_id=3558" target="_blank">
        https://eupdate.agronomy.ksu.edu/eu_article_prep.php?article_id=3558
      </a>
    </li>
    <li>
      Lozano-García DF, et al. Sensor-based fertility mapping using soil NPK sensors in agricultural fields. <em>Agronomy</em>. 2024;14(12):2947. Disponible en: 
      <a href="https://www.mdpi.com/2073-4395/14/12/2947" target="_blank">
        https://www.mdpi.com/2073-4395/14/12/2947
      </a>
    </li>
  </ol>
</section>
