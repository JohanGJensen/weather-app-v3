(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(33)},24:function(e,t,a){},25:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),i=a.n(r),o=a(2),s=a(3),l=a(5),u=a(4),d=a(6),h=a(11),m=a(14),y=c.a.createContext(),f=function(e,t){switch(t.type){case"CHANGE_CITY":return Object(m.a)({},e,{city:t.payload});case"ADD_CITY":return Object(m.a)({},e,{cityList:[t.payload].concat(Object(h.a)(e.cityList))});case"DELETE_CITY":return Object(m.a)({},e,{cityList:e.cityList.filter(function(e){return e!==t.payload})});default:return e}},v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={key:"9ff2e52800774f8a9268bf9b6fb7deba",city:"svendborg",cityList:["svendborg"],day:"",hours:[],week:[],dispatch:function(e){return a.setState(function(t){return f(t,e)})},activateFetch:function(e){var t=e;a.runFetch(t)}},a.runFetch=function(e){if(null===localStorage.getItem("cityList"))a.setState({cityList:[a.state.city]});else{var t=localStorage.getItem("cityList");t=JSON.parse(t),a.setState({cityList:t})}var n=a.state,c=n.key,r=n.city;fetch("https://api.weatherbit.io/v2.0/current?city=".concat(null!==e?e:r,"&key=").concat(c)).then(function(e){return e.json()}).then(function(e){for(var t=e.data,n=0;t.length>n;n++)a.setState({day:t[n]})}),fetch("https://api.weatherbit.io/v2.0/forecast/3hourly?city=".concat(e=r,"&key=").concat(c)).then(function(e){return e.json()}).then(function(e){for(var t=e.data,n=0;t.length>n;n++)a.setState({hours:[].concat(Object(h.a)(a.state.hours),[t[n]])})}),fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=".concat(e=r,"&key=").concat(c)).then(function(e){return e.json()}).then(function(e){for(var t=e.data,n=0;t.length>n;n++)a.setState({week:[].concat(Object(h.a)(a.state.week),[t[n]])})})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){if(null===localStorage.getItem("city"))this.state.activateFetch(this.state.city);else{var e=JSON.parse(localStorage.getItem("city"));this.state.activateFetch(e)}}},{key:"componentDidUpdate",value:function(){var e=Object(h.a)(this.state.cityList);localStorage.setItem("cityList",JSON.stringify(e))}},{key:"render",value:function(){return c.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),t}(c.a.Component),w=y.Consumer,p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(24),a(25);var b=a(8),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={condition:!0,city:"",error:"",loading:!1},a.openMenu=function(){!0!==a.state.condition?a.setState({condition:!0}):(a.setState({condition:!1}),a.setState({error:""}))},a.handleChange=function(e){a.setState({city:e.target.value})},a.handleSubmit=function(e,t){""===a.state.city?a.setState({error:"Please write a city..."}):t.find(function(e){return e.toLowerCase()===a.state.city.toLowerCase()})?(a.setState({error:"City is already added..."}),a.setState({city:""})):(e({type:"ADD_CITY",payload:a.state.city.toLowerCase()}),a.setState({city:""}),a.setState({error:""}))},a.handleCity=function(e,t,n){a.setState({loading:!0}),setTimeout(function(){this.setState({loading:!1})}.bind(Object(b.a)(a)),3e3),e({type:"CHANGE_CITY",payload:n.target.value}),t(n.target.value),localStorage.setItem("city",JSON.stringify(n.target.value))},a.handleDelete=function(e,t){e({type:"DELETE_CITY",payload:t.target.value})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(w,null,function(t){var a=t.day,n=t.cityList,r=t.dispatch,i=t.activateFetch;return c.a.createElement("header",null,c.a.createElement("h1",null,a.city_name),c.a.createElement("nav",{className:"burger-container"},c.a.createElement("div",{className:"burger-btn",onClick:e.openMenu},c.a.createElement("div",{className:e.state.condition?"bar1":"change1 bar1"}),c.a.createElement("div",{className:e.state.condition?"bar2":"change2 bar2"}),c.a.createElement("div",{className:e.state.condition?"bar3":"change3 bar3"}))),c.a.createElement("section",{className:e.state.condition?"city-menu":"city-menu-toggled city-menu"},c.a.createElement("div",{className:"city-list"},c.a.createElement("input",{value:e.state.city,className:"city-list-input",placeholder:"Search for City...",type:"text",onChange:e.handleChange}),c.a.createElement("button",{className:"city-list-button",onClick:e.handleSubmit.bind(e,r,n)},"ADD CITY!"),c.a.createElement("div",{className:"error-box"},c.a.createElement("p",{className:"error-p"},e.state.error)),c.a.createElement("ul",{className:"city-list-ul"},n.map(function(t){return c.a.createElement("li",{key:t,className:"city-list-li"},c.a.createElement("button",{className:"city-list-item",value:t,onClick:e.handleCity.bind(e,r,i)},t),c.a.createElement("button",{value:t,onClick:e.handleDelete.bind(e,r),className:"delete-btn"},"X"))}))),c.a.createElement("div",{className:e.state.loading?"loading-page":"no-load"},c.a.createElement("p",{className:"loading-p"},"LOADING..."))))})}}]),t}(n.Component);function O(e){switch(e){case"Thunderstorm with light rain":case"Thunderstorm with rain":case"Thunderstorm with heavy rain":case"Thunderstorm with light drizzle":case"Thunderstorm with drizzle":case"Thunderstorm with heavy drizzle":case"Thunderstorm with Hail":return"cloud-bg";case"Light Drizzle":case"Drizzle":case"Heavy Drizzle":case"Light rain":case"Moderate Rain":case"Heavy Rain":case"Freezing rain":case"Light shower rain":case"Shower rain":case"Heavy shower rain":return"rain-bg";case"Light snow":return"cloud-bg";case"Snow":return"sunny-bg";case"Heavy Snow":case"Mix snow/rain":case"Sleet":case"Heavy sleet":case"Snow shower":case"Heavy snow shower\t":case"Flurries":case"Mist":case"Smoke":case"Haze":case"Sand/dust":case"Fog":case"Freezing Fog":return"wind-bg";case"Clear sky":case"Few clouds":case"Scattered clouds":return"sunny-bg";case"Broken clouds":case"Overcast clouds":case"Unknown Precipitation":default:return"cloud-bg"}}var S=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(w,null,function(e){var t=e.day,a=((t||{}).weather||{}).description;return c.a.createElement("section",{className:"currentDay-container ".concat(O(a)," shadows")},c.a.createElement("h2",null,"Temperature:"),c.a.createElement("h3",null,t.temp,"\xb0"),c.a.createElement("div",{className:"bottom-info"},c.a.createElement("p",{className:"day-p"},"Feels like ",t.app_temp,"\xb0"),c.a.createElement("p",{className:"day-p"},a)))})}}]),t}(n.Component),j=a(12);function k(e){switch(e){case"Thunderstorm with light rain":case"Thunderstorm with rain":case"Thunderstorm with heavy rain":case"Thunderstorm with light drizzle":case"Thunderstorm with drizzle":case"Thunderstorm with heavy drizzle":case"Thunderstorm with Hail":return"bolt";case"Light Drizzle":case"Drizzle":case"Heavy Drizzle":case"Light rain":case"Moderate Rain":case"Heavy Rain":case"Freezing rain":case"Light shower rain":case"Shower rain":case"Heavy shower rain":return"cloud-rain";case"Light snow":case"Snow":case"Heavy Snow":case"Mix snow/rain":return"snowflake";case"Sleet":case"Heavy sleet":case"Snow shower":case"Heavy snow shower\t":case"Flurries":case"Mist":case"Smoke":case"Haze":case"Sand/dust":case"Fog":case"Freezing Fog":return"wind";case"Clear sky":return"sun";case"Few clouds":case"Scattered clouds":case"Broken clouds":case"Overcast clouds":case"Unknown Precipitation":return"cloud";default:return"sun"}}var N=a(13),C=a.n(N),L=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(w,null,function(e){var t=e.hours.slice(0,10);return c.a.createElement("section",{className:"hours-container"},t.map(function(e){return c.a.createElement("div",{key:C()(),className:"hourly-container"},c.a.createElement(j.a,{icon:k(((e||{}).weather||{}).description),size:"2x",color:"#4887a2"}),c.a.createElement("p",{className:"hour-p"},new Date(e.timestamp_utc).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})))}))})}}]),t}(n.Component),z=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(w,null,function(e){var t=e.week.slice(1,8),a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return c.a.createElement("section",{className:"week-container"},t.map(function(e){return c.a.createElement("div",{key:C()(),className:"week-box ".concat(O(((e||{}).weather||{}).description)," shadows")},c.a.createElement("p",{className:"week-p"},a[new Date(e.valid_date).getDay()]),c.a.createElement("h5",null,e.temp,"\xb0"),c.a.createElement(j.a,{icon:k(((e||{}).weather||{}).description),size:"3x",color:"#fff"}))}))})}}]),t}(n.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(w,null,function(e){var t=e.day;return c.a.createElement("section",{className:"dew-hum-container"},c.a.createElement("div",{className:"infoBox rain-bg shadows humidity"},c.a.createElement("h4",null,"Humidity:"),c.a.createElement("h3",null,t.rh)),c.a.createElement("div",{className:"infoBox rain-bg shadows dewPoint"},c.a.createElement("h4",null,"Dew Point:"),c.a.createElement("h3",null,t.dewpt)))})}}]),t}(n.Component),D=a(10),F=a(7);D.b.add(F.e,F.b,F.c,F.g,F.d,F.a,F.f);var H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={toggle:!0},a.handleLoad=function(){setTimeout(function(){this.setState({toggle:!1})}.bind(Object(b.a)(a)),1500)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.handleLoad)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(E,null),c.a.createElement("div",{className:"main-container"},c.a.createElement(S,null),c.a.createElement(L,null),c.a.createElement(z,null),c.a.createElement(T,null)),c.a.createElement("div",{className:this.state.toggle?"loading-page":"no-load"},c.a.createElement("p",{className:"loading-p"},"LOADING...")))}}]),t}(n.Component);i.a.render(c.a.createElement(v,null,c.a.createElement(H,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather-app-v3",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/weather-app-v3","/service-worker.js");p?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):g(t,e)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.7f82ba48.chunk.js.map