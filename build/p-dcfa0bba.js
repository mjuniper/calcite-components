import{g as t}from"./p-dc825c55.js";var n="top",e="bottom",r="right",o="left",i=[n,e,r,o],a=i.reduce((function(t,n){return t.concat([n+"-start",n+"-end"])}),[]),u=[].concat(i,["auto"]).reduce((function(t,n){return t.concat([n,n+"-start",n+"-end"])}),[]),f=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function c(t){return t?(t.nodeName||"").toLowerCase():null}function p(t){if(null==t)return window;if("[object Window]"!==t.toString()){var n=t.ownerDocument;return n&&n.defaultView||window}return t}function s(t){return t instanceof p(t).Element||t instanceof Element}function d(t){return t instanceof p(t).HTMLElement||t instanceof HTMLElement}function l(t){return"undefined"!=typeof ShadowRoot&&(t instanceof p(t).ShadowRoot||t instanceof ShadowRoot)}function v(t){return t.split("-")[0]}var b=Math.round;function m(t,n){void 0===n&&(n=!1);var e=t.getBoundingClientRect(),r=1,o=1;if(d(t)&&n){var i=t.offsetHeight,a=t.offsetWidth;a>0&&(r=e.width/a||1),i>0&&(o=e.height/i||1)}return{width:b(e.width/r),height:b(e.height/o),top:b(e.top/o),right:b(e.right/r),bottom:b(e.bottom/o),left:b(e.left/r),x:b(e.left/r),y:b(e.top/o)}}function h(t){var n=m(t),e=t.offsetWidth,r=t.offsetHeight;return Math.abs(n.width-e)<=1&&(e=n.width),Math.abs(n.height-r)<=1&&(r=n.height),{x:t.offsetLeft,y:t.offsetTop,width:e,height:r}}function y(t,n){var e=n.getRootNode&&n.getRootNode();if(t.contains(n))return!0;if(e&&l(e)){var r=n;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function g(t){return p(t).getComputedStyle(t)}function w(t){return["table","td","th"].indexOf(c(t))>=0}function O(t){return((s(t)?t.ownerDocument:t.document)||window.document).documentElement}function x(t){return"html"===c(t)?t:t.assignedSlot||t.parentNode||(l(t)?t.host:null)||O(t)}function j(t){return d(t)&&"fixed"!==g(t).position?t.offsetParent:null}function M(t){for(var n=p(t),e=j(t);e&&w(e)&&"static"===g(e).position;)e=j(e);return e&&("html"===c(e)||"body"===c(e)&&"static"===g(e).position)?n:e||function(t){var n=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&d(t)&&"fixed"===g(t).position)return null;for(var e=x(t);d(e)&&["html","body"].indexOf(c(e))<0;){var r=g(e);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||n&&"filter"===r.willChange||n&&r.filter&&"none"!==r.filter)return e;e=e.parentNode}return null}(t)||n}function k(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var E=Math.max,P=Math.min,q=Math.round;function B(t,n,e){return E(t,P(n,e))}function R(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function S(t,n){return n.reduce((function(n,e){return n[e]=t,n}),{})}function W(t){return t.split("-")[1]}var L={top:"auto",right:"auto",bottom:"auto",left:"auto"};function T(t){var i,a=t.popper,u=t.popperRect,f=t.placement,c=t.variation,s=t.offsets,d=t.position,l=t.gpuAcceleration,v=t.adaptive,b=t.roundOffsets,m=!0===b?function(t){var n=t.y,e=window.devicePixelRatio||1;return{x:q(q(t.x*e)/e)||0,y:q(q(n*e)/e)||0}}(s):"function"==typeof b?b(s):s,h=m.x,y=void 0===h?0:h,w=m.y,x=void 0===w?0:w,j=s.hasOwnProperty("x"),k=s.hasOwnProperty("y"),E=o,P=n,B=window;if(v){var R=M(a),S="clientHeight",W="clientWidth";R===p(a)&&"static"!==g(R=O(a)).position&&"absolute"===d&&(S="scrollHeight",W="scrollWidth"),R=R,f!==n&&(f!==o&&f!==r||"end"!==c)||(P=e,x-=R[S]-u.height,x*=l?1:-1),f!==o&&(f!==n&&f!==e||"end"!==c)||(E=r,y-=R[W]-u.width,y*=l?1:-1)}var T,A=Object.assign({position:d},v&&L);return Object.assign({},A,l?((T={})[P]=k?"0":"",T[E]=j?"0":"",T.transform=(B.devicePixelRatio||1)<=1?"translate("+y+"px, "+x+"px)":"translate3d("+y+"px, "+x+"px, 0)",T):((i={})[P]=k?x+"px":"",i[E]=j?y+"px":"",i.transform="",i))}var A={passive:!0},H={left:"right",right:"left",bottom:"top",top:"bottom"};function I(t){return t.replace(/left|right|bottom|top/g,(function(t){return H[t]}))}var C={start:"end",end:"start"};function z(t){return t.replace(/start|end/g,(function(t){return C[t]}))}function $(t){var n=p(t);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function D(t){return m(O(t)).left+$(t).scrollLeft}function U(t){var n=g(t);return/auto|scroll|overlay|hidden/.test(n.overflow+n.overflowY+n.overflowX)}function V(t){return["html","body","#document"].indexOf(c(t))>=0?t.ownerDocument.body:d(t)&&U(t)?t:V(x(t))}function _(t,n){var e;void 0===n&&(n=[]);var r=V(t),o=r===(null==(e=t.ownerDocument)?void 0:e.body),i=p(r),a=o?[i].concat(i.visualViewport||[],U(r)?r:[]):r,u=n.concat(a);return o?u:u.concat(_(x(a)))}function F(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function G(t,n){return"viewport"===n?F(function(t){var n=p(t),e=O(t),r=n.visualViewport,o=e.clientWidth,i=e.clientHeight,a=0,u=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,u=r.offsetTop)),{width:o,height:i,x:a+D(t),y:u}}(t)):d(n)?function(t){var n=m(t);return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}(n):F(function(t){var n,e=O(t),r=$(t),o=null==(n=t.ownerDocument)?void 0:n.body,i=E(e.scrollWidth,e.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=E(e.scrollHeight,e.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),u=-r.scrollLeft+D(t),f=-r.scrollTop;return"rtl"===g(o||e).direction&&(u+=E(e.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:u,y:f}}(O(t)))}function J(t){var i,a=t.reference,u=t.element,f=t.placement,c=f?v(f):null,p=f?W(f):null,s=a.x+a.width/2-u.width/2,d=a.y+a.height/2-u.height/2;switch(c){case n:i={x:s,y:a.y-u.height};break;case e:i={x:s,y:a.y+a.height};break;case r:i={x:a.x+a.width,y:d};break;case o:i={x:a.x-u.width,y:d};break;default:i={x:a.x,y:a.y}}var l=c?k(c):null;if(null!=l){var b="y"===l?"height":"width";switch(p){case"start":i[l]=i[l]-(a[b]/2-u[b]/2);break;case"end":i[l]=i[l]+(a[b]/2-u[b]/2)}}return i}function K(t,o){void 0===o&&(o={});var a=o.placement,u=void 0===a?t.placement:a,f=o.boundary,p=void 0===f?"clippingParents":f,l=o.rootBoundary,v=void 0===l?"viewport":l,b=o.elementContext,h=void 0===b?"popper":b,w=o.altBoundary,j=void 0!==w&&w,k=o.padding,q=void 0===k?0:k,B=R("number"!=typeof q?q:S(q,i)),W=t.rects.popper,L=t.elements[j?"popper"===h?"reference":"popper":h],T=function(t,n,e){var r="clippingParents"===n?function(t){var n=_(x(t)),e=["absolute","fixed"].indexOf(g(t).position)>=0&&d(t)?M(t):t;return s(e)?n.filter((function(t){return s(t)&&y(t,e)&&"body"!==c(t)})):[]}(t):[].concat(n),o=[].concat(r,[e]),i=o.reduce((function(n,e){var r=G(t,e);return n.top=E(r.top,n.top),n.right=P(r.right,n.right),n.bottom=P(r.bottom,n.bottom),n.left=E(r.left,n.left),n}),G(t,o[0]));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}(s(L)?L:L.contextElement||O(t.elements.popper),p,v),A=m(t.elements.reference),H=J({reference:A,element:W,strategy:"absolute",placement:u}),I=F(Object.assign({},W,H)),C="popper"===h?I:A,z={top:T.top-C.top+B.top,bottom:C.bottom-T.bottom+B.bottom,left:T.left-C.left+B.left,right:C.right-T.right+B.right},$=t.modifiersData.offset;if("popper"===h&&$){var D=$[u];Object.keys(z).forEach((function(t){var o=[r,e].indexOf(t)>=0?1:-1,i=[n,e].indexOf(t)>=0?"y":"x";z[t]+=D[i]*o}))}return z}function N(t,n){void 0===n&&(n={});var e=n.boundary,r=n.rootBoundary,o=n.padding,f=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?u:c,s=W(n.placement),d=s?f?a:a.filter((function(t){return W(t)===s})):i,l=d.filter((function(t){return p.indexOf(t)>=0}));0===l.length&&(l=d);var b=l.reduce((function(n,i){return n[i]=K(t,{placement:i,boundary:e,rootBoundary:r,padding:o})[v(i)],n}),{});return Object.keys(b).sort((function(t,n){return b[t]-b[n]}))}function Q(t,n,e){return void 0===e&&(e={x:0,y:0}),{top:t.top-n.height-e.y,right:t.right-n.width+e.x,bottom:t.bottom-n.height+e.y,left:t.left-n.width-e.x}}function X(t){return[n,r,e,o].some((function(n){return t[n]>=0}))}function Y(t,n,e){void 0===e&&(e=!1);var r,o,i=d(n),a=d(n)&&function(t){var n=t.getBoundingClientRect();return 1!==(n.width/t.offsetWidth||1)||1!==(n.height/t.offsetHeight||1)}(n),u=O(n),f=m(t,a),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(i||!i&&!e)&&(("body"!==c(n)||U(u))&&(s=(r=n)!==p(r)&&d(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:$(r)),d(n)?((l=m(n,!0)).x+=n.clientLeft,l.y+=n.clientTop):u&&(l.x=D(u))),{x:f.left+s.scrollLeft-l.x,y:f.top+s.scrollTop-l.y,width:f.width,height:f.height}}function Z(t){var n=new Map,e=new Set,r=[];function o(t){e.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!e.has(t)){var r=n.get(t);r&&o(r)}})),r.push(t)}return t.forEach((function(t){n.set(t.name,t)})),t.forEach((function(t){e.has(t.name)||o(t)})),r}var tt={placement:"bottom",modifiers:[],strategy:"absolute"};function nt(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return!n.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function et(t){void 0===t&&(t={});var n=t.defaultModifiers,e=void 0===n?[]:n,r=t.defaultOptions,o=void 0===r?tt:r;return function(t,n,r){void 0===r&&(r=o);var i,a,u={placement:"bottom",orderedModifiers:[],options:Object.assign({},tt,o),modifiersData:{},elements:{reference:t,popper:n},attributes:{},styles:{}},c=[],p=!1,d={state:u,setOptions:function(r){var i="function"==typeof r?r(u.options):r;l(),u.options=Object.assign({},o,u.options,i),u.scrollParents={reference:s(t)?_(t):t.contextElement?_(t.contextElement):[],popper:_(n)};var a,p,v=function(t){var n=Z(t);return f.reduce((function(t,e){return t.concat(n.filter((function(t){return t.phase===e})))}),[])}((a=[].concat(e,u.options.modifiers),p=a.reduce((function(t,n){var e=t[n.name];return t[n.name]=e?Object.assign({},e,n,{options:Object.assign({},e.options,n.options),data:Object.assign({},e.data,n.data)}):n,t}),{}),Object.keys(p).map((function(t){return p[t]}))));return u.orderedModifiers=v.filter((function(t){return t.enabled})),u.orderedModifiers.forEach((function(t){var n=t.options,e=t.effect;if("function"==typeof e){var r=e({state:u,name:t.name,instance:d,options:void 0===n?{}:n});c.push(r||function(){})}})),d.update()},forceUpdate:function(){if(!p){var t=u.elements,n=t.reference,e=t.popper;if(nt(n,e)){u.rects={reference:Y(n,M(e),"fixed"===u.options.strategy),popper:h(e)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach((function(t){return u.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<u.orderedModifiers.length;r++)if(!0!==u.reset){var o=u.orderedModifiers[r],i=o.fn,a=o.options;"function"==typeof i&&(u=i({state:u,options:void 0===a?{}:a,name:o.name,instance:d})||u)}else u.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(t){d.forceUpdate(),t(u)}))},function(){return a||(a=new Promise((function(t){Promise.resolve().then((function(){a=void 0,t(i())}))}))),a}),destroy:function(){l(),p=!0}};if(!nt(t,n))return d;function l(){c.forEach((function(t){return t()})),c=[]}return d.setOptions(r).then((function(t){!p&&r.onFirstUpdate&&r.onFirstUpdate(t)})),d}}var rt=et({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var n=t.state,e=t.instance,r=t.options,o=r.scroll,i=void 0===o||o,a=r.resize,u=void 0===a||a,f=p(n.elements.popper),c=[].concat(n.scrollParents.reference,n.scrollParents.popper);return i&&c.forEach((function(t){t.addEventListener("scroll",e.update,A)})),u&&f.addEventListener("resize",e.update,A),function(){i&&c.forEach((function(t){t.removeEventListener("scroll",e.update,A)})),u&&f.removeEventListener("resize",e.update,A)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var n=t.state;n.modifiersData[t.name]=J({reference:n.rects.reference,element:n.rects.popper,strategy:"absolute",placement:n.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var n=t.state,e=t.options,r=e.gpuAcceleration,o=void 0===r||r,i=e.adaptive,a=void 0===i||i,u=e.roundOffsets,f=void 0===u||u,c={placement:v(n.placement),variation:W(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:o};null!=n.modifiersData.popperOffsets&&(n.styles.popper=Object.assign({},n.styles.popper,T(Object.assign({},c,{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:a,roundOffsets:f})))),null!=n.modifiersData.arrow&&(n.styles.arrow=Object.assign({},n.styles.arrow,T(Object.assign({},c,{offsets:n.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-placement":n.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var n=t.state;Object.keys(n.elements).forEach((function(t){var e=n.styles[t]||{},r=n.attributes[t]||{},o=n.elements[t];d(o)&&c(o)&&(Object.assign(o.style,e),Object.keys(r).forEach((function(t){var n=r[t];!1===n?o.removeAttribute(t):o.setAttribute(t,!0===n?"":n)})))}))},effect:function(t){var n=t.state,e={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(n.elements.popper.style,e.popper),n.styles=e,n.elements.arrow&&Object.assign(n.elements.arrow.style,e.arrow),function(){Object.keys(n.elements).forEach((function(t){var r=n.elements[t],o=n.attributes[t]||{},i=Object.keys(n.styles.hasOwnProperty(t)?n.styles[t]:e[t]).reduce((function(t,n){return t[n]="",t}),{});d(r)&&c(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(t){r.removeAttribute(t)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.name,a=t.options.offset,f=void 0===a?[0,0]:a,c=u.reduce((function(t,i){return t[i]=function(t,e,i){var a=v(t),u=[o,n].indexOf(a)>=0?-1:1,f="function"==typeof i?i(Object.assign({},e,{placement:t})):i,c=f[0],p=f[1];return c=c||0,p=(p||0)*u,[o,r].indexOf(a)>=0?{x:p,y:c}:{x:c,y:p}}(i,e.rects,f),t}),{}),p=c[e.placement],s=p.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=p.x,e.modifiersData.popperOffsets.y+=s),e.modifiersData[i]=c}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var i=t.state,a=t.options,u=t.name;if(!i.modifiersData[u]._skip){for(var f=a.mainAxis,c=void 0===f||f,p=a.altAxis,s=void 0===p||p,d=a.fallbackPlacements,l=a.padding,b=a.boundary,m=a.rootBoundary,h=a.altBoundary,y=a.flipVariations,g=void 0===y||y,w=a.allowedAutoPlacements,O=i.options.placement,x=v(O),j=d||(x!==O&&g?function(t){if("auto"===v(t))return[];var n=I(t);return[z(t),n,z(n)]}(O):[I(O)]),M=[O].concat(j).reduce((function(t,n){return t.concat("auto"===v(n)?N(i,{placement:n,boundary:b,rootBoundary:m,padding:l,flipVariations:g,allowedAutoPlacements:w}):n)}),[]),k=i.rects.reference,E=i.rects.popper,P=new Map,q=!0,B=M[0],R=0;R<M.length;R++){var S=M[R],L=v(S),T="start"===W(S),A=[n,e].indexOf(L)>=0,H=A?"width":"height",C=K(i,{placement:S,boundary:b,rootBoundary:m,altBoundary:h,padding:l}),$=A?T?r:o:T?e:n;k[H]>E[H]&&($=I($));var D=I($),U=[];if(c&&U.push(C[L]<=0),s&&U.push(C[$]<=0,C[D]<=0),U.every((function(t){return t}))){B=S,q=!1;break}P.set(S,U)}if(q)for(var V=function(t){var n=M.find((function(n){var e=P.get(n);if(e)return e.slice(0,t).every((function(t){return t}))}));if(n)return B=n,"break"},_=g?3:1;_>0&&"break"!==V(_);_--);i.placement!==B&&(i.modifiersData[u]._skip=!0,i.placement=B,i.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var i=t.state,a=t.options,u=t.name,f=a.mainAxis,c=void 0===f||f,p=a.altAxis,s=void 0!==p&&p,d=a.tether,l=void 0===d||d,b=a.tetherOffset,m=void 0===b?0:b,y=K(i,{boundary:a.boundary,rootBoundary:a.rootBoundary,padding:a.padding,altBoundary:a.altBoundary}),g=v(i.placement),w=W(i.placement),O=!w,x=k(g),j="x"===x?"y":"x",q=i.modifiersData.popperOffsets,R=i.rects.reference,S=i.rects.popper,L="function"==typeof m?m(Object.assign({},i.rects,{placement:i.placement})):m,T={x:0,y:0};if(q){if(c||s){var A="y"===x?n:o,H="y"===x?e:r,I="y"===x?"height":"width",C=q[x],z=q[x]+y[A],$=q[x]-y[H],D=l?-S[I]/2:0,U="start"===w?R[I]:S[I],V="start"===w?-S[I]:-R[I],_=i.elements.arrow,F=l&&_?h(_):{width:0,height:0},G=i.modifiersData["arrow#persistent"]?i.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=G[A],N=G[H],Q=B(0,R[I],F[I]),X=O?R[I]/2-D-Q-J-L:U-Q-J-L,Y=O?-R[I]/2+D+Q+N+L:V+Q+N+L,Z=i.elements.arrow&&M(i.elements.arrow),tt=i.modifiersData.offset?i.modifiersData.offset[i.placement][x]:0,nt=q[x]+X-tt-(Z?"y"===x?Z.clientTop||0:Z.clientLeft||0:0),et=q[x]+Y-tt;if(c){var rt=B(l?P(z,nt):z,C,l?E($,et):$);q[x]=rt,T[x]=rt-C}if(s){var ot=q[j],it=ot+y["x"===x?n:o],at=ot-y["x"===x?e:r],ut=B(l?P(it,nt):it,ot,l?E(at,et):at);q[j]=ut,T[j]=ut-ot}}i.modifiersData[u]=T}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var a,u=t.state,f=t.name,c=t.options,p=u.elements.arrow,s=u.modifiersData.popperOffsets,d=v(u.placement),l=k(d),b=[o,r].indexOf(d)>=0?"height":"width";if(p&&s){var m=function(t,n){return R("number"!=typeof(t="function"==typeof t?t(Object.assign({},n.rects,{placement:n.placement})):t)?t:S(t,i))}(c.padding,u),y=h(p),g="y"===l?n:o,w="y"===l?e:r,O=u.rects.reference[b]+u.rects.reference[l]-s[l]-u.rects.popper[b],x=s[l]-u.rects.reference[l],j=M(p),E=j?"y"===l?j.clientHeight||0:j.clientWidth||0:0,P=E/2-y[b]/2+(O/2-x/2),q=B(m[g],P,E-y[b]-m[w]);u.modifiersData[f]=((a={})[l]=q,a.centerOffset=q-P,a)}},effect:function(t){var n=t.state,e=t.options.element,r=void 0===e?"[data-popper-arrow]":e;null!=r&&("string"!=typeof r||(r=n.elements.popper.querySelector(r)))&&y(n.elements.popper,r)&&(n.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var n=t.state,e=t.name,r=n.rects.reference,o=n.rects.popper,i=n.modifiersData.preventOverflow,a=K(n,{elementContext:"reference"}),u=K(n,{altBoundary:!0}),f=Q(a,r),c=Q(u,o,i),p=X(f),s=X(c);n.modifiersData[e]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:s},n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":s})}}]});const ot={animation:"calcite-popper-anim",animationActive:"calcite-popper-anim--active"};function it(n,e){const r=["left","right"],o=["start","end"];return"rtl"===t(n)&&(r.reverse(),o.reverse()),e.replace(/-leading/gi,`-${o[0]}`).replace(/-trailing/gi,`-${o[1]}`).replace(/leading/gi,r[0]).replace(/trailing/gi,r[1])}function at({referenceEl:t,el:n,placement:e,overlayPositioning:r="absolute",modifiers:o}){return t?rt(t,n,{strategy:r,placement:it(n,e),modifiers:o}):null}function ut({el:t,modifiers:n,placement:e,popper:r}){const o=it(t,e);r.setOptions({modifiers:n,placement:o})}const ft=Math.ceil((4,Math.sqrt(Math.pow(4,2)+Math.pow(4,2))));export{ot as C,at as c,ft as d,ut as u}