<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4
      .col-md-2.mb-3
        figure
            img(src='@/assets/curso/temas/introduccion/intro-1.svg', alt='')
      .col-md-9
        p Bienvenidos a este componente formativo relacionado con la atención al usuario y los reglamentos institucionales. La atención al usuario aporta y favorece los procesos de toma de decisiones en relación con los servicios de salud, además de facilitar los medios más adecuados para la prevención y promoción de los derechos de las personas, y de esta forma dar cumplimiento no solo a la reglamentación interna, sino asegurar la calidad en la prestación de los servicios en la perspectiva de desarrollo institucional.

    p.mb-5 Por ello, se invita a ver el siguiente video en donde se encontrará información general del componente formativo relacionado con la atención al usuario y los reglamentos institucionales que lo regulan.






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
