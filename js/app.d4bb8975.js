(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],d=0,h=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var f=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10e0":function(t,e,n){"use strict";var a=n("bbc6"),o=n.n(a);o.a},"357f":function(t,e,n){t.exports=n.p+"img/animals.ba3ecb93.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",[a("img",{attrs:{draggable:"true",src:n("357f"),alt:"",id:"app_image"},on:{dragstart:t.onDrag}})]),a("div",{staticClass:"app__container"},[a("whiteboard",{ref:"first",attrs:{"image-id":t.imageId,"outer-context":t.getMasterContext},on:{master:t.setMaster,ctx:t.setMasterContext}}),a("whiteboard",{ref:"second",attrs:{"image-id":t.imageId,"outer-context":t.getMasterContext},on:{master:t.setMaster,ctx:t.setMasterContext}}),a("whiteboard",{ref:"third",attrs:{"image-id":t.imageId,"outer-context":t.getMasterContext},on:{master:t.setMaster,ctx:t.setMasterContext}}),a("whiteboard",{ref:"fourth",attrs:{"image-id":t.imageId,"outer-context":t.getMasterContext},on:{master:t.setMaster,ctx:t.setMasterContext}})],1)])},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"whiteboard"},[n("canvas",{staticClass:"canv",class:{whiteboard__active:t.master},attrs:{id:t.canvasId,width:"400",height:"400"},on:{drop:t.onDrop,dragover:t.allowDrop}})])},s=[],c=(n("cb29"),n("d3b7"),n("25f0"),function(t,e,n){return!(t<n.x||t>n.x+n.width||e<n.y||e>n.y+n.height)}),u=function(t,e,n){return!(t<n.x+n.width-10||t>n.x+n.width+10||e<n.y+n.height-10||e>n.y+n.height+10)},f=function(){return"_".concat(Math.random().toString(36).substr(2,9))},d={props:{outerContext:{type:Object,default:function(){return{}}},imageId:{type:String,default:null}},watch:{outerContext:{deep:!0,handler:function(t){this.canvasId!==t.id&&(this.master=!1)}}},data:function(){return{master:!1,canvasId:f(),context:null,canvas:null,object:null}},mounted:function(){this.canvas=document.getElementById(this.canvasId),this.context=this.canvas.getContext("2d"),this.renderContent()},computed:{imageContext:function(){return this.master?this.object:this.outerContext},image:function(){return document.getElementById(this.imageId)}},methods:{allowDrop:function(t){t.preventDefault(),this.delay=!1},throwOutside:function(){var t=Object.assign({},this.object);this.$emit("ctx",t)},renderContent:function(){var t=this,e=function e(){!t.master&&t.imageContext.image?setTimeout(requestAnimationFrame,1e3,e):requestAnimationFrame(e),t.context.clearRect(0,0,t.canvas.width,t.canvas.height),t.imageContext.image&&t.drawImage(),t.canvas.onmousedown=function(e){if(t.master){var o=e.offsetX,i=e.offsetY;c(o,i,t.object)&&a(o,i),u(o,i,t.object)&&n(o,i)}};var n=function(e,n){t.canvas.onmousemove=function(a){var o=a.offsetX,i=a.offsetY,r=o-e,s=i-n;t.object.width=e+r,t.object.height=n+s},t.canvas.onmouseup=function(){t.canvas.onmousemove=function(){}}},a=function(e,n){var a=t.object.x,o=t.object.y;t.canvas.onmousemove=function(i){var r=i.offsetX,s=i.offsetY,c=r-e,u=s-n;t.object.x=a+c,t.object.y=o+u},t.canvas.onmouseup=function(){t.canvas.onmousemove=function(){}}}};e()},drawImage:function(){this.context.drawImage(this.image,this.imageContext.x,this.imageContext.y,this.imageContext.width,this.imageContext.height),this.context.beginPath(),this.context.arc(this.imageContext.x+this.imageContext.width,this.imageContext.y+this.imageContext.height,5,0,2*Math.PI,!1),this.context.closePath(),this.context.fill(),this.throwOutside()},setAsMaster:function(){this.master=!0,this.$emit("master",this.canvasId)},onDrop:function(t){t.preventDefault();var e=document.getElementById(this.imageId),n=t.dataTransfer.getData("mouse_position_x"),a=t.dataTransfer.getData("mouse_position_y"),o=t.clientX-this.canvas.offsetLeft-n,i=t.clientY-this.canvas.offsetTop-a;this.object={id:this.canvasId,context:this.context,image:e,x:o,y:i,width:e.offsetWidth,height:e.offsetHeight},this.drawImage(),this.setAsMaster()}}},h=d,m=(n("10e0"),n("2877")),l=Object(m["a"])(h,r,s,!1,null,null,null),g=l.exports,p={name:"App",components:{Whiteboard:g},data:function(){return{masterId:null,masterContext:null,imageId:null}},computed:{getMasterContext:function(){return Object.assign({},this.masterContext)}},methods:{setMasterContext:function(t){t&&t.id===this.masterId&&(this.masterContext=t)},setMaster:function(t){this.masterId=t},onDrag:function(t){t.dataTransfer.setData("mouse_position_x",t.clientX-t.target.offsetLeft),t.dataTransfer.setData("mouse_position_y",t.clientY-t.target.offsetTop),this.imageId=t.target.id}}},x=p,v=(n("7faf"),Object(m["a"])(x,o,i,!1,null,null,null)),b=v.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(b)}}).$mount("#app")},"7faf":function(t,e,n){"use strict";var a=n("b8ff"),o=n.n(a);o.a},b8ff:function(t,e,n){},bbc6:function(t,e,n){}});
//# sourceMappingURL=app.d4bb8975.js.map