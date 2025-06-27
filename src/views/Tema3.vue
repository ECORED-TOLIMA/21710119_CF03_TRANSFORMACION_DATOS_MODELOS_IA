<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Automatización y visualización de procesos de transformación de datos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-mb-6.col-sm-4.mb-mb-md-4.mb-sm-4
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='Texto que describa la imagen')
      .col-lg-9
        .cajon.color-primario.p-4.mb-3
          p.mb-0 Con el incremento en la complejidad y volumen de los proyectos de análisis de datos e inteligencia artificial, se vuelve imprescindible automatizar las tareas asociadas a la preparación y transformación de datos. La automatización no solo ahorra tiempo, sino que también garantiza consistencia, minimiza errores humanos y facilita la trazabilidad de los procesos. Esto resulta especialmente importante en entornos de producción, donde los flujos de trabajo deben ser escalables, repetibles y fácilmente mantenibles.
        p La implementación de pipelines o flujos de procesamiento automatizados permite encadenar diferentes etapas del preprocesamiento, como la limpieza, codificación, normalización, selección y generación de características. Estos pipelines pueden configurarse para adaptarse a nuevas entradas de datos, lo que facilita la actualización de modelos sin rehacer todo el proceso manualmente. Herramientas como Scikit-learn, TensorFlow Transform, Apache Airflow o KNIME ofrecen entornos robustos para construir y ejecutar estos flujos de trabajo de manera modular y eficiente.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además, la visualización del proceso de transformación es clave para auditar y comprender cómo los datos cambian a lo largo del pipeline. Diagramas de flujo, gráficos interactivos y tableros de control permiten monitorear las transformaciones, identificar cuellos de botella y validar cada etapa del procesamiento. Plataformas como Power BI, Tableau, MLflow o TensorBoard brindan recursos visuales que complementan la comprensión técnica con una representación intuitiva y accesible.
    .row.justify-content-center.align-items-center
      .col-lg-10
        p En esta sección, se analizan los principios fundamentales de la automatización con pipelines, las herramientas más utilizadas para su implementación y las buenas prácticas para integrarlos en el ciclo de vida de los proyectos de aprendizaje automático. Asimismo, se destacará el valor de la visualización como un componente esencial para la supervisión y mejora continua de los procesos de transformación de datos.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 ¿Qué es un <em>pipeline</em> de datos y para qué sirve?
    p Un #[i pipeline] de datos, o canal de procesamiento de datos, es una secuencia estructurada de pasos que transforma datos desde su estado bruto hasta un formato procesado y listo para ser utilizado en análisis o modelos de Inteligencia Artificial (IA). Según Géron (2020), puede entenderse como el flujo que sigue la información desde su recolección inicial hasta su utilización final como insumo en sistemas analíticos o predictivos.
    p.mb-4 Este flujo incluye múltiples etapas automatizadas que pueden integrar procesos como:
    .tarjeta--BG04.px-lg-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-md-8.col-sm-5.mb-md-4.mb-sm-4
          figure
            img(src='@/assets/curso/temas/tema3/img3.png', alt='Texto que describa la imagen')
        .col-lg-8
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema3/img4.svg' alt='AvatarTop')
              p.text-center Recolección y adquisición de datos desde fuentes diversas.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema3/img5.svg' alt='AvatarTop')
              p.text-center Limpieza y depuración para eliminar inconsistencias, duplicados o valores atípicos.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema3/img6.svg' alt='AvatarTop')
              p.text-center Transformación para estructurar, codificar o escalar los datos según lo requiera el modelo.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema3/img7.svg' alt='AvatarTop')
              p.text-center Almacenamiento intermedio en bases de datos o estructuras temporales.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema3/img8.svg' alt='AvatarTop')
              p.text-center Aplicación de algoritmos de inteligencia artificial para entrenamiento o predicción.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema3/img9.svg' alt='AvatarTop')
              p.text-center Preparación y visualización de resultados, facilitando la interpretación y la toma de decisiones por parte de usuarios o clientes.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4
          p El propósito principal de un pipeline de datos es garantizar que la información fluya de manera ordenada, eficiente y reproducible desde su origen hasta su uso final, permitiendo generar valor a partir de datos crudos. Además, facilita la escalabilidad del proceso, mejora la calidad de los datos y reduce los errores manuales en tareas repetitivas.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Automatización de flujos con Scikit-learn Pipelines y MLflow
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-mb-4.col-sm-4.mb-mb-md-4.mb-sm-4
        figure
          img(src='@/assets/curso/temas/tema3/img10.svg', alt='Texto que describa la imagen')
      .col-lg-9
        .cajon.color-secundario.p-4.mb-3
          p.mb-0 Los #[i pipelines] de Scikit-learn permiten automatizar procesos de aprendizaje automático al encadenar transformaciones de datos con un modelo estimador. Esta herramienta organiza el flujo de trabajo, facilita la reproducibilidad de los experimentos y mejora la eficiencia operativa (Géron, 2020).
        p En general, un "[i pipeline] se compone de varias etapas secuenciales, donde cada una aplica una transformación a los datos (como el escalado o la codificación), y la última corresponde a un estimador (clasificador o regresor). Al entrenar el #[i pipeline], las transformaciones se ajustan automáticamente a los datos de entrenamiento; al predecir, las mismas transformaciones se aplican de forma coherente a los nuevos datos.
    
    p.mb-4 Una de sus principales ventajas radica en evitar errores frecuentes, como aplicar manualmente diferentes preprocesamientos al conjunto de prueba. Además, los pipelines son compatibles con herramientas de validación como GridSearchCV, permitiendo la optimización conjunta de hiperparámetros y transformaciones.

    
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Buenas prácticas para automatizar la gestión de datos

</template>

<script>
export default {
  name: 'Tema3',
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
