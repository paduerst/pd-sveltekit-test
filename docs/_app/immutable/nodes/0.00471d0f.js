import{s as v,n as f,c as M,u as L,g as E,d as O}from"../chunks/scheduler.e108d1fd.js";import{S as g,i as d,g as $,h as w,x,k as C,a as m,f as c,r as j,s as q,u as y,c as b,j as P,v as H,d as p,t as h,w as T}from"../chunks/index.5ae4157e.js";const S=!0,I=Object.freeze(Object.defineProperty({__proto__:null,prerender:S},Symbol.toStringTag,{value:"Module"}));function A(o){let e,l='<a href="/" class="logo-anchor svelte-10jquw3" aria-label="Home"><img src="favicon.png" alt="Petal Quest logo" class="logo-img svelte-10jquw3"/> <span class="logo-txt svelte-10jquw3">Petal Quest</span></a> <nav class="primary-navigation svelte-10jquw3"><ul class="nav-list svelte-10jquw3"><li class="svelte-10jquw3"><a href="/prismatic-dragons" class="svelte-10jquw3">Prismatic Dragons</a></li> <li class="svelte-10jquw3"><a href="/dragon-builder" class="svelte-10jquw3">Dragon Builder</a></li> <li class="svelte-10jquw3"><a href="/about" class="svelte-10jquw3">About</a></li></ul> <button class="hamburger-button svelte-10jquw3"><svg viewBox="0 0 80 80" class="svelte-10jquw3"><rect fill="currentColor" y="0" width="80" height="10"></rect><rect fill="currentColor" y="35" width="80" height="10"></rect><rect fill="currentColor" y="70" width="80" height="10"></rect></svg></button></nav>';return{c(){e=$("header"),e.innerHTML=l,this.h()},l(s){e=w(s,"HEADER",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-1h1lgna"&&(e.innerHTML=l),this.h()},h(){C(e,"class","primary-header svelte-10jquw3")},m(s,r){m(s,e,r)},p:f,i:f,o:f,d(s){s&&c(e)}}}class D extends g{constructor(e){super(),d(this,e,null,A,v,{})}}function F(o){let e,l="<p>This is the footer.</p>";return{c(){e=$("footer"),e.innerHTML=l,this.h()},l(s){e=w(s,"FOOTER",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-10iu0co"&&(e.innerHTML=l),this.h()},h(){C(e,"class","svelte-11h78pu")},m(s,r){m(s,e,r)},p:f,i:f,o:f,d(s){s&&c(e)}}}class B extends g{constructor(e){super(),d(this,e,null,F,v,{})}}function Q(o){let e,l,s,r,i,u;e=new D({});const _=o[1].default,a=M(_,o,o[0],null);return i=new B({}),{c(){j(e.$$.fragment),l=q(),s=$("main"),a&&a.c(),r=q(),j(i.$$.fragment)},l(t){y(e.$$.fragment,t),l=b(t),s=w(t,"MAIN",{});var n=P(s);a&&a.l(n),n.forEach(c),r=b(t),y(i.$$.fragment,t)},m(t,n){H(e,t,n),m(t,l,n),m(t,s,n),a&&a.m(s,null),m(t,r,n),H(i,t,n),u=!0},p(t,[n]){a&&a.p&&(!u||n&1)&&L(a,_,t,t[0],u?O(_,t[0],n,null):E(t[0]),null)},i(t){u||(p(e.$$.fragment,t),p(a,t),p(i.$$.fragment,t),u=!0)},o(t){h(e.$$.fragment,t),h(a,t),h(i.$$.fragment,t),u=!1},d(t){t&&(c(l),c(s),c(r)),T(e,t),a&&a.d(t),T(i,t)}}}function R(o,e,l){let{$$slots:s={},$$scope:r}=e;return o.$$set=i=>{"$$scope"in i&&l(0,r=i.$$scope)},[r,s]}class N extends g{constructor(e){super(),d(this,e,R,Q,v,{})}}export{N as component,I as universal};