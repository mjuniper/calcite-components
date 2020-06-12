import{r as t,c as e,h as i,H as a,g as s}from"./p-8d9aae43.js";import{g as l}from"./p-5751e60a.js";import{g as r}from"./p-a6a32ff6.js";const o=class{constructor(i){t(this,i),this.active=!1,this.autoDismiss=!1,this.autoDismissDuration=this.autoDismiss?"medium":null,this.color="blue",this.scale="m",this.icon=!1,this.alertQueue=[],this.alertId=this.el.id||`calcite-alert-${r()}`,this.autoDismissDurations={slow:14e3,medium:1e4,fast:6e3},this.iconDefaults={green:"checkCircle",yellow:"exclamationMarkTriangle",red:"exclamationMarkTriangle",blue:"lightbulb"},this.calciteAlertClose=e(this,"calciteAlertClose",7),this.calciteAlertOpen=e(this,"calciteAlertOpen",7),this.calciteAlertSync=e(this,"calciteAlertSync",7)}alertOpen(t){this.calciteAlertSync.emit({alertQueue:this.alertQueue}),this.alertQueue.includes(t.detail.requestedAlert)||this.alertQueue.push(t.detail.requestedAlert),this.determineActiveAlert()}alertClose(t){this.alertQueue.includes(t.detail.requestedAlert)&&(this.alertQueue=this.alertQueue.filter(e=>e!==t.detail.requestedAlert)),this.alertId===t.detail.requestedAlert&&(this.active=!1),this.determineActiveAlert()}alertRegister(t){this.alertQueue!==t.detail.alertQueue&&(this.alertQueue=t.detail.alertQueue)}connectedCallback(){["blue","red","green","yellow"].includes(this.color)||(this.color="blue"),["s","m","l"].includes(this.scale)||(this.scale="m"),null===this.autoDismissDuration||["slow","medium","fast"].includes(this.autoDismissDuration)||(this.autoDismissDuration="medium")}componentDidLoad(){this.alertLinkEl=this.el.querySelectorAll("calcite-link")[0]}render(){const t=l(this.el),e=i("button",{class:"alert-close","aria-label":"close",onClick:()=>this.close(),ref:t=>this.closeButton=t},i("calcite-icon",{icon:"x",scale:"m"})),s=i("div",{class:`${this.alertQueue.length>1?"active ":""}alert-count`},"+",this.alertQueue.length>2?this.alertQueue.length-1:1),r=i("div",{class:"alert-dismiss-progress"});return i(a,{active:this.active,role:this.active?this.autoDismiss?"alert":"alertdialog":null,dir:t},this.icon?this.setIcon():null,i("div",{class:"alert-content"},i("slot",{name:"alert-title"}),i("slot",{name:"alert-message"}),i("slot",{name:"alert-link"})),s,this.autoDismiss?null:e,this.active&&this.autoDismiss?r:null)}async open(){this.calciteAlertOpen.emit({requestedAlert:this.alertId,alertQueue:this.alertQueue})}async close(){this.calciteAlertClose.emit({requestedAlert:this.alertId,alertQueue:this.alertQueue})}async setFocus(){(this.closeButton||this.alertLinkEl)&&(this.alertLinkEl?this.alertLinkEl.setFocus():this.closeButton&&this.closeButton.focus())}determineActiveAlert(){this.alertQueueLength=this.alertQueue.length,this.currentAlert=this.alertQueue.length>0?this.alertQueue[0]:null,this.active||this.currentAlert!==this.alertId||(setTimeout(()=>this.active=!0,300),this.autoDismiss&&setTimeout(()=>this.close(),this.autoDismissDurations[this.autoDismissDuration]))}setIcon(){return i("div",{class:"alert-icon"},i("calcite-icon",{icon:this.iconDefaults[this.color],scale:"m"}))}get el(){return s(this)}};o.style=':host([hidden]){display:none}:host{--calcite-alert-dismiss-progress-background:rgba(255, 255, 255, 0.8)}:host([theme=dark]){--calcite-alert-dismiss-progress-background:rgba(43, 43, 43, 0.8)}:host([scale=s]){--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.75rem;--calcite-alert-spacing-token-large:1rem}:host([scale=s]) slot[name=alert-title]::slotted(*),:host([scale=s]) *::slotted([slot=alert-title]){font-size:0.875rem;line-height:1.5}:host([scale=s]) slot[name=alert-message]::slotted(*),:host([scale=s]) *::slotted([slot=alert-message]){font-size:0.8125rem;line-height:1.5}:host([scale=s]) ::slotted(calcite-link){font-size:0.8125rem;line-height:1.5}:host([scale=m]){--calcite-alert-width:50em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.5rem}:host([scale=m]) slot[name=alert-title]::slotted(*),:host([scale=m]) *::slotted([slot=alert-title]){font-size:0.9375rem;line-height:1.5}:host([scale=m]) slot[name=alert-message]::slotted(*),:host([scale=m]) *::slotted([slot=alert-message]){font-size:0.875rem;line-height:1.5}:host([scale=m]) ::slotted(calcite-link){font-size:0.875rem;line-height:1.5}:host([scale=l]){--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1.2rem;--calcite-alert-spacing-token-large:1.875rem}:host([scale=l]) slot[name=alert-title]::slotted(*),:host([scale=l]) *::slotted([slot=alert-title]){font-size:1rem;line-height:1.5}:host([scale=l]) slot[name=alert-message]::slotted(*),:host([scale=l]) *::slotted([slot=alert-message]){font-size:0.9375rem;line-height:1.5}:host([scale=l]) ::slotted(calcite-link){font-size:0.9375rem;line-height:1.5}:host{display:-ms-flexbox;display:flex;position:fixed;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;pointer-events:none;margin:0 auto;width:var(--calcite-alert-width);max-width:90%;max-height:0;background-color:var(--calcite-ui-foreground-1);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:var(--calcite-border-radius);opacity:0;left:0;right:0;bottom:0;pointer-events:none;z-index:101;-webkit-transform:translate3d(0, 1.5rem, 0);transform:translate3d(0, 1.5rem, 0);-webkit-transition:300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;transition:300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;border-top:0px solid transparent}@media only screen and (max-width: 860px){:host{width:100%;max-width:100%;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}:host:host(.hydrated){visibility:hidden !important}.alert-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.alert-close:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}:host([active]){opacity:1;max-height:100%;-webkit-transform:translate3d(0, -1.5rem, 0);transform:translate3d(0, -1.5rem, 0);pointer-events:initial;border-top-width:3px}:host([active]):host(.hydrated){visibility:visible !important}@media only screen and (max-width: 860px){:host([active]){-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}slot[name=alert-title]::slotted(*),*::slotted([slot=alert-title]){font-size:1rem;line-height:1.5;color:var(--calcite-ui-text-1);margin:0;font-weight:500}slot[name=alert-message]::slotted(*),*::slotted([slot=alert-message]){display:inline;margin:0;margin-right:0.75rem;font-weight:400;font-size:0.9375rem;line-height:1.5;color:var(--calcite-ui-text-2)}:host([dir=rtl]) slot[name=alert-message]::slotted(*),:host([dir=rtl]) *::slotted([slot=alert-message]){margin-right:unset;margin-left:0.75rem}.alert-content{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;word-wrap:break-word;padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small) 0}@media only screen and (max-width: 860px){.alert-content{padding:1.5rem}}.alert-content:first-of-type:not(:only-child){padding-left:var(--calcite-alert-spacing-token-large)}.alert-content:only-child{padding:var(--calcite-alert-spacing-token-small)}@media only screen and (max-width: 860px){.alert-content{padding:var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large) 0}}:host([dir=rtl]) .alert-content{padding:var(--calcite-alert-spacing-token-small) 0 var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small)}:host([dir=rtl]) .alert-content:first-of-type:not(:only-child){padding-right:var(--calcite-alert-spacing-token-large)}@media only screen and (max-width: 860px){:host([dir=rtl]) .alert-content{padding:var(--calcite-alert-spacing-token-large) 0 var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small)}}.alert-icon{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center}@media only screen and (max-width: 860px){.alert-icon{padding:1.5rem}}.alert-close{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;padding-top:0;padding-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;color:var(--calcite-ui-text-3);overflow:hidden;border-radius:0 0 var(--calcite-border-radius) 0}@media only screen and (max-width: 860px){.alert-close{padding:1.5rem}}.alert-close:hover,.alert-close:focus{background-color:var(--calcite-ui-foreground-2)}.alert-close:active{background-color:var(--calcite-ui-foreground-3)}@media only screen and (max-width: 860px){.alert-close{border-radius:0}}:host([dir=rtl]) .alert-close{border-radius:0 0 0 var(--calcite-border-radius)}.alert-count{font-size:0.875rem;line-height:1.5;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-item-align:stretch;align-self:stretch;overflow:hidden;width:0;visibility:hidden;font-weight:500;text-align:center;color:var(--calcite-ui-text-2);opacity:0;border-left:0px solid transparent;border-right:0px solid transparent;cursor:default;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out}.alert-count.active{visibility:visible;opacity:1;padding:0 0.375rem;width:3rem;border-left:1px solid var(--calcite-ui-border-3);border-right:1px solid var(--calcite-ui-border-3)}.alert-count.active:last-child{border-right:0px solid transparent}@media only screen and (max-width: 860px){.alert-count{border-radius:0}}:host([dir=rtl]).active:last-child{border-left:1px solid var(--calcite-ui-border-3);border-right:0px solid transparent}.alert-dismiss-progress{display:block;position:absolute;left:0;right:0;top:-3px;width:100%;height:3px;z-index:103;overflow:hidden;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.alert-dismiss-progress:after{height:3px;top:0;right:0;display:block;position:absolute;content:"";background-color:var(--calcite-alert-dismiss-progress-background);z-index:104}:host([dir=rtl]) .alert-dismiss-progress:after{left:0;right:initial}:host([color=blue]){border-top-color:var(--calcite-ui-blue-1)}:host([color=blue]) .alert-icon{color:var(--calcite-ui-blue-1)}:host([color=red]){border-top-color:var(--calcite-ui-red-1)}:host([color=red]) .alert-icon{color:var(--calcite-ui-red-1)}:host([color=yellow]){border-top-color:var(--calcite-ui-yellow-1)}:host([color=yellow]) .alert-icon{color:var(--calcite-ui-yellow-1)}:host([color=green]){border-top-color:var(--calcite-ui-green-1)}:host([color=green]) .alert-icon{color:var(--calcite-ui-green-1)}:host([auto-dismiss-duration=fast]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 6000ms ease-out;animation:dismissProgress 6000ms ease-out}:host([auto-dismiss-duration=medium]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 10000ms ease-out;animation:dismissProgress 10000ms ease-out}:host([auto-dismiss-duration=slow]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 14000ms ease-out;animation:dismissProgress 14000ms ease-out}@-webkit-keyframes dismissProgress{0%{width:0;opacity:0.8}100%{width:100%;opacity:1}}@keyframes dismissProgress{0%{width:0;opacity:0.8}100%{width:100%;opacity:1}}';export{o as calcite_alert}