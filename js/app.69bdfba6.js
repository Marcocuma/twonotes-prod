(function(t){function a(a){for(var s,r,n=a[0],l=a[1],c=a[2],u=0,m=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(m.length)m.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,n=1;n<e.length;n++){var l=e[n];0!==o[l]&&(s=!1)}s&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},o={app:0},i=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var d=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0286":function(t,a,e){t.exports=e.p+"img/sede1.f0892286.jpg"},"034f":function(t,a,e){"use strict";var s=e("85ec"),o=e.n(s);o.a},"2e6c":function(t,a,e){"use strict";var s=e("d083"),o=e.n(s);o.a},"359c":function(t,a,e){t.exports=e.p+"img/github.7f28fec6.png"},"39f2":function(t,a,e){},"43c6":function(t,a,e){t.exports=e.p+"img/noticiasIcon.7f93ed25.png"},"4bf8":function(t,a,e){},5087:function(t,a,e){"use strict";var s=e("d33e"),o=e.n(s);o.a},"555a":function(t,a,e){t.exports=e.p+"img/icon.2a6ca26d.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-column justify-content-between",attrs:{id:"contenedor"}},[e("div",{attrs:{id:"notas"}},[e("nav1"),e("keep-alive",[e("transition",{attrs:{name:"slide-fade"}},[e("router-view")],1)],1)],1),e("footer1")],1)},i=[],r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"nav1"},[s("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light"},[s("img",{staticClass:"navbar-brand",class:[0!=t.pagina?"ocultar":""],attrs:{id:"navIcon",src:e("555a")}}),s("img",{staticClass:"navbar-brand",class:[1!=t.pagina?"ocultar":""],attrs:{id:"navIcon",src:e("c032")}}),s("img",{staticClass:"navbar-brand",class:[2!=t.pagina?"ocultar":""],attrs:{id:"navIcon",src:e("43c6")}}),t._m(0),s("div",{staticClass:"collapse navbar-collapse justify-content-center",attrs:{id:"collapsibleNavId"}},[s("ul",{staticClass:"navbar-nav mt-lg-0"},[s("li",{staticClass:"nav-item",class:[0==t.pagina?"active":""],on:{click:function(a){return t.cambiarPagina(0)}}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/olimpicos"}},[t._v("Inicio"),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),t._m(1),t._m(2),t._m(3),s("li",{staticClass:"nav-item",class:[1==t.pagina?"active":""],on:{click:function(a){return t.cambiarPagina(1)}}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/notas"}},[t._v("TwoNotes")])],1),s("li",{staticClass:"nav-item",class:[2==t.pagina?"active":""],on:{click:function(a){return t.cambiarPagina(2)}}},[s("router-link",{staticClass:"nav-link",attrs:{to:"/noticias"}},[t._v("Noticias")])],1)])]),s("div",{staticClass:"nav-item",attrs:{id:"botones"}},[s("button",{staticClass:"btn btn-outline-primary my-2 my-sm-0",attrs:{type:"submit"},on:{click:t.abrirModalLogin}},[t._v("Login")]),s("button",{staticClass:"btn btn-outline-primary my-2 my-sm-0",attrs:{type:"submit"},on:{click:t.abrirModalRegis}},[t._v("Register")])])]),t._m(4),t._m(5)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler d-lg-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsibleNavId","aria-controls":"collapsibleNavId","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"dropdownId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Noticias")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownId"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Noticia 1")]),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Noticia 2")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"dropdownId","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Nosotros")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownId"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Nosotros 1")]),e("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Nosotros 2")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Contacto")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal",attrs:{id:"modalRegistro",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"modalTitle"}},[t._v("Registro")]),e("button",{staticClass:"close",attrs:{type:"button",id:"cerrarRegistro","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"modal-body"},[e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Nombre")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"nombre1",placeholder:"Introduce el nombre"}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Apellidos")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"apellidos1",placeholder:"Introduce tus apellidos"}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Mail")]),e("input",{staticClass:"form-control",attrs:{type:"email",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2, 4}$",id:"mail1",placeholder:"Introduce el mail"}})]),e("div",{staticClass:"form-check row",attrs:{id:"genero"}},[e("div",{staticClass:"col-6"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"genero",id:"hombre1",value:"Hombre",checked:""}}),e("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios1"}},[t._v(" Hombre ")])]),e("div",{staticClass:"col-6"},[e("input",{staticClass:"form-check-input",attrs:{type:"radio",name:"genero",id:"mujer1",value:"Mujer"}}),e("label",{staticClass:"form-check-label",attrs:{for:"exampleRadios2"}},[t._v(" Mujer ")])])]),e("p",{staticClass:"mb-0 mt-1"},[t._v("Redes Sociales")]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"twitter1",value:"twitter"}}),e("label",{staticClass:"form-check-label",attrs:{for:"twitter1"}},[t._v("Twitter")])]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"facebook1",value:"facebook"}}),e("label",{staticClass:"form-check-label",attrs:{for:"facebook1"}},[t._v("Facebook")])]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"insta1",value:"instagram"}}),e("label",{staticClass:"form-check-label",attrs:{for:"insta1"}},[t._v("Instagram")])]),e("div",{staticClass:"form-check form-check-inline"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"github1",value:"github"}}),e("label",{staticClass:"form-check-label",attrs:{for:"github1"}},[t._v("GitHub")])]),e("button",{staticClass:"form-control mt-3 btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])]),e("div",{staticClass:"modal-footer"})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal",attrs:{id:"modalLogin",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"modalTitle"}},[t._v("Login")]),e("button",{staticClass:"close",attrs:{type:"button",id:"cerrarLogin","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"modal-body container-fluid"},[e("form",{staticClass:"row m-0",attrs:{target:"/"}},[e("label",{staticClass:"col-12",attrs:{for:"usuario"}},[t._v("Nombre")]),e("input",{staticClass:"col-12",attrs:{type:"text",id:"usuario",name:"usuario"}}),e("label",{staticClass:"col-12",attrs:{for:"contrasena"}},[t._v("Contraseña")]),e("input",{staticClass:"col-12",attrs:{type:"password",id:"contrasena",name:"contrasena"}}),e("input",{staticClass:"col-12 btn btn-outline-primary mt-4",attrs:{type:"submit",name:"login",value:"Login"}})])]),e("div",{staticClass:"modal-footer"})])])])}],l=e("1157");window.$=l;var c={name:"nav1",props:[],updated:function(){localStorage.pagina=JSON.stringify(this.pagina)},mounted:function(){localStorage.pagina&&(this.pagina=JSON.parse(localStorage.pagina)),l("#cerrarRegistro").on("click",(function(){l("#modalRegistro").fadeOut()})),l("#cerrarLogin").on("click",(function(){l("#modalLogin").fadeOut()}))},data:function(){return{pagina:0}},methods:{abrirModalLogin:function(){l("#modalLogin").fadeIn()},abrirModalRegis:function(){l("#modalRegistro").fadeIn()},cambiarPagina:function(t){this.pagina=t}},computed:{}},d=c,u=(e("da95"),e("2877")),m=Object(u["a"])(d,r,n,!1,null,"1a03a807",null),p=m.exports,f=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"footer-1 bg-light"},[s("footer",{staticClass:"d-flex justify-content-center mt-3 col-12 row"},[s("ul",{staticClass:"align-midle col-12 col-sm-6 order-sm-last d-flex justify-content-around",attrs:{id:"enlacesFooter"}},[s("a",{attrs:{href:"https://www.facebook.com/falloutboy/"}},[s("img",{staticClass:" redes",attrs:{src:e("ef15")}})]),s("a",{attrs:{href:"https://twitter.com/markknopfler?lang=es"}},[s("img",{staticClass:" redes",attrs:{src:e("a3df")}})]),s("a",{attrs:{href:"https://github.com/Marcocuma"}},[s("img",{staticClass:" redes",attrs:{src:e("359c")}})])]),s("p",{staticClass:"col-12 col-sm-6 align-midle",attrs:{id:"textoFooter"}},[t._v("Copyright "),s("a",{attrs:{href:"#"}},[t._v("Alumno")])])])])}],b={name:"footer-1",props:[],mounted:function(){},data:function(){return{}},methods:{},computed:{}},g=b,h=(e("2e6c"),Object(u["a"])(g,f,v,!1,null,"1279f56b",null)),C=h.exports,_={name:"notas",components:{nav1:p,footer1:C},data:function(){return{}},mounted:function(){},methods:{},computed:{}},x=_,y=(e("034f"),Object(u["a"])(x,o,i,!1,null,null,null)),w=y.exports,k=(e("4989"),e("ab8b"),e("8c4f")),N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"main-nota row col-12"},[e("div",{staticClass:"col-12 d-flex",attrs:{id:"barraBusqueda"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textoNota,expression:"textoNota"}],staticClass:"w-100 m-4",attrs:{type:"text",required:"",placeholder:"Texto Nota"},domProps:{value:t.textoNota},on:{keypress:t.add,input:function(a){a.target.composing||(t.textoNota=a.target.value)}}})]),e("div",{staticClass:"col-12 d-flex",attrs:{id:"barraFiltro"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textoFiltro,expression:"textoFiltro"}],staticClass:"w-100 m-4",attrs:{type:"text",placeholder:"Texto Filtro"},domProps:{value:t.textoFiltro},on:{keypress:t.add,input:function(a){a.target.composing||(t.textoFiltro=a.target.value)}}})]),e("div",{staticClass:"col-12 d-flex justify-content-around"},[e("p",{staticClass:"mb-0"},[e("a",{attrs:{href:"#"},on:{click:t.compTodas}},[t._v(t._s(t.textoCompletar))]),t._v("| Tienes un total de "+t._s(t.totalNotas)+" | Completadas: "+t._s(t.notasCompletadas)+" "),e("a",{attrs:{href:"#"},on:{click:t.delCompletadas}},[t._v("Borrar Completadas")])]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.orden,expression:"orden"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.orden=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"1"}},[t._v("Alfabetico")]),e("option",{attrs:{value:"2"}},[t._v("Completadas")]),e("option",{attrs:{value:"3"}},[t._v("Incompletas")]),e("option",{attrs:{value:"4"}},[t._v("Prioridad")]),e("option",{attrs:{value:"5"}},[t._v("Nueva")]),e("option",{attrs:{value:"6"}},[t._v("Antigüa")])])]),e("lista",{attrs:{ordenarNotas:t.ordenarNotas},on:{"prioridad-cambiada":t.forzarUpdate,borrarNota:t.borrarNota}})],1)},j=[],I=(e("4de4"),e("4160"),e("caad"),e("c975"),e("fb6a"),e("a434"),e("2532"),e("159b"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition-group",{staticClass:"col-12",attrs:{name:"slide-fade",tag:"ol"}},t._l(t.ordenarNotas,(function(a,s){return e("nota",{key:a,attrs:{index:s,todo:a},on:{"prioridad-cambiada":t.forzarUpdate,borrarNota:t.borrarNota}})})),1)}),F=[],S=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"m-4"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body row d-flex align-items-center justify-content-between"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.marcada,expression:"todo.marcada"}],attrs:{type:"checkbox",id:t.index},domProps:{checked:Array.isArray(t.todo.marcada)?t._i(t.todo.marcada,null)>-1:t.todo.marcada},on:{change:function(a){var e=t.todo.marcada,s=a.target,o=!!s.checked;if(Array.isArray(e)){var i=null,r=t._i(e,i);s.checked?r<0&&t.$set(t.todo,"marcada",e.concat([i])):r>-1&&t.$set(t.todo,"marcada",e.slice(0,r).concat(e.slice(r+1)))}else t.$set(t.todo,"marcada",o)}}}),s("label",{staticClass:"mb-0 col-2",attrs:{for:t.index}}),s("p",{staticClass:"col-8 mb-0",class:{terminada:t.todo.marcada}},[t._v(" "+t._s(t.todo.text)+" ")]),s("div",{staticClass:"col-2 d-flex justify-content-end"},[s("img",{attrs:{src:e("c8e4")},on:{click:function(a){return t.eliminarNota(t.todo)}}})])]),s("div",{staticClass:"card-footer"},[s("div",{attrs:{id:"tiempo"}},[s("span",[t._v("Fecha: "+t._s(t.calculaTiempo(t.todo.tiempo)))])]),s("div",{staticClass:"btn-group btn-group-toggle"},[s("label",{staticClass:"btn btn-outline-success ",class:[-1==t.todo.prioridad?"active":""]},[s("input",{attrs:{type:"radio",id:"option1"},on:{click:function(a){return t.cambiarPrioridad(t.todo,-1)}}}),t._v("Baja ")]),s("label",{staticClass:"btn btn-outline-primary",class:[0==t.todo.prioridad?"active":""]},[s("input",{attrs:{type:"radio",id:"option2"},on:{click:function(a){return t.cambiarPrioridad(t.todo,0)}}}),t._v("Media ")]),s("label",{staticClass:"btn btn-outline-danger",class:[1==t.todo.prioridad?"active":""]},[s("input",{attrs:{type:"radio",id:"option3"},on:{click:function(a){return t.cambiarPrioridad(t.todo,1)}}}),t._v("Alta ")])])])])])},$=[],L={name:"nota",props:["todo","index"],mounted:function(){},data:function(){return{}},methods:{calculaTiempo:function(t){var a=new Date(t);return a.getDate()+"/"+(a.getMonth()+1)+"/"+a.getFullYear()+"  "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds()},cambiarPrioridad:function(t,a){t.prioridad=a,this.$emit("prioridad-cambiada")},eliminarNota:function(t){this.$emit("borrarNota",t)}},computed:{}},O=L,T=(e("9110"),Object(u["a"])(O,S,$,!1,null,"aa1a2ed4",null)),E=T.exports,P={name:"lista",components:{nota:E},props:["ordenarNotas"],mounted:function(){},data:function(){return{}},methods:{forzarUpdate:function(){this.$emit("prioridad-cambiada")},borrarNota:function(t){this.$emit("borrarNota",t)}},computed:{}},M=P,q=(e("a551"),Object(u["a"])(M,I,F,!1,null,null,null)),A=q.exports,R={name:"main-nota",components:{lista:A},props:[],mounted:function(){localStorage.notas&&(this.notas=JSON.parse(localStorage.notas))},updated:function(){localStorage.notas=JSON.stringify(this.notas)},data:function(){return{notas:[],prio:"-1",textoNota:"",textoFiltro:"",orden:"4",completadas:!1,textoCompletar:"Completar todas"}},methods:{add:function(t){13==t.keyCode&&(this.notas.push({text:this.textoNota,marcada:!1,tiempo:Date.now(),prioridad:-1}),this.completadas=!1,this.textoNota="")},delCompletadas:function(){this.notas=this.notas.filter((function(t){return!t.marcada}))},calculaTiempo:function(t){var a=new Date(Date.now()-this.notas[t].tiempo);return a.getMinutes()},forzarUpdate:function(){this.$forceUpdate()},compTodas:function(){this.completadas?(this.ordenarNotas.forEach((function(t){t.marcada=!1})),this.completadas=!1,this.textoCompletar="Completar todas "):(this.ordenarNotas.forEach((function(t){t.marcada=!0})),this.completadas=!0,this.textoCompletar="Descompletar todas")},borrarNota:function(t){this.notas.splice(this.notas.indexOf(t),1)}},computed:{totalNotas:function(){return this.notas.length},notasCompletadas:function(){var t=this.notas.filter((function(t){return 1==t.marcada}));return t.length},ordenarNotas:function(){var t=this;return"2"==this.orden?this.notas.slice().filter((function(a){return a.text.toLowerCase().includes(t.textoFiltro.toLowerCase())})).sort((function(t,a){var e=t.marcada,s=a.marcada;return 0==e?1:e==s?0:-1})):"3"==this.orden?this.notas.slice().filter((function(a){return a.text.toLowerCase().includes(t.textoFiltro.toLowerCase())})).sort((function(t,a){var e=t.marcada,s=a.marcada;return 1==e?1:e==s?0:-1})):"4"==this.orden?this.notas.slice().filter((function(a){return a.text.toLowerCase().includes(t.textoFiltro.toLowerCase())})).sort((function(t,a){var e=t.prioridad,s=a.prioridad;return e<s?1:e==s?0:-1})):"5"==this.orden?this.notas.slice().filter((function(a){return a.text.toLowerCase().includes(t.textoFiltro.toLowerCase())})).sort((function(t,a){var e=t.tiempo,s=a.tiempo;return e<s?1:e==s?0:-1})):"5"==this.orden?this.notas.slice().filter((function(a){return a.text.toLowerCase().includes(t.textoFiltro.toLowerCase())})).sort((function(t,a){var e=t.tiempo,s=a.tiempo;return e>s?1:e==s?0:-1})):this.notas.slice().filter((function(a){return a.text.toLowerCase().includes(t.textoFiltro.toLowerCase())})).sort((function(t,a){var e=t.text.toLowerCase(),s=a.text.toLowerCase();return e>s?1:e==s?0:-1}))}}},J=R,z=(e("d64f"),Object(u["a"])(J,N,j,!1,null,"7acaadbf",null)),B=z.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"noticias p-2"},[e("h1",{staticClass:"text-center"},[t._v("Noticias")]),e("div",{staticClass:"carousel slide m-md-3",attrs:{id:"carouselId","data-ride":"carousel"}},[t._m(0),e("div",{staticClass:"carousel-inner",attrs:{role:"listbox"}},t._l(t.importantes,(function(a,s){return e("div",{key:s,staticClass:"carousel-item",class:[0==s?"active":""]},[e("img",{attrs:{src:a.urlToImage,alt:"First slide"}}),e("div",{staticClass:"carousel-caption d-none d-md-block"},[e("h5",[t._v(t._s(a.title))]),e("p",[t._v(t._s(a.description))]),e("a",{staticClass:"btn btn-primary",attrs:{name:"readMore",id:"leerMas",target:"_blank",href:a.url,role:"button"}},[t._v("Leer más")])])])})),0),t._m(1),t._m(2)]),e("div",{staticClass:"row m-0"},[e("label",{staticClass:"m-0 col-12 col-md-2",attrs:{for:"filtro"}},[t._v("Filtro: ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.textoFiltro,expression:"textoFiltro"}],staticClass:"col-12 col-md-10",attrs:{id:"filtro",placeholder:"Pulsa intro para filtrar"},domProps:{value:t.textoFiltro},on:{keypress:t.aplicarFiltro,input:function(a){a.target.composing||(t.textoFiltro=a.target.value)}}})]),e("div",{staticClass:"row m-0"},t._l(t.noticias,(function(t){return e("noticia",{key:t.url,attrs:{contenido:t,clases:"card col-12 col-md-6 col-lg-4 col-xl-3 p-0 mt-3"}})})),1)])},U=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ol",{staticClass:"carousel-indicators"},[e("li",{staticClass:"active",attrs:{"data-target":"#carouselId","data-slide-to":"0"}}),e("li",{attrs:{"data-target":"#carouselId","data-slide-to":"1"}}),e("li",{attrs:{"data-target":"#carouselId","data-slide-to":"2"}}),e("li",{attrs:{"data-target":"#carouselId","data-slide-to":"3"}}),e("li",{attrs:{"data-target":"#carouselId","data-slide-to":"4"}}),e("li",{attrs:{"data-target":"#carouselId","data-slide-to":"5"}}),e("li",{attrs:{"data-target":"#carouselId","data-slide-to":"6"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselId",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselId",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"sr-only"},[t._v("Next")])])}],H=(e("99af"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.clases},[e("div",{attrs:{id:"divImg"}}),e("img",{staticClass:"card-img-top",attrs:{src:t.contenido.urlToImage,alt:""}}),e("div",{staticClass:"card-body"},[e("h6",{staticClass:"card-subtitle mb-2 text-muted"},[t._v(t._s(t.contenido.publishedAt.replace("T"," ").replace("Z"," "))+" - "+t._s(t.contenido.author))]),e("h4",{staticClass:"card-title"},[t._v(t._s(t.contenido.title))]),e("p",{staticClass:"card-text"},[t._v(t._s(t.contenido.content.slice(0,100)+"..."))])]),e("div",{staticClass:"card-footer"},[e("a",{staticClass:"btn btn-primary",attrs:{name:"readMore",id:"leerMas",href:t.contenido.url,target:"_blank",role:"button"}},[t._v("Leer más")])])])}),K=[],G={name:"noticia",props:["contenido","clases"],mounted:function(){},data:function(){return{}},methods:{},computed:{}},W=G,Y=(e("880d"),Object(u["a"])(W,H,K,!1,null,"4d0706dc",null)),Z=Y.exports,Q=e("1157"),V=e.n(Q),X=e("bc3a"),tt=V.a,at={name:"noticias",props:[],components:{noticia:Z},updated:function(){this.bloqueo=!1},mounted:function(){var t=this;X.get("https://newsapi.org/v2/everything?languaje=es&domains=elpais.com,elmundo.es,elcortodigital.es,ideal.es&page=1&apiKey=e859accb681646698b5ba6f1e8b23ba8").then((function(a){t.importantes=a.data.articles.slice(0,7),t.noticias=a.data.articles.slice(7,a.data.articles.length-1)})),tt(window).scroll(this.comprobarBloqueo)},data:function(){return{importantes:[],noticias:[],bloqueo:!1,page:2,textoFiltro:""}},methods:{comprobarBloqueo:function(){!this.bloqueo&&this.page<6&&this.cargarNoticias()},cargarNoticias:function(){var t,a=this;tt(window).scrollTop()+tt(window).height()>=tt(document).height()-100&&(this.bloqueo=!0,t=this.textoFiltro?"https://newsapi.org/v2/everything?languaje=es&qInTitle="+this.textoFiltro:"https://newsapi.org/v2/everything?languaje=es",t+="&domains=elpais.com,elmundo.es,ideal.es&page="+this.page+"&apiKey=e859accb681646698b5ba6f1e8b23ba8",X.get(t).then((function(t){a.noticias=a.noticias.concat(t.data.articles)})),this.page++)},aplicarFiltro:function(t){var a,e=this;13==t.keyCode&&(this.page=1,a=this.textoFiltro?"https://newsapi.org/v2/everything?languaje=es&qInTitle="+this.textoFiltro:"https://newsapi.org/v2/everything?languaje=es",a+="&domains=elpais.com,elmundo.es,ideal.es&page="+this.page+"&apiKey=e859accb681646698b5ba6f1e8b23ba8",X.get(a).then((function(t){e.noticias=t.data.articles.slice(7,t.data.articles.length-1)})),this.page++)}},computed:{}},et=at,st=(e("5087"),Object(u["a"])(et,D,U,!1,null,"2cafc480",null)),ot=st.exports,it=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"olimpicos col-12"},[s("div",{staticClass:"jumbotron jumbotron-fluid card d-flex align-items-center justify-content-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"card-body",attrs:{id:"content"}},[s("h1",{staticClass:"display-3"},[t._v("トップスペイン")]),s("p",{staticClass:"lead"},[t._v("Descrube el mañana")])])])]),s("main",{staticClass:"row",attrs:{id:"main"}},[s("div",{staticClass:"col-12 col-md-9 d-flex justify-content-center row",attrs:{id:"sedes"}},[s("div",{staticClass:"col-12 row",attrs:{id:"sede1"}},[s("img",{staticClass:"col-sm-4",attrs:{id:"imgSede1",src:e("0286")}}),s("div",{staticClass:"col-sm-8",attrs:{id:"conenidoSede1"}},[s("h1",{staticClass:"tituloContenido"},[t._v("Titulo Sede")]),s("p",{staticClass:"textoSedes",attrs:{id:"contenidoSede2"}},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat cumque blanditiis, quam et rem fugiat quae perferendis reiciendis at! A placeat suscipit eaque velit ad possimus natus dolorem aliquid. ")])])]),s("div",{staticClass:"col-12 row",attrs:{id:"sede2"}},[s("img",{staticClass:"col-sm-4 order-sm-last",attrs:{id:"imgSede1",src:e("e02f")}}),s("div",{staticClass:"col-sm-8",attrs:{id:"conenidoSede2"}},[s("h1",{staticClass:"tituloContenido"},[t._v("Titulo Sede")]),s("p",{staticClass:"textoSedes",attrs:{id:"contenidoSede2"}},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat cumque blanditiis, quam et rem fugiat quae perferendis reiciendis at! A placeat suscipit eaque velit ad possimus natus dolorem aliquid. ")])])])]),s("div",{staticClass:"col-12 col-md-3",attrs:{id:"lista"}},[s("h2",[t._v("Grandes atletas de la historia")]),s("ul",{attrs:{id:"listaAtletas"}},[s("li",[s("a",{attrs:{href:"#"}},[t._v("Johnny Weissmuller")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Jesse Owens")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Nadia Comaneci")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Michael Phelps")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Usain Bolts")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("Simone Biles")])])])]),s("div",{staticClass:"carousel slide col-12",attrs:{id:"carouselId","data-ride":"carousel"}},[s("ol",{staticClass:"carousel-indicators"},[s("li",{staticClass:"active",attrs:{"data-target":"#carouselId","data-slide-to":"0"}}),s("li",{attrs:{"data-target":"#carouselId","data-slide-to":"1"}}),s("li",{attrs:{"data-target":"#carouselId","data-slide-to":"2"}})]),s("div",{staticClass:"carousel-inner",attrs:{role:"listbox"}},[s("div",{staticClass:"carousel-item active"},[s("img",{attrs:{src:e("c510"),alt:"First slide"}})]),s("div",{staticClass:"carousel-item"},[s("img",{attrs:{src:e("8d88"),alt:"Second slide"}})]),s("div",{staticClass:"carousel-item"},[s("img",{attrs:{src:e("880b"),alt:"Third slide"}})])]),s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselId",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Previous")])]),s("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselId",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"sr-only"},[t._v("Next")])])])])])}],nt={name:"olimpicos",props:[],mounted:function(){},data:function(){return{}},methods:{},computed:{}},lt=nt,ct=(e("b3b3"),Object(u["a"])(lt,it,rt,!1,null,"6b2049e2",null)),dt=ct.exports;s["a"].use(k["a"]),s["a"].config.productionTip=!1;var ut=[{path:"/notas",component:B},{path:"/noticias",component:ot},{path:"/olimpicos",component:dt},{path:"/*",component:dt}],mt=new k["a"]({routes:ut});new s["a"]({render:function(t){return t(w)},router:mt}).$mount("#app")},"5ef7":function(t,a,e){},"6ce0":function(t,a,e){},"85ec":function(t,a,e){},"880b":function(t,a,e){t.exports=e.p+"img/slide3.801ad4c5.jpg"},"880d":function(t,a,e){"use strict";var s=e("4bf8"),o=e.n(s);o.a},"8d88":function(t,a,e){t.exports=e.p+"img/slide2.b3a4be3f.jpg"},9110:function(t,a,e){"use strict";var s=e("39f2"),o=e.n(s);o.a},a3df:function(t,a,e){t.exports=e.p+"img/twitter.90730c3c.svg"},a551:function(t,a,e){"use strict";var s=e("5ef7"),o=e.n(s);o.a},b3b3:function(t,a,e){"use strict";var s=e("6ce0"),o=e.n(s);o.a},c032:function(t,a,e){t.exports=e.p+"img/logoNav.3dcc9448.png"},c40c:function(t,a,e){},c510:function(t,a,e){t.exports=e.p+"img/slide1.f36f0737.jpg"},c8e4:function(t,a,e){t.exports=e.p+"img/trash.aa4cd934.png"},ca82:function(t,a,e){},d083:function(t,a,e){},d33e:function(t,a,e){},d64f:function(t,a,e){"use strict";var s=e("ca82"),o=e.n(s);o.a},da95:function(t,a,e){"use strict";var s=e("c40c"),o=e.n(s);o.a},e02f:function(t,a,e){t.exports=e.p+"img/sede2.42d6cbd5.jpg"},ef15:function(t,a,e){t.exports=e.p+"img/face.17b57389.svg"}});
//# sourceMappingURL=app.69bdfba6.js.map