import{S as j,i as q,s as C,e as d,a as p,b as h,d as m,f as u,r as B,n as b,g,h as L,j as O,u as T,t as N,v,k as S,w as A,l as D,m as E,x as F,y as G,z as I,o as w,p as $,q as J}from"./index-843177e6.js";/* empty css                                             */function k(o,e,a){const l=o.slice();return l[3]=e[a],l}function z(o,e,a){const l=o.slice();return l[6]=e[a],l}function M(o){let e,a=o[3].children,l=[];for(let s=0;s<a.length;s+=1)l[s]=y(z(o,a,s));return{c(){e=d("ul");for(let s=0;s<l.length;s+=1)l[s].c();h(e,"class","list-disc pl-5")},m(s,r){m(s,e,r);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(e,null)},p(s,r){if(r&2){a=s[3].children;let i;for(i=0;i<a.length;i+=1){const n=z(s,a,i);l[i]?l[i].p(n,r):(l[i]=y(n),l[i].c(),l[i].m(e,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=a.length}},d(s){s&&g(e),L(l,s)}}}function y(o){let e,a,l=o[6].title+"",s,r,i;return{c(){e=d("li"),a=d("a"),s=N(l),i=p(),h(a,"class","capitalize"),h(a,"href",r=o[6].path)},m(n,t){m(n,e,t),u(e,a),u(a,s),u(e,i)},p(n,t){t&2&&l!==(l=n[6].title+"")&&S(s,l),t&2&&r!==(r=n[6].path)&&h(a,"href",r)},d(n){n&&g(e)}}}function H(o){let e,a,l,s=o[3].title+"",r,i,n,t,f=o[3].children.length>0&&M(o);return{c(){e=d("ul"),a=d("li"),l=d("a"),r=N(s),n=p(),f&&f.c(),t=p(),h(l,"class","capitalize"),h(l,"href",i=o[3].path),h(e,"class","list-disc pl-10 md:block overflow-hidden md:overflow-visible svelte-1ckxctk"),v(e,"expanded",o[0]),v(e,"collapsed",!o[0])},m(c,_){m(c,e,_),u(e,a),u(a,l),u(l,r),u(e,n),f&&f.m(e,null),u(e,t)},p(c,_){_&2&&s!==(s=c[3].title+"")&&S(r,s),_&2&&i!==(i=c[3].path)&&h(l,"href",i),c[3].children.length>0?f?f.p(c,_):(f=M(c),f.c(),f.m(e,t)):f&&(f.d(1),f=null),_&1&&v(e,"expanded",c[0]),_&1&&v(e,"collapsed",!c[0])},d(c){c&&g(e),f&&f.d()}}}function K(o){let e,a,l,s,r,i=o[1].children,n=[];for(let t=0;t<i.length;t+=1)n[t]=H(k(o,i,t));return{c(){e=d("main"),a=d("button"),a.innerHTML=`<span>Open Navigation Menu</span> 
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>`,l=p();for(let t=0;t<n.length;t+=1)n[t].c();h(a,"class","h-10 flex md:hidden justify-center items-center w-full gap-2 rounded-lg mb-5 border"),h(e,"class","md:w-1/4 p-3 w-full md:h-full")},m(t,f){m(t,e,f),u(e,a),u(e,l);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);s||(r=B(a,"click",o[2]),s=!0)},p(t,[f]){if(f&3){i=t[1].children;let c;for(c=0;c<i.length;c+=1){const _=k(t,i,c);n[c]?n[c].p(_,f):(n[c]=H(_),n[c].c(),n[c].m(e,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=i.length}},i:b,o:b,d(t){t&&g(e),L(n,t),s=!1,r()}}}function P(o,e,a){let l;O(o,T,i=>a(1,l=i));const s=()=>{a(0,r=!r)};let r=!1;return[r,l,s]}class Q extends j{constructor(e){super(),q(this,e,P,K,C,{})}}function R(o){let e,a,l,s,r;a=new Q({});const i=o[1].default,n=A(i,o,o[0],null);return{c(){e=d("main"),D(a.$$.fragment),l=p(),s=d("div"),n&&n.c(),h(s,"class","px-5 py-2 w-full md:w-3/4 overflow-y-auto"),h(e,"class","flex flex-col md:flex-row items-start svelte-l4aj3m")},m(t,f){m(t,e,f),E(a,e,null),u(e,l),u(e,s),n&&n.m(s,null),r=!0},p(t,[f]){n&&n.p&&(!r||f&1)&&F(n,i,t,t[0],r?I(i,t[0],f,null):G(t[0]),null)},i(t){r||(w(a.$$.fragment,t),w(n,t),r=!0)},o(t){$(a.$$.fragment,t),$(n,t),r=!1},d(t){t&&g(e),J(a),n&&n.d(t)}}}function U(o,e,a){let{$$slots:l={},$$scope:s}=e;return o.$$set=r=>{"$$scope"in r&&a(0,s=r.$$scope)},[s,l]}class X extends j{constructor(e){super(),q(this,e,U,R,C,{})}}export{X as default};
