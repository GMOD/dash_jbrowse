(window.webpackJsonpdash_jbrowse=window.webpackJsonpdash_jbrowse||[]).push([[0],{1329:function(t,e,n){"use strict";String.prototype.trimStart||(String.prototype.trimLeft?String.prototype.trimStart=String.prototype.trimLeft:String.prototype.trimStart=function(){return this.replace(/^[\s\uFEFF\xA0]+/g,"")}),String.prototype.trimEnd||(String.prototype.trimRight?String.prototype.trimEnd=String.prototype.trimRight:String.prototype.trimEnd=function(){return this.replace(/[\s\uFEFF\xA0]+$/g,"")})},1330:function(t,e,n){"use strict";var r=n(9),a=r(n(23)),i=r(n(15)),o=r(n(16)),c=r(n(27)),u=r(n(28)),s=r(n(26));function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var f=function(t){(0,c.default)(r,t);var e,n=(e=r,function(){var t,n=(0,s.default)(e);if(l()){var r=(0,s.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,u.default)(this,t)});function r(t){var e;if((0,i.default)(this,r),"track"!==(e=n.call(this,t,{checkIndent:!1})).nameKey)throw new Error('trackDb has "'.concat(e.nameKey,'" instead of "track" as the first line in each track'));return e.forEach((function(t,n){var r=Array.from(t.keys()),i=[];if(["track","shortLabel"].forEach((function(t){r.includes(t)||i.push(t)})),i.length>0)throw new Error("Track ".concat(n," is missing required key(s): ").concat(i.join(", ")));var o=["superTrack","compositeTrack","container","view"];if(!r.some((function(t){return o.includes(t)}))){if(!r.includes("bigDataUrl"))throw new Error("Track ".concat(n,' is missing required key "bigDataUrl"'));if(!r.includes("type")){var c=e.settings(n);if(!Array.from(c.keys()).includes("type"))throw new Error("Neither track ".concat(n,' nor any of its parent tracks have the required key "type"'))}}var u="",s=n;do{if(s=e.get(s).get("parent")){var l=s.split(" ");s=(0,a.default)(l,1)[0],u+="    "}}while(s);var f=e.get(n);f.indent=u,e.set(n,f)})),e}return(0,o.default)(r,[{key:"settings",value:function(t){var e=this;if(!this.has(t))throw new Error("Track ".concat(t," does not exist"));var n=[t],r=t;do{(r=this.get(r).get("parent"))&&n.push(r)}while(r);var a=new Map;return n.reverse(),n.forEach((function(t){e.get(t).forEach((function(t,e){a.set(e,t)}))})),a}}]),r}(n(472));t.exports=f},1331:function(t,e,n){"use strict";var r=n(9),a=r(n(15)),i=r(n(27)),o=r(n(28)),c=r(n(26));function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var s=function(t){(0,i.default)(r,t);var e,n=(e=r,function(){var t,n=(0,c.default)(e);if(u()){var r=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,o.default)(this,t)});function r(t){var e;if((0,a.default)(this,r),"hub"!==(e=n.call(this,t)).nameKey)throw new Error('Hub file must begin with a line like "hub <hub_name>"');var i=["hub","shortLabel","longLabel","genomesFile","email","descriptionUrl"],o=[];if(e.forEach((function(t,e){i.includes(e)||o.push(e)})),o.length>0)throw new Error("Hub file has invalid entr".concat(1===o.length?"y":"ies",": ").concat(o.join(", ")));var c=[];if(i.forEach((function(t){"descriptionUrl"===t||e.get(t)||c.push(t)})),c.length>0)throw new Error("Hub file is missing required entr".concat(1===c.length?"y":"ies",": ").concat(c.join(", ")));return e}return r}(n(473));t.exports=s},1332:function(t,e,n){"use strict";var r=n(9),a=r(n(15)),i=r(n(27)),o=r(n(28)),c=r(n(26));function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var s=function(t){(0,i.default)(r,t);var e,n=(e=r,function(){var t,n=(0,c.default)(e);if(u()){var r=(0,c.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,o.default)(this,t)});function r(t){var e;if((0,a.default)(this,r),"genome"!==(e=n.call(this,t)).nameKey)throw new Error('Genomes file must begin with a line like "genome <genome_name>"');var i=["genome","trackDb"];return e.forEach((function(t,e){var n=[];if(i.forEach((function(e){t.get(e)||n.push(e)})),n.length>0)throw new Error("Genomes file entry ".concat(e," is missing required entr").concat(1===n.length?"y":"ies",": ").concat(n.join(", ")))})),e}return r}(n(472));t.exports=s},1403:function(t,e,n){"use strict";var r=n(9),a=n(21);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.config,n=t.handleClose,r=m(),a=(0,u.useState)(),p=(0,c.default)(a,2),y=p[0],v=p[1],g=(0,u.useState)(),k=(0,c.default)(g,2),w=k[0],b=k[1],E=(0,d.getSession)(e),C=E.rpcManager,O=(0,f.readConfObject)(e);(0,u.useEffect)((function(){var t=new AbortController,n=t.signal,r=!1;return(0,o.default)(i.default.mark((function t(){var a,o;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=(0,f.readConfObject)(e,"adapter"),t.next=4,C.call(e.trackId,"CoreGetInfo",{adapterConfig:a,signal:n});case 4:o=t.sent,r||v(o),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r||(console.error(t.t0),b(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))(),function(){t.abort(),r=!0}}),[e,C]);var S=(0,f.readConfObject)(e,"name");"ReferenceSequenceTrack"===(0,f.readConfObject)(e,"type")&&(S="Reference Sequence",E.assemblies.forEach((function(t){t.sequence===e.configuration&&(S="Reference Sequence (".concat((0,f.readConfObject)(t,"name"),")"))})));var _="string"==typeof y?{header:"<pre>".concat(y.replace(/</g,"&lt;").replace(/>/g,"&gt;"),"</pre>")}:y||{};return u.default.createElement(s.Dialog,{open:!0,onClose:n},u.default.createElement(s.DialogTitle,null,S,u.default.createElement(s.IconButton,{className:r.closeButton,onClick:function(){return n()}},u.default.createElement(l.default,null))),u.default.createElement(s.DialogContent,null,u.default.createElement(h.BaseCard,{title:"Configuration"},u.default.createElement(h.Attributes,{attributes:O,omit:["displays","baseUri","refNames"]})),null!==y?u.default.createElement(h.BaseCard,{title:"File info"},w?u.default.createElement(s.Typography,{color:"error"},"".concat(w)):y?u.default.createElement(h.Attributes,{attributes:_}):"Loading file data..."):null))};var i=r(n(22)),o=r(n(25)),c=r(n(23)),u=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==a(t)&&"function"!=typeof t)return{default:t};var n=p(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var c=i?Object.getOwnPropertyDescriptor(t,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=t[o]}r.default=t,n&&n.set(t,r);return r}(n(1)),s=n(29),l=r(n(60)),f=n(37),d=n(39),h=n(241);function p(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(p=function(t){return t?n:e})(t)}var m=(0,s.makeStyles)((function(t){return{closeButton:{position:"absolute",right:t.spacing(1),top:t.spacing(1),color:t.palette.grey[500]}}}))},1404:function(t,e,n){"use strict";var r=n(472),a=n(473),i=n(1330),o=n(1331),c=n(1332);t.exports={RaFile:r,RaStanza:a,TrackDbFile:i,HubFile:o,GenomesFile:c}},1405:function(t,e,n){"use strict";var r=n(9),a=n(21);Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.config,n=t.handleClose,r=m(),a=(0,u.useState)(),p=(0,c.default)(a,2),y=p[0],v=p[1],g=(0,u.useState)(),k=(0,c.default)(g,2),w=k[0],b=k[1],E=(0,d.getSession)(e),C=E.rpcManager,O=(0,f.readConfObject)(e);(0,u.useEffect)((function(){var t=new AbortController,n=t.signal,r=!1;return(0,o.default)(i.default.mark((function t(){var a,o;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=(0,f.readConfObject)(e,"adapter"),t.next=4,C.call(e.trackId,"CoreGetInfo",{adapterConfig:a,signal:n});case 4:o=t.sent,r||v(o),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),r||(console.error(t.t0),b(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))(),function(){t.abort(),r=!0}}),[e,C]);var S=(0,f.readConfObject)(e,"name");"ReferenceSequenceTrack"===(0,f.readConfObject)(e,"type")&&(S="Reference Sequence",E.assemblies.forEach((function(t){t.sequence===e.configuration&&(S="Reference Sequence (".concat((0,f.readConfObject)(t,"name"),")"))})));var _="string"==typeof y?{header:"<pre>".concat(y.replace(/</g,"&lt;").replace(/>/g,"&gt;"),"</pre>")}:y||{};return u.default.createElement(s.Dialog,{open:!0,onClose:n},u.default.createElement(s.DialogTitle,null,S,u.default.createElement(s.IconButton,{className:r.closeButton,onClick:function(){return n()}},u.default.createElement(l.default,null))),u.default.createElement(s.DialogContent,null,u.default.createElement(h.BaseCard,{title:"Configuration"},u.default.createElement(h.Attributes,{attributes:O,omit:["displays","baseUri","refNames"]})),null!==y?u.default.createElement(h.BaseCard,{title:"File info"},w?u.default.createElement(s.Typography,{color:"error"},"".concat(w)):y?u.default.createElement(h.Attributes,{attributes:_}):"Loading file data..."):null))};var i=r(n(22)),o=r(n(25)),c=r(n(23)),u=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==a(t)&&"function"!=typeof t)return{default:t};var n=p(e);if(n&&n.has(t))return n.get(t);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var c=i?Object.getOwnPropertyDescriptor(t,o):null;c&&(c.get||c.set)?Object.defineProperty(r,o,c):r[o]=t[o]}r.default=t,n&&n.set(t,r);return r}(n(1)),s=n(29),l=r(n(60)),f=n(41),d=n(42),h=n(338);function p(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(p=function(t){return t?n:e})(t)}var m=(0,s.makeStyles)((function(t){return{closeButton:{position:"absolute",right:t.spacing(1),top:t.spacing(1),color:t.palette.grey[500]}}}))},472:function(t,e,n){"use strict";var r=n(9),a=r(n(15)),i=r(n(16)),o=r(n(77)),c=r(n(27)),u=r(n(28)),s=r(n(26)),l=r(n(169));function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var d=n(473),h=function(t){(0,c.default)(r,t);var e,n=(e=r,function(){var t,n=(0,s.default)(e);if(f()){var r=(0,s.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,u.default)(this,t)});function r(t){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{checkIndent:!0};(0,a.default)(this,r),e=n.call(this);var o,c=i.checkIndent;return e._checkIndent=c,o="string"==typeof t?t.trimEnd().split(/(?:[\t ]*\r?\n){2,}/):t||[],e._stanzaAndCommentOrder=[],o.forEach((function(t){e.add(t)})),e}return(0,i.default)(r,[{key:"add",value:function(t){if(""===t)throw new Error("Invalid stanza, was empty");if(t.trim().startsWith("#")){var e=t.trimEnd().split(/\r?\n/).map((function(t){return t.trim()}));if(e.every((function(t){return t.startsWith("#")})))return this._stanzaAndCommentOrder.push(e.join("\n")),this}var n=new d(t,{checkIndent:this._checkIndent});if(this.nameKey){if(n.nameKey!==this.nameKey)throw new Error("The first line in each stanza must have the same key. "+"Saw both ".concat(this.nameKey," and ").concat(n.nameKey))}else this.nameKey=n.nameKey;if(this.has(n.name))throw new Error("Got duplicate stanza name: ".concat(n.name));return this._stanzaAndCommentOrder.push(n.name),(0,o.default)((0,s.default)(r.prototype),"set",this).call(this,n.name,n)}},{key:"update",value:function(t,e){if(!(e instanceof d))throw new Error("Value of ".concat(t," is not an RaStanza"));(0,o.default)((0,s.default)(r.prototype),"set",this).call(this,t,e)}},{key:"delete",value:function(t){return this._stanzaAndCommentOrder.includes(t)&&(this._stanzaAndCommentOrder=this._stanzaAndCommentOrder.filter((function(e){return e!==t}))),(0,o.default)((0,s.default)(r.prototype),"delete",this).call(this,t)}},{key:"clear",value:function(){this._stanzaAndCommentOrder.length=0,this.nameKey=void 0,(0,o.default)((0,s.default)(r.prototype),"clear",this).call(this)}},{key:"toString",value:function(){var t=this;if(0===this.size)return"";var e=[];return this._stanzaAndCommentOrder.forEach((function(n){n.startsWith("#")?e.push("".concat(n,"\n")):e.push(t.get(n).toString())})),e.join("\n")}}]),r}((0,l.default)(Map));t.exports=h},473:function(t,e,n){"use strict";var r=n(9),a=r(n(21)),i=r(n(23)),o=r(n(15)),c=r(n(16)),u=r(n(77)),s=r(n(27)),l=r(n(28)),f=r(n(26)),d=r(n(169));function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}n(1329);var p=function(t){(0,s.default)(r,t);var e,n=(e=r,function(){var t,n=(0,f.default)(e);if(h()){var r=(0,f.default)(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return(0,l.default)(this,t)});function r(t){var e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{checkIndent:!0};(0,o.default)(this,r),e=n.call(this);var i,c=a.checkIndent;return e._checkIndent=c,i="string"==typeof t?t.trimEnd().split(/\r?\n/):t||[],e._keyAndCommentOrder=[],i.forEach((function(t){e.add(t)})),e}return(0,c.default)(r,[{key:"add",value:function(t){if(""===t)throw new Error("Invalid stanza, contained blank lines");if(t.trim().startsWith("#"))return this._keyAndCommentOrder.push(t.trim()),this;if(t.trimEnd().endsWith("\\")){var e=t.trimEnd().slice(0,-1);return this._continuedLine?this._continuedLine+=e.trimStart():this._continuedLine=e,this}var n=t;if(this._continuedLine&&(n=this._continuedLine+n.trimStart(),this._continuedLine=void 0),this.indent||this._checkIndent){var a=n.match(/^([ \t]+)/);if(void 0===this.indent)if(a){var o=(0,i.default)(a,2);this.indent=o[1]}else this.indent="";else if(""===this.indent&&null!==a||this.indent&&this.indent!==a[1])throw new Error("Inconsistent indentation of stanza")}else this.indent="";var c=n.trim(),s=c.indexOf(" ");if(-1===s){if(!this.nameKey)throw new Error("First line in a stanza must have both a key and a value");return this.has(c)?this:(this._keyAndCommentOrder.push(c),(0,u.default)((0,f.default)(r.prototype),"set",this).call(this,c,""))}var l=c.slice(0,s),d=c.slice(s+1);if(this.has(l)&&d!==this.get(l))throw new Error("Got duplicate key with a different value in stanza: "+'"'.concat(l,'" key has both ').concat(this.get(l)," and ").concat(d));return this._keyAndCommentOrder.push(l),this.nameKey||(this.nameKey=l,this.name=c.slice(s+1)),(0,u.default)((0,f.default)(r.prototype),"set",this).call(this,l,d)}},{key:"set",value:function(t,e){if("string"!=typeof e)throw new Error("Value of ".concat(t," must be a string, got ").concat((0,a.default)(e)));return(0,u.default)((0,f.default)(r.prototype),"set",this).call(this,t,e)}},{key:"delete",value:function(t){if(t===this.nameKey)throw new Error("Cannot delete the first line in a stanza (you can still overwrite it with set()).");return this._keyAndCommentOrder.includes(t)&&(this._keyAndCommentOrder=this._keyAndCommentOrder.filter((function(e){return e!==t}))),(0,u.default)((0,f.default)(r.prototype),"delete",this).call(this,t)}},{key:"clear",value:function(){this._keyAndCommentOrder.length=0,this._continuedLine=void 0,this.indent=void 0,this.name=void 0,this.nameKey=void 0,(0,u.default)((0,f.default)(r.prototype),"clear",this).call(this)}},{key:"toString",value:function(){var t=this;if(0===this.size)return"";var e=[];return this._keyAndCommentOrder.forEach((function(n){n.startsWith("#")?e.push("".concat(t.indent).concat(n)):e.push("".concat(t.indent).concat(n," ").concat(t.get(n)).trimEnd())})),"".concat(e.join("\n"),"\n")}}]),r}((0,d.default)(Map));t.exports=p}}]);
//# sourceMappingURL=async-null.js.map
//# sourceMappingURL=async-null.js.map