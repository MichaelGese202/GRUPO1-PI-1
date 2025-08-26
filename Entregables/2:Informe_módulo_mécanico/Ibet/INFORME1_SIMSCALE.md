## Yesenia Ibet, Huamani Huallpa

La presente actividad tuvo como objetivo adquirir práctica en el uso de SimScale, con la intención de familiarizarnos con el proceso de modelado, asignación de materiales, aplicación de cargas y análisis de resultados. Esto permitió comprender de manera general las estrategias de diseño y validación estructural de carcasas o componentes empleados en proyectos de ingeniería 1.


## Componente de cierre cilíndrico 3D

 Imagen 1 – Mallado del modelo: 

Para dar inicio al modelado, se configuró el proyecto en SimScale, importando la pieza desde Onshape y asignándole el material PLA. Una vez definido el soporte fijo y las cargas aplicadas en los ejes X, Y y Z, se procedió a preparar el modelo para su análisis.

En la figura se muestra el proceso de enmallado del “Componente de cierre cilíndrico 3D”, donde la geometría se discretiza en elementos finitos. Este mallado permite realizar el análisis estructural estático, dividiendo el modelo en pequeñas secciones triangulares que facilitan el cálculo de esfuerzos y desplazamientos en la simulación.
![Yesenial](/Imagenes/Ibet3.png) 


Imagen 2 – Fuerza aplicada:

En esta etapa se definieron las condiciones de carga del modelo. Se aplicaron fuerzas de 45 N en los ejes X, Y y Z sobre una de las caras del Componente de cierre cilíndrico 3D. La flecha verde indica la dirección del vector de fuerza, mientras que la superficie resaltada corresponde al área donde se ejerce la carga.

![Yesenial](/Imagenes/Ibet2.png)

Imagen 3 – Calidad de malla (volumen):

Una vez configuradas las cargas, se procedió a evaluar la calidad del mallado generado. En la figura se muestra la distribución de la calidad de la malla, representada mediante el aspect ratio. Los colores permiten identificar las variaciones en la geometría de los elementos, señalando las regiones con mayor distorsión y garantizando un análisis más confiable.
![Yesenial](/Imagenes/Ibet4.png)


 Imagen 4 – Simulación estructural:
 
Finalmente, se ejecutó la simulación estática del modelo. En la figura se observa la distribución de los esfuerzos de Von Mises en el Componente de cierre cilíndrico 3D, representados en un mapa de colores. Los resultados permiten identificar las zonas de mayor y menor tensión bajo las condiciones de carga aplicadas, destacando las áreas críticas de la pieza que requieren refuerzo en su diseño.
![Yesenial](/Imagenes/Ibet1.png) 

