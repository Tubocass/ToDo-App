!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.list=[]}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,[{key:"addTask",value:function(e){var t={id:0,taskStr:e,dueDate:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",priorityLevel:arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,reminder:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none"};return this.list.push(t),t}},{key:"deleteTask",value:function(e){var t=this.list.findIndex(function(t){return t.id===e});this.list.splice(t,1)}},{key:"calcHealth",value:function(){}}]),e}(),o={taskInput:document.getElementById("InputField"),taskDate:document.getElementById("DatePicker"),taskTime:document.getElementById("TimePicker"),submitButton:document.getElementById("Submit"),createButton:document.getElementById("newTaskBtn"),listView:document.getElementById("ListView"),inputModal:document.querySelector(".modal")},u=function(e){var t="\n        <li>\n            <h4>".concat(e.taskStr,"</h4>\n        </li>\n    ");o.listView.insertAdjacentHTML("beforeend",t)};var l=new i;o.submitButton.addEventListener("click",function(e){e.preventDefault(),l.addTask(o.taskInput.value,o.taskDate.value),o.listView.innerHTML="",function(e){e.forEach(u)}(l.list)}),o.createButton.addEventListener("click",function(){console.log("CLICKED"),o.inputModal.display="block"}),console.log(l)}]);