(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dfa47a1"],{"0d4f":function(t,e,r){},"1e71":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Input",{staticClass:"auto-height-textarea",style:t.style,attrs:{type:"textarea",placeholder:t.placeholder},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}})},i=[],a=(r("c5f6"),r("2ef0")),o=r.n(a),u={name:"autoHeightTextarea",props:{value:{type:[String,Number],default:""},placeholder:{type:String,default:""},height:{type:[String,Number],default:""}},data:function(){return{textarea:""}},computed:{style:function(){var t=[];return this.height&&t.push("height:".concat(this.height).concat(o.a.isNumber(this.height)?"px":"")),t.join(";")}},watch:{textarea:function(t){t!==this.value&&this.$emit("input",t)},value:function(t){t!==this.textarea&&(this.textarea=t)}},created:function(){this.textarea=this.value}},c=u,s=(r("c703"),r("2877")),l=Object(s["a"])(c,n,i,!1,null,null,null);e["a"]=l.exports},"738d":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:"height:"+t.height},[t._t("default")],2)},i=[],a=(r("ac6a"),r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("7f7f"),r("6b54"),r("6762"),r("2fdb"),r("c5f6"),r("a296"));function o(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=u(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw a}}}}function u(t,e){if(t){if("string"===typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){var e=document.querySelector(t);if(null===e)return 0;var r=window.getComputedStyle(e),n=parseFloat(r["marginTop"])+parseFloat(r["marginBottom"]);return Math.ceil(e.offsetHeight+n)}var l={name:"heightResize",props:{append:{type:Array,default:function(){return[]}},reduce:{type:Number,default:0},remove:{type:Array,default:function(){return[]}},ignore:{type:Boolean,default:!1}},data:function(){return{height:"auto"}},methods:{reportWindowSize:function(){this.resize()},resize:function(){var t,e=this,r=window.innerHeight,n=[".tool-select-block",".tool-category-menu-block",".ctool-bottom"],i=n.filter((function(t){return!e.remove.includes(t)})).concat(this.append),a=o(i);try{for(a.s();!(t=a.n()).done;){var u=t.value;r-=s(u)}}catch(c){a.e(c)}finally{a.f()}this.reduce>0&&(r-=this.reduce),r>100&&(r-=5),this.ignore||(this.height=r+"px"),this.$emit("resize",r)}},destroyed:function(){window.removeEventListener(a["b"],this.reportWindowSize)},mounted:function(){window.addEventListener(a["b"],this.reportWindowSize),this.resize()}},p=l,f=r("2877"),d=Object(f["a"])(p,n,i,!1,null,null,null);e["a"]=d.exports},aa77:function(t,e,r){var n=r("5ca1"),i=r("be13"),a=r("79e5"),o=r("fdef"),u="["+o+"]",c="​",s=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),p=function(t,e,r){var i={},u=a((function(){return!!o[t]()||c[t]()!=c})),s=i[t]=u?e(f):o[t];r&&(i[r]=s),n(n.P+n.F*u,"String",i)},f=p.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(l,"")),t};t.exports=p},aba9:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("option-block",{staticClass:"page-option-block"},[r("FormItem",{staticStyle:{width:"170px"}},[r("Input",{attrs:{type:"number"},model:{value:t.current.amount,callback:function(e){t.$set(t.current,"amount",e)},expression:"current.amount"}},[r("div",{attrs:{slot:"prepend"},slot:"prepend"},[t._v(t._s(t.$t("uuid_amount")))]),r("Button",{attrs:{slot:"append",icon:"md-refresh"},on:{click:function(e){return t.handle()}},slot:"append"})],1)],1),r("FormItem",{staticStyle:{width:"140px"}},[r("Input",{model:{value:t.current.delimiter,callback:function(e){t.$set(t.current,"delimiter",e)},expression:"current.delimiter"}},[r("div",{attrs:{slot:"prepend"},slot:"prepend"},[t._v(t._s(t.$t("uuid_delimiter")))])])],1),r("FormItem",[r("Checkbox",{model:{value:t.current.hyphens,callback:function(e){t.$set(t.current,"hyphens",e)},expression:"current.hyphens"}},[t._v(t._s(t.$t("uuid_hyphens")))])],1),r("FormItem",[r("Checkbox",{model:{value:t.current.isUpper,callback:function(e){t.$set(t.current,"isUpper",e)},expression:"current.isUpper"}},[t._v(t._s(t.$t("uuid_is_upper")))])],1),r("FormItem",[r("Checkbox",{model:{value:t.current.isAddQuote,callback:function(e){t.$set(t.current,"isAddQuote",e)},expression:"current.isAddQuote"}},[t._v(t._s(t.$t("uuid_is_add_quote")))])],1),r("FormItem",[r("Checkbox",{model:{value:t.current.uint8Array,callback:function(e){t.$set(t.current,"uint8Array",e)},expression:"current.uint8Array"}},[t._v(t._s(t.$t("uuid_uint8_array")))])],1)],1),r("heightResize",{attrs:{append:[".page-option-block"]}},[r("autoHeightTextarea",{attrs:{placeholder:t.$t("uuid_output")},model:{value:t.output,callback:function(e){t.output=e},expression:"output"}})],1)],1)},i=[],a=(r("a481"),r("6b54"),r("06e4"));function o(t){if(!Object(a["a"])(t))throw TypeError("Invalid UUID");var e,r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r}var u=o,c=r("ec26"),s=r("738d"),l=r("1e71"),p={components:{heightResize:s["a"],autoHeightTextarea:l["a"]},created:function(){this.$initToolData()},mounted:function(){this.current.result.length<1&&this.handle()},computed:{output:function(){var t=this;return this.current.result.length<1?"":this.current.result.map((function(e){return t.current.uint8Array&&(e="["+u(e).toString()+"]"),t.current.hyphens||(e=e.replace(/-/g,"")),e=t.current.isUpper?e.toUpperCase():e.toLowerCase(),t.current.isAddQuote&&(e='"'.concat(e,'"')),e})).join(this.current.delimiter.replace(/\\n/g,"\n"))}},methods:{handle:function(){for(var t=[],e=0,r=this.current.amount;e<r;e++)t.push(Object(c["a"])());this.current.result=t,this.$saveToolData(this.current)}},data:function(){return{current:{amount:10,delimiter:",\\n",hyphens:!0,isAddQuote:!1,isUpper:!1,uint8Array:!1,result:[]}}}},f=p,d=r("2877"),h=Object(d["a"])(f,n,i,!1,null,null,null);e["default"]=h.exports},c5f6:function(t,e,r){"use strict";var n=r("7726"),i=r("69a8"),a=r("2d95"),o=r("5dbc"),u=r("6a99"),c=r("79e5"),s=r("9093").f,l=r("11e9").f,p=r("86cc").f,f=r("aa77").trim,d="Number",h=n[d],m=h,v=h.prototype,y=a(r("2aeb")(v))==d,b="trim"in String.prototype,g=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():f(e,3);var r,n,i,a=e.charCodeAt(0);if(43===a||45===a){if(r=e.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var o,c=e.slice(2),s=0,l=c.length;s<l;s++)if(o=c.charCodeAt(s),o<48||o>i)return NaN;return parseInt(c,n)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof h&&(y?c((function(){v.valueOf.call(r)})):a(r)!=d)?o(new m(g(e)),r,h):g(e)};for(var x,I=r("9e1e")?s(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;I.length>_;_++)i(m,x=I[_])&&!i(h,x)&&p(h,x,l(m,x));h.prototype=v,v.constructor=h,r("2aba")(n,d,h)}},c703:function(t,e,r){"use strict";r("0d4f")},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);