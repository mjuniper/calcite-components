System.register(["./p-dd45b0da.system.js","./p-68434ff0.system.js"],(function(t){"use strict";var a,r,n,i;return{setters:[function(t){a=t.r;r=t.h;n=t.g},function(t){i=t.g}],execute:function(){function e(t){return t<0?-1:1}function h(t,a,r){var n=a[0]-t[0];var i=r[0]-a[0];var h=a[1]-t[1];var s=r[1]-a[1];var v=h/(n||i<0&&0);var u=s/(i||n<0&&0);var o=(v*i+u*n)/(n+i);return(e(v)+e(u))*Math.min(Math.abs(v),Math.abs(u),.5*Math.abs(o))||0}function s(t,a,r){var n=a[0]-t[0];var i=a[1]-t[1];return n?(3*i/n-r)/2:r}function v(t,a,r,n,i){var e=t[0],h=t[1];var s=a[0],v=a[1];var u=(s-e)/3;var o=i([e+u,h+u*r]).join(",");var d=i([s-u,v-u*n]).join(",");var c=i([s,v]).join(",");return"C "+o+" "+d+" "+c}function u(t){var a=t.width,r=t.height,n=t.min,i=t.max;var e=i[0]-n[0];var h=i[1]-n[1];return function(t){var n=t[0]/e*a;var i=r-t[1]/h*r;return[n,i]}}function o(t){var a=t[0],r=a[0],n=a[1];var i=[r,n];var e=[r,n];return t.reduce((function(t,a){var r=t.min,n=t.max;var i=a[0],e=a[1];return{min:[Math.min(r[0],i),Math.min(r[1],e)],max:[Math.max(n[0],i),Math.max(n[1],e)]}}),{min:i,max:e})}function d(t){var a=t.data,r=t.min,n=t.max,i=t.t;if(a.length===0){return""}var e=i(a[0]),u=e[0],o=e[1];var d=i(r),c=d[0],g=d[1];var p=i(n)[0];var l;var m;var f;var x=a.reduce((function(t,r,n){m=a[n-2];f=a[n-1];if(n>1){var e=h(m,f,r);var u=l===undefined?s(m,f,e):l;var o=v(m,f,u,e,i);l=e;return t+" "+o}return t}),"M "+c+","+g+" L "+c+","+o+" L "+u+","+o);var w=a[a.length-1];var M=v(f,w,l,s(f,w,l),i);return x+" "+M+" L "+p+","+g+" Z"}var c=":host([hidden]){display:none}.svg{fill:currentColor;stroke:transparent;margin:0;padding:0;display:block}";var g=t("calcite_graph",function(){function t(t){a(this,t);this.data=[];this.width=300;this.height=100;this.maskId="calcite-graph-mask-"+i()}t.prototype.componentWillUpdate=function(){};t.prototype.render=function(){var t=this,a=t.data,n=t.width,i=t.height,e=t.highlightMax,h=t.highlightMin;var s=this.maskId;if(!a||a.length===0){return r("svg",{preserveAspectRatio:"none",class:"svg",viewBox:"0 0 "+n+" "+i,width:n,height:i})}var v=o(a),c=v.min,g=v.max;var p=u({min:c,max:g,width:n,height:i});var l=p([h,g[1]])[0];var m=p([e,g[1]])[0];var f=d({data:a,min:c,max:g,t:p});return r("svg",{preserveAspectRatio:"none",class:"svg",viewBox:"0 0 "+n+" "+i,width:n,height:i},h!==undefined?r("svg",{preserveAspectRatio:"none",class:"svg",viewBox:"0 0 "+n+" "+i,width:n,height:i},r("mask",{id:s+"1",x:"0%",y:"0%",width:"100%",height:"100%"},r("path",{fill:"white",d:"\n              M 0,0\n              L "+(l-1)+",0\n              L "+(l-1)+","+i+"\n              L 0,"+i+"\n              Z\n            "})),r("mask",{id:s+"2",x:"0%",y:"0%",width:"100%",height:"100%"},r("path",{fill:"white",d:"\n              M "+(l+1)+",0\n              L "+(m-1)+",0\n              L "+(m-1)+","+i+"\n              L "+(l+1)+", "+i+"\n              Z\n            "})),r("mask",{id:s+"3",x:"0%",y:"0%",width:"100%",height:"100%"},r("path",{fill:"white",d:"\n                  M "+(m+1)+",0\n                  L "+n+",0\n                  L "+n+","+i+"\n                  L "+(m+1)+", "+i+"\n                  Z\n                "})),r("path",{d:f,class:"graph-path",mask:"url(#"+s+"1)"}),r("path",{d:f,class:"graph-path--highlight",mask:"url(#"+s+"2)"}),r("path",{d:f,class:"graph-path",mask:"url(#"+s+"3)"})):r("path",{d:f,class:"graph-path"}))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return t}());g.style=c}}}));