(this.webpackJsonplab2=this.webpackJsonplab2||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),o=a.n(s),l=(a(22),a(15),a(1)),i=a(2),c=a(4),u=a(3),d=a(5),p=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.parseJson()}},{key:"parseJson",value:function(){this.coord=this.props.json.coord,this.wind=this.props.json.wind,this.humidity=this.props.json.humidity,this.pressure=this.props.json.pressure,this.clouds=this.props.json.clouds}},{key:"render",value:function(){return this.parseJson(),r.a.createElement("div",null,r.a.createElement("div",{class:"alert alert-dark row px-0 mx-1"},r.a.createElement("div",{class:"col-6"},"\u0412\u0435\u0442\u0435\u0440"),r.a.createElement("div",{class:"col-6 text-right"},this.wind)),r.a.createElement("div",{class:"alert alert-dark row px-0 mx-1"},r.a.createElement("div",{class:"col-6"},"\u041e\u0431\u043b\u0430\u0447\u043d\u043e\u0441\u0442\u044c"),r.a.createElement("div",{class:"col-6 text-right"},this.clouds)),r.a.createElement("div",{class:"alert alert-dark row px-0 mx-1"},r.a.createElement("div",{class:"col-6"},"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),r.a.createElement("div",{class:"col-6 text-right"},this.pressure)),r.a.createElement("div",{class:"alert alert-dark row px-0 mx-1"},r.a.createElement("div",{class:"col-6"},"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c"),r.a.createElement("div",{class:"col-6 text-right"},this.humidity)),r.a.createElement("div",{class:"alert alert-dark row px-0 mx-1"},r.a.createElement("div",{class:"col-6"},"\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b"),r.a.createElement("div",{class:"col-6 text-right"},"[",this.coord,"]")))}}]),t}(n.Component),m=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.setState({json:this.props.json})}},{key:"render",value:function(){var e=this.props.json.name,t=this.props.json.icon,a=this.props.json.temp,n="https://openweathermap.org/img/wn/"+t+"@2x.png";return 0==this.props.json.clouds?r.a.createElement("div",null," "):r.a.createElement("div",{class:"container pl-0"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-6"},r.a.createElement("h2",null,e),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-3"},r.a.createElement("img",{alt:"icon",width:"100px",src:n})),r.a.createElement("h1",{class:"col-6 my-auto display-1 sh"},a))),r.a.createElement("div",{class:"col-6"},r.a.createElement(p,{json:this.props.json}))))}}]),t}(n.Component),h=a(10),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).appKey="2e19bb27bd5e717bac388dc0c1827b17",a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.findWeatherDetailsForName(this.props.post.title),this.setState({done:!1})}},{key:"httpRequestAsync",value:function(e,t){var a=this;console.log("hello");var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&200===n.status?(t(n.responseText),a.setState({error:!1})):404===n.status&&a.setError()},n.open("GET",e,!0),n.send()}},{key:"setError",value:function(){console.log("WSYUIurfydgstyr"),this.setState({error:!0})}},{key:"findWeatherDetailsForName",value:function(e){var t=this;if(this.setState({done:!1}),""===e);else{var a="https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid="+this.appKey;this.httpRequestAsync(a,(function(e){var a=JSON.parse(e);t.setState({json:{name:a.name,icon:a.weather[0].icon,coord:a.coord.lon+", "+a.coord.lat,wind:a.wind.speed+" m/s",humidity:a.main.humidity+" %",pressure:a.main.pressure+" hpa",clouds:a.weather[0].description,temp:parseInt(a.main.temp-273)+"\xb0C"},done:!0})}))}}},{key:"render",value:function(){if(console.log(this.props.post.title,this.error),1==this.state.error)return r.a.createElement("div",null,"\u0422\u0430\u043a\u043e\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430 \u0432 \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u0439 \u0412\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043d\u0435\u0442 ");if(this.state.done){var e=this.state.json.icon,t=this.state.json.temp,a="https://openweathermap.org/img/wn/"+e+"@2x.png";return r.a.createElement("div",{class:"container p-0"},r.a.createElement("div",{class:"row pl-3"},r.a.createElement("div",{class:"row pl-3"},r.a.createElement("h1",{class:"my-auto"},t),r.a.createElement("img",{alt:"icon",src:a}))),r.a.createElement(p,{json:this.state.json}))}return r.a.createElement("div",null,r.a.createElement("div",null,this.props.post.title),r.a.createElement("div",null,"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435, \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f"),r.a.createElement("div",{className:"spinner-border m-5",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).prevId=Math.round(100*Math.random()),a.handleSubmit=function(e){if(2===a.props.posts.length)document.getElementById("errortext").innerText="\u041d\u0435\u043b\u044c\u0437\u044f \u0431\u043e\u043b\u044c\u0448\u0435 2 \u0433\u043e\u0440\u043e\u0434\u043e\u0432";else{document.getElementById("errortext").innerText=" ",e.preventDefault();var t=a.getTitle.value,n={id:a.prevId+=1,title:t};console.log(n),a.props.dispatch({type:"ADD_CITY",data:n}),a.getTitle.value=""}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"delete",value:function(){var e={id:this.id};console.log(e),this.props.dispatch({type:"DELETE_CITY",data:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"container fav"},r.a.createElement("div",null,r.a.createElement("div",{class:"container pl-0"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-6 px-0 sh"},"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"),r.a.createElement("div",{class:"col-6 text-right my-auto form-group"},r.a.createElement("div",null,r.a.createElement("input",{class:"favourite-input input_advance",ref:function(t){return e.getTitle=t},required:!0,type:"text",placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0433\u043e\u0440\u043e\u0434"}),r.a.createElement("button",{type:"buton",class:"btn-circle",onClick:this.handleSubmit},"+")),r.a.createElement("div",{id:"errortext",class:"text-center error"}," "))))),r.a.createElement("div",{class:"row"},this.props.posts.map((function(t){return r.a.createElement("div",{class:"col-6"},r.a.createElement("div",{class:"row mt-2"},r.a.createElement("div",{class:"col-6 mb-0 mt-2"},r.a.createElement("h2",{class:"mb-0"},t.title)),r.a.createElement("div",{class:"col-6 text-right"},r.a.createElement("button",{class:"btn-circle",onClick:function(){e.id=t.id,e.delete()}},"X"))),r.a.createElement(v,{key:t.id,post:t}))}))))}}]),t}(n.Component),f=Object(h.b)((function(e){return{posts:e}}))(E),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).appKey="2e19bb27bd5e717bac388dc0c1827b17",a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.setState({positionAllowed:!1,downloadFlag:!1,json:{coord:"0",wind:"0",humidity:"0",pressure:"0",clouds:"0",name:"",temp:"",icon:" "},done:"noreq"}),navigator.geolocation.getCurrentPosition((function(t){e.setState({positionAllowed:!0}),e.findWeatherDetailsForCoords(t.coords)}),(function(t){e.setState({positionAllowed:!1}),console.log(e.state.json)}))}},{key:"render",value:function(){var e=this;return 1==this.state.error?r.a.createElement("div",{className:"container"},r.a.createElement("div",{class:"row pl-3"},r.a.createElement("span",{className:"sh mr-4 pr-15"},"\u041d\u0430\u0439\u0442\u0438 \u043f\u043e\u0433\u043e\u0434\u0443 \u0437\u0434\u0435\u0441\u044c"),r.a.createElement("input",{class:"favourite-input my-auto",value:this.state.inputValue,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",onChange:function(t){return e.updateInputValue(t)}}),r.a.createElement("button",{class:"btn btn-secondary my-auto",onClick:function(){e.findWeatherDetailsForName(e.state.inputValue)}},"\u041f\u043e\u0438\u0441\u043a")),r.a.createElement("h2",{class:"error"},"\u0422\u0430\u043a\u043e\u0433\u043e \u0433\u043e\u0440\u043e\u0434\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043d\u0435\u0442"),r.a.createElement(f,null)):this.state.positionAllowed?r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row pl-3"},r.a.createElement("div",{class:"col-4"},r.a.createElement("span",{class:"sh "},"\u041f\u043e\u0433\u043e\u0434\u0430 \u0437\u0434\u0435\u0441\u044c")),r.a.createElement("div",{class:"col-3 my-auto mx-auto"},r.a.createElement("button",{class:"btn btn-secondary ",onClick:function(){navigator.geolocation.getCurrentPosition((function(t){e.findWeatherDetailsForCoords(t.coords)}))}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e"))))),r.a.createElement(m,{json:this.state.json,done:this.state.done}),r.a.createElement(f,null)):this.state.done?r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row pl-3"},r.a.createElement("span",{class:"sh mr-4 pr-5"},"\u041d\u0430\u0439\u0442\u0438 \u043f\u043e\u0433\u043e\u0434\u0443 \u0437\u0434\u0435\u0441\u044c"),r.a.createElement("input",{class:"favourite-input my-auto ",value:this.state.inputValue,onChange:function(t){return e.updateInputValue(t)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"}),r.a.createElement("button",{class:"btn btn-secondary my-auto",onClick:function(){e.findWeatherDetailsForName(e.state.inputValue)}},"\u041f\u043e\u0438\u0441\u043a")),r.a.createElement(m,{json:this.state.json}),r.a.createElement(f,null)):r.a.createElement("div",{class:"container text-center"},r.a.createElement("div",{className:"row pl-3"},r.a.createElement("div",{className:"col-4"},r.a.createElement("span",{className:"sh "},"\u041f\u043e\u0433\u043e\u0434\u0430 \u0437\u0434\u0435\u0441\u044c")),r.a.createElement("div",{className:"col-3 my-auto mx-auto"},r.a.createElement("button",{className:"btn btn-secondary ",onClick:function(){navigator.geolocation.getCurrentPosition((function(t){e.findWeatherDetailsForCoords(t.coords)}))}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0433\u0435\u043e\u043b\u043e\u043a\u0430\u0446\u0438\u044e"))),r.a.createElement("h1",null,"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435, \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0442\u0441\u044f"),r.a.createElement("div",{className:"spinner-border m-5",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement(f,null))}},{key:"updateInputValue",value:function(e){this.setState({inputValue:e.target.value})}},{key:"findWeatherDetailsForName",value:function(e){var t=this;if(this.setState({done:!1}),""===e);else{var a="https://api.openweathermap.org/data/2.5/weather?q="+e+"&appid="+this.appKey;this.httpRequestAsync(a,(function(e){var a=JSON.parse(e);t.setState({json:{coord:a.coord.lon+", "+a.coord.lat,wind:a.wind.speed+" m/s",humidity:a.main.humidity+" %",pressure:a.main.pressure+" hpa",clouds:a.weather[0].description,icon:a.weather[0].icon,name:a.name,temp:parseInt(a.main.temp-273)+"\xb0C"},done:!0})}))}}},{key:"findWeatherDetailsForCoords",value:function(e){var t=this;this.setState({done:!1});var a="https://api.openweathermap.org/data/2.5/weather?lat="+e.latitude+"&lon="+e.longitude+"&appid="+this.appKey;this.httpRequestAsync(a,(function(e){var a=JSON.parse(e);t.setState({json:{coord:a.coord.lon+", "+a.coord.lat,wind:a.wind.speed+" m/s",humidity:a.main.humidity+" %",pressure:a.main.pressure+" hpa",clouds:a.weather[0].description,icon:a.weather[0].icon,name:a.name,temp:parseInt(a.main.temp-273)+"\xb0C"},done:!0})}))}},{key:"httpRequestAsync",value:function(e,t){var a=this;console.log("hello");var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&200===n.status?(t(n.responseText),a.setState({error:!1})):404===n.status&&a.setError()},n.open("GET",e,!0),n.send()}},{key:"setError",value:function(){this.setState({error:!0})}}]),t}(n.Component);var b=function(){return r.a.createElement("div",null,r.a.createElement("header",null),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CITY":return e.concat([t.data]);case"DELETE_CITY":return e.filter((function(e){return e.id!==t.data.id}));default:return e}},g=(a(28),a(9)),j=function(){try{var e=window.localStorage.getItem("app_state");if(!e)return;return JSON.parse(e)}catch(t){return}}(),k=Object(g.b)(w,j);k.subscribe((function(){!function(e){try{var t=JSON.stringify(e);window.localStorage.setItem("app_state",t)}catch(a){}}(k.getState())})),o.a.render(r.a.createElement(h.a,{store:k}," ",r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.97ee7b60.chunk.js.map