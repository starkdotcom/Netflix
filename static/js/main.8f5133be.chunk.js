(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{27:function(e,t,n){},39:function(e,t,n){},57:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(28),i=n.n(s),l=n(9),r=(n(39),n(2)),o=Object(c.createContext)(),d=n(12),j=n.n(d),u=n(8),b=(n(57),"api_key=a16f75b2ad11198ee57fcf54e8034a06"),h="https://image.tmdb.org/t/p/w500",m="https://image.tmdb.org/t/p/w200",v="trending/all/week?".concat(b,"&language=en-US&with_network=213"),O="trending/tv/week?".concat(b,"&language=en-US&with_network=213"),g="trending/movie/week?".concat(b,"&language=en-US&with_network=213"),x="discover/tv?".concat(b,"&with_network=213"),f="discover/movie?".concat(b,"&with_genres=28&with_network=213"),p="&language=en-US",N=("https://api.themoviedb.org/3/discover/movie?".concat(b,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"),"/videos?".concat(b,"&language=en-US")),_="https://api.themoviedb.org/3/search/multi?".concat(b,"&language=en-US&page=1&include_adult=false"),w=n(0);function y(){var e=Object(r.f)(),t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],s=n[1],i=Object(c.useCallback)((function(){e.push("/search?query=".concat(a,"&id=",null,"&show=",null)),s("")}),[e,a]),d=Object(c.useState)([]),b=Object(l.a)(d,2),m=b[0],v=b[1],O=Object(c.useContext)(o).setDetail,g=m.name||m.title||m.orginal_title||m.orginal_name;Object(c.useEffect)((function(){!function(e){if(""!==a)j.a.get(_+"&query=".concat(a)).then((function(t,n){if(0===t.data.results.length){e({id:!1})}else{var c=t.data.results[0];e(c)}})).catch((function(t){e({id:!1})}));else{e({id:!1})}}(v)}),[a]);return Object(w.jsx)("div",{className:"navbar",children:Object(w.jsxs)("ul",{children:[Object(w.jsxs)("li",{className:"navElement netflix",children:[" ",Object(w.jsx)(u.b,{to:"/",children:Object(w.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix"})})]}),Object(w.jsxs)("li",{className:"navElement a tv",children:[" ",Object(w.jsx)(u.b,{to:"/tvshows",children:"Tv Shows"})]}),Object(w.jsxs)("li",{className:"navElement a movie",children:[" ",Object(w.jsx)(u.b,{to:"/movies",children:"Movies"})]}),Object(w.jsxs)("li",{className:"navElement search",children:[Object(w.jsxs)("div",{className:"input-group",children:[Object(w.jsxs)("div",{className:"form-outline",children:[Object(w.jsx)("input",{type:"search",value:a,onChange:function(e){s(e.target.value)},onKeyPress:function(e){13!==e.keyCode&&13!==e.which||i()},className:"form-control",placeholder:"Search"}),Object(w.jsxs)("div",{className:"form-notch",children:[Object(w.jsx)("div",{className:"form-notch-leading",style:{width:"9px"}}),Object(w.jsx)("div",{className:"form-notch-middle",style:{width:"56.8px"}}),Object(w.jsx)("div",{className:"form-notch-trailing"})]})]}),Object(w.jsx)("button",{type:"button",onClick:""!==a?function(){return i()}:null,className:"btn btn-primary ripple-surface",children:Object(w.jsx)("img",{src:"magnifying-glass.png",alt:"",width:"20",height:"20"})})]}),void 0!==m.id&&!1!==m.id&&""!==a?Object(w.jsx)(u.b,{to:"/search?id=".concat(m.id,"&query=",null,"&show=").concat(m.media_type),children:Object(w.jsx)("div",{className:"searchResult",children:Object(w.jsxs)("div",{onClick:function(){O(m),s("")},children:[Object(w.jsx)("span",{style:{fontSize:g.length>8?"1rem":"1.8rem"},children:m.name||m.title||m.orginal_title||m.orginal_name})," ",Object(w.jsx)("div",{children:m.poster_path?Object(w.jsx)("img",{src:"".concat(h+m.poster_path),alt:"".concat(m.name)}):null})]})})}):null]}),Object(w.jsxs)("li",{className:"navElement user",children:[" ",Object(w.jsx)("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar"})]})]})})}var k=j.a.create({baseURL:"https://api.themoviedb.org/3/"});n(64);var S=function(){var e=Object(c.useContext)(o),t=e.handleTrailer,n=e.setDetail,a=Object(c.useState)([]),s=Object(l.a)(a,2),i=s[0],d=s[1];Object(c.useEffect)((function(){k.get("".concat(v)).then((function(e){var t,n,c=(t=0,n=19,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1)+t));d(e.data.results[c])}))}),[]);var j=i.name||i.title||i.orginal_title||i.orginal_name,u=Object(r.f)();return Object(w.jsxs)("div",{className:"banner",style:{backgroundImage:"url(".concat(void 0!==i.backdrop_path?"https://image.tmdb.org/t/p/original"+i.backdrop_path:"",")")},children:[Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)("h2",{className:"title",style:{fontSize:j?j.length>18?"1rem":j.length>8?"1.8rem":"2.8rem":"2rem"},children:i?i.name||i.title||i.orginal_title||i.orginal_name:null}),Object(w.jsxs)("div",{className:"bannerButtons",children:[Object(w.jsx)("button",{onClick:function(){return t(i.id)},className:"button play",children:"Play"}),Object(w.jsx)("button",{type:"button",className:"button list",onClick:function(){return i?(e=i.id,t=i.media_type,n(null),void u.push("/search?id=".concat(e,"&query=",null,"&show=").concat(t))):null;var e,t},children:"More"})]}),Object(w.jsx)("h3",{className:"description",children:i?i.overview:null})]}),Object(w.jsx)("div",{className:"fade_bottom"})]})},I=(n(27),n(65),n(30)),C=n.n(I);var E=function(e){var t=e.obj,n=e.i,a=e.handleTrailer,s=Object(c.useState)(!1),i=Object(l.a)(s,2),d=i[0],j=i[1],u=Object(c.useContext)(o).setDetail,b=t.name||t.title||t.orginal_title||t.orginal_name,h=Object(r.f)();return Object(w.jsx)("div",{className:"card",children:Object(w.jsxs)(C.a,{isFlipped:d,flipDirection:"horizontal",children:[Object(w.jsx)("div",{onMouseEnter:function(){return j(!0)},onTouchStart:function(){j(!0)},className:"card_front",children:Object(w.jsx)("img",{src:t.poster_path?"".concat(m).concat(t.poster_path):"logo2.png",alt:b,className:"poster"},n)}),Object(w.jsx)("div",{style:{boxShadow:" 0 8px 32px 0 rgba(31, 38, 135, 0.37)",background:"url(".concat(t.poster_path?m+t.poster_path:"logo2.png",")  center center / contain")},children:Object(w.jsxs)("div",{onTouchEnd:function(){j(!1)},onMouseLeave:function(){return j(!1)},className:"card_back",children:[Object(w.jsx)("div",{className:"card_title",children:b}),Object(w.jsx)("button",{className:"bttn l",onClick:function(){a(t.id)},children:"Play"}),Object(w.jsx)("button",{onClick:function(){var e,n;e=t.id,n=t.media_type,u(null),h.push("/search?id=".concat(e,"&query=",null,"&show=").concat(n))},className:"bttn r",children:"More"})]})})]})})},D=n(31),T=n.n(D);var U=function(e){var t=Object(c.useContext)(o).handleTrailer,n=Object(c.useState)([]),a=Object(l.a)(n,2),s=a[0],i=a[1];Object(c.useEffect)((function(){k.get(e.url).then((function(e){i(e.data.results)}))}),[e.url]);var r=Object(c.useRef)(null),d=T()({sliderRef:r,momentumVelocity:.9}).hasSwiped;return Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("h2",{className:"rowTitle",children:e.title}),Object(w.jsx)("div",{className:"posters",ref:r,children:s.map((function(e,n){return Object(w.jsx)(E,{obj:e,handleTrailer:t,onClick:function(e){d&&e.preventDefault()}},n)}))})," "]})},V=n(32),A=(n(77),function(e){var t=e.videoId,n=e.setVideoId,c=e.opts;return Object(w.jsx)("div",{className:"float-video",children:Object(w.jsxs)("div",{className:"video",children:[Object(w.jsx)("button",{onClick:function(){return n(null)},className:"btn close-video",children:"Close X"}),Object(w.jsx)(V.a,{videoId:t,opts:c})]})})});var M=function(){var e=Object(c.useContext)(o),t=e.videoId,n=e.setVideoId,a=e.opts;return Object(c.useEffect)((function(){}),[t]),Object(w.jsxs)("div",{children:[Object(w.jsx)(S,{}),null!==t?Object(w.jsx)(A,{className:"",videoId:t,setVideoId:n,opts:a}):null,Object(w.jsxs)("div",{className:"post",children:[Object(w.jsx)(U,{title:"Trending",url:v}),Object(w.jsx)(U,{title:"Netflix Orginals",url:x}),Object(w.jsx)(U,{title:"Action",url:f})]})]})};var L=function(){var e=Object(c.useContext)(o),t=e.videoId,n=e.setVideoId,a=e.opts;return Object(w.jsxs)("div",{children:[Object(w.jsx)(S,{}),null!==t?Object(w.jsx)(A,{className:"",videoId:t,setVideoId:n,opts:a}):null,Object(w.jsxs)("div",{className:"post",children:[Object(w.jsx)(U,{title:"Trending",url:O}),Object(w.jsx)(U,{title:"Netflix Orginals",url:x})]})]})};var R=function(){var e=Object(c.useContext)(o),t=e.videoId,n=e.setVideoId,a=e.opts;return Object(w.jsxs)("div",{children:[Object(w.jsx)(S,{}),null!==t?Object(w.jsx)(A,{className:"",videoId:t,setVideoId:n,opts:a}):null,Object(w.jsxs)("div",{className:"post",children:[Object(w.jsx)(U,{title:"Trending",url:g}),Object(w.jsx)(U,{title:"Action",url:f})]})]})};n(78);var q=function(){return Object(w.jsx)("div",{className:"footer",children:Object(w.jsx)("span",{className:"footer-content",children:"\xa9 Krishnanunni Sunil 2021"})})};n(79);var W=function(e){var t=e.searchId,n=e.show,a=Object(c.useContext)(o),s=a.videoId,i=a.setVideoId,l=a.opts,r=Object(c.useContext)(o),d=r.detail,j=r.setDetail,u=r.handleTrailer;Object(c.useEffect)((function(){null!==d&&void 0!==d||k.get("".concat(n,"/").concat(t,"?").concat(b).concat(p)).then((function(e){j(e.data)})).catch((function(){"undefined"===n&&k.get("tv/".concat(t,"?").concat(b).concat(p)).then((function(e){j(e.data)})).catch((function(){k.get("movie/".concat(t,"?").concat(b).concat(p)).then((function(e){j(e.data)}))}))}))}));var m=d?d.name||d.title||d.orginal_title||d.orginal_name:null;return Object(w.jsxs)("div",{className:"detail",children:[null!==s?Object(w.jsx)(A,{className:"",videoId:s,setVideoId:i,opts:l}):null,Object(w.jsxs)("div",{className:"contentDetail",children:[Object(w.jsxs)("div",{className:"md left",children:[Object(w.jsx)("div",{className:"md titleDetail",style:{fontSize:m?m.length>17?"1.5rem":m.length>8?"2rem":"2.8rem":"2rem"},children:d?d.name||d.title||d.orginal_title||d.orginal_name:null}),Object(w.jsx)("div",{className:"md overviewDetail",children:d?Object(w.jsxs)("div",{children:[d.tagline?Object(w.jsx)("h3",{children:d.tagline}):null,Object(w.jsx)("i",{className:"badge",children:d.adult?"A":"U/A"}),d.genres?d.genres.map((function(e,t){return Object(w.jsx)("span",{className:"badge",children:e.name},t)})):null,d.vote_average?Object(w.jsxs)("i",{className:"badge",children:["\u2b50",d.vote_average]}):null,Object(w.jsxs)("p",{className:"about",children:[" ",d.overview]}),Object(w.jsx)("hr",{}),Object(w.jsx)("p",{children:d.languages?"Languages : "+d.languages.map((function(e){return" "+e})):d.original_language?"Language : "+d.original_language:null}),Object(w.jsx)("p",{children:d.release_date?"Release Date :      "+d.release_date:"First Aired On :    "+d.first_air_date}),Object(w.jsx)("p",{children:d.number_of_seasons?"Number of Seasons : "+d.number_of_seasons:null})]}):null})]}),Object(w.jsx)("div",{className:"md right",children:Object(w.jsxs)("div",{className:"imgBtn",children:[Object(w.jsx)("img",{className:"posterImage md ",src:d?h+d.poster_path:null,alt:""}),Object(w.jsx)("button",{className:"btn play",onClick:function(){var e=d.id;u(e)}})]})}),Object(w.jsx)("div",{className:"sm top",children:Object(w.jsx)("div",{children:Object(w.jsx)("img",{className:"sm posterImage",src:d?h+d.poster_path:null,alt:""})})}),Object(w.jsxs)("div",{className:"sm bottom",children:[Object(w.jsx)("div",{className:"sm titleDetail",style:{fontSize:m?m.length>17?"1.5rem":m.length>8?"2rem":"2.8rem":"2rem"},children:d?d.name||d.title||d.orginal_title||d.orginal_name:null}),Object(w.jsx)("div",{className:"sm overviewDetail",children:d?Object(w.jsxs)("div",{className:"sm",children:[d.tagline?Object(w.jsx)("h3",{children:d.tagline}):null,Object(w.jsx)("i",{className:"badge",children:d.adult?"A":"U/A"}),d.genres?d.genres.map((function(e,t){return Object(w.jsx)("span",{className:"badge",children:e.name},t)})):null,d.vote_average?Object(w.jsxs)("i",{className:"badge",children:["\u2b50",d.vote_average]}):null,Object(w.jsx)("p",{className:"about",children:d.overview}),Object(w.jsx)("hr",{}),Object(w.jsx)("p",{children:d.languages?"Languages : "+d.languages.map((function(e){return" "+e})):d.original_language?"Language : "+d.original_language:null}),Object(w.jsx)("p",{children:d.release_date?"Release Date :      "+d.release_date:"First Aired On :    "+d.first_air_date}),Object(w.jsx)("p",{children:d.number_of_seasons?"Number of Seasons : "+d.number_of_seasons:null})]}):null})]})]}),Object(w.jsx)("div",{className:"postDetail",children:Object(w.jsx)(U,{title:"Similar",url:_+"&query=".concat(m||null)})})]})};var z=function(){var e=new URLSearchParams(Object(r.g)().search),t=e.get("query"),n=e.get("id"),c=e.get("show");return Object(w.jsx)("div",{children:"null"!==n?Object(w.jsx)(W,{searchId:n,show:c}):Object(w.jsx)("div",{className:"result",style:{position:"relative",top:"80px"},children:Object(w.jsx)(U,{title:"Search Results for ".concat(t),url:_+"&query=".concat(t)})})})};var P=Object(r.h)((function(e){var t=e.history;return Object(c.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null}));var B=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),i=Object(l.a)(s,2),d={videoId:n,opts:{height:"390",width:"100%",playerVars:{autoplay:1}},detail:i[0],setDetail:i[1],setVideoId:a,handleTrailer:function(e){k.get("movie/".concat(e)+N).then((function(e){0!==e.data.results.length?a(e.data.results[0].key):(e.data.success,a(null))}))}};return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsxs)(o.Provider,{value:d,children:[Object(w.jsx)(y,{value:d}),Object(w.jsx)(P,{}),Object(w.jsxs)(r.c,{children:[Object(w.jsx)(r.a,{exact:!0,path:"/tvshows",children:Object(w.jsx)(L,{})}),Object(w.jsx)(r.a,{component:R,exact:!0,path:"/movies"}),Object(w.jsx)(r.a,{exact:!0,path:"/search",children:Object(w.jsx)(z,{value:d})}),Object(w.jsx)(r.a,{exact:!0,path:"/",children:Object(w.jsx)(M,{})})]})]}),Object(w.jsx)(q,{})]})},F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t&&t.onUpdate&&t.onUpdate(e):t&&t.onSuccess&&t.onSuccess(e))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(u.a,{children:Object(w.jsx)(B,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Netflix",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Netflix","/service-worker.js");F?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){}))}(t,e),navigator.serviceWorker.ready.then((function(){}))):J(t,e)}))}}()}},[[80,1,2]]]);
//# sourceMappingURL=main.8f5133be.chunk.js.map