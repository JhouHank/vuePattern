import{o as i,c as r,a as t,t as l,r as d,b as m,d as _,e as u,u as s}from"./index-1b5dc901.js";const h={__name:"Count",props:["count","increment","decrement"],setup(n){return(e,o)=>(i(),r("div",null,[t("p",null,"Counter: "+l(n.count),1),t("button",{onClick:o[0]||(o[0]=(...c)=>n.increment&&n.increment(...c)),class:"btn btn-primary"},"Increment"),t("button",{onClick:o[1]||(o[1]=(...c)=>n.decrement&&n.decrement(...c)),class:"btn btn-success"},"Decrement")]))}},p=t("p",null,"這裡是子組件",-1),f={__name:"Width",props:["width"],setup(n){return(e,o)=>(i(),r("div",null,[p,t("p",null,"寬度："+l(n.width),1)]))}};function w(n=0){const e=d(n);function o(){e.value++}function c(){e.value--}return{count:e,increment:o,decrement:c}}function v(){const n=d(0);function e(){n.value=window.innerWidth}return m(()=>{e(),window.addEventListener("resize",e)}),_(()=>{window.removeEventListener("resize",e)}),{width:n}}const b={class:"container"},C=t("h2",null,"Option API（選項式API）",-1),A={class:"App"},I=t("hr",null,null,-1),k=t("section",null,[t("h2",null,"Composition API（組合式API）")],-1),z={__name:"Composables",setup(n){const{count:e,increment:o,decrement:c}=w(0),{width:a}=v();return(x,B)=>(i(),r("div",b,[t("section",null,[C,t("div",A,[u(h,{count:s(e),increment:s(o),decrement:s(c)},null,8,["count","increment","decrement"]),I,u(f,{width:s(a)},null,8,["width"])])]),k]))}};export{z as default};