(function(e){function a(a){for(var o,n,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),i()}function i(){for(var e,a=0;a<t.length;a++){for(var i=t[a],o=!0,n=1;n<i.length;n++){var c=i[n];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=i[0]))}return e}var o={},n={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"5f1df911","chunk-0206bfa0":"fbcb801b","chunk-0c047e41":"c93e636b","chunk-13a6037e":"47d7da63","chunk-18f95272":"8cc31be1","chunk-25b302c8":"e4a9087b","chunk-26fc7596":"eba76383","chunk-2c06842c":"ee78365c","chunk-2d0c5615":"d7c7fea3","chunk-2d0e96ec":"6332f6f8","chunk-2d208d90":"440b5e7e","chunk-2d21d0e2":"d061f3e9","chunk-2d22c123":"4eaafe36","chunk-2d2747e2":"92eb3dc5","chunk-2e80bb9a":"f5f91733","chunk-319206de":"3faa5257","chunk-32334cb6":"e4cb5e8f","chunk-36769079":"00cac6ab","chunk-3c57cd7b":"25993372","chunk-4cdd78c0":"be97f210","chunk-4f2d402a":"8e19b5a7","chunk-515a8379":"1a9ac9f5","chunk-53ccb27e":"a4d1166c","chunk-55d286b8":"5f60a1a0","chunk-59974754":"c8c954a2","chunk-60cbc06b":"e2d94f73","chunk-659152b8":"d4cd6718","chunk-6e1e538a":"d5b7f1d6","chunk-766a929b":"3e7bd3ca","chunk-c796899c":"702a4d0c","chunk-e8a7823a":"78e05249","chunk-f2df7d2c":"213e5ca0","chunk-fde47172":"1e5f4771",comple:"0fd47305",creditos:"903a22f5",glosario:"1e648c63",intro:"dcb50e2d",referencias:"5f4ece02",sintesis:"43a6f901",tema1:"1cf12f90",tema2:"dfa6fad2",tema3:"eaeaedea"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var i=o[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(e){var a=[],i={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};n[e]?a.push(n[e]):0!==n[e]&&i[e]&&a.push(n[e]=new Promise((function(a,i){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"a673e320","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"1db83980","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"9b5e8bd2","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"8c5166ef",creditos:"2b57d7df",glosario:"31f6e591",intro:"31d6cfe0",referencias:"e13efee6",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete n[e],m.parentNode.removeChild(m),i(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,i){o=r[e]=[a,i]}));a.push(o[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var i=r[e];if(0!==i){if(i){var o=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",u.name="ChunkLoadError",u.type=o,u.request=n,i[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,i){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(i,o,function(a){return e[a]}.bind(null,o));return i},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;t.push([0,"chunk-vendors"]),i()})({0:function(e,a,i){e.exports=i("56d7")},"2cad":function(e,a,i){e.exports=i.p+"img/banner-principal-decorativo-1.f72297dd.png"},"417a":function(e,a,i){e.exports=i.p+"img/fondo-banner-principal.94f4ccfc.svg"},"52e5":function(e,a,i){e.exports=i.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,i){"use strict";i.r(a);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("68f3"),n=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",{staticClass:"app",attrs:{id:"app"}},[i("Header"),i("div",{staticClass:"contenedor-principal"},[i("AsideMenu"),i("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[i("router-view")],1)],1),i("BarraAvance"),i("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,s=i("2877"),d=Object(s["a"])(c,n,r,!1,null,null,null),l=d.exports,u=(i("d3b7"),i("3ca3"),i("ddb0"),i("b0c0"),i("2b0e")),m=i("8c4f"),p=i("ae58"),f=i("7e58");u["a"].use(m["a"]);var g=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return i.e("intro").then(i.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return i.e("tema1").then(i.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return i.e("tema2").then(i.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return i.e("tema3").then(i.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return i.e("actividad").then(i.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return i.e("glosario").then(i.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return i.e("comple").then(i.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return i.e("referencias").then(i.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return i.e("sintesis").then(i.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return i.e("creditos").then(i.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var i={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?i:new Promise((function(e){setTimeout((function(){e(i)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=g,h=i("1c2c"),v=(i("a3a0"),{global:{componenteFormativo:"Atención al usuario y reglamentos institucionales",descripcionCurso:"El Sistema de Seguridad Social actúa mediante una acción resolutiva a nivel de instituciones y usuarios y así se garantiza el derecho a la salud. Para esto se ayuda del reglamento institucional y el portafolio de servicios que, junto con los principios y normas establecidas para la atención al usuario, direccionan procesos de calidad en la prestación del servicio.",imagenBannerPrincipal:i("74b5"),fondoBannerPrincipal:i("417a"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:i("2cad")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Cumplimiento de reglamento interno de la institución",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Portafolio de servicios",hash:"t_1_1"},{numero:"1.2",titulo:"Aseguramiento",hash:"t_1_2"}]},{nombreRuta:"tema2",numero:"2",titulo:"Atención al usuario",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Comunicación del portafolio de servicios en la atención de salud",hash:"t_2_1"},{numero:"2.2",titulo:"Comunicación con el usuario",hash:"t_2_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar PDF",download:"downloads/CFA_02_331316.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"1. Cumplimiento de reglamento interno de la institución",referencia:"Ministerio de Salud y Protección Social. (2021). Resolución 2292 de 2021.",tipo:"Documento legal",link:"https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%202292%20de%202021.pdf"},{tema:"1. Cumplimiento de reglamento interno de la institución",referencia:"Ministerio de Salud y Protección Social. (2016). Decreto 682 de 2016.",tipo:"Documento legal",link:"https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%20682%20de%202018.pdf"},{tema:"1. Cumplimiento de reglamento interno de la institución",referencia:"Congreso de Colombia. (2015). Ley estatutaria 1751 del 16 febrero de 2015.",tipo:"Documento legal",link:"https://www.minsalud.gov.co/Normatividad_Nuevo/Ley%201751%20de%202015.pdf"},{tema:"1. Cumplimiento de reglamento interno de la institución",referencia:"Ministerio de Salud y Protección Social. (s. f.). Registro Especial de Prestadores de Servicios de Salud (REPS). Ministerio de Salud y Protección Social",tipo:"Plataforma oficial",link:"https://prestadores.minsalud.gov.co/habilitacion/"},{tema:"1. Cumplimiento de reglamento interno de la institución",referencia:"Ministerio de Salud y Protección Social. (2014). Lista de chequeo del Programa de Auditoría para el Mejoramiento continuo de la Calidad (Pamec). Ministerio de Salud y Protección Social",tipo:"Documento técnico",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PSA/LISTA%20DE%20CHEQUEO%20PARA%20IMPLEMENTAR%20Y%20EVALUAR%20EL%20PAMEC.pdf"},{tema:"1. Cumplimiento de reglamento interno de la institución",referencia:"Ministerio de Salud y Protección Social, Icontec. (2022). Lista de instituciones prestadoras acreditada",tipo:"Lista Legal",link:"https://acreditacionensalud.org.co/wp-content/uploads/2022/06/IPS-ACREDITADAS-JUNIO-2022.pdf"},{tema:"1. Cumplimiento de reglamento interno de la institución",referencia:"Ministerio de Salud y Protección Social. (s. f.). Manual del usuario REPS. Actualización portafolio y declaración autoevaluación de servicios de salud de acuerdo con la Resolución 3100 de 2019.",tipo:"Documento técnico",link:"https://prestadores.minsalud.gov.co/habilitacion/ayudas/Manual_HABILITACION_actualizacion_portafolio_y_autoevaluacion_servicios.pdf?pageTitle=Manual%20Usuario%20REPS,%20usuario:%20Actualizaci%F3n%20Portafolio%20y%20Declaraci%F3n%20Autoevaluaci%F3n%20de%20Servicios&pageHlp="},{tema:"1.1 Portafolio de servicios",referencia:"Ministerio de Salud y Protección Social. (s.f.). Guía metodológica programas territoriales de reorganización, rediseño y modernización de las redes de ESE. Ministerio de Salud y Protección Social.",tipo:"Documento técnico",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PSA/metodologia-ptrrm-version-300621.pdf"},{tema:"1.1 Portafolio de servicios",referencia:"Ministerio de Salud y Protección Social. (2016). Decreto 780 de 2016.",tipo:"Documento legal",link:"https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf"},{tema:"1.1 Portafolio de servicios",referencia:"Ministerio de Salud y Protección Social. (2019). Resolución 3100 de 2019.",tipo:"Documento legal",link:"https://scare.org.co/wp-content/uploads/resolucion-3100-de-2019-versi%C3%B3n-copias-y-pegar.pdf"},{tema:"1.2 Aseguramiento",referencia:"Congreso de la República. (1993). Ley 100 de 1993.",tipo:"Documento legal",link:"http://www.secretariasenado.gov.co/senado/basedoc/ley_0100_1993_pr003.html#153"},{tema:"1.2 Aseguramiento",referencia:"Ministerio de Salud y Protección Social. Riesgos laborales / salud y ámbito laboral. S.f.",tipo:"Página web",link:"https://www.minsalud.gov.co/proteccionsocial/RiesgosLaborales/Paginas/afiliacion-sistema-general-riesgos-laborales.aspx"},{tema:"2.1 Comunicación del portafolio de servicios en la atención de salud",referencia:"Alcaldía Mayor de Bogotá, Secretaría de Salud. Portafolio de trámites y servicios Secretaría Distrital de Salud.14 de agosto de 2023.",tipo:"Documento ténico",link:"http://www.saludcapital.gov.co/Documents/Portafolio_tramites_y_servicios.pdf"}],glosario:[{termino:"Accesibilidad",significado:"En salud, los servicios y tecnologías de salud accesibles a todos, en condiciones de igualdad, dentro del respeto a las especificidades de los diversos grupos vulnerables y al pluralismo cultural. La accesibilidad comprende la no discriminación, la accesibilidad física, la asequibilidad económica y el acceso a la información (Artículo 6, literal c) Ley 1755 de 2015)."},{termino:"Aseguramiento",significado:"En salud, la administración del riesgo financiero, la gestión del riesgo en salud, la articulación de los servicios que garanticen el acceso efectivo, la garantía de la calidad en la prestación de los servicios de salud y la representación del afiliado ante el prestador y los demás actores sin perjuicio de la autonomía del usuario (Artículo 14, Ley 1122 de 2007)."},{termino:"Calidad",significado:"La calidad de la atención de salud se entiende como la provisión de servicios accesibles, equitativos, con un nivel profesional óptimo que tiene en cuenta los recursos disponibles y logra la adhesión y satisfacción del usuario (Política Nacional de Prestación de Servicios de Salud)."},{termino:"Derecho fundamental a la salud",significado:"Es autónomo e irrenunciable en lo individual y en lo colectivo. Comprende el acceso a los servicios de salud de manera oportuna, eficaz y con calidad para la preservación, el mejoramiento y la promoción de la salud (artículo 2, Ley 755 de 2015)."},{termino:"Entidad Promotora de Salud - EPS",significado:"Tendrán a cargo la afiliación de los usuarios y la administración de la prestación de los servicios de las instituciones prestadoras. Ellas están en la obligación de suministrar, dentro de los límites establecidos en el numeral 5 del artículo 180, a cualquier persona que desee afiliarse y pague la cotización o tenga el subsidio correspondiente, el Plan Obligatorio de Salud, en los términos que reglamente el gobierno (Ley 100 de 1993, artículo 156, literal e)."},{termino:"Institución Prestadora de Servicios de Salud - IPS",significado:"Entidades oficiales, mixtas, privadas, comunitarias y solidarias, organizadas para la prestación de los servicios de salud a los afiliados del Sistema General de Seguridad Social en Salud (Ley 100 de 1993, artículo 156, literal i)."},{termino:"Participación ciudadana",significado:"Ejercicio de los deberes y derechos del individuo, para propender por la conservación de la salud personal, familiar y comunitaria y aportar a la planeación, gestión, evaluación y veeduría en los servicios de salud (Decreto 1757 de 1994, Artículo 2, numeral 1, inciso a)."},{termino:"Plataforma estratégica",significado:"Proceso de planificación estratégica que se supedita al diseño debidamente pensado de un direccionamiento estratégico, recogiendo los siguientes elementos: misión, visión y valores corporativos (Plataforma hospital, s. f.)."},{termino:"Prestadores de servicios de salud",significado:"Se consideran como tales, las instituciones prestadoras de servicios de salud, los profesionales independientes de salud y los servicios de transporte especial de pacientes (Decreto 1011 de 2006, Artículo 2°)."},{termino:"Profesional independiente",significado:"Toda persona natural egresada de un programa de educación superior de ciencias de la salud de conformidad con la Ley 30 de 1992 o las normas que la modifiquen, adicionen o sustituyan, con facultades para actuar de manera autónoma en la prestación del servicio de salud para lo cual podrá contar con personal de apoyo de los niveles de formación técnico y/o auxiliar y no les será exigido el Programa de Auditoría para el Mejoramiento de la Calidad de la Atención de Salud (PAMEC) (Resolución 1441 de 2013)."},{termino:"Seguridad Social",significado:"Servicio público de carácter obligatorio que se prestará bajo la dirección, coordinación y control del estado, en sujeción a los principios de eficiencia, universalidad y solidaridad, en los términos que establezca la ley (Constitución Política de 1991, artículo 48)."},{termino:"Sistema Integrado de Información de la Protección Social (SISPRO)",significado:"Información oportuna, suficiente y estandarizada para la toma de decisiones del Sector Salud y Protección Social, centrada en el ciudadano. Lo conforma las bases de datos y sistemas de información del Sector sobre oferta y demanda de servicios de salud, calidad de los servicios, aseguramiento, financiamiento, promoción social (Ministerio de Salud y Protección Social 2022, Sistema de Gestión de Seguridad y Salud en el Trabajo)."},{termino:"Sistema de Identificación de Potenciales Beneficiarios de Programas Sociales (Sisbén)",significado:"Sistema que usa herramientas técnicas y estadísticas especializadas, y permite clasificar a la población de acuerdo con sus condiciones de vida e ingresos. Esta clasificación se utiliza para focalizar la inversión social y garantizar que sea asignada a quienes más lo necesitan (Departamento Nacional de Planeación 2022, Sisbén)."},{termino:"Sistema de Gestión  de Seguridad y Salud en el Trabajo (SGSST)",significado:"Desarrollo de un proceso lógico y por etapas, basado en la mejora continua, con el objetivo de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y salud en el trabajo (Ministerio de Salud y Protección Social 2022, indicadores)."},{termino:"Sistema de Salud",significado:"Conjunto articulado y armónico de principios y normas; políticas; instituciones; competencias y procedimientos; facultades, obligaciones, derechos y deberes; financiamiento; controles; información y evaluación, que el Estado disponga para la garantía y materialización del derecho fundamental de la salud (Ley 1751 de 2015, artículo 4°)."},{termino:"Unidad de Pago por Capitación (UPC)",significado:"Valor anual que se reconoce por cada uno de los afiliados al sistema general de seguridad social en salud (SGSSS) para cubrir las prestaciones del Plan Obligatorio de Salud (POS), en los regímenes contributivo y subsidiado (Acuerdo 19 de 2010)."}],referencias:[{referencia:"Congreso de Colombia. (1993). Ley 100. Artículos: 156, literales e), i), 157, literales A y B.",link:"http://www.secretariasenado.gov.co/senado/basedoc/ley_0100_1993_pr003.html#153"},{referencia:"Congreso de Colombia. (2007). Ley 1122 del 09 de enero de 2007, artículo 14.",link:"http://www.secretariasenado.gov.co/senado/basedoc/ley_1122_2007.html"},{referencia:"Constitución Política de Colombia. (1991). Artículos: 1°, 45, 46, 48, 49.",link:"http://www.secretariasenado.gov.co/constitucion-politica"},{referencia:"Departamento Nacional de Planeación. (2022). Sisbén.",link:"https://www.sisben.gov.co/Paginas/landing.aspx"},{referencia:"Ministerio de la Protección Social. (2006). Decreto 1011 del 3 de abril de 2006, artículo 2°.",link:"https://www.minsalud.gov.co/Normatividad_Nuevo/DECRETO%201011%20DE%202006.pdf"},{referencia:"Ministerio de Salud y Protección Social. (2007). Guías básicas para auditoría en el mejoramiento de la calidad.",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/CA/guias-basicas-auditoria-mejoramiento-calidad.pdf"},{referencia:"Ministerio de Salud y Protección Social. (2013). Resolución 1441 del 6 de mayo de 2013.",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1441-de-2013.pdf"},{referencia:"Ministerio de Salud y Protección Social. (2019). Resolución 3100 del 25 de noviembre de 2019.",link:"https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203100%20de%202019.pdf"},{referencia:"Ministerio de Salud y Protección Social. (2022). Sistema de gestión de seguridad y salud en el trabajo.",link:"https://www.mintrabajo.gov.co/relaciones-laborales/riesgos-laborales/sistema-de-gestion-de-seguridad-y-salud-en-el-trabajo"},{referencia:"Ministerio de Salud y Protección Social. (2022). Indicadores.",link:"https://www.sispro.gov.co/Pages/Home.aspx"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Norma Constanza Morales Cruz",cargo:"Responsable de Línea de Producción",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Jackeline Molina Villanueva",cargo:"Experta Temática",centro:"Regional Antioquia - Centro de Servicios de Salud"},{nombre:"María Inés Machado López",cargo:"Diseñadora Instruccional",centro:"Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios"},{nombre:"Andrés Felipe Velandia Espitia  ",cargo:"Asesora Metodológico",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable Equipo Desarrollo Curricular",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"José Gabriel Ortiz Abella ",cargo:"Corrector de Estilo",centro:"Regional Distrito Capital- Centro de Diseño y Metrología"},{nombre:"Maria Inés Machado López",cargo:"Metodóloga",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"José Jaime Luis Tang Pinzón",cargo:"Diseñador de Contenidos Digitales",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Francisco José Vásquez Suárez",cargo:"Desarrollador Fullstack",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Storyboard de Ilustración",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Maria Alejandra Vera Briceño",cargo:"Producción Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Nelson Iván Vera Briceño",cargo:"Producción Audiovisual",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Oleg Litvin",cargo:"Animador",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Francisco José Vásquez Suárez",cargo:"Actividad Didáctica",centro:"Regional Tolima - Centro de Comercio y Servicios"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Gilberto Naranjo Farfán",cargo:"Validación de Contenidos Accesibles",centro:"Regional Tolima - Centro de Comercio y Servicios"},{nombre:"Jorge Bustos Gómez",cargo:"Validación y Vinculación en Plataforma LMS",centro:"Regional Tolima - Centro de Comercio y Servicios"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var S=i("9224");o["a"].prototype.$package=S,new o["a"]({router:b,store:h["a"],render:function(e){return e(l)}}).$mount("#app")},"74b5":function(e,a,i){e.exports=i.p+"img/banner-princiapal.655f3048.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,i){e.exports=i.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,i){}});
//# sourceMappingURL=app.874358ea.js.map