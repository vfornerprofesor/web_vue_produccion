import{_ as r,o as i,c as o,b as c,h as m}from"./index-16751b7a.js";/* empty css                                              */const d={props:{width:{type:String},height:{type:String},centered:{type:Boolean}},computed:{elementStyles(){const t={};return this.width&&(t.width=this.width),this.height&&(t.height=this.height),this.centered&&(t.textAlign="center"),t}}},l={name:"Text",mixins:[d],props:{text:{type:String,required:!0}},methods:{formatText(t){return t.replace(/\*(.*?)\*/g,"<strong>$1</strong>").replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>')}}},p=["innerHTML"];function _(t,n,e,a,h,s){return i(),o("div",null,[c("p",{style:m(t.elementStyles),innerHTML:s.formatText(e.text)},null,12,p)])}const y=r(l,[["render",_]]),g={props:{imgProp:{type:String}},methods:{}},f={class:"div_img"},x=["src"];function u(t,n,e,a,h,s){return i(),o("div",f,[c("img",{src:e.imgProp,alt:"Imagen"},null,8,x)])}const S=r(g,[["render",u]]);export{S as I,y as T,d as m};
