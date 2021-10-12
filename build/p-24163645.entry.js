import{r as t,c as i,h as a,H as e,g as n,F as s}from"./p-34256658.js";import{g as o}from"./p-a4e6e35b.js";import{n as r,g as l,k as c,d as m,C as h}from"./p-dc825c55.js";import{g as d}from"./p-cebd4de5.js";import{c as b}from"./p-43a9faca.js";let p=class{constructor(a){t(this,a),this.calciteTabRegister=i(this,"calciteTabRegister",7),this.active=!1,this.scale="m",this.guid=`calcite-tab-title-${o()}`}render(){const t=this.el.id||this.guid;return a(e,{"aria-expanded":this.active.toString(),"aria-labelledby":this.labeledBy,id:t,role:"tabpanel"},a("section",null,a("slot",null)))}componentDidLoad(){this.calciteTabRegister.emit()}componentWillRender(){var t;this.scale=null===(t=this.el.closest("calcite-tabs"))||void 0===t?void 0:t.scale}disconnectedCallback(){var t;null===(t=document.body)||void 0===t||t.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}tabChangeHandler(t){t.target.closest("calcite-tabs")===this.el.closest("calcite-tabs")&&(this.tab?this.active=this.tab===t.detail.tab:this.getTabIndex().then((i=>{this.active=i===t.detail.tab})))}async getTabIndex(){return Array.prototype.indexOf.call(r(this.el.parentElement.children).filter((t=>t.matches("calcite-tab"))),this.el)}async updateAriaInfo(t=[],i=[]){this.labeledBy=i[t.indexOf(this.el.id)]||null}get el(){return n(this)}};p.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([active]) section{display:block}:host{display:none;color:var(--calcite-ui-text-3)}:host([active]){display:block}section{height:100%;width:100%;display:none}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem;padding-top:0.25rem;padding-bottom:0.25rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem;padding-top:0.5rem;padding-bottom:0.5rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem}";let f=class{constructor(a){t(this,a),this.calciteTabChange=i(this,"calciteTabChange",7),this.scale="m",this.layout="inline",this.position="below",this.bordered=!1,this.animationActiveDuration=.3,this.handleContainerScroll=()=>{this.activeIndicatorEl.style.transitionDuration="0s",this.updateOffsetPosition()}}async selectedTabChanged(){localStorage&&this.storageId&&null!=this.selectedTab&&localStorage.setItem(`calcite-tab-nav-${this.storageId}`,JSON.stringify(this.selectedTab)),this.calciteTabChange.emit({tab:this.selectedTab}),this.selectedTabEl=await this.getTabTitleById(this.selectedTab)}selectedTabElChanged(){this.updateOffsetPosition(),this.updateActiveWidth(),this.activeIndicatorEl.style.transitionDuration=`${this.animationActiveDuration}s`}componentWillLoad(){const t=`calcite-tab-nav-${this.storageId}`;if(localStorage&&this.storageId&&localStorage.getItem(t)){const i=JSON.parse(localStorage.getItem(t));this.selectedTab=i,this.calciteTabChange.emit({tab:this.selectedTab})}}componentWillRender(){var t,i,a,e;this.layout=null===(t=this.el.closest("calcite-tabs"))||void 0===t?void 0:t.layout,this.position=null===(i=this.el.closest("calcite-tabs"))||void 0===i?void 0:i.position,this.scale=null===(a=this.el.closest("calcite-tabs"))||void 0===a?void 0:a.scale,this.bordered=null===(e=this.el.closest("calcite-tabs"))||void 0===e?void 0:e.bordered,this.selectedTabEl&&this.updateOffsetPosition()}componentDidRender(){this.tabTitles.length&&this.tabTitles.every((t=>!t.active))&&!this.selectedTab&&this.tabTitles[0].getTabIdentifier().then((t=>{this.calciteTabChange.emit({tab:t})}))}render(){const t=l(this.el),i=`${this.indicatorWidth}px`,n=`${this.indicatorOffset}px`;return a(e,{role:"tablist"},a("div",{class:"tab-nav",onScroll:this.handleContainerScroll,ref:t=>this.tabNavEl=t},a("div",{class:"tab-nav-active-indicator-container",ref:t=>this.activeIndicatorContainerEl=t},a("div",{class:"tab-nav-active-indicator",ref:t=>this.activeIndicatorEl=t,style:"rtl"!==t?{width:i,left:n}:{width:i,right:n}})),a("slot",null)))}resizeHandler(){this.activeIndicatorEl.style.transitionDuration="0s",this.updateActiveWidth(),this.updateOffsetPosition()}focusPreviousTabHandler(t){const i=this.getIndexOfTabTitle(t.target,this.enabledTabTitles);(this.enabledTabTitles[i-1]||this.enabledTabTitles[this.enabledTabTitles.length-1]).focus(),t.stopPropagation(),t.preventDefault()}focusNextTabHandler(t){const i=this.getIndexOfTabTitle(t.target,this.enabledTabTitles);(this.enabledTabTitles[i+1]||this.enabledTabTitles[0]).focus(),t.stopPropagation(),t.preventDefault()}activateTabHandler(t){this.selectedTab=t.detail.tab?t.detail.tab:this.getIndexOfTabTitle(t.target),t.stopPropagation(),t.preventDefault()}updateTabTitles(t){t.target.active&&(this.selectedTab=t.detail)}globalTabChangeHandler(t){this.syncId&&t.target!==this.el&&t.target.syncId===this.syncId&&this.selectedTab!==t.detail.tab&&(this.selectedTab=t.detail.tab)}updateOffsetPosition(){var t,i,a,e,n;const s=l(this.el),o=null===(t=this.activeIndicatorContainerEl)||void 0===t?void 0:t.offsetWidth,r=null===(i=this.selectedTabEl)||void 0===i?void 0:i.offsetLeft,c=null===(a=this.selectedTabEl)||void 0===a?void 0:a.offsetWidth;this.indicatorOffset="rtl"!==s?r-(null===(e=this.tabNavEl)||void 0===e?void 0:e.scrollLeft):o-(r+c)+(null===(n=this.tabNavEl)||void 0===n?void 0:n.scrollLeft)}updateActiveWidth(){var t;this.indicatorWidth=null===(t=this.selectedTabEl)||void 0===t?void 0:t.offsetWidth}getIndexOfTabTitle(t,i=this.tabTitles){return i.indexOf(t)}async getTabTitleById(t){return Promise.all(this.tabTitles.map((t=>t.getTabIdentifier()))).then((i=>this.tabTitles[i.indexOf(t)]))}get tabTitles(){return c(this.el,"calcite-tab-title")}get enabledTabTitles(){return c(this.el,"calcite-tab-title:not([disabled])")}get el(){return n(this)}static get watchers(){return{selectedTab:["selectedTabChanged"],selectedTabEl:["selectedTabElChanged"]}}};f.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{position:relative;display:-ms-flexbox;display:flex}:host([scale=s]){min-height:1.5rem}:host([scale=m]){min-height:2rem}:host([scale=l]){min-height:2.75rem}.tab-nav{display:-ms-flexbox;display:flex;width:100%;overflow:auto;-ms-flex-pack:start;justify-content:flex-start;-webkit-overflow-scrolling:touch;padding:0.25rem;margin:-0.25rem}:host([layout=center]) .tab-nav{-ms-flex-pack:center;justify-content:center}.tab-nav-active-indicator-container{width:100%;right:0;left:0;bottom:0;position:absolute;overflow:hidden;height:0.125rem}.tab-nav-active-indicator{position:absolute;bottom:0;display:block;-webkit-transition-property:all;transition-property:all;-webkit-transition-timing-function:cubic-bezier(0, 0, 0.2, 1);transition-timing-function:cubic-bezier(0, 0, 0.2, 1);background-color:var(--calcite-ui-brand);height:0.125rem}:host([position=below]) .tab-nav-active-indicator{bottom:unset;top:0}:host([position=below]) .tab-nav-active-indicator-container{bottom:unset;top:0}:host([bordered]) .tab-nav-active-indicator-container{bottom:unset}:host([bordered][position=below]) .tab-nav-active-indicator-container{bottom:0;top:unset}";let u=class{constructor(a){t(this,a),this.calciteTabsActivate=i(this,"calciteTabsActivate",7),this.calciteTabsFocusNext=i(this,"calciteTabsFocusNext",7),this.calciteTabsFocusPrevious=i(this,"calciteTabsFocusPrevious",7),this.calciteTabTitleRegister=i(this,"calciteTabTitleRegister",7),this.active=!1,this.disabled=!1,this.bordered=!1,this.mutationObserver=b("mutation",(()=>this.updateHasText())),this.hasText=!1,this.guid=`calcite-tab-title-${o()}`}activeTabChanged(){this.active&&this.emitActiveTab()}connectedCallback(){this.setupTextContentObserver(),this.parentTabNavEl=this.el.closest("calcite-tab-nav"),this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){var t,i;null===(t=this.mutationObserver)||void 0===t||t.disconnect(),null===(i=document.body)||void 0===i||i.dispatchEvent(new CustomEvent("calciteTabTitleUnregister",{detail:this.el}))}componentWillLoad(){this.updateHasText(),this.tab&&this.active&&this.emitActiveTab()}componentWillRender(){this.parentTabsEl&&(this.layout=this.parentTabsEl.layout,this.position=this.parentTabsEl.position,this.scale=this.parentTabsEl.scale,this.bordered=this.parentTabsEl.bordered),!this.parentTabsEl&&this.parentTabNavEl&&(this.position=m(this.parentTabNavEl,"position",this.position),this.scale=m(this.parentTabNavEl,"scale",this.scale))}render(){const t=l(this.el),i=this.el.id||this.guid,n=this.disabled?"span":"a",s=this.bordered&&!this.disabled&&"center"!==this.layout,o=a("calcite-icon",{class:"calcite-tab-title--icon icon-start",dir:t,flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"s"}),r=a("calcite-icon",{class:"calcite-tab-title--icon icon-end",dir:t,flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"s"});return a(e,{"aria-controls":this.controls,"aria-expanded":this.active.toString(),id:i,role:"tab",tabindex:this.disabled?"-1":"0"},a(n,{class:{container:!0,"container--has-text":this.hasText,[h.rtl]:"rtl"===t},style:s&&{width:`${this.parentTabNavEl.indicatorWidth}px`}},this.iconStart?o:null,a("slot",null),this.iconEnd?r:null))}async componentDidLoad(){this.calciteTabTitleRegister.emit(await this.getTabIdentifier())}tabChangeHandler(t){this.parentTabNavEl===t.target&&(this.tab?this.active=this.tab===t.detail.tab:this.getTabIndex().then((i=>{this.active=i===t.detail.tab})))}onClick(){this.emitActiveTab()}keyDownHandler(t){switch(d(t.key)){case" ":case"Enter":this.emitActiveTab(),t.preventDefault();break;case"ArrowRight":"ltr"===l(this.el)?this.calciteTabsFocusNext.emit():this.calciteTabsFocusPrevious.emit();break;case"ArrowLeft":"ltr"===l(this.el)?this.calciteTabsFocusPrevious.emit():this.calciteTabsFocusNext.emit()}}async getTabIndex(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"),this.el)}async getTabIdentifier(){return this.tab?this.tab:this.getTabIndex()}async updateAriaInfo(t=[],i=[]){this.controls=t[i.indexOf(this.el.id)]||null}updateHasText(){this.hasText=this.el.textContent.trim().length>0}setupTextContentObserver(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0})}emitActiveTab(){this.disabled||this.calciteTabsActivate.emit({tab:this.tab})}get el(){return n(this)}static get watchers(){return{active:["activeTabChanged"]}}};u.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block;-ms-flex:0 1 auto;flex:0 1 auto;outline:2px solid transparent;outline-offset:2px;margin-right:1.25rem;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:1.25rem;margin-inline-end:1.25rem}:host([layout=center]){text-align:center;margin-top:0;margin-bottom:0;margin-left:1.25rem;margin-right:1.25rem;-ms-flex-preferred-size:12rem;flex-basis:12rem}:host([position=below]) a{border-bottom-width:0;border-top-width:2px;border-top-color:transparent;border-top-style:solid}:host a{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) a{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host(:active) a,:host(:focus) a,:host(:hover) a{text-decoration:none;color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-border-2)}:host([active]) a{color:var(--calcite-ui-text-1);border-color:transparent}:host([disabled]){pointer-events:none}:host([disabled]) span,:host([disabled]) a{pointer-events:none;opacity:0.5}:host([scale=s]){-webkit-margin-end:1rem;margin-inline-end:1rem}:host([scale=s]) a,:host([scale=s]) span{font-size:var(--calcite-font-size--2);line-height:1rem;padding-top:0.25rem;padding-bottom:0.25rem}:host([scale=m]) a,:host([scale=m]) span{font-size:var(--calcite-font-size--1);line-height:1rem;padding-top:0.5rem;padding-bottom:0.5rem}:host([scale=l]){-webkit-margin-end:1.5rem;margin-inline-end:1.5rem}:host([scale=l]) a,:host([scale=l]) span{font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-top:0.75rem;padding-bottom:0.75rem}a,span{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-bottom-width:2px;border-bottom-color:transparent;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;color:var(--calcite-ui-text-3);font-size:var(--calcite-font-size--1);line-height:1rem;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s;padding-left:0;padding-right:0;padding-top:0.5rem;padding-bottom:0.5rem;border-bottom-style:solid}span{cursor:default}.calcite-tab-title--icon{display:-ms-inline-flexbox;display:inline-flex;position:relative;margin:0;-ms-flex-item-align:center;align-self:center}.calcite-tab-title--icon svg{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}.container--has-text .calcite-tab-title--icon.icon-start{margin-right:0.5rem}.container--has-text .calcite-tab-title--icon.icon-end{margin-left:0.5rem}:host([icon-start][icon-end]) .calcite-tab-title--icon:first-child{margin-right:0.5rem}.container--has-text.calcite--rtl .calcite-tab-title--icon.icon-end{margin-left:0;margin-right:0.5rem}.container--has-text.calcite--rtl .calcite-tab-title--icon.icon-start{margin-left:0.5rem;margin-right:0}:host([icon-start][icon-end]) .calcite--rtl .calcite-tab-title--icon:first-child{margin-left:0.5rem;margin-right:0}:host([bordered]){-webkit-margin-end:0;margin-inline-end:0}:host([bordered][active]){-webkit-box-shadow:inset 0px -2px var(--calcite-ui-foreground-1);box-shadow:inset 0px -2px var(--calcite-ui-foreground-1)}:host([bordered][active][position=below]){-webkit-box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1);box-shadow:inset 0 2px 0 var(--calcite-ui-foreground-1)}:host([bordered]:hover) a,:host([bordered]:focus) a,:host([bordered]:active) a{position:relative}:host([bordered]:hover) a{background-color:var(--calcite-button-transparent-hover);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;-webkit-transition-delay:0s;transition-delay:0s}:host([bordered]) a{border-bottom-style:unset}:host([bordered][position=below]) a{border-top-style:unset}:host([active][bordered]) a{border-left:1px solid var(--calcite-ui-border-1);border-right:1px solid var(--calcite-ui-border-1)}:host([bordered]) a,:host([bordered]) span{padding-left:0.75rem;padding-right:0.75rem}:host([bordered][scale=s]) a,:host([bordered][scale=s]) span{padding-left:0.5rem;padding-right:0.5rem}:host([bordered][scale=l]) a,:host([bordered][scale=l]) span{padding-left:1rem;padding-right:1rem}";let w=class{constructor(i){t(this,i),this.layout="inline",this.position="above",this.scale="m",this.bordered=!1,this.titles=[],this.tabs=[]}connectedCallback(){"center"===this.layout&&(this.bordered=!1)}render(){return a(s,null,a("slot",{name:"tab-nav"}),a("section",null,a("slot",null)))}calciteTabTitleRegister(t){this.titles=[...this.titles,t.target],this.registryHandler(),t.stopPropagation()}calciteTabTitleUnregister(t){this.titles=this.titles.filter((i=>i!==t.detail)),this.registryHandler(),t.stopPropagation()}calciteTabRegister(t){this.tabs=[...this.tabs,t.target],this.registryHandler(),t.stopPropagation()}calciteTabUnregister(t){this.tabs=this.tabs.filter((i=>i!==t.detail)),this.registryHandler(),t.stopPropagation()}async registryHandler(){let t,i;if(this.tabs.some((t=>t.tab))||this.titles.some((t=>t.tab)))t=this.tabs.sort(((t,i)=>t.tab.localeCompare(i.tab))).map((t=>t.id)),i=this.titles.sort(((t,i)=>t.tab.localeCompare(i.tab))).map((t=>t.id));else{const a=await Promise.all(this.tabs.map((t=>t.getTabIndex()))),e=await Promise.all(this.titles.map((t=>t.getTabIndex())));t=a.reduce(((t,i,a)=>(t[i]=this.tabs[a].id,t)),[]),i=e.reduce(((t,i,a)=>(t[i]=this.titles[a].id,t)),[])}this.tabs.forEach((a=>a.updateAriaInfo(t,i))),this.titles.forEach((a=>a.updateAriaInfo(t,i)))}get el(){return n(this)}};w.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}:host([bordered]){-webkit-box-shadow:inset 0 1px 0 var(--calcite-ui-border-1);box-shadow:inset 0 1px 0 var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1)}:host([bordered]:not([position=below])) ::slotted(calcite-tab-nav){margin-bottom:-1px}:host([bordered][position=below]) ::slotted(calcite-tab-nav){margin-top:-1px}:host([bordered][position=below]){-webkit-box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1);box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1)}:host([bordered][scale=s]) section{padding:0.75rem}:host([bordered][scale=m]) section{padding:0.5rem}:host([bordered][scale=l]) section{padding:1rem}:host([position=below]){-ms-flex-direction:column-reverse;flex-direction:column-reverse}section{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;overflow:hidden;border-top-width:1px;border-top-color:var(--calcite-ui-border-1);border-top-style:solid}:host([position=below]) section{-ms-flex-direction:column-reverse;flex-direction:column-reverse;border-top-width:0;border-bottom-width:1px;border-bottom-color:var(--calcite-ui-border-1)}:host([position=below]:not([bordered])) section{border-bottom-style:solid}";export{p as calcite_tab,f as calcite_tab_nav,u as calcite_tab_title,w as calcite_tabs}