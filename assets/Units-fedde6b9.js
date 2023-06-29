import{T as i}from"./Title-d8b26c6c.js";import{U as n}from"./Unit-ae79a727.js";import{C as c}from"./Content-9789efeb.js";import{R as s,C as l}from"./Column-704f71a7.js";import{_ as y,o as g,c as b,b as p,r as h,F as v,p as A,d as w,n as x,a as e,w as t}from"./index-11cf83a4.js";import"./urls-533c826e.js";/* empty css                                                             */const k={props:{id_accordeon:{type:String,required:!0}},mounted(){this.handleOnLoad()},methods:{clicAccordeon(a){var d=document.querySelectorAll('[id_own="'+a+'"]')[0],_=d.getAttribute("closed");if(_=="true"){console.log("Mostrant ",a);var m=document.querySelectorAll('[id_parent="'+a+'"]');for(var o of m)o.classList.remove("accordion-hide"),o.offsetWidth,o.classList.add("accordion-show");var u=d.getElementsByClassName("accordion-arrow")[0];u&&u.classList.add("accordion-arrow-up"),d.setAttribute("closed","false")}else{console.log("Ocultant ",a);var m=document.querySelectorAll('[id_parent="'+a+'"]');for(var o of m){o.classList.remove("accordion-show"),o.offsetWidth,o.classList.add("accordion-hide");var f=o.getAttribute("id_own"),C=o.getAttribute("closed");f&&C=="false"&&this.clicAccordeon(f)}var u=d.getElementsByClassName("accordion-arrow")[0];u&&u.classList.remove("accordion-arrow-up"),d.setAttribute("closed","true")}},handleOnLoad(){var a=document.querySelectorAll('[closed="true"]');for(var d of a){var _=d.getAttribute("id_own"),m=document.querySelectorAll('[id_parent="'+_+'"]');for(var o of m)o.classList.add("accordion-hide")}}}},S=a=>(A("data-v-4da25c24"),a=a(),w(),a),L=["id_own"],I=S(()=>p("span",{class:x(["accordion-arrow",{"accordion-arrow-up":!1}])},null,-1)),q=["id_parent"];function B(a,d,_,m,o,u){return g(),b(v,null,[p("div",{class:"div_accordion",onClick:d[0]||(d[0]=f=>u.clicAccordeon(_.id_accordeon)),id_own:_.id_accordeon,closed:"true"},[I,h(a.$slots,"header",{},void 0,!0)],8,L),p("div",{id_parent:_.id_accordeon},[h(a.$slots,"content",{},void 0,!0)],8,q)],64)}const r=y(k,[["render",B],["__scopeId","data-v-4da25c24"]]),P={components:{Title:i}},E=Object.assign(P,{__name:"Units",setup(a){return(d,_)=>(g(),b(v,null,[e(i,{title:"Unitats",number:1}),e(c,null,{default:t(()=>[e(r,{id_accordeon:"programacio"},{header:t(()=>[e(i,{title:"Programació",number:2})]),content:t(()=>[e(r,{id_accordeon:"basic"},{header:t(()=>[e(i,{title:"Bàsic",number:3})]),content:t(()=>[e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"pensament_computacional",link_page_name:"pensament_computacional",title:"Pensament Computacional"})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{id_accordeon:"blocs"},{header:t(()=>[e(i,{title:"Blocs",number:3})]),content:t(()=>[e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"scratch",link_page_name:"scratch",title:"Scratch"})]),_:1}),e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"app_inventor",link_page_name:"app_inventor",title:"App Inventor"})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{id_accordeon:"python"},{header:t(()=>[e(i,{title:"Python",number:3})]),content:t(()=>[e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"python",link_page_name:"python",title:"Python"})]),_:1}),e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"python2",link_page_name:"python2",title:"Python II"})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{id_accordeon:"web"},{header:t(()=>[e(i,{title:"Web",number:3})]),content:t(()=>[e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"html",link_page_name:"html",title:"HTML"})]),_:1}),e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"css",link_page_name:"css",title:"CSS"})]),_:1}),e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"php",link_page_name:"php",title:"PHP"})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{id_accordeon:"base_de_dades"},{header:t(()=>[e(i,{title:"Base de dades",number:3})]),content:t(()=>[e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"mysql",link_page_name:"mysql",title:"MySQL"})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{id_accordeon:"robotica"},{header:t(()=>[e(i,{title:"Robòtica",number:3})]),content:t(()=>[e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"microbit",link_page_name:"microbit",title:"Microbit"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{id_accordeon:"aplicacions_web"},{header:t(()=>[e(i,{title:"Aplicacions Web",number:2})]),content:t(()=>[e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"wordpress",link_page_name:"wordpress",title:"Wordpress"})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{id_accordeon:"inteligencia_artificial"},{header:t(()=>[e(i,{title:"Intel·ligència Artificial",number:2})]),content:t(()=>[e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"ia",link_page_name:"ia",title:"Conceptes bàsics IA"})]),_:1}),e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"ia_ferramentes",link_page_name:"ia_ferramentes",title:"Ferramentes IA"})]),_:1})]),_:1})]),_:1})]),_:1}),e(r,{id_accordeon:"ofimatica"},{header:t(()=>[e(i,{title:"Ofimàtica",number:2})]),content:t(()=>[e(c,null,{default:t(()=>[e(s,null,{default:t(()=>[e(l,{additionalClass:"text-center"},{default:t(()=>[e(n,{img_name:"full_calcul",link_page_name:"full_calcul",title:"Full de càlcul"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64))}});export{E as default};
