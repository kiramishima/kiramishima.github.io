(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{243:function(t,e,n){"use strict";n.r(e);n(233);var r=n(114),c=n(115),o=n(236),l=n(237),f=n(234),d=n(20),v=(n(49),n(235)),h=n(240);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},w=function(t){Object(o.a)(n,t);var e=y(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"mounted",value:function(){var t=this.createTimeline();t.add({targets:this.$refs.btnStart,translateX:window.screen.width/3-10,translateY:window.screen.height/3+100,rotate:360,duration:1300,easing:"easeInOutExpo",direction:"alternate"}),t.play()}},{key:"createTimeline",value:function(){return h.a.timeline({autoplay:!1})}},{key:"enterButton",value:function(){Object(h.a)({targets:this.$refs.btnStart,scale:1.2,duration:1500,elasticity:400})}},{key:"leaveButton",value:function(){Object(h.a)({targets:this.$refs.btnStart,scale:1,duration:600,elasticity:300})}},{key:"onStartBtn",value:function(){this.$emit("status","START_GAME")}}]),n}(v.Vue),j=w=O([v.Component],w),m=n(42),component=Object(m.a)(j,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"btnStart",staticClass:"bg-green-500 p-3 w-20 font-medium text-white rounded-md text-center",on:{click:t.onStartBtn,mouseenter:function(e){return t.enterButton()},mouseleave:function(e){return t.leaveButton()}}},[t._v("\n  ENTER\n")])}),[],!1,null,null,null);e.default=component.exports}}]);