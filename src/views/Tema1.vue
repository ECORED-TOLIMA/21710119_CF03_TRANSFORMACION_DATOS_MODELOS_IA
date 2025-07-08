<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Preparación de datos en el ciclo de vida del aprendizaje automático
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-md-10.mb-md-4.mb-4
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='')
      .col-lg-7
        p La preparación de datos es una etapa crucial dentro del ciclo de vida del aprendizaje automático, ya que determina la calidad y el rendimiento de los modelos desarrollados. Consiste en un conjunto de técnicas y procesos que permiten convertir datos brutos, desorganizados o incompletos en un insumo confiable, coherente y útil para el entrenamiento de algoritmos. Esta fase no solo mejora la precisión de los modelos, sino que también reduce el riesgo de sesgos, sobreajuste y errores en la toma de decisiones.
        p En el contexto del aprendizaje automático, los datos son el insumo fundamental para entrenar algoritmos que aprenden patrones y realizan predicciones. Por ello, es indispensable que estén bien preparados antes de iniciar la etapa de modelado. La preparación de datos incluye múltiples actividades como la limpieza, transformación, codificación, normalización, enriquecimiento y tratamiento de valores atípicos. Cada una de estas tareas tiene el objetivo de mejorar la representatividad de los datos y facilitar su procesamiento por parte de los algoritmos.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Esta fase se relaciona estrechamente con otras etapas del ciclo de vida, como la exploración de datos, la selección de características y la evaluación de modelos. Además, una buena preparación no solo incide en la precisión del modelo, sino también en su capacidad para generalizar, lo que es esencial cuando se aplica a nuevos conjuntos de datos en producción.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Una preparación de datos bien ejecutada considera también aspectos éticos y legales, como el tratamiento de datos sensibles, la anonimización de información y la gestión del consentimiento informado, en especial cuando se trabaja con información personal o biomédica.
            br
            br
            | En resumen, la preparación de datos permite reducir la complejidad del análisis, minimizar errores durante la etapa de entrenamiento y aumentar la confiabilidad de las predicciones. Su correcta ejecución es indispensable para garantizar el éxito de cualquier proyecto de inteligencia artificial o ciencia de datos.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 El ciclo de vida del aprendizaje automático
    p.mb-4 Según Géron (2020), un proyecto de aprendizaje automático suele desarrollarse a través de una serie de fases estructuradas que permiten transformar datos en modelos útiles para la predicción y la toma de decisiones. Estas etapas son:
    .row.justify-content-center.align-items-center
      .col-lg-10
        LineaTiempoD.color-acento-botones.mb-4
          .row(numero="A" titulo="Obtención de datos")
            .col-md-12.mb-md-0.order-2.lg-order-1
              p Consiste en identificar, recopilar y acceder a fuentes de datos relevantes para el problema a resolver. Esto puede implicar el uso de bases de datos públicas, API (Interfaz de Programación de Aplicaciones), archivos locales o flujos en tiempo real.
            .col-md-12.order-1.lg-order-2.mb-4 
              figure
                img(src='@/assets/curso/temas/tema1/img3.png', alt='Texto que describa la imagen')
          .row(numero="B" titulo="Partición de los datos")
            .col-md-12.mb-md-0.order-2.lg-order-1
              p Se divide el conjunto de datos en subconjuntos, comúnmente en un 80 % para entrenamiento y un 20 % para prueba. En algunos casos también se utiliza un conjunto de validación para ajustar hiperparámetros sin sesgar la evaluación final.
            .col-md-12.order-1.lg-order-2.mb-4  
              figure
                img(src='@/assets/curso/temas/tema1/img4.png', alt='Texto que describa la imagen')
          .row(numero="C" titulo="Exploración y visualización de los datos")
            .col-md-12.mb-md-0.order-2.lg-order-1
              p Permite comprender la distribución, relaciones y patrones presentes en los datos. Esta fase ayuda a identificar valores atípicos, datos faltantes y posibles errores.
            .col-md-12.order-1.lg-order-2.mb-4 
              figure
                img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')
          .row(numero="D" titulo="Preparación y preprocesamiento")
            .col-md-12.mb-md-0.order-2.lg-order-1
              p Incluye tareas como limpieza, transformación, codificación de variables categóricas (por ejemplo, mediante #[i one-hot encoding]), escalado de características numéricas y tratamiento de valores nulos o atípicos. El uso de pipelines facilita la automatización y reproducibilidad de este proceso.
            .col-md-12.order-1.lg-order-2.mb-4      
              figure
                img(src='@/assets/curso/temas/tema1/img6.png', alt='Texto que describa la imagen')
          .row(numero="E" titulo="Selección y entrenamiento del modelo")
            .col-md-12.mb-md-0.order-2.lg-order-1
              p Con base en la naturaleza del problema (clasificación, regresión, #[i clustering], etc.), se elige el algoritmo más adecuado y se entrena con el conjunto de datos preparado.
            .col-md-12.order-1.lg-order-2.mb-4         
              figure
                img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')
          .row(numero="F" titulo="Evaluación del modelo")
            .col-md-12.mb-md-0.order-2.lg-order-1
              p Se mide el rendimiento utilizando métricas apropiadas como la precisión, el error cuadrático medio (RMSE), el F1-score, entre otras, dependiendo del tipo de problema.
            .col-md-12.order-1.lg-order-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen')
          .row(numero="G" titulo="Ajuste fino (<em>tuning</em>) del modelo")
            .col-md-12.mb-md-0.order-2.lg-order-1
              p Se optimizan los hiperparámetros mediante técnicas como la búsqueda en malla (#[i grid search]) o búsqueda aleatoria, con el fin de mejorar la capacidad predictiva del modelo.
            .col-md-12.order-1.lg-order-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')
          .row(numero="H" titulo="Despliegue y mantenimiento")
            .col-md-12.mb-md-0.order-2.lg-order-1
              p El modelo entrenado se integra en una aplicación o sistema productivo. Posteriormente, debe ser monitoreado para detectar degradaciones en su rendimiento y actualizarse cuando sea necesario.
            .col-md-12.order-1.lg-order-2.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center
      .col-lg-8
        p Cada una de estas fases es fundamental para asegurar que el modelo sea robusto, generalizable y útil en contextos reales.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Limpieza y transformación de datos: codificación, normalización y enriquecimiento
    .BGGRA.p-4.mb-4.px-lg-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-11
          p La depuración y modificación de datos son etapas esenciales en un proyecto de aprendizaje automático (ML), ya que permiten transformar datos sin procesar en formatos adecuados para su análisis y modelado. Estos procedimientos comprenden la codificación, la normalización y el enriquecimiento de los datos (Pyle, 1999).
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-md-8.mb-md-4.mb-sm-4
          figure
            img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen')
        .col-7
          p La #[b codificación] se refiere a la conversión de variables categóricas en representaciones numéricas. Esta transformación es necesaria, ya que muchos algoritmos de aprendizaje automático requieren datos numéricos para funcionar de manera óptima (Viedma, 2018). Una técnica común es one-hot encoding, que genera columnas binarias para cada categoría, asignando “1” a la categoría presente y “0” a las demás. Esta técnica es especialmente útil cuando se trabaja con variables categóricas nominales (Géron, 2020).
          p.mb-4 En cuanto a la #[b normalización], Pyle (1999) la define como el proceso de escalar los valores de las variables numéricas a un rango similar. Esta práctica evita que variables con rangos amplios dominen otras durante el entrenamiento de modelos. Una estrategia común es escalar los valores entre 0 y 1. Alternativamente, se puede aplicar la estandarización, ajustando las variables para que tengan una media de cero y una desviación estándar de uno (Géron, 2020).
    .row.justify-content-center.align-items-center.mb-4
      .col-10.mb-4
        .cajon.color-secundario.p-4
          p.mb-0 En redes neuronales profundas, es frecuente utilizar la normalización por lotes (batch normalization), que reparametriza las capas de una red para estabilizar y acelerar el entrenamiento. Esta técnica ajusta las activaciones de cada unidad restando la media y dividiendo entre la desviación estándar del minibatch (Goodfellow et al., 2016).
      .col-10
        p La siguiente figura, describe cómo diferentes métodos de normalización pueden modificar la representación de los datos y su impacto en el análisis de patrones:
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 1.
      span  #[ Importancia de normalizar datos ]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img12_1.svg', alt='En la figura 1, se presenta la comparación entre dos gráficos de dispersión: el primero con datos normalizados por rango, y el segundo los mismos datos con una transformación más completa, evidenciando mejor estructura y agrupamiento.')
          figcaption Nota. Tomado de Pyle (1999).
      .col-lg-10.desktop(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img12.svg', alt='En la figura 1, se presenta la comparación entre dos gráficos de dispersión: el primero con datos normalizados por rango, y el segundo los mismos datos con una transformación más completa, evidenciando mejor estructura y agrupamiento.')
          figcaption Nota. Tomado de Pyle (1999).
    p El gráfico izquierdo presenta una normalización simple en rango, lo que reduce la varianza de escala entre atributos, mientras que el gráfico derecho aplica una normalización más profunda, redistribuyendo valores para mejorar la estructura interna de los datos. Esto permite detectar clústeres, definir fronteras y ubicar vecinos más cercanos, lo cual incrementa la eficiencia e interpretabilidad de los algoritmos.
    p.mb-4 El #[b enriquecimiento] de datos, por su parte, consiste en generar nuevas características a partir de las existentes, con el fin de hacer que el conjunto de datos sea más informativo y útil para el modelo. Esta práctica puede mejorar significativamente la precisión y capacidad de generalización (Goodfellow et al., 2016).
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-md-4.col-sm-4.col-6.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img13.svg', alt='')
            .col-lg-10
              p.mb-0 En resumen, la transformación de datos incluye la codificación de variables categóricas, la normalización o estandarización de variables numéricas y el enriquecimiento del conjunto de datos mediante la creación de nuevas características. Estos pasos son fundamentales para mejorar el rendimiento de los modelos y pueden automatizarse mediante el uso de #[i pipelines].
     
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Tratamiento de valores atípicos
    p El tratamiento de valores atípicos, también conocidos como #[i outliers], es una etapa clave en la preparación de datos para modelos de aprendizaje automático. Estos valores, que se alejan significativamente de la tendencia general de los datos, pueden surgir por errores de medición, variabilidad inherente del sistema o por fenómenos excepcionales. Si no se gestionan adecuadamente, pueden distorsionar el entrenamiento del modelo, afectar la precisión de las predicciones y comprometer la validez de los análisis.
    p.mb-4 El proceso de tratamiento de #[i outliers] incluye los siguientes pasos:
    .tarjeta--container.row.mb-5
        .col-lg.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema1/img14.svg', alt='Texto que describa la imagen')
          h4.text-center Identificación de valores atípicos
          p Se utilizan técnicas estadísticas y gráficas para detectar datos inusuales, como los diagramas de caja (#[i boxplots]), la desviación estándar, el método del rango intercuartílico (IQR) y la puntuación z (z-score).
  
        .col-lg.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema1/img15.svg', alt='Texto que describa la imagen')
          h4.text-center Análisis contextual
          p Una vez detectados, es esencial comprender el origen de estos valores. Pueden ser errores de entrada o extremos legítimos que contienen información valiosa para el modelo. El conocimiento del dominio es fundamental para tomar decisiones informadas.
        .col-lg.tarjeta.color-acento-contenido.p-5
          .row.justify-content-center.mb-4
            .col-4
              figure
                img(src='@/assets/curso/temas/tema1/img16.svg', alt='Texto que describa la imagen')
          h4.text-center Evaluación del impacto
          p Se debe analizar cómo los valores atípicos influyen en las métricas del modelo. Por ejemplo, el error cuadrático medio (RMSE) es sensible a valores extremos, lo que puede afectar negativamente la evaluación del rendimiento si no se gestionan adecuadamente.
    p.mb-4 A partir de esta evaluación, se pueden aplicar diversas estrategias (Pyle, 1999):
    .row.justify-content-center.mb-4
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img17.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3.text-white Reemplazo
            p.mt-3 Sustituir los valores atípicos por estimaciones más coherentes, como la media, la mediana o valores imputados por técnicas avanzadas. En algunos casos, se puede añadir ruido blanco para evitar introducir sesgos.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img18.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3.text-white Eliminación
            p.mt-3 Cuando los #[i outliers] se identifican como errores evidentes o irrelevantes para el análisis, es posible eliminarlos. Esta acción debe realizarse con cautela para no perder información valiosa.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img19.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3.text-white Transformación
            p.mt-3 Aplicar funciones como logaritmos, raíces cuadradas o escalado robusto para reducir el impacto de los valores extremos sin eliminarlos.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img20.png", alt="alt")
          .crd_hover_txt--body
            .tit-tarj.p-3
              .acordion__accion.acordion__accion__btn--b.h3.mb-0
                i.fas.fa-angle-up
              .ubicar
                h4.mb-3.text-white Investigación de patrones
            p.mt-3 Si se detectan múltiples #[i outliers] agrupados, puede ser señal de un cambio de comportamiento o un nuevo fenómeno. En tales casos, se recomienda investigar el origen de estas anomalías antes de tomar acciones correctivas.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p En conclusión, el adecuado tratamiento de valores atípicos mejora la calidad de los datos y, por tanto, la fiabilidad de los modelos predictivos. Junto con las técnicas de limpieza y transformación, esta tarea fortalece la base sobre la cual se construyen análisis precisos, robustos y útiles en el contexto del aprendizaje automático.
</template>

<script>
// eslint-disable-next-line prettier/prettier

export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
