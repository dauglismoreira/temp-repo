(this.webpackJsonpaula=this.webpackJsonpaula||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(12),r=n.n(c),o=(n(19),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))}),i=n(13),u=n(2),l=n.n(u),p=n(4),h=n(6),j=n(7),d=n(9),b=n(8),f=(n(21),n(11)),v=n(14),O=function(){var e=Object(p.a)(l.a.mark((function e(){var t,n,s,a,c,r,o,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=fetch("https://jsonplaceholder.typicode.com/posts"),n=fetch("https://jsonplaceholder.typicode.com/photos"),e.next=4,Promise.all([t,n]);case 4:return s=e.sent,a=Object(v.a)(s,2),c=a[0],r=a[1],e.next=10,c.json();case 10:return o=e.sent,e.next=13,r.json();case 13:return i=e.sent,u=o.map((function(e,t){return Object(f.a)(Object(f.a)({},e),{},{cover:i[t].url})})),e.abrupt("return",u);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=(n(22),n(23),n(0)),g=function(e){var t=e.title,n=e.cover,s=e.body;e.id;return Object(x.jsxs)("div",{className:"post",children:[Object(x.jsx)("img",{src:n,alt:t}),Object(x.jsxs)("div",{className:"post-content",children:[Object(x.jsx)("h2",{children:t}),Object(x.jsx)("p",{children:s})]})]})},m=function(e){var t=e.posts;return Object(x.jsx)("div",{className:"posts",children:t.map((function(e){return Object(x.jsx)(g,{title:e.title,body:e.body,id:e.id,cover:e.cover},e.id)}))})},P=(n(25),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.onClick,s=e.disabled;return Object(x.jsx)("button",{disabled:s,className:"button",onClick:n,children:t})}}]),n}(s.Component)),y=(n(26),function(e){var t=e.searchValue,n=e.handleChange;return Object(x.jsx)("input",{className:"text-input",onChange:n,value:t,placeholder:"Type your search",type:"search"})}),C=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={posts:[],allPosts:[],page:0,postsPerPage:10,searchValue:""},e.loadPosts=Object(p.a)(l.a.mark((function t(){var n,s,a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state,s=n.page,a=n.postsPerPage,t.next=3,O();case 3:c=t.sent,e.setState({posts:c.slice(s,a),allPosts:c});case 5:case"end":return t.stop()}}),t)}))),e.loadMorePosts=function(){var t=e.state,n=t.page,s=t.postsPerPage,a=t.allPosts,c=t.posts,r=n+s,o=a.slice(r,r+s);c.push.apply(c,Object(i.a)(o)),e.setState({posts:c,page:r})},e.handleChange=function(t){var n=t.target.value;e.setState({searchValue:n})},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadPosts();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.posts,n=e.page,s=e.postsPerPage,a=e.allPosts,c=e.searchValue,r=n+s>=a.length,o=c?a.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())})):t;return Object(x.jsxs)("section",{className:"container",children:[Object(x.jsxs)("div",{className:"search-container",children:[!!c&&Object(x.jsxs)("h1",{children:["Search value: ",c]}),Object(x.jsx)(y,{searchValue:c,handleChange:this.handleChange})]}),o.length>0&&Object(x.jsx)(m,{posts:o}),0===o.length&&Object(x.jsx)("p",{children:"N\xe3o existem posts"}),Object(x.jsx)("div",{className:"button-container",children:!c&&Object(x.jsx)(P,{text:"Load more posts",onClick:this.loadMorePosts,disabled:r})})]})}}]),n}(s.Component);r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),o()}},[[27,1,2]]]);
//# sourceMappingURL=main.956ece7a.chunk.js.map