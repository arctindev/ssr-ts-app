"use strict";(self.webpackChunknodejs=self.webpackChunknodejs||[]).push([[523],{523:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(294);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}function i(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return a(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}const f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(p,e);var t,n,o,f,s=(o=p,f=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(o);if(f){var n=l(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=s.call(this,e)).handleClick=t.handleClick.bind(a(t)),t.state={counter:t.props.number},t}return t=p,(n=[{key:"handleClick",value:function(e){var t=e.target;if("increment"===t.name)this.setState({counter:this.state.counter+1});else{if("decrement"!==t.name)throw"Button don't have a name value";this.setState({counter:this.state.counter-1})}}},{key:"render",value:function(){return r.createElement("div",{className:"ypaZhKq5MGnT9MtOMGH_"},r.createElement("main",null,r.createElement("h1",null,"This is Home page content you can counter"),r.createElement("p",null,this.state.counter)),r.createElement("section",null,r.createElement("button",{name:"increment",onClick:this.handleClick},"Increment"),r.createElement("button",{name:"decrement",onClick:this.handleClick},"Decrement")))}}])&&c(t.prototype,n),p}(r.Component)}}]);