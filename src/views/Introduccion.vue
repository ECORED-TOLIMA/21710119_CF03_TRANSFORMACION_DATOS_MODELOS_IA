<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4 La gestión del ciclo de vida del aprendizaje automático abarca todas las fases necesarias para desarrollar soluciones basadas en inteligencia artificial de forma eficiente y sostenible. Este proceso incluye la limpieza, transformación y preparación de los datos, así como la selección y evaluación de modelos, la automatización de tareas y la aplicación de buenas prácticas. Una adecuada comprensión de estas etapas permite optimizar los resultados, mejorar la reproducibilidad y reducir errores en la toma de decisiones. Para profundizar en la importancia de estos temas, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="1493" height="840" src="https://www.youtube.com/embed/jDvCBsCzlQc" title="Visualización, partición y automatización en el procesamiento de datos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
            
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
