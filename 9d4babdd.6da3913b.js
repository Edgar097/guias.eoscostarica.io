(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return a?n.a.createElement(m,c(c({ref:t},s),{},{components:a})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),o=(a(0),a(107)),i={id:"como-iniciar",title:"Como Iniciar",sidebar_label:"Como Iniciar"},c={unversionedId:"tutoriales/como-iniciar",id:"tutoriales/como-iniciar",isDocsHomePage:!1,title:"Como Iniciar",description:"Antes de iniciar",source:"@site/docs/tutoriales/como-iniciar.md",permalink:"/docs/tutoriales/como-iniciar",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/como-iniciar.md",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1598462953,sidebar_label:"Como Iniciar",sidebar:"docs",previous:{title:"Contratos Ricardianos",permalink:"/docs/aprender-eosio/contratos-ricardianos"},next:{title:"Instalaci\xf3n de Nodos",permalink:"/docs/tutoriales/instalacion-de-nodos"}},l=[{value:"Antes de iniciar",id:"antes-de-iniciar",children:[]},{value:"Obtenga sus llaves privadas",id:"obtenga-sus-llaves-privadas",children:[]},{value:"Creador de cuentas \xe1gil",id:"creador-de-cuentas-\xe1gil",children:[]}],s={rightToc:l};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"antes-de-iniciar"},"Antes de iniciar"),Object(o.b)("p",null,"Primero, es recomendable tener instalado el software ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/eosio"}),"EOSIO")," desarrollado por ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://block.one/"}),"Block.one")," para realizar acciones con el protocolo EOS siguiendo el comando ",Object(o.b)("inlineCode",{parentName:"p"},"brew tap eosio/eosio")," y ",Object(o.b)("inlineCode",{parentName:"p"},"brew install eosio"),". Este software se compone de:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"cleos:")," es el command line tool que se conecta con el API expuesto por nodeos y funciona para administrar la billetera, cuenta, llaves, transacciones y contratos inteligentes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"nodeos:")," funciona como el daemon central que maneja la red EOSIO y puede ser configurado como nodo para producir bloques."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"keosd:")," funciona como billetera para manejar las llaves para EOSIO.")),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://es.latamlink.io/img/diagramas/cleos.png",alt:"Diagrama"}))),Object(o.b)("p",null,"Adicionalmente, recomendamos instalar desde antes el Contract Development Toolkit (CDT), que se puede instalar utilizando el comando ",Object(o.b)("inlineCode",{parentName:"p"},"brew tap eosio.cdt")," y seguido de ",Object(o.b)("inlineCode",{parentName:"p"},"brew install eosio.cdt")," para acceder a recursos para crear los contratos."),Object(o.b)("h2",{id:"obtenga-sus-llaves-privadas"},"Obtenga sus llaves privadas"),Object(o.b)("p",null,"Mas informaci\xf3n sobre ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://guias.eoscostarica.io/docs/aprender-eosio/llaves-privadas"}),"llaves privadas"),"."),Object(o.b)("h2",{id:"creador-de-cuentas-\xe1gil"},"Creador de cuentas \xe1gil"),Object(o.b)("p",null,"Portal para crear cuentas y llaves p\xfablicas o privadas en un solo clic."))}p.isMDXComponent=!0}}]);