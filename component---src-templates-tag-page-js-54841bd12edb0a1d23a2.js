(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Kgxr:function(n,t,e){"use strict";e.r(t);var a=e("q1tI"),i=e.n(a),o=e("Bl7J"),r=e("vrFN"),l=e("hYdW");t.default=function(n){var t=n.pageContext,e=n.data,a=n.location,c=t.tag;t.tags;console.log("tagList________",t);var d=e.allMarkdownRemark.edges,p=e.site.siteMetadata.title;return i.a.createElement(o.a,{location:a,title:p},i.a.createElement(r.a,{title:"#"+(c.charAt(0).toUpperCase()+c.slice(1)),keywords:[""+c,"blog","gatsby","javascript","react"]}),i.a.createElement("header",{className:"tag-page-head"},i.a.createElement("h1",null,"#",c,"(",e.allMarkdownRemark.totalCount,")")),i.a.createElement("div",{className:"post-feed"},d.map((function(n){var t=n.node;return i.a.createElement(l.a,{sub:"category",key:t.fields.slug,type:t.frontmatter.type,node:t,postClass:"post"})}))))}},hYdW:function(n,t,e){"use strict";e.d(t,"d",(function(){return z})),e.d(t,"a",(function(){return S})),e.d(t,"c",(function(){return R})),e.d(t,"b",(function(){return K}));var a,i,o,r,l,c,d,p,m,s,g,u,f,h,x,b,w=e("MUpH"),v=e("q1tI"),y=e.n(v),k=e("Wbzz"),E=e("vOnD"),j=Object(E.a)(k.Link)(a||(a=Object(w.a)(["\n  font-size: 16px;\n  line-height: 23px;\n  letter-spacing: .48px;\n  font-weight: 400;\n  font-stretch: 100%;\n  color: #666666;\n  text-decoration: none;\n  outline: none;\n  transition: all .3s ease;\n\n  &:hover {\n    color: #C5322E;\n    text-decoration: none;\n  }\n"]))),O=E.a.p(i||(i=Object(w.a)(["\n  color: #9e9e9e;\n  font-size: 13px;\n  font-weight: 500;\n"]))),z=function(n){n.type;var t=n.node;return y.a.createElement(y.a.Fragment,null,y.a.createElement(j,{to:t.fields.slug},t.frontmatter.title),y.a.createElement(O,null,t.frontmatter.date))},L=e("N1om"),_=e.n(L),C=E.a.article(o||(o=Object(w.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  padding: 30px 0;\n\n  @media (max-width: 800px) {\n    flex-direction: column;\n  }\n"]))),I=Object(E.a)(k.Link)(r||(r=Object(w.a)(["\n  display: block;\n  width: 27%;\n  height:0;\n  padding-bottom: 18%;\n  overflow: hidden;\n  background-size: cover;\n  ","\n  transition: opacity .3s ease-in-out;\n  opacity: 1;\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  @media (max-width: 800px) {\n    width: 100%;\n    padding-bottom: 55%;\n  }\n"])),(function(n){return"\n    background-image: url("+(n.url?n.url:"")+");\n  "})),M=E.a.div(l||(l=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  padding-right: 10px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n\n  @media (max-width: 800px) {\n    width: 100%;\n    flex-direction: row;\n    align-items: center;\n  }\n\n  \n  h4 {\n    margin: 0;\n    padding: 0;\n    margin-bottom: 10px;\n    font-size: 16px;\n    color: #687385;\n    font-weight: 700;\n    white-space: nowrap;\n\n    @media (max-width: 800px) {\n      margin: 0;\n      margin-right: 10px;\n      font-size: 12px;\n      font-weight: bold;\n      color: #919aa9;\n    }\n  }\n\n  a {\n    white-space: nowrap;\n    color: #687385;\n    font-size: 14px;\n    cursor: pointer;\n\n    &:hover {\n      color: #4a4a4a;\n    }\n\n    @media (max-width: 800px) {\n      font-size: 12px;\n      font-weight: bold;\n      color: #919aa9;\n    }\n  }\n"]))),N=E.a.div(c||(c=Object(w.a)(["\n  width: ",";\n  padding-right: 10px;\n\n  a {\n    display: block;\n    font-size: 20px;\n    margin: 0;\n    padding: 0;\n    margin-bottom: 10px;\n    color: #4a4a4a;\n\n    &:hover {\n      color: #C5322E;\n      text-decoration: none;\n    }\n  }\n\n  p {\n    overflow:hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: ",";\n    -webkit-box-orient: vertical;\n  }\n\n  @media (max-width: 800px) {\n    width: 100%;\n    padding-right: 0px;\n  }\n"])),(function(n){return"coding"===n.type?"75%":"50%"}),(function(n){return"coding"===n.type?"2":"3"})),J=E.a.div(d||(d=Object(w.a)(["\n  a {\n    display: block;\n    @media (max-width: 800px) {\n      display: none;\n    }\n  }\n"]))),S=function(n){var t=n.sub,e=n.type,a=n.node,i=a.frontmatter.tags;return y.a.createElement(C,null,y.a.createElement(M,null,y.a.createElement("h4",null,a.frontmatter.date),"category"===t?y.a.createElement(k.Link,{to:"/category/"+_()(a.frontmatter.category)},a.frontmatter.category):y.a.createElement(J,null,i.map((function(n,t){return y.a.createElement(k.Link,{key:t,to:"/tags/"+_()(n)},"#"+n)})))),y.a.createElement(N,{type:e},y.a.createElement(k.Link,{to:a.fields.slug},a.frontmatter.title||a.fields.slug),y.a.createElement("p",null,"…"!==a.excerpt?a.excerpt:"")),a.frontmatter.thumbnail&&y.a.createElement(I,{to:a.fields.slug,url:a.frontmatter.thumbnail.childImageSharp.fluid.src}))},W=E.a.div(p||(p=Object(w.a)(["\n  padding: 20px;\n\n  @media (max-width: 850px) {\n    padding: 20px 0;\n  }\n\n  hr {\n    margin: 0;\n    padding: 0;\n    width: 10px;\n    height: 1px;\n    background: #9a9a9a;\n  }\n"]))),q=E.a.div(m||(m=Object(w.a)(["\n  display: flex;\n  margin: 10px 0;\n\n  p, a {\n    margin: 0;\n    padding: 0;\n    margin-right: 10px;\n    color: #9e9e9e;\n    font-size: 13px;\n    font-weight: 500;\n  }\n\n  a {\n    font-weight: bold;\n  }\n"]))),B=Object(E.a)(k.Link)(s||(s=Object(w.a)(["\n  margin-bottom: .25rem;\n  font-size: 1.9rem;\n  font-weight: bold;\n  line-height: 1.4;\n  letter-spacing: .48px;\n\n  color: #666666;\n  text-decoration: none;\n  outline: none;\n  transition: all .3s ease;\n\n  &:hover {\n    color: #C5322E;\n    text-decoration: none;\n  }\n"]))),F=E.a.p(g||(g=Object(w.a)(["\n  font-size: 16px;\n  overflow:hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n"]))),R=function(n){var t=n.node;return y.a.createElement(W,null,y.a.createElement(B,{to:t.fields.slug},t.frontmatter.title),y.a.createElement(q,null,y.a.createElement("p",null,t.frontmatter.date),y.a.createElement(k.Link,{to:"/category/"+_()(t.frontmatter.category)},t.frontmatter.category)),y.a.createElement(F,null,t.frontmatter.description||t.excerpt),y.a.createElement("hr",null))},U=E.a.article(u||(u=Object(w.a)(["\n  position: relative;\n  display: flex;\n  margin-bottom: 5vh;\n\n  @media (max-width: 1024px) {\n    width: 100%;\n    flex-direction: column;\n  }\n"]))),Y=Object(E.a)(k.Link)(f||(f=Object(w.a)(["\n  position: relative;\n  display: block;\n  width: 500px;\n  height: 338px;\n  padding-bottom: 18%;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center center;\n\n  ","\n\n  @media (max-width: 1024px) {\n    width: 100%;\n    padding-bottom: 55%;\n\n    & > div {\n      opacity: 1;\n    }\n\n    & article {\n      visibility: visible;\n    }\n  }\n\n  &:hover {\n    & > div {\n      opacity: 1;\n    }\n\n    & article {\n      visibility: visible;\n    }\n  }\n"])),(function(n){return"\n    background-image: url("+(n.url?n.url:"")+");\n  "})),A=E.a.div(h||(h=Object(w.a)(["\n  position: absolute;\n  background: rgba(0, 0, 0, .3);\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n  transition: opacity .3s ease-in-out;\n"]))),D=E.a.div(x||(x=Object(w.a)(["\n  position: absolute;\n  top: 50px;\n  left: 550px;\n  padding: 10px;\n  white-space: normal;\n  width: 250px;\n  height: 180px;\n  font-size: 13px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 7;\n  -webkit-box-orient: vertical;\n  font-style: italic;\n\n  @media (max-width: 1024px) {\n    position: relative;\n    top: 0;\n    left: 0;\n    width: auto;\n    height: auto;\n  }\n"]))),H=E.a.article(b||(b=Object(w.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  visibility: hidden;\n  position: absolute;\n  bottom: 15px;\n  right: 15px;\n  color: white;\n\n  h3, h5 {\n    text-align:right;\n    margin: 0;\n    padding: 0;\n    font-family: "IBM Plex Serif",source-han-serif-tc,serif;\n    font-size: 28px;\n  }\n  h5 {\n    font-size: 13px;\n  }\n']))),K=function(n){var t=n.node;t.frontmatter.tags;return y.a.createElement(U,null,y.a.createElement(Y,{to:t.fields.slug,url:t.frontmatter.thumbnail.childImageSharp.fluid.src},y.a.createElement(A,null),y.a.createElement(H,null,y.a.createElement("h5",null,t.frontmatter.date),y.a.createElement("h3",null,t.frontmatter.title))),y.a.createElement(D,null,"…"!==t.excerpt?t.excerpt:""))}}}]);
//# sourceMappingURL=component---src-templates-tag-page-js-54841bd12edb0a1d23a2.js.map