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

# Lista de Exigencias

| Fecha     | Tipo | Requerimiento       | Descripción                                                                                                                                                                                                                                                                          | Responsable |
|-----------|------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| 18/08/25 | E    | Función Principal   | Monitorear de forma intermitente y remota la humedad volumétrica, temperatura y nutrientes (NPK) del suelo para apoyar decisiones de riego y fertilización en cultivos de café [1].                                                                                                 | M.A         |
| 18/08/25 | E    | Geometría           | Cada módulo sensor ocupa un área ≤ 0.3 m², con altura máxima de 30 cm (incluye parte enterrada).                                                                                                                                                                                     | D.H         |
| 18/08/25 | E    | Cinemática          | El diseño permite inserción y extracción sin alterar el estado del terreno ni afectar el crecimiento radicular.                                                                                                                                                                      | M.A         |
| 18/08/25 | E    | Fuerzas             | El sistema se inserta en suelos compactos sin necesidad de maquinaria pesada.                                                                                                                                                                                                        | D.H         |
| 18/08/25 | E    | Energía             | Compuesto por un sistema autónomo de energía (ejemplo: panel solar 20 W + batería 12 V/7 Ah), permitiendo operación continua incluso en áreas sin red eléctrica (1)(2).                                                                                                               | Y.H         |
| 18/08/25 | E    | Materia             | El sistema monitorea humedad, nutrientes NPK y temperatura. Precisión: ±3% humedad, ±2% NPK, ±0.5 °C temperatura. Salida digital accesible vía app/web, con alertas y trazabilidad agronómica (3)(4)(5).                                                                               | M.G.A       |
| 18/08/25 | E    | Señales             | **Entradas:** encendido, señales de humedad/temperatura/NPK, parada de emergencia (<3s). **Salidas:** estado en dashboard (1 dato/min, retardo <8s), notificaciones push en caso de alerta (<3s).                                                                                       | M.A         |
| 18/08/25 | E    | Control             | Estabilidad de operación, activación <3s, transmisión con error <3%, actualización mínima 1 dato/min, disponibilidad >90%. Ubicación definida de sensores y actuadores.                                                                                                               | Y.H         |
| 18/08/25 | E    | Electrónico         | Hardware confiable con sensores dispuestos adecuadamente y unidad de control que coordine dispositivos.                                                                                                                                                                              | Y.H         |
| 18/08/25 | E    | Software            | Algoritmo básico (media móvil, alertas) y visualización en dashboard web o app móvil.                                                                                                                                                                                                | M.A         |
| 18/08/25 | E    | Comunicaciones      | Conexión estable entre control, sensores y actuadores. Transmisión clara, interpretación correcta de entradas, sin interferencias.                                                                                                                                                   | Y.H         |
| 18/08/25 | E    | Seguridad           | Datos confiables, precisos y consistentes, alineados con directrices FAO y USDA para gestión agrícola sostenible (6)(7).                                                                                                                                                             | M.A         |
| 18/08/25 | E    | Ergonomía           | Controles en altura/posición ergonómica, cumpliendo norma ISO 7250.                                                                                                                                                                                                                  | Y.H         |
| 18/08/25 | E    | Fabricación         | Uso de materiales y componentes disponibles localmente. Ensamblaje en talleres próximos para facilitar mantenimiento y transporte.                                                                                                                                                   | M.A         |
| 18/08/25 | D    | Control de calidad  | Cumplimiento de requisitos de diseño, seguridad y medio ambiente. Calibración periódica, posible en zonas rurales mediante comparación con muestras de suelo conocidas.                                                                                                               | A.D         |
| 18/08/25 | E    | Montaje             | Instalación estable y segura, compatible con lineamientos técnicos del MIDAGRI (9).                                                                                                                                                                                                  | M.A         |
| 18/08/25 | E    | Transporte          | Peso y dimensiones adecuados para transporte manual o en vehículos ligeros agrícolas.                                                                                                                                                                                                | A.D         |
| 18/08/25 | D    | Uso                 | Operación en zonas cafetaleras hasta 1,800 m.s.n.m., T=18–24 °C, alta humedad, lluvias >2,000 mm. Basado en Guía INIA (1).                                                                                                                                                           | D.H         |
| 18/08/25 | E    | Mantenimiento       | Inspección/reparación ≤30 min. Reemplazo directo de sensores/electrónica. Verificable mediante pruebas de mantenibilidad.                                                                                                                                                            | M.A         |
| 18/08/25 | E    | Costos              | Costo total ≤ S/. 500, priorizando componentes de bajo costo y disponibilidad local. Verificable por cotizaciones.                                                                                                                                                                   | A.D         |
| 18/08/25 | E    | Plazos              | Duración 138 horas efectivas (19/08–09/12/25), con hitos definidos en cronograma.                                                                                                                                                                                                   | M.A         |

      <td>Fuerzas: El sistema se inserta en suelos compactos sin necesidad de maquinaria pesada. </td>
      <td>D.H.</td>
    </tr>
      
