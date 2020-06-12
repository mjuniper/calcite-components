var __awaiter=this&&this.__awaiter||function(t,e,i,r){function o(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,n){function s(t){try{c(r.next(t))}catch(e){n(e)}}function a(t){try{c(r["throw"](t))}catch(e){n(e)}}function c(t){t.done?i(t.value):o(t.value).then(s,a)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,o,n,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(t){return function(e){return c([t,e])}}function c(s){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,o&&(n=s[0]&2?o["return"]:s[0]?o["throw"]||((n=o["return"])&&n.call(o),0):o.next)&&!(n=n.call(o,s[1])).done)return n;if(o=0,n)s=[s[0]&2,n.value];switch(s[0]){case 0:case 1:n=s;break;case 4:i.label++;return{value:s[1],done:false};case 5:i.label++;o=s[1];s=[0];continue;case 7:s=i.ops.pop();i.trys.pop();continue;default:if(!(n=i.trys,n=n.length>0&&n[n.length-1])&&(s[0]===6||s[0]===2)){i=0;continue}if(s[0]===3&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(s[0]===6&&i.label<n[1]){i.label=n[1];n=s;break}if(n&&i.label<n[2]){i.label=n[2];i.ops.push(s);break}if(n[2])i.ops.pop();i.trys.pop();continue}s=e.call(t,i)}catch(a){s=[6,a];o=0}finally{r=n=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;for(var r=Array(t),o=0,e=0;e<i;e++)for(var n=arguments[e],s=0,a=n.length;s<a;s++,o++)r[o]=n[s];return r};System.register(["./p-dd45b0da.system.js","./p-4af00110.system.js","./p-f46ce193.system.js"],(function(t){"use strict";var e,i,r,o,n,s,a,c;return{setters:[function(t){e=t.r;i=t.c;r=t.h;o=t.H;n=t.g},function(t){s=t.g;a=t.a},function(t){c=t.g}],execute:function(){var l=":host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:stretch;align-items:stretch;width:100%;min-width:100%}:host([layout=vertical]){-ms-flex-direction:column;flex-direction:column;-ms-flex:1 auto auto;flex:1 auto auto}:host .stepper-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;min-width:100%}";var p=t("calcite_stepper",function(){function t(t){e(this,t);this.scale="m";this.numbered=false;this.icon=false;this.layout="horizontal";this.items=[];this.sortedItems=[];this.calciteStepperItemHasChanged=i(this,"calciteStepperItemHasChanged",7)}t.prototype.contentWatcher=function(){this.updateContent(this.requestedContent)};t.prototype.connectedCallback=function(){var t=["horizontal","vertical"];if(!t.includes(this.layout))this.layout="horizontal";var e=["s","m","l"];if(!e.includes(this.scale))this.scale="m";var i=[true,false];if(!i.includes(this.numbered))this.numbered=false;var r=[true,false];if(!r.includes(this.icon))this.icon=false};t.prototype.componentDidLoad=function(){if(!this.currentPosition){this.calciteStepperItemHasChanged.emit({position:0})}};t.prototype.render=function(){var t=this;var e=s(this.el);return r(o,{dir:e},r("slot",null),this.layout==="horizontal"?r("div",{class:"stepper-content",ref:function(e){return t.stepperContentContainer=e}}):null)};t.prototype.calciteStepperItemKeyEvent=function(t){var e=t.detail.item;var i=t.target;var r=this.itemIndex(i)===0;var o=this.itemIndex(i)===this.sortedItems.length-1;switch(c(e.key)){case"ArrowDown":case"ArrowRight":if(o)this.focusFirstItem();else this.focusNextItem(i);break;case"ArrowUp":case"ArrowLeft":if(r)this.focusLastItem();else this.focusPrevItem(i);break;case"Home":this.focusFirstItem();break;case"End":this.focusLastItem();break}};t.prototype.registerItem=function(t){var e={item:t.target,position:t.detail.position,content:t.detail.content};if(e.content!==null&&e.item.active)this.requestedContent=[e.content];if(!this.items.includes(e))this.items.push(e);this.sortedItems=this.sortItems()};t.prototype.updateItem=function(t){if(t.detail.content)this.requestedContent=t.detail.content.length>0?t.detail.content:[t.detail.content];this.currentPosition=t.detail.position;this.calciteStepperItemHasChanged.emit({position:this.currentPosition})};t.prototype.nextStep=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.currentPosition=this.currentPosition+1<this.items.length?this.currentPosition+1:this.currentPosition;this.emitChangedItem();return[2]}))}))};t.prototype.prevStep=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.currentPosition=this.currentPosition-1>=0?this.currentPosition-1:this.currentPosition;this.emitChangedItem();return[2]}))}))};t.prototype.goToStep=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.currentPosition=t-1;this.emitChangedItem();return[2]}))}))};t.prototype.startStep=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.currentPosition=0;this.emitChangedItem();return[2]}))}))};t.prototype.endStep=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.currentPosition=this.items.length-1;this.emitChangedItem();return[2]}))}))};t.prototype.emitChangedItem=function(){this.calciteStepperItemHasChanged.emit({position:this.currentPosition})};t.prototype.focusFirstItem=function(){var t=this.sortedItems[0];this.focusElement(t)};t.prototype.focusLastItem=function(){var t=this.sortedItems[this.sortedItems.length-1];this.focusElement(t)};t.prototype.focusNextItem=function(t){var e=this.itemIndex(t);var i=this.sortedItems[e+1]||this.sortedItems[0];this.focusElement(i)};t.prototype.focusPrevItem=function(t){var e=this.itemIndex(t);var i=this.sortedItems[e-1]||this.sortedItems[this.sortedItems.length-1];this.focusElement(i)};t.prototype.itemIndex=function(t){return this.sortedItems.indexOf(t)};t.prototype.focusElement=function(t){var e=t;e.focus()};t.prototype.sortItems=function(){var t=Array.from(this.items).filter((function(t){return!t.item.disabled})).sort((function(t,e){return t.position-e.position})).map((function(t){return t.item}));return __spreadArrays(Array.from(new Set(t)))};t.prototype.updateContent=function(t){var e;if(this.stepperContentContainer){this.stepperContentContainer.innerHTML="";(e=this.stepperContentContainer).append.apply(e,t)}};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{requestedContent:["contentWatcher"]}},enumerable:true,configurable:true});return t}());p.style=l;var u=":host([hidden]){display:none}:host([scale=s]){--calcite-stepper-item-spacing-unit-s:0.1875rem;--calcite-stepper-item-spacing-unit-m:0.375rem;--calcite-stepper-item-spacing-unit-l:0.75rem;font-size:0.875rem;line-height:1.5}:host([scale=m]){--calcite-stepper-item-spacing-unit-s:0.25rem;--calcite-stepper-item-spacing-unit-m:0.5rem;--calcite-stepper-item-spacing-unit-l:1rem;font-size:0.9375rem;line-height:1.5}:host([scale=l]){--calcite-stepper-item-spacing-unit-s:0.375rem;--calcite-stepper-item-spacing-unit-m:0.75rem;--calcite-stepper-item-spacing-unit-l:1.5rem;font-size:1rem;line-height:1.5}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;color:var(--calcite-ui-text-3);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;text-decoration:none;outline:none;position:relative;border-top:3px solid var(--calcite-ui-border-3);cursor:pointer;margin-right:var(--calcite-stepper-item-spacing-unit-l)}:host([dir=rtl]){margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:0}:host{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus){outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}:host .stepper-item-header{display:-ms-flexbox;display:flex;-ms-flex-direction:var(--calcite-stepper-item-flex-direction);flex-direction:var(--calcite-stepper-item-flex-direction);-ms-flex-align:start;align-items:flex-start;cursor:pointer}:host .stepper-item-content,:host .stepper-item-header{padding:var(--calcite-stepper-item-spacing-unit-l) var(--calcite-stepper-item-spacing-unit-m);padding-left:0;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;text-align:left}:host([dir=rtl]) .stepper-item-content,:host([dir=rtl]) .stepper-item-header{padding-left:initial;padding-right:0;text-align:right}:host .stepper-item-header *{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host .stepper-item-content{-ms-flex-direction:column;flex-direction:column;width:100%;display:none}:host .stepper-item-icon{margin-right:var(--calcite-stepper-item-spacing-unit-l);margin-top:var(--calcite-stepper-item-spacing-unit-s);color:var(--calcite-ui-text-3);opacity:0.5;height:12px;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:start;align-self:flex-start;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .stepper-item-icon{margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:0}:host .stepper-item-header-text{margin-right:auto;-ms-flex-direction:column;flex-direction:column;text-align:initial}:host([dir=rtl]) .stepper-item-header-text{margin-left:auto;margin-right:0}:host .stepper-item-title,:host .stepper-item-subtitle{display:-ms-flexbox;display:flex;width:100%}:host .stepper-item-title{color:var(--calcite-ui-text-2);font-weight:500}:host .stepper-item-subtitle{color:var(--calcite-ui-text-3)}:host([dir=rtl]) .stepper-item-title{margin-right:0;margin-left:auto}:host .stepper-item-number{font-weight:bold;color:var(--calcite-ui-text-3);margin-right:var(--calcite-stepper-item-spacing-unit-l);-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}:host([dir=rtl]) .stepper-item-number{margin-left:var(--calcite-stepper-item-spacing-unit-l);margin-right:initial}:host([disabled]){opacity:0.4}:host([disabled]),:host([disabled]) *{cursor:not-allowed;pointer-events:none}:host([complete]){border-top-color:rgba(0, 122, 194, 0.5)}:host([complete]) .stepper-item-icon{color:var(--calcite-ui-blue-1)}:host([error]){border-top-color:var(--calcite-ui-red-1)}:host([error]) .stepper-item-number{color:var(--calcite-ui-red-1)}:host([error]) .stepper-item-icon{color:var(--calcite-ui-red-1);opacity:1}:host(:hover:not([disabled]):not([active])),:host(:focus:not([disabled]):not([active])){border-top-color:rgba(0, 122, 194, 0.75)}:host(:hover:not([disabled]):not([active])) .stepper-item-title,:host(:focus:not([disabled]):not([active])) .stepper-item-title{color:var(--calcite-ui-text-1)}:host(:hover:not([disabled]):not([active])) .stepper-item-subtitle,:host(:focus:not([disabled]):not([active])) .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([error]:hover:not([disabled]):not([active])),:host([error]:focus:not([disabled]):not([active])){border-top-color:rgba(216, 48, 32, 0.75)}:host([active]){border-top-color:var(--calcite-ui-blue-1)}:host([active]) .stepper-item-title{color:var(--calcite-ui-text-1)}:host([active]) .stepper-item-subtitle{color:var(--calcite-ui-text-2)}:host([active]) .stepper-item-number{color:var(--calcite-ui-blue-1)}:host([active]) .stepper-item-icon{color:var(--calcite-ui-blue-1);opacity:1}:host([layout=vertical]){-ms-flex:1 1 auto;flex:1 1 auto;border-top:0;border-left:3px solid var(--calcite-ui-border-3);padding:0 0 0 var(--calcite-stepper-item-spacing-unit-l);margin:0 0 var(--calcite-stepper-item-spacing-unit-m) 0}:host([layout=vertical]) .stepper-item-icon{margin:var(--calcite-stepper-item-spacing-unit-m) 0 0 auto;padding-left:var(--calcite-stepper-item-spacing-unit-l);-ms-flex-order:3;order:3}:host([layout=vertical]) .stepper-item-header{padding-right:0}:host([layout=vertical]) .stepper-item-content{padding:0}:host([layout=vertical][active]) .stepper-item-content{display:-ms-flexbox;display:flex}:host([layout=vertical][active]) .stepper-item-content ::slotted(:last-child){margin-bottom:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical][dir=rtl]){border-left:0;border-right:3px solid var(--calcite-ui-border-3);padding:0 var(--calcite-stepper-item-spacing-unit-l) 0 0}:host([layout=vertical][dir=rtl]) .stepper-item-icon{margin:var(--calcite-stepper-item-spacing-unit-m) auto 0 0;padding-left:0;padding-right:var(--calcite-stepper-item-spacing-unit-l)}:host([layout=vertical][dir=rtl]) .stepper-item-header{padding-left:0;padding-right:intial}:host([layout=vertical][complete]){border-color:rgba(0, 122, 194, 0.5)}:host([layout=vertical][error]){border-color:var(--calcite-ui-red-1)}:host([layout=vertical][active]){border-color:var(--calcite-ui-blue-1)}:host([layout=vertical]:hover:not([disabled]):not([active])),:host([layout=vertical]:focus:not([disabled]):not([active])){border-color:rgba(0, 122, 194, 0.75)}:host([layout=vertical][error]:hover:not([disabled]):not([active])),:host([layout=vertical][error]:focus:not([disabled]):not([active])){border-color:rgba(216, 48, 32, 0.75)}";var h=t("calcite_stepper_item",function(){function t(t){e(this,t);this.active=false;this.complete=false;this.error=false;this.disabled=false;this.icon=false;this.numbered=false;this.scale="m";this.calciteStepperItemKeyEvent=i(this,"calciteStepperItemKeyEvent",7);this.calciteStepperItemSelected=i(this,"calciteStepperItemSelected",7);this.registerCalciteStepperItem=i(this,"registerCalciteStepperItem",7)}t.prototype.disabledWatcher=function(){this.registerStepperItem()};t.prototype.componentWillLoad=function(){this.icon=a(this.el,"icon",false);this.numbered=a(this.el,"numbered",false);this.layout=a(this.el,"layout",false);this.scale=a(this.el,"scale","m")};t.prototype.componentDidLoad=function(){this.itemPosition=this.getItemPosition();this.itemContent=this.getItemContent();this.registerStepperItem();if(this.active)this.emitRequestedItem()};t.prototype.componentDidUpdate=function(){if(this.active)this.emitRequestedItem()};t.prototype.render=function(){var t=this;var e=s(this.el);return r(o,{dir:e,tabindex:this.disabled?null:0,"aria-expanded":this.active.toString(),onClick:function(){return t.emitRequestedItem()}},r("div",{class:"stepper-item-header"},this.icon?this.setIcon():null,this.numbered?r("div",{class:"stepper-item-number"},this.getItemPosition()+1,"."):null,r("div",{class:"stepper-item-header-text"},r("span",{class:"stepper-item-title"},this.itemTitle),r("span",{class:"stepper-item-subtitle"},this.itemSubtitle))),r("div",{class:"stepper-item-content"},r("slot",null)))};t.prototype.keyDownHandler=function(t){if(!this.disabled&&t.target===this.el){switch(c(t.key)){case" ":case"Enter":this.emitRequestedItem();t.preventDefault();break;case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"Home":case"End":this.calciteStepperItemKeyEvent.emit({item:t});t.preventDefault();break}}};t.prototype.updateActiveItemOnChange=function(t){this.activePosition=t.detail.position;this.determineActiveItem()};t.prototype.setIcon=function(){var t=this.active?"circleF":this.error?"exclamationMarkCircleF":this.complete?"checkCircleF":"circle";return r("calcite-icon",{icon:t,scale:"s",class:"stepper-item-icon"})};t.prototype.determineActiveItem=function(){this.active=!this.disabled&&this.itemPosition===this.activePosition};t.prototype.registerStepperItem=function(){this.registerCalciteStepperItem.emit({position:this.itemPosition,content:this.itemContent})};t.prototype.emitRequestedItem=function(){if(!this.disabled){this.calciteStepperItemSelected.emit({position:this.itemPosition,content:this.itemContent})}};t.prototype.getItemContent=function(){return this.el.shadowRoot.querySelector("slot")?this.el.shadowRoot.querySelector("slot").assignedNodes({flatten:true}):this.el.querySelector(".stepper-item-content")?this.el.querySelector(".stepper-item-content"):null};t.prototype.getItemPosition=function(){var t=this.el.parentElement;return Array.prototype.indexOf.call(t.querySelectorAll("calcite-stepper-item"),this.el)};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledWatcher"]}},enumerable:true,configurable:true});return t}());h.style=u}}}));