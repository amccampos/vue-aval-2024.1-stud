import{d as v,b as j,e as k,o as c,f as g,g as e,F as y,j as B,t as r,k as E}from"./vue.esm-bundler-WkGPkadr.js";import{_ as w,t as x}from"./Team-CPWi21Q7.js";const N=e("h2",null,"Classificação",-1),h=e("thead",null,[e("tr",null,[e("th",null,"#"),e("th",null,"Equipe"),e("th",null,"Pt"),e("th",null,"Jg"),e("th",null,"Vi"),e("th",null,"Em"),e("th",null,"De"),e("th",null,"Gp"),e("th",null,"Gc"),e("th",null,"Sg")])],-1),A=v({__name:"Ranking",setup(F){function i(n,s,o){n.pt+=3,n.jg++,n.vi++,n.gp+=s,n.gc+=o,n.sg=n.gp-n.gc}function p(n,s,o){n.jg++,n.de++,n.gp+=s,n.gc+=o,n.sg=n.gp-n.gc}function d(n,s){n.pt++,n.jg++,n.em++,n.gp+=s,n.gc+=s}function _(n,s){const o=n[1],l=s[1];if(o.pt!==l.pt)return l.pt-o.pt;if(o.sg!==l.sg)return l.sg-o.sg;if(o.gp!==l.gp)return l.gp-o.gp;const t=u==null?void 0:u.find(f=>f.teams[0]===n[0]&&f.teams[1]===s[0]);return t&&t.score&&t.score[0]!==t.score[1]?t.score[1]-t.score[0]:Math.random()-.5}const u=j("matches"),a=k(()=>{const n=new Map;return x.forEach(s=>n.set(s.id,{pt:0,jg:0,vi:0,em:0,de:0,gp:0,gc:0,sg:0})),u==null||u.forEach(s=>{if(s.score){const o=n.get(s.teams[0]),l=n.get(s.teams[1]);o&&l&&(s.score[0]===s.score[1]?(d(o,s.score[0]),d(l,s.score[0])):s.score[0]>s.score[1]?(i(o,s.score[0],s.score[1]),p(l,s.score[1],s.score[0])):(i(l,s.score[1],s.score[0]),p(o,s.score[0],s.score[1])))}}),[...n].sort(_)});return(n,s)=>(c(),g("div",null,[N,e("table",null,[h,e("tbody",null,[(c(!0),g(y,null,B(a.value,([o,l],t)=>(c(),g("tr",{style:{textAlign:"right"},key:o},[e("td",null,r(t+1),1),e("td",null,[E(w,{id:o,flag:"left"},null,8,["id"])]),e("td",null,r(l.pt),1),e("td",null,r(l.jg),1),e("td",null,r(l.vi),1),e("td",null,r(l.em),1),e("td",null,r(l.de),1),e("td",null,r(l.gp),1),e("td",null,r(l.gc),1),e("td",null,r(l.sg),1)]))),128))])])]))}});A.__docgenInfo={exportName:"default",displayName:"Ranking",description:"",tags:{},sourceFiles:["/home/amccampos/fwjs/vue/vue-aval-2024.1/src/components/Ranking.vue"]};export{A as _};
