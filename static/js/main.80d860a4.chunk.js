(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],[,,,,,,function(e,a,t){},,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(8),i=t.n(s),c=(t(14),t(15),t(16),t(1)),l=t(2),o=t(4),m=t(3),p=(t(6),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("nav",null,r.a.createElement("div",{className:"logo"},r.a.createElement("span",{className:"far fa-camera-movie"}),r.a.createElement("h1",null,"Movie ",r.a.createElement("span",null,"Planet"))),r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",{className:"nav-link active"},"Movies"),r.a.createElement("li",{className:"nav-link"},"TV shows"))))}}]),t}(n.Component)),u=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={proprety:"",properties:""},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state.properties,a=e.vote_count,t=e.poster_path,n=(e.backdrop_path,e.original_title),s=(e.genre_ids,e.vote_average,e.overview);e.release_date;return r.a.createElement("div",{className:"heroCard"},r.a.createElement("div",{className:"cardWraper"},r.a.createElement("div",{className:"postWraper"},r.a.createElement("div",{className:"poster",style:{backgroundImage:'url("http://image.tmdb.org/t/p/w500/'.concat(t,'")')}}),r.a.createElement("img",{src:"",alt:""}),r.a.createElement("button",null,r.a.createElement("span",{className:"fas fa-ticket-alt"})," Book now")),r.a.createElement("div",{className:"detailsWraper"},r.a.createElement("h1",{className:"movieName"},n),r.a.createElement("div",{className:"rating"},r.a.createElement("span",{className:"fas fa-star"}),r.a.createElement("span",{className:"fas fa-star"}),r.a.createElement("span",{className:"fas fa-star"}),r.a.createElement("span",{className:"fas fa-star"}),r.a.createElement("span",{className:"fas fa-star"}),a," votes"),r.a.createElement("p",{className:"movieDescription"},s),r.a.createElement("div",{className:"castWraper"},r.a.createElement("h2",{className:"castTitle"},"Cast:"),r.a.createElement("div",{className:"cast"},r.a.createElement("div",{className:"image"}),r.a.createElement("div",{className:"image"}),r.a.createElement("div",{className:"image"}),r.a.createElement("div",{className:"image"}),r.a.createElement("div",{className:"image"}))),r.a.createElement("div",{className:"trailer"},r.a.createElement("h2",null,"Watch Trailer"),r.a.createElement("button",null,r.a.createElement("span",{className:"fas fa-play-circle"}),"Play Now")))))}},{key:"componentDidMount",value:function(){var e=this,a="https://api.themoviedb.org/3/movie/popular?api_key=".concat("21f53417a5404d2ee865b5d4641ec478","&language=en-US&page=1");fetch(a).then((function(e){return e.json()})).then((function(a){e.setState({proprety:a.results,properties:a.results[0]})}))}}]),t}(n.Component),d=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"heroCardWraper"},r.a.createElement(u,null)))}}]),t}(n.Component),v=t(5),f=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,a=e.vote,t=e.poster,n=e.backdrop,s=e.title,i=e.genre,c=e.genreList,l=e.rating,o=e.overview,m=e.release,p=i.slice(0,3);return c.length?(console.log("if es verdaero",c),p.forEach((function(e,a){c.some((function(t){return t.id==e&&(p[a]=t.name)}))}))):console.log("if es falso",c),console.log(p),r.a.createElement("div",{className:"preview"},r.a.createElement("div",{className:"poster",style:{backgroundImage:'url("http://image.tmdb.org/t/p/w500/'.concat(t,'")')}},r.a.createElement("p",{className:"genere"},p.join(" \xb7 "))),r.a.createElement("div",{className:"popupPrereview"},r.a.createElement("div",{className:"poster",style:{backgroundImage:'url("http://image.tmdb.org/t/p/w500/'.concat(n,'")')}},r.a.createElement("div",{className:"overlay"}),r.a.createElement("span",{className:"fas fa-play"}),r.a.createElement("div",{className:"ratingBox"},r.a.createElement("p",{className:"rating"},l),r.a.createElement("p",{className:"votes"},a,r.a.createElement("br",null)," votes"))),r.a.createElement("div",{className:"information"},r.a.createElement("p",{className:"title"},s),r.a.createElement("p",{className:"yearAndGenre"},m.split("-")[0]," | ",p.join(" \xb7 ")),r.a.createElement("p",{className:"description"},o))))}}]),t}(n.Component),h=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={track:0,numberPerTrack:"",proprety:"",properties:"",height:window.innerHeight,width:window.innerWidth},e.next=function(){e.setState((function(a){var t=window.innerWidth>1100?4:window.innerWidth>800?3:window.innerWidth>600?2:1;return{properties:e.state.proprety.slice((a.track+1)*a.numberPerTrack,(a.track+1)*a.numberPerTrack+t),track:a.track+1}})),console.log(e.state)},e.previous=function(){e.setState((function(a){var t=window.innerWidth>1100?4:window.innerWidth>800?3:window.innerWidth>600?2:1;return{properties:e.state.proprety.slice((a.track-1)*a.numberPerTrack,(a.track-1)*a.numberPerTrack+t),track:a.track-1}}))},e.debounce=function(a,t){var n;return function(r){clearTimeout(n),n=setTimeout((function(t){n=null,a.apply(Object(v.a)(e))}),t)}},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.genreList),""==this.state.properties?r.a.createElement("div",null,"Vacio"):r.a.createElement("div",{className:"movieTrack"},r.a.createElement("h1",null,this.props.genre),r.a.createElement("div",{className:"previewWraper"},r.a.createElement("button",{className:"navButton left",onClick:this.previous,disabled:0==this.state.track},r.a.createElement("span",{className:"fas fa-chevron-left"})),r.a.createElement("button",{className:"navButton right",onClick:this.next,disabled:this.state.track==(window.innerWidth<900?8:4)},r.a.createElement("span",{className:"fas fa-chevron-right"})),this.state.properties.map((function(a,t){var n=a.vote_count,s=a.poster_path,i=a.backdrop_path,c=a.original_title,l=a.genre_ids,o=a.vote_average,m=a.overview,p=a.release_date;return r.a.createElement(f,{key:t,vote:n,poster:s,backdrop:i,title:c,genre:l,genreList:e.props.genreList,rating:o,overview:m,release:p})}))))}},{key:"componentDidMount",value:function(){var e=this,a=this.props.linkGenre,t=(fetch(a).then((function(e){return e.json()})).then((function(a){e.setState({proprety:a.results,properties:window.innerWidth>1100?a.results.slice(0,4):window.innerWidth>800?a.results.slice(0,3):window.innerWidth>600?a.results.slice(0,2):a.results.slice(0,1),numberPerTrack:window.innerWidth>1100?4:window.innerWidth>800?3:window.innerWidth>600?2:1})})),function(a,t){var n;return function(r){clearTimeout(n),n=setTimeout((function(t){n=null,a.apply(e)}),t)}}((function(){var e=this;this.setState((function(a){var t=a.track*a.numberPerTrack;return{properties:window.innerWidth>1100?e.state.proprety.slice(t,t+4):window.innerWidth>800?e.state.proprety.slice(t,t+3):window.innerWidth>600?e.state.proprety.slice(t,t+2):e.state.proprety.slice(t,t+1),numberPerTrack:window.innerWidth>1100?4:window.innerWidth>800?3:window.innerWidth>600?2:1,height:window.innerHeight,width:window.innerWidth}}))}),400));window.addEventListener("resize",t)}}]),t}(n.Component),g=(t(17),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={genre:[]},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"movies"},r.a.createElement(h,{genre:"popular",linkGenre:"https://api.themoviedb.org/3/movie/popular?api_key=21f53417a5404d2ee865b5d4641ec478&language=en-US&page=1",genreList:this.state.genre}),r.a.createElement(h,{genre:"Action",linkGenre:"https://api.themoviedb.org/3/discover/movie?api_key=21f53417a5404d2ee865b5d4641ec478&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28",genreList:this.state.genre}),r.a.createElement(h,{genre:"Adventure",linkGenre:"https://api.themoviedb.org/3/discover/movie?api_key=21f53417a5404d2ee865b5d4641ec478&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12",genreList:this.state.genre}),r.a.createElement(h,{genre:"Animation",linkGenre:"https://api.themoviedb.org/3/discover/movie?api_key=21f53417a5404d2ee865b5d4641ec478&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16",genreList:this.state.genre}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=21f53417a5404d2ee865b5d4641ec478&language=en-US").then((function(e){return e.json()})).then((function(a){e.setState({genre:a.genres})}))}}]),t}(n.Component)),E=(t(18),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"icons"},r.a.createElement("span",{className:"fab fa-facebook-square"}),r.a.createElement("span",{className:"fab fa-twitter"}),r.a.createElement("span",{className:"fab fa-instagram"}),r.a.createElement("span",{className:"fab fa-youtube"})),r.a.createElement("div",{className:"footerLinks"},r.a.createElement("span",{className:"footerLink"},"Terms & Conditions"),r.a.createElement("span",{className:"footerLink"},"Contact Us"),r.a.createElement("span",{className:"footerLink"},"Movies"),r.a.createElement("span",{className:"footerLink"},"Theatres"),r.a.createElement("span",{className:"footerLink"},"Ratings Information"),r.a.createElement("span",{className:"footerLink"},"Groups & Events"),r.a.createElement("span",{className:"footerLink"},"Offers & Promotions"),r.a.createElement("span",{className:"footerLink"},"Gift Cards")),r.a.createElement("div",{className:"storeWraper"},r.a.createElement("div",{className:"store apple"},r.a.createElement("span",{className:"fab fa-apple"}),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,"Download on the"),r.a.createElement("p",null,"App store"))),r.a.createElement("div",{className:"store google"},r.a.createElement("span",{className:"fab fa-google-play"}),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,"Get it on"),r.a.createElement("p",null,"Google play")))),r.a.createElement("div",{className:"copyright"},r.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," movieplaye.movie. All rights reserved.")))}}]),t}(n.Component));var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(d,null),r.a.createElement(g,null),r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.80d860a4.chunk.js.map