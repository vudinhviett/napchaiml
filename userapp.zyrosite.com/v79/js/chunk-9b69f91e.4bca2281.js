(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b69f91e"],{2709:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("750b"),i=Object(o["g"])([]),r=Object(o["g"])(null),a=function(){var t=Object(o["a"])((function(){return i.value.length>0})),e=Object(o["a"])((function(){return i.value.length>1})),n=Object(o["a"])((function(){return i.value.length-1})),a=Object(o["a"])((function(){return r.value===i.value.length-1})),s=Object(o["a"])((function(){return 0===r.value})),u=Object(o["a"])((function(){return i.value[r.value]})),c=function(t){r.value=t},l=function(t){i.value=Array.isArray(t)?t:[t]},d=function(){return s.value?c(n.value):c(r.value-1)},g=function(){return a.value?c(0):c(r.value+1)},v=function(){l([]),c(null)},f=function(){e.value||v()},h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;l(t),c(e)},b=function(t){"ArrowRight"===t.key&&g(),"ArrowLeft"===t.code&&d(),"Escape"===t.code&&v()};return{lightboxImages:Object(o["a"])((function(){return i.value})),currentLightboxImageIndex:Object(o["a"])((function(){return r.value})),currentLightboxImage:u,lastImageIndex:n,isFirstImage:s,isLastImage:a,isLightboxOpen:t,isImageGaleryMode:e,setLightboxImages:l,setCurrentLightboxImageIndex:c,handleNavRight:g,handleNavLeft:d,handleLightboxNav:b,closeLightbox:v,addImagesToLightbox:h,onLightboxClickOutside:f}}},3394:function(t,e,n){"use strict";var o=n("c015"),i=n.n(o);i.a},"4a2f":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("99af"),n("a15b"),n("d81d"),n("d3b7"),n("ac1f"),n("25f0"),n("3ca3"),n("5319"),n("1276"),n("ddb0"),n("2b3d");var o=n("d0af"),i=n("750b"),r=n("f3a4"),a=[400,500,800,1370],s=function(t){var e=function(t){return a.map((function(e){return"".concat(t.replace(/\s*\{\s*width\s*\}\s*/i,e)," ").concat(e,"w")})).join(", ")},n=function(t){if(r["b"].test(t)){var n=new URL(t),i=n.searchParams;return"1080"===i.get("w")&&(i.delete("fm"),i.delete("crop"),i.delete("fit"),i.delete("cs"),i.set("q","70"),i.set("auto","format")),i.set("w","{width}"),e(decodeURI(n.toString()))}if((r["d"].test(t)||r["c"].test(t))&&!/\/_SITE-ASSETS\//.test(t)){var a=t.split(r["a"]),s=Object(o["a"])(a,2),u=s[0],c=s[1];return e("".concat(u,"-w{width}.").concat(c))}return t};return{title:Object(i["a"])((function(){return t.data.settings.alt})),src:Object(i["a"])((function(){return t.data.settings.image})),srcset:Object(i["a"])((function(){return n(t.data.settings.image)}))}}},"8fb2":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLightboxOpen?n("Portal",{attrs:{to:t.isPreviewMode?"lightbox-preview":"lightbox"}},[n("Transition",{attrs:{name:"fade",appear:""}},[t.isLightboxOpen?n("div",{staticClass:"lightbox",style:t.computedStyles,attrs:{role:"dialog","aria-modal":"true"}},[n("LightboxCloseButton",{staticClass:"lightbox__button lightbox__close-button",class:{"lightbox__close-button--preview-mode-desktop":t.isPreviewMode&&!t.isMobileView},attrs:{title:"close-ligthbox-button"},on:{"close-click":t.closeLightbox}}),n("div",{staticClass:"lightbox__container"},[t.isNavigationVisible?n("div",{staticClass:"lightbox__control-container",on:{click:t.handleNavLeft}},[n("LightboxNavButton",{staticClass:"lightbox__button",attrs:{title:"navigation-left-button"}})],1):t._e(),n("Transition",{attrs:{name:"fade",mode:"out-in"}},[n("img",{directives:[{name:"click-outside",rawName:"v-click-outside",value:{handler:t.closeLightbox,middleware:t.onLightboxClickOutside,events:["mousedown"]},expression:"{\n\t\t\t\t\t\t\thandler: closeLightbox,\n\t\t\t\t\t\t\tmiddleware: onLightboxClickOutside,\n\t\t\t\t\t\t\tevents: ['mousedown'],\n\t\t\t\t\t\t}"}],key:""+t.currentLightboxImage.src+t.currentLightboxImageIndex,ref:"lightboxRef",staticClass:"lightbox__image",class:{"lightbox__image--single":!t.isNavigationVisible,"lightbox__image--preview-mobile":t.isMobileView&&t.isImageGaleryMode},attrs:{draggable:t.isMobileView?"true":"false",src:t.currentLightboxImage.src,alt:t.currentLightboxImage.alt}})]),t.isNavigationVisible?n("div",{staticClass:"lightbox__control-container",on:{click:t.handleNavRight}},[n("LightboxNavButton",{staticClass:"lightbox__button lightbox__control-button--right",attrs:{title:"navigation-right-button"}})],1):t._e()],1)],1):t._e()])],1):t._e()},i=[],r=(n("96cf"),n("c964"));function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var s=!1;if("undefined"!==typeof window){var u={get passive(){s=!0}};window.addEventListener("testPassive",null,u),window.removeEventListener("testPassive",null,u)}var c="undefined"!==typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),l=[],d=!1,g=-1,v=void 0,f=void 0,h=function(t){return l.some((function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))}))},b=function(t){var e=t||window.event;return!!h(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},m=function(t){setTimeout((function(){if(void 0===f){var e=!!t&&!0===t.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;e&&n>0&&(f=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===v&&(v=document.body.style.overflow,document.body.style.overflow="hidden")}))},p=function(){setTimeout((function(){void 0!==f&&(document.body.style.paddingRight=f,f=void 0),void 0!==v&&(document.body.style.overflow=v,v=void 0)}))},w=function(t){return!!t&&t.scrollHeight-t.scrollTop<=t.clientHeight},x=function(t,e){var n=t.targetTouches[0].clientY-g;return!h(t.target)&&(e&&0===e.scrollTop&&n>0||w(e)&&n<0?b(t):(t.stopPropagation(),!0))},L=function(t,e){if(c){if(!t)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(t&&!l.some((function(e){return e.targetElement===t}))){var n={targetElement:t,options:e||{}};l=[].concat(a(l),[n]),t.ontouchstart=function(t){1===t.targetTouches.length&&(g=t.targetTouches[0].clientY)},t.ontouchmove=function(e){1===e.targetTouches.length&&x(e,t)},d||(document.addEventListener("touchmove",b,s?{passive:!1}:void 0),d=!0)}}else{m(e);var o={targetElement:t,options:e||{}};l=[].concat(a(l),[o])}},y=function(){c?(l.forEach((function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null})),d&&(document.removeEventListener("touchmove",b,s?{passive:!1}:void 0),d=!1),l=[],g=-1):(p(),l=[])},E=n("750b"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:function(e){return t.$emit("close-click")}}},[n("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M1 1L13 13",stroke:"#EBEFF2","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),n("path",{attrs:{d:"M13 1L1 13",stroke:"#EBEFF2","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])},I=[],k={name:"LightboxCloseButton"},O=k,M=n("2877"),A=Object(M["a"])(O,_,I,!1,null,null,null),j=A.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",[n("svg",{attrs:{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M7 1L0.999999 7L7 13",stroke:"#EBEFF2","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})])])},C=[],S={name:"LightboxNavButton"},N=S,R=Object(M["a"])(N,B,C,!1,null,null,null),T=R.exports,D=n("2709"),P=function(t){var e=t.move,n=void 0===e?{swipe:!1,drag:!1}:e,o=t.onMoveLeft,i=void 0===o?function(){}:o,r=t.onMoveRight,a=void 0===r?function(){}:r,s=t.onMoveUp,u=void 0===s?function(){}:s,c=t.onMoveDown,l=void 0===c?function(){}:c,d=null,g=null;function v(t){return t.touches}function f(t,e){if("drag"===e){var n=new Image;n.src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",t.dataTransfer.setDragImage(n,0,0)}var o="swipe"===e?v(t)[0]:t;d=o.clientX,g=o.clientY}var h=function(t,e){if(d&&g){var n="swipe"===e?t.touches[0].clientX:t.clientX,o="swipe"===e?t.touches[0].clientY:t.clientY,r=d-n,s=g-o;Math.abs(r)>Math.abs(s)?r>0?i():a():s>0?u():l(),d=null,g=null}},b=function(){n.swipe&&n.drag?(document.addEventListener("touchstart",(function(t){return f(t,"swipe")}),!1),document.addEventListener("touchmove",(function(t){return h(t,"swipe")}),!1),document.addEventListener("dragstart",(function(t){return f(t,"drag")}),!1),document.addEventListener("drag",(function(t){return h(t,"drag")}),!1)):(n.swipe||n.drag)&&(document.addEventListener(n.swipe?"touchstart":"dragstart",(function(t){return f(t,n.swipe?"swipe":"drag")}),!1),document.addEventListener(n.swipe?"touchmove":"drag",(function(t){return h(t,n.swipe?"swipe":"drag")}),!1))},m=function(){n.swipe&&n.drag?(document.removeEventListener("touchstart",f,!1),document.removeEventListener("touchmove",h,!1),document.removeEventListener("dragstart",f,!1),document.removeEventListener("drag",h,!1)):(n.swipe||n.drag)&&(document.removeEventListener(n.swipe?"touchstart":"dragstart",f,!1),document.removeEventListener(n.swipe?"touchmove":"drag",h,!1))};return{enableMoveEvents:b,disableMoveEvents:m}},V={name:"Lightbox",components:{LightboxCloseButton:j,LightboxNavButton:T},props:{isPreviewMode:{type:Boolean,default:!1},isMobileView:{type:Boolean,required:!0}},setup:function(t){var e=Object(D["a"])(),n=e.lightboxImages,o=e.currentLightboxImageIndex,i=e.currentLightboxImage,r=e.closeLightbox,a=e.isLightboxOpen,s=e.isFirstImage,u=e.isLastImage,c=e.isImageGaleryMode,l=e.onLightboxClickOutside,d=e.handleLightboxNav,g=e.handleNavRight,v=e.handleNavLeft,f=Object(E["g"])(null),h=P({move:t.isPreviewMode?{drag:!0,swipe:!0}:{swipe:!0,drag:!1},onMoveLeft:v,onMoveRight:g}),b=h.enableMoveEvents,m=h.disableMoveEvents,p=Object(E["a"])((function(){return{"--backdrop-position":t.isPreviewMode&&t.isMobileView?"absolute":"fixed"}})),w=Object(E["a"])((function(){return!t.isMobileView&&c.value}));return Object(E["e"])((function(){b(),window.document.addEventListener("keydown",d)})),Object(E["d"])((function(){m(),document.removeEventListener("keydown",d)})),{lightboxImages:n,currentLightboxImageIndex:o,currentLightboxImage:i,closeLightbox:r,isImageGaleryMode:c,isNavigationVisible:w,isFirstImage:s,isLastImage:u,isLightboxOpen:a,onLightboxClickOutside:l,handleNavRight:g,handleNavLeft:v,lightboxRef:f,computedStyles:p}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:L(t.$refs.lightboxRef);case 3:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){y()}},F=V,$=(n("d64e"),Object(M["a"])(F,o,i,!1,null,"2236e2dc",null));e["a"]=$.exports},b3d8:function(t,e,n){},c015:function(t,e,n){},d64e:function(t,e,n){"use strict";var o=n("b3d8"),i=n.n(o);i.a},e4be:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tagName,{tag:"Component",staticClass:"image",attrs:{href:t.href,target:t.target,title:t.title,to:t.to},on:{click:function(e){return t.$emit("image-click",e)}}},[n("img",t._g({staticClass:"image__image",class:{"image__image--zoom":t.isLightboxEnabled},attrs:{alt:t.title,src:t.renderSrc,srcset:t.renderSrcset}},{drag:t.preventDrag?function(t){return t.preventDefault()}:function(){return null},dragstart:t.preventDrag?function(t){return t.preventDefault()}:function(){return null}})),t._t("default")],2)},i=[],r=(n("caad"),["div","a","router-link"]),a={props:{href:{type:String,default:null},preventDrag:{type:Boolean,default:!1},shouldRender:{type:Boolean,default:!0},src:{type:String,required:!0},srcset:{type:String,default:null},tagName:{type:String,validator:function(t){return r.includes(t)},default:"div"},target:{type:String,default:null},title:{type:String,default:null},to:{type:String,default:null},isLightboxEnabled:{type:Boolean,default:!1}},computed:{renderSrc:function(t){var e=t.shouldRender,n=t.src;return e&&n},renderSrcset:function(t){var e=t.shouldRender,n=t.srcset;return e&&n}}},s=a,u=(n("3394"),n("2877")),c=Object(u["a"])(s,o,i,!1,null,"126f3cc0",null);e["a"]=c.exports},f3a4:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return a}));var o=/\.(?=[^.]+$)/,i=/^https:\/\/images\.unsplash\.com/,r=/^https:\/\/assets\.zyrosite\.com/,a=/^http:\/\/zrassets\.s3-website\.eu-north-1\.amazonaws\.com\/00-images/}}]);