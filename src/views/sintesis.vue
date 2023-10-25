<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Comprender y tener claridad en los conceptos y en los objetivos de los diferentes sistemas tratados en este componente formativo, contribuye a orientar a los usuarios del sistema y población en general, sobre los trámites para acceder de forma ágil a los servicios de salud, de acuerdo con las necesidades sanitarias de la población. 
    p.mb-5 Previendo que, al desempeñarse en un escenario laboral en relación con este tema, es imprescindible una adecuada atención al usuario teniendo en cuenta las reglamentaciones internas de la organización y los servicios ofrecidos por la misma. Es así, como el siguiente gráfico orienta sobre los conceptos revisados en el desarrollo de este tema. 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
