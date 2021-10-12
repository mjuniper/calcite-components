import{r as t,h as a,g as e}from"./p-34256658.js";import{g as i,b as n}from"./p-dc825c55.js";import{h as r,i as s}from"./p-19ac376f.js";import"./p-a4e6e35b.js";let o=class{constructor(a){t(this,a),this.scale="m",this.error=!1}render(){return this.determineContent()}determineContent(){const t=i(this.el);if(this.thumbnail&&!this.error)return a("img",{alt:"",class:"thumbnail",dir:t,onError:()=>this.error=!0,src:this.thumbnail});const e=this.generateInitials(),n=this.generateFillColor();return a("span",{class:"background",dir:t,style:{backgroundColor:n}},e?a("span",{"aria-hidden":"true",class:"initials"},e):a("calcite-icon",{class:"icon",icon:"user",scale:this.scale}))}generateFillColor(){const{userId:t,username:a,fullName:e,el:i}=this,o=n(i),c=t&&`#${t.substr(t.length-6)}`,l=a||e||"",m=c&&s(c)?c:function(t){let a=0;for(let e=0;e<t.length;e++)a=t.charCodeAt(e)+((a<<5)-a);let e="#";for(let t=0;t<3;t++)e+=("00"+(a>>8*t&255).toString(16)).substr(-2);return e}(l);return(t||l)&&s(m)?`hsl(${function(t){return function(t){let{r:a,g:e,b:i}=t;a/=255,e/=255,i/=255;const n=Math.max(a,e,i),r=Math.min(a,e,i),s=n-r;if(n===r)return 0;let o=(n+r)/2;switch(n){case a:o=(e-i)/s+(e<i?6:0);break;case e:o=(i-a)/s+2;break;case i:o=(a-e)/s+4}return Math.round(60*o)}(r(t))}(m)}, 60%, ${"dark"===o?20:90}%)`:"var(--calcite-ui-foreground-2)"}generateInitials(){const{fullName:t,username:a}=this;return t?t.trim().split(" ").map((t=>t.substring(0,1))).join(""):!!a&&a.substring(0,2)}get el(){return e(this)}};o.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border-radius:50%;overflow:hidden}:host([scale=s]){width:1.5rem;height:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){width:2rem;height:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){width:2.75rem;height:2.75rem;font-size:var(--calcite-font-size-0)}.icon{display:-ms-flexbox;display:flex}.background{width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-3)}.thumbnail{width:100%;height:100%;border-radius:50%}";export{o as calcite_avatar}