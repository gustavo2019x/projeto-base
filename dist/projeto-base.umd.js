(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.ProjetoBase={},t.Vue))})(this,function(t,e){"use strict";const r={class:"bg-green-700 h-10 w-full text-lg flex items-center justify-between"},i={class:"bg-green-700 h-10 w-full"},o=e.defineComponent({__name:"HeaderPadrao",props:{textoHeader:String,textoFooter:String},setup(n){function d(){}return(l,s)=>(e.openBlock(),e.createElementBlock("div",null,[e.createElementVNode("header",r,[e.createElementVNode("div",null,e.toDisplayString(n.textoHeader),1),e.createElementVNode("button",{class:"text-white h-8 bg-green-900 p-1 w-40",onClick:d}," aaa")]),e.createElementVNode("footer",i,e.toDisplayString(n.textoFooter),1)]))}}),a={install:n=>{n.component("HeaderPadrao",o)}};t.HeaderPadrao=o,t.default=a,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
