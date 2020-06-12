import{r as e,c as t,h as s,H as i,g as c}from"./p-8d9aae43.js";import{g as o}from"./p-4a8cec5c.js";const h=class{constructor(s){e(this,s),this.checked=!1,this.indeterminate=!1,this.name="",this.value="",this.scale="m",this.disabled=!1,this.toggle=()=>{this.disabled||(this.checked=!this.checked,this.indeterminate=!1)},this.indeterminatePath="M4 7h8v2H4z",this.checkedPath="M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z",this.getPath=()=>this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:"",this.syncThisToProxyInput=()=>{this.checked=this.inputProxy.hasAttribute("checked"),this.name=this.inputProxy.name,this.value=this.inputProxy.value},this.syncProxyInputToThis=()=>{this.checked?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked"),this.inputProxy.name=this.name,this.inputProxy.value=this.value},this.calciteCheckboxChange=t(this,"calciteCheckboxChange",7)}onClick({target:e}){(this.el.closest("label")&&e===this.inputProxy||!this.el.closest("label")&&e===this.el)&&this.toggle()}keyDownHandler(e){const t=o(e.key);" "!==t&&"Enter"!==t||(e.preventDefault(),this.toggle())}checkedWatcher(){this.calciteCheckboxChange.emit(),this.checked?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked")}connectedCallback(){this.setupProxyInput(),["s","m","l"].includes(this.scale)||(this.scale="m")}disconnectedCallback(){this.observer.disconnect()}componentWillRender(){this.syncProxyInputToThis()}render(){return s(i,{role:"checkbox","aria-checked":this.checked.toString(),tabindex:this.disabled?"-1":"0"},s("svg",{class:"check-svg",viewBox:"0 0 16 16"},s("path",{d:this.getPath()})),s("slot",null))}setupProxyInput(){this.inputProxy=this.el.querySelector("input"),this.inputProxy||(this.inputProxy=document.createElement("input"),this.inputProxy.type="checkbox",this.syncProxyInputToThis(),this.el.appendChild(this.inputProxy)),this.syncThisToProxyInput(),this.observer=new MutationObserver(this.syncThisToProxyInput),this.observer.observe(this.inputProxy,{attributes:!0})}get el(){return c(this)}static get watchers(){return{checked:["checkedWatcher"]}}};h.style=":host([hidden]){display:none}:host([scale=s]){--calcite-checkbox-size:12px;top:0.1em}:host([scale=m]){--calcite-checkbox-size:16px;top:0.15em}:host([scale=l]){--calcite-checkbox-size:20px;top:0.25em}::slotted(input){display:none}:host{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size)}:host .check-svg{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus) .check-svg{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}:host .check-svg{width:var(--calcite-checkbox-size);height:var(--calcite-checkbox-size);overflow:hidden;display:inline-block;background-color:var(--calcite-ui-background);border:1px solid var(--calcite-ui-border-1);fill:var(--calcite-ui-background);pointer-events:none;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;-webkit-box-sizing:border-box;box-sizing:border-box}:host([disabled]){pointer-events:none;cursor:default}:host([disabled]) .check-svg{background-color:var(--calcite-ui-foreground-2)}:host([disabled][checked]) .check-svg,:host([disabled][indeterminate]) .check-svg{background-color:#84c1e8;border-color:#84c1e8}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:var(--calcite-ui-blue-1);border-color:var(--calcite-ui-blue-1)}:host(:hover),:host(:focus){outline:none}:host(:hover) .check-svg,:host(:focus) .check-svg{border-color:var(--calcite-ui-blue-1);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-blue-1)}";export{h as calcite_checkbox}