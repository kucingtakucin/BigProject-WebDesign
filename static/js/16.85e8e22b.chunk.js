(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[16],{157:function(e,a,t){"use strict";var i=t(20),m=t(21),s=t(22),r=t(23),l=t(1),n=t.n(l),o=t(129),u=t(130),c=t(147),d=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var m;return Object(i.a)(this,t),(m=a.call(this,e)).state={gambar1:null,gambar2:null,gambar3:null,gambar4:null,gambar5:null,gambar6:null,gambar7:null,gambar8:null},m}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://picsum.photos/v2/list?page=".concat(Math.floor(5*Math.random()+1),"&limit=100")).then((function(e){return e.json()})).then((function(a){e.setState({gambar1:a[Math.floor(100*Math.random()+1)].download_url,gambar2:a[Math.floor(100*Math.random()+1)].download_url,gambar3:a[Math.floor(100*Math.random()+1)].download_url,gambar4:a[Math.floor(100*Math.random()+1)].download_url,gambar5:a[Math.floor(100*Math.random()+1)].download_url,gambar6:a[Math.floor(100*Math.random()+1)].download_url,gambar7:a[Math.floor(100*Math.random()+1)].download_url,gambar8:a[Math.floor(100*Math.random()+1)].download_url})})).catch((function(e){return console.log("Error",e)}))}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,null,n.a.createElement(u.a,{md:"12"},n.a.createElement("h3",{className:"border-bottom font-weight-bold pl-2 pr-2 mb-2"},"Most Popular"))),n.a.createElement(o.a,null,n.a.createElement(u.a,{lg:"12"},n.a.createElement(c.a,{className:"mb-2"},n.a.createElement(c.a,{left:!0,href:"#"},n.a.createElement("img",{src:this.state.gambar1,width:"80px",alt:"Kucing"})),n.a.createElement(c.a,{body:!0,className:"m-auto"},n.a.createElement(c.a,{heading:!0,className:"m-auto"},n.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),n.a.createElement(c.a,{className:"mb-2"},n.a.createElement(c.a,{left:!0,href:"#"},n.a.createElement("img",{src:this.state.gambar2,width:"80px",alt:"Kucing"})),n.a.createElement(c.a,{body:!0,className:"m-auto"},n.a.createElement(c.a,{heading:!0,className:"m-auto"},n.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),n.a.createElement(c.a,{className:"mb-2"},n.a.createElement(c.a,{left:!0,href:"#"},n.a.createElement("img",{src:this.state.gambar3,width:"80px",alt:"Kucing"})),n.a.createElement(c.a,{body:!0,className:"m-auto"},n.a.createElement(c.a,{heading:!0,className:"m-auto"},n.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),n.a.createElement(c.a,{className:"mb-2"},n.a.createElement(c.a,{left:!0,href:"#"},n.a.createElement("img",{src:this.state.gambar4,width:"80px",alt:"Kucing"})),n.a.createElement(c.a,{body:!0,className:"m-auto"},n.a.createElement(c.a,{heading:!0,className:"m-auto"},n.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))))),n.a.createElement(o.a,null,n.a.createElement(u.a,{md:"12"},n.a.createElement("h3",{className:"border-bottom font-weight-bold pl-2 pr-2 mb-2"},"Hot News"))),n.a.createElement(o.a,null,n.a.createElement(u.a,{lg:"12"},n.a.createElement(c.a,{className:"mb-2"},n.a.createElement(c.a,{left:!0,href:"#"},n.a.createElement("img",{src:this.state.gambar5,width:"80px",alt:"Kucing"})),n.a.createElement(c.a,{body:!0,className:"m-auto"},n.a.createElement(c.a,{heading:!0,className:"m-auto"},n.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),n.a.createElement(c.a,{className:"mb-2"},n.a.createElement(c.a,{left:!0,href:"#"},n.a.createElement("img",{src:this.state.gambar6,width:"80px",alt:"Kucing"})),n.a.createElement(c.a,{body:!0,className:"m-auto"},n.a.createElement(c.a,{heading:!0,className:"m-auto"},n.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),n.a.createElement(c.a,{className:"mb-2"},n.a.createElement(c.a,{left:!0,href:"#"},n.a.createElement("img",{src:this.state.gambar7,width:"80px",alt:"Kucing"})),n.a.createElement(c.a,{body:!0,className:"m-auto"},n.a.createElement(c.a,{heading:!0,className:"m-auto"},n.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),n.a.createElement(c.a,{className:"mb-2"},n.a.createElement(c.a,{left:!0,href:"#"},n.a.createElement("img",{src:this.state.gambar8,width:"80px",alt:"Kucing"})),n.a.createElement(c.a,{body:!0,className:"m-auto"},n.a.createElement(c.a,{heading:!0,className:"m-auto"},n.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))))))}}]),t}(l.Component);a.a=d},164:function(e,a,t){},181:function(e,a,t){"use strict";t.r(a);var i=t(20),m=t(21),s=t(22),r=t(23),l=t(1),n=t.n(l),o=t(119),u=t(152),c=t(153),d=t(129),p=t(130),b=(t(164),t(157)),E=t(10),g=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("main",{className:"App-main"},n.a.createElement("section",{id:"VisiMisi",className:"p-3"},n.a.createElement(o.a,{className:"themed-container"},n.a.createElement(u.a,null,n.a.createElement(c.a,null,n.a.createElement(E.b,{to:"/"},"Beranda")),n.a.createElement(c.a,{active:!0},"Profil"),n.a.createElement(c.a,{active:!0},"Visi & Misi")),n.a.createElement(d.a,null,n.a.createElement(p.a,{lg:"9"},n.a.createElement(d.a,null,n.a.createElement(p.a,{md:"12"},n.a.createElement("h1",{className:"border-bottom font-weight-bold pl-4 pr-4 mb-4"},"Visi"))),n.a.createElement(d.a,null,n.a.createElement(p.a,{md:"12"},n.a.createElement("p",{className:"text-justify"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, consectetur deserunt eum magnam minima modi perspiciatis quae quibusdam. Adipisci blanditiis deserunt hic officia soluta suscipit voluptatem? Expedita porro quaerat reprehenderit repudiandae. Animi eligendi illo nesciunt quo repellendus? Cupiditate esse mollitia natus nisi quas quasi reiciendis! Accusamus blanditiis impedit iusto laudantium, soluta vitae. Accusamus error ipsa, molestias perspiciatis recusandae sint totam veniam voluptatum. Autem consequatur consequuntur cum, delectus dolor fuga minus nam nisi nulla quasi sunt, suscipit tenetur, vero voluptas!"))),n.a.createElement(d.a,null,n.a.createElement(p.a,{md:"12"},n.a.createElement("h1",{className:"border-bottom font-weight-bold pl-4 pr-4 mb-4"},"Misi"))),n.a.createElement(d.a,null,n.a.createElement(p.a,{md:"12"},n.a.createElement("p",null,"Misi Dengan berlandaskan pada visi tersebut maka misi Laboratorium Komputasi FMIPA UNS dapat dirumuskan sebagai berikut :"),n.a.createElement("ol",{className:"text-justify"},n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores aspernatur ea facilis impedit laudantium, minima odit? Assumenda deserunt facere libero. A aliquid aperiam at aut consectetur cumque, dolorem esse eveniet laboriosam natus, necessitatibus nobis numquam obcaecati quisquam sit tempora?"),n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta et vel voluptatem? Aspernatur deserunt distinctio dolore enim fugit illo ipsam iure modi, nesciunt non nulla obcaecati odio omnis perspiciatis provident qui quos ratione rem repellendus reprehenderit saepe similique sit tempore?"),n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores magnam nesciunt porro quas quo, ratione reiciendis ut! Ab, aliquid architecto aspernatur autem debitis expedita explicabo fuga, ipsa minus modi necessitatibus odit quisquam quo recusandae rerum saepe suscipit temporibus veritatis vero.")))),n.a.createElement(d.a,null,n.a.createElement(p.a,{md:"12"},n.a.createElement("h1",{className:"border-bottom font-weight bold pl-4 pr-4 mb-4"},"Tujuan"))),n.a.createElement(d.a,null,n.a.createElement(p.a,{md:"12"},n.a.createElement("p",null,"Untuk melaksanakan misinya, Laboratorium Komputasi FMIPA UNS menetapkan arah tujuan pengembangan sebagai berikut :"),n.a.createElement("ol",null,n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam architecto at deserunt ex excepturi mollitia necessitatibus possimus ut? Ab aliquid amet aperiam autem corporis cumque deserunt earum, eligendi fugiat iste, laborum molestias nobis omnis optio quae quam reiciendis sint."),n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consequatur culpa debitis distinctio dolorum error itaque laudantium magnam minus, molestiae, molestias, nam nesciunt officiis pariatur perferendis porro possimus quae quaerat quasi quisquam reiciendis sint tempore veritatis! Ipsam iure voluptatem voluptatibus."),n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias assumenda atque dolor, esse exercitationem iste magni mollitia nemo nesciunt repudiandae suscipit totam voluptatibus. Delectus dicta dolor est ex exercitationem facere inventore ipsum, molestiae, natus recusandae rerum temporibus veniam voluptatum?"),n.a.createElement("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloribus dolorum ea eius enim est, eum explicabo ipsum nemo odio quas, tenetur veritatis? Asperiores culpa eveniet excepturi facilis illum itaque laudantium molestiae, nam nesciunt numquam quasi quibusdam rerum tenetur velit.")),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi doloribus eligendi eum impedit labore minima mollitia nisi officiis quidem, quis quod reiciendis sed temporibus veritatis! Assumenda doloremque excepturi libero minima non provident rem sapiente sed sit? Dignissimos ea eos et ipsum magni nihil omnis quas quis quo, vitae! Cupiditate, impedit ipsam iusto molestiae placeat quidem repellendus similique vel? Alias corporis debitis distinctio eligendi maiores nobis perspiciatis soluta veritatis. Atque cumque esse laboriosam natus necessitatibus officiis, omnis provident quidem tenetur!"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur, deserunt doloremque ea enim exercitationem facere fugiat id ipsam iure molestias sapiente temporibus veritatis voluptatem voluptatibus! Beatae blanditiis consectetur ducimus excepturi, exercitationem illum maiores perferendis placeat porro quas quia quisquam recusandae similique soluta temporibus veritatis vero voluptatum. Labore similique sit tempore. Aspernatur fugit magnam minima quia voluptate! Asperiores corporis exercitationem inventore minus nulla praesentium, quae reprehenderit sunt suscipit velit. Aspernatur dignissimos dolore minus sunt, velit vero voluptate. At, dolore, ullam?")))),n.a.createElement(p.a,{lg:"3",className:"border-left"},n.a.createElement(b.a,null))))))}}]),t}(l.Component);a.default=g}}]);
//# sourceMappingURL=16.85e8e22b.chunk.js.map