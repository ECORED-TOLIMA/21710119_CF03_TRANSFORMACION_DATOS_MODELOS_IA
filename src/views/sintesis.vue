<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El ciclo de vida del aprendizaje automático abarca desde la recolección y limpieza de datos hasta la evaluación de modelos, destacando procesos clave como la transformación, el tratamiento de valores atípicos, la partición de datos y la automatización mediante #[i pipelines]. Herramientas como Scikit-learn y MLflow permiten estructurar flujos de trabajo eficientes, reproducibles y trazables. Además, la adopción de buenas prácticas y marcos de gobernanza de datos garantiza la calidad, seguridad y control de la información, contribuyendo al desarrollo de modelos más precisos y confiables.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo se presentan los elementos clave del ciclo de vida del aprendizaje automático, incluyendo la limpieza y transformación de datos, técnicas de modelado, automatización de procesos y buenas prácticas para una gestión eficiente y trazable de los datos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
