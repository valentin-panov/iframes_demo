!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);class s{constructor(){!function(){const e=document.createElement("div");e.classList.add("wrapper"),e.innerHTML='\n  <div class="container">\n    <h1 class="container__title">IFRAME DEMO</h1>\n    <div class="bd-example">\n      <input id="input_message" type="text" class="form__input"/>\n      <div class="btn_box">\n        <button id="btn_send" type="button" class="btn btn-teal">Send message to iFrame</button>\n        <button id="btn_put_xss" type="button" class="btn btn-red">Put XSS on a page</button>\n      </div>\n      <div class="message_box_container">\n      <div class="message_box_title">Message from iFrame:</div>\n      <div id="message_box" class="message_box"></div>\n      <div id="xss_box"></div>\n</div>\n      <iframe id="test_iframe" src=\'https://valentin-panov.github.io/iframes_demo//public/card.html\' sandbox="allow-scripts allow-forms" class="iframe_el"/>\n    </div>\n\n  </div>',document.body.append(e)}(),this.message=document.querySelector("#input_message"),this.sendButton=document.querySelector("#btn_send"),this.xssBtn=document.querySelector("#btn_put_xss"),this.xssBOX=document.querySelector("#xss_box"),this.iframe=document.querySelector("#test_iframe")}init(){this.addInputListeners()}addInputListeners(){this.sendButton.addEventListener("click",e=>{e.preventDefault(),this.sendMessage(this.message.value)},!1),this.xssBtn.addEventListener("click",e=>{e.preventDefault();this.xssBOX.innerHTML=this.message.value||"<style>@keyframes x{}</style><div style=\"animation-name:x\" onanimationend=\"alert(document.querySelector('iframe').contentDocument.querySelector('input').value)\"></div>",this.message.value=this.xssBOX.innerHTML},!1),window.onmessage=function(e){"iframeMsg"===e.data.type&&(document.querySelector("#message_box").textContent=e.data.message)}}sendMessage(e){this.iframe.contentWindow.postMessage(e,"*")}}function i(){(new s).init()}i()}]);
//# sourceMappingURL=app.js.map