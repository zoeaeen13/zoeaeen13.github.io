(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"7evw":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"CommentCount",{enumerable:!0,get:function(){return o.CommentCount}}),Object.defineProperty(e,"CommentEmbed",{enumerable:!0,get:function(){return r.CommentEmbed}}),Object.defineProperty(e,"DiscussionEmbed",{enumerable:!0,get:function(){return i.DiscussionEmbed}}),e.default=void 0;var o=n("UZsz"),r=n("Bp/N"),i=n("HhXV"),a={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};e.default=a},"Bp/N":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var o=i(n("q1tI")),r=i(n("17x9"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=p(t);if(e){var r=p(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(a,t);var e,n,r,i=f(a);function a(){return u(this,a),i.apply(this,arguments)}return e=a,(n=[{key:"getSrc",value:function(){var t=Number(this.props.commentId).toString(36),e=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(t,"?p=").concat(e,"&m=").concat(n)}},{key:"render",value:function(){return o.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&c(e.prototype,n),r&&c(e,r),a}(o.default.Component);e.CommentEmbed=d,d.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},d.propTypes={commentId:r.default.string.isRequired,showMedia:r.default.bool,showParentComment:r.default.bool,width:r.default.number,height:r.default.number}},HhXV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var o=a(n("q1tI")),r=a(n("17x9")),i=n("ZMnY");function a(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=m(t);if(e){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(u,t);var e,n,r,a=p(u);function u(){return s(this,u),a.apply(this,arguments)}return e=u,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)("dsq-embed-scr",t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=t.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)}},{key:"getDisqusConfig",value:function(t){return function(){var e=this;this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.category_id=t.categoryID,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,t.language&&(this.language=t.language),y.forEach((function(n){e.callbacks[n]=[t[n]]}))}}},{key:"render",value:function(){return o.default.createElement("div",c({},this.props,{id:"disqus_thread"}))}}])&&f(e.prototype,n),r&&f(e,r),u}(o.default.Component);e.DiscussionEmbed=h,h.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string,language:r.default.string,categoryID:r.default.string,remoteAuthS3:r.default.string,apiKey:r.default.string,preData:r.default.func,preInit:r.default.func,onInit:r.default.func,onReady:r.default.func,afterRender:r.default.func,preReset:r.default.func,onIdentify:r.default.func,beforeComment:r.default.func,onNewComment:r.default.func,onPaginate:r.default.func}).isRequired}},NysD:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return f}));var o=n("q1tI"),r=n.n(o),i=n("Wbzz"),a=n("vOnD"),u=Object(a.a)(i.Link).withConfig({displayName:"tag__BlogTag",componentId:"ipvvgn-0"})(["padding:8px 24px;margin-right:16px;font-size:12px;margin-bottom:16px;font-weight:500;letter-spacing:.5px;line-height:24px;color:#181818;border:1px solid #ECECEC;border-radius:4px;&:hover{color:#C5322E;text-decoration:none;}"]),c=Object(a.a)(i.Link).withConfig({displayName:"tag__PageTag",componentId:"ipvvgn-1"})(["margin-right:16px;margin-bottom:16px;border-bottom:2px solid transparent;padding:4px 16px;font-size:12px;font-weight:500;letter-spacing:.5px;line-height:24px;color:#181818;background:#F6F6F6;transition:all .3s ease-in-out;&:hover{border-color:#181818;text-decoration:none;}"]),s=a.a.div.withConfig({displayName:"tag__TagDivider",componentId:"ipvvgn-2"})(["margin:5vh 0;width:100%;display:flex;justify-content:space-between;align-items:center;h5{font-size:18px;font-weight:700;color:#3a3a3a;margin:0;padding:0;}& > div{width:85%;height:2px;background:#3a3a3a;}"]),f=function(){return r.a.createElement(s,null,r.a.createElement("h5",null,"Tags"),r.a.createElement("div",null))}},UZsz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var o=a(n("q1tI")),r=a(n("17x9")),i=n("ZMnY");function a(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=d(t);if(e){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(u,t);var e,n,r,a=l(u);function u(){return c(this,u),a.apply(this,arguments)}return e=u,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById("dsq-count-scr")?m():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",t.body)}},{key:"cleanInstance",value:function(){var t=window.document.body;(0,i.removeScript)("dsq-count-scr",t),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return o.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&s(e.prototype,n),r&&s(e,r),u}(o.default.Component);e.CommentCount=y,y.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string}).isRequired}},ZMnY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var o=window.document.createElement("script");return o.async=!0,o.src=t,o.id=e,n.appendChild(o),o},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var o;return function(){var r=this,i=arguments,a=function(){o=null,n||t.apply(r,i)},u=n&&!o;window.clearTimeout(o),o=setTimeout(a,e),u&&t.apply(r,i)}},e.isReactElement=u,e.shallowComparison=function t(e,n){var o,r=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,u=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){u=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(u)throw r}}}}(new Set(Object.keys(e),Object.keys(n)));try{for(r.s();!(o=r.n()).done;){var c=o.value;if("object"===i(e[c])){if(t(e[c],n[c]))return!0}else if(e[c]!==n[c]&&!u(e[c]))return!0}}catch(s){r.e(s)}finally{r.f()}return!1};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function u(t){return!!r.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return r.default.isValidElement(t)}))}},veMo:function(t,e,n){},yZlL:function(t,e,n){"use strict";n.r(e);var o=n("N1om"),r=n.n(o),i=n("q1tI"),a=n.n(i),u=n("vOnD"),c=n("Wbzz"),s=(n("veMo"),n("Bl7J")),f=n("vrFN"),l=n("NysD"),p=n("7evw"),d=u.a.div.withConfig({displayName:"blog-post__CommentWrapper",componentId:"sc-1hz7w8z-0"})(["margin:10vh 0;padding:20px;background:#F6F6F6;"]);e.default=function(t){var e=t.data,n=(t.pageContext,t.uri),o=t.location,i=e.markdownRemark,u=e.site.siteMetadata.title,m=i.frontmatter.tags,y={shortname:"gatsby-zoeaeen13",config:{identifier:n,title:i.frontmatter.title}};return a.a.createElement(s.a,{location:o,title:u},a.a.createElement(f.a,{title:i.frontmatter.title,description:i.excerpt}),a.a.createElement("article",{className:"post-content "+(i.frontmatter.thumbnail||"no-image")},a.a.createElement("header",{className:"post-content-header"},a.a.createElement("h1",{className:"post-content-title"},i.frontmatter.title),a.a.createElement("div",null,a.a.createElement("h5",{className:"post-content-date"},i.frontmatter.date),a.a.createElement(c.Link,{to:"/category/"+r()(i.frontmatter.category),className:"post-content-category"},i.frontmatter.category))),a.a.createElement("div",{className:"post-content-body",dangerouslySetInnerHTML:{__html:i.html}}),a.a.createElement("footer",{className:"post-content-footer"},m.map((function(t,e){return a.a.createElement(l.a,{key:e,to:"/tags/"+r()(t)},t)})),a.a.createElement(d,null,a.a.createElement(p.DiscussionEmbed,y)))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e993954c3e6476bf33bd.js.map