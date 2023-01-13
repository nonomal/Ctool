import{u as v,i as k}from"./action-dcd662bd.js";import{c as T,a as b,T as s}from"./index-4f369466.js";import{s as A}from"./index-636623a5.js";import{A as I,bi as C,k as $,m as H,bj as i,aF as u,as as w,x as n,a$ as o}from"./history-5e0c3cab.js";import"./_commonjsHelpers-87174ba5.js";import"./index-69be48ff.js";const j=I({__name:"Sign",async setup(z){let a,m;const t=v(([a,m]=C(()=>k({input:T("text"),option:{private_key:"",user_id:"1234567812345678"},output:b("hex")})),a=await a,m(),a)),d=$(()=>{if(t.current.input.text.isEmpty()||t.current.option.private_key==="")return s.empty();if(t.current.input.text.isError())return t.current.input.text;try{return s.fromHex(A.sm2.doSignature(t.current.input.text.toArray(),t.current.option.private_key,{hash:!0,userId:t.current.option.user_id}))}catch(p){return s.fromError($error(p))}});return(p,e)=>{const _=u("TextInput"),c=u("Input"),l=u("Align"),f=u("HelpTip"),x=u("Card"),g=u("TextOutput"),y=u("HeightResize");return w(),H(y,{ignore:"",append:[".ctool-page-option"],reduce:10},{default:i(({small:V,large:h})=>[n(l,{direction:"vertical"},{default:i(()=>[n(_,{modelValue:o(t).current.input,"onUpdate:modelValue":e[0]||(e[0]=r=>o(t).current.input=r),height:V,upload:"file"},null,8,["modelValue","height"]),n(x,{title:p.$t("main_ui_config"),class:"ctool-page-option"},{extra:i(()=>[n(l,null,{default:i(()=>[n(f,{link:"https://github.com/JuneAndGreen/sm-crypto"})]),_:1})]),default:i(()=>[n(l,{horizontal:"center"},{default:i(()=>[n(c,{modelValue:o(t).current.option.private_key,"onUpdate:modelValue":e[1]||(e[1]=r=>o(t).current.option.private_key=r),label:p.$t("sm2_private_key")},null,8,["modelValue","label"]),n(c,{modelValue:o(t).current.option.user_id,"onUpdate:modelValue":e[2]||(e[2]=r=>o(t).current.option.user_id=r),label:p.$t("sm2_userId")},null,8,["modelValue","label"])]),_:1})]),_:1},8,["title"]),n(g,{modelValue:o(t).current.output,"onUpdate:modelValue":e[3]||(e[3]=r=>o(t).current.output=r),allow:["base64","hex"],content:d.value,height:h,onSuccess:e[4]||(e[4]=r=>o(t).save())},null,8,["modelValue","content","height"])]),_:2},1024)]),_:1},8,["append"])}}});export{j as default};
