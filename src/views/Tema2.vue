<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 2
      h1 Técnicas de partición y balanceo de datos para el modelado
      
    .row.justify-content-center.align-items-centerr.mb-4
      .col-lg-12(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', alt='Texto que describa la imagen')
    p Una vez que los datos han sido limpiados, transformados y enriquecidos, el siguiente paso consiste en organizar el conjunto de datos de manera que permita construir y evaluar modelos de aprendizaje automático de forma confiable. Esta organización implica dividir los datos en subconjuntos con funciones específicas, lo que permite entrenar el modelo, ajustar sus parámetros y evaluar su capacidad de generalización.
    p.mb-4 Según Géron (2020), las principales estrategias de partición son:
    .row.justify-content-center
      .col-lg-10(data-aos="zoom-in")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img2.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 División en conjuntos de entrenamiento y prueba
              p La práctica más común consiste en separar el conjunto de datos en dos grupos: uno para entrenar el modelo (training set) y otro para evaluarlo (test set). El conjunto de entrenamiento se utiliza para que el modelo aprenda los patrones de los datos, mientras que el conjunto de prueba sirve para verificar qué tan bien el modelo generaliza ante nuevos datos no vistos durante el entrenamiento. Una división típica es de 80 % para entrenamiento y 20 % para prueba, aunque esta proporción puede variar según el tamaño y la naturaleza del conjunto de datos.
      .col-lg-10(data-aos="zoom-in")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Conjunto de validación (opcional)
              p En muchos casos, además del conjunto de prueba, se utiliza un conjunto de validación (validation set), el cual permite ajustar hiperparámetros, seleccionar entre distintos modelos y prevenir el sobreajuste. Esto es especialmente útil cuando se prueba una gran cantidad de configuraciones. Una práctica común consiste en reservar un 5 % del total de los datos como conjunto de validación y utilizar el restante 15 % como prueba. En entornos dinámicos, como el financiero, la validación puede hacerse en tiempo real, observando cómo el modelo se comporta al ser implementado.
      .col-lg-10(data-aos="zoom-in")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h4 Partición estratificada
              p Cuando se trabaja con variables categóricas importantes, como la clase objetivo en problemas de clasificación, es recomendable emplear partición estratificada. Esta técnica asegura que la proporción de cada clase se mantenga igual en los subconjuntos (entrenamiento, validación y prueba). Esto es crucial en situaciones de desequilibrio de clases, como en el análisis de fraudes, donde los casos positivos son escasos. Ignorar esta técnica puede derivar en modelos sesgados hacia la clase mayoritaria.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p Estas técnicas de partición permiten construir modelos más robustos, evitar el sobreajuste y obtener una evaluación realista del desempeño predictivo del modelo. En el siguiente apartado se abordarán estrategias de balanceo que complementan estas prácticas, especialmente cuando se enfrentan problemas de desbalance entre clases.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Métodos de partición: <em>hold-out</em>, <em>k-fold</em> y muestreo estratificado
    p.mb-4 En el contexto de la partición de datos para proyectos de aprendizaje automático, se emplean varias técnicas que permiten organizar los datos de manera eficaz para entrenar y evaluar modelos con mayor precisión (Géron, 2020). Las más utilizadas son:
    .tarjeta.tarjeta--BG03.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b" data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            h4  Partición #[i hold-out]
            p Consiste en dividir el conjunto de datos una sola vez, generalmente en una proporción como 70 % para entrenamiento y 30 % para prueba. Esta técnica separa los datos disponibles en dos subconjuntos distintos: uno destinado al aprendizaje del modelo y otro reservado para la evaluación de su rendimiento sobre datos no vistos. La división se realiza de forma aleatoria para evitar sesgos y asegurar que ambos subconjuntos sean representativos. Es una técnica sencilla, rápida y útil para conjuntos de datos grandes, aunque su estimación de rendimiento puede depender fuertemente de cómo se realizó la partición.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema2/img5.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            h4  Muestreo estratificado
            p Esta técnica se utiliza cuando los datos contienen una variable categórica importante, como la clase objetivo, que debe estar representada proporcionalmente en cada subconjunto. El muestreo estratificado garantiza que cada estrato (o categoría) mantenga su proporción relativa en los conjuntos de entrenamiento y prueba. Esto es especialmente relevante en problemas de clasificación con clases desbalanceadas, donde una distribución desigual podría afectar negativamente el rendimiento del modelo.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema2/img6.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            h4  Validación cruzada k-fold
            p Es una técnica robusta que permite evaluar modelos cuando se dispone de un volumen de datos limitado. El conjunto de datos se divide en k subconjuntos (o folds) del mismo tamaño. Luego, el modelo se entrena k veces, utilizando k–1 pliegues para entrenamiento y el pliegue restante para validación. Al rotar los pliegues, cada observación es utilizada una vez para validar y k–1 veces para entrenar. Este método reduce el riesgo de sobreajuste y proporciona una estimación más confiable del rendimiento. Comúnmente se elige k = 5 o k = 10, dependiendo del tamaño del conjunto de datos y de los recursos computacionales disponibles.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema2/img7.png' alt="Imagen decorativa")
    p En conjunto, estas técnicas permiten aprovechar mejor los datos disponibles y obtener evaluaciones más precisas del comportamiento del modelo en condiciones reales.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Evaluación del rendimiento en conjuntos balanceados
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.col-sm-4.mb-md-4.mb-sm-4
        figure
          img(src='@/assets/curso/temas/tema2/img8.svg', alt='Texto que describa la imagen')
      .col-lg-9
        p La evaluación del rendimiento de los modelos de aprendizaje automático en conjuntos de datos equilibrados se basa en técnicas estándar de validación, aunque con la ventaja de que la distribución igualitaria entre clases permite una interpretación más clara de las métricas. Un conjunto se considera balanceado cuando contiene una cantidad similar de ejemplos para cada clase (Benítez et al., 2014), lo que reduce el sesgo en el entrenamiento y mejora la capacidad de generalización del modelo.
        p Una vez definida la estrategia de partición de los datos y asegurado el equilibrio entre clases, es fundamental aplicar métricas que permitan evaluar objetivamente el rendimiento del modelo. La elección de las métricas dependerá del tipo de problema (clasificación o regresión) y de los objetivos del análisis. A continuación, se describen las métricas más utilizadas en proyectos de aprendizaje automático con conjuntos de datos balanceados.
    .row.justify-content-center.align-items-center
      .col-lg-10
      
        LineaTiempoD.color-acento-botones.mb-4
          .row(numero="A" titulo="División de datos")
            .col-md-12.mb-4.mb-md-0
              p Una etapa inicial en la evaluación consiste en dividir los datos en subconjuntos para entrenamiento, validación y prueba. Es crucial que esta división mantenga la proporción de clases en cada partición, incluso si el conjunto de datos original ya está balanceado. En situaciones donde se optimizan hiperparámetros, se recomienda incluir un conjunto de validación adicional para evitar el sobreajuste durante el ajuste del modelo (Benítez et al., 2014).
            .col-md-12
              figure
                img(src='@/assets/curso/temas/tema2/img9.png', alt='Texto que describa la imagen')
          .row(numero="B" titulo="Métricas de evaluación")
            .col-md-12.mb-4.mb-md-0
              p En el contexto de conjuntos balanceados, las métricas de evaluación reflejan con mayor precisión el desempeño real del modelo, ya que no están influenciadas por clases mayoritarias. Algunas de las métricas más utilizadas incluyen:
            .col-md-12
              .bgblanco.p-4              
                ul.lista-ul--color
                  li
                    i.fas.fa-circle
                    p.mb-0 #[b Precisión (#[i accuracy]):] mide la proporción de predicciones correctas. En conjuntos balanceados, esta métrica es confiable, a diferencia de los desequilibrados, donde puede ser engañosa.
                  li
                    i.fas.fa-circle
                    p.mb-0 #[b Matriz de confusión:] herramienta fundamental para clasificaciones multiclase o binarias. Permite analizar verdaderos positivos (TP), verdaderos negativos (TN), falsos positivos (FP) y falsos negativos (FN), y derivar métricas clave como:
                      ul.lista-ul
                        li 
                          i.lista-ul__vineta
                          p.mb-0 #[b Precisión (#[i precision]):] proporción de verdaderos positivos entre las predicciones positivas.
                        li 
                          i.lista-ul__vineta
                          p.mb-0 #[b Exhaustividad o sensibilidad (#[i recall]):] proporción de verdaderos positivos respecto al total real de la clase positiva.
                        li 
                          i.lista-ul__vineta
                          p.mb-0 #[b F1-score:] media armónica entre precisión y exhaustividad, útil cuando se requiere equilibrio entre ambas.
                        li 
                          i.lista-ul__vineta
                          p.mb-0 #[b Área bajo la curva ROC (AUC-ROC):] indica la capacidad del modelo para discriminar entre clases. Un AUC cercano a 1.0 refleja un excelente rendimiento.

                  li
                    i.fas.fa-circle
                    p.mb-0 #[b Métricas de regresión:] para modelos de regresión, se aplican métricas como el Error Cuadrático Medio (RMSE) y el Error Absoluto Medio (MAE), que cuantifican la diferencia entre las predicciones y los valores reales. El RMSE es más sensible a errores grandes, mientras que el MAE proporciona una visión más robusta ante valores atípicos.


              figure
                img(src='@/assets/curso/temas/tema2/img10.png', alt='Texto que describa la imagen')
          .row(numero="C" titulo="Validación cruzada")
            .col-md-12.mb-4.mb-md-0
              p Especialmente la de #[i k-fold], es una técnica esencial para estimar el rendimiento generalizado del modelo. Consiste en dividir el conjunto de datos en k pliegues, entrenar el modelo k veces utilizando diferentes combinaciones de entrenamiento y prueba, y calcular el promedio de las métricas obtenidas. Esta técnica reduce la varianza de las estimaciones y es especialmente útil con conjuntos de datos limitados. Un valor común para k es 10 (Benítez et al., 2014).
            .col-md-12
              figure
                img(src='@/assets/curso/temas/tema2/img11.png', alt='Texto que describa la imagen')
      p.mb-4  Una vez aplicadas las métricas y técnicas de validación, es recomendable comparar el desempeño del modelo con otros enfoques o algoritmos alternativos. Esta comparación permite determinar si el modelo seleccionado es el más adecuado para el problema planteado, considerando tanto su rendimiento como su capacidad de generalización. Evaluar diferentes modelos bajo las mismas condiciones facilita una toma de decisiones fundamentada y orientada a seleccionar la solución más robusta y eficiente (Raschka, 2018).          
      .row.justify-content-center.align-items-center
        .col-lg-10
          .cajon.color-primario.p-4
            .row.justify-content-center.align-items-center
              .col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema2/img12.svg', alt='')
              .col-lg-10
                p.mb-0 En resumen, evaluar el rendimiento en conjuntos balanceados implica mantener proporciones consistentes entre clases, aplicar métricas adecuadas para clasificación o regresión, utilizar validación cruzada para asegurar robustez y comparar con otros enfoques para validar su efectividad. El equilibrio en las clases mejora la interpretación de las métricas, aunque no modifica los principios generales de la evaluación.
</template>

<script>
export default {
  name: 'Tema2',
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
