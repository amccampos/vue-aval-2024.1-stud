import{d as m,e as n,o as s,f as o,q as r,g as c,t as f,s as d}from"./vue.esm-bundler-WkGPkadr.js";const u=[{id:"cap",name:"Athlético-PR",flag:"athletico-pr.svg"},{id:"acg",name:"Atlético-GO",flag:"atletico-go.svg"},{id:"cam",name:"Atlético-MG",flag:"atletico-mg.svg"},{id:"bah",name:"Bahia",flag:"bahia.svg"},{id:"bot",name:"Botafogo",flag:"botafogo.svg"},{id:"rbb",name:"Bragantino",flag:"bragantino.svg"},{id:"cor",name:"Corinthians",flag:"corinthians.svg"},{id:"cri",name:"Criciúma",flag:"criciuma.svg"},{id:"cru",name:"Cruzeiro",flag:"cruzeiro.svg"},{id:"cui",name:"Cuiabá",flag:"cuiaba.svg"},{id:"fla",name:"Flamengo",flag:"flamengo.svg"},{id:"flu",name:"Fluminense",flag:"fluminense.svg"},{id:"for",name:"Fortaleza",flag:"fortaleza.svg"},{id:"gre",name:"Grêmio",flag:"gremio.svg"},{id:"int",name:"Internacional",flag:"internacional.svg"},{id:"juv",name:"Juventude",flag:"juventude.svg"},{id:"pal",name:"Palmeiras",flag:"palmeiras.svg"},{id:"sao",name:"São Paulo",flag:"sao-paulo.svg"},{id:"vas",name:"Vasco",flag:"vasco.svg"},{id:"vit",name:"Vitória",flag:"vitoria.svg"}],v=["src"],p=m({__name:"Team",props:{id:{},flag:{}},setup(l){const t=l,e=n(()=>u.find(a=>a.id===t.id)),g=n(()=>{var a;return`/flags/${(a=e.value)==null?void 0:a.flag}`});return(a,h)=>{var i;return s(),o("div",{class:"flex align-center w-fixed",style:d({flexDirection:a.flag==="left"?"row":"row-reverse"})},[a.flag?(s(),o("img",{key:0,src:g.value,width:"20",height:"20",class:"mx-5"},null,8,v)):r("",!0),c("span",null,f((i=e.value)==null?void 0:i.name),1)],4)}}});p.__docgenInfo={exportName:"default",displayName:"Team",description:"",tags:{},props:[{name:"id",required:!0,type:{name:"TeamId"}},{name:"flag",required:!1,type:{name:"union",elements:[{name:'"left"'},{name:'"right"'}]}}],sourceFiles:["/home/amccampos/fwjs/vue/vue-aval-2024.1/src/components/Team.vue"]};export{p as _,u as t};