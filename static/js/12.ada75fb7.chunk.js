(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[12],{157:function(a,e,t){"use strict";var l=t(20),m=t(21),r=t(22),n=t(23),o=t(1),c=t.n(o),s=t(129),i=t(130),u=t(147),d=function(a){Object(n.a)(t,a);var e=Object(r.a)(t);function t(a){var m;return Object(l.a)(this,t),(m=e.call(this,a)).state={gambar1:null,gambar2:null,gambar3:null,gambar4:null,gambar5:null,gambar6:null,gambar7:null,gambar8:null},m}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var a=this;fetch("https://picsum.photos/v2/list?page=".concat(Math.floor(5*Math.random()+1),"&limit=100")).then((function(a){return a.json()})).then((function(e){a.setState({gambar1:e[Math.floor(100*Math.random()+1)].download_url,gambar2:e[Math.floor(100*Math.random()+1)].download_url,gambar3:e[Math.floor(100*Math.random()+1)].download_url,gambar4:e[Math.floor(100*Math.random()+1)].download_url,gambar5:e[Math.floor(100*Math.random()+1)].download_url,gambar6:e[Math.floor(100*Math.random()+1)].download_url,gambar7:e[Math.floor(100*Math.random()+1)].download_url,gambar8:e[Math.floor(100*Math.random()+1)].download_url})})).catch((function(a){return console.log("Error",a)}))}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,null,c.a.createElement(i.a,{md:"12"},c.a.createElement("h3",{className:"border-bottom font-weight-bold pl-2 pr-2 mb-2"},"Most Popular"))),c.a.createElement(s.a,null,c.a.createElement(i.a,{lg:"12"},c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(u.a,{left:!0,href:"#"},c.a.createElement("img",{src:this.state.gambar1,width:"80px",alt:"Kucing"})),c.a.createElement(u.a,{body:!0,className:"m-auto"},c.a.createElement(u.a,{heading:!0,className:"m-auto"},c.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(u.a,{left:!0,href:"#"},c.a.createElement("img",{src:this.state.gambar2,width:"80px",alt:"Kucing"})),c.a.createElement(u.a,{body:!0,className:"m-auto"},c.a.createElement(u.a,{heading:!0,className:"m-auto"},c.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(u.a,{left:!0,href:"#"},c.a.createElement("img",{src:this.state.gambar3,width:"80px",alt:"Kucing"})),c.a.createElement(u.a,{body:!0,className:"m-auto"},c.a.createElement(u.a,{heading:!0,className:"m-auto"},c.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(u.a,{left:!0,href:"#"},c.a.createElement("img",{src:this.state.gambar4,width:"80px",alt:"Kucing"})),c.a.createElement(u.a,{body:!0,className:"m-auto"},c.a.createElement(u.a,{heading:!0,className:"m-auto"},c.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))))),c.a.createElement(s.a,null,c.a.createElement(i.a,{md:"12"},c.a.createElement("h3",{className:"border-bottom font-weight-bold pl-2 pr-2 mb-2"},"Hot News"))),c.a.createElement(s.a,null,c.a.createElement(i.a,{lg:"12"},c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(u.a,{left:!0,href:"#"},c.a.createElement("img",{src:this.state.gambar5,width:"80px",alt:"Kucing"})),c.a.createElement(u.a,{body:!0,className:"m-auto"},c.a.createElement(u.a,{heading:!0,className:"m-auto"},c.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(u.a,{left:!0,href:"#"},c.a.createElement("img",{src:this.state.gambar6,width:"80px",alt:"Kucing"})),c.a.createElement(u.a,{body:!0,className:"m-auto"},c.a.createElement(u.a,{heading:!0,className:"m-auto"},c.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(u.a,{left:!0,href:"#"},c.a.createElement("img",{src:this.state.gambar7,width:"80px",alt:"Kucing"})),c.a.createElement(u.a,{body:!0,className:"m-auto"},c.a.createElement(u.a,{heading:!0,className:"m-auto"},c.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(u.a,{left:!0,href:"#"},c.a.createElement("img",{src:this.state.gambar8,width:"80px",alt:"Kucing"})),c.a.createElement(u.a,{body:!0,className:"m-auto"},c.a.createElement(u.a,{heading:!0,className:"m-auto"},c.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))))))}}]),t}(o.Component);e.a=d},169:function(a,e,t){},185:function(a,e,t){"use strict";t.r(e);var l=t(20),m=t(21),r=t(22),n=t(23),o=t(1),c=t.n(o),s=(t(169),t(119)),i=t(152),u=t(153),d=t(129),E=t(130),h=t(10),p=t(157),b=function(a){Object(n.a)(t,a);var e=Object(r.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("main",{className:"App-main"},c.a.createElement("section",{id:"PeminjamanAlat",className:"p-3"},c.a.createElement(s.a,{className:"themed-container"},c.a.createElement(i.a,null,c.a.createElement(u.a,null,c.a.createElement(h.b,{to:"/"},"Beranda")),c.a.createElement(u.a,{active:!0},"Layanan"),c.a.createElement(u.a,{active:!0},"Peminjaman Alat")),c.a.createElement(d.a,null,c.a.createElement(E.a,{lg:"9"},c.a.createElement(d.a,null,c.a.createElement(E.a,{md:"12"},c.a.createElement("h1",{className:"border-bottom font-weight-bold pl-4 pr-4 mb-4"},"SOP Peminjaman Alat"))),c.a.createElement(d.a,null,c.a.createElement(E.a,{md:"12"},c.a.createElement("h5",null,"SOP Peminjaman Alat Laboratorium Komputasi FMIPA UNS"),c.a.createElement("ol",null,c.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias architecto assumenda dolore molestias ratione voluptas. Aliquam incidunt rerum voluptate?"),c.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur delectus incidunt laudantium soluta totam. Cumque dicta doloribus laborum nihil ratione?"),c.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolores et hic odio omnis quia similique vero? Expedita, facilis, pariatur."),c.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorum earum eos fuga, itaque pariatur possimus quibusdam sed suscipit vero?"),c.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, iusto, odio? Consequatur esse ipsam ipsum libero maxime quidem quo temporibus?"))))),c.a.createElement(E.a,{lg:"3",className:"border-left"},c.a.createElement(p.a,null))))))}}]),t}(o.Component);e.default=b}}]);
//# sourceMappingURL=12.ada75fb7.chunk.js.map