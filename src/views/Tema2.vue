<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Atención al usuario

    .row.mb-4(data-aos="fade-right")
      .col-5
        img(src='@/assets/curso/temas/tema2/img-1.png')
      .col-7
        p El usuario es el eje central del Sistema Obligatorio de Garantía de Calidad, por ello, se ha creado un mecanismo claro, pensado y metódico que evalúe la satisfacción del usuario en relación con los procesos de atención en salud. 
        p Este mecanismo no solo debe corresponder al tipo retrospectivo, como los sistemas de quejas y reclamos, las encuestas y entrevistas de satisfacción que tienen como objetivo principal conocer la percepción del usuario, posterior a recibir el servicio, sino también a la implementación de aquellos que permitan conocer las necesidades y expectativas que tienen los usuarios de los servicios a recibir. 
        p Por ello, se tienen dos tipos de mecanismos: unos que buscan implementar acciones de seguimiento y otros que responden a las acciones preventivas. Juntos ofrecen, globalmente, resultados acerca del grado de percepción de satisfacción del usuario frente a la prestación del servicio. 

    p.mb-5 Los aspectos relativos al acceso, la oportunidad y el pago de prestaciones económicas hacen parte, entre otros, de los procesos de satisfacción de los usuarios en las instituciones prestadoras de salud (Ministerio de la Protección Social, 2007).

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-4.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema2/img-2.svg', alt='Texto que describa la imagen')
        .col-lg-8
          p Este servicio de atención al usuario, también hace parte de los servicios que prestan las Empresas Promotoras de Salud (EPS) y las Instituciones Prestadoras de Servicios de Salud (IPS), ya sean públicas, privadas o mixtas; el cual es ofrecido a los afiliados y a los vinculados al Sistema General de Seguridad Social en Salud, mediante una oficina que dispone de una ventanilla de atención al usuario general, una ventanilla preferencial (cuando no se disponga de esta se debe contar con una fila o prestación preferencial para el adulto mayor, mujeres embarazadas, personas con discapacidad y personas con niños menores).

    p Además, se contemplan otros dictámenes como lo indicado en la <strong>Ley 1171 del 2007,</strong> que obliga a las EPS a que, si el usuario es una persona mayor de 62 años y no ha recibido en los puntos destinados para esto, la medicación correspondiente, y debe garantizarse su entrega en un plazo no mayor de 72 horas en el lugar establecido como residencia por el afiliado, salvo si esta es de extrema urgencia a la solicitud por parte de este.
    p.mb-5 La atención al usuario puede establecerse de diferentes maneras, de acuerdo con el canal que se haya escogido; entre los tipos de atención se encuentran:

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img-3-1.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-botones1.p-3(x="19%" y="11%" numero="+")
        p Es la más tradicional e importante para los consumidores, establece una relación más directa entre el cliente y la empresa. Imprescindible cuando involucra asuntos de documentación o devolución de artículos. Generalizada en oficinas, almacenes, etc.

      .tarjeta.color-acento-botones1.p-3(x="8.3%" y="54.5%" numero="+")
        p También conocida como atención dinámica; es un tipo de servicio al cliente que una compañía brinda al ponerse en contacto con los consumidores sin que ellos esperen. Este servicio al cliente es usado para presentar productos o servicios nuevos, o recomendar beneficios y ofertas.

      .tarjeta.color-acento-botones1.p-3(x="42%" y="64%" numero="+")
        p Refiere a cuando el cliente se pone en contacto con la empresa por cualquier motivo. La empresa, debe estar lista para dar una respuesta oportuna, y, de ser posible, tener herramientas de automatización para dar respuestas simples y acelerar los procesos de atención al cliente.

      .tarjeta.color-acento-botones1.p-3(x="59.9%" y="44.5%" numero="+")
        p Es un recurso tecnológico dispuesto para la atención al cliente. La atención virtual, ofrece diferentes canales: correo electrónico, chat en vivo, redes sociales, que generan gusto y confianza en la comunicación entre el usuario y la institución.

      .tarjeta.color-acento-botones1.p-3(x="83.8%" y="30.5%" numero="+")
        p Hace parte de la estrategia de servicio al cliente. Exige una serie de reglas o normas de etiqueta para asegurar la satisfacción del cliente. Es simple de implementar, cuidando el tono de voz, la fluidez al hablar, claridad para brindar información, disponibilidad y respuestas ágiles.
    
    p.mb-5 En los procesos de atención al usuario debe tenerse cuidado con la protección que se hace de este usuario, es así como la Superintendencia Nacional de Salud ha dispuesto instrucciones precisas para los prestadores de servicios de salud, mediante la <strong>Circular Externa 049 de 2008</strong>, en donde se establecen acciones puntuales, tal como se explican a continuación.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <strong>1. Protección al usuario.</strong> La Superintendencia Nacional de Salud, también dispuso instrucciones para los prestadores de servicios de salud, relacionada con la atención al usuario, es así como mediante la Circular Externa 049 de 2008 estableció que:

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/decorador-1.png', alt='Texto que describa la imagen')
          
        h2.text-center Trato digno a los usuarios
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Es la valoración al individuo, el respeto, la cordialidad, la orientación, y la comunicación permanente y el trato humanizado en general.
          li 
            i.lista-ul__vineta
            | Servir a la comunidad y garantizar los principios y derechos fundamentales. Capacitar sobre trato digno. 

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-secundario1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/decorador-2.png', alt='Texto que describa la imagen')
          
        h2.text-center Oficina de Atención al Usuario
        ul.lista-ul.mb-3
          li 
            i.lista-ul__vineta
            | Medidas especiales para la atención de personas con alguna discapacidad.
          li 
            i.lista-ul__vineta
            | Oficina de Atención al Usuario: medios idóneos y tecnológicos para la atención al usuario con prontitud, agilidad, eficiencia. Disponer respuestas oportunas ante las PQRF.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <strong>2. Trámite de peticiones.</strong> El derecho fundamental de petición, se encuentra reglamentado mediante la Ley 1755 de 2015 y el Decreto 1166 de 2016. Corresponde a uno de los principales mecanismos de relacionamiento entre el usuario y el prestador de servicio de salud, en cualquier tipo de solicitud.
          br
          br
          | Se tienden a clasificar las peticiones por tipo documental, entre los que están: documento de identidad, certificación, autorización, sentencias y fallos de tutelas, recurso, invitación, acto administrativo, proyectos, derechos de petición, entre otros. 

    p.mb-5 A manera de información, se puede consultar una breve descripción respecto a las peticiones y tiempos resolutivos de acuerdo a lo establecido en el <strong>Manual para gestión de peticiones ciudadanas,</strong> de la Secretaría General de la Alcaldía Mayor de Bogotá, Subsecretaría de Servicios a la Ciudadanía (2019), encontrando:

    ImagenInfograficaB.color-acento-botones.mb-5.desktop
      template(v-slot:imagen)
        figure.mb-5
          img(src='@/assets/curso/temas/tema2/img-6.svg', alt='Texto que describa la imagen')

      div(x="33%" y="29%" numero="1")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Derecho de petición de interés general
            p Solicitud que una persona o una comunidad presenta ante las autoridades para que se preste un servicio o se cumpla una función propia de la entidad, con el fin de resolver necesidades de tipo comunitario.
            p Debe resolverse dentro de los 15 días siguientes a su recepción.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-7.png', alt='Texto que describa la imagen')

      div(x="50%" y="23%" numero="2")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Derecho de petición de interés particular
            p Solicitud que una persona hace ante una autoridad para , con el fin de que se resuelva determinado interrogante, inquietud o situación jurídica que sólo solo le interesa a él o a su entorno.
            p Debe resolverse dentro de los 15 días siguientes a su recepción, y  registrarse en el sistema.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-8.png', alt='Texto que describa la imagen')

      div(x="66%" y="29%" numero="3")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Queja
            p Manifestación de protesta, censura, descontento o inconformidad que formula una persona en relación con una conducta que considera irregular de uno o varios servidores públicos en desarrollo de sus funciones
            p Debe resolverse dentro de los 15 días siguientes a su recepción, y registrarse en el sistema.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-9.png', alt='Texto que describa la imagen')

      div(x="74.5%" y="40%" numero="4")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Reclamo
            p Manifestación de inconformidad, referente a la prestación indebida de un servicio o a la falta de atención de una solicitud.
            p Debe resolverse dentro de los 15 días siguientes a su recepción y registrarse en el sistema.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-10.png', alt='Texto que describa la imagen')

      div(x="74%" y="60%" numero="5")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Sugerencia
            p Manifestación de una idea, opinión, aporte o propuesta para mejorar el servicio o la gestión de la entidad.
            p Debe resolverse dentro de los 15 días siguientes a su recepción, y  registrarse en el sistema.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-11.png', alt='Texto que describa la imagen')
      
      div(x="65%" y="71%" numero="6")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Denuncia por posibles actos de corrupción
            p Manifestación que puede realizar cualquier ciudadano para enterar a las autoridades sobre hechos contrarios a la ley, incluidos los relacionados con contratación pública, y así activar mecanismos de investigación y sanción. Dar a conocer conductas constitutivas en faltas disciplinares por incumplimiento de deberes, extralimitación de funciones, prohibiciones y violación del régimen de inhabilidades, incompatibilidades, impedimentos y conflicto de intereses de un servidor público.
            p Debe resolverse dentro de los 15 días siguientes a su recepción, y  registrarse en el sistema.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-12.png', alt='Texto que describa la imagen')
      
      div(x="50%" y="76%" numero="7")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Felicitación
            p Manifestación de un ciudadano en la que expresa la satisfacción con motivo de algún suceso favorable para él,  en relación con la prestación del servicio por parte de una entidad pública.
            p Debe resolverse dentro de los 15 días siguientes a su recepción, y  registrarse en el sistema.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-13.png', alt='Texto que describa la imagen')
      
      div(x="34%" y="71%" numero="8")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Solicitud de acceso a la información
            p Facultad que tiene la ciudadanía de solicitar y obtener acceso a la información sobre las actualizaciones derivadas del cumplimiento de las funciones atribuidas, solicitud de registros, informes, datos o documentos producidos o en posesión control o custodia de una entidad.
            p Debe resolverse dentro de los 10 días siguientes a su recepción, y  registrarse en el sistema.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-14.png', alt='Texto que describa la imagen')

      div(x="25.5%" y="60%" numero="9")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Solicitud de copias
            p Reproducción y entrega de documentos que no sean de reserva al interior de una entidad como expedientes misionales, jurisdiccionales o administrativos. SI la información esta archivada electrónicamente, y el solicitante lo acepte se entregará por este medio, CD, DVD u otro formato. Si el volumen de copias es significativo podrán expedirse a costas del solicitante según valor institucional.
            p Debe resolverse dentro de los 10 días siguientes a su recepción y registrarse en el sistema.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-15.png', alt='Texto que describa la imagen')

      div(x="25%" y="40.5%" numero="10")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Consulta
            p Solicitud de orientación a las autoridades en relación con las materias a su cargo, cuya respuesta no tiene efectos jurídicos directos sobre el asunto que trata, por lo tanto, no es de obligatorio cumplimiento.
            p Debe resolverse dentro de los 30 días siguientes a su recepción y registrarse en el sistema

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-16.png', alt='Texto que describa la imagen')

    ImagenInfograficaB.color-acento-botones.mb-5.movil
      template(v-slot:imagen)
        figure.mb-4
          img(src='@/assets/curso/temas/tema2/img-6.svg', alt='Texto que describa la imagen')

      div(x="33%" y="29%" numero="1")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Derecho de petición de interés general
            p Solicitud que una persona o una comunidad presenta ante las autoridades para que se preste un servicio o se cumpla una función propia de la entidad, con el fin de resolver necesidades de tipo comunitario.
            p Debe resolverse dentro de los 15 días siguientes a su recepción.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-7.png', alt='Texto que describa la imagen')

      div(x="50%" y="23%" numero="2")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Derecho de petición de interés particular
            p Solicitud que una persona hace ante una autoridad para , con el fin de que se resuelva determinado interrogante, inquietud o situación jurídica que sólo solo le interesa a él o a su entorno.
            p Debe resolverse dentro de los 15 días siguientes a su recepción, y  registrarse en el sistema.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-8.png', alt='Texto que describa la imagen')

      div(x="66%" y="29%" numero="3")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Queja
            p Manifestación de protesta, censura, descontento o inconformidad que formula una persona en relación con una conducta que considera irregular de uno o varios servidores públicos en desarrollo de sus funciones
            p Debe resolverse dentro de los 15 días siguientes a su recepción, y registrarse en el sistema.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-9.png', alt='Texto que describa la imagen')

      div(x="74.5%" y="40%" numero="4")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Reclamo
            p Manifestación de inconformidad, referente a la prestación indebida de un servicio o a la falta de atención de una solicitud.
            p Debe resolverse dentro de los 15 días siguientes a su recepción y registrarse en el sistema.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-10.png', alt='Texto que describa la imagen')

      div(x="74%" y="60%" numero="5")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Sugerencia
            p Manifestación de una idea, opinión, aporte o propuesta para mejorar el servicio o la gestión de la entidad.
            p Debe resolverse dentro de los 15 días siguientes a su recepción, y  registrarse en el sistema.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-11.png', alt='Texto que describa la imagen')
      
      div(x="65%" y="71%" numero="6")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Denuncia por posibles actos de corrupción
            p Manifestación que puede realizar cualquier ciudadano para enterar a las autoridades sobre hechos contrarios a la ley, incluidos los relacionados con contratación pública, y así activar mecanismos de investigación y sanción. Dar a conocer conductas constitutivas en faltas disciplinares por incumplimiento de deberes, extralimitación de funciones, prohibiciones y violación del régimen de inhabilidades, incompatibilidades, impedimentos y conflicto de intereses de un servidor público.
            p Debe resolverse dentro de los 15 días siguientes a su recepción, y  registrarse en el sistema.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-12.png', alt='Texto que describa la imagen')
      
      div(x="50%" y="76%" numero="7")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Felicitación
            p Manifestación de un ciudadano en la que expresa la satisfacción con motivo de algún suceso favorable para él,  en relación con la prestación del servicio por parte de una entidad pública.
            p Debe resolverse dentro de los 15 días siguientes a su recepción, y  registrarse en el sistema.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-13.png', alt='Texto que describa la imagen')
      
      div(x="34%" y="71%" numero="8")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Solicitud de acceso a la información
            p Facultad que tiene la ciudadanía de solicitar y obtener acceso a la información sobre las actualizaciones derivadas del cumplimiento de las funciones atribuidas, solicitud de registros, informes, datos o documentos producidos o en posesión control o custodia de una entidad.
            p Debe resolverse dentro de los 10 días siguientes a su recepción, y  registrarse en el sistema.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-14.png', alt='Texto que describa la imagen')

      div(x="25.5%" y="60%" numero="9")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Solicitud de copias
            p Reproducción y entrega de documentos que no sean de reserva al interior de una entidad como expedientes misionales, jurisdiccionales o administrativos. SI la información esta archivada electrónicamente, y el solicitante lo acepte se entregará por este medio, CD, DVD u otro formato. Si el volumen de copias es significativo podrán expedirse a costas del solicitante según valor institucional.
            p Debe resolverse dentro de los 10 días siguientes a su recepción y registrarse en el sistema.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-15.png', alt='Texto que describa la imagen')

      div(x="25%" y="40.5%" numero="10")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Consulta
            p Solicitud de orientación a las autoridades en relación con las materias a su cargo, cuya respuesta no tiene efectos jurídicos directos sobre el asunto que trata, por lo tanto, no es de obligatorio cumplimiento.
            p Debe resolverse dentro de los 30 días siguientes a su recepción y registrarse en el sistema

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-16.png', alt='Texto que describa la imagen')
    
    .row
      a.anexo.mb-4.movil(:href="obtenerLink('/downloads/Infografia-tramitePeticiones.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-pdf.svg")
        .anexo__texto
          p <strong>Descargar.</strong> Tramite de peticiones.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <strong>3. Atención telefónica.</strong> Para decidir de fondo las inquietudes y solicitudes de sus usuarios, todas las entidades administradoras y prestadores de planes de beneficios, deberán tener, al menos, un número telefónico local, uno gratuito regional y uno nacional, así como las entidades promotoras de salud, las empresas que ofrezcan planes adicionales en salud y los servicios de ambulancia prepagada, deberán tener números locales en los departamentos donde tengan afiliados y un número gratuito nacional, los cuales deben ser publicitados en medios apropiados para el conocimiento de la comunidad en su jurisdicción (Circular Externa 049 de 2008).

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <strong>4. Participación ciudadana en salud.</strong> La participación institucional es la interacción de los usuarios con los servidores de la salud para la gestión, evaluación y mejoramiento en la prestación de los servicios en salud. 
          br
          br
          | Para dar cumplimiento a lo establecido, las entidades administradoras y prestadoras del servicio deben estimular la conformación de asociaciones, ligas o alianzas de usuarios en salud (Circular Externa 049 de 2008).

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <strong>5. Defensor del usuario en salud.</strong> Esta figura se creó para fortalecer el Sistema General de Seguridad Social en Salud, y depende de la Superintendencia Nacional de Salud en coordinación con la Defensoría del Pueblo. Busca llevar la vocería, representación y/o defensa de los intereses de los usuarios del sistema de salud (Ley 1122 de 2007, artículo 42).
          br
          br
          | La misión del defensor del usuario en salud no corresponde al seguimiento ni a la gestión de las quejas referentes a la inadecuada prestación de los servicios de salud, sino que comprende los eventos en que dichas quejas entrañen negación de estos o por no atención de las solicitudes y peticiones de los usuarios. 

    Separador 

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1. Comunicación del portafolio de servicios en la atención de salud

    p La comunicación del portafolio en salud es un proceso estratégico que permite optimizar las acciones encaminadas a lograr un uso racional y práctico de los diferentes servicios que se ofertan en una organización, además, mejora eficiente y efectivamente el conocimiento y la participación en los programas dirigidos a la prevención de la enfermedad y la promoción de la salud.
    p.mb-5 La comunicación del portafolio de servicios puede llevarse a cabo mediante:

    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/decorador-3.png', alt='Texto que describa la imagen')

          h3.text-center Comunicación interna
          p.text-small Garantiza que todas las personas vinculadas con el prestador del servicio de salud, conozcan el Sogcs, riesgos de exposición, objetivos del sistema y den cumplimiento y mejora continua de este. Recibe sugerencias e información para revisión de procedimientos y programas.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/decorador-4.png', alt='Texto que describa la imagen')

          h3.text-center Comunicación externa
          p.text-small Información sobre servicios de salud prestados, suministrada a personas externas, corresponde con: campañas de salud, cursos de capacitación, consultas, trámites y procesos internos, comunicaciones de emergencia. Lo asume personal de servicio y debe tener un sitio específico para hacerlo.

    p.mb-5 Lo anterior se encuentra en concordancia con los procesos básicos de vigilancia en salud pública, dispuestos mediante el Decreto 3518 de 2006, que especifica el manejo y cuidado en cuanto a la recolección y organización sistemática de dato, el análisis e interpretación, la difusión de la información y su utilización en la orientación de intervenciones en salud pública. Por ello, las autoridades sanitarias deben velar por el mejoramiento continuo de la oportunidad y calidad de los procesos de información y la profundidad del análisis tanto de las problemáticas como de las alternativas de solución.

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#FCE7E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-3.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/img-7.svg', alt='Texto que describa la imagen')
        .col-lg-7
          p En el material complementario encontrará lo correspondiente al <strong>Portafolio de trámites y servicios. Secretaría Distrital de Salud,</strong> el cual le orienta respecto al portafolio de servicios en salud e informa de aquellos que se prestan a la ciudadanía. 
          p Esta herramienta permite fortalecer la atención y el servicio a la población.

    Separador 

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2. Comunicación con el usuario

    p.mb-5 La comunicación es inherente al ser humano y su naturaleza social, de esta forma posibilita relacionarse e interactuar con otros y así se crean efectos en la recepción de información que es elaborada por el organismo a nivel sensorial, perceptivo, memorístico y del lenguaje, de esta forma se lleva a cabo la interpretación del mensaje que se está recibiendo y el que se desea comunicar. 

    .row.mb-5
      .col-md-4.mb-0
        figure
            img(src='@/assets/curso/temas/tema2/img-20.svg', alt='')
      .col-md-8 
        p Por otra parte, se encuentra un escenario relacionado con la salud y el bienestar que, en muchas ocasiones, presenta una serie de características emocionales, que afectan esta comunicación; así, se pueden encontrar pacientes y familiares preocupados por la incertidumbre que contiene un diagnóstico catastrófico, o que se vislumbre con una sombría respuesta en un futuro inmediato. 
        p Este panorama puede tornarse aún más difícil cuando hay ausencia de habilidades comunicativas en el personal asistencial, que supone una de las grandes luchas y demandas que permanentemente reportan los pacientes.

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        p De manera cotidiana se acompaña el mensaje con gestos y palabras que adquieren un significado dentro de un determinado contexto, con lo que se puede realizar una efectiva comunicación, y en donde participan todos los actores involucrados, bien sea el profesional de la salud, el personal asistencial, el paciente o sus familiares y acudientes. Por esta razón, es de suma importancia que todos compartan y comprendan el lenguaje utilizado para garantizar prácticas seguras.

    p.mb-5 El objetivo de la comunicación al usuario consiste en asegurar un tránsito de información abierto entre los miembros del equipo médico, el paciente y los cuidadores, lo cual es de suma importancia, principalmente en un momento en donde emocionalmente puede presentarse alguna inestabilidad e incertidumbre frente al proceso o ante el diagnóstico.

    .row.mb-5
      .col-md-2.mb-4
        figure
            img(src='@/assets/curso/temas/tema2/img-21.svg', alt='')
      .col-md-10 
        p Entonces la pregunta que surge es ¿cómo llevar a cabo la comunicación en el escenario sanitario? Principalmente se debe tener presente que la interacción y el mensaje deben ser claros, pues las definiciones e instrucciones simples disminuyen la posibilidad de errores. Una instrucción simple permite disminuir las equivocaciones que pueden ser provocadas por el uso de tecnicismos profesionales, palabras inapropiadas, o simplemente falta de escucha asertiva y adecuada. Asimismo, debe considerarse que los diferentes niveles educativos de los interactuantes también pueden ser un obstáculo para la correcta comprensión del mensaje. 

    p.mb-5 Las pobres prácticas de comunicación y la continuidad de esta que existe en los hospitales son la mayor fuente de eventos adversos. Por esta razón, es imperativo garantizar prácticas seguras y estrategias aptas para mejorar la comunicación. Un listado de estas prácticas “sanas” se encuentran a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Listado de prácticas sanas y estrategias seguras</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/img-22-1.svg', alt='La figura 2, indica que el trato con el paciente requiere una serie de estrategias que permiten mejorar la comunicación y la empatía, todo esto propositivo para la relación médico-paciente.')

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Listado de prácticas sanas y estrategias seguras</em>
        figure
          img(src='@/assets/curso/temas/tema2/img-22-2.svg', alt='La figura 2, indica que el trato con el paciente requiere una serie de estrategias que permiten mejorar la comunicación y la empatía, todo esto propositivo para la relación médico-paciente.') 

    p Actualmente se cuentan con algunas herramientas efectivas para llevar a cabo un proceso comunicante más eficaz. Por lo general las empresas, entidades e instituciones, en el desarrollo de sus actividades hacen uso de estos instrumentos, los cuales se ofrecen a través de sus páginas web.
    p.mb-5 El Ministerio de Salud y Protección Social, en su página web ofrece algunas herramientas de comunicación, que buscan informar a los usuarios del Sistema General de Seguridad Social (SGSSS), sobre afiliaciones a los regímenes contributivo y subsidiado, medicamentos, tratamientos, etc. A continuación, se podrán consultar las características generales de algunos de estos instrumentos.

    .tarjeta.tarjeta--gris.p-4.mb-5
      //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- text-small se usa para que los títulos sean mas pequeños
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="POS Pópuli")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h3 POS Pópuli
            p Es una herramienta ágil, sencilla y dinámica. Permite a los afiliados del SGSSS consultar, los servicios de salud, las tecnologías para tratamientos, y medicamentos financiados o no con recursos de la unidad de pago por capitación, de forma ágil, sencilla y dinámica.
            p Suministra información de farmacovigilancia, que corresponde a las actividades de detección, evaluación, entendimiento y prevención de eventos adversos o cualquier otro problema relacionado con medicamentos.

          .row.justify-content-center.align-items-center
            .col-10.col-md-10.col-lg-8 
              figure
                img(src='@/assets/curso/temas/tema2/img-23.png', alt='Texto que describa la imagen')

        .row(titulo="Portal SISPRO")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h3 Portal SISPRO
            p Mediante esta herramienta, se puede consultar información oficial relacionada con los prestadores de salud que se encuentran habilitados en el REPS. Los servicios y la capacidad instalada de las IPS, por departamento o distrito, y naturaleza jurídica para los siguientes cuatro años, y la gestión de la red pública.

          .row.justify-content-center.align-items-center
            .col-10.col-md-10.col-lg-8 
              figure
                img(src='@/assets/curso/temas/tema2/img-24.png', alt='Texto que describa la imagen')

        .row(titulo="Plataforma PISIS")
          .col-md-6.mb-4.mb-md-0.col-ipad
            h3 Plataforma PISIS
            p Esta herramienta es usada para el intercambio de información del Sistema Integral de Información de la Protección Social (SISPRO); esta recibe los archivos y realiza un proceso de validación. 

          .row.justify-content-center.align-items-center
            .col-10.col-md-10.col-lg-8 
              figure
                img(src='@/assets/curso/temas/tema2/img-25.png', alt='Texto que describa la imagen')


       







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
