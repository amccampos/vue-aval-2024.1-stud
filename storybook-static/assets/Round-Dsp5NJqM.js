import{d as c,e as u,o as e,f as o,F as p,j as l,n as d}from"./vue.esm-bundler-WkGPkadr.js";import{_ as i}from"./Match-OmQC6OX4.js";import{m as _}from"./matches-m-C6lo1k.js";const f={class:"flex col align-center"},v=c({__name:"Round",props:{num:{}},setup(t){const s=t,r=u(()=>_.filter(a=>a.round===s.num));return(a,B)=>(e(),o("div",f,[(e(!0),o(p,null,l(r.value,(n,m)=>(e(),d(i,{teamA:n.teams[0],teamB:n.teams[1],key:m},null,8,["teamA","teamB"]))),128))]))}});v.__docgenInfo={exportName:"default",displayName:"Round",description:"",tags:{},props:[{name:"num",required:!0,type:{name:"number"}}],sourceFiles:["/home/amccampos/fwjs/vue/vue-aval-2024.1/src/components/Round.vue"]};export{v as _};