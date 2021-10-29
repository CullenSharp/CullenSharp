(this.webpackJsonppersonal_website=this.webpackJsonppersonal_website||[]).push([[0],{128:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(38),a=c.n(n),r=(c(49),c(8)),l=c(3),o=c.p+"static/media/resume.f0d7b1a3.pdf",j=c(0);var d=function(){return Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)("h1",{className:"text-[#131313] dark:text-[#FDFDFD] font-display mt-28 tracking-tighter text-5xl mb-7 lg:mb-14 lg:text-8xl",children:"Cullen Sharp"}),Object(j.jsxs)("p",{className:"font-body border-b-2 border-[#131313] dark:border-[#FDFDFD] pb-8 mb-8 tracking-wide text-base lg:text-4xl lg:tracking-tight",children:[Object(j.jsx)("mark",{children:"Fullstack Web Developer"})," with hands-on experience in the design and development of web applications from concept to release. Motivated self-starter focused on working at the intersection of art, design, and technology to create ",Object(j.jsx)("mark",{children:"immersive"})," and ",Object(j.jsx)("mark",{children:"intuitive"})," user experiences."]}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"mb-2",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/CullenSharp",target:"_blank",rel:"noopener noreferrer",children:"\ud83d\udcbb github\u2197"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/cullensharp/",target:"_blank",rel:"noopener noreferrer",children:"\ud83d\uddc4 linkedin\u2197"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.are.na/cullen-sharp",target:"_blank",rel:"noopener noreferrer",children:"*\ufe0f\u20e3 are.na\u2197"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:o,children:"\ud83d\udcdd resume"})})]})})]})},u=c(9),b=c(39),h=c.n(b)()({projectId:"cq5ohcjc",dataset:"production",apiVersion:"2021-10-20",token:"",useCdn:!0}),m=c(14),x=c.n(m),p=x()(h);var O=function(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){h.fetch('*[_type == "post"]{\n          title,\n\t\t\t\t\tmainImage,\n          slug,\n\t\t\t\t\tpublishedAt\n        }').then((function(e){return i(e)})).catch(console.error)})),Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("h3",{className:"navigation",children:"\ud83c\udfe0 home"})}),Object(j.jsx)("h2",{className:"heading2",children:"writings"}),Object(j.jsx)("p",{className:"subtitle",children:"an archive of my writing, musings, and notes generally"}),null===c||void 0===c?void 0:c.map((function(e){var t,c=e.slug,s=e._id,i=e.title,n=e.mainImage,a=e.publishedAt;return Object(j.jsxs)("article",{className:"posts",children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{className:"mr-4",src:(t=n,p.image(t)).size(530,410),alt:i}),Object(j.jsxs)("figcaption",{children:["[1] ",Object(j.jsx)("a",{href:"#",children:"a thing\u2197"})]})]}),Object(j.jsxs)("section",{className:"hero",children:[Object(j.jsx)(r.b,{to:"/Writings/"+c.current,children:Object(j.jsx)("h2",{className:"text-5xl font-display tracking-tighter",children:i})}),Object(j.jsx)("h3",{className:"text-2xl font-body mb-7",children:new Date(a).toDateString()}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, maxime nihil? Iusto quasi molestias, non ad temporibus, veritatis assumenda pariatur voluptatem quod qui, dolorem facilis atque ullam eius explicabo necessitatibus?"})]})]},s)}))]})},g=c(44),f=c(42),v=c.n(f),N=c(43);var y=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,c=document.querySelectorAll("p"),s=document.querySelectorAll("img"),i=Object(N.a)(c);try{for(i.s();!(e=i.n()).done;){var n=e.value.textContent;t+=n.split(" ").length}}catch(r){i.e(r)}finally{i.f()}var a=Math.ceil(t/275+.2*s.length);return"".concat(a," min read")},k=c.p+"static/media/02-Tokyo-Reggy.93feb862.mp3",w=x()(h);var q=function(){var e,t=Object(s.useState)(null),c=Object(u.a)(t,2),i=c[0],n=c[1],a=Object(l.f)().slug;return Object(s.useEffect)((function(){h.fetch('*[_type == "post" && slug.current == "'.concat(a,'"]{\n          _id,\n          title,\n          mainImage,\n          body,\n          categories[0...10]->{title},\n          publishedAt\n        }')).then((function(e){return n(Object(g.a)({},e[0]))})).catch(console.error)}),[]),Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("h3",{className:"navigation",children:"\ud83c\udfe0 home"})}),i&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"text-8xl font-display mt-28",children:i.title}),Object(j.jsx)("p",{className:"text-2xl font-body mb-6",children:"".concat(new Date(i.publishedAt).toDateString()," \u2042 ").concat(y())}),Object(j.jsx)("audio",{className:"mb-16 drop-shadow-lg",controls:!0,children:Object(j.jsx)("source",{src:k,type:"audio/mp3"})}),Object(j.jsxs)("article",{className:"w-1/2",children:[Object(j.jsx)("p",{className:"mb-8 font-body",children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex dolores corrupti expedita quia alias corporis hic harum eligendi enim quis. Eius natus doloremque quam illo incidunt illum, placeat aliquam nulla accusamus, reprehenderit voluptatum vero ab velit, debitis quasi amet voluptas modi ex fuga laudantium neque qui quis sapiente"}),Object(j.jsxs)("figure",{className:"mb-6",children:[Object(j.jsx)("img",{src:(e=i.mainImage,w.image(e)).size(400,400).url(),alt:i.title}),Object(j.jsxs)("figcaption",{children:["[1] ",Object(j.jsx)("a",{href:"#",children:"a thing\u2197"})]})]}),Object(j.jsx)(v.a,{blocks:i.body})]})]})]})},S=x()(h);var D=function(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),c=t[0],i=t[1];return Object(s.useEffect)((function(){h.fetch('*[_type == "post"]{\n          title,\n\t\t\t\t\tmainImage,\n          slug,\n\t\t\t\t\tpublishedAt\n        }').then((function(e){return i(e)})).catch(console.error)})),Object(j.jsxs)("div",{className:"view",children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("h3",{className:"navigation",children:"\ud83c\udfe0 home"})}),Object(j.jsx)("h2",{className:"heading2",children:"projects"}),Object(j.jsx)("p",{className:"subtitle",children:"an archive of serious solutions to serious problems. trust me"}),null===c||void 0===c?void 0:c.map((function(e){var t,c=e.slug,s=e._id,i=e.title,n=e.mainImage,a=e.publishedAt;return Object(j.jsxs)("article",{className:"posts",children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{className:"mr-4",src:(t=n,S.image(t)).size(530,410),alt:i}),Object(j.jsxs)("figcaption",{children:["[1] ",Object(j.jsx)("a",{href:"#",children:"a thing\u2197"})]})]}),Object(j.jsxs)("section",{className:"hero",children:[Object(j.jsx)(r.b,{to:"/Writings/"+c.current,children:Object(j.jsx)("h2",{className:"text-5xl font-display tracking-tighter",children:i})}),Object(j.jsx)("h3",{className:"text-2xl font-body mb-7",children:new Date(a).toDateString()}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, maxime nihil? Iusto quasi molestias, non ad temporibus, veritatis assumenda pariatur voluptatem quod qui, dolorem facilis atque ullam eius explicabo necessitatibus?"})]})]},s)}))]})};var F=function(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(0),a=Object(u.a)(n,2),r=a[0],l=a[1];return Object(s.useEffect)((function(){var e=document.querySelector("body");"dark"===e.className?e.className="":e.className="dark"}),[c]),Object(j.jsxs)("div",{className:"toggle",children:[Object(j.jsx)("div",{className:"track"}),Object(j.jsx)("div",{className:"thumb",onClick:function(){i(!c),l(1===r?0:1)},slide:r})]})};var I=function(){return Object(j.jsxs)(r.a,{basename:"",children:[Object(j.jsx)("header",{className:"m-12 flex justify-between content-center",children:Object(j.jsx)(F,{})}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{component:d,exact:!0,path:"/"}),Object(j.jsx)(l.a,{component:O,exact:!0,path:"/Writings"}),Object(j.jsx)(l.a,{component:q,path:"/Writings/:slug"}),Object(j.jsx)(l.a,{component:D,exact:!0,path:"/Projects"})]})]})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,129)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root")),_()},49:function(e,t,c){}},[[128,1,2]]]);
//# sourceMappingURL=main.25467096.chunk.js.map