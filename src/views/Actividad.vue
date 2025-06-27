<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
// eslint-disable-next-line semi, prettier/prettier
import Actividad from '@/components/actividad/Actividad.vue';
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Modelado de datos automatizados',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> validar la apropiación de los conceptos básicos para aplicación de técnicas de preparación de datos en modelos de inteligencia artificial.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'La preparación de datos no tiene impacto en el rendimiento del modelo de aprendizaje automático.\tRta(s) correcta(s) (x)',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Una preparación adecuada mejora la precisión del modelo y evita errores como el sobreajuste.',
          mensaje_incorrecto: '',
        },
        {
          id: 2,
          texto:
            'El proceso de codificación convierte variables categóricas en representaciones numéricas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Esto permite que los algoritmos de aprendizaje automático trabajen correctamente con datos categóricos.',
          mensaje_incorrecto: '',
        },
        {
          id: 3,
          texto:
            'La normalización de datos busca ajustar todas las variables a una media de cero y desviación estándar de uno.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Esta técnica es importante para algoritmos sensibles a la escala de los datos, como SVM o regresión logística.',
          mensaje_incorrecto: '',
        },
        {
          id: 4,
          texto: 'Los valores atípicos siempre deben eliminarse sin excepción.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Antes de eliminar, deben analizarse ya que pueden representar información importante o errores de medición.',
          mensaje_incorrecto: '',
        },
        {
          id: 5,
          texto:
            'El enriquecimiento de datos consiste en eliminar columnas innecesarias.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. El enriquecimiento crea nuevas características que pueden mejorar el rendimiento del modelo.',
          mensaje_incorrecto: '',
        },
        {
          id: 6,
          texto:
            'El conjunto de validación se utiliza para ajustar hiperparámetros del modelo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Permite mejorar el rendimiento sin usar el conjunto de prueba repetidamente.',
          mensaje_incorrecto: '',
        },
        {
          id: 7,
          texto:
            'La técnica hold-out implica dividir los datos en múltiples pliegues para entrenamiento y validación.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Hold-out divide una sola vez el conjunto de datos, típicamente en 70 % entrenamiento y 30 % prueba.',
          mensaje_incorrecto: '',
        },
        {
          id: 8,
          texto:
            'La validación cruzada k-fold mejora la estimación del rendimiento del modelo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Ayuda a reducir el sobreajuste y proporciona una evaluación más robusta.',
          mensaje_incorrecto: '',
        },
        {
          id: 9,
          texto:
            'En un conjunto de datos balanceado, cada clase tiene aproximadamente la misma cantidad de ejemplos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Esto facilita el aprendizaje del modelo y evita sesgos hacia una clase dominante.',
          mensaje_incorrecto: '',
        },
        {
          id: 10,
          texto:
            'El F1-score combina precisión y exhaustividad en una sola métrica',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Es especialmente útil cuando existe un desequilibrio en las clases.',
          mensaje_incorrecto: '',
        },
        {
          id: 11,
          texto:
            'Los pipelines de Scikit-learn permiten automatizar el flujo de transformación y entrenamiento de modelos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Facilitan un procesamiento estructurado y reproducible de los datos.',
          mensaje_incorrecto: '',
        },
        {
          id: 12,
          texto:
            'MLflow no permite registrar métricas ni hacer seguimiento del ciclo de vida de un modelo.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. MLflow permite registrar modelos, métricas, parámetros y artefactos de forma automatizada.',
          mensaje_incorrecto: '',
        },
        {
          id: 13,
          texto:
            'La automatización de la gestión de datos favorece la reproducibilidad de los proyectos de IA.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Al estandarizar los procesos se garantiza mayor eficiencia y trazabilidad.',
          mensaje_incorrecto: '',
        },
        {
          id: 14,
          texto:
            'La tasa de aprendizaje alta siempre mejora el rendimiento del modelo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Una tasa de aprendizaje alta puede causar que el modelo no converja adecuadamente.',
          mensaje_incorrecto: '',
        },
        {
          id: 15,
          texto:
            'El RMSE es una métrica útil para evaluar errores en problemas de regresión.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Es sensible a errores grandes y se usa para medir la precisión de las predicciones.',
          mensaje_incorrecto: '',
        },
        {
          id: 16,
          texto:
            'La matriz de confusión solo sirve para problemas de regresión.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. La matriz de confusión es usada en clasificación para evaluar el desempeño del modelo.',
          mensaje_incorrecto: '',
        },
        {
          id: 17,
          texto:
            'En los pipelines de Scikit-learn, el paso final siempre debe ser un estimador.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. El paso final debe ser el que realiza predicción, como una regresión o clasificación.',
          mensaje_incorrecto: '',
        },
        {
          id: 18,
          texto:
            'El uso de herramientas ETL es irrelevante en la preparación de datos para IA.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Las herramientas ETL son clave para automatizar la extracción, transformación y carga de datos.',
          mensaje_incorrecto: '',
        },
        {
          id: 19,
          texto:
            'Una estrategia de gobernanza de datos ayuda a garantizar la calidad y seguridad de la información.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Implementar marcos de gobernanza asegura trazabilidad, calidad y cumplimiento normativo.',
          mensaje_incorrecto: '',
        },
        {
          id: 20,
          texto:
            'La automatización del flujo de datos no aporta beneficios a proyectos de aprendizaje automático.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Automatizar permite reducir errores, ahorrar tiempo y mejorar la eficiencia en proyectos de ML.',
          mensaje_incorrecto: '',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Felicitaciones, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo..',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
