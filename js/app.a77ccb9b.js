(function(e){function a(a){for(var n,i,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],n=!0,i=1;i<o.length;i++){var c=o[i];0!==r[c]&&(n=!1)}n&&(t.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({creditos:"creditos",glosario:"glosario",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6",tema7:"tema7"}[e]||e)+"."+{"chunk-0206bfa0":"2b8f3705","chunk-04b93936":"ea805188","chunk-0cfca828":"287ddbed","chunk-13303073":"edb7935c","chunk-13a6037e":"80738a6a","chunk-1479a341":"5d7cab7f","chunk-1fb07a61":"e5a940ef","chunk-2c06842c":"535a7ded","chunk-2d208d90":"3458b945","chunk-2d21d0e2":"4650c2f9","chunk-2d22c123":"f49e187d","chunk-2e80bb9a":"4148ff4d","chunk-3c94cd2f":"6c39fe69","chunk-4cdd78c0":"920eb95c","chunk-515a8379":"b08dedde","chunk-522cec8c":"28921971","chunk-53ccb27e":"ff779605","chunk-59974754":"db8acba8","chunk-7432e4d4":"9d065437","chunk-766a929b":"03c3c721","chunk-839300a6":"1d5d7d49","chunk-c796899c":"5f0339ea",creditos:"0f5c3cbb",glosario:"62cd1866",referencias:"3da1e40c",tema1:"6715c468",tema2:"44fafe01",tema3:"2a1348a0",tema4:"1ca88694",tema5:"d8716642",tema6:"875459ee",tema7:"a9b985b7"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-04b93936":1,"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-3c94cd2f":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-7432e4d4":1,"chunk-766a929b":1,"chunk-839300a6":1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&o[e]&&a.push(i[e]=new Promise((function(a,o){for(var n="css/"+({creditos:"creditos",glosario:"glosario",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5",tema6:"tema6",tema7:"tema7"}[e]||e)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-13a6037e":"31d6cfe0","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3c94cd2f":"1dbe8d4a","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"a67e9f54","chunk-522cec8c":"99a35118","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"674c62e7","chunk-7432e4d4":"99a35118","chunk-766a929b":"b55b6314","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",creditos:"3006d74f",glosario:"55b10aad",referencias:"afc9efb9",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0",tema6:"31d6cfe0",tema7:"31d6cfe0"}[e]+".css",r=s.p+n,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===n||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=n,delete i[e],m.parentNode.removeChild(m),o(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)a.push(n[2]);else{var t=new Promise((function(a,o){n=r[e]=[a,o]}));a.push(n[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var o=r[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=t,s=(o("cf25"),o("2877")),d=Object(s["a"])(c,i,r,!1,null,null,null),l=d.exports,u=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("8c4f")),m=o("ae58"),p=o("7e58");n["a"].use(u["a"]);var f=new u["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return o.e("tema4").then(o.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return o.e("tema5").then(o.bind(null,"5029"))}},{path:"tema6",name:"tema6",component:function(){return o.e("tema6").then(o.bind(null,"92ea"))}},{path:"tema7",name:"tema7",component:function(){return o.e("tema7").then(o.bind(null,"a2b2"))}}]},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=f,h=o("1c2c"),g=(o("becf"),o("7b17"),o("ab8b"),o("a3a0"),o("4bc7"),o("78df"),{global:{componenteFormativo:"Sistemas de producción",descripcionCurso:"Este componente aborda los sistemas de producción del proceso de confección de prendas de vestir, contextualiza al aprendiz en el proceso productivo de supervisión de los procesos de confección.<br/><br/>Se identifica terminología, conceptos y definiciones de los sistemas de producción, asi como su enfoque en la cadena productiva de la confección industrial de prendas de vestir, para fortalecer el nivel competitivo de las empresas del sector.",imagenBannerPrincipal:o("9370"),fondoBannerPrincipal:o("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Sistemas de producción",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Producción: concepto y terminología",hash:"t_1_1"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Estructura del sistema de producción",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Componentes de un sistema de producción",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Clasificación de los sistemas de producción",hash:"t_2_2"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Modelos de sistemas de producción",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Tipos de sistemas de producción para procesos de Confección",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"4.1",titulo:"Sistema de producción lineal",hash:"t_4_1"},{icono:"far fa-file-alt",numero:"4.2",titulo:"Sistemas de producción por celdas",hash:"t_4_2"},{icono:"far fa-file-alt",numero:"4.3",titulo:"Sistemas de producción modular",hash:"t_4_3"}]},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Máquinas de producción",desarrolloContenidos:!0},{nombreRuta:"tema6",icono:"far fa-file-alt",numero:"6",titulo:"Ordenes de producción",desarrolloContenidos:!0,subMenu:[{icono:"far fa-play-circle",numero:"6.1",titulo:"Hojas de ruta",hash:"t_6_1"},{icono:"far fa-file-alt",numero:"6.2",titulo:"Fichas técnicas",hash:"t_6_2"},{icono:"far fa-file-alt",numero:"6.3",titulo:"Consumo de materiales",hash:"t_6_3"}]},{nombreRuta:"tema7",icono:"far fa-file-alt",numero:"7",titulo:"Sistemas de gestión de calidad",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"7.1",titulo:"Seguridad e higiene en la industria",hash:"t_7_1"},{icono:"far fa-file-alt",numero:"7.2",titulo:"Normas técnicas de salud",hash:"t_7_2"},{icono:"far fa-file-alt",numero:"7.3",titulo:"CAmbientales para plantas de confección",hash:"t_7_3"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Ananth, I., Seshadri, S., & Vasher, R. (2010). Administración de la cadena de suministro Toyota. México: Mc Grow Hill."},{referencia:"Bonilla Pastor, E. (2007). Diseño de un sistema de producción modular en una mediana empresa de confecciones. Lima, Perú: Fondoeditorial@ulima.edu.pe."},{referencia:"Carrillo, J., Gomis, R. (2003). “Los retos de las maquiladoras ante la pérdida de competitividad”, Comercio Exterior, Vol. 53, No. 4, pp. 318-327, abril."},{referencia:"Cero Accidentes. (2018). ¿Qué normas de seguridad y salud aplican al sector textil?. 28-05-2021, de Cero Accidentes \tSitio web: ",link:"https://www.ceroaccidentes.pe/que-normas-de-seguridad-y-salud-aplican-al-sector-textil/"},{referencia:"Costa, M. T., & Duch, N. (2010). La renovación del sector textil- confección en España. Barcelona: Instituto de economía de Barcelona. "},{referencia:"Chiavenato, I., y Villamizar, G. (2001). Administración (3ª ed., Págs. 147 - 200). Bogotá [etc.]: McGraw-Hill."},{referencia:"Everett E. Adam, R. J. (1991). Administracion de la produccion y las operaciones: conceptos, modelos y funcionamiento. Pearson Educación."},{referencia:"Gómez, E. (1996). Aseguramiento de calidad en compras. Bogotá: RAM Editores."},{referencia:"Hincapié, S. and Saker, F. (2014). “Implementar un sistema de producción para la confección de camisas en Medellín para la marca Camisería Europea”. Tesis de grado, Universidad Pontificia Bolivariana, Medellín."},{referencia:"Huamán Oscco, W. (2003). Ingeniería en la capacitación de operarios para la industria de la confección textil. Lima, Perú: Universidad Nacional Mayor de San Marcos. Facultad de Ingeniería Industrial. EAP."},{referencia:"Krajewski, L. J., Ritzman, L. P., & Malhotra, M. K. (2008). Administración de operaciones. Procesos y cadenas de valor. Mexico: Pearson Educación."},{referencia:"Lockyer, K. (1998). La Producción industrial. Mexico: Alfaomega."},{referencia:"Medina, J. (2007). Modelo Integral de la productividad. Bogotá: Fondo de publicaciones Universidad Sergio Arboleda."},{referencia:"Medina, J., & Cordero, N. (2010). Gestión Estratégica de la Calidad. Bogotá: Fondo de publicaciones Universidad Sergio Arboleda. Ministerio de Comercio, Industria y Turismo. (2009). Desarrollando sectores de clase mundial en Colombia. Bogotá: Autor. Organización de las Naciones Unidas para el Desarrollo Industrial. (S.f.). Guía para el Desarrollo de Proveedores."},{referencia:"NAHMIAS, S. (1999.). Análisis de la Producción y las Operaciones. Ed. CECSA, 1999. CECSA,."},{referencia:"P.A. Sánchez, F. Ceballos, G. Sánchez Torres. (2015). Análisis del proceso productivo de una empresa de confecciones: modelación y simulación. Ciencia e Ingeniería Neogranadina, 25 (2), pp 137 - 150, DOI."},{referencia:"Sekine, K. (1993). Diseño de celdas de fabricación. Porlantd, Oregon: Tecnologías de Gerencia y Producción."},{referencia:"Tawfik, L. (1987). Administración de la producción. Mexico: McGraw Hill."},{referencia:"Vélez, L., Rodríguez, E., Camacho, M. (2013). “Informe desempeño del sector textil de confecciones 2008-2012”. Superintendencia de Sociedades. Bogotá. "}],glosario:[{termino:"Accidente",significado:"un evento no deseado que da lugar a la muerte, enfermedad o lesión bien sea de personal de trabajo o de los equipos e instalaciones de la empresa. "},{termino:"Capacidad productiva",significado:"la capacidad que tiene una unidad productiva para producir su máximo nivel de bienes o servicios con una serie de recursos disponibles. Para su cálculo, se toma de referencia un periodo de tiempo determinado."},{termino:"Costos ",significado:"son aquellos que influyen directamente en la producción o fabricación de un producto o servicio e influirá en el precio final del mismo."},{termino:"Estandarizar",significado:"es el proceso de ajustar o adaptar características en un producto, servicio o procedimiento; con el objetivo de que éstos se parezcan a un tipo, modelo o norma en común."},{termino:"Incidente",significado:"es todo evento no deseado ni esperado que ocasiona una pérdida."},{termino:"MTM",significado:"es el acrónimo en inglés de Methods Time Measurement, es decir, Medida del Tiempo de los Métodos. En el contexto del estudio del trabajo los sistemas de tiempos predeterminados se definen como procedimientos que permiten calcular tiempos teóricos de ejecución de actividades totalmente influenciables por el hombre."},{termino:"Peligro",significado:"es la fuente de causar una lesión, daño o enfermedad en el ambiente de trabajo."},{termino:"Proceso productivo",significado:"serie de operaciones y procesos necesarios que se realizan de forma planificada y sucesiva para lograr la elaboración de productos."},{termino:"Producción continua",significado:"este método de producción se utiliza para fabricar, producir, o procesar materiales sin interrupción, a través de un proceso de flujo continuo que permite mantener los materiales en continuo movimiento y, generalmente, funcionando las 24 horas al día, siete días a la semana con alguna parada de mantenimiento, aunque poco frecuentes."},{termino:"Producción en masa",significado:"es la producción de grandes cantidades de productos estandarizados con base a líneas de montaje. Se caracteriza por la mecanización como medio para lograr un alto volumen de unidades producidas, obtenidas partiendo de una cuidadosa organización de flujo de materiales a través de varias etapas de la fabricación, y con base a la supervisión de los estándares de calidad y la división del trabajo."},{termino:"Restricción de tiempo",significado:"las restricciones de tiempo son límites de tiempo que se aplican a los elementos sometidos a apelación y que se utilizan para controlar el número de días en los que debe realizarse alguna acción."},{termino:"Sistemas de producción intermitente",significado:"los procesos de transformación de este tipo se suceden a intervalos irregulares y sin continuidad de flujo. Los productos son fabricados con base a los pedidos del cliente, y por eso, los bienes se producen en pequeña escala. En este sistema, se producen grandes variedades de productos en los que tamaño, diseño y otras características intrínsecas al bien pueden variar, por lo que la flexibilidad es una de las principales características que las diferencias de los tipos de sistemas de producción continua."},{termino:"Tiempo de producción",significado:'el tiempo de producción ("lead time") es el tiempo que transcurre desde que se inicia un proceso de producción hasta que se completa.'},{termino:"Tiempo de espera",significado:"el tiempo que el proceso de producción espera a que el sistema acepte órdenes de producción antes de que se produzca un tiempo de espera excedido y el proceso se detenga."},{termino:"Tiempo de operación",significado:"es el tiempo necesario para realizar una o varias operaciones. Está compuesto por los tiempos de: espera, preparación, operación y transferencia."}],complementario:[{texto:"BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”",tipo:"Video",link:"https://www.google.com/"},{texto:"Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49",tipo:"Página web",descarga:"/downloads/prueba.pdf"},{texto:"Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.",tipo:"Artículo científico",link:"https://www.google.com/"},{texto:"Economía de Rosquilla. (s.f.).",tipo:"Página web",descarga:"/downloads/prueba.pdf"},{texto:"2 minutos para entender el desarrollo sostenible – Spanish",tipo:"Video",link:"https://www.google.com/"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Carlos Parra Carrillo",cargo:"Instructor técnico ",centro:"Regional Norte de Santander - Centro de la industria, la empresa y los servicios"},{nombre:"Fernelis Mauricio Echeverri",cargo:"Instructor técnico",centro:"Regional Antioquia – Centro de Formación en Diseño, Confección y Moda"},{nombre:"Erika Alexandra Blanco Sánchez",cargo:"Experto técnico",centro:"Regional Antioquia – Centro de Formación en Diseño, Confección y Moda"},{nombre:"Maria Camila Alvarez Trujillo",cargo:"Contratista Diseño Curricular",centro:"Regional Antioquia – Centro de Formación en Diseño, Confección y Moda"},{nombre:"Diana Marcela Luis Vásquez",cargo:"Diseñadora Instruccional",centro:"Regional Distrito Capital-Centro de Gestión Industrial "}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:"Oscar Ivan Uribe Ortiz",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Edward Leonardo Pico Cabra",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Yenny Patricia Ulloa Villamizar",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});n["a"].prototype.$config=g;var v=o("9224");n["a"].prototype.$package=v,n["a"].config.productionTip=!1,n["a"].directive("child",{bind:function(e,a){e.appendChild(a.value)}}),new n["a"]({router:b,store:h["a"],render:function(e){return e(l)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.1","core-js":"^3.6.5","ecored-base-pkg":"2.3.1","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},9370:function(e,a,o){e.exports=o.p+"img/banner-princiapal.d6854fe5.png"},"9eb5":function(e,a,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,o){},cf25:function(e,a,o){"use strict";o("fea6")},e6b0:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.48e259bb.png"},fea6:function(e,a,o){}});
//# sourceMappingURL=app.a77ccb9b.js.map