(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,n,t){e.exports=t(27)},24:function(e,n,t){},25:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(5),c=t(1),i=t.n(c),l=t(2),s=(t(24),t(3)),u=t(4),h=t(7),d=t(6),f=function(e){var n=e.id,t=e.name,r=e.email;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa1 ma2 grow bw shadow-5"},o.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?200x200")}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,r)))},p=function(e){var n=e.robots;return o.a.createElement("div",null,n.map((function(e,t){return o.a.createElement(f,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})})))},m=function(e){var n=e.searchChange;return o.a.createElement("div",null,o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:n}))},b=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},o.a.createElement("br",null),e.children)},v=function(e){Object(h.a)(t,e);var n=Object(d.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=n.call(this,e)).state={hasError:!1},r}return Object(u.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.props.hasError?o.a.createElement("h1",null,"Opps there is a error"):this.props.children}}]),t}(r.Component),g=(t(25),function(e){Object(h.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(s.a)(this,t),(e=n.call(this)).state={robots:[]},e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state.robots,n=this.props,t=n.searchField,r=n.onSearchChange,a=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return e.length?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f2"},"RoboFriends"),o.a.createElement(m,{searchChange:r}),o.a.createElement("br",null),o.a.createElement(b,null,o.a.createElement(v,null,o.a.createElement(p,{robots:a})))):o.a.createElement("h1",null,"Loading")}}]),t}(r.Component)),E=Object(a.b)((function(e){return{searchField:e.searchField}}),(function(e){return console.log("dispara pone searchField"),{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})}}}))(g),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(26);var k={searchField:""},C=Object(l.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log(n.type),n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}}));i.a.render(o.a.createElement(a.a,{store:C},o.a.createElement(E,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/robofriends","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(n,e)}))}}()}},[[13,1,2]]]);
//# sourceMappingURL=main.70e52981.chunk.js.map