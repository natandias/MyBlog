(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{408:function(s,a,t){s.exports=t.p+"assets/img/structure.b850e192.png"},443:function(s,a,t){"use strict";t.r(a);var n=t(11),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"criando-um-projeto"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#criando-um-projeto"}},[s._v("#")]),s._v(" Criando um projeto")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" create nuxt-app "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("projectName"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),n("h2",{attrs:{id:"estrutura-do-projeto"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#estrutura-do-projeto"}},[s._v("#")]),s._v(" Estrutura do projeto")]),s._v(" "),n("p",[n("img",{attrs:{src:t(408),alt:"Estrutura"}})]),s._v(" "),n("h2",{attrs:{id:"como-usar-variaveis-css-ou-sass-global"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#como-usar-variaveis-css-ou-sass-global"}},[s._v("#")]),s._v(" Como usar variáveis CSS ou SASS Global")]),s._v(" "),n("ol",[n("li",[s._v("Instale o pacote @nuxtjs/style-resources;")])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @nuxtjs/style-resources -D\n")])])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v('Se for usar SASS, instale os pacotes "node-sass" e "sass-loader".')])]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" node-sass sass-loader -D\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[n("p",[s._v("Dentro da pasta "),n("em",[s._v("assets,")]),s._v(" crie uma pasta "),n("em",[s._v("styles")]),s._v(", e insira seu arquivo css global.")])]),s._v(" "),n("li",[n("p",[s._v("No arquivo "),n("em",[s._v("nuxt.config.js,")]),s._v(" edite as seguintes configurações:")])])]),s._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[s._v("\ncss"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~/assets/styles/global.css"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\nbuildModules"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@nuxtjs/style-resources"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\nstyleResources"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    scss"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~/assets/styles/*.scss"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),n("ol",{attrs:{start:"5"}},[n("li",[s._v("Pronto, tudo configurado, agora por exemplo, você pode colocar variáveis em global.css e usá-las em seus componentes.")])]),s._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// assets/styles/global.css")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("root "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("primary"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("color"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// components/Navbar.vue")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n  ")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("nav")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("nav")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),n("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\nnav {\n  background: var(--primary-color);\n}\n")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),n("h2",{attrs:{id:"como-usar-css-global"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#como-usar-css-global"}},[s._v("#")]),s._v(" Como usar CSS Global")]),s._v(" "),n("p",[s._v("Insira o CSS em layouts/default.vue")]),s._v(" "),n("h2",{attrs:{id:"editando-css-com-devtools-do-browser"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#editando-css-com-devtools-do-browser"}},[s._v("#")]),s._v(" Editando CSS com DevTools do Browser")]),s._v(" "),n("p",[s._v("Para usar o DevTools com SASS sem bugs, adicione o seguinte código em "),n("em",[s._v("nuxt.config.js")]),s._v(".")]),s._v(" "),n("div",{staticClass:"language-jsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-jsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// nuxt.config.js")]),s._v("\n\nbuild"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    loaders"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      scss"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" sourceMap"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      vue"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" cacheBusting"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    cssSourceMap"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);