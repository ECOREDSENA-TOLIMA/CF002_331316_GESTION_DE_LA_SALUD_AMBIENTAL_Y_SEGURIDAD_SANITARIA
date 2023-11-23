<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cumplimiento de reglamento interno de la institución

    .row.mb-4(data-aos="fade-right")
      .col-5
        img(src='@/assets/curso/temas/tema1/img-1.png')
      .col-7
        p El reglamento interno institucional tiene como propósito resolver aspectos organizacionales al interior del servicio que ofrece el prestador de salud. En tal sentido, este, lo primero que tiene que hacer es organizar a los miembros que le constituyen como empresa, asignando de forma clara las responsabilidades que le competen a cada uno. 
        p Es decir, qué herramientas, como el reglamento interno de las instituciones, junto con el portafolio de servicios deben ser los apoyos administrativos en la gestión propia del servicio de prestación de salud con miras a facilitar el proceso para los usuarios y personas involucradas. 
        p El sector salud en el marco de la reglamentación del servicio de salud, ha creado normas, instituciones, mecanismos, procesos y requisitos, mediante los cuales se han desarrollado instrumentos que apoyan a la gestión administrativa, y uno de ellos es el reglamento interno institucional, que es un instrumento de gestión que regula la organización y el funcionamiento integral de las entidades o instituciones sean estas públicas, privadas o mixtas. Este documento, por lo general, se conforma de las tareas y las responsabilidades de todos los integrantes y comunica los derechos de cada uno de ellos. Además, mediante las respectivas páginas web las empresas o entidades publican sus reglamentos internos que pueden ser consultados por el público en general. 
    
    .row.mb-5
      .col-md-2.mb-0
        figure
            img(src='@/assets/curso/temas/tema1/img-2.png', alt='')
      .col-md-10
        p El reglamento interno institucional, contiene como mínimo para cada uno de los órganos de gobierno organizacional: los objetivos, las funciones, los procedimientos para su conformación, el régimen de inhabilidades e incompatibilidades de sus miembros, ámbito de decisión; la evaluación del desempeño organizacional y la rendición de cuentas, conforme a la normativa vigente. 
        .tarjeta.tarjeta.p-4(style="background-color:#E6EBFB")
          .row
            .col-lg-12
              p Dichos aspectos que comprenden el reglamento interno institucional, se encuentran reglamentados mediante el Decreto 682 de 2016.

    p.mb-5 A continuación, y a manera de ejemplo, se muestran algunos reglamentos internos de instituciones prestadoras de servicios de salud, mediante los cuales regularon responsabilidades que solo se aplican al interior de estas.

    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Hospital del Sur")
        h4 Hospital del Sur Empresa Social del Estado
        p Acuerdo 4 del 27 de septiembre de 2000. Subred Integrada de Servicios de Salud Sur Occidente E.S.E. - Hospital del Sur I Nivel Empresa Social del Estado ESE.
        p La Junta Directiva aprueba el presente acuerdo, con el fin de facilitar el funcionamiento y la gestión directiva.
        p Lo puede consultar en el siguiente enlace:
        a.boton.color-acento-botones(href="https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=30265&dt=S" target="_blank" type="application/pdf")
          span Enlace web
          i.fas.fa-file-code

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Hospital San Blas II Nivel")
        h4 Hospital San Blas II Nivel Empresa Social del Estado
        p Resolución 00187 de 2006. Subred Integrada de Servicios de Salud Centro Oriente E.S.E - Hospital San Blas II Nivel Empresa Social del Estado ESE.
        p Funciones del Comité de Conciliación, con el fin de proteger los intereses de la empresa y el patrimonio público. 
        p Lo puede consultar en el siguiente enlace: 
        a.boton.color-acento-botones(href="https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=33086&dt=S" target="_blank" type="application/pdf")
          span Enlace web
          i.fas.fa-file-code

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Hospital Pablo Tobón Uribe")
        h4 Hospital Pablo Tobón Uribe
        p Código de buen gobierno hospital Pablo Tobón Uribe. 
        p El objetivo de este código es el de compilar los principios y valores éticos de transparencia, con el fin de lograr una gestión integral, eficiente y transparente.
        p Lo puede consultar en el siguiente enlace: 
        a.boton.color-acento-botones(href="https://www.hptu.org.co/phocadownloadpap/Codigo%20de%20Buen%20Gobierno.pdf" target="_blank" type="application/pdf")
          span Enlace web
          i.fas.fa-file-code 
     
    p.mb-5 Es importante recalcar que en el marco del Sistema Obligatorio de Garantía de Calidad de Atención en Salud (SOGCS), los cuatro componentes que le conforman, también incluyen instrumentos de gestión que apoyan la organización del servicio prestado incluida, la reglamentación institucional; esos cuatro componentes se describen a continuación:

    .row.justify-content-center.align-items-center.mb-3
      .col-8(data-aos="fade-down-right")
        ImagenInfografica.color-acento-botones.mb-5.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-3-1.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="50%" y="10%" numero="+")
            p Base de datos de las entidades departamentales y distritales de salud, los prestadores de servicios de salud y las empresas de planes de beneficio, realizan el registro de prestadores de servicios de salud habilitados. El MinSalud la consolida.

          .tarjeta.color-acento-botones.p-3(x="24%" y="45%" numero="+")
            p Cumple con acciones de inspección, vigilancia y control del contenido, calidad y reporte de la información, estará a cargo de las direcciones departamentales y distritales y de la Superintendencia Nacional de Salud en lo de sus competencias.

          .tarjeta.color-acento-botones.p-3(x="50%" y="78%" numero="+")
            p Es un proceso voluntario, queda a decisión de las instituciones prestadoras de servicios de salud, las EAPB y las direcciones de salud departamentales, distritales y municipales, acogerse a este proceso. Reglamenta su operación el MinSalud e Icontec realiza la acreditación. 
            
          .tarjeta.color-acento-botones.p-3(x="76%" y="43%" numero="+")
            p Aquí se encuentra la Lista de chequeo, que es utilizada por los prestadores de los servicios de salud para efectuar de manera continua la evaluación, con el fin de mejorar la calidad de los servicios que prestan.

    .row.mt-5
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-3-2.svg', alt='Figura 6 Densidad de siembra de árboles En la figura se observa la distancia de 3 metros entre zurcos de arbustos, igualmente la distancia de 25 - 30 metros entre arboles grandes, en la parte izquierda las imágenes de los árboles casuarina cordia, cedrela, cenizaro, aguacate, cítricos, mango, gliricidia, erytrina, inga; formas de copa estrella o tipo sombrilla.') 


    p.mb-5 Así mismo, la Superintendencia Nacional de Salud de conformidad con la <strong>Ley 1122 de 2007,</strong> otorga facultades para llevar a cabo acciones de inspección, vigilancia y control a los prestadores de servicio de salud, competencia que es apoyada por las secretarías departamentales y distritales de salud. Dicho control se lleva a cabo mediante instrumentos de seguimiento y evaluación, y estas auditorías preservan la actualización de la reglamentación organizacional de la institución concerniente. 

    .row.mb-5
      .col-md-2.mb-0
        figure
            img(src='@/assets/curso/temas/tema1/img-4.png', alt='')
      .col-md-10
        p Por otra parte, existen otros instrumentos que posibilitan una acción de mejora a cargo del prestador del servicio de salud que pueden ser utilizados de manera continua, mediante una lista de chequeo generada por el SOGCS, y el Programa de Auditoría para el Mejoramiento Continuo de Calidad (PAMEC), recogidos mediante un formato de verificación puntos específicos de auditoría que repercuten en la actualización y vigencia de la reglamentación interna de la institución. 

    p.mb-5 Teniendo en cuenta lo anterior, a continuación, se observa la lista de chequeo mencionada del PAMEC.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-12(data-aos="fade-right", alt="La tabla 1, muestra la lista de chequeo del Programa de Auditoría para el Mejoramiento Continuo de la Calidad (PAMEC), establecida como ruta crítica en el cumplimiento o no cumplimiento de dicha lista.")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 1.] <em>Lista de chequeo del Programa de Auditoría para el Mejoramiento Continuo de la Calidad (PAMEC)</em>
        .tabla-b.color-acento-contenido
          table(style="border: 2px solid #E1E1E1")
            thead(style="border-top: 4px solid #F9BCAB")
              tr(style="background-color: #F1ECE6")
                th.text-center(colspan="3") Ruta crítica del PAMEC
                th.text-center(colspan="3") Apectos chequeables
                th.text-center No cumple
                th.text-center Cumple
                th.text-center Observaciones
            tbody
              tr
                td(colspan="3")(style="background-color:#F6F6F6") Alcance del mejoramiento continuo de la calidad.
                td(colspan="3")(style="background-color:#FFFF") 
                td(style="background-color:#F6F6F6") 
                td(style="background-color:#F6F6F6") 
              tr
                td(colspan="3")(style="background-color:#F6F6F6") El alcance del mejoramiento continuo de la calidad de la entidad, debe ser explícito y se debe orientar en uno o varios de los siguientes temas: <br><br> 1. Sistema Único de Acreditación. <br><br> 2. Mejoramiento del resultado de los indicadores del Sistema de Información para la Calidad. <br><br> 3. Fortalecimiento de la gestión del riesgo para los procesos misionales. <br><br> 4. Fortalecimiento del Programa de Seguridad del Paciente documentado en la entidad e implementación de las buenas prácticas de seguridad del paciente recomendadas en la Guía Técnica correspondiente. En todo caso, el PAMEC, debe ser superior al cumplimiento de estándares de Habilitación.
                td(colspan="3")(style="background-color:#FFFF") Escrito incorporado en el documento PAMEC donde se evidencie el alcance y propósito del mejoramiento de la calidad emprendido por la entidad.
                td(style="background-color:#F6F6F6")  
                td(style="background-color:#F6F6F6") 
                td(style="background-color:#FFFF")              
              tr
                td(colspan="3")(style="background-color:#F6F6F6") Autoevaluación. 
                td(colspan="3")(style="background-color:#FFFF")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#FFFF")
              tr
                td(colspan="3")(style="background-color:#F6F6F6") Selección de procesos a mejorar.
                td(colspan="3")(style="background-color:#FFFF")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#FFFF")
              tr
                td(colspan="3")(style="background-color:#F6F6F6") Priorización de procesos.
                td(colspan="3")(style="background-color:#FFFF")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#FFFF")
              tr
                td(colspan="3")(style="background-color:#F6F6F6") Definición de la calidad esperada.
                td(colspan="3")(style="background-color:#FFFF")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#FFFF")
              tr
                td(colspan="3")(style="background-color:#F6F6F6") Calidad observada.
                td(colspan="3")(style="background-color:#FFFF")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#FFFF")
              tr
                td(colspan="3")(style="background-color:#F6F6F6") Formulación de planes de mejoramiento para alcanzar la calidad esperada.
                td(colspan="3")(style="background-color:#FFFF")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#FFFF")
              tr
                td(colspan="3")(style="background-color:#F6F6F6") Implementación de planes de mejoramiento para alcanzar la calidad esperada.
                td(colspan="3")(style="background-color:#FFFF")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#FFFF")
              tr
                td(colspan="3")(style="background-color:#F6F6F6") Evaluación de la ejecución de los planes de mejoramiento para alcanzar la calidad esperada.
                td(colspan="3")(style="background-color:#FFFF")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#FFFF")
              tr
                td(colspan="3")(style="background-color:#F6F6F6") Aprendizaje organizacional.
                td(colspan="3")(style="background-color:#FFFF")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#F6F6F6")
                td(style="background-color:#FFFF")

    p En conclusión, los componentes del SOGCS se interrelacionan de manera continua, tanto el cumplimiento de los estándares de habilitación como la implementación del programa de auditoría para el mejoramiento de la calidad de la atención en salud. Estos son un prerrequisito para acogerse al proceso de acreditación en salud ante el Icontec, como organismo nacional de acreditación, y el cumplimiento de estos requisitos debe ser certificado por la dirección territorial de salud correspondiente. Todos estos subsistemas de información tienen instrumentos de gestión que trabajan de manera articulada para prestar un servicio de calidad al usuario, posibilitando la actualización documental de las organizaciones y, por ende, direccionando la vigencia de la reglamentación interna que tienen a cargo.

    Separador 

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1. Portafolio de servicios 

    .row.mb-4(data-aos="fade-right")
      .col-4
        img(src='@/assets/curso/temas/tema1/img-5.png')
      .col-8
        p Un portafolio de servicios es un documento preparado por una empresa, organización o individuo, dirigido a proveedores y/o usuarios que contiene información detallada respecto a los servicios que ofrece, además de limitar en tiempo, modo y lugar aquellos servicios que por su naturaleza, disponibilidad o capacidad no puede brindar.
        p Se espera encontrar en el portafolio de servicios, los datos básicos del oferente como nombre, años de trayectoria, socios, objetivos y valores misionales, además de una breve reseña de proveedores, clientes e información de contacto, entre otros puntos. Todo esto, ya que recordemos que estos portafolios sirven como tarjeta de presentación para dar a conocer la empresa u organización y pueden ser de tipo físico o digital.
        p A nivel de instituciones prestadoras de salud y de profesionales del ramo, se encuentran diferentes portafolios de servicios físicos, como son los trípticos o dípticos, que se pueden doblar en dos o tres partes; en estos documentos la información se presenta de forma breve y concisa, aunque es importante incluir el reconocimiento que se tiene en el gremio, lo hace aún más relevante para los profesionales independientes que se quieren dar a conocer, mostrando “insignias” de calidad en la prestación del servicio.

    .row.justify-content-center.align-items-center.mb-4
      .col-10(data-aos="fade-down-right")
        .cajon.color-primario.p-4.mb-4
          p También, se encuentra el portafolio de servicios que hace parte del aplicativo del Registro Especial de Prestadores de Servicios de Salud (REPS), a través del mencionado aplicativo los prestadores de servicio de salud se registran y de esta forma habilitan los servicios de salud, además de actualizar el referido portafolio de servicios. 

    .row
      .col-md-9
        p Esta actualización es un requisito previo para que el prestador realice la autoevaluación. Mediante el registro al REPS, se ingresa y permanece en el Sistema Único de Habilitación (SUH), que también es uno de los componentes del Sistema Obligatorio de Garantía de Calidad de Atención en Salud (SOGCS). Entre la información que se consigna en el portafolio de servicios, se encuentra, entre otras, el horario del servicio, modalidad del servicio, complejidad del servicio, capacidad instalada asociada al servicio, etc.
        p Dicho cumplimiento que realizan las empresas prestadoras de servicios de salud, está en concordancia con lo establecido en el <strong>artículo 26 de la Resolución 3100 de 2019.</strong>

      .col-md-3
        figure
          img(src='@/assets/curso/temas/tema1/img-6.svg', alt='Imagen decorativa')
    
    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#FCE7E1")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-lg-3.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema1/img-7.svg', alt='Texto que describa la imagen')
            .col-lg-7
              p Lo invitamos a revisar en el material complementario el <strong>Manual de habilitación y actualización del portafolio y autoevaluación de servicios.</strong>
              p Este documento informa sobre lineamientos al usuario, y del Acuerdo a la Resolución 3100 de 2019 del Ministerio de Salud y Protección Social

    p Por otra parte, existe el portafolio de servicios que es elaborado por los prestadores de servicios de salud y que lo publican en sus respectivas páginas web, en él se describen los servicios que ofrece al usuario. Por lo general lo conforman: la presentación, los objetivos, la misión y la visión, certificaciones, sociedades, clientes, proveedores, servicios (vigentes y en desarrollo), proyectos e información de contacto. 
    p.mb-5 A continuación, se presentan a manera de ejemplo tres portafolios de servicios de salud:
    
    .tarjeta.tarjeta.p-5.mb-5.mt-5.col-lg-10.mx-auto(style="background-color:#E6EBFB")(data-aos="flip-up")
      .row
        .contenedor.fagc.p-mx_5
          .row.justify-content-center.align-items-center
            .col-lg-3
              .row
                .col-auto.mb-3
                  a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                    span Baja complejidad
                    i.fas.fa-search
                    .indicador--click(v-if="mostrarIndicador")
              
              ModalA(:abrir-modal.sync="modal2")
                .row.align-items-center
                  .tarjeta.fagc.p-4.p-md-5.mb-5(style="background-color: #FCE7E1")
                    .row.justify-content-around.align-items-center
                      .col-8.col-sm-6.col-md-6.mb-4.mb-md-0
                        img(src="@/assets/curso/temas/tema1/img-9.svg")
                      .col-md.col-lg-6
                        .titulo-segundo.color-acento-contenido
                          h3 Baja complejidad
                        p.mb-4 Subred Integrada de Servicios de Salud Centro Oriente E.S.S. <br>El portafolio lo puede consultar en el siguiente enlace:
                        a.boton.color-acento-botones(href="https://www.subredcentrooriente.gov.co/?q=content/portafolio-subred-centro-oriente" target="_blank" type="application/pdf")
                          span Enlace web
                          i.fas.fa-file-code

            .col-lg-3
              .row
                .col-auto.mb-3
                  a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                    span Media complejidad
                    i.fas.fa-search
                    .indicador--click(v-if="mostrarIndicador")
              
              ModalA(:abrir-modal.sync="modal3")
                .row.align-items-center
                  .tarjeta.fagc.p-4.p-md-5.mb-5(style="background-color: #FCE7E1")
                    .row.justify-content-around.align-items-center
                      .col-8.col-sm-6.col-md-6.mb-4.mb-md-0
                        img(src="@/assets/curso/temas/tema1/img-8.svg")
                      .col-md.col-lg-6
                        .titulo-segundo.color-acento-contenido
                          h3 Media complejidad
                        p.mb-4 Hospital Universitario de La Samaritana <br>El portafolio lo puede consultar en el siguiente enlace:
                        a.boton.color-acento-botones(href="https://www.hus.org.co/recursos_user//2022/Mercadeo/PORTAFOLIO%20HUS%202022.pdf" target="_blank" type="application/pdf")
                          span Enlace web
                          i.fas.fa-file-code
            
            .col-lg-3
              .row
                .col-auto.mb-3
                  a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                    span Alta complejidad
                    i.fas.fa-search
                    .indicador--click(v-if="mostrarIndicador")
              
              ModalA(:abrir-modal.sync="modal1")
                .row.align-items-center
                  .tarjeta.fagc.p-4.p-md-5.mb-5(style="background-color: #FCE7E1")
                    .row.justify-content-around.align-items-center
                      .col-8.col-sm-6.col-md-6.mb-4.mb-md-0
                        img(src="@/assets/curso/temas/tema1/img-10.svg")
                      .col-md.col-lg-6
                        .titulo-segundo.color-acento-contenido
                          h3 Alta complejidad
                        p.mb-4 Hospital Pablo Tobón Uribe. Portafolio de Servicios Habilitados. <br>El portafolio lo puede consultar en el siguiente enlace:
                        a.boton.color-acento-botones(href="https://www.hptu.org.co/phocadownloadpap/indicadores/estructura/Servicios%20habilitados2017.pdf" target="_blank" type="application/pdf")
                          span Enlace web
                          i.fas.fa-file-code

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        p Como se ha indicado en los ejemplos, existen varios niveles de complejidad, que, de acuerdo con la <strong>Resolución 3100 de 2019,</strong> en su anexo técnico, numeral 1.4, se indica que la complejidad es una “… cualidad de los servicios de salud que depende de las condiciones de salud que se atiendan o prevén atender, la formación del talento humano en salud y las características de las tecnologías en salud que se requieran”.

        .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            p Los referidos niveles de complejidad son tres: alta, media y baja, estos niveles son aplicables a todas las instituciones de salud públicas, por cuanto las instituciones privadas se encuentran exentas de esta obligatoriedad de acuerdo con lo dispuesto en el Decreto 780 de 2016.

    Separador 

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2. Aseguramiento

    .row.mb-5
      .col-md-2.mb-0
        figure
            img(src='@/assets/curso/temas/tema1/img-11.png', alt='')
      .col-md-10
        p Se entiende por aseguramiento en salud, la administración del riesgo financiero, la gestión del riesgo en salud, la articulación de los servicios que garantice el acceso efectivo, la garantía de la calidad en la prestación de los servicios de salud y la representación del afiliado ante el prestador y las demás personas involucradas. 
        p Este aseguramiento se relaciona con los tipos de regímenes utilizados en la afiliación, entendiendo por afiliación como el acto de ingreso al Sistema General de Seguridad Social en Salud, a través del formulario único o del Sistema Transaccional de Afiliación cuando sea implementado y afiliado, es la calidad que adquiere la persona una vez ha realizado afiliación.

    p.mb-5 En relación con el Sistema General de Seguridad Social en Salud - SGSSS, se hacen algunas precisiones, las cuales se describen en el siguiente esquema:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Conformación del SGSSS</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/img-12-1.svg', alt='La figura 1, establece como se conforma el Sistema General de Seguridad Social en Salud, en donde participan los regímenes: contributivo, subsidiado, vinculado y de excepción especial, cada uno de estos con acciones específicas.')

    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Conformación del SGSSS</em>
        figure
          img(src='@/assets/curso/temas/tema1/img-12-2.svg', alt='La figura 1, establece como se conforma el Sistema General de Seguridad Social en Salud, en donde participan los regímenes: contributivo, subsidiado, vinculado y de excepción especial, cada uno de estos con acciones específicas.  ') 

    p.mb-5 En relación con estos regímenes, se han dispuesto reglamentos y normativas que determinan el concepto y alcance; a continuación, se explican brevemente algunas consideraciones del régimen contributivo.

    PasosA.color-primario.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Régimen contributivo
          p Las personas afiliadas están obligadas a cotizar tanto al régimen de pensiones (sobre el salario o ingresos por prestación de servicios), como a una EPS para garantizar la atención en salud a través de las IPS. 

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-13.png', alt='Texto que describa la imagen')

      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-14.png', alt='Texto que describa la imagen')

        .col-md-6
          h3 Trabajador dependiente
          p El empleado dependiente cotiza con el 12.5 % del salario mensual; el 8.5 % está a cargo del empleador y el 4 % a cargo del empleado. A nivel de pensión es del 16 % del salario mensual: el 12 % está a cargo del empleador y el 4 % a cargo del empleado.

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Pensionados
          p Si la persona es pensionada está obligada a cotizar al SGSSS sobre el 12 % de su mesada pensional, excepto, si está vinculado por contrato de prestación de servicios o reciba ingresos adicionales a su mesada pensional, es ese caso, deberá aportar en salud la totalidad de la cotización (12.5 %).
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-15.png', alt='Texto que describa la imagen')

      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-16.png', alt='Texto que describa la imagen')

        .col-md-6
          h3 Trabajador independiente
          p Paga la totalidad de la cotización; 12.5 % del ingreso base de cotización a salud y al 16 % a pensión. Si la vinculación es por prestación de servicios, cotiza a salud y pensión, sobre el 40 % del valor bruto mensual del contrato, el ingreso no puede ser inferior al SMLMV.

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Aprendices en etapa lectiva y productiva
          p La cotización al Sistema General de Seguridad Social en Salud, será cubierta plenamente por la empresa patrocinadora, sobre la base de un salario mínimo legal mensual vigente.
        
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-17.png', alt='Texto que describa la imagen')

      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema1/img-18.png', alt='Texto que describa la imagen')

        .col-md-6
          h3 Trabajadores mixtos
          p Si una persona tiene varios ingresos: trabajador dependiente y/o independiente; debe aportar en salud a la EPS afiliada y pensión, al Fondo de Pensiones al que pertenezca, sobre la totalidad de los ingresos recibidos, sin que el ingreso base de cotización total supere 25 SMMLV. 

    p Por otra parte, en lo relacionado con las cuotas moderadoras que es el dinero que deben pagar todos los afiliados (cotizantes y beneficiarios) cuando se accede a servicios de salud (atención de médico general, especialistas, o exámenes de diagnóstico e intervención), así como a la entrega de medicamentos, exámenes especializados y tratamientos ambulatorios, esta tiene por objeto regular la utilización del servicio de salud y estimular su buen uso. Su valor varía de acuerdo con el ingreso base de cotización del trabajador dependiente o independiente.
    p Además, están los copagos que son los aportes económicos que realizan solo los beneficiarios, de acuerdo con el ingreso base de cotización del afiliado cotizante, y que corresponden a una parte del valor del servicio prestado y tienen como finalidad ayudar a financiar el sistema. Estos copagos tienen un tope máximo por la atención de una enfermedad en el mismo año calendario y un tope máximo acumulado por atención de distintas enfermedades.
    p.mb-5 En el régimen subsidiado no se pagan cuotas moderadoras por la prestación de los servicios, porque se encuentra cubierto mediante el plan de beneficios en salud. 

    .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#EAF2E1")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        .col-lg-4.mb-3
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema1/img-19.svg', alt='Texto que describa la imagen')
        .col-lg-8
          p En cuanto al régimen vinculado, como ya se indicó, se encuentran las personas que por no tener capacidad de pago y mientras logran ser beneficiarios del régimen subsidiado, tienen derecho a los servicios de atención de salud que prestan las instituciones públicas y las privadas que tengan convenio o contrato con el Estado.
          p Y, por último, se encuentra el régimen de excepción o especial, que ofrece cobertura a aquellas personas que siguen rigiéndose por las normas de seguridad social concebidas con anterioridad a la entrada en vigencia de la <strong>Ley 100 de 1993</strong> o por las que regulan de forma especial para ellos.

    p.mb-5 En lo referente al sistema y servicio en salud, se busca reforzar la atención primaria de salud, avanzando hacia la cobertura sanitaria universal y el acceso universal a la salud, corrientes establecidas por la OMS, que en Colombia se regula mediante los siguientes sistemas:

    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        ImagenInfograficaB.color-acento-botones.mb-4.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-20-1.png', alt='Texto que describa la imagen')

          div(x="56%" y="25%" numero="+")
            .row
              .col-md-6.mb-4.mb-md-0
                h3 Sistema General de Riesgos Laborales
                p Corresponde al conjunto de entidades públicas y privadas, así como las normas y procedimientos tendientes a prevenir, atender y proteger a los trabajadores de los efectos de las enfermedades y los accidentes que puedan ocurrirles con ocasión o como consecuencia del trabajo que desarrollan. 

              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-21.png', alt='Texto que describa la imagen')

          div(x="56%" y="50%" numero="+")
            .row
              .col-md-6.mb-4.mb-md-0
                h3 Servicio de Seguridad y Salud en el Trabajo
                p Se interroga y examina al paciente, para monitorear la exposición a los factores de riesgo laborales, y así determinar las consecuencias en la salud por la exposición al factor de riesgo. Mediante este servicio se hacen valoraciones complementarias apoyadas en evaluaciones médicas, ocupacionales y el diagnóstico. 
              
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-22.png', alt='Texto que describa la imagen')

          div(x="56%" y="75%" numero="+")
            .row
              .col-md-6.mb-4.mb-md-0
                h3 Sistema General de Pensiones
                p El cual fue creado por la Ley 100 de 1993, busca amparar a la población, contra las contingencias derivadas de la vejez, invalidez o muerte, mediante el reconocimiento de una pensión y prestaciones. Este sistema lo conforma el régimen solidario de prima media con prestación definida, y el régimen de ahorro individual con solidaridad. 
              
              .col-md-6
                figure
                  img(src='@/assets/curso/temas/tema1/img-23.png', alt='Texto que describa la imagen')

    .row.mt-5
      .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img-20-2.png', alt='Texto que describa la imagen') 

    .tarjeta.tarjeta.p-4.mb-3(style="background-color:#E6EBFB")(data-aos="flip-up")
      .row.justify-content-center.align-items-center 
        p El servicio de Seguridad y Salud en el Trabajo, obliga al cumplimiento de requisitos, de acuerdo con la Resolución 3100 de 2019 del Ministerio de Trabajo y Protección Social, donde:
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | El servicio es prestado por profesionales especializados en medicina del trabajo o medicina laboral o seguridad y salud en el trabajo.
          li 
            i.fas.fa-angle-right
            | La empresa debe estar dotada con: camilla fija, escalerilla, tensiómetro, fonendoscopio, equipo de órganos de los sentidos, martillo de reflejos, tallímetro, cinta métrica, báscula, termómetro, negatoscopio cuando se requiera o sistema de visualización según la tecnología usada por el prestador.
          li 
            i.fas.fa-angle-right
            | Cumplir con los medicamentos, dispositivos médicos e insumos; procesos prioritarios; historias clínicas y registros.
    
    .row.justify-content-center.align-items-center.mb-3
      .col-10(data-aos="fade-down-right")
        .tarjeta.tarjeta.p-4.mb-5.mt-5(style="background-color:#FCE7E1")(data-aos="flip-up")
          .row.justify-content-center.align-items-center 
            .col-lg-3.mb-3
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema1/img-7.svg', alt='Texto que describa la imagen')
            .col-lg-7
              p Con el fin de ampliar la información sobre riesgos laborales y de seguridad y salud en el trabajo, se hace le invita a consultar el material complementario sobre <strong>Riesgos laborales / salud y ámbito laboral</strong> del Ministerios de Salud y Protección Social.










      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
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
