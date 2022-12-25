"use strict";var o=require("vue");const x=o.defineComponent({__name:"contenteditable",props:{tag:String,contenteditable:{type:[Boolean,String],default:!0},modelValue:String,noHtml:{type:Boolean,default:!0},noNl:{type:Boolean,default:!1}},emits:{returned:String,"update:modelValue":String},setup(r,{expose:m,emit:d}){const n=r;function i(e,t,l){return e.split(t).join(l)}const a=o.ref();function c(){return n.noHtml?a.value.innerText:a.value.innerHTML}function f(){console.log("focuseeeed"),a.value.focus()}const p={a:1};function u(e){n.noHtml?a.value.innerText=e:a.value.innerHTML=e}function s(e){d("update:modelValue",c())}function g(e){e.preventDefault();let t=(e.originalEvent||e).clipboardData.getData("text/plain");n.noNl&&(t=i(t,`\r
`," "),t=i(t,`
`," "),t=i(t,"\r"," ")),window.document.execCommand("insertText",!1,t)}function v(e){e.key=="Enter"&&n.noNl&&(e.preventDefault(),d("returned",c()))}return o.onMounted(()=>{var e;u((e=n.modelValue)!=null?e:"")}),o.watch(()=>n.modelValue,(e,t)=>{e!=c()&&u(e!=null?e:"")}),o.watch(()=>n.noHtml,(e,t)=>{var l;u((l=n.modelValue)!=null?l:"")}),o.watch(()=>n.tag,(e,t)=>{var l;u((l=n.modelValue)!=null?l:"")},{flush:"post"}),m({onFocus:f,test:p}),(e,t)=>(o.openBlock(),o.createBlock(o.resolveDynamicComponent(r.tag),{contenteditable:r.contenteditable,onInput:s,onBlur:s,onPaste:g,onKeypress:v,onClick:f,ref_key:"element",ref:a},null,40,["contenteditable"]))}});module.exports=x;
