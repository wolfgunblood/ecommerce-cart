(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{25:function(e,t,n){e.exports=n(37)},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(20),c=n.n(o),s=(n(30),n(18)),i=n(17),l=n(4),u=n(5),m=n(6),h=n(7),p=function(e){var t=e.totalCounters;return r.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"#",algin:"left"},"Cart"," ",r.a.createElement("span",{className:"badge badge-pill badge-secondary"},t))))},d=(n(31),n(50)),v=n(52),g=n(53),f=(Object(d.a)((function(e){return{root:{padding:e.spacing(3,2)}}})),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{align:"center"},r.a.createElement("img",{src:this.getphone(),alt:"Iphone",height:"400",width:"500"})),r.a.createElement("div",null,r.a.createElement(v.a,{elevation:3},r.a.createElement(g.a,{align:"center"},this.props.counter.info)))),r.a.createElement("span",{className:this.getBadgeClasses()},this.formatCount()),r.a.createElement("button",{onClick:function(){return e.props.onIncrement(e.props.counter)},className:"btn btn-secondary btn-sm"},"Add to Cart"),r.a.createElement("button",{onClick:function(){return e.props.onDecrement(e.props.counter)},className:"btn btn-danger btn-sm m-2"},"Remove from Cart"))}},{key:"getphone",value:function(){return this.props.counter.phone}},{key:"getBadgeClasses",value:function(){var e="badge m-2 badge-";return e+=this.props.counter.value<=0?"warning":"primary"}},{key:"formatCount",value:function(){var e=this.props.counter.value;return e<=0?"Zero":e}},{key:"notNegative",value:function(){var e=this.props.counter.value;return e<=0?"Zero":e}}]),n}(a.Component)),b=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.onReset,e.onDelete),n=e.onIncrement,a=e.counters,o=e.onDecrement;return r.a.createElement("div",null,a.map((function(e){return r.a.createElement(f,{key:e.id,onDelete:t,onIncrement:n,onDecrement:o,counter:e})})))}}]),n}(a.Component),w=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={counters:[{id:1,value:0,phone:"https://www.gizmochina.com/wp-content/uploads/2019/03/motorola-razr-2019-1-500x500.jpg",info:" Motorola Razr (2019) smartphone was launched on 13th November 2019. ... Motorola Razr (2019) is powered by a 2.2GHz octa-core Qualcomm Snapdragon 710 processor. It comes with 6GB of RAM. The Motorola Razr (2019) runs Android 9.0 Pie and is powered by a 2510mAh non-removable battery."},{id:2,value:0,phone:"https://images.macrumors.com/article-new/2017/09/iphonexdesign.jpg",info:"The iPhone 11 is available in six colors: black, white, red, purple, green, and yellow. The iPhone 11 also features a new anodized aluminum finish, which Apple says is more durable. There's also Dolby Vision audio. It's powered by Apple's new A13 Bionic chip, which Apple touts as its faster processor ever."},{id:3,value:0,phone:"https://i.gadgets360cdn.com/products/large/1556860999_635_google_pixel_3a.jpg?downsize=*:180&output-quality=80",info:"Google Pixel smartphone. The Google Pixel is a smartphone that was tested with the Android 7.1 operating system. This model weighs 5 ounces, has a 5 inch touch screen display, 12.3-megapixel main camera, and 8-megapixel selfie camera. It comes with 4GB of RAM"}]},e.handleIncrement=function(t){var n=Object(i.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(s.a)({},t),n[a].value++,e.setState({counters:n})},e.handleDecrement=function(t){var n=Object(i.a)(e.state.counters),a=n.indexOf(t);n[a]=Object(s.a)({},t),n[a].value<0?n[a].value=0:n[a].value--,e.setState({counters:n})},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),r.a.createElement("main",{className:"container"},r.a.createElement(b,{counters:this.state.counters,onReset:this.handleReset,onIncrement:this.handleIncrement,onDelete:this.handleDelete,onDecrement:this.handleDecrement})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(36);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.4ac64ff8.chunk.js.map