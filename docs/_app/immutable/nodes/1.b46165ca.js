import{s as _,n as g,e as h}from"../chunks/scheduler.e108d1fd.js";import{S as v,i as $,g as E,m as u,h as S,j as x,n as p,f as d,a as j,B as l,o as f}from"../chunks/index.d314317b.js";import{d as q}from"../chunks/singletons.69adf808.js";const y=()=>{const t=q;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},B={subscribe(t){return y().page.subscribe(t)}};function C(t){var m;let e,r=t[0].status+"",n,o,i=((m=t[0].error)==null?void 0:m.message)+"",c;return{c(){e=E("h1"),n=u(r),o=u(": "),c=u(i)},l(a){e=S(a,"H1",{});var s=x(e);n=p(s,r),o=p(s,": "),c=p(s,i),s.forEach(d)},m(a,s){j(a,e,s),l(e,n),l(e,o),l(e,c)},p(a,[s]){var b;s&1&&r!==(r=a[0].status+"")&&f(n,r),s&1&&i!==(i=((b=a[0].error)==null?void 0:b.message)+"")&&f(c,i)},i:g,o:g,d(a){a&&d(e)}}}function H(t,e,r){let n;return h(t,B,o=>r(0,n=o)),[n]}let A=class extends v{constructor(e){super(),$(this,e,H,C,_,{})}};export{A as component};