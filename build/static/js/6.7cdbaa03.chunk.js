(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[6],{157:function(e,a,t){"use strict";var l=t(20),n=t(21),r=t(22),s=t(23),c=t(1),o=t.n(c),m=t(129),i=t(130),u=t(147),d=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={gambar1:null,gambar2:null,gambar3:null,gambar4:null,gambar5:null,gambar6:null,gambar7:null,gambar8:null},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://picsum.photos/v2/list?page=".concat(Math.floor(5*Math.random()+1),"&limit=100")).then((function(e){return e.json()})).then((function(a){e.setState({gambar1:a[Math.floor(100*Math.random()+1)].download_url,gambar2:a[Math.floor(100*Math.random()+1)].download_url,gambar3:a[Math.floor(100*Math.random()+1)].download_url,gambar4:a[Math.floor(100*Math.random()+1)].download_url,gambar5:a[Math.floor(100*Math.random()+1)].download_url,gambar6:a[Math.floor(100*Math.random()+1)].download_url,gambar7:a[Math.floor(100*Math.random()+1)].download_url,gambar8:a[Math.floor(100*Math.random()+1)].download_url})})).catch((function(e){return console.log("Error",e)}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null,o.a.createElement(i.a,{md:"12"},o.a.createElement("h3",{className:"border-bottom font-weight-bold pl-2 pr-2 mb-2"},"Most Popular"))),o.a.createElement(m.a,null,o.a.createElement(i.a,{lg:"12"},o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar1,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar2,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar3,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar4,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))))),o.a.createElement(m.a,null,o.a.createElement(i.a,{md:"12"},o.a.createElement("h3",{className:"border-bottom font-weight-bold pl-2 pr-2 mb-2"},"Hot News"))),o.a.createElement(m.a,null,o.a.createElement(i.a,{lg:"12"},o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar5,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar6,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar7,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))),o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(u.a,{left:!0,href:"#"},o.a.createElement("img",{src:this.state.gambar8,width:"80px",alt:"Kucing"})),o.a.createElement(u.a,{body:!0,className:"m-auto"},o.a.createElement(u.a,{heading:!0,className:"m-auto"},o.a.createElement("h6",{className:"pl-1 m-auto"},"Lorem ipsum dolor sit amet.")))))))}}]),t}(c.Component);a.a=d},176:function(e,a,t){},192:function(e,a,t){"use strict";t.r(a);var l=t(20),n=t(21),r=t(22),s=t(23),c=t(1),o=t.n(c),m=t(119),i=t(152),u=t(153),d=t(129),f=t(130),h=t(3),b=t(5),p=t(7),g=t(6),E=t(0),N=t.n(E),v=t(4),j=t.n(v),y=t(2),O={children:N.a.node,inline:N.a.bool,tag:y.i,innerRef:N.a.oneOfType([N.a.object,N.a.func,N.a.string]),className:N.a.string,cssModule:N.a.object},w=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(p.a)(t)),t.submit=t.submit.bind(Object(p.a)(t)),t}Object(g.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,n=e.tag,r=e.innerRef,s=Object(b.a)(e,["className","cssModule","inline","tag","innerRef"]),c=Object(y.f)(j()(a,!!l&&"form-inline"),t);return o.a.createElement(n,Object(h.a)({},s,{ref:r,className:c}))},a}(c.Component);w.propTypes=O,w.defaultProps={tag:"form"};var M=w,x={children:N.a.node,row:N.a.bool,check:N.a.bool,inline:N.a.bool,disabled:N.a.bool,tag:y.i,className:N.a.string,cssModule:N.a.object},z=function(e){var a=e.className,t=e.cssModule,l=e.row,n=e.disabled,r=e.check,s=e.inline,c=e.tag,m=Object(b.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),i=Object(y.f)(j()(a,!!l&&"row",r?"form-check":"form-group",!(!r||!s)&&"form-check-inline",!(!r||!n)&&"disabled"),t);return"fieldset"===c&&(m.disabled=n),o.a.createElement(c,Object(h.a)({},m,{className:i}))};z.propTypes=x,z.defaultProps={tag:"div"};var R=z,k=N.a.oneOfType([N.a.number,N.a.string]),L=N.a.oneOfType([N.a.string,N.a.number,N.a.shape({size:k,order:k,offset:k})]),K={children:N.a.node,hidden:N.a.bool,check:N.a.bool,size:N.a.string,for:N.a.string,tag:y.i,className:N.a.string,cssModule:N.a.object,xs:L,sm:L,md:L,lg:L,xl:L,widths:N.a.array},P={tag:"label",widths:["xs","sm","md","lg","xl"]},T=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},_=function(e){var a=e.className,t=e.cssModule,l=e.hidden,n=e.widths,r=e.tag,s=e.check,c=e.size,m=e.for,i=Object(b.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),u=[];n.forEach((function(a,l){var n=e[a];if(delete i[a],n||""===n){var r,s=!l;if(Object(y.d)(n)){var c,o=s?"-":"-"+a+"-";r=T(s,a,n.size),u.push(Object(y.f)(j()(((c={})[r]=n.size||""===n.size,c["order"+o+n.order]=n.order||0===n.order,c["offset"+o+n.offset]=n.offset||0===n.offset,c))),t)}else r=T(s,a,n),u.push(r)}}));var d=Object(y.f)(j()(a,!!l&&"sr-only",!!s&&"form-check-label",!!c&&"col-form-label-"+c,u,!!u.length&&"col-form-label"),t);return o.a.createElement(r,Object(h.a)({htmlFor:m},i,{className:d}))};_.propTypes=K,_.defaultProps=P;var C=_,S={children:N.a.node,type:N.a.string,size:N.a.string,bsSize:N.a.string,valid:N.a.bool,invalid:N.a.bool,tag:y.i,innerRef:N.a.oneOfType([N.a.object,N.a.func,N.a.string]),plaintext:N.a.bool,addon:N.a.bool,className:N.a.string,cssModule:N.a.object},q=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(p.a)(t)),t.focus=t.focus.bind(Object(p.a)(t)),t}Object(g.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,n=e.bsSize,r=e.valid,s=e.invalid,c=e.tag,m=e.addon,i=e.plaintext,u=e.innerRef,d=Object(b.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),f=["radio","checkbox"].indexOf(l)>-1,p=new RegExp("\\D","g"),g=c||("select"===l||"textarea"===l?l:"input"),E="form-control";i?(E+="-plaintext",g=c||"input"):"file"===l?E+="-file":f&&(E=m?null:"form-check-input"),d.size&&p.test(d.size)&&(Object(y.j)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),n=d.size,delete d.size);var N=Object(y.f)(j()(a,s&&"is-invalid",r&&"is-valid",!!n&&"form-control-"+n,E),t);return("input"===g||c&&"function"===typeof c)&&(d.type=l),d.children&&!i&&"select"!==l&&"string"===typeof g&&"select"!==g&&(Object(y.j)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete d.children),o.a.createElement(g,Object(h.a)({},d,{ref:u,className:N}))},a}(o.a.Component);q.propTypes=S,q.defaultProps={type:"text"};var D=q,F=(t(176),t(10)),J=t(157),A=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return o.a.createElement("main",{className:"Index-main"},o.a.createElement("section",{id:"Contact",className:"p-3"},o.a.createElement(m.a,{className:"themed-container"},o.a.createElement(i.a,null,o.a.createElement(u.a,null,o.a.createElement(F.b,{to:"/"},"Beranda")),o.a.createElement(u.a,{active:!0},"Contact")),o.a.createElement(d.a,null,o.a.createElement(f.a,{lg:"9"},o.a.createElement(d.a,null,o.a.createElement(f.a,{md:"12"},o.a.createElement("h1",{className:"border-bottom font-weight-bold pl-4 pr-4 mb-4"},"Contact"))),o.a.createElement(d.a,null,o.a.createElement(f.a,{md:"12"},o.a.createElement(M,{method:"post"},o.a.createElement(R,null,o.a.createElement(C,{for:"username"},"Username"),o.a.createElement(D,{type:"text",id:"username",required:!0,maxLength:"25"})),o.a.createElement(R,null,o.a.createElement(C,{for:"email"},"Email"),o.a.createElement(D,{type:"email",id:"email",required:!0,maxLength:"25"})),o.a.createElement(R,null,o.a.createElement(C,{for:"text"},"Pesan"),o.a.createElement(D,{type:"textarea",id:"text",rows:"10"})),o.a.createElement(R,null,o.a.createElement(D,{type:"submit",value:"Kirim",className:"btn btn-outline-info"})))))),o.a.createElement(f.a,{lg:"3",className:"border-left"},o.a.createElement(J.a,null))))))}}]),t}(c.Component);a.default=A}}]);
//# sourceMappingURL=6.7cdbaa03.chunk.js.map
