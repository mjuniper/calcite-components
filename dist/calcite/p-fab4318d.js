import{g as t}from"./p-5751e60a.js";function n(t){var n=t.getBoundingClientRect();return{width:n.width,height:n.height,top:n.top,right:n.right,bottom:n.bottom,left:n.left,x:n.left,y:n.top}}function e(t){if("[object Window]"!==t.toString()){var n=t.ownerDocument;return n?n.defaultView:window}return t}function r(t){var n=e(t);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function o(t){return t instanceof e(t).Element||t instanceof Element}function i(t){return t instanceof e(t).HTMLElement||t instanceof HTMLElement}function a(t){return t?(t.nodeName||"").toLowerCase():null}function u(t){return(o(t)?t.ownerDocument:t.document).documentElement}function f(t){return n(u(t)).left+r(t).scrollLeft}function c(t,o,c){var p;void 0===c&&(c=!1);var s,d,l=n(t),v={scrollLeft:0,scrollTop:0},b={x:0,y:0};return c||("body"!==a(o)&&(v=(s=o)!==e(s)&&i(s)?{scrollLeft:(d=s).scrollLeft,scrollTop:d.scrollTop}:r(s)),i(o)?((b=n(o)).x+=o.clientLeft,b.y+=o.clientTop):(p=u(o))&&(b.x=f(p))),{x:l.left+v.scrollLeft-b.x,y:l.top+v.scrollTop-b.y,width:l.width,height:l.height}}function p(t){return{x:t.offsetLeft,y:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}}function s(t){return"html"===a(t)?t:t.assignedSlot||t.parentNode||t.host||u(t)}function d(t){return e(t).getComputedStyle(t)}function l(t,n){void 0===n&&(n=[]);var r=function t(n){if(["html","body","#document"].indexOf(a(n))>=0)return n.ownerDocument.body;if(i(n)){var e=d(n);if(/auto|scroll|overlay|hidden/.test(e.overflow+e.overflowY+e.overflowX))return n}return t(s(n))}(t),o="body"===a(r),u=e(r),f=o?[u].concat(u.visualViewport||[]):r,c=n.concat(f);return o?c:c.concat(l(s(f)))}function v(t){return["table","td","th"].indexOf(a(t))>=0}function b(t){return i(t)&&"fixed"!==d(t).position?t.offsetParent:null}function h(t){for(var n=e(t),r=b(t);r&&v(r);)r=b(r);return r&&"body"===a(r)&&"static"===d(r).position?n:r||n}var m="top",y="bottom",g="right",O="left",w=[m,y,g,O],x=w.reduce((function(t,n){return t.concat([n+"-start",n+"-end"])}),[]),j=[].concat(w,["auto"]).reduce((function(t,n){return t.concat([n,n+"-start",n+"-end"])}),[]),M=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function P(t){return t.split("-")[0]}var k={placement:"bottom",modifiers:[],strategy:"absolute"};function E(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return!n.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function B(t){void 0===t&&(t={});var n=t.defaultModifiers,e=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?k:r;return function(t,n,r){void 0===r&&(r=i);var a,u,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},k,{},i),modifiersData:{},elements:{reference:t,popper:n},attributes:{},styles:{}},s=[],d=!1,v={state:f,setOptions:function(r){b(),f.options=Object.assign({},i,{},f.options,{},r),f.scrollParents={reference:o(t)?l(t):t.contextElement?l(t.contextElement):[],popper:l(n)};var a,u,c=function(t){var n=function(t){var n=new Map,e=new Set,r=[];return t.forEach((function(t){n.set(t.name,t)})),t.forEach((function(t){e.has(t.name)||function t(o){e.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){if(!e.has(r)){var o=n.get(r);o&&t(o)}})),r.push(o)}(t)})),r}(t);return M.reduce((function(t,e){return t.concat(n.filter((function(t){return t.phase===e})))}),[])}((a=[].concat(e,f.options.modifiers),u=a.reduce((function(t,n){var e=t[n.name];return t[n.name]=e?Object.assign({},e,{},n,{options:Object.assign({},e.options,{},n.options),data:Object.assign({},e.data,{},n.data)}):n,t}),{}),Object.keys(u).map((function(t){return u[t]}))));return f.orderedModifiers=c.filter((function(t){return t.enabled})),f.orderedModifiers.forEach((function(t){var n=t.options,e=t.effect;if("function"==typeof e){var r=e({state:f,name:t.name,instance:v,options:void 0===n?{}:n});s.push(r||function(){})}})),v.update()},forceUpdate:function(){if(!d){var t=f.elements,n=t.reference,e=t.popper;if(E(n,e)){f.rects={reference:c(n,h(e),"fixed"===f.options.strategy),popper:p(e)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(t){return f.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options;"function"==typeof i&&(f=i({state:f,options:void 0===a?{}:a,name:o.name,instance:v})||f)}else f.reset=!1,r=-1}}},update:(a=function(){return new Promise((function(t){v.forceUpdate(),t(f)}))},function(){return u||(u=new Promise((function(t){Promise.resolve().then((function(){u=void 0,t(a())}))}))),u}),destroy:function(){b(),d=!0}};if(!E(t,n))return v;function b(){s.forEach((function(t){return t()})),s=[]}return v.setOptions(r).then((function(t){!d&&r.onFirstUpdate&&r.onFirstUpdate(t)})),v}}var q={passive:!0};function L(t){return t.split("-")[1]}function I(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function R(t){var n,e=t.reference,r=t.element,o=t.placement,i=o?P(o):null,a=o?L(o):null,u=e.x+e.width/2-r.width/2,f=e.y+e.height/2-r.height/2;switch(i){case m:n={x:u,y:e.y-r.height};break;case y:n={x:u,y:e.y+e.height};break;case g:n={x:e.x+e.width,y:f};break;case O:n={x:e.x-r.width,y:f};break;default:n={x:e.x,y:e.y}}var c=i?I(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case"start":n[c]=Math.floor(n[c])-Math.floor(e[p]/2-r[p]/2);break;case"end":n[c]=Math.floor(n[c])+Math.ceil(e[p]/2-r[p]/2)}}return n}var S={top:"auto",right:"auto",bottom:"auto",left:"auto"};function T(t){var n,r=t.popper,o=t.popperRect,i=t.placement,a=t.offsets,f=t.position,c=t.gpuAcceleration,p=t.adaptive,s=function(t){var n=t.y,e=window.devicePixelRatio||1;return{x:Math.round(t.x*e)/e||0,y:Math.round(n*e)/e||0}}(a),d=s.x,l=s.y,v=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),w=O,x=m,j=window;if(p){var M=h(r);M===e(r)&&(M=u(r)),i===m&&(x=y,l-=M.clientHeight-o.height,l*=c?1:-1),i===O&&(w=g,d-=M.clientWidth-o.width,d*=c?1:-1)}var P,k=Object.assign({position:f},p&&S);return Object.assign({},k,c?((P={})[x]=b?"0":"",P[w]=v?"0":"",P.transform=(j.devicePixelRatio||1)<2?"translate("+d+"px, "+l+"px)":"translate3d("+d+"px, "+l+"px, 0)",P):((n={})[x]=b?l+"px":"",n[w]=v?d+"px":"",n.transform="",n))}var W={left:"right",right:"left",bottom:"top",top:"bottom"};function A(t){return t.replace(/left|right|bottom|top/g,(function(t){return W[t]}))}var z={start:"end",end:"start"};function C(t){return t.replace(/start|end/g,(function(t){return z[t]}))}function H(t){return parseFloat(t)||0}function D(t,n){var e=Boolean(n.getRootNode&&n.getRootNode().host);if(t.contains(n))return!0;if(e){var r=n;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function F(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function U(t,o){return"viewport"===o?F(function(t){var n=e(t),r=n.visualViewport,o=n.innerWidth,i=n.innerHeight;return r&&/iPhone|iPod|iPad/.test(navigator.platform)&&(o=r.width,i=r.height),{width:o,height:i,x:0,y:0}}(t)):i(o)?n(o):F(function(t){var n=e(t),o=r(t),i=c(u(t),n);return i.height=Math.max(i.height,n.innerHeight),i.width=Math.max(i.width,n.innerWidth),i.x=-o.scrollLeft,i.y=-o.scrollTop,i}(u(t)))}function V(t,n,r){var c="clippingParents"===n?function(t){var n=l(t),e=["absolute","fixed"].indexOf(d(t).position)>=0&&i(t)?h(t):t;return o(e)?n.filter((function(t){return o(t)&&D(t,e)})):[]}(t):[].concat(n),p=[].concat(c,[r]),s=p.reduce((function(n,r){var o=U(t,r),c=function(t){var n=e(t),r=function(t){var n=i(t)?d(t):{};return{top:H(n.borderTopWidth),right:H(n.borderRightWidth),bottom:H(n.borderBottomWidth),left:H(n.borderLeftWidth)}}(t),o="html"===a(t),u=f(t),c=t.clientWidth+r.right,p=t.clientHeight+r.bottom;return o&&n.innerHeight-t.clientHeight>50&&(p=n.innerHeight-r.bottom),{top:o?0:t.clientTop,right:t.clientLeft>r.left?r.right:o?n.innerWidth-c-u:t.offsetWidth-c,bottom:o?n.innerHeight-p:t.offsetHeight-p,left:o?u:t.clientLeft}}(i(r)?r:u(t));return n.top=Math.max(o.top+c.top,n.top),n.right=Math.min(o.right-c.right,n.right),n.bottom=Math.min(o.bottom-c.bottom,n.bottom),n.left=Math.max(o.left+c.left,n.left),n}),U(t,p[0]));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function _(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},{},t)}function G(t,n){return n.reduce((function(n,e){return n[e]=t,n}),{})}function J(t,e){void 0===e&&(e={});var r=e.placement,i=void 0===r?t.placement:r,a=e.boundary,f=void 0===a?"clippingParents":a,c=e.rootBoundary,p=void 0===c?"viewport":c,s=e.elementContext,d=void 0===s?"popper":s,l=e.altBoundary,v=void 0!==l&&l,b=e.padding,h=void 0===b?0:b,O=_("number"!=typeof h?h:G(h,w)),x=t.elements.reference,j=t.rects.popper,M=t.elements[v?"popper"===d?"reference":"popper":d],P=V(o(M)?M:M.contextElement||u(t.elements.popper),f,p),k=n(x),E=R({reference:k,element:j,strategy:"absolute",placement:i}),B=F(Object.assign({},j,{},E)),q="popper"===d?B:k,L={top:P.top-q.top+O.top,bottom:q.bottom-P.bottom+O.bottom,left:P.left-q.left+O.left,right:q.right-P.right+O.right},I=t.modifiersData.offset;if("popper"===d&&I){var S=I[i];Object.keys(L).forEach((function(t){var n=[g,y].indexOf(t)>=0?1:-1,e=[m,y].indexOf(t)>=0?"y":"x";L[t]+=S[e]*n}))}return L}function K(t,n){void 0===n&&(n={});var e=n.boundary,r=n.rootBoundary,o=n.padding,i=n.flipVariations,a=n.allowedAutoPlacements,u=void 0===a?j:a,f=L(n.placement),c=(f?i?x:x.filter((function(t){return L(t)===f})):w).filter((function(t){return u.indexOf(t)>=0})).reduce((function(n,i){return n[i]=J(t,{placement:i,boundary:e,rootBoundary:r,padding:o})[P(i)],n}),{});return Object.keys(c).sort((function(t,n){return c[t]-c[n]}))}function N(t,n,e){return Math.max(t,Math.min(n,e))}function Q(t,n,e){return void 0===e&&(e={x:0,y:0}),{top:t.top-n.height-e.y,right:t.right-n.width+e.x,bottom:t.bottom-n.height+e.y,left:t.left-n.width-e.x}}function X(t){return[m,g,y,O].some((function(n){return t[n]>=0}))}var Y=B({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var n=t.state,r=t.instance,o=t.options,i=o.scroll,a=void 0===i||i,u=o.resize,f=void 0===u||u,c=e(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&p.forEach((function(t){t.addEventListener("scroll",r.update,q)})),f&&c.addEventListener("resize",r.update,q),function(){a&&p.forEach((function(t){t.removeEventListener("scroll",r.update,q)})),f&&c.removeEventListener("resize",r.update,q)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var n=t.state;n.modifiersData[t.name]=R({reference:n.rects.reference,element:n.rects.popper,strategy:"absolute",placement:n.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var n=t.state,e=t.options,r=e.gpuAcceleration,o=void 0===r||r,i=e.adaptive,a=void 0===i||i,u={placement:P(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:o};null!=n.modifiersData.popperOffsets&&(n.styles.popper=Object.assign({},n.styles.popper,{},T(Object.assign({},u,{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:a})))),null!=n.modifiersData.arrow&&(n.styles.arrow=Object.assign({},n.styles.arrow,{},T(Object.assign({},u,{offsets:n.modifiersData.arrow,position:"absolute",adaptive:!1})))),n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-placement":n.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var n=t.state;Object.keys(n.elements).forEach((function(t){var e=n.styles[t]||{},r=n.attributes[t]||{},o=n.elements[t];i(o)&&a(o)&&(Object.assign(o.style,e),Object.keys(r).forEach((function(t){var n=r[t];!1===n?o.removeAttribute(t):o.setAttribute(t,!0===n?"":n)})))}))},effect:function(t){var n=t.state,e={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(n.elements.popper.style,e.popper),n.elements.arrow&&Object.assign(n.elements.arrow.style,e.arrow),function(){Object.keys(n.elements).forEach((function(t){var r=n.elements[t],o=n.attributes[t]||{},u=Object.keys(n.styles.hasOwnProperty(t)?n.styles[t]:e[t]).reduce((function(t,n){return t[n]="",t}),{});i(r)&&a(r)&&(Object.assign(r.style,u),Object.keys(o).forEach((function(t){r.removeAttribute(t)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var n=t.state,e=t.name,r=t.options.offset,o=void 0===r?[0,0]:r,i=j.reduce((function(t,e){return t[e]=function(t,n,e){var r=P(t),o=[O,m].indexOf(r)>=0?-1:1,i="function"==typeof e?e(Object.assign({},n,{placement:t})):e,a=i[0],u=i[1];return a=a||0,u=(u||0)*o,[O,g].indexOf(r)>=0?{x:u,y:a}:{x:a,y:u}}(e,n.rects,o),t}),{}),a=i[n.placement],u=a.y;null!=n.modifiersData.popperOffsets&&(n.modifiersData.popperOffsets.x+=a.x,n.modifiersData.popperOffsets.y+=u),n.modifiersData[e]=i}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var n=t.state,e=t.options,r=t.name;if(!n.modifiersData[r]._skip){for(var o=e.fallbackPlacements,i=e.padding,a=e.boundary,u=e.rootBoundary,f=e.altBoundary,c=e.flipVariations,p=void 0===c||c,s=e.allowedAutoPlacements,d=n.options.placement,l=P(d),v=o||(l!==d&&p?function(t){if("auto"===P(t))return[];var n=A(t);return[C(t),n,C(n)]}(d):[A(d)]),b=[d].concat(v).reduce((function(t,e){return t.concat("auto"===P(e)?K(n,{placement:e,boundary:a,rootBoundary:u,padding:i,flipVariations:p,allowedAutoPlacements:s}):e)}),[]),h=n.rects.reference,w=n.rects.popper,x=new Map,j=!0,M=b[0],k=0;k<b.length;k++){var E=b[k],B=P(E),q="start"===L(E),I=[m,y].indexOf(B)>=0,R=I?"width":"height",S=J(n,{placement:E,boundary:a,rootBoundary:u,altBoundary:f,padding:i}),T=I?q?g:O:q?y:m;h[R]>w[R]&&(T=A(T));var W=A(T),z=[S[B]<=0,S[T]<=0,S[W]<=0];if(z.every((function(t){return t}))){M=E,j=!1;break}x.set(E,z)}if(j)for(var H=function(t){var n=b.find((function(n){var e=x.get(n);if(e)return e.slice(0,t).every((function(t){return t}))}));if(n)return M=n,"break"},D=p?3:1;D>0&&"break"!==H(D);D--);n.placement!==M&&(n.modifiersData[r]._skip=!0,n.placement=M,n.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var n=t.state,e=t.options,r=t.name,o=e.mainAxis,i=void 0===o||o,a=e.altAxis,u=void 0!==a&&a,f=e.tether,c=void 0===f||f,s=e.tetherOffset,d=void 0===s?0:s,l=J(n,{boundary:e.boundary,rootBoundary:e.rootBoundary,padding:e.padding,altBoundary:e.altBoundary}),v=P(n.placement),b=L(n.placement),w=!b,x=I(v),j="x"===x?"y":"x",M=n.modifiersData.popperOffsets,k=n.rects.reference,E=n.rects.popper,B="function"==typeof d?d(Object.assign({},n.rects,{placement:n.placement})):d,q={x:0,y:0};if(M){if(i){var R="y"===x?m:O,S="y"===x?y:g,T="y"===x?"height":"width",W=M[x],A=M[x]+l[R],z=M[x]-l[S],C=c?-E[T]/2:0,H="start"===b?k[T]:E[T],D="start"===b?-E[T]:-k[T],F=n.elements.arrow,U=c&&F?p(F):{width:0,height:0},V=n.modifiersData["arrow#persistent"]?n.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},_=V[R],G=V[S],K=N(0,k[T],U[T]),Q=w?k[T]/2-C-K-_-B:H-K-_-B,X=w?-k[T]/2+C+K+G+B:D+K+G+B,Y=n.elements.arrow&&h(n.elements.arrow),Z=n.modifiersData.offset?n.modifiersData.offset[n.placement][x]:0,$=M[x]+X-Z,tt=N(c?Math.min(A,M[x]+Q-Z-(Y?"y"===x?Y.clientTop||0:Y.clientLeft||0:0)):A,W,c?Math.max(z,$):z);M[x]=tt,q[x]=tt-W}if(u){var nt=M[j],et=N(nt+l["x"===x?m:O],nt,nt-l["x"===x?y:g]);M[j]=et,q[j]=et-nt}n.modifiersData[r]=q}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var n,e=t.state,r=t.name,o=e.elements.arrow,i=e.modifiersData.popperOffsets,a=P(e.placement),u=I(a),f=[O,g].indexOf(a)>=0?"height":"width";if(o&&i){var c=e.modifiersData[r+"#persistent"].padding,s=p(o),d="y"===u?m:O,l="y"===u?y:g,v=e.rects.reference[f]+e.rects.reference[u]-i[u]-e.rects.popper[f],b=i[u]-e.rects.reference[u],w=e.elements.arrow&&h(e.elements.arrow),x=w?"y"===u?w.clientHeight||0:w.clientWidth||0:0,j=x/2-s[f]/2+(v/2-b/2),M=N(c[d],j,x-s[f]-c[l]);e.modifiersData[r]=((n={})[u]=M,n.centerOffset=M-j,n)}},effect:function(t){var n=t.state,e=t.options,r=t.name,o=e.element,i=void 0===o?"[data-popper-arrow]":o,a=e.padding,u=void 0===a?0:a;null!=i&&("string"!=typeof i||(i=n.elements.popper.querySelector(i)))&&D(n.elements.popper,i)&&(n.elements.arrow=i,n.modifiersData[r+"#persistent"]={padding:_("number"!=typeof u?u:G(u,w))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var n=t.state,e=t.name,r=n.rects.reference,o=n.rects.popper,i=n.modifiersData.preventOverflow,a=J(n,{elementContext:"reference"}),u=J(n,{altBoundary:!0}),f=Q(a,r),c=Q(u,o,i),p=X(f),s=X(c);n.modifiersData[e]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:s},n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":s})}}]});function Z(n,e){const r=["left","right"];return"rtl"===t(n)&&r.reverse(),e.replace(/leading/gi,r[0]).replace(/trailing/gi,r[1])}function $({referenceEl:t,el:n,open:e,placement:r,modifiers:o}){return t&&e?Y(t,n,{placement:Z(n,r),modifiers:o}):null}function tt({el:t,modifiers:n,placement:e,popper:r}){const o=Z(t,e);r.setOptions({modifiers:n,placement:o})}const nt=Math.ceil((4,Math.sqrt(Math.pow(4,2)+Math.pow(4,2))));export{$ as c,nt as d,tt as u}