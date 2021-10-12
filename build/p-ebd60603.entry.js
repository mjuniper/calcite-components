import{r as t,c as i,h as e,g as a,H as n}from"./p-34256658.js";import{g as r}from"./p-cebd4de5.js";import{d as s,g as o,C as c}from"./p-dc825c55.js";import"./p-a4e6e35b.js";let l=class{constructor(e){t(this,e),this.calciteStepperItemChange=i(this,"calciteStepperItemChange",7),this.icon=!1,this.layout="horizontal",this.numbered=!1,this.scale="m",this.items=[],this.sortedItems=[]}contentWatcher(){"horizontal"===this.layout&&(!this.stepperContentContainer&&this.requestedContent&&this.addHorizontalContentContainer(),this.updateContent(this.requestedContent))}componentDidLoad(){this.currentPosition||this.calciteStepperItemChange.emit({position:0})}componentWillLoad(){"horizontal"!==this.layout||this.stepperContentContainer||this.addHorizontalContentContainer()}render(){return e("slot",null)}calciteStepperItemKeyEvent(t){const i=t.detail.item,e=t.target,a=0===this.itemIndex(e),n=this.itemIndex(e)===this.sortedItems.length-1;switch(r(i.key)){case"ArrowDown":case"ArrowRight":n?this.focusFirstItem():this.focusNextItem(e);break;case"ArrowUp":case"ArrowLeft":a?this.focusLastItem():this.focusPrevItem(e);break;case"Home":this.focusFirstItem();break;case"End":this.focusLastItem()}}registerItem(t){const i={item:t.target,position:t.detail.position,content:t.detail.content};i.content&&i.item.active&&(this.requestedContent=i.content),this.items.includes(i)||this.items.push(i),this.sortedItems=this.sortItems()}updateItem(t){t.detail.content&&(this.requestedContent=t.detail.content),this.currentPosition=t.detail.position,this.calciteStepperItemChange.emit({position:this.currentPosition})}async nextStep(){this.currentPosition=this.currentPosition+1<this.items.length?this.currentPosition+1:this.currentPosition,this.emitChangedItem()}async prevStep(){this.currentPosition=this.currentPosition-1>=0?this.currentPosition-1:this.currentPosition,this.emitChangedItem()}async goToStep(t){this.currentPosition=t-1,this.emitChangedItem()}async startStep(){this.currentPosition=0,this.emitChangedItem()}async endStep(){this.currentPosition=this.items.length-1,this.emitChangedItem()}addHorizontalContentContainer(){this.stepperContentContainer=document.createElement("div"),this.stepperContentContainer.classList.add("calcite-stepper-content"),this.el.insertAdjacentElement("beforeend",this.stepperContentContainer)}emitChangedItem(){this.calciteStepperItemChange.emit({position:this.currentPosition})}focusFirstItem(){this.focusElement(this.sortedItems[0])}focusLastItem(){this.focusElement(this.sortedItems[this.sortedItems.length-1])}focusNextItem(t){const i=this.itemIndex(t);this.focusElement(this.sortedItems[i+1]||this.sortedItems[0])}focusPrevItem(t){const i=this.itemIndex(t);this.focusElement(this.sortedItems[i-1]||this.sortedItems[this.sortedItems.length-1])}itemIndex(t){return this.sortedItems.indexOf(t)}focusElement(t){t.focus()}sortItems(){const t=Array.from(this.items).filter((t=>!t.item.disabled)).sort(((t,i)=>t.position-i.position)).map((t=>t.item));return[...Array.from(new Set(t))]}updateContent(t){this.stepperContentContainer.innerHTML="",this.stepperContentContainer.append(...t)}get el(){return a(this)}static get watchers(){return{requestedContent:["contentWatcher"]}}};l.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:stretch;align-items:stretch;width:100%;min-width:100%}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex:1 1 auto;flex:1 1 auto}:host ::slotted(.calcite-stepper-content){display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;min-width:100%}";let m=class{constructor(e){t(this,e),this.calciteStepperItemKeyEvent=i(this,"calciteStepperItemKeyEvent",7),this.calciteStepperItemSelect=i(this,"calciteStepperItemSelect",7),this.calciteStepperItemRegister=i(this,"calciteStepperItemRegister",7),this.active=!1,this.complete=!1,this.error=!1,this.disabled=!1,this.icon=!1,this.numbered=!1,this.scale="m"}disabledWatcher(){this.registerStepperItem()}componentWillLoad(){this.icon=s(this.el,"icon",!1),this.numbered=s(this.el,"numbered",!1),this.layout=s(this.el,"layout",!1),this.scale=s(this.el,"scale","m"),this.parentStepperEl=this.el.parentElement}componentDidLoad(){this.itemPosition=this.getItemPosition(),this.itemContent=this.getItemContent(),this.registerStepperItem(),this.active&&this.emitRequestedItem()}componentDidUpdate(){this.active&&this.emitRequestedItem()}render(){const t=o(this.el);return e(n,{"aria-expanded":this.active.toString(),onClick:()=>this.emitRequestedItem(),tabindex:this.disabled?null:0},e("div",{class:{container:!0,[c.rtl]:"rtl"===t}},e("div",{class:"stepper-item-header"},this.icon?this.renderIcon():null,this.numbered?e("div",{class:"stepper-item-number"},this.getItemPosition()+1,"."):null,e("div",{class:"stepper-item-header-text"},e("span",{class:"stepper-item-title"},this.itemTitle),e("span",{class:"stepper-item-subtitle"},this.itemSubtitle))),e("div",{class:"stepper-item-content"},e("slot",null))))}keyDownHandler(t){if(!this.disabled&&t.target===this.el)switch(r(t.key)){case" ":case"Enter":this.emitRequestedItem(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"Home":case"End":this.calciteStepperItemKeyEvent.emit({item:t}),t.preventDefault()}}updateActiveItemOnChange(t){t.target===this.parentStepperEl&&(this.activePosition=t.detail.position,this.determineActiveItem())}renderIcon(){return e("calcite-icon",{class:"stepper-item-icon",icon:this.active?"circleF":this.error?"exclamationMarkCircleF":this.complete?"checkCircleF":"circle",scale:"s"})}determineActiveItem(){this.active=!this.disabled&&this.itemPosition===this.activePosition}registerStepperItem(){this.calciteStepperItemRegister.emit({position:this.itemPosition,content:this.itemContent})}emitRequestedItem(){this.disabled||this.calciteStepperItemSelect.emit({position:this.itemPosition,content:this.itemContent})}getItemContent(){var t;return(null===(t=this.el.shadowRoot)||void 0===t?void 0:t.querySelector("slot"))?this.el.shadowRoot.querySelector("slot").assignedNodes({flatten:!0}):this.el.querySelector(".stepper-item-content")?this.el.querySelector(".stepper-item-content").childNodes:null}getItemPosition(){return Array.prototype.indexOf.call(this.parentStepperEl.querySelectorAll("calcite-stepper-item"),this.el)}get el(){return a(this)}static get watchers(){return{disabled:["disabledWatcher"]}}};m.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-stepper-item-spacing-unit-s:0.25rem;--calcite-stepper-item-spacing-unit-m:0.75rem;--calcite-stepper-item-spacing-unit-l:1rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-right:0.25rem}:host([scale=s]) .stepper-item-subtitle{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-stepper-item-spacing-unit-s:0.5rem;--calcite-stepper-item-spacing-unit-m:1rem;--calcite-stepper-item-spacing-unit-l:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-right:0.5rem}:host([scale=m]) .stepper-item-subtitle{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-stepper-item-spacing-unit-s:0.75rem;--calcite-stepper-item-spacing-unit-m:1.25rem;--calcite-stepper-item-spacing-unit-l:1.5rem;font-size:var(--calcite-font-size-1);line-height:1.5rem;margin-right:0.75rem}:host([scale=l]) .stepper-item-subtitle{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;position:relative;margin-bottom:var(--calcite-stepper-item-spacing-unit-s)}:host .container{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column;color:var(--calcite-ui-text-3);text-decoration:none;outline:2px solid transparent;outline-offset:2px;position:relative;border-width:0;border-top-width:2px;border-style:solid;border-color:var(--calcite-ui-border-3);cursor:pointer;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.calcite--rtl{margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:0}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host .stepper-item-header{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;cursor:pointer}:host .stepper-item-content,:host .stepper-item-header{padding:var(--calcite-stepper-item-spacing-unit-l) var(--calcite-stepper-item-spacing-unit-m);padding-left:0;text-align:left;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.calcite--rtl .stepper-item-content,.calcite--rtl .stepper-item-header{padding-right:0;text-align:right;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);padding-left:initial}:host .stepper-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .stepper-item-content{-ms-flex-direction:column;flex-direction:column;width:100%;display:none;font-size:var(--calcite-font-size--2);line-height:1.375}:host .stepper-item-icon{margin-right:var(--calcite-stepper-item-spacing-unit-m);color:var(--calcite-ui-text-3);margin-top:1px;opacity:var(--calcite-ui-opacity-disabled);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:flex-start;height:0.75rem;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.calcite--rtl .stepper-item-icon{margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:0}:host .stepper-item-header-text{margin-right:auto;-ms-flex-direction:column;flex-direction:column;text-align:initial}.calcite--rtl .stepper-item-header-text{margin-left:auto;margin-right:0}:host .stepper-item-title,:host .stepper-item-subtitle{display:-ms-flexbox;display:flex;width:100%}:host .stepper-item-title{color:var(--calcite-ui-text-2);font-weight:var(--calcite-font-weight-medium);margin-bottom:0.25rem}:host .stepper-item-subtitle{color:var(--calcite-ui-text-3)}.calcite--rtl .stepper-item-title{margin-right:0;margin-left:auto}:host .stepper-item-number{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-right:var(--calcite-stepper-item-spacing-unit-m)}.calcite--rtl .stepper-item-number{margin-left:var(--calcite-stepper-item-spacing-unit-m);margin-right:initial}:host([disabled]){opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]),:host([disabled]) *{cursor:not-allowed;pointer-events:auto}:host([complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([complete]) .container .stepper-item-icon{color:var(--calcite-ui-brand)}:host([error]) .container{border-top-color:var(--calcite-ui-danger)}:host([error]) .container .stepper-item-number{color:var(--calcite-ui-danger)}:host([error]) .container .stepper-item-icon{opacity:1;color:var(--calcite-ui-danger)}:host(:hover:not([disabled]):not([active])) .container,:host(:focus:not([disabled]):not([active])) .container{border-top-color:var(--calcite-ui-brand)}:host(:hover:not([disabled]):not([active])) .container .stepper-item-title,:host(:focus:not([disabled]):not([active])) .container .stepper-item-title{color:var(--calcite-ui-text-1)}:host(:hover:not([disabled]):not([active])) .container .stepper-item-subtitle,:host(:focus:not([disabled]):not([active])) .container .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([error]:hover:not([disabled]):not([active])) .container,:host([error]:focus:not([disabled]):not([active])) .container{border-top-color:var(--calcite-ui-danger-hover)}:host([active]) .container{border-top-color:var(--calcite-ui-brand)}:host([active]) .container .stepper-item-title{color:var(--calcite-ui-text-1)}:host([active]) .container .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([active]) .container .stepper-item-number{color:var(--calcite-ui-brand)}:host([active]) .container .stepper-item-icon{color:var(--calcite-ui-brand);opacity:1}:host([layout=vertical]) .container{-ms-flex:1 1 auto;flex:1 1 auto;border-top-width:0;border-left-width:2px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-top:0;padding-bottom:0;padding-right:0;margin-left:0;margin-right:0;margin-top:0;padding-left:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]) .container .stepper-item-icon{margin-top:1px;margin-right:0;margin-bottom:0;margin-left:auto;-ms-flex-order:3;order:3;padding-left:var(--calcite-stepper-item-spacing-unit-s)}:host([layout=vertical]) .container .stepper-item-header{padding-right:0}:host([layout=vertical]) .container .stepper-item-content{padding:0}:host([layout=vertical][active]) .container .stepper-item-content{display:-ms-flexbox;display:flex}:host([layout=vertical][active]) .container .stepper-item-content ::slotted(:last-child){margin-bottom:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]) .calcite--rtl{border-left-width:0;border-right-width:2px;border-color:var(--calcite-ui-border-3);padding-top:0;padding-bottom:0;padding-left:0;padding-right:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]) .calcite--rtl .stepper-item-icon{margin-bottom:0;margin-left:0;padding-left:0;padding-right:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical]) .calcite--rtl .stepper-item-header{padding-left:0;padding-right:intial}:host([layout=vertical][complete]) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][complete]:hover:not([disabled]):not([active])) .container,:host([layout=vertical][complete]:focus:not([disabled]):not([active])) .container{border-color:var(--calcite-ui-brand)}:host([layout=vertical][error]) .container{border-color:var(--calcite-ui-danger)}:host([layout=vertical][active]) .container{border-color:var(--calcite-ui-brand)}:host([layout=vertical]:hover:not([disabled]):not([active])) .container,:host([layout=vertical]:focus:not([disabled]):not([active])) .container{border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][error]:hover:not([disabled]):not([active])) .container,:host([layout=vertical][error]:focus:not([disabled]):not([active])) .container{border-color:var(--calcite-ui-danger-hover)}";export{l as calcite_stepper,m as calcite_stepper_item}