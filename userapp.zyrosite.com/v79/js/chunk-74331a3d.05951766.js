(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74331a3d"],{"7ef6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background",style:t.computedStyles})},r=[],c=(a("99af"),a("7db0"),a("d3b7"),a("07ac"),a("ac1f"),a("25f0"),a("3ca3"),a("1276"),a("ddb0"),a("2b3d"),a("d0af")),s=a("f3f3"),i=a("2f62"),o=a("f3a4"),u={name:"BlockBackground",props:{data:{type:Object,required:!0},id:{type:String,required:!0},isPreviewMode:{type:Boolean,required:!1},previewBlocks:{type:Array,default:function(){return[]}}},computed:Object(s["a"])({},Object(i["f"])(["website"]),{},Object(i["f"])("navigation",["navigationHeight"]),{pageBlocks:function(){var t=!this.$route.params.pagePath,e=t?this.website.meta.homepageId:"/".concat(this.$route.params.pagePath);return t?this.website.pages[e].blocks:Object.values(this.website.pages).find((function(t){return t.path===e})).blocks},computedStyles:function(){if(!this.data)return{};var t=this.isPreviewMode&&this.data.temporaryBackground&&this.website.blocks.navigation.background.isTransparent?this.data.temporaryBackground[this.data.current]:this.data[this.data.current],e="image"===this.data.current,a=e?this.getResponsiveImages(t):{"--background":t};return Object(s["a"])({"--margin-top":this.isNextToTransparentHeader?"".concat(-this.navigationHeight,"px"):0},a)},isNextToTransparentHeader:function(){var t=this.website.blocks.navigation.background.isTransparent;return(this.pageBlocks[0]===this.id||this.previewBlocks[0]===this.id)&&t}}),methods:{getResponsiveImages:function(t){if(o["b"].test(t)){var e=new URL(t),a=e.searchParams;"1080"===a.get("w")&&(a.delete("fm"),a.delete("crop"),a.delete("fit"),a.delete("cs"),a.set("q","70"),a.set("auto","format")),a.delete("w");var n=e.toString();return{"--background-400":"url(".concat(n,"&w=400)"),"--background-500":"url(".concat(n,"&w=500)"),"--background-800":"url(".concat(n,"&w=800)"),"--background-1370":"url(".concat(n,"&w=1370)")}}if((o["d"].test(t)||o["c"].test(t))&&!/\/_SITE-ASSETS\//.test(t)){var r=t.split(o["a"]),s=Object(c["a"])(r,2),i=s[0],u=s[1];return{"--background-400":"url(".concat(i,"-w400.").concat(u,")"),"--background-500":"url(".concat(i,"-w500.").concat(u,")"),"--background-800":"url(".concat(i,"-w800.").concat(u,")"),"--background-1370":"url(".concat(i,"-w1370.").concat(u,")")}}return{"--background":"url(".concat(t,")")}}}},d=u,p=(a("ef1c"),a("2877")),g=Object(p["a"])(d,n,r,!1,null,"755ed820",null);e["default"]=g.exports},d3e2:function(t,e,a){},ef1c:function(t,e,a){"use strict";var n=a("d3e2"),r=a.n(n);r.a},f3a4:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r})),a.d(e,"d",(function(){return c})),a.d(e,"c",(function(){return s}));var n=/\.(?=[^.]+$)/,r=/^https:\/\/images\.unsplash\.com/,c=/^https:\/\/assets\.zyrosite\.com/,s=/^http:\/\/zrassets\.s3-website\.eu-north-1\.amazonaws\.com\/00-images/}}]);