<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Automatización y visualización de procesos de transformación de datos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-mb-6.col-sm-4.mb-mb-md-4.mb-sm-4.col-6.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img1.svg', alt='Texto que describa la imagen')
      .col-lg-9
        .cajon.color-primario.p-4.mb-3
          p.mb-0 Con el incremento en la complejidad y volumen de los proyectos de análisis de datos e inteligencia artificial, se vuelve imprescindible automatizar las tareas asociadas a la preparación y transformación de datos. La automatización no solo ahorra tiempo, sino que también garantiza consistencia, minimiza errores humanos y facilita la trazabilidad de los procesos. Esto resulta especialmente importante en entornos de producción, donde los flujos de trabajo deben ser escalables, repetibles y fácilmente mantenibles.
        p La implementación de #[i pipelines] o flujos de procesamiento automatizados permite encadenar diferentes etapas del preprocesamiento, como la limpieza, codificación, normalización, selección y generación de características. Estos #[i pipelines] pueden configurarse para adaptarse a nuevas entradas de datos, lo que facilita la actualización de modelos sin rehacer todo el proceso manualmente. Herramientas como Scikit-learn, TensorFlow Transform, Apache Airflow o KNIME ofrecen entornos robustos para construir y ejecutar estos flujos de trabajo de manera modular y eficiente.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además, la visualización del proceso de transformación es clave para auditar y comprender cómo los datos cambian a lo largo del #[i pipeline]. Diagramas de flujo, gráficos interactivos y tableros de control permiten monitorear las transformaciones, identificar cuellos de botella y validar cada etapa del procesamiento. Plataformas como Power BI, Tableau, MLflow o TensorBoard brindan recursos visuales que complementan la comprensión técnica con una representación intuitiva y accesible.
    .row.justify-content-center.align-items-center
      .col-lg-10
        p En esta sección, se analizan los principios fundamentales de la automatización con #[i pipelines], las herramientas más utilizadas para su implementación y las buenas prácticas para integrarlos en el ciclo de vida de los proyectos de aprendizaje automático. Asimismo, se destacará el valor de la visualización como un componente esencial para la supervisión y mejora continua de los procesos de transformación de datos.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 ¿Qué es un <em>pipeline</em> de datos y para qué sirve?
    p Un #[i pipeline] de datos, o canal de procesamiento de datos, es una secuencia estructurada de pasos que transforma datos desde su estado bruto hasta un formato procesado y listo para ser utilizado en análisis o modelos de Inteligencia Artificial (IA). Según Géron (2020), puede entenderse como el flujo que sigue la información desde su recolección inicial hasta su utilización final como insumo en sistemas analíticos o predictivos.
    p.mb-4 Este flujo incluye múltiples etapas automatizadas que pueden integrar procesos como:
    .tarjeta--BG04.px-lg-5.px-4.pt-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-md-8.col-sm-5.mb-md-4.mb-sm-4.col-6
          figure
            img(src='@/assets/curso/temas/tema3/img3.png', alt='Texto que describa la imagen')
        .col-lg-8
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-lg-8.col-4
                  img(src='@/assets/curso/temas/tema3/img4.svg' alt='AvatarTop')
              p.text-center Recolección y adquisición de datos desde fuentes diversas.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-lg-8.col-4
                  img(src='@/assets/curso/temas/tema3/img5.svg' alt='AvatarTop')
              p.text-center Limpieza y depuración para eliminar inconsistencias, duplicados o valores atípicos.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-lg-8.col-4
                  img(src='@/assets/curso/temas/tema3/img6.svg' alt='AvatarTop')
              p.text-center Transformación para estructurar, codificar o escalar los datos según lo requiera el modelo.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-lg-8.col-4
                  img(src='@/assets/curso/temas/tema3/img7.svg' alt='AvatarTop')
              p.text-center Almacenamiento intermedio en bases de datos o estructuras temporales.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-lg-8.col-4
                  img(src='@/assets/curso/temas/tema3/img8.svg' alt='AvatarTop')
              p.text-center Aplicación de algoritmos de inteligencia artificial para entrenamiento o predicción.
            .tarjeta.bgblanco.p-4
              .row.justify-content-center.mb-3
                .col-lg-8.col-4
                  img(src='@/assets/curso/temas/tema3/img9.svg' alt='AvatarTop')
              p.text-center Preparación y visualización de resultados, facilitando la interpretación y la toma de decisiones por parte de usuarios o clientes.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 El propósito principal de un #[i pipeline] de datos es garantizar que la información fluya de manera ordenada, eficiente y reproducible desde su origen hasta su uso final, permitiendo generar valor a partir de datos crudos. Además, facilita la escalabilidad del proceso, mejora la calidad de los datos y reduce los errores manuales en tareas repetitivas.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Automatización de flujos con Scikit-learn #[i pipelines] y MLflow
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-mb-4.col-sm-4.mb-mb-md-4.mb-sm-4.col-6
        figure
          img(src='@/assets/curso/temas/tema3/img10.svg', alt='Texto que describa la imagen')
      .col-lg-9
        .cajon.color-secundario.p-4.mb-3
          p.mb-0 Los #[i pipelines] de Scikit-learn permiten automatizar procesos de aprendizaje automático al encadenar transformaciones de datos con un modelo estimador. Esta herramienta organiza el flujo de trabajo, facilita la reproducibilidad de los experimentos y mejora la eficiencia operativa (Géron, 2020).
        p En general, un #[i pipeline] se compone de varias etapas secuenciales, donde cada una aplica una transformación a los datos (como el escalado o la codificación), y la última corresponde a un estimador (clasificador o regresor). Al entrenar el #[i pipeline], las transformaciones se ajustan automáticamente a los datos de entrenamiento; al predecir, las mismas transformaciones se aplican de forma coherente a los nuevos datos.
    
    p.mb-4 Una de sus principales ventajas radica en evitar errores frecuentes, como aplicar manualmente diferentes preprocesamientos al conjunto de prueba. Además, los #[i pipelines] son compatibles con herramientas de validación como GridSearchCV, permitiendo la optimización conjunta de hiperparámetros y transformaciones.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo.mb-4(data-aos="flip-up")
          img(src='@/assets/curso/imgicono.svg', alt='Imagen decorativa')
          h5.mb-0 Ejemplo básico de uso en Python:
    .tarjeta.BGGRA.px-lg-5.px-4
      .row.justify-content-center.align-items-center
        .col-lg-7
          .tarjeta.BG03.p-4
            p.mt-5.mb-0.text-white from sklearn.pipeline import Pipeline
            p.mb-0.text-white from sklearn.preprocessing import StandardScaler
            p.mb-0.text-white from sklearn.linear_model import LogisticRegression
            p.mb-0.text-white pipeline = Pipeline([
            p.mb-0.text-white ('scaler', StandardScaler()),
            p.mb-0.text-white ('model', LogisticRegression())
            p.mb-5.text-white ])

        .col-lg-3.col-md-6.mb-md-4.col-6.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img12.svg', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center
        .col-lg-10
          p Este fragmento configura un #[i pipeline] con dos pasos:
          ul.lista-ul--color
            li
              i.fas.fa-check
              | Estandarización de variables numéricas mediante StandardScaler.
            li
              i.fas.fa-check
              | Entrenamiento de un modelo de regresión logística.
          p La ventaja es que todo el flujo puede entrenarse y reutilizarse como una unidad estructurada:
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-7
          .tarjeta.BG04.p-4
            p.mt-5.mb-0.text-white from sklearn.datasets import load_iris
            p.mb-0.text-white X, y = load_iris(return_X_y=True)
            p.mb-0.text-white pipeline.fit(X, y)
            p.mb-5.mb-0.text-white y_pred = pipeline.predict(X)

        .col-lg-3.col-md-6.mb-md-4.col-6.mb-4
          figure
            img(src='@/assets/curso/temas/tema3/img14.svg', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-md-6.col-sm-5.mb-md-4.md-mb-sm-4.col-6.mb-4
        figure
          img(src='@/assets/curso/temas/tema3/img15.png', alt='Texto que describa la imagen')
      .col-lg-9
        .cajon.color-primario.p-4.mb-4
          p.mb-0 El código anterior demuestra un flujo completo, desde la carga del conjunto de datos hasta la predicción. Durante el proceso, se garantiza que las transformaciones se apliquen correctamente sin intervención adicional del usuario.
        p Por otro lado, MLflow es una plataforma de código abierto diseñada para gestionar todo el ciclo de vida del aprendizaje automático. Facilita el seguimiento de experimentos, la gestión de modelos, el registro de métricas y el despliegue en producción. Aunque no existe una integración nativa y automática entre MLflow y #[i Pipeline] de Scikit-learn, ambas herramientas pueden utilizarse de forma complementaria para documentar y escalar flujos de trabajo. MLflow permite:
        ul.lista-ul--color
          li
            i.fas.fa-angle-right
            | Registrar y versionar modelos.
          li
            i.fas.fa-angle-right
            | Automatizar ejecuciones y comparaciones.
          li
            i.fas.fa-angle-right
            | Visualizar métricas, hiperparámetros y artefactos.
          li
            i.fas.fa-angle-right
            | Integrarse con bibliotecas como Scikit-learn, TensorFlow o Spark.
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Figura 2.
      span  #[i Ejemplo de proyecto ML en MLflow]
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema3/img16.png', alt='En figura 2 contiene la interfaz gráfica de MLflow, la cual presenta ejecuciones de modelos con diferentes combinaciones de hiperparámetros para predecir la demanda de productos.')
          figcaption Nota. Tomado de <a href="https://mlflow.org/#core-concepts" target="_blank">mlflow.org</a>
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 La interfaz gráfica de MLflow presenta ejecuciones de modelos con diferentes combinaciones de hiperparámetros para predecir la demanda de productos. En este caso, se utiliza el RMSE (Root Mean Squared Error) como métrica principal. A través de coordenadas paralelas y gráficos de barras, es posible identificar qué configuraciones de hiperparámetros (como alpha, lambda o eta) resultan en menores errores.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Los gráficos adicionales ofrecen una visión cronológica del rendimiento, comparaciones entre modelos y relaciones entre hiperparámetros y métricas. Estas visualizaciones son esenciales para tomar decisiones informadas durante la experimentación.
        p Código de ejemplo con evaluación automatizada usando MLflow y modelos de lenguaje:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta.BG05.p-4
          p.mt-5.mb-0 from openai import OpenAI
          p.mb-0 import mlflow
          p.mb-0 from mlflow.metrics.genai import answer_correctness, answer_similarity, faithfulness
          p.mb-0 
          p.mb-0 mlflow.openai.autolog()
          p.mb-0 client = OpenAI()
          p.mb-4 
          p.mb-0 prompt_template = """\
          p.mb-0 You are an expert AI assistant. Answer the user's question with clarity, accuracy, and conciseness.
          p.mb-0 
          p.mb-0 ## Question:
          p.mb-0 {question}
          p.mb-4 
          p.mb-0 ## Guidelines:
          p.mb-0 - Keep responses factual and to the point.
          p.mb-0 - If relevant, provide examples or step-by-step instructions.
          p.mb-0 - If the question is ambiguous, clarify before answering.
          p.mb-4 
          p.mb-0 Respond below:
          p.mb-0 """
          p.mb-4 
          p.mb-0 mlflow_ground_truth = (
          p.mb-0     "MLflow is an open-source platform for managing the end-to-end machine learning lifecycle..."
          p.mb-0 )
          p.mb-4 
          p.mb-0 metrics = {
          p.mb-0     "answer_similarity": answer_similarity(model="openai:/gpt-4o"),
          p.mb-0     "answer_correctness": answer_correctness(model="openai:/gpt-4o"),
          p.mb-0     "faithfulness": faithfulness(model="openai:/gpt-4o"),
          p.mb-0 }
          p.mb-4 
          p.mb-0 question = "What is MLflow?"
          p.mb-0 
          p.mb-0 with mlflow.start_run():
          p.mb-0     response = client.chat.completions.create(
          p.mb-0         messages=[{"role": "user", "content": prompt_template.format(question=question)}],
          p.mb-0         model="gpt-4o-mini",
          p.mb-0         temperature=0.1,
          p.mb-0         max_tokens=2000,
          p.mb-0     ).choices[0].message.content
          p.mb-4 
          p.mb-0     answer_similarity_score = metrics["answer_similarity"](
          p.mb-0         predictions=response, inputs=question, targets=mlflow_ground_truth
          p.mb-0     ).scores[0]
          p.mb-0     answer_correctness_score = metrics["answer_correctness"](
          p.mb-0         predictions=response, inputs=question, targets=mlflow_ground_truth
          p.mb-0     ).scores[0]
          p.mb-0     faithfulness_score = metrics["faithfulness"](
          p.mb-0         predictions=response, inputs=question, context=mlflow_ground_truth
          p.mb-0     ).scores[0]
          p.mb-4 
          p.mb-0     logged_model = mlflow.last_logged_model()
          p.mb-0     mlflow.log_metrics(
          p.mb-0         {
          p.mb-0             "answer_similarity": answer_similarity_score,
          p.mb-0             "answer_correctness": answer_correctness_score,
          p.mb-0             "faithfulness": faithfulness_score,
          p.mb-0         },
          p.mb-0         model_id=logged_model.model_id,
          p.mb-5     )
    p.mb-4 Con el fin de consolidar la comprensión del flujo presentado en el código anterior, a continuación, se ofrece un resumen conceptual de los principales componentes utilizados. Esta síntesis permite identificar el propósito específico de cada elemento dentro del proceso de evaluación automatizada con MLflow y OpenAI, facilitando su comprensión y posible reutilización en proyectos similares. La tabla 1 presenta de forma esquemática estos componentes y su función en el flujo de trabajo.
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
      h5 Tabla 1.
      span  #[i Resumen conceptual de componentes]
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-b.color-acento-contenido.mb-4(data-aos="fade-left")
          table(alt="")
            thead
              tr
                th Componente	
                th Propósito
            tbody
              tr
                td mlflow.openai.autolog()	
                td Registro automático de trazas, métricas y artefactos.
              tr 
                td prompt_template	
                td Controla el formato de la entrada para el modelo.
              tr
                td mlflow_ground_truth	
                td Define la respuesta de referencia para la evaluación.
              tr
                td metrics	
                td Establece funciones de evaluación automática.
              tr
                td mlflow.start_run()	
                td Inicia un experimento registrable.
              tr
                td mlflow.log_metrics()	
                td Almacena los resultados obtenidos.
              tr
                td mlflow.search_traces()	
                td Recupera información detallada de cada ejecución.
    .row.justify-content-center.align-items-center
        .col-lg-10
          .cajon.color-primario.p-4
            .row.justify-content-center.align-items-center
              .col-lg-2.col-6.mb-4
                figure
                  img(src='@/assets/curso/temas/tema3/img18.svg', alt='')
              .col-lg-10
                p.mb-0 El uso conjunto de Scikit-learn y MLflow, aunque no completamente automatizado de forma nativa, permite documentar, comparar y versionar flujos de trabajo de forma profesional, haciendo que el desarrollo de modelos sea más confiable, reproducible y escalable.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Buenas prácticas para automatizar la gestión de datos
    p.mb-4 La automatización de la gestión de datos en los entornos de desarrollo de modelos de aprendizaje automático es fundamental para garantizar la eficiencia, la reproducibilidad y la escalabilidad de los proyectos. Por esta razón, es importante adoptar buenas prácticas que contemplen diversas etapas y consideraciones clave:
    .tarjeta--BG06.p-4.px-lg-5.mb-4
      .tarjeta.tarjeta--BG07.p-4.mb-5
        PasosB.color-acento-botones
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Organización sistemática de los datos
              p Una adecuada organización facilita la interpretación y el análisis de la información. La forma más eficaz de lograrlo es mediante el uso de bases de datos, que permiten clasificaciones simples o cruzadas según las variables relevantes (Mesa Guerrero, 2020).
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img19.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Implementación de #[i pipelines] de datos
              p Un #[i pipeline] es una serie de componentes encadenados para limpiar, transformar, almacenar y aplicar algoritmos de inteligencia artificial a los datos. Un ejemplo es el #[i pipeline] de Scikit-learn, herramienta que permite estructurar un flujo de trabajo completo, automatizando desde la transformación de datos hasta la predicción, garantizando así la coherencia entre el entrenamiento y la inferencia.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img20.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Preparación y transformación de datos
              p Este paso es esencial, especialmente en algoritmos como redes neuronales, que requieren que los datos estén normalizados en rangos específicos. Una preparación adecuada mejora el rendimiento y la estabilidad de los modelos.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img21.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Automatización mediante herramientas especializadas
              p El uso de soluciones ETL (Extracción, Transformación y Carga), junto con herramientas de limpieza de datos, permite automatizar el procesamiento y traslado de información desde múltiples fuentes, preparándola para su uso futuro de forma eficiente.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img22.png', alt='Texto que describa la imagen')
          .row(titulo="")
            .col-md-6.mb-4.mb-md-0
              h4 Gobernanza de datos
              p Implementar un marco de gobernanza, como el propuesto por DAMA, es una práctica recomendada para garantizar el control y la integridad de la información. Esto implica establecer políticas, procedimientos, roles y responsabilidades claras, así como velar por la calidad, seguridad e interoperabilidad de los datos. En algunos casos, puede ser necesario establecer una Oficina de Datos para la supervisión de estas políticas.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img23.png', alt='Texto que describa la imagen')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p En síntesis, la automatización eficaz de la gestión de datos requiere planificación estratégica, el diseño de #[i pipelines] robustos, la adopción de estándares de calidad y gobernanza, y el uso de herramientas adecuadas que se ajusten a las características del proyecto y los tipos de datos involucrados.

	

	

	

	

	

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
