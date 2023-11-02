export default {
  global: {
    componenteFormativo: 'Atención al usuario y reglamentos institucionales',
    descripcionCurso:
      'El Sistema de Seguridad Social actúa mediante una acción resolutiva a nivel de instituciones y usuarios y así se garantiza el derecho a la salud. Para esto se ayuda del reglamento institucional y el portafolio de servicios que, junto con los principios y normas establecidas para la atención al usuario, direccionan procesos de calidad en la prestación del servicio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cumplimiento de reglamento interno de la institución',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Portafolio de servicios',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Aseguramiento',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Atención al usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Comunicación del portafolio de servicios en la atención de salud',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Comunicación con el usuario',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Cumplimiento de reglamento interno de la institución',
      referencia:
        'Ministerio de Salud y Protección Social. (2021). Resolución 2292 de 2021.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%202292%20de%202021.pdf',
    },
    {
      tema: '1. Cumplimiento de reglamento interno de la institución',
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Decreto 682 de 2016.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%20682%20de%202018.pdf',
    },
    {
      tema: '1. Cumplimiento de reglamento interno de la institución',
      referencia:
        'Congreso de Colombia. (2015). Ley estatutaria 1751 del 16 febrero de 2015.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Ley%201751%20de%202015.pdf',
    },
    {
      tema: '1. Cumplimiento de reglamento interno de la institución',
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Registro Especial de Prestadores de Servicios de Salud (REPS). Ministerio de Salud y Protección Social',
      tipo: 'Plataforma oficial',
      link: 'https://prestadores.minsalud.gov.co/habilitacion/',
    },
    {
      tema: '1. Cumplimiento de reglamento interno de la institución',
      referencia:
        'Ministerio de Salud y Protección Social. (2014). Lista de chequeo del Programa de Auditoría para el Mejoramiento continuo de la Calidad (Pamec). Ministerio de Salud y Protección Social',
      tipo: 'Documento técnico',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PSA/LISTA%20DE%20CHEQUEO%20PARA%20IMPLEMENTAR%20Y%20EVALUAR%20EL%20PAMEC.pdf',
    },
    {
      tema: '1. Cumplimiento de reglamento interno de la institución',
      referencia:
        'Ministerio de Salud y Protección Social, Icontec. (2022). Lista de instituciones prestadoras acreditada',
      tipo: 'Lista Legal',
      link:
        'https://acreditacionensalud.org.co/wp-content/uploads/2022/06/IPS-ACREDITADAS-JUNIO-2022.pdf',
    },
    {
      tema: '1. Cumplimiento de reglamento interno de la institución',
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Manual del usuario REPS. Actualización portafolio y declaración autoevaluación de servicios de salud de acuerdo con la Resolución 3100 de 2019.',
      tipo: 'Documento técnico',
      link:
        'https://prestadores.minsalud.gov.co/habilitacion/ayudas/Manual_HABILITACION_actualizacion_portafolio_y_autoevaluacion_servicios.pdf?pageTitle=Manual%20Usuario%20REPS,%20usuario:%20Actualizaci%F3n%20Portafolio%20y%20Declaraci%F3n%20Autoevaluaci%F3n%20de%20Servicios&pageHlp=',
    },
    {
      tema: '1.1 Portafolio de servicios',
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Guía metodológica programas territoriales de reorganización, rediseño y modernización de las redes de ESE. Ministerio de Salud y Protección Social.',
      tipo: 'Documento técnico',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PSA/metodologia-ptrrm-version-300621.pdf',
    },
    {
      tema: '1.1 Portafolio de servicios',
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Guía metodológica programas territoriales de reorganización, rediseño y modernización de las redes de ESE. Ministerio de Salud y Protección Social.',
      tipo: 'Documento técnico',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PSA/metodologia-ptrrm-version-300621.pdf',
    },
    {
      tema: '1.1 Portafolio de servicios',
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Decreto 780 de 2016.',
      tipo: 'Documento legal',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%200780%20de%202016.pdf',
    },
    {
      tema: '1.1 Portafolio de servicios',
      referencia:
        'Ministerio de Salud y Protección Social. (2019). Resolución 3100 de 2019.',
      tipo: 'Documento legal',
      link:
        'https://scare.org.co/wp-content/uploads/resolucion-3100-de-2019-versi%C3%B3n-copias-y-pegar.pdf',
    },
    {
      tema: '1.2 Aseguramiento',
      referencia: 'Congreso de la República. (1993). Ley 100 de 1993.',
      tipo: 'Documento legal',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0100_1993_pr003.html#153',
    },
    {
      tema: '1.2 Aseguramiento',
      referencia:
        'Ministerio de Salud y Protección Social. Riesgos laborales / salud y ámbito laboral. S.f.',
      tipo: 'Página web',
      link:
        'https://www.minsalud.gov.co/proteccionsocial/RiesgosLaborales/Paginas/afiliacion-sistema-general-riesgos-laborales.aspx',
    },
    {
      tema:
        '2.1 Comunicación del portafolio de servicios en la atención de salud',
      referencia:
        'Alcaldía Mayor de Bogotá, Secretaría de Salud. Portafolio de trámites y servicios Secretaría Distrital de Salud.14 de agosto de 2023.',
      tipo: 'Documento ténico',
      link:
        'http://www.saludcapital.gov.co/Documents/Portafolio_tramites_y_servicios.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'En salud, los servicios y tecnologías de salud accesibles a todos, en condiciones de igualdad, dentro del respeto a las especificidades de los diversos grupos vulnerables y al pluralismo cultural. La accesibilidad comprende la no discriminación, la accesibilidad física, la asequibilidad económica y el acceso a la información (Artículo 6, literal c) Ley 1755 de 2015).',
    },
    {
      termino: 'Aseguramiento',
      significado:
        'En salud, la administración del riesgo financiero, la gestión del riesgo en salud, la articulación de los servicios que garanticen el acceso efectivo, la garantía de la calidad en la prestación de los servicios de salud y la representación del afiliado ante el prestador y los demás actores sin perjuicio de la autonomía del usuario (Artículo 14, Ley 1122 de 2007).',
    },
    {
      termino: 'Calidad',
      significado:
        'La calidad de la atención de salud se entiende como la provisión de servicios accesibles, equitativos, con un nivel profesional óptimo que tiene en cuenta los recursos disponibles y logra la adhesión y satisfacción del usuario (Política Nacional de Prestación de Servicios de Salud).',
    },
    {
      termino: 'Derecho fundamental a la salud',
      significado:
        'Es autónomo e irrenunciable en lo individual y en lo colectivo. Comprende el acceso a los servicios de salud de manera oportuna, eficaz y con calidad para la preservación, el mejoramiento y la promoción de la salud (artículo 2, Ley 755 de 2015).',
    },
    {
      termino: 'Entidad Promotora de Salud - EPS',
      significado:
        'Tendrán a cargo la afiliación de los usuarios y la administración de la prestación de los servicios de las instituciones prestadoras. Ellas están en la obligación de suministrar, dentro de los límites establecidos en el numeral 5 del artículo 180, a cualquier persona que desee afiliarse y pague la cotización o tenga el subsidio correspondiente, el Plan Obligatorio de Salud, en los términos que reglamente el gobierno (Ley 100 de 1993, artículo 156, literal e).',
    },
    {
      termino: 'Institución Prestadora de Servicios de Salud - IPS',
      significado:
        'Entidades oficiales, mixtas, privadas, comunitarias y solidarias, organizadas para la prestación de los servicios de salud a los afiliados del Sistema General de Seguridad Social en Salud (Ley 100 de 1993, artículo 156, literal i).',
    },
    {
      termino: 'Participación ciudadana',
      significado:
        'Ejercicio de los deberes y derechos del individuo, para propender por la conservación de la salud personal, familiar y comunitaria y aportar a la planeación, gestión, evaluación y veeduría en los servicios de salud (Decreto 1757 de 1994, Artículo 2, numeral 1, inciso a).',
    },
    {
      termino: 'Plataforma estratégica',
      significado:
        'Proceso de planificación estratégica que se supedita al diseño debidamente pensado de un direccionamiento estratégico, recogiendo los siguientes elementos: misión, visión y valores corporativos (Plataforma hospital, s. f.).',
    },
    {
      termino: 'Prestadores de servicios de salud',
      significado:
        'Se consideran como tales, las instituciones prestadoras de servicios de salud, los profesionales independientes de salud y los servicios de transporte especial de pacientes (Decreto 1011 de 2006, Artículo 2°).',
    },
    {
      termino: 'Profesional independiente',
      significado:
        'Toda persona natural egresada de un programa de educación superior de ciencias de la salud de conformidad con la Ley 30 de 1992 o las normas que la modifiquen, adicionen o sustituyan, con facultades para actuar de manera autónoma en la prestación del servicio de salud para lo cual podrá contar con personal de apoyo de los niveles de formación técnico y/o auxiliar y no les será exigido el Programa de Auditoría para el Mejoramiento de la Calidad de la Atención de Salud (PAMEC) (Resolución 1441 de 2013).',
    },
    {
      termino: 'Seguridad Social',
      significado:
        'Servicio público de carácter obligatorio que se prestará bajo la dirección, coordinación y control del estado, en sujeción a los principios de eficiencia, universalidad y solidaridad, en los términos que establezca la ley (Constitución Política de 1991, artículo 48).',
    },
    {
      termino:
        'Sistema Integrado de Información de la Protección Social (SISPRO)',
      significado:
        'Información oportuna, suficiente y estandarizada para la toma de decisiones del Sector Salud y Protección Social, centrada en el ciudadano. Lo conforma las bases de datos y sistemas de información del Sector sobre oferta y demanda de servicios de salud, calidad de los servicios, aseguramiento, financiamiento, promoción social (Ministerio de Salud y Protección Social 2022, Sistema de Gestión de Seguridad y Salud en el Trabajo).',
    },
    {
      termino:
        'Sistema de Identificación de Potenciales Beneficiarios de Programas Sociales (Sisbén)',
      significado:
        'Sistema que usa herramientas técnicas y estadísticas especializadas, y permite clasificar a la población de acuerdo con sus condiciones de vida e ingresos. Esta clasificación se utiliza para focalizar la inversión social y garantizar que sea asignada a quienes más lo necesitan (Departamento Nacional de Planeación 2022, Sisbén).',
    },
    {
      termino: 'Sistema de Gestión  de Seguridad y Salud en el Trabajo (SGSST)',
      significado:
        'Desarrollo de un proceso lógico y por etapas, basado en la mejora continua, con el objetivo de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y salud en el trabajo (Ministerio de Salud y Protección Social 2022, indicadores).',
    },
    {
      termino: 'Sistema de Salud',
      significado:
        'Conjunto articulado y armónico de principios y normas; políticas; instituciones; competencias y procedimientos; facultades, obligaciones, derechos y deberes; financiamiento; controles; información y evaluación, que el Estado disponga para la garantía y materialización del derecho fundamental de la salud (Ley 1751 de 2015, artículo 4°).',
    },
    {
      termino: 'Unidad de Pago por Capitación (UPC)',
      significado:
        'Valor anual que se reconoce por cada uno de los afiliados al sistema general de seguridad social en salud (SGSSS) para cubrir las prestaciones del Plan Obligatorio de Salud (POS), en los regímenes contributivo y subsidiado (Acuerdo 19 de 2010).',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1993). Ley 100. Artículos: 156, literales e), i), 157, literales A y B.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0100_1993_pr003.html#153',
    },
    {
      referencia:
        'Congreso de Colombia. (2007). Ley 1122 del 09 de enero de 2007, artículo 14.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1122_2007.html',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). Artículos: 1°, 45, 46, 48, 49.',
      link: 'http://www.secretariasenado.gov.co/constitucion-politica',
    },
    {
      referencia: 'Departamento Nacional de Planeación. (2022). Sisbén.',
      link: 'https://www.sisben.gov.co/Paginas/landing.aspx',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2006). Decreto 1011 del 3 de abril de 2006, artículo 2°.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/DECRETO%201011%20DE%202006.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2007). Guías básicas para auditoría en el mejoramiento de la calidad.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/CA/guias-basicas-auditoria-mejoramiento-calidad.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Resolución 1441 del 6 de mayo de 2013.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1441-de-2013.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2019). Resolución 3100 del 25 de noviembre de 2019.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203100%20de%202019.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Sistema de gestión de seguridad y salud en el trabajo.',
      link:
        'https://www.mintrabajo.gov.co/relaciones-laborales/riesgos-laborales/sistema-de-gestion-de-seguridad-y-salud-en-el-trabajo',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2022). Indicadores.',
      link: 'https://www.sispro.gov.co/Pages/Home.aspx',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Adriana Cárdenas González',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
