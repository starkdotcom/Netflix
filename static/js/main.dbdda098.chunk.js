(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{27:function(e,t,n){},39:function(e,t,n){},57:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(28),i=n.n(s),l=n(9),r=(n(39),n(2)),o=Object(c.createContext)(),d=n(12),j=n.n(d),u=n(8),b=(n(57),"api_key=a16f75b2ad11198ee57fcf54e8034a06"),h="https://image.tmdb.org/t/p/w200",m="trending/all/week?".concat(b,"&language=en-US&with_network=213"),g="trending/tv/week?".concat(b,"&language=en-US&with_network=213"),v="trending/movie/week?".concat(b,"&language=en-US&with_network=213"),O="discover/tv?".concat(b,"&with_network=213"),x="discover/movie?".concat(b,"&with_genres=28&with_network=213"),f="&language=en-US",p=("https://api.themoviedb.org/3/discover/movie?".concat(b,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"),"/videos?".concat(b,"&language=en-US")),N="https://api.themoviedb.org/3/search/multi?".concat(b,"&language=en-US&page=1&include_adult=false"),_=n(0);function w(){var e=Object(r.f)(),t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],s=n[1],i=Object(c.useCallback)((function(){e.push("/search?query=".concat(a,"&id=",null,"&show=",null)),s("")}),[e,a]),d=Object(c.useState)([]),b=Object(l.a)(d,2),h=b[0],m=b[1],g=Object(c.useContext)(o).setDetail,v=h.name||h.title||h.orginal_title||h.orginal_name;Object(c.useEffect)((function(){!function(e){if(""!==a)j.a.get(N+"&query=".concat(a)).then((function(t,n){if(0===t.data.results.length){e({id:!1})}else{var c=t.data.results[0];e(c)}})).catch((function(t){e({id:!1})}));else{e({id:!1})}}(m)}),[a]);return Object(_.jsx)("div",{className:"navbar",children:Object(_.jsxs)("ul",{children:[Object(_.jsxs)("li",{className:"navElement netflix",children:[" ",Object(_.jsx)(u.b,{to:"/",children:Object(_.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix"})})]}),Object(_.jsxs)("li",{className:"navElement a tv",children:[" ",Object(_.jsx)(u.b,{to:"/tvshows",children:"Tv Shows"})]}),Object(_.jsxs)("li",{className:"navElement a movie",children:[" ",Object(_.jsx)(u.b,{to:"/movies",children:"Movies"})]}),Object(_.jsxs)("li",{className:"navElement search",children:[Object(_.jsxs)("div",{className:"input-group",children:[Object(_.jsxs)("div",{className:"form-outline",children:[Object(_.jsx)("input",{type:"search",value:a,onChange:function(e){s(e.target.value)},onKeyPress:function(e){13!==e.keyCode&&13!==e.which||i()},className:"form-control",placeholder:"Search"}),Object(_.jsxs)("div",{className:"form-notch",children:[Object(_.jsx)("div",{className:"form-notch-leading",style:{width:"9px"}}),Object(_.jsx)("div",{className:"form-notch-middle",style:{width:"56.8px"}}),Object(_.jsx)("div",{className:"form-notch-trailing"})]})]}),Object(_.jsx)("button",{type:"button",onClick:""!==a?function(){return i()}:null,className:"btn btn-primary ripple-surface",children:Object(_.jsx)("img",{src:"magnifying-glass.png",alt:"\ud83d\udd0d",width:"20",height:"20"})})]}),void 0!==h.id&&!1!==h.id&&""!==a?Object(_.jsx)(u.b,{to:"/search?id=".concat(h.id,"&query=",null,"&show=").concat(h.media_type),children:Object(_.jsx)("div",{className:"searchResult",children:Object(_.jsxs)("div",{onClick:function(){g(h),s("")},children:[Object(_.jsx)("span",{style:{fontSize:v.length>8?"1rem":"1.8rem"},children:h.name||h.title||h.orginal_title||h.orginal_name})," ",Object(_.jsx)("div",{children:h.poster_path?Object(_.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500"+h.poster_path),alt:"".concat(h.name)}):null})]})})}):null]}),Object(_.jsxs)("li",{className:"navElement user",children:[" ",Object(_.jsx)("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar"})]})]})})}var y=j.a.create({baseURL:"https://api.themoviedb.org/3/"});n(64);var k=function(){var e=Object(c.useContext)(o),t=e.handleTrailer,n=e.setDetail,a=Object(c.useState)([]),s=Object(l.a)(a,2),i=s[0],d=s[1];Object(c.useEffect)((function(){y.get("".concat(m)).then((function(e){var t,n,c=(t=0,n=19,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1)+t));d(e.data.results[c])}))}),[]);var j=i.name||i.title||i.orginal_title||i.orginal_name,u=Object(r.f)();return Object(_.jsxs)("div",{className:"banner",style:{backgroundImage:"url(".concat(void 0!==i.backdrop_path?"https://image.tmdb.org/t/p/original"+i.backdrop_path:"",")")},children:[Object(_.jsxs)("div",{className:"content",children:[Object(_.jsx)("h2",{className:"title",style:{fontSize:j?j.length>18?"1rem":j.length>8?"1.8rem":"2.8rem":"2rem"},children:i?i.name||i.title||i.orginal_title||i.orginal_name:null}),Object(_.jsxs)("div",{className:"bannerButtons",children:[Object(_.jsx)("button",{onClick:function(){return t(i.id)},className:"button play",children:"Play"}),Object(_.jsx)("button",{type:"button",className:"button list",onClick:function(){return i?(e=i.id,t=i.media_type,n(null),void u.push("/search?id=".concat(e,"&query=",null,"&show=").concat(t))):null;var e,t},children:"More"})]}),Object(_.jsx)("h3",{className:"description",children:i?i.overview:null})]}),Object(_.jsx)("div",{className:"fade_bottom"})]})},S=(n(27),n(65),n(30)),I=n.n(S);var C=function(e){var t=e.obj,n=e.i,a=e.handleTrailer,s=Object(c.useState)(!1),i=Object(l.a)(s,2),d=i[0],j=i[1],u=Object(c.useContext)(o).setDetail,b=t.name||t.title||t.orginal_title||t.orginal_name,m=Object(r.f)();return Object(_.jsx)("div",{className:"card",children:Object(_.jsxs)(I.a,{isFlipped:d,flipDirection:"horizontal",children:[Object(_.jsx)("div",{onMouseEnter:function(){return j(!0)},onTouchStart:function(){j(!0)},className:"card_front",children:Object(_.jsx)("img",{src:t.poster_path?"".concat(h).concat(t.poster_path):"logo2.png",alt:b,className:"poster"},n)}),Object(_.jsx)("div",{style:{boxShadow:" 0 8px 32px 0 rgba(31, 38, 135, 0.37)",background:"url(".concat(t.poster_path?h+t.poster_path:"logo2.png",")  center center / contain")},children:Object(_.jsxs)("div",{onTouchEnd:function(){j(!1)},onMouseLeave:function(){return j(!1)},className:"card_back",children:[Object(_.jsx)("div",{className:"card_title",children:b}),Object(_.jsx)("button",{className:"bttn l",onClick:function(){a(t.id)},children:"Play"}),Object(_.jsx)("button",{onClick:function(){var e,n;e=t.id,n=t.media_type,u(null),m.push("/search?id=".concat(e,"&query=",null,"&show=").concat(n))},className:"bttn r",children:"More"})]})})]})})},E=n(31),D=n.n(E);var T=function(e){var t=Object(c.useContext)(o).handleTrailer,n=Object(c.useState)([]),a=Object(l.a)(n,2),s=a[0],i=a[1];Object(c.useEffect)((function(){y.get(e.url).then((function(e){i(e.data.results)}))}),[e.url]);var r=Object(c.useRef)(null),d=D()({sliderRef:r,momentumVelocity:.9}).hasSwiped;return Object(_.jsxs)("div",{className:"row",children:[Object(_.jsx)("h2",{className:"rowTitle",children:e.title}),Object(_.jsx)("div",{className:"posters",ref:r,children:s.map((function(e,n){return Object(_.jsx)(C,{obj:e,handleTrailer:t,onClick:function(e){d&&e.preventDefault()}},n)}))})," "]})},U=n(32),V=(n(77),function(e){var t=e.videoId,n=e.setVideoId,c=e.opts;return Object(_.jsx)("div",{className:"float-video",children:Object(_.jsxs)("div",{className:"video",children:[Object(_.jsx)("button",{onClick:function(){return n(null)},className:"btn close-video",children:"Close X"}),Object(_.jsx)(U.a,{videoId:t,opts:c})]})})});var A=function(){var e=Object(c.useContext)(o),t=e.videoId,n=e.setVideoId,a=e.opts;return Object(c.useEffect)((function(){}),[t]),Object(_.jsxs)("div",{children:[Object(_.jsx)(k,{}),null!==t?Object(_.jsx)(V,{className:"",videoId:t,setVideoId:n,opts:a}):null,Object(_.jsxs)("div",{className:"post",children:[Object(_.jsx)(T,{title:"Trending",url:m}),Object(_.jsx)(T,{title:"Netflix Orginals",url:O}),Object(_.jsx)(T,{title:"Action",url:x})]})]})};var M=function(){var e=Object(c.useContext)(o),t=e.videoId,n=e.setVideoId,a=e.opts;return Object(_.jsxs)("div",{children:[Object(_.jsx)(k,{}),null!==t?Object(_.jsx)(V,{className:"",videoId:t,setVideoId:n,opts:a}):null,Object(_.jsxs)("div",{className:"post",children:[Object(_.jsx)(T,{title:"Trending",url:g}),Object(_.jsx)(T,{title:"Netflix Orginals",url:O})]})]})};var L=function(){var e=Object(c.useContext)(o),t=e.videoId,n=e.setVideoId,a=e.opts;return Object(_.jsxs)("div",{children:[Object(_.jsx)(k,{}),null!==t?Object(_.jsx)(V,{className:"",videoId:t,setVideoId:n,opts:a}):null,Object(_.jsxs)("div",{className:"post",children:[Object(_.jsx)(T,{title:"Trending",url:v}),Object(_.jsx)(T,{title:"Action",url:x})]})]})};n(78);var R=function(){return Object(_.jsx)("div",{className:"footer",children:Object(_.jsx)("span",{className:"footer-content",children:"\xa9 Krishnanunni Sunil 2021"})})};n(79);var q=function(e){var t=e.searchId,n=e.show,a=Object(c.useContext)(o),s=a.videoId,i=a.setVideoId,l=a.opts,r=Object(c.useContext)(o),d=r.detail,j=r.setDetail,u=r.handleTrailer;Object(c.useEffect)((function(){null!==d&&void 0!==d||y.get("".concat(n,"/").concat(t,"?").concat(b).concat(f)).then((function(e){j(e.data)})).catch((function(){"undefined"===n&&y.get("tv/".concat(t,"?").concat(b).concat(f)).then((function(e){j(e.data)})).catch((function(){y.get("movie/".concat(t,"?").concat(b).concat(f)).then((function(e){j(e.data)}))}))}))}));var m=d?d.name||d.title||d.orginal_title||d.orginal_name:null;return Object(_.jsxs)("div",{className:"detail",children:[null!==s?Object(_.jsx)(V,{className:"",videoId:s,setVideoId:i,opts:l}):null,Object(_.jsxs)("div",{className:"contentDetail",children:[Object(_.jsxs)("div",{className:"md left",children:[Object(_.jsx)("div",{className:"md titleDetail",style:{fontSize:m?m.length>17?"1.5rem":m.length>8?"2rem":"2.8rem":"2rem"},children:d?d.name||d.title||d.orginal_title||d.orginal_name:null}),Object(_.jsx)("div",{className:"md overviewDetail",children:d?Object(_.jsxs)("div",{children:[d.tagline?Object(_.jsx)("h3",{children:d.tagline}):null,Object(_.jsx)("i",{className:"badge",children:d.adult?"A":"U/A"}),d.genres?d.genres.map((function(e,t){return Object(_.jsx)("span",{className:"badge",children:e.name},t)})):null,d.vote_average?Object(_.jsxs)("i",{className:"badge",children:["\u2b50",d.vote_average]}):null,Object(_.jsxs)("p",{className:"about",children:[" ",d.overview]}),Object(_.jsx)("hr",{}),Object(_.jsx)("p",{children:d.languages?"Languages : "+d.languages.map((function(e){return" "+e})):d.original_language?"Language : "+d.original_language:null}),Object(_.jsx)("p",{children:d.release_date?"Release Date :      "+d.release_date:"First Aired On :    "+d.first_air_date}),Object(_.jsx)("p",{children:d.number_of_seasons?"Number of Seasons : "+d.number_of_seasons:null})]}):null})]}),Object(_.jsx)("div",{className:"md right",children:Object(_.jsxs)("div",{className:"imgBtn",children:[Object(_.jsx)("img",{style:{backgroundImage:"url(logo2.png)"},className:"posterImage md ",src:d?h+d.poster_path:"logo2.png",alt:""}),Object(_.jsx)("button",{className:"btn play",onClick:function(){var e=d.id;u(e)},children:Object(_.jsx)("img",{src:"playbtn.png",alt:"\u25b6",width:"30",height:"30"})})]})}),Object(_.jsx)("div",{className:"sm top",children:Object(_.jsxs)("div",{className:"imgBtn",children:[d?console.log(d.poster_path):"not true",Object(_.jsx)("img",{style:{backgroundImage:"url(logo2.png)"},className:"sm posterImage",src:d?h+d.poster_path:"logo2.png",alt:""}),Object(_.jsx)("button",{className:"btn play",onClick:function(){var e=d.id;u(e)},children:Object(_.jsx)("img",{src:"playbtn.png",alt:"\u25b6",width:"30",height:"30"})})]})}),Object(_.jsxs)("div",{className:"sm bottom",children:[Object(_.jsx)("div",{className:"sm titleDetail",style:{fontSize:m?m.length>17?"1.5rem":m.length>8?"2rem":"2.8rem":"2rem"},children:d?d.name||d.title||d.orginal_title||d.orginal_name:null}),Object(_.jsx)("div",{className:"sm overviewDetail",children:d?Object(_.jsxs)("div",{className:"sm",children:[d.tagline?Object(_.jsx)("h3",{children:d.tagline}):null,Object(_.jsx)("i",{className:"badge",children:d.adult?"A":"U/A"}),d.genres?d.genres.map((function(e,t){return Object(_.jsx)("span",{className:"badge",children:e.name},t)})):null,d.vote_average?Object(_.jsxs)("i",{className:"badge",children:["\u2b50",d.vote_average]}):null,Object(_.jsx)("p",{className:"about",children:d.overview}),Object(_.jsx)("hr",{}),Object(_.jsx)("p",{children:d.languages?"Languages : "+d.languages.map((function(e){return" "+e})):d.original_language?"Language : "+d.original_language:null}),Object(_.jsx)("p",{children:d.release_date?"Release Date :      "+d.release_date:"First Aired On :    "+d.first_air_date}),Object(_.jsx)("p",{children:d.number_of_seasons?"Number of Seasons : "+d.number_of_seasons:null})]}):null})]})]}),Object(_.jsx)("div",{className:"postDetail",children:Object(_.jsx)(T,{title:"Similar",url:N+"&query=".concat(m||null)})})]})};var W=function(){var e=new URLSearchParams(Object(r.g)().search),t=e.get("query"),n=e.get("id"),c=e.get("show");return Object(_.jsx)("div",{children:"null"!==n?Object(_.jsx)(q,{searchId:n,show:c}):Object(_.jsx)("div",{className:"result",style:{position:"relative",top:"80px"},children:Object(_.jsx)(T,{title:"Search Results for ".concat(t),url:N+"&query=".concat(t)})})})};var z=Object(r.h)((function(e){var t=e.history;return Object(c.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null}));var B=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),i=Object(l.a)(s,2),d={videoId:n,opts:{height:"390",width:"100%",playerVars:{autoplay:1}},detail:i[0],setDetail:i[1],setVideoId:a,handleTrailer:function(e){y.get("movie/".concat(e)+p).then((function(e){0!==e.data.results.length?a(e.data.results[0].key):(e.data.success,a(null))}))}};return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsxs)(o.Provider,{value:d,children:[Object(_.jsx)(w,{value:d}),Object(_.jsx)(z,{}),Object(_.jsxs)(r.c,{children:[Object(_.jsx)(r.a,{exact:!0,path:"/tvshows",children:Object(_.jsx)(M,{})}),Object(_.jsx)(r.a,{component:L,exact:!0,path:"/movies"}),Object(_.jsx)(r.a,{exact:!0,path:"/search",children:Object(_.jsx)(W,{value:d})}),Object(_.jsx)(r.a,{exact:!0,path:"/",children:Object(_.jsx)(A,{})})]})]}),Object(_.jsx)(R,{})]})},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t&&t.onUpdate&&t.onUpdate(e):t&&t.onSuccess&&t.onSuccess(e))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(u.a,{children:Object(_.jsx)(B,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Netflix",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Netflix","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){}))}(t,e),navigator.serviceWorker.ready.then((function(){}))):F(t,e)}))}}()}},[[80,1,2]]]);
//# sourceMappingURL=main.dbdda098.chunk.js.map