(()=>{var t={3099:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},1223:(t,e,r)=>{var n=r(5112),o=r(30),i=r(3070),a=n("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},9670:(t,e,r)=>{var n=r(111);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},8533:(t,e,r)=>{"use strict";var n=r(2092).forEach,o=r(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,e,r)=>{var n=r(5656),o=r(7466),i=r(1400),a=function(t){return function(e,r,a){var c,s=n(e),u=o(s.length),l=i(a,u);if(t&&r!=r){for(;u>l;)if((c=s[l++])!=c)return!0}else for(;u>l;l++)if((t||l in s)&&s[l]===r)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:(t,e,r)=>{var n=r(9974),o=r(8361),i=r(7908),a=r(7466),c=r(5417),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,f=6==t,d=7==t,p=5==t||f;return function(v,h,y,m){for(var g,b,w=i(v),x=o(w),S=n(h,y,3),E=a(x.length),k=0,L=m||c,C=e?L(v,E):r||d?L(v,0):void 0;E>k;k++)if((p||k in x)&&(b=S(g=x[k],k,w),t))if(e)C[k]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:s.call(C,g)}else switch(t){case 4:return!1;case 7:s.call(C,g)}return f?-1:u||l?l:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},1194:(t,e,r)=>{var n=r(7293),o=r(5112),i=r(7392),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},9341:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},5417:(t,e,r)=>{var n=r(111),o=r(3157),i=r(5112)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},4326:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:(t,e,r)=>{var n=r(6656),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e){for(var r=o(e),c=a.f,s=i.f,u=0;u<r.length;u++){var l=r[u];n(t,l)||c(t,l,s(e,l))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:(t,e,r)=>{"use strict";var n=r(7593),o=r(3070),i=r(9114);t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),a=r(8113),c=i.process,s=c&&c.versions,u=s&&s.v8;u?o=(n=u.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),t.exports=o&&+o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),a=r(1320),c=r(3505),s=r(9920),u=r(4705);t.exports=function(t,e){var r,l,f,d,p,v=t.target,h=t.global,y=t.stat;if(r=h?n:y?n[v]||c(v,{}):(n[v]||{}).prototype)for(l in e){if(d=e[l],f=t.noTargetGet?(p=o(r,l))&&p.value:r[l],!u(h?l:v+(y?".":"#")+l,t.forced)&&void 0!==f){if(typeof d==typeof f)continue;s(d,f)}(t.sham||f&&f.sham)&&i(d,"sham",!0),a(r,l,d,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,e,r)=>{var n=r(3099);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},5005:(t,e,r)=>{var n=r(857),o=r(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:(t,e,r)=>{var n=r(7908),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(n(t),e)}},3501:t=>{t.exports={}},490:(t,e,r)=>{var n=r(5005);t.exports=n("document","documentElement")},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7293),o=r(4326),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:(t,e,r)=>{var n=r(5465),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},9909:(t,e,r)=>{var n,o,i,a=r(8536),c=r(7854),s=r(111),u=r(8880),l=r(6656),f=r(5465),d=r(6200),p=r(3501),v="Object already initialized",h=c.WeakMap;if(a||f.state){var y=f.state||(f.state=new h),m=y.get,g=y.has,b=y.set;n=function(t,e){if(g.call(y,t))throw new TypeError(v);return e.facade=t,b.call(y,t,e),e},o=function(t){return m.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var w=d("state");p[w]=!0,n=function(t,e){if(l(t,w))throw new TypeError(v);return e.facade=t,u(t,w,e),e},o=function(t){return l(t,w)?t[w]:{}},i=function(t){return l(t,w)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},3157:(t,e,r)=>{var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},4705:(t,e,r)=>{var n=r(7293),o=/#|\.prototype\./,i=function(t,e){var r=c[a(t)];return r==u||r!=s&&("function"==typeof e?n(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},111:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:t=>{t.exports=!1},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(2788),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},30:(t,e,r)=>{var n,o=r(9670),i=r(6048),a=r(748),c=r(3501),s=r(490),u=r(317),l=r(6200),f=l("IE_PROTO"),d=function(){},p=function(t){return"<script>"+t+"</"+"script>"},v=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=n?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=u("iframe")).style.display="none",s.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var r=a.length;r--;)delete v.prototype[a[r]];return v()};c[f]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(d.prototype=o(t),r=new d,d.prototype=null,r[f]=t):r=v(),void 0===e?r:i(r,e)}},6048:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9670),a=r(1956);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=a(e),c=n.length,s=0;c>s;)o.f(t,r=n[s++],e[r]);return t}},3070:(t,e,r)=>{var n=r(9781),o=r(4664),i=r(9670),a=r(7593),c=Object.defineProperty;e.f=n?c:function(t,e,r){if(i(t),e=a(e,!0),i(r),o)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(5296),i=r(9114),a=r(5656),c=r(7593),s=r(6656),u=r(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=a(t),e=c(e,!0),u)try{return l(t,e)}catch(t){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},6324:(t,e,r)=>{var n=r(6656),o=r(5656),i=r(1318).indexOf,a=r(3501);t.exports=function(t,e){var r,c=o(t),s=0,u=[];for(r in c)!n(a,r)&&n(c,r)&&u.push(r);for(;e.length>s;)n(c,r=e[s++])&&(~i(u,r)||u.push(r));return u}},1956:(t,e,r)=>{var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},3887:(t,e,r)=>{var n=r(5005),o=r(8006),i=r(5181),a=r(9670);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),r=i.f;return r?e.concat(r(t)):e}},857:(t,e,r)=>{var n=r(7854);t.exports=n},1320:(t,e,r)=>{var n=r(7854),o=r(8880),i=r(6656),a=r(3505),c=r(2788),s=r(9909),u=s.get,l=s.enforce,f=String(String).split("String");(t.exports=function(t,e,r,c){var s,u=!!c&&!!c.unsafe,d=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),(s=l(r)).source||(s.source=f.join("string"==typeof e?e:""))),t!==n?(u?!p&&t[e]&&(d=!0):delete t[e],d?t[e]=r:o(t,e,r)):d?t[e]=r:a(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},4488:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=r(8880);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.15.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:(t,e,r)=>{var n=r(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9958:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},7466:(t,e,r)=>{var n=r(9958),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(4488);t.exports=function(t){return Object(n(t))}},7593:(t,e,r)=>{var n=r(111);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:t=>{var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(6656),a=r(9711),c=r(133),s=r(3307),u=o("wks"),l=n.Symbol,f=s?l:l&&l.withoutSetter||a;t.exports=function(t){return i(u,t)&&(c||"string"==typeof u[t])||(c&&i(l,t)?u[t]=l[t]:u[t]=f("Symbol."+t)),u[t]}},2222:(t,e,r)=>{"use strict";var n=r(2109),o=r(7293),i=r(3157),a=r(111),c=r(7908),s=r(7466),u=r(6135),l=r(5417),f=r(1194),d=r(5112),p=r(7392),v=d("isConcatSpreadable"),h=9007199254740991,y="Maximum allowed index exceeded",m=p>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=f("concat"),b=function(t){if(!a(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)};n({target:"Array",proto:!0,forced:!m||!g},{concat:function(t){var e,r,n,o,i,a=c(this),f=l(a,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(b(i=-1===e?a:arguments[e])){if(d+(o=s(i.length))>h)throw TypeError(y);for(r=0;r<o;r++,d++)r in i&&u(f,d,i[r])}else{if(d>=h)throw TypeError(y);u(f,d++,i)}return f.length=d,f}})},4553:(t,e,r)=>{"use strict";var n=r(2109),o=r(2092).findIndex,i=r(1223),a="findIndex",c=!0;a in[]&&Array(1).findIndex((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},9826:(t,e,r)=>{"use strict";var n=r(2109),o=r(2092).find,i=r(1223),a="find",c=!0;a in[]&&Array(1).find((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},561:(t,e,r)=>{"use strict";var n=r(2109),o=r(1400),i=r(9958),a=r(7466),c=r(7908),s=r(5417),u=r(6135),l=r(1194)("splice"),f=Math.max,d=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!l},{splice:function(t,e){var r,n,l,h,y,m,g=c(this),b=a(g.length),w=o(t,b),x=arguments.length;if(0===x?r=n=0:1===x?(r=0,n=b-w):(r=x-2,n=d(f(i(e),0),b-w)),b+r-n>p)throw TypeError(v);for(l=s(g,n),h=0;h<n;h++)(y=w+h)in g&&u(l,h,g[y]);if(l.length=n,r<n){for(h=w;h<b-n;h++)m=h+r,(y=h+n)in g?g[m]=g[y]:delete g[m];for(h=b;h>b-n+r;h--)delete g[h-1]}else if(r>n)for(h=b-n;h>w;h--)m=h+r-1,(y=h+n-1)in g?g[m]=g[y]:delete g[m];for(h=0;h<r;h++)g[h+w]=arguments[h+2];return g.length=b-n+r,l}})},4747:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(8533),a=r(8880);for(var c in o){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(t){u.forEach=i}}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";r(4747),r(9826),r(4553),r(561);let t=(t=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let n=63&r[t];e+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return e};r(2222);function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n=function(){function t(e,r){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!(e instanceof HTMLElement))throw new Error("This is not HTML element!");if("string"!=typeof r)throw new Error("Pass the string");this.container=e,this.columnName=r}var r,n,o;return r=t,o=[{key:"markup",value:function(t){return'<div class="tasks-container" data-id-column="'.concat(t,'">\n    <div class="tasks-header">\n        <h3 class="tasks-title">').concat(t,'</h3>\n    </div>\n    <div class="tasks-content">\n    <ul class="task-items"></ul>\n    </div>\n    <div class="tasks-footer">\n        <div class="tasks-add-card">\n            <button>+ <span>Add another card<span></button>\n        </div>\n        <form class="add-task hidden">\n          <div class="wrapper-input">\n           <input type="text" class="add-task-input" placeholder="Enter a title for this card..."/>\n          </div>               \n          <button class="add-task-newcard btn btn-primary">Add Card</button>\n          <button class="add-task-delete"><span></span></button>\n        </form>\n    </div>\n  </div>      \n    ')}}],(n=[{key:"bindToDOM",value:function(){this.container.insertAdjacentHTML("beforeend",this.constructor.markup(this.columnName))}}])&&e(r.prototype,n),o&&e(r,o),t}();function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e}var e,r,n;return e=t,n=[{key:"markup",value:function(t,e,r){return'<li class="card" data-type = "'.concat(e,'" data-id = "').concat(r,'">\n      <div class = "card-header">\n          <h4>').concat(t,'</h4>\n          <button class="card-delete hidden"><span></span></button>\n      </div>\n  </li>')}}],(r=[{key:"bindToDOMCard",value:function(t){var e=t.title,r=t.type,n=t.id;this.container.insertAdjacentHTML("beforeend",this.constructor.markup(e,r,n))}}])&&o(e.prototype,r),n&&o(e,n),t}();function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,r,n;return e=t,(r=[{key:"getCards",value:function(){return JSON.parse(localStorage.getItem("cards"))||[]}},{key:"saveCards",value:function(t){localStorage.setItem("cards",JSON.stringify(t))}}])&&a(e.prototype,r),n&&a(e,n),t}();function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}new(function(){function e(t){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),!(t instanceof HTMLDivElement))throw new Error("This is not HTML element!");this.container=t,this.state=[],this.stateService=new c}var r,o,a;return r=e,a=[{key:"markup",get:function(){return'\n    <div class = "board"></div>\n    '}}],(o=[{key:"init",value:function(){this.bindToDOM(),this.toDoColumn=new n(this.boardContainer,"todo"),this.toDoColumn.bindToDOM(),this.inProgressColumn=new n(this.boardContainer,"in-progress"),this.inProgressColumn.bindToDOM(),this.doneColumn=new n(this.boardContainer,"done"),this.doneColumn.bindToDOM(),this.state=this.stateService.getCards(),this.loadState(this.state),this.registerEvents()}},{key:"boardContainer",get:function(){return this.container.querySelector(".board")}},{key:"bindToDOM",value:function(){this.container.insertAdjacentHTML("beforeend",this.constructor.markup)}},{key:"registerEvents",value:function(){var t=this,e=document.querySelectorAll("ul"),r=this.container.querySelectorAll(".task-items"),n=this.container.querySelectorAll(".add-task");e.forEach((function(e){e.addEventListener("mouseover",(function(e){"LI"===e.target.tagName&&(t.showDeleteButton(e),console.log(e))})),e.addEventListener("mouseout",(function(e){e.relatedTarget.classList.contains("card-header")||"SPAN"===e.relatedTarget.tagName||"LI"===e.target.tagName&&(t.hideDeleteButton(e),console.log(e.target))}))})),this.container.addEventListener("mousedown",(function(e){var r=e.target;"SPAN"!==r.tagName&&r.closest("li")&&t.onMouseDown(e)})),this.container.addEventListener("mouseup",(function(e){return t.onMouseUp(e)})),this.container.addEventListener("mousemove",(function(e){return t.onMouseMove(e)})),r.forEach((function(e){return e.addEventListener("click",(function(e){var r=e.target;(r.classList.contains("card-delete")||"SPAN"===r.tagName)&&t.deleteCard(e)}))})),n.forEach((function(e){return e.addEventListener("submit",(function(e){t.createNewCard(e),t.onClickCloseAddCard(e)}))}));var o=this.boardContainer.querySelectorAll(".tasks-add-card button"),i=this.boardContainer.querySelectorAll(".add-task-delete");o.forEach((function(e){return e.addEventListener("click",(function(e){return t.onClickAddNewCard(e)}))})),i.forEach((function(e){return e.addEventListener("click",(function(e){return t.onClickCloseAddCard(e)}))}))}},{key:"onMouseDown",value:function(t){t.preventDefault(),document.body.style.cursor="grabbing";var e=t.target.closest("li");this.cloneElement=e.cloneNode(!0);var r=e.getBoundingClientRect(),n=r.width,o=r.height,i=r.left,a=r.top;this.cloneElement.classList.add("dragged"),this.cloneElement.style.width="".concat(n,"px"),this.cloneElement.style.height="".concat(o,"px"),document.body.appendChild(this.cloneElement),this.coordX=t.clientX-i,this.coordY=t.clientY-a,this.cloneElement.style.top="".concat(a,"px"),this.cloneElement.style.left="".concat(i,"px"),this.currentElement=e,this.currentElement.classList.add("hidden")}},{key:"onMouseMove",value:function(t){t.preventDefault(),this.cloneElement&&(this.cloneElement.style.left="".concat(t.pageX-this.coordX,"px"),this.cloneElement.style.top="".concat(t.pageY-this.coordY,"px"))}},{key:"onMouseUp",value:function(t){var e=this;if(t.preventDefault(),document.body.style.cursor="default",this.currentElement&&this.cloneElement){var r=document.elementFromPoint(t.clientX,t.clientY).closest("li"),n=t.target.closest(".tasks-container");if(!n)return this.cloneElement.remove(),void this.currentElement.classList.remove("hidden");var o=n.querySelector(".task-items");this.currentElement.dataset.type=n.dataset.idColumn,o.insertBefore(this.currentElement,r),this.state.find((function(t){return t.id===e.currentElement.dataset.id})).type=this.currentElement.dataset.type,this.stateService.saveCards(this.state),this.currentElement.classList.remove("hidden"),this.cloneElement.remove(),this.cloneElement=null}}},{key:"onClickAddNewCard",value:function(t){var e=t.currentTarget.closest(".tasks-container"),r=e.querySelector(".tasks-add-card"),n=e.querySelector(".add-task");r.classList.toggle("hidden"),n.classList.toggle("hidden")}},{key:"onClickCloseAddCard",value:function(t){t.preventDefault();var e=t.currentTarget.closest(".tasks-container"),r=e.querySelector(".tasks-add-card"),n=e.querySelector(".add-task");r.classList.toggle("hidden"),n.classList.toggle("hidden")}},{key:"deleteCard",value:function(t){var e=t.target.closest("li"),r=this.state.findIndex((function(t){return t.id===e.dataset.id}));this.state.splice(r,1),this.stateService.saveCards(this.state),e.remove()}},{key:"createNewCard",value:function(e){e.preventDefault();var r=e.currentTarget;console.log({currentTarget:r});var n=r.closest(".tasks-container"),o=n.querySelector(".task-items"),a=r[0].value,c=new i(o),s={title:a,type:n.dataset.idColumn,id:t()};console.log(s),c.bindToDOMCard(s),this.state.push(s),this.stateService.saveCards(this.state),r[0].value=""}},{key:"loadState",value:function(t){var e=this;t.forEach((function(t){var r=e.container.querySelector('.tasks-container[data-id-column="'.concat(t.type,'"]')).querySelector(".task-items");new i(r).bindToDOMCard(t),console.log(t.type)}))}},{key:"showDeleteButton",value:function(t){t.target.querySelector("button").classList.remove("hidden")}},{key:"hideDeleteButton",value:function(t){t.target.querySelector("button").classList.add("hidden")}}])&&s(r.prototype,o),a&&s(r,a),e}())(document.querySelector("#root")).init()})()})();