/*! JsRender v0.9.90 (Beta): http://jsviews.com/#jsrender */
/*! **VERSION FOR WEB** (For NODE.JS see http://jsviews.com/download/jsrender-node.js) */
!function(e,t){var n=t.jQuery;"object"==typeof exports?module.exports=n?e(t,n):function(n){if(n&&!n.fn)throw"Provide jQuery or null";return e(t,n)}:"function"==typeof define&&define.amd?define(function(){return e(t)}):e(t,!1)}(function(e,t){"use strict";function n(e,t){return function(){var n,r=this,i=r.base;return r.base=e,n=t.apply(r,arguments),r.base=i,n}}function r(e,t){return ne(t)&&(t=n(e?e._d?e:n(a,e):a,t),t._d=1),t}function i(e,t){var n,i=t.props;for(n in i)!Ee.test(n)||e[n]&&e[n].fix||(e[n]="convert"!==n?r(e.constructor.prototype[n],i[n]):i[n])}function o(e){return e}function a(){return""}function s(e){try{throw console.log("JsRender dbg breakpoint: "+e),"dbg breakpoint"}catch(t){}return this.base?this.baseApply(arguments):e}function d(e){this.name=(t.link?"JsViews":"JsRender")+" Error",this.message=e||this.name}function l(e,t){if(e){for(var n in t)e[n]=t[n];return e}}function u(e,t,n){return e?re(e)?u.apply(ee,e):(le.delimiters=[e,t,he=n?n.charAt(0):he],ce=e.charAt(0),fe=e.charAt(1),ge=t.charAt(0),ve=t.charAt(1),e="\\"+ce+"(\\"+he+")?\\"+fe,t="\\"+ge+"\\"+ve,X="(?:(\\w+(?=[\\/\\s\\"+ge+"]))|(\\w+)?(:)|(>)|(\\*))\\s*((?:[^\\"+ge+"]|\\"+ge+"(?!\\"+ve+"))*?)",de.rTag="(?:"+X+")",X=new RegExp("(?:"+e+X+"(\\/)?|\\"+ce+"(\\"+he+")?\\"+fe+"(?:(?:\\/(\\w+))\\s*|!--[\\s\\S]*?--))"+t,"g"),de.rTmpl=new RegExp("^\\s|\\s$|<.*>|([^\\\\]|^)[{}]|"+e+".*"+t),pe):le.delimiters}function p(e,t){t||e===!0||(t=e,e=void 0);var n,r,i,o,a=this,s=!t||"root"===t;if(e){if(o=t&&a.type===t&&a,!o)if(n=a.views,a._.useKey){for(r in n)if(o=t?n[r].get(e,t):n[r])break}else for(r=0,i=n.length;!o&&r<i;r++)o=t?n[r].get(e,t):n[r]}else if(s)o=a.root;else for(;a&&!o;)o=a.type===t?a:void 0,a=a.parent;return o}function c(){var e=this.get("item");return e?e.index:void 0}function f(){return this.index}function g(t,n,r){var i,o,a,s,d=this,u=!we&&void 0!==n,p=d.ctx;if(t in p||t in(p=ae)){if(a=p&&p[t],"tag"===t||"root"===t||"parentTags"===t||d._.it===t)return a}else p=void 0;if((!a||!ne(a)&&d.linked||d.tagCtx)&&(a&&a._cxp||(p!==ae&&(d=d.tagCtx?d:(d=d.scope||d,!d.isTop&&d.ctx.tag||d),p=d._ocps,a=p&&p[t]||a),a&&a._cxp||!r&&!u||(a=de._crcp(t,a,d,p))),s=a&&a._cxp)){if(u)return de._ucp(t,n,d,s);if(r)return o=a[1]?de._ceo(a[1].deps):[_e],o.unshift(a[0]),o._cxp=s,o;a=a[1]?s.tag&&s.tag.cvtArgs?s.tag.cvtArgs(!0,s.tagElse)[s.ind]:a[1](a[0].data,a[0],de):a[0]._ocp}return a&&ne(a)&&(i=function(){return a.apply(this&&this!==e?this:d,arguments)},l(i,a),i._vw=d),i||a}function v(e){return e&&(e.fn?e:this.getRsc("templates",e)||ie(e))}function h(e,t,n,r){var o,a,s,d,u="number"==typeof n&&t.tmpl.bnds[n-1],p=t.linkCtx;if(void 0===r&&u&&u._lr&&(r=""),void 0!==r?n=r={props:{},args:[r]}:u&&(n=u(t.data,t,de)),u=u._bd&&u,a=n.args[0],e||u){if(o=p&&p.tag,n.view=t,!o){if(o=l(new de._tg,{_:{bnd:u,unlinked:!0},inline:!p,tagName:":",convert:e,flow:!0,tagCtx:n}),s=n.args.length,s>1)for(d=o.bindTo=[];s--;)d.unshift(s);p&&(p.tag=o,o.linkCtx=p),n.ctx=Q(n.ctx,(p?p.view:t).ctx),i(o,n)}o._er=r&&a,o.ctx=n.ctx||o.ctx||{},n.ctx=void 0,a=o.cvtArgs()[0]}return a=u&&t._.onRender?t._.onRender(a,t,o):a,void 0!=a?a:""}function m(e,t){var n,r,i,o,a,s,d,l=this;if(l.tagName?(s=l,l=s.tagCtxs?s.tagCtxs[t||0]:s.tagCtx):s=l.tag,a=s.bindTo,o=l.args,(d=s.convert)&&""+d===d&&(d="true"===d?void 0:l.view.getRsc("converters",d)||I("Unknown converter: '"+d+"'")),e&&e.length)o=e;else if(d&&!e&&(o=o.slice()),a){for(i=[],n=a.length;n--;)r=a[n],i.unshift(w(l,r));e&&(o=i)}if(d)if(a=a||[0],n=a.length,d=d.apply(s,i||o),re(d)&&d.length===n||(d=[d],a=[0],n=1),e)o=d;else for(;n--;)r=a[n],+r===r&&(o[r]=d[n]);return o}function w(e,t){return e=e[+t===t?"args":"props"],e&&e[t]}function x(e){return this.cvtArgs(!0,e)}function _(e,t){var n,r,i=this;if(""+t===t){for(;void 0===n&&i;)r=i.tmpl&&i.tmpl[e],n=r&&r[t],i=i.parent;return n||ee[e][t]}}function b(e,t,n,r,o,a){function s(e){var t;(t=d[e])&&(d[e]=t=re(t)?t:[t],E!==t.length&&I(e+" length not same as bindTo "))}t=t||Y;var d,l,u,p,c,f,g,v,h,m,x,_,b,y,k,C,T,j,A,R,V,$,E,M=0,N="",P=t.linkCtx||0,O=t.ctx,U=n||t.tmpl,q="number"==typeof r&&t.tmpl.bnds[r-1];for("tag"===e._is?(d=e,e=d.tagName,r=d.tagCtxs,u=d.template):(l=t.getRsc("tags",e)||I("Unknown tag: {{"+e+"}} "),u=l.template),void 0===a&&q&&(q._lr=(l.lateRender||q._lr)&&"false"!==q._lr)&&(a=""),void 0!==a?(N+=a,r=a=[{props:{},args:[],params:{}}]):q&&(r=q(t.data,t,de)),g=r.length;M<g;M++)m=r[M],y=m.tmpl,(!P||!P.tag||M&&!P.tag.inline||d._er||y&&+y===y)&&(y&&U.tmpls&&(m.tmpl=m.content=U.tmpls[y-1]),m.index=M,m.render=S,m.view=t,m.ctx=Q(m.ctx,O)),(n=m.props.tmpl)&&(m.tmpl=t.getTmpl(n),m.content=m.content||m.tmpl),d||(d=new l._ctr,k=!!d.init,d.parent=f=O&&O.tag,d.tagCtxs=r,R=d.dataMap,P&&(d.inline=!1,P.tag=d,d.linkCtx=P),(d._.bnd=q||P.fn)?d._.arrVws={}:d.dataBoundOnly&&I(e+" must be data-bound:\n{^{"+e+"}}")),r=d.tagCtxs,R=d.dataMap,m.tag=d,R&&r&&(m.map=r[M].map),d.flow||(x=m.ctx=m.ctx||{},p=d.parents=x.parentTags=O&&Q(x.parentTags,O.parentTags)||{},f&&(p[f.tagName]=f),p[d.tagName]=x.tag=d);if(!(d._er=a)){for(i(d,r[0]),d.rendering={},M=0;M<g;M++){if(m=d.tagCtx=r[M],A=m.props,d.ctx=m.ctx,!M){if(k&&(d.init(m,P,d.ctx),k=void 0),m.args.length||d.argDefault===!1||(m.args=j=[m.view.data],m.params.args=["#data"]),b=d.bindTo,void 0!==b)for(b=d.bindTo=re(b)?b:[b],v=b.length;v--;)$=b[v],isNaN(parseInt($))||($=parseInt($)),b[v]=$;b=d.bindTo||[0],E=b.length,d._.bnd&&(s("linkedElement"),s("linkedCtxParam")),P&&(P.attr=d.attr=P.attr||d.attr),c=d.attr,d._.noVws=c&&c!==Pe}if(j=d.cvtArgs(void 0,M),d.linkedCtxParam)for(v=E;v--;)(_=d.linkedCtxParam[v])&&($=b[v],m.ctx[_]=de._cp(w(m,$),w(m.params,$),m.view,d._.bnd&&{tag:d,ind:v,tagElse:M}));(C=A.dataMap||R)&&(j.length||A.dataMap)&&(T=m.map,T&&T.src===j[0]&&!o||(T&&T.src&&T.unmap(),T=m.map=C.map(j[0],A,void 0,!d._.bnd)),j=[T.tgt]),h=void 0,d.render&&(h=d.render.apply(d,j),t.linked&&h&&!Me.test(h)&&(n={links:[]},n.render=n.fn=function(){return h},h=F(n,t.data,void 0,!0,t,void 0,void 0,d))),j.length||(j=[t]),void 0===h&&(V=j[0],d.contentCtx&&(V=d.contentCtx===!0?t:d.contentCtx(V)),h=m.render(V,!0)||(o?void 0:"")),N=N?N+(h||""):h}d.rendering=void 0}return d.tagCtx=r[0],d.ctx=d.tagCtx.ctx,d._.noVws&&d.inline&&(N="text"===c?oe.html(N):""),q&&t._.onRender?t._.onRender(N,t,d):N}function y(e,t,n,r,i,o,a,s){var d,l,u,p=this,f="array"===t;p.content=s,p.views=f?[]:{},p.data=r,p.tmpl=i,u=p._={key:0,useKey:f?0:1,id:""+Se++,onRender:a,bnds:{}},p.linked=!!a,p.type=t||"top",(p.parent=n)?(p.root=n.root||p,d=n.views,l=n._,p.isTop=l.scp,p.scope=(!e.tag||e.tag===n.ctx.tag)&&!p.isTop&&n.scope||p,l.useKey?(d[u.key="_"+l.useKey++]=p,p.index=qe,p.getIndex=c):d.length===(u.key=p.index=o)?d.push(p):d.splice(o,0,p),p.ctx=e||n.ctx):p.ctx=e||{}}function k(e){var t,n,r;for(t in Le)n=t+"s",e[n]&&(r=e[n],e[n]={},ee[n](r,e))}function C(e,t,n){function i(){var t=this;t._={unlinked:!0},t.inline=!0,t.tagName=e}var o,a,s,d=(t.bindTo,new de._tg);if(ne(t)?t={depends:t.depends,render:t}:""+t===t&&(t={template:t}),a=t.baseTag){t.flow=!!t.flow,t.baseTag=a=""+a===a?n&&n.tags[a]||se[a]:a,d=l(d,a);for(s in t)d[s]=r(a[s],t[s])}else d=l(d,t);return void 0!==(o=d.template)&&(d.template=""+o===o?ie[o]||ie(o):o),(i.prototype=d).constructor=d._ctr=i,n&&(d._parentTmpl=n),d}function T(e){return this.base.apply(this,e)}function j(e,n,r,i){function o(n){var o,s;if(""+n===n||n.nodeType>0&&(a=n)){if(!a)if(/^\.\/[^\\:*?"<>]*$/.test(n))(s=ie[e=e||n])?n=s:a=document.getElementById(n);else if(t.fn&&!de.rTmpl.test(n))try{a=t(n,document)[0]}catch(d){}a&&(i?n=a.innerHTML:(o=a.getAttribute(Oe),o&&(o!==Ue?(n=ie[o],delete ie[o]):t.fn&&(n=t.data(a)[Ue])),o&&n||(e=e||(t.fn?Ue:n),n=j(e,a.innerHTML,r,i)),n.tmplName=e=e||o,e!==Ue&&(ie[e]=n),a.setAttribute(Oe,e),t.fn&&t.data(a,Ue,n))),a=void 0}else n.fn||(n=void 0);return n}var a,s,d=n=n||"";if(de._html=oe.html,0===i&&(i=void 0,d=o(d)),i=i||(n.markup?n:{}),i.tmplName=e,r&&(i._parentTmpl=r),!d&&n.markup&&(d=o(n.markup))&&d.fn&&(d=d.markup),void 0!==d)return d.fn||n.fn?d.fn&&(s=d):(n=$(d,i),U(d.replace(Te,"\\$&"),n)),s||(s=l(function(){return s.render.apply(s,arguments)},n),k(s)),s}function A(e,t){return ne(e)?e.call(t):e}function R(e){for(var t=[],n=0,r=e.length;n<r;n++)t.push(e[n].unmap());return t}function V(e,n){function r(e){u.apply(this,e)}function i(){return new r(arguments)}function o(e,t){for(var n,r,i,o,a=0;a<w;a++)i=c[a],n=void 0,i+""!==i&&(n=i,i=n.getter),void 0===(o=e[i])&&n&&void 0!==(r=n.defaultVal)&&(o=A(r,e)),t(o,n&&p[n.type],i)}function a(t){t=t+""===t?JSON.parse(t):t;var n,r,i=0,a=t,l=[];if(re(t)){for(t=t||[],n=t.length;i<n;i++)l.push(this.map(t[i]));return l._is=e,l.unmap=d,l.merge=s,l}if(t){o(t,function(e,t){t&&(e=t.map(e)),l.push(e)}),a=this.apply(this,l);for(r in t)r===te||_[r]||(a[r]=t[r])}return a}function s(e){e=e+""===e?JSON.parse(e):e;var t,n,r,a,s,d,l,u,p,c=0,f=this;if(re(f)){for(l={},p=[],n=e.length,r=f.length;c<n;c++){for(u=e[c],d=!1,t=0;t<r&&!d;t++)l[t]||(s=f[t],g&&(l[t]=d=g+""===g?u[g]&&(_[g]?s[g]():s[g])===u[g]:g(s,u)));d?(s.merge(u),p.push(s)):p.push(i.map(u))}return void(x?x(f).refresh(p,!0):f.splice.apply(f,[0,f.length].concat(p)))}o(e,function(e,t,n){t?f[n]().merge(e):f[n](e)});for(a in e)a===te||_[a]||(f[a]=e[a])}function d(){var e,t,n,r,i=0,o=this;if(re(o))return R(o);for(e={};i<w;i++)t=c[i],n=void 0,t+""!==t&&(n=t,t=n.getter),r=o[t](),e[t]=n&&r&&p[n.type]?re(r)?R(r):r.unmap():r;for(t in o)"_is"===t||_[t]||t===te||"_"===t.charAt(0)&&_[t.slice(1)]||ne(o[t])||(e[t]=o[t]);return e}var l,u,p=this,c=n.getters,f=n.extend,g=n.id,v=t.extend({_is:e||"unnamed",unmap:d,merge:s},f),h="",m="",w=c?c.length:0,x=t.observable,_={};for(r.prototype=v,l=0;l<w;l++)!function(e){e=e.getter||e,_[e]=l+1;var t="_"+e;h+=(h?",":"")+e,m+="this."+t+" = "+e+";\n",v[e]=v[e]||function(n){return arguments.length?void(x?x(this).setProperty(e,n):this[t]=n):this[t]},x&&(v[e].set=v[e].set||function(e){this[t]=e})}(c[l]);return u=new Function(h,m.slice(0,-1)),u.prototype=v,v.constructor=u,i.map=a,i.getters=c,i.extend=f,i.id=g,i}function $(e,n){var r,i=ue._wm||{},o=l({tmpls:[],links:{},bnds:[],_is:"template",render:S},n);return o.markup=e,n.htmlTag||(r=Re.exec(e),o.htmlTag=r?r[1].toLowerCase():""),r=i[o.htmlTag],r&&r!==i.div&&(o.markup=t.trim(o.markup)),o}function E(e,t){function n(i,o,a){var s,d,l,u=de.onStore[e];if(i&&typeof i===Ie&&!i.nodeType&&!i.markup&&!i.getTgt&&!("viewModel"===e&&i.getters||i.extend)){for(d in i)n(d,i[d],o);return o||ee}return void 0===o&&(o=i,i=void 0),i&&""+i!==i&&(a=o,o=i,i=void 0),l=a?"viewModel"===e?a:a[r]=a[r]||{}:n,s=t.compile,null===o?i&&delete l[i]:(s&&(o=s.call(l,i,o,a,0)||{},o._is=e),i&&(l[i]=o)),u&&u(i,o,a,s),o}var r=e+"s";ee[r]=n}function M(e){pe[e]=function(t){return arguments.length?(le[e]=t,pe):le[e]}}function N(e){function t(t,n){this.tgt=e.getTgt(t,n)}return ne(e)&&(e={getTgt:e}),e.baseMap&&(e=l(l({},e.baseMap),e)),e.map=function(e,n){return new t(e,n)},e}function S(e,t,n,r,i,o){var a,s,d,l,u,p,c,f,g=r,v="";if(t===!0?(n=t,t=void 0):typeof t!==Ie&&(t=void 0),(d=this.tag)?(u=this,g=g||u.view,l=g.getTmpl(d.template||u.tmpl),arguments.length||(e=g)):l=this,l){if(!r&&e&&"view"===e._is&&(g=e),g&&e===g&&(e=g.data),p=!g,we=we||p,g||((t=t||{}).root=e),!we||ue.useViews||l.useViews||g&&g!==Y)v=F(l,e,t,n,g,i,o,d);else{if(g?(c=g.data,f=g.index,g.index=qe):(g=Y,c=g.data,g.data=e,g.ctx=t),re(e)&&!n)for(a=0,s=e.length;a<s;a++)g.index=a,g.data=e[a],v+=l.fn(e[a],g,de);else g.data=e,v+=l.fn(e,g,de);g.data=c,g.index=f}p&&(we=void 0)}return v}function F(e,t,n,r,i,o,a,s){function d(e){_=l({},n),_[x]=e}var u,p,c,f,g,v,h,m,w,x,_,b,k="";if(s&&(w=s.tagName,b=s.tagCtx,n=n?Q(n,s.ctx):s.ctx,e===i.content?h=e!==i.ctx._wrp?i.ctx._wrp:void 0:e!==b.content?e===s.template?(h=b.tmpl,n._wrp=b.content):h=b.content||i.content:h=i.content,b.props.link===!1&&(n=n||{},n.link=!1),(x=b.props.itemVar)&&("~"!==x.charAt(0)&&O("Use itemVar='~myItem'"),x=x.slice(1))),i&&(a=a||i._.onRender,n=Q(n,i.ctx)),o===!0&&(v=!0,o=0),a&&(n&&n.link===!1||s&&s._.noVws)&&(a=void 0),m=a,a===!0&&(m=void 0,a=i._.onRender),n=e.helpers?Q(e.helpers,n):n,_=n,re(t)&&!r)for(c=v?i:void 0!==o&&i||new y(n,"array",i,t,e,o,a,h),i&&i._.useKey&&(c._.bnd=!s||s._.bnd&&s),u=0,p=t.length;u<p;u++)x&&d(t[u]),f=new y(_,"item",c,t[u],e,(o||0)+u,a,c.content),f._.it=x,g=e.fn(t[u],f,de),k+=c._.onRender?c._.onRender(g,f):g;else x&&d(t),c=v?i:new y(_,w||"data",i,t,e,o,a,h),c._.it=x,k+=e.fn(t,c,de);return s&&(c.tag=s,c.tagElse=b.index,b.contentView=c),m?m(k,c):k}function P(e,t,n){var r=void 0!==n?ne(n)?n.call(t.data,e,t):n||"":"{Error: "+(e.message||e)+"}";return le.onError&&void 0!==(n=le.onError.call(t.data,e,n&&r,t))&&(r=n),t&&!t.linkCtx?oe.html(r):r}function I(e){throw new de.Err(e)}function O(e){I("Syntax error\n"+e)}function U(e,t,n,r,i){function o(t){t-=v,t&&m.push(e.substr(v,t).replace(ke,"\\n"))}function a(t,n){t&&(t+="}}",O((n?"{{"+n+"}} block has {{/"+t+" without {{"+t:"Unmatched or missing {{/"+t)+", in template:\n"+e))}function s(s,d,l,c,g,x,_,b,y,k,C,T){(_&&d||y&&!l||b&&":"===b.slice(-1)||k)&&O(s),x&&(g=":",c=Pe),y=y||n&&!i;var j,A=(d||n)&&[[]],R="",V="",$="",E="",M="",N="",S="",F="",P=!y&&!g;l=l||(b=b||"#data",g),o(T),v=T+s.length,_?f&&m.push(["*","\n"+b.replace(/^:/,"ret+= ").replace(Ce,"$1")+";\n"]):l?("else"===l&&(Ae.test(b)&&O('for "{{else if expr}}" use "{{else expr}}"'),A=w[8]&&[[]],w[9]=e.substring(w[9],T),w=h.pop(),m=w[2],P=!0),b&&B(b.replace(ke," "),A,t).replace(je,function(e,t,n,r,i,o,a,s){return r="'"+i+"':",a?(V+=o+",",E+="'"+s+"',"):n?($+=r+"j._cp("+o+',"'+s+'",view),',N+=r+"'"+s+"',"):t?S+=o:("trigger"===i&&(F+=o),"lateRender"===i&&(j=s),R+=r+o+",",M+=r+"'"+s+"',",p=p||Ee.test(i)),""}).slice(0,-1),A&&A[0]&&A.pop(),u=[l,c||!!r||p||"",P&&[],J(E||(":"===l?"'#data',":""),M,N),J(V||(":"===l?"data,":""),R,$),S,F,j,A||0],m.push(u),P&&(h.push(w),w=u,w[9]=v)):C&&(a(C!==w[0]&&"else"!==w[0]&&C,w[0]),w[9]=e.substring(w[9],T),w=h.pop()),a(!w&&C),m=w[2]}var d,l,u,p,c,f=le.allowCode||t&&t.allowCode||pe.allowCode===!0,g=[],v=0,h=[],m=g,w=[,,g];if(f&&t._is&&(t.allowCode=f),n&&(void 0!==r&&(e=e.slice(0,-r.length-2)+ge),e=ce+e+ve),a(h[0]&&h[0][2].pop()[0]),e.replace(X,s),o(e.length),(v=g[g.length-1])&&a(""+v!==v&&+v[9]===v[9]&&v[0]),n){for(l=L(g,e,n),c=[],d=g.length;d--;)c.unshift(g[d][8]);q(l,c)}else l=L(g,t);return l}function q(e,t){var n,r,i=0,o=t.length;for(e.deps=[],e.paths=[];i<o;i++){e.paths.push(r=t[i]);for(n in r)"_jsvto"!==n&&r.hasOwnProperty(n)&&r[n].length&&!r[n].skp&&(e.deps=e.deps.concat(r[n]))}}function J(e,t,n){return[e.slice(0,-1),t.slice(0,-1),n.slice(0,-1)]}function K(e,t){return"\n\t"+(t?t+":{":"")+"args:["+e[0]+"]"+(e[1]||!t?",\n\tprops:{"+e[1]+"}":"")+(e[2]?",\n\tctx:{"+e[2]+"}":"")}function B(e,t,n){function r(r,m,w,x,_,b,y,k,C,T,j,A,R,V,$,E,M,N,S,F){function P(e,n,r,a,s,d,p,c){var f="."===r;if(r&&(_=_.slice(n.length),/^\.?constructor$/.test(c||_)&&O(e),f||(e=(a?'view.ctxPrm("'+a+'")':s?"view":"data")+(c?(d?"."+d:a?"":s?"":"."+r)+(p||""):(c=a?"":s?d||"":r,"")),e+=c?"."+c:"",e=n+("view.data"===e.slice(0,9)?e.slice(5):e)),l)){if(J="linkTo"===i?o=t._jsvto=t._jsvto||[]:u.bd,K=f&&J[J.length-1]){if(K._cpfn){for(;K.sb;)K=K.sb;K.bnd&&(_="^"+_.slice(1)),K.sb=_,K.bnd=K.bnd||"^"===_.charAt(0)}}else J.push(_);h[g]=S+(f?1:0)}return e}x&&!k&&(_=x+_),b=b||"",w=w||m||A,_=_||C,T=T||M||"";var I,q,J,K,B,L=")";if("["===T&&(T="[j._sq(",L=")]"),!y||d||s){if(l&&E&&!d&&!s&&(!i||a||o)&&(I=h[g-1],F.length-1>S-(I||0))){if(I=F.slice(I,S+r.length),q!==!0)if(J=o||p[g-1].bd,K=J[J.length-1],K&&K.prm){for(;K.sb&&K.sb.prm;)K=K.sb;B=K.sb={path:K.sb,bnd:K.bnd}}else J.push(B={path:J.pop()});E=fe+":"+I+" onerror=''"+ge,q=f[E],q||(f[E]=!0,f[E]=q=U(E,n,!0)),q!==!0&&B&&(B._cpfn=q,B.prm=u.bd,B.bnd=B.bnd||B.path&&B.path.indexOf("^")>=0)}return d?(d=!R,d?r:A+'"'):s?(s=!V,s?r:A+'"'):(w?(h[g]=S++,u=p[++g]={bd:[]},w):"")+(N?g?"":(c=F.slice(c,S),(i?(i=a=o=!1,"\b"):"\b,")+c+(c=S+r.length,l&&t.push(u.bd=[]),"\b")):k?(g&&O(e),l&&t.pop(),i=_,a=x,c=S+r.length,l&&(l=u.bd=t[i]=[],l.skp=!x),_+":"):_?_.split("^").join(".").replace(be,P)+(T?(u=p[++g]={bd:[]},v[g]=L,T):b):b?b:$?($=v[g]||$,v[g]=!1,u=p[--g],$+(T?(u=p[++g],v[g]=L,T):"")):j?(v[g]||O(e),","):m?"":(d=R,s=V,'"'))}O(e)}var i,o,a,s,d,l=t&&t[0],u={bd:l},p={0:u},c=0,f=(n?n.links:l&&(l.links=l.links||{}))||Y.tmpl.links,g=0,v={},h={},m=(e+(n?" ":"")).replace(ye,r);return!g&&m||O(e)}function L(e,t,n){var r,i,o,a,s,d,l,u,p,c,f,g,v,h,m,w,x,_,b,y,k,C,T,j,A,R,V,E,M,N,S,F=0,P=ue.useViews||t.useViews||t.tags||t.templates||t.helpers||t.converters,I="",U={},J=e.length;for(""+t===t?(_=n?'data-link="'+t.replace(ke," ").slice(1,-1)+'"':t,t=0):(_=t.tmplName||"unnamed",t.allowCode&&(U.allowCode=!0),t.debug&&(U.debug=!0),f=t.bnds,x=t.tmpls),r=0;r<J;r++)if(i=e[r],""+i===i)I+='\n+"'+i+'"';else if(o=i[0],"*"===o)I+=";\n"+i[1]+"\nret=ret";else{if(a=i[1],k=!n&&i[2],s=K(i[3],"params")+"},"+K(v=i[4]),N=i[6],S=i[7],C=i[9]&&i[9].replace(Ce,"$1"),(A="else"===o)?g&&g.push(i[8]):(E=i[5]||le.debugMode!==!1&&"undefined",f&&(g=i[8])&&(g=[g],F=f.push(1))),P=P||v[1]||v[2]||g||/view.(?!index)/.test(v[0]),(R=":"===o)?a&&(o=a===Pe?">":a+o):(k&&(b=$(C,U),b.tmplName=_+"/"+o,b.useViews=b.useViews||P,L(k,b),P=b.useViews,x.push(b)),A||(y=o,P=P||o&&(!se[o]||!se[o].flow),j=I,I=""),T=e[r+1],T=T&&"else"===T[0]),M=E?";\ntry{\nret+=":"\n+",h="",m="",R&&(g||N||a&&a!==Pe||S)){if(V=new Function("data,view,j,u","// "+_+" "+ ++F+" "+o+"\nreturn {"+s+"};"),V._er=E,V._tag=o,V._bd=!!g,V._lr=S,n)return V;q(V,g),w='c("'+a+'",view,',c=!0,h=w+F+",",m=")"}if(I+=R?(n?(E?"try{\n":"")+"return ":M)+(c?(c=void 0,P=p=!0,w+(V?(f[F-1]=V,F):"{"+s+"}")+")"):">"===o?(l=!0,"h("+v[0]+")"):(u=!0,"((v="+v[0]+")!=null?v:"+(n?"null)":'"")'))):(d=!0,"\n{view:view,tmpl:"+(k?x.length:"0")+","+s+"},"),y&&!T){if(I="["+I.slice(0,-1)+"]",w='t("'+y+'",view,this,',n||g){if(I=new Function("data,view,j,u"," // "+_+" "+F+" "+y+"\nreturn "+I+";"),I._er=E,I._tag=y,g&&q(f[F-1]=I,g),I._lr=S,n)return I;h=w+F+",undefined,",m=")"}I=j+M+w+(I.deps&&F||I)+")",g=0,y=0}E&&!T&&(P=!0,I+=";\n}catch(e){ret"+(n?"urn ":"+=")+h+"j._err(e,view,"+E+")"+m+";}"+(n?"":"ret=ret"))}I="// "+_+"\nvar v"+(d?",t=j._tag":"")+(p?",c=j._cnvt":"")+(l?",h=j._html":"")+(n?";\n":',ret=""\n')+(U.debug?"debugger;":"")+I+(n?"\n":";\nreturn ret;");try{I=new Function("data,view,j,u",I)}catch(B){O("Compiled template code:\n\n"+I+'\n: "'+(B.message||B)+'"')}return t&&(t.fn=I,t.useViews=!!P),I}function Q(e,t){return e&&e!==t?t?l(l({},t),e):e:t&&l({},t)}function H(e){return Fe[e]||(Fe[e]="&#"+e.charCodeAt(0)+";")}function D(e){var t,n,r=[];if(typeof e===Ie)for(t in e)n=e[t],t!==te&&e.hasOwnProperty(t)&&!ne(n)&&r.push({key:t,prop:n});return r}function Z(e,n,r){var i=this.jquery&&(this[0]||I("Unknown template")),o=i.getAttribute(Oe);return S.call(o&&t.data(i)[Ue]||ie(i),e,n,r)}function z(e){return void 0!=e?$e.test(e)&&(""+e).replace(Ne,H)||e:""}var G=t===!1;t=t&&t.fn?t:e.jQuery;var W,X,Y,ee,te,ne,re,ie,oe,ae,se,de,le,ue,pe,ce,fe,ge,ve,he,me,we,xe="v0.9.90",_e="_ocp",be=/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,ye=/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*[.^]|\s*$|[^([])|[)\]])([([]?))|(\s+)/g,ke=/[ \t]*(\r\n|\n|\r)/g,Ce=/\\(['"])/g,Te=/['"\\]/g,je=/(?:\x08|^)(onerror:)?(?:(~?)(([\w$_\.]+):)?([^\x08]+))\x08(,)?([^\x08]+)/gi,Ae=/^if\s/,Re=/<(\w+)[>\s]/,Ve=/[\x00`><"'&=]/g,$e=/[\x00`><\"'&=]/,Ee=/^on[A-Z]|^convert(Back)?$/,Me=/^\#\d+_`[\s\S]*\/\d+_`$/,Ne=Ve,Se=0,Fe={"&":"&amp;","<":"&lt;",">":"&gt;","\0":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;","=":"&#61;"},Pe="html",Ie="object",Oe="data-jsv-tmpl",Ue="jsvTmpl",qe="For #index in nested block use #getIndex().",Je={},Ke=e.jsrender,Be=Ke&&t&&!t.render,Le={template:{compile:j},tag:{compile:C},viewModel:{compile:V},helper:{},converter:{}};if(ee={jsviews:xe,sub:{View:y,Err:d,tmplFn:U,parse:B,extend:l,extendCtx:Q,syntaxErr:O,onStore:{template:function(e,t){null===t?delete Je[e]:Je[e]=t}},addSetting:M,settings:{allowCode:!1},advSet:a,_ths:i,_gm:r,_tg:function(){},_cnvt:h,_tag:b,_er:I,_err:P,_cp:o,_sq:function(e){return"constructor"===e&&O(""),e}},settings:{delimiters:u,advanced:function(e){return e?(l(ue,e),de.advSet(),pe):ue}},map:N},(d.prototype=new Error).constructor=d,c.depends=function(){return[this.get("item"),"index"]},f.depends="index",y.prototype={get:p,getIndex:f,getRsc:_,getTmpl:v,ctxPrm:g,_is:"view"},de=ee.sub,pe=ee.settings,!(Ke||t&&t.render)){for(W in Le)E(W,Le[W]);oe=ee.converters,ae=ee.helpers,se=ee.tags,de._tg.prototype={baseApply:T,cvtArgs:m,bndArgs:x,ctxPrm:g},Y=de.topView=new y,t?(t.fn.render=Z,te=t.expando,t.observable&&(l(de,t.views.sub),ee.map=t.views.map)):(t={},G&&(e.jsrender=t),t.renderFile=t.__express=t.compile=function(){throw"Node.js: use npm jsrender, or jsrender-node.js"},t.isFunction=function(e){return"function"==typeof e},t.isArray=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},de._jq=function(e){e!==t&&(l(e,t),t=e,t.fn.render=Z,delete t.jsrender,te=t.expando)},t.jsrender=xe),le=de.settings,le.allowCode=!1,ne=t.isFunction,t.render=Je,t.views=ee,t.templates=ie=ee.templates;for(me in le)M(me);(pe.debugMode=function(e){return void 0===e?le.debugMode:(le.debugMode=e,le.onError=e+""===e?new Function("","return '"+e+"';"):ne(e)?e:void 0,pe)})(!1),ue=le.advanced={useViews:!1,_jsv:!1},se({"if":{render:function(e){var t=this,n=t.tagCtx,r=t.rendering.done||!e&&(arguments.length||!n.index)?"":(t.rendering.done=!0,void(t.selected=n.index));return r},contentCtx:!0,flow:!0},"for":{render:function(e){var t,n=!arguments.length,r=this,i=r.tagCtx,o="",a=0;return r.rendering.done||(t=n?i.view.data:e,void 0!==t&&(o+=i.render(t,n),a+=re(t)?t.length:1),(r.rendering.done=a)&&(r.selected=i.index)),o},flow:!0},props:{baseTag:"for",dataMap:N(D),flow:!0},include:{flow:!0},"*":{render:o,flow:!0},":*":{render:o,flow:!0},dbg:ae.dbg=oe.dbg=s}),oe({html:z,attr:z,url:function(e){return void 0!=e?encodeURI(""+e):null===e?e:""}})}return le=de.settings,re=(t||Ke).isArray,pe.delimiters("{{","}}","^"),Be&&Ke.views.sub._jq(t),t||Ke},window);

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function t(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(e){}}function r(n,o){var i=u.raw?n:t(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(t,c,s){if(arguments.length>1&&!e.isFunction(c)){if("number"==typeof(s=e.extend({},u.defaults,s)).expires){var d=s.expires,f=s.expires=new Date;f.setMilliseconds(f.getMilliseconds()+864e5*d)}return document.cookie=[n(t),"=",i(c),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var a=t?void 0:{},p=document.cookie?document.cookie.split("; "):[],l=0,m=p.length;l<m;l++){var x=p[l].split("="),g=o(x.shift()),j=x.join("=");if(t===g){a=r(j,c);break}t||void 0===(j=r(j))||(a[g]=j)}return a};u.defaults={},e.removeCookie=function(n,o){return e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n)}});

/*!
 * Fade in a color
 * https://stackoverflow.com/a/13106698
 */
jQuery.fn.highlight = function () {
  $(this).each(function () {
    var el = $(this);
    $("<div/>")
    .width(el.outerWidth())
    .height(el.outerHeight())
    .css({
      "position": "absolute",
      "left": el.offset().left,
      "top": el.offset().top,
      "background-color": "#ffff99",
      "opacity": ".7",
      "z-index": "9999999"
    }).appendTo('body').fadeOut(1000).queue(function () { $(this).remove(); });
  });
}

// Main code

// https://stackoverflow.com/a/901144
function getQueryString(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setUsername() {
  var username = getQueryString('username');
  var $displayUsername = $('.display-username');

  if (!username) {
    return false;
  }

  $displayUsername.text(username);

  return username;
}

// Custom date formatter for jsRender
$.views.converters({
  shortDate: function (value) {
    return moment(value).format('MMM Do YYYY');
  }
});

var signup = function () {
  var $signup = $('#signup');

  $signup.on('submit', function(event) {
    event.preventDefault();

    var url = $signup.attr('action');
    var redirect = $('#signup-link').data('next');
    var $email = $('#email');
    var $username = $('#username');
    var $password = $('#password');
    var $error = $('#form_error');

    var data = {
      'email': $email.val(),
      'username': $username.val(),
      'password': $password.val()
    }

    return $.ajax({
      type: 'post',
      url: url,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      processData: false,
      success: function(response, status, xhr) {
        $error.hide();
        window.location.replace(redirect);
      },
      error: function(response, status, xhr) {
        $error.text(response.responseText);
        $error.show();
      }
    });
  });
};

var login = function () {
  var $login = $('#login');

  $login.on('submit', function(event) {
    event.preventDefault();

    var url = $login.attr('action');
    var redirect = $('#login-link').data('next');
    var $identity = $('#identity');
    var $password = $('#password');
    var $error = $('#form_error');

    var data = {
      'identity': $identity.val(),
      'password': $password.val()
    }

    return $.ajax({
      type: 'post',
      url: url,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      processData: false,
      success: function(response, status, xhr) {
        window.location.replace(redirect);
      },
      error: function(response, status, xhr) {
        $error.text(response.responseText);
        $error.show();
      }
    });
  });
};

var logout = function () {
  var $logoutLink = $('#logout-link');

  $logoutLink.on('click', function(event) {
    event.preventDefault();

    var url = $logoutLink.attr('href');
    var redirect = $logoutLink.data('next');

    return $.ajax({
      type: 'delete',
      url: url,
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-CSRF-TOKEN', $.cookie('csrf_access_token'));
      },
      success: function(response, status, xhr) {
        window.location.replace(redirect);
      }
    });
  });
}

var navstate = function () {
  var cookie_name = 'csrf_access_token';
  var $noauth = $('.nav-noauth');
  var $withauth = $('.nav-withauth');

  if ($.cookie(cookie_name)) {
    $noauth.hide();
    $withauth.show();
  } else {
    $withauth.hide();
    $noauth.show();
  }

  return true;
};

var facts = function () {
  var $factsTemplate = $('#facts-index-tpl');
  var $factsTemplateResult = $('#facts-index-results');
  var url = $('#facts-index-results').data('url');

  if (!$factsTemplate.length) {
    return false;
  }

  return $.ajax({
    type: 'get',
    url: url + '?username=' + setUsername(),
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    success: function(response, status, xhr) {
      var htmlOutput = $factsTemplate.render(response);
      $factsTemplateResult.html(htmlOutput);
    },
    error: function(response, status, xhr) {
      var htmlOutput = $factsTemplate.render(response);
      $factsTemplateResult.html(htmlOutput);
    }
  });
}

var addFact = function () {
  var $addFact = $('#add_fact');

  $addFact.on('submit', function(event){
    event.preventDefault();

    var url = $addFact.attr('action');
    var $fact = $('#fact-message');
    var $factsTemplate = $('#facts-index-tpl');
    var $factsTemplateResult = $('#facts-index-results');
    var $error = $('#form_error');

    var data = {
      'message': $fact.val()
    }

    return $.ajax({
      type: 'post',
      url: url,
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      processData: false,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-CSRF-TOKEN', $.cookie('csrf_access_token'));
      },
      success: function(response, status, xhr) {
        var htmlOutput = $factsTemplate.render(response);
        $factsTemplateResult.prepend(htmlOutput);
      },
      error: function(response, status, xhr) {
        $error.text(response.responseText);
        $error.show();
      }
    });
  });
};

var editFact = function () {
  $(document).on('click', '.fact-edit-btn-from-tpl', function (event) {
    var $factModal = $('#fact-edit');
    var $factMessage = $('#fact-edit-message');
    var factId = $(this).data('id');
    var cancelButton = '#fact-edit-btn-cancel-from-modal';
    var editButton = '#fact-edit-btn-from-modal';
    var factItemSelector = '#fact-message-id-' + factId;
    var $factItem = $(factItemSelector);
    var $error = $('#form_error_modal');

    if (!$factMessage.length) {
      return false;
    }

    event.preventDefault();

    // Without this, we would get the "double edit" bug where if you hit cancel,
    // then it will edit both the previously cancelled item and the current one
    // because the click event would be attached to both modals.
    $factModal.unbind();

    $factMessage.val($(factItemSelector + '> .well').html().trim());

    $factModal.modal({}).one('click', editButton, function () {
      // Remove the 0/ (last 2 characters) from the URL.
      // This is because 0/ is hard coded in the facts index.html.
      var url = $(editButton).data('url').slice(0, -2);

      var data = {
        'message': $factMessage.val()
      }

      return $.ajax({
        type: 'patch',
        url: url + factId + '/',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(data),
        processData: false,
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRF-TOKEN', $.cookie('csrf_access_token'));
        },
        success: function(response, status, xhr) {
          // A "hack" to ensure the state is updated everywhere without having
          // to individually update multiple areas of the page.
          window.location.replace(window.location);
        },
        error: function(response, status, xhr) {
          $error.text(response.responseText);
          $error.show();
        }
      });
    });
  });
};

var deleteFact = function () {
  $(document).on('click', '.fact-delete-btn-from-tpl', function (event) {
    var $factModal = $('#fact-delete');
    var $factMessage = $('#fact-delete-modal-body');
    var factId = $(this).data('id');
    var cancelButton = '#fact-delete-btn-cancel-from-modal';
    var deleteButton = '#fact-delete-btn-from-modal';
    var factItemSelector = '#fact-message-id-' + factId;
    var $factItem = $(factItemSelector);

    if (!$factMessage.length) {
      return false;
    }

    event.preventDefault();

    // Without this, we would get the same bug as the edit fact function.
    $factModal.unbind();

    $factMessage.html($(factItemSelector + '> .well').html());

    $factModal.modal({}).one('click', deleteButton, function () {
      // Remove the 0/ (last 2 characters) from the URL.
      var url = $(deleteButton).data('url').slice(0, -2);

      return $.ajax({
        type: 'delete',
        url: url + factId + '/',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-CSRF-TOKEN', $.cookie('csrf_access_token'));
        },
        success: function(response, status, xhr) {
          $factModal.modal('hide');
          $factItem.remove();
        }
      });
    });
  });
};

var community = function () {
  var $communityTemplate = $('#community-index-tpl');
  var $communityTemplateResult = $('#community-index-results');
  var url = $('#community-index-results').data('url');

  if (!$communityTemplate.length) {
    return false;
  }

  return $.ajax({
    type: 'get',
    url: url,
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    success: function(response, status, xhr) {
      var htmlOutput = $communityTemplate.render(response);
      $communityTemplateResult.html(htmlOutput);
    },
    error: function(response, status, xhr) {
      var htmlOutput = $communityTemplate.render(response);
      $communityTemplateResult.html(htmlOutput);
    }
  });
}

var latestCommunityFacts = function () {
  var $latestFactsTemplate = $('#facts-latest-tpl');
  var $latestFactsTemplateResult = $('#facts-latest-results');
  var url = $('#facts-latest-results').data('url');

  if (!$latestFactsTemplate.length) {
    return false;
  }

  return $.ajax({
    type: 'get',
    url: url,
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    success: function(response, status, xhr) {
      var htmlOutput = $latestFactsTemplate.render(response);
      $latestFactsTemplateResult.html(htmlOutput);
    },
    error: function(response, status, xhr) {
      var htmlOutput = $latestFactsTemplate.render(response);
      $latestFactsTemplateResult.html(htmlOutput);
    }
  });
}

var configurePusher = function () {
  var $scriptPusher = $('#script-pusher');
  var key = $scriptPusher.data('key');
  var auth_endpoint = $scriptPusher.data('auth-endpoint');
  var cluster = $scriptPusher.data('cluster');
  var encrypted = $scriptPusher.data('encrypted');

  // Enable pusher logging for debugging - don't include this in production!
  Pusher.logToConsole = true;

  var pusher = new Pusher(key, {
    authEndpoint: auth_endpoint,
    auth: {
      headers: {
        'X-CSRF-TOKEN': $.cookie('csrf_access_token')
      }
    },
    cluster: cluster,
    encrypted: encrypted
  });

  return pusher;
};

var pusherFactBot = function (channel, event) {
  var $factBotMessage = $('#factbot-message');

  if (!$factBotMessage.length) {
    return false;
  }

  channel.bind(event, function (data) {
    $factBotMessage.text(data.message);
  });
};

var pusherCommunityFacts = function (channel, event) {
  var $latestFactsTemplate = $('#facts-latest-tpl');

  if (!$latestFactsTemplate.length) {
    return false;
  }

  channel.bind(event, function (data) {
    var $latestFactsTemplateResult = $('#facts-latest-results');
    var htmlOutput = $latestFactsTemplate.render({'data': data});
    $latestFactsTemplateResult.prepend(htmlOutput);

    var maxFactsLength = 5;
    var latestFactsLength = $latestFactsTemplateResult.children().length;

    if (latestFactsLength > maxFactsLength) {
      $latestFactsTemplateResult.children().last().remove();
    }

    // Highlight effect on the table row.
    var $factsPosted = $('#' + data.username + '-facts-posted');
    var $factsPostedHighlight = $('#' + data.username + '-facts-posted-row');

    if (!$factsPosted.length) {
      return false;
    }

    var factsPostedCount = parseInt($factsPosted.text());
    $factsPosted.text(factsPostedCount + 1);
    $factsPostedHighlight.highlight();
  });
};

var pusherUpdateOnlinePresence = function (data) {
  $presenceOnline = $('#presence-online');
  $presenceOnlineCount = $('#presence-online-count');
  $presenceOnlineCount.text(data.count);

  var onlineUsers = data.members;

  // Clear the list of users before building up the new list.
  $presenceOnline.empty();

  for(var user in onlineUsers) {
    var li = '<li id="presence-user-' + user + '">' + user + '</li>';
    $presenceOnline.append(li);
  }
};

var pusherOnline = function (channel) {
  $presenceOnline = $('#presence-online');

  if (!$presenceOnline.length) {
    return false;
  }

  channel.bind('pusher:subscription_succeeded', function(data) {
    pusherUpdateOnlinePresence(channel.members);
  });

  channel.bind('pusher:member_added', function(data) {
    pusherUpdateOnlinePresence(channel.members);
  });

  channel.bind('pusher:member_removed', function(data) {
    pusherUpdateOnlinePresence(channel.members);
  });
};

// Initialize everything when the DOM is ready.
$(document).ready(function() {
  navstate();
  setUsername();

  signup();
  login();
  logout();

  pusher = configurePusher();

  var publicFacts = pusher.subscribe('public-facts');
  var privateFacts = pusher.subscribe('private-facts');
  var presenceOnline = pusher.subscribe('presence-online');

  pusherFactBot(publicFacts, 'new-fact');
  pusherCommunityFacts(privateFacts, 'new-fact');
  pusherOnline(presenceOnline);

  facts();
  addFact();
  editFact();
  deleteFact();

  community();
  latestCommunityFacts();
});
