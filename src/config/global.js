export default {
  global: {
    componenteFormativo:
      'Visualización, partición y automatización en el procesamiento de datos',
    Name:
      'Visualización, partición y automatización en el procesamiento de datos',
    descripcionCurso:
      'Este componente aborda el ciclo de vida del aprendizaje automático, incluyendo la limpieza, transformación y evaluación de datos. Presenta técnicas de modelado, automatización de procesos, visualización de resultados y buenas prácticas para la gestión eficiente de datos en proyectos de inteligencia artificial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        titulo:
          'Preparación de datos en el ciclo de vida del aprendizaje automático',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'El ciclo de vida del aprendizaje automático',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Limpieza y transformación de datos: codificación, normalización y enriquecimiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tratamiento de valores atípicos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de partición y balanceo de datos para el modelado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Métodos de partición: <em>hold-out</em>, <em>k-fold</em> y muestreo estratificado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Evaluación del rendimiento en conjuntos balanceados',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Automatización y visualización de procesos de transformación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '¿Qué es un <em>pipeline</em> de datos y para qué sirve?',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Automatización de flujos con Scikit-learn <em>Pipelines</em> y <em>MLflow</em>',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Buenas prácticas para automatizar la gestión de datos',
            hash: 't_3_3',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_03_21710119_DU.pdf',
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
      tema:
        '3. Automatización y visualización de procesos de transformación de datos',
      referencia:
        'Mahesh, B. (2019). Machine Learning Algorithms - A Review [Technical report]. International Journal of Science and Research (IJSR), 9(1), 381–386.',
      tipo: 'Artículo',
      link:
        'https://www.researchgate.net/profile/Batta-Mahesh/publication/344717762_Machine_Learning_Algorithms_-A_Review/links/5f8b2365299bf1b53e2d243a/Machine-Learning-Algorithms-A-Review.pdf?eid=5082902844932096t',
    },
    {
      tema:
        '3. Automatización y visualización de procesos de transformación de datos',
      referencia:
        'Du, M., Liu, N., & Hu, X. (2020). Techniques for interpretable machine learning. Communications of the ACM, 63(1), 68–77.',
      tipo: 'Artículo',
      link: 'https://dl.acm.org/doi/pdf/10.1145/3359786',
    },
  ],
  glosario: [
    {
      termino: 'Automatización',
      significado:
        'proceso mediante el cual se ejecutan tareas de forma automática utilizando herramientas tecnológicas, reduciendo la intervención manual y aumentando la eficiencia.',
    },
    {
      termino: 'Datos atípicos',
      significado:
        'valores que se alejan significativamente del resto de los datos en un conjunto, pudiendo afectar negativamente el rendimiento de los modelos si no se tratan adecuadamente.',
    },
    {
      termino: 'Evaluación del rendimiento',
      significado:
        'proceso de medir la eficacia de un modelo predictivo mediante métricas como precisión, <em>recall</em>, RMSE, entre otras.',
    },
    {
      termino: 'Limpieza de datos',
      significado:
        'conjunto de técnicas para detectar y corregir errores, valores faltantes o inconsistencias en un conjunto de datos.',
    },
    {
      termino: 'MLflow',
      significado:
        'plataforma de código abierto para gestionar el ciclo de vida del aprendizaje automático, incluyendo experimentación, registro de modelos y evaluación.',
    },
    {
      termino: 'Modelado de datos',
      significado:
        'etapa del aprendizaje automático en la que se construyen y entrenan modelos predictivos a partir de los datos preparados.',
    },
    {
      termino: 'Partición de datos',
      significado:
        'división de un conjunto de datos en subconjuntos, comúnmente entrenamiento, validación y prueba, para desarrollar y evaluar modelos.',
    },
    {
      termino: '<em>Pipeline</em>',
      significado:
        'secuencia estructurada de pasos que transforman y procesan datos, generalmente desde la limpieza hasta el entrenamiento del modelo.',
    },
    {
      termino: 'Transformación de datos',
      significado:
        'proceso que modifica o convierte los datos originales para que sean adecuados para el análisis o el modelado.',
    },
    {
      termino: 'Visualización',
      significado:
        'representación gráfica de datos o resultados de modelos para facilitar su comprensión, análisis y comunicación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Benítez, R., Escudero, G., Kanaan, S., & Rodó, D. M. (2014). Inteligencia artificial avanzada. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Dietterich, T. G. (1990). Machine learning. Annual Review of Computer Science, 4(1), 255–306.',
      link: 'https://doi.org/10.1146/annurev.cs.04.060190.001351',
    },
    {
      referencia:
        'Du, M., Liu, N., & Hu, X. (2019). Techniques for interpretable machine learning. Communications of the ACM, 63(1), 68–77.',
      link: '',
    },
    {
      referencia:
        'Géron, A. (2020). Aprende machine learning con Scikit-Learn, Keras y TensorFlow: Conceptos, herramientas y técnicas para construir sistemas inteligentes. O’Reilly Media.',
      link: '',
    },
    {
      referencia:
        'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep learning. MIT Press.',
      link: '',
    },
    {
      referencia:
        'Hahne, F., Huber, W., Gentleman, R., Falcon, S., & Carey, V. J. (2008). Unsupervised machine learning. En R. Gentleman, V. Carey, W. Huber, R. Irizarry & S. Dudoit (Eds.), Bioconductor case studies (pp. 137–157). Springer.',
      link: '',
    },
    {
      referencia:
        'Mesa Guerrero, J. A., & Caicedo Zambrano, S. J. (2020). Introducción a la estadística descriptiva. Universidad del Valle.',
      link: '',
    },
    {
      referencia: 'MLflow. (s.f.). Deliver production-ready AI.',
      link: 'https://mlflow.org/#core-concepts',
    },
    {
      referencia: 'Python Software Foundation. (s.f.). Welcome to Python.org.',
      link: 'https://www.python.org/',
    },
    {
      referencia:
        'Pyle, D. (1999). Data preparation for data mining. Morgan Kaufmann.',
      link: '',
    },
    {
      referencia:
        'Raschka, S. (2018). Model evaluation, model selection, and algorithm selection in machine learning. arXiv.',
      link: '',
    },
    {
      referencia:
        'Rudin, C., Chen, C., Chen, Z., Huang, H., Semenova, L., & Zhong, C. (2022). Interpretable machine learning: Fundamental principles and 10 grand challenges. Statistics Surveys, 16, 1–85.',
      link: '',
    },
    {
      referencia:
        'Shinde, P. P., & Shah, S. (2018, August). A review of machine learning and deep learning applications. En 2018 Fourth International Conference on Computing Communication Control and Automation (ICCUBEA) (pp. 1–6). IEEE.',
      link: '',
    },
    {
      referencia:
        'Viedma, C. D. L. P. (2018). Estadística descriptiva e inferencial. Ediciones IDT.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Deivis Eduard Ramírez Martínez',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>Full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
