(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[13],{157:function(e,a,t){"use strict";var m=t(20),l=t(21),r=t(22),n=t(23),c=t(1),o=t.n(c),s=t(129),i=t(130),u=t(147),d=function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).state={gambar1:null,gambar2:null,gambar3:null,gambar4:null,gambar5:null,gambar6:null,gambar7:null,gambar8:null},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://picsum.photos/v2/list?page=".concat(Math.floor(5*Math.random()+1),"&limit=100")).then((function(e){return e.json()})).then((function(a){e.setState({gambar1:a[Math.floor(100*Math.random()+1)].download_url,gambar2:a[Math.floor(100*Math.random()+1)].download_url,gambar3:a[Math.floor(100*Math.random()+1)].download_url,gambar4:a[Math.floor(100*Math.random()+1)].download_url,gambar5:a[Math.floor(100*Math.random()+1)].download_url,gambar6:a[Math.floor(100*Math.random()+1)].download_url,gambar7:a[Math.floor(100*Math.random()+1)].download_url,gambar8:a[Math.floor(100*Math.random()+1)].download_url})})).catch((function(e){return console.log("Error",e)}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement(i.a,{md:"12"},o.a.createElement("h3",{className:"border-bottom font-weight-bold pl-2 pr-2 mb-2"},"Most Popular"))),o.a.createElement(s.a,null,o.a.createElement(i.a,{lg:"12"},o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar1,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar2,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar3,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar4,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))))),o.a.createElement(s.a,null,o.a.createElement(i.a,{md:"12"},o.a.createElement("h3",{className:"border-bottom font-weight-bold pl-2 pr-2 mb-2"},"Hot News"))),o.a.createElement(s.a,null,o.a.createElement(i.a,{lg:"12"},o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar5,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar6,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar7,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar8,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))))))}}]),t}(c.Component);a.a=d},168:function(e,a,t){},184:function(e,a,t){"use strict";t.r(a);var m=t(20),l=t(21),r=t(22),n=t(23),c=t(1),o=t.n(c),s=(t(168),t(119)),i=t(152),u=t(153),d=t(129),E=t(130),h=t(10),p=t(157),b=function(e){Object(n.a)(t,e);var a=Object(r.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("main",{className:"Index-main"},o.a.createElement("section",{id:"PeminjamanRuang",className:"p-3"},o.a.createElement(s.a,{className:"themed-container"},o.a.createElement(i.a,null,o.a.createElement(u.a,null,o.a.createElement(h.b,{to:"/"},"Beranda")),o.a.createElement(u.a,{active:!0},"Layanan"),o.a.createElement(u.a,{active:!0},"Peminjaman Ruang")),o.a.createElement(d.a,null,o.a.createElement(E.a,{lg:"9"},o.a.createElement(d.a,null,o.a.createElement(E.a,{md:"12"},o.a.createElement("h1",{className:"border-bottom font-weight-bold pl-4 pr-4 mb-4"},"SOP Peminjaman Ruang"))),o.a.createElement(d.a,null,o.a.createElement(E.a,{md:"12"},o.a.createElement("h5",null,"SOP Peminjaman Ruang Laboratorium Komputasi FMIPA UNS"),o.a.createElement("ol",null,o.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta eveniet ex id inventore numquam, omnis perferendis quam quidem rem!"),o.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores delectus facere ullam ut voluptate. Cum distinctio quibusdam quos suscipit temporibus."),o.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, minima officiis? Architecto consectetur cupiditate in, numquam praesentium quaerat rerum similique?"),o.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi commodi ea est illum inventore nostrum odio omnis qui tempora voluptas."),o.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ea nam officiis perferendis ratione. Alias maxime nobis quis sed tempore."))))),o.a.createElement(E.a,{lg:"3",className:"border-left"},o.a.createElement(p.a,null))))))}}]),t}(c.Component);a.default=b}}]);
//# sourceMappingURL=13.85dda98d.chunk.js.map
