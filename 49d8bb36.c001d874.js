(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{105:function(e,a,r){"use strict";r.d(a,"a",(function(){return p})),r.d(a,"b",(function(){return m}));var n=r(0),t=r.n(n);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function c(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=t.a.createContext({}),d=function(e){var a=t.a.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=d(e.components);return t.a.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},b=t.a.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,m=p["".concat(l,".").concat(b)]||p[b]||u[b]||o;return r?t.a.createElement(m,i(i({ref:a},s),{},{components:r})):t.a.createElement(m,i({ref:a},s))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return t.a.createElement.apply(null,l)}return t.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},71:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return l})),r.d(a,"metadata",(function(){return i})),r.d(a,"rightToc",(function(){return c})),r.d(a,"default",(function(){return d}));var n=r(2),t=r(6),o=(r(0),r(105)),l={id:"llaves-privadas",title:"Manejo de Llaves Privadas",sidebar_label:"Llaves Privadas"},i={unversionedId:"aprender-eosio/llaves-privadas",id:"aprender-eosio/llaves-privadas",isDocsHomePage:!1,title:"Manejo de Llaves Privadas",description:"Crear cuenta en el blockchain p\xfablico",source:"@site/docs/aprender-eosio/llaves-privadas.md",permalink:"/docs/aprender-eosio/llaves-privadas",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/llaves-privadas.md",lastUpdatedBy:"Xavier Fernandez",lastUpdatedAt:1597858937,sidebar_label:"Llaves Privadas",sidebar:"docs",previous:{title:"Funciones Importantes en EOSIO",permalink:"/docs/aprender-eosio/funciones-importantes"},next:{title:"Desarrollo de Dapps",permalink:"/docs/aprender-eosio/desarrollo-de-dapps"}},c=[{value:"Crear cuenta en el blockchain p\xfablico",id:"crear-cuenta-en-el-blockchain-p\xfablico",children:[]},{value:"Generar y gestionar las llaves",id:"generar-y-gestionar-las-llaves",children:[]},{value:"Administrar la billetera con cleos",id:"administrar-la-billetera-con-cleos",children:[]},{value:"Autenticadores Externos (Wallets)",id:"autenticadores-externos-wallets",children:[]}],s={rightToc:c};function d(e){var a=e.components,r=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"crear-cuenta-en-el-blockchain-p\xfablico"},"Crear cuenta en el blockchain p\xfablico"),Object(o.b)("p",null,"En la mayor\xeda de las billeteras puede generar nuevas llaves para EOSIO, en esta gu\xeda crearemos claves en el terminal. Ejecutemos el comando ",Object(o.b)("inlineCode",{parentName:"p"},"cleos")," para generar las claves criptogr\xe1ficas necesarias para crear una cuenta. Para crear una cuenta en Jungle Testnet."),Object(o.b)("h2",{id:"generar-y-gestionar-las-llaves"},"Generar y gestionar las llaves"),Object(o.b)("p",null,"Para generar llaves, requisito para crear una cuenta en una blockchain, vamos a correr el comando ",Object(o.b)("inlineCode",{parentName:"p"},"cleos create key")," en la terminal. Este comando nos va a generar llaves privadas y p\xfablicas \u2014 podemos crear la cantidad de llaves que queramos. Las cuentas cleos, por defecto, vienen en pares: una ",Object(o.b)("inlineCode",{parentName:"p"},"active key")," y una ",Object(o.b)("inlineCode",{parentName:"p"},"owner key")," (para recuperar cuenta en caso de perder la active key)."),Object(o.b)("p",null,"Una vez generadas las llaves, nos dirigimos al sandbox, Jungle Testnet, para crear la cuenta. El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la A a la Z en min\xfascula, n\xfameros del 1 al 5 y tener una longitud de 12 caracteres. Para el ejemplo, llamaremos la cuenta: ",Object(o.b)("inlineCode",{parentName:"p"},"holacontrato"),"."),Object(o.b)("p",null,"Luego, introducimos las llaves p\xfablicas de ",Object(o.b)("inlineCode",{parentName:"p"},"owner")," y ",Object(o.b)("inlineCode",{parentName:"p"},"active")," para ejecutar el contrato. Estas pueden ser cualquiera de las que se generaron con el comando cleos create key anteriormente. Se recomienda no compartir las llaves privadas."),Object(o.b)("h2",{id:"administrar-la-billetera-con-cleos"},"Administrar la billetera con cleos"),Object(o.b)("p",null,"Una vez creada la cuenta, debemos generar la billetera e identificarla con el nombre de la cuenta, que en este ejemplo es ",Object(o.b)("inlineCode",{parentName:"p"},"holacontrato"),", mediante el comando ",Object(o.b)("inlineCode",{parentName:"p"},"cleos wallet create -n holacontrato --to-console"),"."),Object(o.b)("p",null,"En este momento, las llaves est\xe1n guardadas \xfanicamente en la consola, por lo que es necesario crear la billetera que contendr\xe1 las llaves. De esta manera, se podr\xe1 acceder a estas llaves con una \xfanica contrase\xf1a. Hay que importar las llaves en la billetera una a la vez, siguiendo el comando: ",Object(o.b)("inlineCode",{parentName:"p"},"cleos wallet import")," y a\xf1adiendo el nombre de la cuenta."),Object(o.b)("h2",{id:"autenticadores-externos-wallets"},"Autenticadores Externos (Wallets)"),Object(o.b)("p",null,"La \xfaltima actualizaci\xf3n importante para EOSJS incluy\xf3 soporte incorporado para proveedores de firmas intercambiables; eliminando la carga de manejar la gesti\xf3n segura de claves de su alcance y mejorando la interoperabilidad. Lo que es m\xe1s importante, esta es una mejora importante de seguridad que limita la exposici\xf3n de las claves de un usuario en muchas aplicaciones a un \xfanico proveedor de firmas confiable que mitiga los riesgos potenciales que pueden surgir de un c\xf3digo malicioso o un error del usuario al usar aplicaciones blockchain."))}d.isMDXComponent=!0}}]);