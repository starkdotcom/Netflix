(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{27:function(e,t,n){},39:function(e,t,n){},57:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(28),s=n.n(i),l=n(8),o=(n(39),n(2)),r=Object(c.createContext)(),d=n(12),j=n.n(d),u=n(10),h=(n(57),"api_key=a16f75b2ad11198ee57fcf54e8034a06"),b="https://image.tmdb.org/t/p/w500",m="trending/all/week?".concat(h,"&language=en-US"),v="trending/tv/week?".concat(h,"&language=en-US"),O="trending/movie/week?".concat(h,"&language=en-US"),f="discover/tv?".concat(h,"&with_network=213"),x="discover/movie?".concat(h,"&with_genres=28"),g="&language=en-US",p=("https://api.themoviedb.org/3/discover/movie?".concat(h,"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"),"/videos?".concat(h,"&language=en-US")),N="https://api.themoviedb.org/3/search/multi?".concat(h,"&language=en-US&page=1&include_adult=false"),w=n(0);function _(){var e=Object(o.f)(),t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],i=n[1],s=Object(c.useCallback)((function(){e.push("/search?query=".concat(a,"&id=",null,"&show=",null)),i("")}),[e,a]),d=Object(c.useState)([]),h=Object(l.a)(d,2),m=h[0],v=h[1],O=Object(c.useContext)(r).setDetail,f=m.name||m.title||m.orginal_title||m.orginal_name;Object(c.useEffect)((function(){x(v)}),[a]);var x=function(e){if(""!==a)j.a.get(N+"&query=".concat(a)).then((function(t,n){if(0===t.data.results.length){e({id:!1})}else{var c=t.data.results[0];e(c)}})).catch((function(t){e({id:!1})}));else{e({id:!1})}};return Object(w.jsx)("div",{className:"navbar",children:Object(w.jsxs)("ul",{children:[Object(w.jsxs)("li",{className:"navElement netflix",children:[" ",Object(w.jsx)(u.b,{to:"/",children:Object(w.jsx)("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png",alt:"Netflix"})})]}),Object(w.jsxs)("li",{className:"navElement a tv",children:[" ",Object(w.jsx)(u.b,{to:"/tvshows",children:"Tv Shows"})]}),Object(w.jsxs)("li",{className:"navElement a movie",children:[" ",Object(w.jsx)(u.b,{to:"/movies",children:"Movies"})]}),Object(w.jsxs)("li",{className:"navElement search",children:[Object(w.jsxs)("div",{className:"input-group",children:[Object(w.jsxs)("div",{className:"form-outline",children:[Object(w.jsx)("input",{type:"search",value:a,onChange:function(e){i(e.target.value)},onKeyPress:function(e){13!==e.keyCode&&13!==e.which||s()},className:"form-control",placeholder:"Search"}),Object(w.jsxs)("div",{className:"form-notch",children:[Object(w.jsx)("div",{className:"form-notch-leading",style:{width:"9px"}}),Object(w.jsx)("div",{className:"form-notch-middle",style:{width:"56.8px"}}),Object(w.jsx)("div",{className:"form-notch-trailing"})]})]}),Object(w.jsx)("button",{type:"button",onClick:""!==a?function(){return s()}:null,className:"btn btn-primary ripple-surface",children:Object(w.jsx)("img",{src:"magnifying-glass.png",alt:"",width:"20",height:"20"})})]}),void 0!==m.id&&!1!==m.id&&""!==a?Object(w.jsx)(u.b,{to:"/search?id=".concat(m.id,"&query=",null,"&show=").concat(m.media_type),children:Object(w.jsx)("div",{className:"searchResult",children:Object(w.jsxs)("div",{onClick:function(){O(m),i("")},children:[Object(w.jsx)("span",{style:{fontSize:f.length>8?"1rem":"1.8rem"},children:m.name||m.title||m.orginal_title||m.orginal_name})," ",m.poster_path?Object(w.jsx)("img",{src:"".concat(b+m.poster_path),alt:"".concat(m.name)}):null]})})}):null]}),Object(w.jsxs)("li",{className:"navElement user",children:[" ",Object(w.jsx)("img",{className:"avatar",src:"https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png",alt:"Avatar"})]})]})})}var y=j.a.create({baseURL:"https://api.themoviedb.org/3/"});n(64);var k=function(){var e=Object(c.useContext)(r),t=e.handleTrailer,n=e.setDetail,a=Object(c.useState)([]),i=Object(l.a)(a,2),s=i[0],d=i[1];Object(c.useEffect)((function(){y.get("".concat(m)).then((function(e){var t,n,c=(t=0,n=19,t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1)+t));d(e.data.results[c])}))}),[]);var j=s.name||s.title||s.orginal_title||s.orginal_name,u=Object(o.f)();return Object(w.jsxs)("div",{className:"banner",style:{backgroundImage:"url(".concat(void 0!==s.backdrop_path?b+s.backdrop_path:"",")")},children:[Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)("h2",{className:"title",style:{fontSize:j?j.length>18?"1rem":j.length>8?"1.8rem":"2.8rem":"2rem"},children:s?s.name||s.title||s.orginal_title||s.orginal_name:null}),Object(w.jsxs)("div",{className:"bannerButtons",children:[Object(w.jsx)("button",{onClick:function(){return t(s.id)},className:"button play",children:"Play"}),Object(w.jsx)("button",{type:"button",className:"button list",onClick:function(){return s?(e=s.id,t=s.media_type,n(null),void u.push("/search?id=".concat(e,"&query=",null,"&show=").concat(t))):null;var e,t},children:"More"})]}),Object(w.jsx)("h3",{className:"description",children:s?s.overview:null})]}),Object(w.jsx)("div",{className:"fade_bottom"})]})},S=(n(27),n(65),n(30)),I=n.n(S);var C=function(e){var t=e.obj,n=e.i,a=e.handleTrailer,i=Object(c.useState)(!1),s=Object(l.a)(i,2),d=s[0],j=s[1],u=Object(c.useContext)(r).setDetail,h=t.name||t.title||t.orginal_title||t.orginal_name,m=Object(o.f)();return Object(w.jsx)("div",{className:"card",children:Object(w.jsxs)(I.a,{isFlipped:d,flipDirection:"horizontal",children:[Object(w.jsx)("div",{onMouseEnter:function(){return j(!0)},onTouchStart:function(){j(!0)},className:"card_front",children:Object(w.jsx)("img",{src:t.poster_path?"".concat(b).concat(t.poster_path):"logo2.png",alt:h,className:"poster"},n)}),Object(w.jsx)("div",{style:{boxShadow:" 0 8px 32px 0 rgba(31, 38, 135, 0.37)",background:"url(".concat(t.poster_path?b+t.poster_path:"logo2.png",")  center center / contain")},children:Object(w.jsxs)("div",{onTouchEnd:function(){j(!1)},onMouseLeave:function(){return j(!1)},className:"card_back",children:[Object(w.jsx)("div",{className:"card_title",children:h}),Object(w.jsx)("button",{className:"bttn l",onClick:function(){a(t.id)},children:"Play"}),Object(w.jsx)("button",{onClick:function(){var e,n;e=t.id,n=t.media_type,u(null),m.push("/search?id=".concat(e,"&query=",null,"&show=").concat(n))},className:"bttn r",children:"More"})]})})]})})},E=n(31),T=n.n(E);var D=function(e){var t=Object(c.useContext)(r).handleTrailer,n=Object(c.useState)([]),a=Object(l.a)(n,2),i=a[0],s=a[1];Object(c.useEffect)((function(){y.get(e.url).then((function(e){s(e.data.results)}))}),[e.url]);var o=Object(c.useRef)(null),d=T()({sliderRef:o,momentumVelocity:.9}).hasSwiped;return Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("h2",{className:"rowTitle",children:e.title}),Object(w.jsx)("div",{className:"posters",ref:o,children:i.map((function(e,n){return Object(w.jsx)(C,{obj:e,handleTrailer:t,onClick:function(e){d&&e.preventDefault()}},n)}))})," "]})},U=n(32),M=(n(77),function(e){var t=e.videoId,n=e.setVideoId,c=e.opts;return Object(w.jsx)("div",{className:"float-video",children:Object(w.jsxs)("div",{className:"video",children:[Object(w.jsx)("button",{onClick:function(){return n(null)},className:"btn close-video",children:"Close X"}),Object(w.jsx)(U.a,{videoId:t,opts:c})]})})});var V=function(){var e=Object(c.useContext)(r),t=e.videoId,n=e.setVideoId,a=e.opts;return Object(c.useEffect)((function(){}),[t]),Object(w.jsxs)("div",{children:[Object(w.jsx)(k,{}),null!==t?Object(w.jsx)(M,{className:"",videoId:t,setVideoId:n,opts:a}):null,Object(w.jsxs)("div",{className:"post",children:[Object(w.jsx)(D,{title:"Trending",url:m}),Object(w.jsx)(D,{title:"Netflix Orginals",url:f}),Object(w.jsx)(D,{title:"Action",url:x})]})]})};var q=function(){var e=Object(c.useContext)(r),t=e.videoId,n=e.setVideoId,a=e.opts;return Object(w.jsxs)("div",{children:[Object(w.jsx)(k,{}),null!==t?Object(w.jsx)(M,{className:"",videoId:t,setVideoId:n,opts:a}):null,Object(w.jsxs)("div",{className:"post",children:[Object(w.jsx)(D,{title:"Trending",url:v}),Object(w.jsx)(D,{title:"Netflix Orginals",url:f})]})]})};var W=function(){var e=Object(c.useContext)(r),t=e.videoId,n=e.setVideoId,a=e.opts;return Object(w.jsxs)("div",{children:[Object(w.jsx)(k,{}),null!==t?Object(w.jsx)(M,{className:"",videoId:t,setVideoId:n,opts:a}):null,Object(w.jsxs)("div",{className:"post",children:[Object(w.jsx)(D,{title:"Trending",url:O}),Object(w.jsx)(D,{title:"Action",url:x})]})]})};n(78);var A=function(){return Object(w.jsx)("div",{className:"footer",children:Object(w.jsx)("span",{className:"footer-content",children:"\xa9 Krishnanunni Sunil 2021"})})};n(79);var P=function(e){var t=e.searchId,n=e.show,a=Object(c.useContext)(r),i=a.detail,s=a.setDetail;Object(c.useEffect)((function(){null!==i&&void 0!==i||y.get("".concat(n,"/").concat(t,"?").concat(h).concat(g)).then((function(e){s(e.data)})).catch((function(){"undefined"===n&&y.get("tv/".concat(t,"?").concat(h).concat(g)).then((function(e){s(e.data)})).catch((function(){y.get("movie/".concat(t,"?").concat(h).concat(g)).then((function(e){s(e.data)}))}))}))}));var l=i?i.name||i.title||i.orginal_title||i.orginal_name:null;return Object(w.jsxs)("div",{className:"detail",children:[Object(w.jsxs)("div",{className:"contentDetail",children:[Object(w.jsxs)("div",{className:"md left",children:[Object(w.jsx)("div",{className:"md titleDetail",style:{fontSize:l?l.length>17?"1.5rem":l.length>8?"2rem":"2.8rem":"2rem"},children:i?i.name||i.title||i.orginal_title||i.orginal_name:null}),Object(w.jsx)("div",{className:"md overviewDetail",children:i?i.overview:null})]}),Object(w.jsx)("div",{className:"md right",children:Object(w.jsx)("div",{children:Object(w.jsx)("img",{className:"posterImage md ",src:i?b+i.poster_path:null,alt:""})})}),Object(w.jsx)("div",{className:"sm top",children:Object(w.jsx)("div",{children:Object(w.jsx)("img",{className:"sm posterImage",src:i?b+i.poster_path:null,alt:""})})}),Object(w.jsxs)("div",{className:"sm bottom",children:[Object(w.jsx)("div",{className:"sm titleDetail",style:{fontSize:l?l.length>17?"1.5rem":l.length>8?"2rem":"2.8rem":"2rem"},children:i?i.name||i.title||i.orginal_title||i.orginal_name:null}),Object(w.jsx)("div",{className:"sm overviewDetail",children:i?i.overview:null})]})]}),Object(w.jsx)("div",{className:"postDetail",children:Object(w.jsx)(D,{title:"Similar",url:N+"&query=".concat(l||null)})})]})};var R=function(){var e=new URLSearchParams(Object(o.g)().search),t=e.get("query"),n=e.get("id"),c=e.get("show");return Object(w.jsx)("div",{children:"null"!==n?Object(w.jsx)(P,{searchId:n,show:c}):Object(w.jsx)("div",{className:"result",style:{position:"relative",top:"80px"},children:Object(w.jsx)(D,{title:"Search Results for ".concat(t),url:N+"&query=".concat(t)})})})};var z=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(null),s=Object(l.a)(i,2),d={videoId:n,opts:{height:"390",width:"100%",playerVars:{autoplay:1}},detail:s[0],setDetail:s[1],setVideoId:a,handleTrailer:function(e){y.get("movie/".concat(e)+p).then((function(e){0!==e.data.results.length?a(e.data.results[0].key):(e.data.success,a(null))}))}};return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsxs)(r.Provider,{value:d,children:[Object(w.jsx)(_,{value:d}),Object(w.jsxs)(o.c,{children:[Object(w.jsx)(o.a,{exact:!0,path:"/tvshows",children:Object(w.jsx)(q,{})}),Object(w.jsx)(o.a,{component:W,exact:!0,path:"/movies"}),Object(w.jsx)(o.a,{exact:!0,path:"/search",children:Object(w.jsx)(R,{value:d})}),Object(w.jsx)(o.a,{exact:!0,path:"/",children:Object(w.jsx)(V,{})})]})]}),Object(w.jsx)(A,{})]})},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(u.a,{children:Object(w.jsx)(z,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Netflix",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Netflix","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(t,e)}))}}()}},[[80,1,2]]]);
//# sourceMappingURL=main.1dcd6722.chunk.js.map