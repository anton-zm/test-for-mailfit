(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{222:function(e,t,n){var content=n(230);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("492bdfde",content,!0,{sourceMap:!1})},223:function(e,t,n){var content=n(232);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("d998dcc0",content,!0,{sourceMap:!1})},224:function(e,t,n){var content=n(234);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("3104122e",content,!0,{sourceMap:!1})},225:function(e,t,n){var content=n(236);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(57).default)("1b7833da",content,!0,{sourceMap:!1})},226:function(e,t,n){"use strict";n.r(t);var r={props:["title"],components:{"content-box":n(228).a}},l=(n(231),n(29)),component=Object(l.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("content-box",[t("h2",{staticClass:"content-title"},[this._v(this._s(this.title))])])}),[],!1,null,"37cac035",null);t.default=component.exports},227:function(e,t,n){"use strict";n.r(t);n(39),n(26),n(40),n(27),n(41),n(28);var r={props:["array"],components:{"content-box":n(228).a},methods:{chooseCountry:function(e){Array.from(document.querySelectorAll(".nav-list__item")).forEach((function(e){e.classList.remove("navList__item_active"),event.target.classList.add("navList__item_active")})),this.slideFilter(e.name)},onloadRender:function(){var e=this;this.cities.forEach((function(t){e.renderSlide.push(t)}))},slideFilter:function(e){if(this.renderSlide=this.cities,"Все страны"!==e){var t=this.renderSlide.filter((function(t){return t.country===e}));return this.renderSlide=t}this.renderSlide=this.cities},openPanel:function(e){var t=event.clientX,n=window.innerWidth;n<769&&this.tablet(!0),t>n/3*2&&(e.panelLeft=!0),e.panel=!e.panel},tablet:function(a){return!!a}},data:function(){return{renderSlide:[],countries:[{name:"Все страны",active:!0},{name:"Италия",active:!1},{name:"Германия",active:!1},{name:"Греция",active:!1},{name:"Турция",active:!1},{name:"Испания",active:!1},{name:"Португалия",active:!1}],cities:[{name:"Милан",country:"Италия",img:"/milan.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Фрайбург",country:"Германия",img:"/friburg.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау2 – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Лиссабон",country:"Португалия",img:"/lisbon.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Виченца",country:"Италия",img:"/vicenca.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Барселона",country:"Испания",img:"/barselona.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Порту",country:"Португалия",img:"/porto.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Гуарда",country:"Португалия",img:"/guardo.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Генуя",country:"Италия",img:"/genoa.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Падуя",country:"Италия",img:"/padua.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Валенсия",country:"Испания",img:"/valensia.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Салоники",country:"Греция",img:"/saloniki.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Афины",country:"Греция",img:"/athens.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Каш",country:"Турция",img:"/kash.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Мадрид",country:"Испания",img:"/madrid.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Берлин",country:"Германия",img:"/berlin.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Анталия",country:"Турция",img:"/antalia.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Венеция",country:"Италия",img:"/vicenca.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."},{name:"Стамбул",country:"Турция",img:"/stambul.png",url:"",panel:!1,description:"Фрайбург-им-Брайсгау – оживленный университетский город в горах Шварцвальд на юго-западе Германии, известный своим умеренным климатом и восстановленным после войны средневековым Старым городом."}],swiperOption:{loop:!1,slidesPerView:6,slidesPerColumn:2,slidesPerColumnFill:"row",spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{220:{slidesPerView:2,spaceBetween:10,slidesPerColumn:2,slidesPerColumnFill:"row"},480:{slidesPerView:3,spaceBetween:20,slidesPerColumn:2,slidesPerColumnFill:"row"},860:{slidesPerView:4,spaceBetween:30,slidesPerColumn:2,slidesPerColumnFill:"row"},1280:{slidesPerView:6,spaceBetween:30,slidesPerColumn:2,slidesPerColumnFill:"row"}}}}},mounted:function(){this.onloadRender(),this.renderSlide.forEach((function(e){e.panelLeft=!1}))}},l=(n(233),n(29)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("content-box",{staticClass:"slider__content"},[n("ul",{staticClass:"nav-list"},e._l(e.countries,(function(t,r){return n("li",{key:r,staticClass:"nav-list__item",class:{navList__item_active:t.active},on:{click:function(n){return e.chooseCountry(t)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])})),0),e._v(" "),n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:e.swiperOption,expression:"swiperOption",arg:"mySwiper"}],staticClass:"slider"},[n("div",{staticClass:"swiper-wrapper"},e._l(e.renderSlide,(function(t,r){return n("div",{key:r,staticClass:"swiper-slide",class:{tablet_slide:e.tablet},on:{click:function(n){return n.target!==n.currentTarget?null:e.openPanel(t)}}},[n("img",{staticClass:"slider__img",attrs:{src:t.img,alt:t.name}}),e._v(" "),n("div",{staticClass:"slider__info"},[n("h3",{staticClass:"slider__title"},[e._v(e._s(t.name))]),e._v(" "),n("p",{staticClass:"slider__subtitle"},[e._v(e._s(t.country))]),e._v(" "),n("transition",{attrs:{name:"fade"}},[t.panel?n("div",{staticClass:"slider__panel",class:{slider__panel_left:t.panelLeft}},[n("p",{staticClass:"slider__panel-text"},[e._v("\n                "+e._s(t.description)+"\n              ")]),e._v(" "),n("nuxt-link",{staticClass:"slider__panel-btn",attrs:{to:t.url}},[e._v("Подробнее")]),e._v(" "),n("img",{staticClass:"slider__panel-close",attrs:{src:"close.png",alt:"Закрыть"},on:{click:function(e){t.panel=!1}}})],1):e._e()])],1)])})),0),e._v(" "),n("div",{staticClass:"swiper-pagination"})]),e._v(" "),n("div",{staticClass:"button-prev navigation",on:{click:function(t){return e.mySwiper.slidePrev()}}},[n("img",{attrs:{src:"pagL.png",alt:"предыдущий"}})]),e._v(" "),n("div",{staticClass:"button-next navigation",on:{click:function(t){return e.mySwiper.slideNext()}}},[n("img",{attrs:{src:"pagR.png",alt:"следующий"}})])])}),[],!1,null,"7bdef128",null);t.default=component.exports},228:function(e,t,n){"use strict";var r={},l=(n(229),n(29)),component=Object(l.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"746a40db",null);t.a=component.exports},229:function(e,t,n){"use strict";n(222)},230:function(e,t,n){(t=n(56)(!1)).push([e.i,".content[data-v-746a40db]{margin:0 auto;max-width:1170px}@media screen and (max-width:1280px){.content[data-v-746a40db]{padding:0 50px}}@media screen and (max-width:768px){.content[data-v-746a40db]{padding:0 20px}}",""]),e.exports=t},231:function(e,t,n){"use strict";n(223)},232:function(e,t,n){(t=n(56)(!1)).push([e.i,".content-title[data-v-37cac035]{font-weight:800;font-size:36px;line-height:53px;color:#fff}",""]),e.exports=t},233:function(e,t,n){"use strict";n(224)},234:function(e,t,n){(t=n(56)(!1)).push([e.i,'.nav-list[data-v-7bdef128]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;list-style-type:none;padding-left:0;margin:17px auto 32px 0}.nav-list__item[data-v-7bdef128]{font-style:normal;font-weight:500;font-size:16px;line-height:19px;color:#fff;margin:14px 17px 0;cursor:pointer}.nav-list__item[data-v-7bdef128]:first-of-type{margin:14px 17px 0 0}.navList__item_active[data-v-7bdef128]{background:#80a0f2;border-radius:8px;padding:8px 20px}.slider[data-v-7bdef128],.slider__content[data-v-7bdef128]{position:relative}.slider[data-v-7bdef128]{width:100%;padding-bottom:60px}.swiper-slide[data-v-7bdef128]{min-height:250px;display:flex;flex-direction:column;justify-content:flex-end;cursor:pointer}.swiper-pagination[data-v-7bdef128]{visibility:hidden;margin-top:20px}.swiper-pagination-bullet[data-v-7bdef128]{background:#fff}.swiper-pagination-bullet-active[data-v-7bdef128]{background:#0047ff}.slider__img[data-v-7bdef128]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;border-radius:8px}.slider__info[data-v-7bdef128]{margin:auto auto 17px 12px;font-size:16px;line-height:19px;color:#fff}.slider__title[data-v-7bdef128]{font-weight:500}.slider__subtitle[data-v-7bdef128]{font-weight:400}.button-prev[data-v-7bdef128]{left:-90px}.button-next[data-v-7bdef128],.button-prev[data-v-7bdef128]{position:absolute;bottom:250px}.button-next[data-v-7bdef128]{right:-90px}.swiper-button-next[data-v-7bdef128]:after,.swiper-button-prev[data-v-7bdef128]:after{content:""}.navigation[data-v-7bdef128]{background-color:transparent;width:40px;height:40px;display:flex;justify-content:center;align-items:center;border-radius:50%;cursor:pointer}.navigation[data-v-7bdef128]:hover{background:#0047ff;box-shadow:0 4px 5px rgba(0,0,0,.1)}.slider__panel[data-v-7bdef128]{position:absolute;top:0;right:-400px;width:400px;padding:25px 30px;background:linear-gradient(0deg,#254595,#254595);min-height:250px;box-shadow:0 10px 30px rgba(0,0,0,.4);border-top-right-radius:8px;border-bottom-right-radius:8px;z-index:2}.slider__panel_left[data-v-7bdef128]{position:absolute;top:0;left:-400px;border-top-left-radius:8px;border-bottom-left-radius:8px}.slider__panel-text[data-v-7bdef128]{font-weight:400;font-size:16px;line-height:140%;color:#fff}.slider__panel-btn[data-v-7bdef128]{margin-top:14px;border-radius:8px;border:2px solid #fff;color:#fff;text-decoration:none;padding:13px 21px;display:inline-block}.slider__paner-btn[data-v-7bdef128]:hover{border:none;background:#0047fe}.slider__panel-close[data-v-7bdef128]{position:absolute;top:25px;right:16px}.fade-enter-active[data-v-7bdef128],.fade-leave-active[data-v-7bdef128]{transition:opacity .5s}.fade-enter[data-v-7bdef128],.fade-leave-to[data-v-7bdef128]{opacity:0}.tablet_slide[data-v-7bdef128]{width:100%}@media screen and (max-width:768px){.swiper-pagination[data-v-7bdef128]{visibility:visible}.slider__panel[data-v-7bdef128],.swiper-slide[data-v-7bdef128]{min-height:330px}}',""]),e.exports=t},235:function(e,t,n){"use strict";n(225)},236:function(e,t,n){(t=n(56)(!1)).push([e.i,".main{padding-top:44px}",""]),e.exports=t},237:function(e,t,n){"use strict";n.r(t);var r=n(226),l=n(227),o={components:{Title:r.default,Slider:l.default}},d=(n(235),n(29)),component=Object(d.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"main"},[t("Title",{staticClass:"main__title",attrs:{title:"Наши направления"}}),this._v(" "),t("Slider")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Title:n(226).default,Slider:n(227).default})}}]);