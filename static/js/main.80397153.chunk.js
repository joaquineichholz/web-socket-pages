(this.webpackJsonpt03v2=this.webpackJsonpt03v2||[]).push([[0],{202:function(e,t,n){e.exports=n(415)},231:function(e,t){},238:function(e,t,n){},415:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n(7),r=n(15),l=n(9),o=n(164),u=n(58),i=n.n(u),m=n(1),s=n.n(m),b=n(28),E=n.n(b),O=(n(238),n(60)),f=n(61),j=n(65),h=n(64),d=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return s.a.createElement("button",{type:"button",onClick:this.props.disconnect}," Disconnect")}}]),n}(m.Component),k=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(O.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){return s.a.createElement("button",{type:"button",onClick:this.props.connect},"Connect")}}]),n}(m.Component);function v(e){var t=e.buy,n=e.sell,a=e.tickerToExchange,c=e.exchange,r={},l={},o={},u=0,i=Object.keys(t),m=Object.keys(n).filter((function(e){return-1!=i.indexOf(e)})),b=0;for(b=0;b<m.length;b++){var E=m[b],O=a[E];if(r[O]||(r[O]=1),l[O])try{l[O]+=t[E].reduce((function(e,t){return e+t}),0)}catch(h){console.error(h)}else try{l[O]=t[E].reduce((function(e,t){return e+t}),0)}catch(h){console.error(h)}if(o[O])try{o[O]+=n[E].reduce((function(e,t){return e+t}),0)}catch(h){console.error(h)}else try{o[O]=n[E].reduce((function(e,t){return e+t}),0)}catch(h){console.error(h)}}var f=0;for(f=0;f<Object.keys(l).length;f++){O=Object.keys(l)[f];u+=l[O]+o[O],c[O]?r[O]=c[O].nStocks:r[O]=2}var j=1;return s.a.createElement("div",null,s.a.createElement("h1",null," Exchanges Information"),s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",{className:"table"},s.a.createElement("th",null," id "),s.a.createElement("th",null," Exchange "),s.a.createElement("th",null," BUY Volume  "),s.a.createElement("th",null," SELL Volume "),s.a.createElement("th",null," Total Volume "),s.a.createElement("th",null," N Stocks "),s.a.createElement("th",null," Participation "))),s.a.createElement("thead",null,Object.keys(l).sort().map((function(e){return s.a.createElement("tr",null,s.a.createElement("td",null," ",j++," "),s.a.createElement("td",null," ",e," "),s.a.createElement("td",null," ",l[e].toLocaleString()," "),s.a.createElement("td",null," ",o[e].toLocaleString()," "),s.a.createElement("td",null," ",(l[e]+o[e]).toLocaleString()," "),s.a.createElement("td",null," ",r[e].toLocaleString()," "),s.a.createElement("td",null," ",parseFloat(100*(l[e]+o[e])/u).toFixed(4)+"%"," "))})))))}function y(e){var t=e.value,n=e.buy,a=e.sell,c=e.tickerToCountry,l=e.tickerToName,o={},u={},i={},m={},b=Object.keys(n),E=Object.keys(a).filter((function(e){return-1!=b.indexOf(e)})),O=0;for(O=0;O<E.length;O++){var f=E[O];if(l[f]?o[f]=l[f]:o[f]=":)",c[f]?u[f]=c[f]:u[f]=":)",i[f])try{i[f]+=n[f].reduce((function(e,t){return e+t}),0)}catch(y){console.error(y)}else try{i[f]=n[f].reduce((function(e,t){return e+t}),0)}catch(y){console.error(y)}if(m[f])try{m[f]+=a[f].reduce((function(e,t){return e+t}),0)}catch(y){console.error(y)}else try{m[f]=a[f].reduce((function(e,t){return e+t}),0)}catch(y){console.error(y)}}var j={},h={};E=Object.keys(t);var d=0;for(d=0;d<E.length;d++)if(t[E[d]].length>2){var k=0;for(k=0;k<t[E[d]].length-3&&(j[E[d]]=(t[E[d]][t[E[d]].length-2-k]-t[E[d]][t[E[d]].length-1])/t[E[d]][t[E[d]].length-2-k],0==j[E[d]]);k++);h[E[d]]=t[E[d]][t[E[d]].length-1]}else t[E[d]].length>1?(j[E[d]]=0,h[E[d]]=t[E[d]][t[E[d]].length-1]):(j[E[d]]=0,h[E[d]]=0);var v=1;return s.a.createElement("div",null,s.a.createElement("h1",null," Stocks Information "),s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",{className:"table"},s.a.createElement("th",null," id "),s.a.createElement("th",null," Name "),s.a.createElement("th",null," Country "),s.a.createElement("th",null," Ticker "),s.a.createElement("th",null," Total Volume  "),s.a.createElement("th",null," Historical HIGH  "),s.a.createElement("th",null," Historical LOW "),s.a.createElement("th",null," Last Price "),s.a.createElement("th",null," Delta Price (with the last different) "))),s.a.createElement("thead",null,E.sort().map((function(e){return s.a.createElement("tr",null,s.a.createElement("td",null," ",v++," "),s.a.createElement("td",null," ",o[e]," "),s.a.createElement("td",null," ",u[e]," "),s.a.createElement("td",null," ",e," "),s.a.createElement("td",null," ","$"+(m[e]+m[e]).toLocaleString()+"USD"," "),s.a.createElement("td",null," ","$"+Math.max.apply(Math,Object(r.a)(t[e])).toLocaleString()+"USD"," "),s.a.createElement("td",null," ","$"+Math.min.apply(Math,Object(r.a)(t[e])).toLocaleString()+"USD"," "),s.a.createElement("td",null," ","$"+h[e].toLocaleString()+"USD"," "),s.a.createElement("td",null," ",parseFloat(100*j[e]).toFixed(4)+"%"," "))})))))}var S=n(21);function p(e){var t=Object(m.useState)([]),n=Object(l.a)(t,2),a=n[0],c=(n[1],e.data);return a.length>0&&a[0].ticker,s.a.createElement("div",null,s.a.createElement(S.c,{width:450,height:300,data:c},s.a.createElement(S.e,{dataKey:"time",stroke:"#7c795d",label:{value:"Tiempo",maeginTop:"100px",position:"insideBottom"}}),s.a.createElement(S.f,{stroke:"#7c795d",label:{value:"Valor",angle:-90}}),s.a.createElement(S.d,null),s.a.createElement(S.a,{stroke:"#7c795d ",strokeDasharray:"5 5"}),s.a.createElement(S.b,{time:"monotone",dataKey:"value",stroke:"#4CAF50",activeDot:{r:8}})))}var g=i()("wss://le-18262636.bitzonte.com",{path:"/stocks"}),x=function(e){Object(o.a)(e);var t=Object(m.useState)([]),n=Object(l.a)(t,2),u=n[0],i=n[1],b=Object(m.useState)({}),E=Object(l.a)(b,2),O=E[0],f=E[1],j=Object(m.useState)({}),h=Object(l.a)(j,2),S=h[0],x=h[1],N=Object(m.useState)({}),T=Object(l.a)(N,2),L=T[0],C=T[1],D=Object(m.useState)({}),U=Object(l.a)(D,2),V=U[0],w=U[1],H=Object(m.useState)({}),F=Object(l.a)(H,2),I=F[0],A=F[1],B=Object(m.useState)(!0),K=Object(l.a)(B,2),M=K[0],P=K[1],$=Object(m.useState)(),_=Object(l.a)($,2),G=(_[0],_[1]),J=Object(m.useState)(),X=Object(l.a)(J,2),Y=(X[0],X[1]),z=Object(m.useState)({}),W=Object(l.a)(z,2),q=W[0],Q=W[1],R=Object(m.useState)({}),Z=Object(l.a)(R,2),ee=Z[0],te=Z[1],ne=Object(m.useState)({}),ae=Object(l.a)(ne,2),ce=ae[0],re=ae[1];return Object(m.useEffect)((function(){var e={};g.emit("STOCKS",(function(){})),g.on("STOCKS",(function(t){for(var n=0;n<t.length;n++)i((function(e){return[].concat(Object(r.a)(e),[t[n]])})),e[t[n].company_name]=t[n].ticker,C((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},t[n].ticker,t[n].company_name))})),w((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},t[n].ticker,t[n].country))}));g.emit("EXCHANGES",(function(e){}))})),g.on("EXCHANGES",(function(t){Object.keys(t).map((function(n){for(var r=0,l=0;l<t[n].listed_companies.length;l++)r++,re((function(r){return Object(c.a)(Object(c.a)({},r),{},Object(a.a)({},e[t[n].listed_companies[l]],n))}));var o={buyVolume:0,sellVolume:0,nStocks:r,country:t[n].country};A((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},n,o))}))}))}))}),[]),Object(m.useEffect)((function(){g.on("UPDATE",(function(e){var t={time:new Date(e.time).toISOString().substr(11,5),value:e.value};f((function(n){return Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},e.ticker,[].concat(Object(r.a)(n[e.ticker]||[]),[t])))})),x((function(n){return Object(c.a)(Object(c.a)({},n),{},Object(a.a)({},e.ticker,[].concat(Object(r.a)(n[e.ticker]||[]),[t.value])))}))}))}),[]),Object(m.useEffect)((function(){g.on("BUY",(function(e){Q((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(a.a)({},e.ticker,[].concat(Object(r.a)(t[e.ticker]||[]),[e.volume])))}))}))}),[]),Object(m.useEffect)((function(){g.on("SELL",(function(e){te((function(t){return Object(c.a)(Object(c.a)({},t),{},Object(a.a)({},e.ticker,[].concat(Object(r.a)(t[e.ticker]||[]),[e.volume])))}))}))}),[]),s.a.createElement("div",null,s.a.createElement("ul",{className:"nav-ul"},!0===M&&s.a.createElement("li",{className:"nav-li"}," ",s.a.createElement(d,{disconnect:function(){P(!1),G(g.disconnect())}})),!1===M&&s.a.createElement("li",{className:"nav-li"}," ",s.a.createElement(k,{connect:function(){P(!0),Y(g.connect())}}))),s.a.createElement(v,{buy:q,sell:ee,exchange:I,tickerToExchange:ce}),s.a.createElement(y,{tickerToCountry:V,tickerToName:L,buy:q,sell:ee,value:S,exchange:I,tickerToExchange:ce}),s.a.createElement("div",{className:"chartSpace"},u.map((function(e){return s.a.createElement("div",{className:"chart"},s.a.createElement("h2",null," ",e.ticker," "),s.a.createElement("div",null,s.a.createElement(p,{key:e.ticker,data:O[e.ticker]})))}))))};E.a.render(s.a.createElement(x,null),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.80397153.chunk.js.map