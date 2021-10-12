import{r as t,h as i,H as a,g as n}from"./p-34256658.js";import{s as e,d as s,g as o,C as r}from"./p-dc825c55.js";import"./p-a4e6e35b.js";var c;!function(t){t.valid="check-circle",t.invalid="exclamation-mark-triangle",t.idle="information"}(c||(c={}));let l=class{constructor(i){t(this,i),this.active=!1,this.scale="m",this.status="idle"}handleIconEl(){this.requestedIcon=e(c,this.icon,this.status)}connectedCallback(){this.status=s(this.el,"status",this.status),this.scale=s(this.el,"scale",this.scale),this.requestedIcon=e(c,this.icon,this.status)}render(){return i(a,{"calcite-hydrated-hidden":!this.active},this.renderIcon(this.requestedIcon),i("slot",null))}renderIcon(t){if(t){const a=o(this.el);return i("calcite-icon",{class:{"calcite-input-message-icon":!0,[r.rtl]:"rtl"===a},icon:t,scale:"s"})}}get el(){return n(this)}static get watchers(){return{status:["handleIconEl"],icon:["handleIconEl"]}}};l.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([active][scale=m]),:host([active][scale=l]){--calcite-input-message-spacing-value:0.25rem}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-ui-text-1);font-weight:var(--calcite-font-weight-medium);visibility:hidden;height:0;pointer-events:none;opacity:0;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}:host([active]){height:auto;visibility:visible;opacity:1;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}:host([active][scale=m]),:host([active][scale=l]){margin-top:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;pointer-events:none;margin-right:0.5rem;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.calcite-input-message-icon.calcite--rtl{margin-left:0.5rem;margin-right:0}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-ui-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-ui-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-ui-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-ui-brand)}:host([status][active]){color:var(--calcite-ui-text-1);font-weight:var(--calcite-font-weight-medium)}:host([status][active][scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([status][active][scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem;margin-top:0.25rem}:host([status][active][scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem;margin-top:0.25rem}";export{l as calcite_input_message}