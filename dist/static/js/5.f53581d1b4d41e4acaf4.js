webpackJsonp([5],{553:function(e,t,n){function r(e){n(562)}var s=n(24)(n(557),n(564),r,null,null);e.exports=s.exports},557:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{next:{type:Function,required:!0}},data:function(){return{msg:"",flag:!1,loading:!1,touchStart:0,distance:0}},mounted:function(){var e=this,t=this.$refs.pullRefresh,n=this.$refs.refreshMsg;t.addEventListener("touchstart",function(t){e.start(t)}),t.addEventListener("touchmove",function(r){e.moves(r,t,n)}),t.addEventListener("touchend",function(r){e.end(r,t,n)})},methods:{start:function(e){if(!(document.body.scrollTop>0))return this.loading?void e.preventDefault():void(this.touchStart=e.targetTouches[0].clientY)},moves:function(e,t,n){if(!(document.body.scrollTop>0)){if(!this.touchStart)return void e.preventDefault();var r=e.targetTouches[0];0===t.scrollTop&&(this.distance=r.clientY-this.touchStart,this.distance>80&&(e.preventDefault(),this.distance<160&&(t.style.overflow="inherit",t.style.transform="translate3D(0px, "+this.distance+"px, 0px)",n.style.height=this.distance+"px",n.style.lineHeight=this.distance+"px",this.distance>=120?(this.msg="释放刷新ヽ(￣▽￣)و",this.flag=!0):this.msg="下拉刷新(。＾▽＾)")))}},end:function(e,t,n){var r=this;if(!(document.body.scrollTop>0||this.distance<=80))return this.loading?void e.preventDefault():this.distance>80&&this.distance<120?(t.scrollTop=0,t.style.overflow="auto",t.style.transform="translate3D(0px, 0px, 0px)",n.style.height="50px",void(n.style.lineHeight="50px")):this.flag&&this.distance>120?(t.style.transform="translate3D(0px, 50px, 0px)",n.style.height="50px",n.style.lineHeight="50px",this.loading=!0,void this.next().then(function(){r.flag=!1,r.loading=!1,t.scrollTop=0,t.style.overflow="auto",t.style.transform="translate3D(0px, 0px, 0px)"})):void 0}}}},559:function(e,t,n){t=e.exports=n(551)(!0),t.push([e.i,".vue-pull-refresh{height:100%;overflow-y:auto;-webkit-transition:.33s;transition:.33s;-webkit-overflow-scrolling:touch}.vue-pull-refresh .vue-pull-refresh-msg{margin-top:-50px;height:50px;text-align:center;line-height:50px;border-bottom:2px solid #fb737a}.vue-pull-refresh .vue-pull-refresh-msg .hidenArea{color:#918ae1;font-weight:700;font-size:1.2em}.vue-pull-refresh .vue-pull-refresh-msg .hidenArea .svg-wrapper{background:#fff;border-radius:50%;width:2em;height:2em;vertical-align:middle;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.3),0 1px 4px rgba(0,0,0,.15);box-shadow:0 1px 6px rgba(0,0,0,.3),0 1px 4px rgba(0,0,0,.15)}.vue-pull-refresh .vue-pull-refresh-msg .icon-reverse{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transition:all .3s ease;transition:all .3s ease}.vue-pull-refresh .vue-pull-refresh-loading{-webkit-animation:loadRotate 1s linear infinite;animation:loadRotate 1s linear infinite}@-webkit-keyframes loadRotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes loadRotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}","",{version:3,sources:["D:/Vue/Vue-shop/src/components/pullRefreshs.vue"],names:[],mappings:"AACA,kBACE,YAAa,AACb,gBAAiB,AACjB,wBAAyB,AACzB,gBAAiB,AACjB,gCAAkC,CAEnC,AACD,wCACI,iBAAkB,AAClB,YAAa,AACb,kBAAmB,AACnB,iBAAkB,AAClB,+BAAiC,CACpC,AACD,mDACM,cAAe,AACf,gBAAkB,AAClB,eAAiB,CACtB,AACD,gEACQ,gBAAiB,AACjB,kBAAmB,AACnB,UAAW,AACX,WAAY,AACZ,sBAAuB,AACvB,2BAA4B,AAC5B,2BAA4B,AAC5B,oBAAqB,AACrB,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,sEAAgF,AACxE,6DAAwE,CACvF,AACD,sDACI,iCAAkC,AAC1B,yBAA0B,AAClC,gCAAiC,AACjC,uBAAyB,CAC5B,AACD,4CACI,gDAAiD,AACzC,uCAAyC,CACpD,AACD,8BACA,GACI,+BAAgC,AACxB,sBAAwB,CACnC,AACD,GACI,gCAAkC,AAC1B,uBAA0B,CACrC,CACA,AACD,sBACA,GACI,+BAAgC,AACxB,sBAAwB,CACnC,AACD,GACI,gCAAkC,AAC1B,uBAA0B,CACrC,CACA",file:"pullRefreshs.vue",sourcesContent:["\n.vue-pull-refresh {\n  height: 100%;\n  overflow-y: auto;\n  -webkit-transition: .33s;\n  transition: .33s;\n  -webkit-overflow-scrolling: touch;\n  /* ios5+ */\n}\n.vue-pull-refresh .vue-pull-refresh-msg {\n    margin-top: -50px;\n    height: 50px;\n    text-align: center;\n    line-height: 50px;\n    border-bottom: 2px solid #fb737a;\n}\n.vue-pull-refresh .vue-pull-refresh-msg .hidenArea {\n      color: #918AE1;\n      font-weight: bold;\n      font-size: 1.2em;\n}\n.vue-pull-refresh .vue-pull-refresh-msg .hidenArea .svg-wrapper {\n        background: #FFF;\n        border-radius: 50%;\n        width: 2em;\n        height: 2em;\n        vertical-align: middle;\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.15);\n                box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.15);\n}\n.vue-pull-refresh .vue-pull-refresh-msg .icon-reverse {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n}\n.vue-pull-refresh .vue-pull-refresh-loading {\n    -webkit-animation: loadRotate 1s linear infinite;\n            animation: loadRotate 1s linear infinite;\n}\n@-webkit-keyframes loadRotate {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes loadRotate {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n"],sourceRoot:""}])},562:function(e,t,n){var r=n(559);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(552)("115cc372",r,!0)},564:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"pullRefresh",staticClass:"vue-pull-refresh"},[n("div",{ref:"refreshMsg",staticClass:"vue-pull-refresh-msg"},[e.loading?n("div",{staticClass:"hidenArea"},[n("span",{staticClass:"svg-wrapper"},[n("svg",{staticClass:"vue-pull-refresh-loading",staticStyle:{width:"1.2em",height:"1.2em","vertical-align":"middle",fill:"currentColor",overflow:"hidden"},attrs:{t:"1497367491334",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1977"}},[n("path",{attrs:{d:"M486.75754 135.400013 402.25163 59.310554C388.509379 46.936957 387.96346 25.139993 400.208308 11.540621 412.822131-2.468343 433.957671-4.001381 447.930113 8.579401L601.089596 146.484825C605.090636 150.087331 607.97301 154.488612 609.74682 159.253816 614.767405 170.908986 613.043155 184.73657 603.956951 194.827778L466.051527 347.987261C453.677999 361.729512 431.880966 362.275431 418.281663 350.030583 404.27263 337.416761 402.739592 316.281152 415.320374 302.308778L504.712387 203.028852C300.714847 206.912339 136.539841 373.49343 136.539841 578.419721 136.539841 785.780633 304.639089 953.87988 512 953.87988 720.609624 953.87988 887.460159 790.22062 887.460159 584.090467 887.460159 517.424512 870.092464 453.371077 837.556793 396.914498 828.144212 380.58164 833.754269 359.710766 850.087128 350.298184 866.420054 340.885671 887.29086 346.49566 896.703442 362.828587 935.174114 429.583765 955.725642 505.37934 955.725642 584.090467 955.725642 828.220806 758.019723 1022.145363 512 1022.145363 266.937086 1022.145363 68.274358 823.482635 68.274358 578.419721 68.274358 341.828486 253.439157 148.484867 486.75754 135.400013Z","p-id":"1978",fill:"#F27981"}})])]),e._v("\n            努力加载中─=≡Σ(((つ•̀ω•́)つ\n        ")]):n("div",{staticClass:"hidenArea"},[n("span",{staticClass:"svg-wrapper"},[n("svg",{class:{"icon-reverse":e.flag},staticStyle:{width:"1rem",height:"1rem","vertical-align":"middle",fill:"currentColor",overflow:"hidden"},attrs:{t:"1497366759944",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1040"}},[n("path",{attrs:{d:"M921.6 563.2c-9.6-9.6-25.6-9.6-35.2 0L544 896l0-822.4c0-12.8-9.6-22.4-25.6-22.4s-25.6 9.6-25.6 22.4L492.8 896l-342.4-339.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 22.4 0 32l384 377.6c6.4 6.4 12.8 6.4 19.2 6.4 0 0 0 0 0 0 3.2 0 3.2 0 6.4 0 0 0 0 0 3.2 0 3.2 0 6.4-3.2 9.6-6.4l380.8-371.2C931.2 588.8 931.2 572.8 921.6 563.2z","p-id":"1041",fill:"#F27981"}})])]),e._v("\n            "+e._s(e.msg)+"\n        ")]),e._v(" "),e._t("list")],2)])},staticRenderFns:[]}}});
//# sourceMappingURL=5.f53581d1b4d41e4acaf4.js.map