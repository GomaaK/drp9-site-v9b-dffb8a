(()=>{function wr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Xm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ho={duration:.5,overwrite:!1,delay:0},td,wn,kt,Li=1e8,Rt=1/Li,Yf=Math.PI*2,yy=Yf/4,vy=0,qm=Math.sqrt,Sy=Math.cos,My=Math.sin,un=function(e){return typeof e=="string"},Jt=function(e){return typeof e=="function"},Ar=function(e){return typeof e=="number"},Vc=function(e){return typeof e>"u"},or=function(e){return typeof e=="object"},ci=function(e){return e!==!1},nd=function(){return typeof window<"u"},Ic=function(e){return Jt(e)||un(e)},Ym=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fn=Array.isArray,by=/random\([^)]+\)/g,Ty=/,\s*/g,Fm=/(?:-?\.?\d|\.)+/gi,id=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,zf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rd=/[+-]=-?[.\d]+/,wy=/[^,'"\[\]\s]+/gi,Ey=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,sr,Zf,sd,yi={},Uc={},Zm,Jm=function(e){return(Uc=ba(e,yi))&&Bn},Hc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Wo=function(e,t){return!t&&console.warn(e)},$m=function(e,t){return e&&(yi[e]=t)&&Uc&&(Uc[e]=t)||yi},Xo=function(){return 0},Ay={suppressEvents:!0,isStart:!0,kill:!1},Lc={suppressEvents:!0,kill:!1},Cy={suppressEvents:!0},ad={},ns=[],Jf={},Km,oi={},Gf={},Bm=30,Dc=[],od="",ld=function(e){var t=e[0],n,i;if(or(t)||Jt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Dc.length;i--&&!Dc[i].targetTest(t););n=Dc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new fd(e[i],n)))||e.splice(i,1);return e},is=function(e){return e._gsap||ld(Di(e))[0]._gsap},cd=function(e,t,n){return(n=e[t])&&Jt(n)?e[t]():Vc(n)&&e.getAttribute&&e.getAttribute(t)||n},Jn=function(e,t){return(e=e.split(",")).forEach(t)||e},$t=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},ks=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ry=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Oc=function(){var e=ns.length,t=ns.slice(0),n,i;for(Jf={},ns.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ud=function(e){return!!(e._initted||e._startAt||e.add)},Qm=function(e,t,n,i){ns.length&&!wn&&Oc(),e.render(t,n,i||!!(wn&&t<0&&ud(e))),ns.length&&!wn&&Oc()},jm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(wy).length<2?t:un(e)?e.trim():e},eg=function(e){return e},vi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Py=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ba=function(e,t){for(var n in t)e[n]=t[n];return e},km=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=or(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Fc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},zo=function(e){var t=e.parent||Wt,n=e.keyframes?Py(Fn(e.keyframes)):vi;if(ci(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Iy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},tg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Wc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},rs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ly=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},$f=function(e,t,n,i){return e._startAt&&(wn?e._startAt.revert(Lc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Dy=function r(e){return!e||e._ts&&r(e.parent)},zm=function(e){return e._repeat?Ta(e._tTime,e=e.duration()+e._rDelay)*e:0},Ta=function(e,t){var n=Math.floor(e=Ht(e/t));return e&&n===e?n-1:n},Bc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Xc=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||Rt)||0))},qc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Xc(e),n._dirty||Us(n,e)),e},ng=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Bc(e.rawTime(),t),(!t._dur||Jo(0,t.totalDuration(),n)-t._tTime>Rt)&&t.render(n,!0)),Us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Rt}},ar=function(e,t,n,i){return t.parent&&rs(t),t._start=Ht((Ar(n)?n:!n&&kc(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Wt?Ii(e,n,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),tg(e,t,"_first","_last",e._sort?"_start":0),kc(t)||(e._recent=t),i||ng(e,t),e._ts<0&&qc(e,e._tTime),e},ig=function(e,t){return(yi.ScrollTrigger||Hc("scrollTrigger",t))&&yi.ScrollTrigger.create(t,e)},rg=function(e,t,n,i,s){if(md(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!wn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Km!==li.frame)return ns.push(e),e._lazy=[s,i],1},Ny=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},kc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Uy=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Ny(e)&&!(!e._initted&&kc(e))||(e._ts<0||e._dp._ts<0)&&!kc(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Jo(0,e._tDur,t),u=Ta(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ta(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||wn||i||e._zTime===Rt||!t&&e._zTime){if(!e._initted&&rg(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Rt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&$f(e,t,n,!0),e._onUpdate&&!n&&xi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&xi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&rs(e,1),!n&&!wn&&(xi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Oy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},wa=function(e,t,n,i){var s=e._repeat,a=Ht(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ht(a*(s+1)+e._rDelay*s):a,o>0&&!i&&qc(e,e._tTime=e._tDur*o),e.parent&&Xc(e),n||Us(e.parent,e),e},Gm=function(e){return e instanceof On?Us(e):wa(e,e._dur)},Fy={_start:0,endTime:Xo,totalDuration:Xo},Ii=function r(e,t,n){var i=e.labels,s=e._recent||Fy,a=e.duration()>=Li?s.endTime(!1):e._dur,o,l,c;return un(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Fn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Go=function(e,t,n){var i=Ar(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ci(l.vars.inherit)&&l.parent;a.immediateRender=ci(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Qt(t[0],a,t[s+1])},ss=function(e,t){return e||e===0?t(e):t},Jo=function(e,t,n){return n<e?e:n>t?t:n},En=function(e,t){return!un(e)||!(t=Ey.exec(e))?"":t[1]},By=function(e,t,n){return ss(n,function(i){return Jo(e,t,i)})},Kf=[].slice,sg=function(e,t){return e&&or(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&or(e[0]))&&!e.nodeType&&e!==sr},ky=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return un(i)&&!t||sg(i,1)?(s=n).push.apply(s,Di(i)):n.push(i)})||n},Di=function(e,t,n){return kt&&!t&&kt.selector?kt.selector(e):un(e)&&!n&&(Zf||!Ea())?Kf.call((t||sd).querySelectorAll(e),0):Fn(e)?ky(e,n):sg(e)?Kf.call(e,0):e?[e]:[]},Qf=function(e){return e=Di(e)[0]||Wo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Di(t,n.querySelectorAll?n:n===e?Wo("Invalid scope")||sd.createElement("div"):e)}},ag=function(e){return e.sort(function(){return .5-Math.random()})},og=function(e){if(Jt(e))return e;var t=or(e)?e:{each:e},n=Os(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return un(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,g){var p=(g||t).length,m=a[p],_,v,M,y,b,T,x,S,L;if(!m){if(L=t.grid==="auto"?0:(t.grid||[1,Li])[1],!L){for(x=-Li;x<(x=g[L++].getBoundingClientRect().left)&&L<p;);L<p&&L--}for(m=a[p]=[],_=l?Math.min(L,p)*u-.5:i%L,v=L===Li?0:l?p*d/L-.5:i/L|0,x=0,S=Li,T=0;T<p;T++)M=T%L-_,y=v-(T/L|0),m[T]=b=c?Math.abs(c==="y"?y:M):qm(M*M+y*y),b>x&&(x=b),b<S&&(S=b);i==="random"&&ag(m),m.max=x-S,m.min=S,m.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(L>p?p-1:c?c==="y"?p/L:L:Math.max(L,p/L))||0)*(i==="edges"?-1:1),m.b=p<0?s-p:s,m.u=En(t.amount||t.each)||0,n=n&&p<0?Qy(n):n}return p=(m[h]-m.min)/m.max||0,Ht(m.b+(n?n(p):p)*m.v)+m.u}},jf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ht(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ar(n)?0:En(n))}},lg=function(e,t){var n=Fn(e),i,s;return!n&&or(e)&&(i=n=e.radius||Li,e.values?(e=Di(e.values),(s=!Ar(e[0]))&&(i*=i)):e=jf(e.increment)),ss(t,n?Jt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Li,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||Ar(a)?u:u+En(a)}:jf(e))},cg=function(e,t,n,i){return ss(Fn(e)?!t:n===!0?!!(n=0):!i,function(){return Fn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},zy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Gy=function(e,t){return function(n){return e(parseFloat(n))+(t||En(n))}},Vy=function(e,t,n){return hg(e,t,0,1,n)},ug=function(e,t,n){return ss(n,function(i){return e[~~t(i)]})},Hy=function r(e,t,n){var i=t-e;return Fn(e)?ug(e,r(0,e.length),t):ss(n,function(s){return(i+(s-e)%i)%i+e})},Wy=function r(e,t,n){var i=t-e,s=i*2;return Fn(e)?ug(e,r(0,e.length-1),t):ss(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Aa=function(e){return e.replace(by,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Ty);return cg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},hg=function(e,t,n,i,s){var a=t-e,o=i-n;return ss(s,function(l){return n+((l-e)/a*o||0)})},Xy=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=un(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Fn(e)&&!Fn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(g){g*=d;var p=Math.min(h,~~g);return u[p](g-p)},n=t}else i||(e=ba(Fn(e)?[]:{},e));if(!u){for(l in t)dd.call(o,e,l,"get",t[l]);s=function(g){return xd(g,o)||(a?e.p:e)}}}return ss(n,s)},Vm=function(e,t,n){var i=e.labels,s=Li,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},xi=function(e,t,n){var i=e.vars,s=i[t],a=kt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ns.length&&Oc(),o&&(kt=o),u=l?s.apply(c,l):s.call(c),kt=a,u},Bo=function(e){return rs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!wn),e.progress()<1&&xi(e,"onInterrupt"),e},Ma,fg=[],dg=function(e){if(e)if(e=!e.name&&e.default||e,nd()||e.headless){var t=e.name,n=Jt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Xo,render:xd,add:dd,kill:lv,modifier:ov,rawVars:0},a={targetTest:0,get:0,getSetter:Yc,aliases:{},register:0};if(Ea(),e!==i){if(oi[t])return;vi(i,vi(Fc(e,s),a)),ba(i.prototype,ba(s,Fc(e,a))),oi[i.prop=t]=i,e.targetTest&&(Dc.push(i),ad[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}$m(t,i),e.register&&e.register(Bn,i,$n)}else fg.push(e)},Dt=255,ko={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},Vf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},pg=function(e,t,n){var i=e?Ar(e)?[e>>16,e>>8&Dt,e&Dt]:0:ko.black,s,a,o,l,c,u,d,h,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ko[e])i=ko[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Dt,i&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Fm),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Vf(l+1/3,s,a),i[1]=Vf(l,s,a),i[2]=Vf(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(id),n&&i.length<4&&(i[3]=1),i}else i=e.match(Fm)||ko.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Dt,a=i[1]/Dt,o=i[2]/Dt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},mg=function(e){var t=[],n=[],i=-1;return e.split(Er).forEach(function(s){var a=s.match(Bs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Hm=function(e,t,n){var i="",s=(e+i).match(Er),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=pg(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=mg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Er,"1").split(Bs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Er),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Er=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ko)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),qy=/hsl[a]?\(/,hd=function(e){var t=e.join(" "),n;if(Er.lastIndex=0,Er.test(t))return n=qy.test(t),e[1]=Hm(e[1],n),e[0]=Hm(e[0],n,mg(e[1])),!0},qo,li=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,g=function p(m){var _=r()-i,v=m===!0,M,y,b,T;if((_>e||_<0)&&(n+=_-t),i+=_,b=i-n,M=b-a,(M>0||v)&&(T=++d.frame,h=b-d.time*1e3,d.time=b=b/1e3,a+=M+(M>=s?0:s-M),y=1),v||(l=c(p)),y)for(f=0;f<o.length;f++)o[f](b,h,T,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Zm&&(!Zf&&nd()&&(sr=Zf=window,sd=sr.document||{},yi.gsap=Bn,(sr.gsapVersions||(sr.gsapVersions=[])).push(Bn.version),Jm(Uc||sr.GreenSockGlobals||!sr.gsap&&sr||{}),fg.forEach(dg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},qo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),qo=0,c=Xo},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,_,v){var M=_?function(y,b,T,x){m(y,b,T,x),d.remove(M)}:m;return d.remove(m),o[v?"unshift":"push"](M),Ea(),M},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&f>=_&&f--},_listeners:o},d})(),Ea=function(){return!qo&&li.wake()},xt={},Yy=/^[\d.\-M][\d.\-,\s]/,Zy=/["']/g,Jy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Zy,"").trim():+c,i=l.substr(o+1).trim();return t},$y=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Ky=function(e){var t=(e+"").split("("),n=xt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Jy(t[1])]:$y(e).split(",").map(jm)):xt._CE&&Yy.test(e)?xt._CE("",e):n},Qy=function(e){return function(t){return 1-e(1-t)}},Os=function(e,t){return e&&(Jt(e)?e:xt[e]||Ky(e))||t},zs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Jn(e,function(o){xt[o]=yi[o]=s,xt[a=o.toLowerCase()]=n;for(var l in s)xt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=xt[o+"."+l]=s[l]}),s},gg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Hf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Yf*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*My((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:gg(o);return s=Yf/s,l.config=function(c,u){return r(e,c,u)},l},Wf=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:gg(n);return i.config=function(s){return r(e,s)},i};Jn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;zs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});xt.Linear.easeNone=xt.none=xt.Linear.easeIn;zs("Elastic",Hf("in"),Hf("out"),Hf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};zs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);zs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});zs("Circ",function(r){return-(qm(1-r*r)-1)});zs("Sine",function(r){return r===1?1:-Sy(r*yy)+1});zs("Back",Wf("in"),Wf("out"),Wf());xt.SteppedEase=xt.steps=yi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Rt;return function(o){return((i*Jo(0,a,o)|0)+s)*n}}};Ho.ease=xt["quad.out"];Jn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return od+=r+","+r+"Params,"});var fd=function(e,t){this.id=vy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:cd,this.set=t?t.getSetter:Yc},Yo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,wa(this,+t.duration,1,1),this.data=t.data,kt&&(this._ctx=kt,kt.data.push(this)),qo||li.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,wa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ea(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(qc(this,n),!s._dp||s.parent||ng(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ar(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Rt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ta(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Rt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Bc(this.parent._time,this):this._tTime,a=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Rt?0:this._rts;var o=this.totalDuration();return(a!==this._rts<0||s>0&&s<o)&&this.totalTime(Jo(-Math.abs(this._delay),o,s),i!==!1),Xc(this),Ly(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Ea(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Rt,a;if(s)for(this._tTime-=Rt,a=this._first;a;){if(!a._dur&&a._zTime<0&&a._ts&&a._start<=i+Rt){s=!1;break}a=a._next}this.totalTime(i,s)}return this},e.startTime=function(n){if(arguments.length){this._start=Ht(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ar(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ci(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Cy);var i=wn;return wn=n,ud(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Gm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ii(this,n),ci(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ci(i)),this._dur||(this._zTime=-Rt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Rt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Rt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Rt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Jt(n)?n:eg,l=function(){var u=i.then;i.then=null,s&&s(),Jt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Bo(this)},r})();vi(Yo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Rt,_prom:0,_ps:!1,_rts:1});var On=(function(r){Xm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ci(n.sortChildren),Wt&&ar(n.parent||Wt,wr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ig(wr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Go(0,arguments,this),this},t.from=function(i,s,a){return Go(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Go(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,zo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qt(i,s,Ii(this,a),1),this},t.call=function(i,s,a){return ar(this,Qt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Qt(i,a,Ii(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,zo(a).immediateRender=ci(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,zo(o).immediateRender=ci(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ht(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,g,p,m,_,v,M,y,b,T,x;if(this!==Wt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,M=this._ts,_=!M,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Ht(u%m),u===l?(p=this._repeat,h=c):(b=Ht(u/m),p=~~b,p&&p===b&&(h=c,p--),h>c&&(h=c)),b=Ta(this._tTime,m),!o&&this._tTime&&b!==p&&this._tTime-b*m-this._dur<=0&&(b=p),T&&p&1&&(h=c-h,x=1),p!==b&&!this._lock){var S=T&&b&1,L=S===(T&&p&1);if(p<b&&(S=!S),o=S?0:u%c?c:u,this._lock=1,this.render(o||(x?0:Ht(p*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,b=p),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Oy(this,Ht(o),Ht(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!b&&(xi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=-Rt);break}}f=g}else{f=this._last;for(var C=i<0?i:h;f;){if(g=f._prev,(f._act||C<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,a||wn&&ud(f)),h!==this._time||!this._ts&&!_){v=0,g&&(u+=this._zTime=C?-Rt:Rt);break}}f=g}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-Rt)._zTime=h>=o?1:-1,this._ts))return this._start=y,Xc(this),this.render(i,s,a);this._onUpdate&&!s&&xi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&rs(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(xi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Ar(s)||(s=Ii(this,s,i)),!(i instanceof Yo)){if(Fn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(un(i))return this.addLabel(i,s);if(Jt(i))i=Qt.delayedCall(0,i);else return this}return this!==i?ar(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Li);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Qt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return un(i)?this.removeLabel(i):Jt(i)?this.killTweensOf(i):(i.parent===this&&Wc(this,i),i===this._recent&&(this._recent=this._last),Us(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(li.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ii(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Qt.delayedCall(0,s||Xo,a);return o.data="isPause",this._hasPause=1,ar(this,o,Ii(this,i))},t.removePause=function(i){var s=this._first;for(i=Ii(this,i);s;)s._start===i&&s.data==="isPause"&&rs(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)ts!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Di(i),l=this._first,c=Ar(s),u;l;)l instanceof Qt?Ry(l._targets,o)&&(c?(!ts||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Ii(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=Qt.to(a,vi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Rt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&wa(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,vi({startAt:{time:Ii(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Vm(this,Ii(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Vm(this,Ii(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Rt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ht(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Us(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Us(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Li,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ar(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ht(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;wa(a,a===Wt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Wt._ts&&(Qm(Wt,Bc(i,Wt)),Km=li.frame),li.frame>=Bm){Bm+=ui.autoSleep||120;var s=Wt._first;if((!s||!s._ts)&&ui.autoSleep&&li._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||li.sleep()}}},e})(Yo);vi(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var jy=function(e,t,n,i,s,a,o){var l=new $n(this._pt,e,t,0,1,_d,null,s),c=0,u=0,d,h,f,g,p,m,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Aa(i)),a&&(v=[n,i],a(v,e,t),n=v[0],i=v[1]),h=n.match(zf)||[];d=zf.exec(i);)g=d[0],p=i.substring(c,d.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:m,c:g.charAt(1)==="="?ks(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=zf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(rd.test(i)||_)&&(l.e=0),this._pt=l,l},dd=function(e,t,n,i,s,a,o,l,c,u){Jt(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:Jt(d)?c?e[t.indexOf("set")||!Jt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Jt(d)?c?rv:xg:gd,g;if(un(i)&&(~i.indexOf("random(")&&(i=Aa(i)),i.charAt(1)==="="&&(g=ks(h,i)+(En(h)||0),(g||g===0)&&(i=g))),!u||h!==i||ed)return!isNaN(h*i)&&i!==""?(g=new $n(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?av:yg,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&Hc(t,i),jy.call(this,e,t,h,i,f,l||ui.stringFilter,c))},ev=function(e,t,n,i,s){if(Jt(e)&&(e=Vo(e,s,t,n,i)),!or(e)||e.style&&e.nodeType||Fn(e)||Ym(e))return un(e)?Vo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Vo(e[o],s,t,n,i);return a},pd=function(e,t,n,i,s,a){var o,l,c,u;if(oi[e]&&(o=new oi[e]).init(s,o.rawVars?t[e]:ev(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new $n(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ma))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},ts,ed,md=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,g=e._dur,p=e._startAt,m=e._targets,_=e.parent,v=_&&_.data==="nested"?_.vars.targets:m,M=e._overwrite==="auto"&&!td,y=e.timeline,b=i.easeReverse||d,T,x,S,L,C,V,O,ne,B,K,ie,H,Z;if(y&&(!h||!s)&&(s="none"),e._ease=Os(s,Ho.ease),e._rEase=b&&(Os(b)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||h&&!i.stagger){if(ne=m[0]?is(m[0]).harness:0,H=ne&&i[ne.prop],T=Fc(i,ad),p&&(p._zTime<0&&p.progress(1),t<0&&u&&o&&!f?p.render(-1,!0):p.revert(u&&g?Lc:Ay),p._lazy=0),a){if(rs(e._startAt=Qt.set(m,vi({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!p&&ci(l),startAt:null,delay:0,onUpdate:c&&function(){return xi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn||!o&&!f)&&e._startAt.revert(Lc),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!p){if(t&&(o=!1),S=vi({overwrite:!1,data:"isFromStart",lazy:o&&!p&&ci(l),immediateRender:o,stagger:0,parent:_},T),H&&(S[ne.prop]=H),rs(e._startAt=Qt.set(m,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(wn?e._startAt.revert(Lc):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Rt,Rt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&ci(l)||l&&!g,x=0;x<m.length;x++){if(C=m[x],O=C._gsap||ld(m)[x]._gsap,e._ptLookup[x]=K={},Jf[O.id]&&ns.length&&Oc(),ie=v===m?x:v.indexOf(C),ne&&(B=new ne).init(C,H||T,e,ie,v)!==!1&&(e._pt=L=new $n(e._pt,C,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(re){K[re]=L}),B.priority&&(V=1)),!ne||H)for(S in T)oi[S]&&(B=pd(S,T,e,ie,C,v))?B.priority&&(V=1):K[S]=L=dd.call(e,C,S,"get",T[S],ie,v,0,i.stringFilter);e._op&&e._op[x]&&e.kill(C,e._op[x]),M&&e._pt&&(ts=e,Wt.killTweensOf(C,K,e.globalTime(t)),Z=!e.parent,ts=0),e._pt&&l&&(Jf[O.id]=1)}V&&yd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Z,h&&t<=0&&y.render(Li,!0,!0)},tv=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ed=1,e.vars[t]="+=0",md(e,o),ed=0,l?Wo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=$t(n)+En(d.e)),d.b&&(d.b=u.s+En(d.b))},nv=function(e,t){var n=e[0]?is(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ba({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},iv=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Fn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Vo=function(e,t,n,i,s){return Jt(e)?e.call(t,n,i,s):un(e)&&~e.indexOf("random(")?Aa(e):e},zc=od+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",_g={};Jn(zc+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return _g[r]=1});zc=zc.split(",");var Qt=(function(r){Xm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:zo(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,_=i.parent||Wt,v=(Fn(n)||Ym(n)?Ar(n[0]):"length"in i)?[n]:Di(n),M,y,b,T,x,S,L,C;if(o._targets=v.length?ld(v):Wo("GSAP target "+n+" not found. https://gsap.com",!ui.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||Ic(c)||Ic(u)){i=o.vars;var V=i.easeReverse||i.yoyoEase;if(M=o.timeline=new On({data:"nested",defaults:p||{},targets:_&&_.data==="nested"?_.vars.targets:v}),M.kill(),M.parent=M._dp=wr(o),M._start=0,h||Ic(c)||Ic(u)){if(T=v.length,L=h&&og(h),or(h))for(x in h)~zc.indexOf(x)&&(C||(C={}),C[x]=h[x]);for(y=0;y<T;y++)b=Fc(i,_g),b.stagger=0,V&&(b.easeReverse=V),C&&ba(b,C),S=v[y],b.duration=+Vo(c,wr(o),y,S,v),b.delay=(+Vo(u,wr(o),y,S,v)||0)-o._delay,!h&&T===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),M.to(S,b,L?L(y,S,v):0),M._ease=xt.none;M.duration()?c=u=0:o.timeline=0}else if(g){zo(vi(M.vars.defaults,{ease:"none"})),M._ease=Os(g.ease||i.ease||"none");var O=0,ne,B,K;if(Fn(g))g.forEach(function(ie){return M.to(v,ie,">")}),M.duration();else{b={};for(x in g)x==="ease"||x==="easeEach"||iv(x,g[x],b,g.easeEach);for(x in b)for(ne=b[x].sort(function(ie,H){return ie.t-H.t}),O=0,y=0;y<ne.length;y++)B=ne[y],K={ease:B.e,duration:(B.t-(y?ne[y-1].t:0))/100*c},K[x]=B.v,M.to(v,K,O),O+=K.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return f===!0&&!td&&(ts=wr(o),Wt.killTweensOf(v),ts=0),ar(_,wr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Ht(_._time)&&ci(d)&&Dy(wr(o))&&_.data!=="nested")&&(o._tTime=-Rt,o.render(Math.max(0,-u)||0)),m&&ig(wr(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Rt&&!u?l:i<Rt?0:i,h,f,g,p,m,_,v,M;if(!c)Uy(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,M=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+i,s,a);if(h=Ht(d%p),d===l?(g=this._repeat,h=c):(m=Ht(d/p),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),_=this._yoyo&&g&1,_&&(h=c-h),m=Ta(this._tTime,p),h===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!_&&!this._lock&&h!==p&&this._initted&&(this._lock=a=1,this.render(Ht(p*g),!0).invalidate()._lock=0)}if(!this._initted){if(rg(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=h<o;if(y!==this._inv){var b=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(y?-1:1)/b:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(h/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(xi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&$f(this,i,s,a),xi(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&xi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&$f(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&rs(this,1),!s&&!(u&&!o)&&(d||o||_)&&(xi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){qo||li.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||md(this,c),u=this._ease(c/this._dur),tv(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(qc(this,0),this.parent||tg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Bo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ts&&ts.vars.overwrite!==!0)._first||Bo(this),this.parent&&a!==this.timeline.totalDuration()&&wa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Di(i):o,c=this._ptLookup,u=this._pt,d,h,f,g,p,m,_;if((!s||s==="all")&&Iy(o,l))return s==="all"&&(this._pt=0),Bo(this);for(d=this._op=this._op||[],s!=="all"&&(un(s)&&(p={},Jn(s,function(v){return p[v]=1}),s=p),s=nv(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){h=c[_],s==="all"?(d[_]=s,g=h,f={}):(f=d[_]=d[_]||{},g=s);for(p in g)m=h&&h[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&Wc(this,m,"_pt"),delete h[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&u&&Bo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Go(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Go(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Wt.killTweensOf(i,s,a)},e})(Yo);vi(Qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jn("staggerTo,staggerFrom,staggerFromTo",function(r){Qt[r]=function(){var e=new On,t=Kf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var gd=function(e,t,n){return e[t]=n},xg=function(e,t,n){return e[t](n)},rv=function(e,t,n,i){return e[t](i.fp,n)},sv=function(e,t,n){return e.setAttribute(t,n)},Yc=function(e,t){return Jt(e[t])?xg:Vc(e[t])&&e.setAttribute?sv:gd},yg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},av=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},_d=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},xd=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},ov=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},lv=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Wc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},cv=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},yd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},$n=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||yg,this.d=l||this,this.set=c||gd,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=cv,this.m=n,this.mt=s,this.tween=i},r})();Jn(od+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return ad[r]=1});yi.TweenMax=yi.TweenLite=Qt;yi.TimelineLite=yi.TimelineMax=On;Wt=new On({sortChildren:!1,defaults:Ho,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ui.stringFilter=hd;var Fs=[],Nc={},uv=[],Wm=0,hv=0,Xf=function(e){return(Nc[e]||uv).map(function(t){return t()})},Zo=function(){var e=Date.now(),t=[];e-Wm>2&&(Xf("matchMediaInit"),Fs.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=sr.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Xf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Wm=e,Xf("matchMedia"))},vg=(function(){function r(t,n){this.selector=n&&Qf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Jt(n)&&(s=i,i=n,n=Jt);var a=this,o=function(){var c=kt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Qf(s)),kt=a,d=i.apply(a,arguments),Jt(d)&&a._r.push(d),kt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Jt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=kt;kt=null,n(this),kt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Qt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof On?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i){for(var a=Fs.length;a--;)Fs[a].id===this.id&&Fs.splice(a,1);this._mqs&&this._mqs.forEach(function(o){return o.removeListener?o.removeListener(Zo):o.removeEventListener("change",Zo)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},r})(),fv=(function(){function r(t){this.contexts=[],this.scope=t,kt&&kt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){or(n)||(n={matches:n});var a=new vg(0,s||this.scope),o=a.conditions={},l,c,u;kt&&!a.selector&&(a.selector=kt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=sr.matchMedia(n[c]),l&&(Fs.indexOf(a)<0&&Fs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Zo):l.addEventListener("change",Zo),(a._mqs||(a._mqs=[])).push(l)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Gc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return dg(i)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return Wt.getTweensOf(e,t)},getProperty:function(e,t,n,i){un(e)&&(e=Di(e)[0]);var s=is(e||{}).get,a=n?eg:jm;return n==="native"&&(n=""),e&&(t?a((oi[t]&&oi[t].get||s)(e,t,n,i)):function(o,l,c){return a((oi[o]&&oi[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Di(e),e.length>1){var i=e.map(function(u){return Bn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=oi[t],o=is(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Ma._pt=0,d.init(e,n?u+n:u,Ma,0,[e]),d.render(1,d),Ma._pt&&xd(1,Ma)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Bn.to(e,vi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Os(e.ease,Ho.ease)),km(Ho,e||{})},config:function(e){return km(ui,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!oi[o]&&!yi[o]&&Wo(t+" effect requires "+o+" plugin.")}),Gf[t]=function(o,l,c){return n(Di(o),vi(l||{},s),c)},a&&(On.prototype[t]=function(o,l,c){return this.add(Gf[t](o,or(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){xt[e]=Os(t)},parseEase:function(e,t){return arguments.length?Os(e,t):xt},getById:function(e){return Wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),i,s;for(n.smoothChildTiming=ci(e.smoothChildTiming),Wt.remove(n),n._dp=0,n._time=n._tTime=Wt._time,i=Wt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Qt&&i.vars.onComplete===i._targets[0]))&&ar(n,i,i._start-i._delay),i=s;return ar(Wt,n,0),n},context:function(e,t){return e?new vg(e,t):kt},matchMedia:function(e){return new fv(e)},matchMediaRefresh:function(){return Fs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Zo()},addEventListener:function(e,t){var n=Nc[e]||(Nc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Nc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Hy,wrapYoyo:Wy,distribute:og,random:cg,snap:lg,normalize:Vy,getUnit:En,clamp:By,splitColor:pg,toArray:Di,selector:Qf,mapRange:hg,pipe:zy,unitize:Gy,interpolate:Xy,shuffle:ag},install:Jm,effects:Gf,ticker:li,updateRoot:On.updateRoot,plugins:oi,globalTimeline:Wt,core:{PropTween:$n,globals:$m,Tween:Qt,Timeline:On,Animation:Yo,getCache:is,_removeLinkedListItem:Wc,reverting:function(){return wn},context:function(e){return e&&kt&&(kt.data.push(e),e._ctx=kt),kt},suppressOverwrites:function(e){return td=e}}};Jn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Gc[r]=Qt[r]});li.add(On.updateRoot);Ma=Gc.to({},{duration:0});var dv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},pv=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=dv(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},qf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(un(s)&&(l={},Jn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}pv(o,s)}}}},Bn=Gc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)wn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},qf("roundProps",jf),qf("modifiers"),qf("snap",lg))||Gc;Qt.version=On.version=Bn.version="3.15.1";Zm=1;nd()&&Ea();var mv=xt.Power0,gv=xt.Power1,_v=xt.Power2,xv=xt.Power3,yv=xt.Power4,vv=xt.Linear,Sv=xt.Quad,Mv=xt.Cubic,bv=xt.Quart,Tv=xt.Quint,wv=xt.Strong,Ev=xt.Elastic,Av=xt.Back,Cv=xt.SteppedEase,Rv=xt.Bounce,Pv=xt.Sine,Iv=xt.Expo,Lv=xt.Circ;var Sg,as,Ra,wd,Ws,Dv,Mg,Ed,Nv=function(){return typeof window<"u"},Rr={},Hs=180/Math.PI,Pa=Math.PI/180,Ca=Math.atan2,bg=1e8,Ad=/([A-Z])/g,Uv=/(left|right|width|margin|padding|x)/i,Ov=/[\s,\(]\S/,lr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Sd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Fv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Bv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},kv=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},zv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ig=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Lg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Gv=function(e,t,n){return e.style[t]=n},Vv=function(e,t,n){return e.style.setProperty(t,n)},Hv=function(e,t,n){return e._gsap[t]=n},Wv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Xv=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},qv=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Xt="transform",hi=Xt+"Origin",Yv=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Rr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=lr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Cr(i,o)}):this.tfm[e]=a.x?a[e]:Cr(i,e),e===hi&&(this.tfm.zOrigin=a.zOrigin);else return lr.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Xt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(hi,t,"")),e=Xt}(s||t)&&this.props.push(e,t,s[e])},Dg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Zv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ad,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ed(),(!s||!s.isStart)&&!n[Xt]&&(Dg(n),i.zOrigin&&n[hi]&&(n[hi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ng=function(e,t){var n={target:e,props:[],revert:Zv,save:Yv};return e._gsap||Bn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Ug,Md=function(e,t){var n=as.createElementNS?as.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):as.createElement(e);return n&&n.style?n:as.createElement(e)},Si=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ad,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ia(t)||t,1)||""},Tg="O,Moz,ms,Ms,Webkit".split(","),Ia=function(e,t,n){var i=t||Ws,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Tg[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Tg[a]:"")+e},bd=function(){Nv()&&window.document&&(Sg=window,as=Sg.document,Ra=as.documentElement,Ws=Md("div")||{style:{}},Dv=Md("div"),Xt=Ia(Xt),hi=Xt+"Origin",Ws.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ug=!!Ia("perspective"),Ed=Bn.core.reverting,wd=1)},wg=function(e){var t=e.ownerSVGElement,n=Md("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ra.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ra.removeChild(n),s},Eg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Og=function(e){var t,n;try{t=e.getBBox()}catch{t=wg(e),n=1}return t&&(t.width||t.height)||n||(t=wg(e)),t&&!t.width&&!t.x&&!t.y?{x:+Eg(e,["x","cx","x1"])||0,y:+Eg(e,["y","cy","y1"])||0,width:0,height:0}:t},Fg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Og(e))},ls=function(e,t){if(t){var n=e.style,i;t in Rr&&t!==hi&&(t=Xt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ad,"-$1").toLowerCase())):n.removeAttribute(t)}},os=function(e,t,n,i,s,a){var o=new $n(e._pt,t,n,0,1,a?Lg:Ig);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Ag={deg:1,rad:1,turn:1},Jv={grid:1,flex:1},cs=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ws.style,l=Uv.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",g,p,m,_;if(i===a||!s||Ag[i]||Ag[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),_=e.getCTM&&Fg(e),(f||a==="%")&&(Rr[t]||~t.indexOf("adius")))return g=_?e.getBBox()[l?"width":"height"]:e[u],$t(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(h?a:i),p=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===as||!p.appendChild)&&(p=as.body),m=p._gsap,m&&f&&m.width&&l&&m.time===li.time&&!m.uncache)return $t(s/m.width*d);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+i,g=e[u],v?e.style[t]=v:ls(e,t)}else(f||a==="%")&&!Jv[Si(p,"display")]&&(o.position=Si(e,"position")),p===e&&(o.position="static"),p.appendChild(Ws),g=Ws[u],p.removeChild(Ws),o.position="absolute";return l&&f&&(m=is(p),m.time=li.time,m.width=p[u]),$t(h?g*s/d:g&&s?d/g*s:0)},Cr=function(e,t,n,i){var s;return wd||bd(),t in lr&&t!=="transform"&&(t=lr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Rr[t]&&t!=="transform"?(s=Qo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Jc(Si(e,hi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Zc[t]&&Zc[t](e,t,n)||Si(e,t)||cd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?cs(e,t,s,n)+n:s},$v=function(e,t,n,i){if(!n||n==="none"){var s=Ia(t,e,1),a=s&&Si(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Si(e,"borderTopColor"))}var o=new $n(this._pt,e.style,t,0,1,_d),l=0,c=0,u,d,h,f,g,p,m,_,v,M,y,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Si(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(p=e.style[t],e.style[t]=i,i=Si(e,t)||i,p?e.style[t]=p:ls(e,t)),u=[n,i],hd(u),n=u[0],i=u[1],h=n.match(Bs)||[],b=i.match(Bs)||[],b.length){for(;d=Bs.exec(i);)m=d[0],v=i.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(p=h[c++]||"")&&(f=parseFloat(p)||0,y=p.substr((f+"").length),m.charAt(1)==="="&&(m=ks(f,m)+y),_=parseFloat(m),M=m.substr((_+"").length),l=Bs.lastIndex-M.length,M||(M=M||ui.units[t]||y,l===i.length&&(i+=M,o.e+=M)),y!==M&&(f=cs(e,t,p,M)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:f,c:_-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Lg:Ig;return rd.test(i)&&(o.e=0),this._pt=o,o},Cg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Kv=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Cg[n]||n,t[1]=Cg[i]||i,t.join(" ")},Qv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Rr[o]&&(l=1,o=o==="transformOrigin"?hi:Xt),ls(n,o);l&&(ls(n,Xt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Qo(n,1),a.uncache=1,Dg(i)))}},Zc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new $n(e._pt,t,n,0,0,Qv);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ko=[1,0,0,1,0,0],Bg={},kg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Rg=function(e){var t=Si(e,Xt);return kg(t)?Ko:t.substr(7).match(id).map($t)},Cd=function(e,t){var n=e._gsap||is(e),i=e.style,s=Rg(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ko:s):(s===Ko&&!e.offsetParent&&e!==Ra&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ra.appendChild(e)),s=Rg(e),l?i.display=l:ls(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ra.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Td=function(e,t,n,i,s,a){var o=e._gsap,l=s||Cd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],g=l[1],p=l[2],m=l[3],_=l[4],v=l[5],M=t.split(" "),y=parseFloat(M[0])||0,b=parseFloat(M[1])||0,T,x,S,L;n?l!==Ko&&(x=f*m-g*p)&&(S=y*(m/x)+b*(-p/x)+(p*v-m*_)/x,L=y*(-g/x)+b*(f/x)-(f*v-g*_)/x,y=S,b=L):(T=Og(e),y=T.x+(~M[0].indexOf("%")?y/100*T.width:y),b=T.y+(~(M[1]||M[0]).indexOf("%")?b/100*T.height:b)),i||i!==!1&&o.smooth?(_=y-c,v=b-u,o.xOffset=d+(_*f+v*p)-_,o.yOffset=h+(_*g+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[hi]="0px 0px",a&&(os(a,o,"xOrigin",c,y),os(a,o,"yOrigin",u,b),os(a,o,"xOffset",d,o.xOffset),os(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+b)},Qo=function(e,t){var n=e._gsap||new fd(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Si(e,hi)||"0",u,d,h,f,g,p,m,_,v,M,y,b,T,x,S,L,C,V,O,ne,B,K,ie,H,Z,re,I,oe,Ce,Ne,J,ge;return u=d=h=p=m=_=v=M=y=0,f=g=1,n.svg=!!(e.getCTM&&Fg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),i.scale=i.rotate=i.translate="none"),x=Cd(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),Td(e,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,x)),b=n.xOrigin||0,T=n.yOrigin||0,x!==Ko&&(V=x[0],O=x[1],ne=x[2],B=x[3],u=K=x[4],d=ie=x[5],x.length===6?(f=Math.sqrt(V*V+O*O),g=Math.sqrt(B*B+ne*ne),p=V||O?Ca(O,V)*Hs:0,v=ne||B?Ca(ne,B)*Hs+p:0,v&&(g*=Math.abs(Math.cos(v*Pa))),n.svg&&(u-=b-(b*V+T*ne),d-=T-(b*O+T*B))):(ge=x[6],Ne=x[7],I=x[8],oe=x[9],Ce=x[10],J=x[11],u=x[12],d=x[13],h=x[14],S=Ca(ge,Ce),m=S*Hs,S&&(L=Math.cos(-S),C=Math.sin(-S),H=K*L+I*C,Z=ie*L+oe*C,re=ge*L+Ce*C,I=K*-C+I*L,oe=ie*-C+oe*L,Ce=ge*-C+Ce*L,J=Ne*-C+J*L,K=H,ie=Z,ge=re),S=Ca(-ne,Ce),_=S*Hs,S&&(L=Math.cos(-S),C=Math.sin(-S),H=V*L-I*C,Z=O*L-oe*C,re=ne*L-Ce*C,J=B*C+J*L,V=H,O=Z,ne=re),S=Ca(O,V),p=S*Hs,S&&(L=Math.cos(S),C=Math.sin(S),H=V*L+O*C,Z=K*L+ie*C,O=O*L-V*C,ie=ie*L-K*C,V=H,K=Z),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,_=180-_),f=$t(Math.sqrt(V*V+O*O+ne*ne)),g=$t(Math.sqrt(ie*ie+ge*ge)),S=Ca(K,ie),v=Math.abs(S)>2e-4?S*Hs:0,y=J?1/(J<0?-J:J):0),n.svg&&(H=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!kg(Si(e,Xt)),H&&e.setAttribute("transform",H))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=$t(f),n.scaleY=$t(g),n.rotation=$t(p)+o,n.rotationX=$t(m)+o,n.rotationY=$t(_)+o,n.skewX=v+o,n.skewY=M+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[hi]=Jc(c)),n.xOffset=n.yOffset=0,n.force3D=ui.force3D,n.renderTransform=n.svg?eS:Ug?zg:jv,n.uncache=0,n},Jc=function(e){return(e=e.split(" "))[0]+" "+e[1]},vd=function(e,t,n){var i=En(t);return $t(parseFloat(t)+parseFloat(cs(e,"x",n+"px",i)))+i},jv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,zg(e,t)},Gs="0deg",$o="0px",Vs=") ",zg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,_=n.force3D,v=n.target,M=n.zOrigin,y="",b=_==="auto"&&e&&e!==1||_===!0;if(M&&(d!==Gs||u!==Gs)){var T=parseFloat(u)*Pa,x=Math.sin(T),S=Math.cos(T),L;T=parseFloat(d)*Pa,L=Math.cos(T),a=vd(v,a,x*L*-M),o=vd(v,o,-Math.sin(T)*-M),l=vd(v,l,S*L*-M+M)}m!==$o&&(y+="perspective("+m+Vs),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(b||a!==$o||o!==$o||l!==$o)&&(y+=l!==$o||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Vs),c!==Gs&&(y+="rotate("+c+Vs),u!==Gs&&(y+="rotateY("+u+Vs),d!==Gs&&(y+="rotateX("+d+Vs),(h!==Gs||f!==Gs)&&(y+="skew("+h+", "+f+Vs),(g!==1||p!==1)&&(y+="scale("+g+", "+p+Vs),v.style[Xt]=y||"translate(0, 0)"},eS=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,_=n.yOffset,v=n.forceCSS,M=parseFloat(a),y=parseFloat(o),b,T,x,S,L;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Pa,c*=Pa,b=Math.cos(l)*d,T=Math.sin(l)*d,x=Math.sin(l-c)*-h,S=Math.cos(l-c)*h,c&&(u*=Pa,L=Math.tan(c-u),L=Math.sqrt(1+L*L),x*=L,S*=L,u&&(L=Math.tan(u),L=Math.sqrt(1+L*L),b*=L,T*=L)),b=$t(b),T=$t(T),x=$t(x),S=$t(S)):(b=d,S=h,T=x=0),(M&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(M=cs(f,"x",a,"px"),y=cs(f,"y",o,"px")),(g||p||m||_)&&(M=$t(M+g-(g*b+p*x)+m),y=$t(y+p-(g*T+p*S)+_)),(i||s)&&(L=f.getBBox(),M=$t(M+i/100*L.width),y=$t(y+s/100*L.height)),L="matrix("+b+","+T+","+x+","+S+","+M+","+y+")",f.setAttribute("transform",L),v&&(f.style[Xt]=L)},tS=function(e,t,n,i,s){var a=360,o=un(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Hs:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*bg)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*bg)%a-~~(c/a)*a)),e._pt=h=new $n(e._pt,t,n,i,c,Fv),h.e=u,h.u="deg",e._props.push(n),h},Pg=function(e,t){for(var n in t)e[n]=t[n];return e},nS=function(e,t,n){var i=Pg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Xt]=t,o=Qo(n,1),ls(n,Xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xt],a[Xt]=t,o=Qo(n,1),a[Xt]=c);for(l in Rr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=En(c),g=En(u),d=f!==g?cs(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new $n(e._pt,o,l,d,h-d,Sd),e._pt.u=g||0,e._props.push(l));Pg(o,i)};Jn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Zc[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return Cr(o,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,p){return f[g]=h[p]=h[p]||h[(p-1)/2|0]}),o.init(l,f,d)}});var Rd={name:"css",register:bd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,g,p,m,_,v,M,y,b,T,x,S,L;wd||bd(),this.styles=this.styles||Ng(e),S=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(u=t[p],!(oi[p]&&pd(p,t,n,i,e,s)))){if(f=typeof u,g=Zc[p],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Aa(u)),g)g(this,e,p,u,n)&&(x=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Er.lastIndex=0,Er.test(c)||(m=En(c),_=En(u),_?m!==_&&(c=cs(e,p,c,_)+_):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,p),a.push(p),S.push(p,0,o[p]);else if(f!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],un(c)&&~c.indexOf("random(")&&(c=Aa(c)),En(c+"")||c==="auto"||(c+=ui.units[p]||En(Cr(e,p))||""),(c+"").charAt(1)==="="&&(c=Cr(e,p))):c=Cr(e,p),h=parseFloat(c),v=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),p in lr&&(p==="autoAlpha"&&(h===1&&Cr(e,"visibility")==="hidden"&&d&&(h=0),S.push("visibility",0,o.visibility),os(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=lr[p],~p.indexOf(",")&&(p=p.split(",")[0]))),M=p in Rr,M){if(this.styles.save(p),L=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Si(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=u,u=Si(e,"perspective"),C?e.style.perspective=C:ls(e,"perspective")}d=parseFloat(u)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||Qo(e,t.parseTransform),T=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new $n(this._pt,o,Xt,0,1,b.renderTransform,b,0,-1),y.dep=1),p==="scale")this._pt=new $n(this._pt,b,"scaleY",b.scaleY,(v?ks(b.scaleY,v+d):d)-b.scaleY||0,Sd),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){S.push(hi,0,o[hi]),u=Kv(u),b.svg?Td(e,u,0,T,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==b.zOrigin&&os(this,b,"zOrigin",b.zOrigin,_),os(this,o,p,Jc(c),Jc(u)));continue}else if(p==="svgOrigin"){Td(e,u,1,T,0,this);continue}else if(p in Bg){tS(this,b,p,h,v?ks(h,v+u):u);continue}else if(p==="smoothOrigin"){os(this,b,"smooth",b.smooth,u);continue}else if(p==="force3D"){b[p]=u;continue}else if(p==="transform"){nS(this,u,e);continue}}else p in o||(p=Ia(p)||p);if(M||(d||d===0)&&(h||h===0)&&!Ov.test(u)&&p in o)m=(c+"").substr((h+"").length),d||(d=0),_=En(u)||(p in ui.units?ui.units[p]:m),m!==_&&(h=cs(e,p,c,_)),this._pt=new $n(this._pt,M?b:o,p,h,(v?ks(h,v+d):d)-h,!M&&(_==="px"||p==="zIndex")&&t.autoRound!==!1?zv:Sd),this._pt.u=_||0,M&&L!==u?(this._pt.b=c,this._pt.e=L,this._pt.r=kv):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=Bv);else if(p in o)$v.call(this,e,p,c,v?v+u:u);else if(p in e)this.add(e,p,c||e[p],v?v+u:u,i,s);else if(p!=="parseTransform"){Hc(p,u);continue}M||(p in o?S.push(p,0,o[p]):typeof e[p]=="function"?S.push(p,2,e[p]()):S.push(p,1,c||e[p])),a.push(p)}}x&&yd(this)},render:function(e,t){if(t.tween._time||!Ed())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Cr,aliases:lr,getSetter:function(e,t,n){var i=lr[t];return i&&i.indexOf(",")<0&&(t=i),t in Rr&&t!==hi&&(e._gsap.x||Cr(e,"x"))?n&&Mg===n?t==="scale"?Wv:Hv:(Mg=n||{})&&(t==="scale"?Xv:qv):e.style&&!Vc(e.style[t])?Gv:~t.indexOf("-")?Vv:Yc(e,t)},core:{_removeProperty:ls,_getMatrix:Cd}};Bn.utils.checkPrefix=Ia;Bn.core.getStyleSaver=Ng;(function(r,e,t,n){var i=Jn(r+","+e+","+t,function(s){Rr[s]=1});Jn(e,function(s){ui.units[s]="deg",Bg[s]=1}),lr[i[13]]=r+","+e,Jn(n,function(s){var a=s.split(":");lr[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ui.units[r]="px"});Bn.registerPlugin(Rd);var je=Bn.registerPlugin(Rd)||Bn,sA=je.core.Tween;function Gg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function iS(r,e,t){return e&&Gg(r.prototype,e),t&&Gg(r,t),r}var An,Qc,rS,fi,us,hs,Da,Hg,Xs,Na,Wg,Pr,qi,Xg,qg=function(){return An||typeof window<"u"&&(An=window.gsap)&&An.registerPlugin&&An},Yg=1,La=[],lt=[],Yi=[],el=Date.now,Pd=function(e,t){return t},sS=function(){var e=Na.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,lt),i.push.apply(i,Yi),lt=n,Yi=i,Pd=function(a,o){return t[a](o)}},Lr=function(e,t){return~Yi.indexOf(e)&&Yi[Yi.indexOf(e)+1][t]},tl=function(e){return!!~Wg.indexOf(e)},Qn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Kn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},$c="scrollLeft",Kc="scrollTop",Id=function(){return Pr&&Pr.isPressed||lt.cache++},jc=function(e,t){var n=function i(s){if(s||s===0){Yg&&fi.history.scrollRestoration!=="manual"&&(fi.history.scrollRestoration="manual");var a=Pr&&Pr.isPressed;s=i.v=Math.round(s)||(Pr&&Pr.iOS?1:0),e(s),i.cacheID=lt.cache,a&&Pd("ss",s)}else(t||lt.cache!==i.cacheID||Pd("ref"))&&(i.cacheID=lt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},kn={s:$c,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:jc(function(r){return arguments.length?fi.scrollTo(r,nn.sc()):fi.pageXOffset||us[$c]||hs[$c]||Da[$c]||0})},nn={s:Kc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:kn,sc:jc(function(r){return arguments.length?fi.scrollTo(kn.sc(),r):fi.pageYOffset||us[Kc]||hs[Kc]||Da[Kc]||0})},jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||An.utils.toArray)(e)[0]||(typeof e=="string"&&An.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},aS=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ir=function(e,t){var n=t.s,i=t.sc;tl(e)&&(e=us.scrollingElement||hs);var s=lt.indexOf(e),a=i===nn.sc?1:2;!~s&&(s=lt.push(e)-1),lt[s+a]||Qn(e,"scroll",Id);var o=lt[s+a],l=o||(lt[s+a]=jc(Lr(e,n),!0)||(tl(e)?i:jc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=An.getProperty(e,"scrollBehavior")==="smooth"),l},eu=function(e,t,n){var i=e,s=e,a=el(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,p){var m=el();p||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(g){var p=o,m=s,_=el();return(g||g===0)&&g!==i&&u(g),a===o||_-o>c?0:(i+(n?m:-m))/((n?_:a)-p)*1e3};return{update:u,reset:d,getVelocity:h}},jo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Vg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Zg=function(){Na=An.core.globals().ScrollTrigger,Na&&Na.core&&sS()},Jg=function(e){return An=e||qg(),!Qc&&An&&typeof document<"u"&&document.body&&(fi=window,us=document,hs=us.documentElement,Da=us.body,Wg=[fi,us,hs,Da],rS=An.utils.clamp,Xg=An.core.context||function(){},Xs="onpointerenter"in Da?"pointer":"mouse",Hg=Kt.isTouch=fi.matchMedia&&fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,qi=Kt.eventTypes=("ontouchstart"in hs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in hs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Yg=0},500),Qc=1),Na||Zg(),Qc};kn.op=nn;lt.cache=0;var Kt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Qc||Jg(An)||console.warn("Please gsap.registerPlugin(Observer)"),Na||Zg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,p=n.event,m=n.onDragStart,_=n.onDragEnd,v=n.onDrag,M=n.onPress,y=n.onRelease,b=n.onRight,T=n.onLeft,x=n.onUp,S=n.onDown,L=n.onChangeX,C=n.onChangeY,V=n.onChange,O=n.onToggleX,ne=n.onToggleY,B=n.onHover,K=n.onHoverEnd,ie=n.onMove,H=n.ignoreCheck,Z=n.isNormalizer,re=n.onGestureStart,I=n.onGestureEnd,oe=n.onWheel,Ce=n.onEnable,Ne=n.onDisable,J=n.onClick,ge=n.scrollSpeed,Ee=n.capture,Q=n.allowClicks,W=n.lockAxis,k=n.onLockAxis;this.target=o=jn(o)||hs,this.vars=n,f&&(f=An.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,ge=ge||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(fi.getComputedStyle(Da).lineHeight)||22);var z,q,fe,le,D,$,G,N=this,j=0,Y=0,A=n.passive||!u&&n.passive!==!1,P=Ir(o,kn),F=Ir(o,nn),se=P(),U=F(),Re=~a.indexOf("touch")&&!~a.indexOf("pointer")&&qi[0]==="pointerdown",Ve=tl(o),De=o.ownerDocument||us,_e=[0,0,0],ke=[0,0,0],Me=0,ze=function(){return Me=el()},R=function(Be,be){return(N.event=Be)&&f&&aS(Be.target,f)||be&&Re&&Be.pointerType!=="touch"||H&&H(Be,be)},w=function(){N._vx.reset(),N._vy.reset(),q.pause(),d&&d(N)},ae=function(){var Be=N.deltaX=Vg(_e),be=N.deltaY=Vg(ke),ve=Math.abs(Be)>=i,Ge=Math.abs(be)>=i;V&&(ve||Ge)&&V(N,Be,be,_e,ke),ve&&(b&&N.deltaX>0&&b(N),T&&N.deltaX<0&&T(N),L&&L(N),O&&N.deltaX<0!=j<0&&O(N),j=N.deltaX,_e[0]=_e[1]=_e[2]=0),Ge&&(S&&N.deltaY>0&&S(N),x&&N.deltaY<0&&x(N),C&&C(N),ne&&N.deltaY<0!=Y<0&&ne(N),Y=N.deltaY,ke[0]=ke[1]=ke[2]=0),(le||fe)&&(ie&&ie(N),fe&&(m&&fe===1&&m(N),v&&v(N),fe=0),le=!1),$&&!($=!1)&&k&&k(N),D&&(oe(N),D=!1),z=0},we=function(Be,be,ve){_e[ve]+=Be,ke[ve]+=be,N._vx.update(Be),N._vy.update(be),c?z||(z=requestAnimationFrame(ae)):ae()},ye=function(Be,be){W&&!G&&(N.axis=G=Math.abs(Be)>Math.abs(be)?"x":"y",$=!0),G!=="y"&&(_e[2]+=Be,N._vx.update(Be,!0)),G!=="x"&&(ke[2]+=be,N._vy.update(be,!0)),c?z||(z=requestAnimationFrame(ae)):ae()},Le=function(Be){if(!R(Be,1)){Be=jo(Be,u);var be=Be.clientX,ve=Be.clientY,Ge=be-N.x,Se=ve-N.y,qe=N.isDragging;N.x=be,N.y=ve,(qe||(Ge||Se)&&(Math.abs(N.startX-be)>=s||Math.abs(N.startY-ve)>=s))&&(fe||(fe=qe?2:1),qe||(N.isDragging=!0),ye(Ge,Se))}},Oe=N.onPress=function(Pe){R(Pe,1)||Pe&&Pe.button||(N.axis=G=null,q.pause(),N.isPressed=!0,Pe=jo(Pe),j=Y=0,N.startX=N.x=Pe.clientX,N.startY=N.y=Pe.clientY,N._vx.reset(),N._vy.reset(),Qn(Z?o:De,qi[1],Le,A,!0),N.deltaX=N.deltaY=0,M&&M(N))},ce=N.onRelease=function(Pe){if(!R(Pe,1)){Kn(Z?o:De,qi[1],Le,!0);var Be=!isNaN(N.y-N.startY),be=N.isDragging,ve=be&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),Ge=jo(Pe);!ve&&Be&&(N._vx.reset(),N._vy.reset(),u&&Q&&An.delayedCall(.08,function(){if(el()-Me>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(De.createEvent){var Se=De.createEvent("MouseEvents");Se.initMouseEvent("click",!0,!0,fi,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(Se)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,d&&be&&!Z&&q.restart(!0),fe&&ae(),_&&be&&_(N),y&&y(N,ve)}},xe=function(Be){return Be.touches&&Be.touches.length>1&&(N.isGesturing=!0)&&re(Be,N.isDragging)},Ie=function(){return(N.isGesturing=!1)||I(N)},X=function(Be){if(!R(Be)){var be=P(),ve=F();we((be-se)*ge,(ve-U)*ge,1),se=be,U=ve,d&&q.restart(!0)}},pe=function(Be){if(!R(Be)){Be=jo(Be,u),oe&&(D=!0);var be=(Be.deltaMode===1?l:Be.deltaMode===2?fi.innerHeight:1)*g;we(Be.deltaX*be,Be.deltaY*be,0),d&&!Z&&q.restart(!0)}},me=function(Be){if(!R(Be)){var be=Be.clientX,ve=Be.clientY,Ge=be-N.x,Se=ve-N.y;N.x=be,N.y=ve,le=!0,d&&q.restart(!0),(Ge||Se)&&ye(Ge,Se)}},Fe=function(Be){N.event=Be,B(N)},Ae=function(Be){N.event=Be,K(N)},Ue=function(Be){return R(Be)||jo(Be,u)&&J(N)};q=N._dc=An.delayedCall(h||.25,w).pause(),N.deltaX=N.deltaY=0,N._vx=eu(0,50,!0),N._vy=eu(0,50,!0),N.scrollX=P,N.scrollY=F,N.isDragging=N.isGesturing=N.isPressed=!1,Xg(this),N.enable=function(Pe){return N.isEnabled||(Qn(Ve?De:o,"scroll",Id),a.indexOf("scroll")>=0&&Qn(Ve?De:o,"scroll",X,A,Ee),a.indexOf("wheel")>=0&&Qn(o,"wheel",pe,A,Ee),(a.indexOf("touch")>=0&&Hg||a.indexOf("pointer")>=0)&&(Qn(o,qi[0],Oe,A,Ee),Qn(De,qi[2],ce),Qn(De,qi[3],ce),Q&&Qn(o,"click",ze,!0,!0),J&&Qn(o,"click",Ue),re&&Qn(De,"gesturestart",xe),I&&Qn(De,"gestureend",Ie),B&&Qn(o,Xs+"enter",Fe),K&&Qn(o,Xs+"leave",Ae),ie&&Qn(o,Xs+"move",me)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=le=fe=!1,N._vx.reset(),N._vy.reset(),se=P(),U=F(),Pe&&Pe.type&&Oe(Pe),Ce&&Ce(N)),N},N.disable=function(){N.isEnabled&&(La.filter(function(Pe){return Pe!==N&&tl(Pe.target)}).length||Kn(Ve?De:o,"scroll",Id),N.isPressed&&(N._vx.reset(),N._vy.reset(),Kn(Z?o:De,qi[1],Le,!0)),Kn(Ve?De:o,"scroll",X,Ee),Kn(o,"wheel",pe,Ee),Kn(o,qi[0],Oe,Ee),Kn(De,qi[2],ce),Kn(De,qi[3],ce),Kn(o,"click",ze,!0),Kn(o,"click",Ue),Kn(De,"gesturestart",xe),Kn(De,"gestureend",Ie),Kn(o,Xs+"enter",Fe),Kn(o,Xs+"leave",Ae),Kn(o,Xs+"move",me),N.isEnabled=N.isPressed=N.isDragging=!1,Ne&&Ne(N))},N.kill=N.revert=function(){N.disable();var Pe=La.indexOf(N);Pe>=0&&La.splice(Pe,1),Pr===N&&(Pr=0)},La.push(N),Z&&tl(o)&&(Pr=N),N.enable(p)},iS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Kt.version="3.15.1";Kt.create=function(r){return new Kt(r)};Kt.register=Jg;Kt.getAll=function(){return La.slice()};Kt.getById=function(r){return La.filter(function(e){return e.vars.id===r})[0]};qg()&&An.registerPlugin(Kt);var Ze,Ba,ht,At,Ti,Tt,Xd,gu,pl,ll,il,tu,zn,yu,Bd,ti,$g,Kg,ka,d0,Ld,p0,ei,kd,m0,g0,fs,zd,qd,za,Yd,ds,Gd,Dd,nu=1,Gn=Date.now,Nd=Gn(),Oi=0,rl=0,Qg=function(e,t,n){var i=bi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},jg=function(e,t){return t&&(!bi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},oS=function r(){return rl&&requestAnimationFrame(r)},e0=function(){return yu=1},t0=function(){return yu=0},cr=function(e){return e},sl=function(e){return Math.round(e*1e5)/1e5||0},_0=function(){return typeof window<"u"},x0=function(){return Ze||_0()&&(Ze=window.gsap)&&Ze.registerPlugin&&Ze},Ks=function(e){return!!~Xd.indexOf(e)},y0=function(e){return(e==="Height"?Yd:ht["inner"+e])||Ti["client"+e]||Tt["client"+e]},v0=function(e){return Lr(e,"getBoundingClientRect")||(Ks(e)?function(){return mu.width=ht.innerWidth,mu.height=Yd,mu}:function(){return Dr(e)})},lS=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Lr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?y0(s):e["client"+s])||0}},cS=function(e,t){return!t||~Yi.indexOf(e)?v0(e):function(){return mu}},ur=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Lr(e,n))?a()-v0(e)()[s]:Ks(e)?(Ti[n]||Tt[n])-y0(i):e[n]-e["offset"+i])},iu=function(e,t){for(var n=0;n<ka.length;n+=3)(!t||~t.indexOf(ka[n+1]))&&e(ka[n],ka[n+1],ka[n+2])},bi=function(e){return typeof e=="string"},Vn=function(e){return typeof e=="function"},al=function(e){return typeof e=="number"},qs=function(e){return typeof e=="object"},nl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ua=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Oa=Math.abs,S0="left",M0="top",Zd="right",Jd="bottom",Zs="width",Js="height",cl="Right",ul="Left",hl="Top",fl="Bottom",rn="padding",Ni="margin",Va="Width",$d="Height",hn="px",Ui=function(e){return ht.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},uS=function(e){var t=Ui(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},n0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Dr=function(e,t){var n=t&&Ui(e)[Bd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ze.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},_u=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},b0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},hS=function(e){return function(t){return Ze.utils.snap(b0(e),t)}},Kd=function(e){var t=Ze.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},fS=function(e){return function(t,n){return Kd(b0(e))(t,n.direction)}},ru=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},_n=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},gn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},su=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},i0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},au={toggleActions:"play",anticipatePin:0},xu={top:0,left:0,center:.5,bottom:1,right:1},hu=function(e,t){if(bi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in xu?xu[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ou=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=At.createElement("div"),p=Ks(n)||Lr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=p?Tt:n.tagName==="IFRAME"?n.contentDocument.body:n,v=e.indexOf("start")!==-1,M=v?c:u,y="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&p?"fixed;":"absolute;"),(m||l||!p)&&(y+=(i===nn?Zd:Jd)+":"+(a+parseFloat(h))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],fu(g,0,i,v),g},fu=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Va]=1,s["border"+o+Va]=0,s[n.p]=t+"px",Ze.set(e,s)},ut=[],Vd={},ml,r0=function(){return Gn()-Oi>34&&(ml||(ml=requestAnimationFrame(Nr)))},Fa=function(){(!ei||!ei.isPressed||ei.startX>Tt.clientWidth)&&(lt.cache++,ei?ml||(ml=requestAnimationFrame(Nr)):Nr(),Oi||js("scrollStart"),Oi=Gn())},Ud=function(){g0=ht.innerWidth,m0=ht.innerHeight},ol=function(e){lt.cache++,(e===!0||!zn&&!p0&&!At.fullscreenElement&&!At.webkitFullscreenElement&&(!kd||g0!==ht.innerWidth||Math.abs(ht.innerHeight-m0)>ht.innerHeight*.25))&&gu.restart(!0)},Qs={},dS=[],T0=function r(){return gn(it,"scrollEnd",r)||Ys(!0)},js=function(e){return Qs[e]&&Qs[e].map(function(t){return t()})||dS},Mi=[],w0=function(e){for(var t=0;t<Mi.length;t+=5)(!e||Mi[t+4]&&Mi[t+4].query===e)&&(Mi[t].style.cssText=Mi[t+1],Mi[t].getBBox&&Mi[t].setAttribute("transform",Mi[t+2]||""),Mi[t+3].uncache=1)},E0=function(){lt.cache++,lt.forEach(function(e){return Vn(e)&&(e.rec=e())})},Qd=function(e,t){var n;for(ti=0;ti<ut.length;ti++)n=ut[ti],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ds=!0,t&&w0(t),t||js("revert")},A0=function(e,t){lt.cache++,(t||!ni)&&lt.forEach(function(n){return Vn(n)&&n.cacheID++&&(n.rec=0)}),bi(e)&&(qd=e,ht.history.scrollRestoration!==e&&(ht.history.scrollRestoration=e))},ni,$s=0,s0,pS=function(){if(s0!==$s){var e=s0=$s;requestAnimationFrame(function(){return e===$s&&Ys(!0)})}},C0=function(){Tt.appendChild(za),Yd=!ei&&za.offsetHeight||ht.innerHeight,Tt.removeChild(za)},a0=function(e){return pl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ys=function(e,t){if(Ti=At.documentElement,Tt=At.body,Xd=[ht,At,Ti,Tt],Oi&&!e&&!ds){_n(it,"scrollEnd",T0);return}C0(),ni=it.isRefreshing=!0,ds||E0();var n=js("refreshInit");d0&&it.sort(),t||Qd(),lt.forEach(function(i){Vn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ut.slice(0).forEach(function(i){return i.refresh()}),ds=!1,ut.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Gd=1,a0(!0),ut.forEach(function(i){var s=ur(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),a0(!1),Gd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),lt.forEach(function(i){Vn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),A0(qd,1),gu.pause(),$s++,ni=2,Nr(2),ut.forEach(function(i){return Vn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),ni=it.isRefreshing=!1,js("refresh")},Hd=0,du=1,dl,Nr=function(e){if(e===2||!ni&&!ds){it.isUpdating=!0,dl&&dl.update(0);var t=ut.length,n=Gn(),i=n-Nd>=50,s=t&&ut[0].scroll();if(du=Hd>s?-1:1,ni||(Hd=s),i&&(Oi&&!yu&&n-Oi>200&&(Oi=0,js("scrollEnd")),il=Nd,Nd=n),du<0){for(ti=t;ti-- >0;)ut[ti]&&ut[ti].update(0,i);du=1}else for(ti=0;ti<t;ti++)ut[ti]&&ut[ti].update(0,i);it.isUpdating=!1}ml=0},Wd=[S0,M0,Jd,Zd,Ni+fl,Ni+cl,Ni+hl,Ni+ul,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],pu=Wd.concat([Zs,Js,"boxSizing","max"+Va,"max"+$d,"position",Ni,rn,rn+hl,rn+cl,rn+fl,rn+ul]),mS=function(e,t,n){Ga(n);var i=e._gsap;if(i.spacerIsNative)Ga(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Od=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Wd.length,a=t.style,o=e.style,l;s--;)l=Wd[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Jd]=o[Zd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Zs]=_u(e,kn)+hn,a[Js]=_u(e,nn)+hn,a[rn]=o[Ni]=o[M0]=o[S0]="0",Ga(i),o[Zs]=o["max"+Va]=n[Zs],o[Js]=o["max"+$d]=n[Js],o[rn]=n[rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},gS=/([A-Z])/g,Ga=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ze.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(gS,"-$1").toLowerCase())}},lu=function(e){for(var t=pu.length,n=e.style,i=[],s=0;s<t;s++)i.push(pu[s],n[pu[s]]);return i.t=e,i},_S=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},mu={left:0,top:0},o0=function(e,t,n,i,s,a,o,l,c,u,d,h,f,g){Vn(e)&&(e=e(l)),bi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?hu("0"+e.substr(3),n):0));var p=f?f.time():0,m,_,v;if(f&&f.seek(0),isNaN(e)||(e=+e),al(e))f&&(e=Ze.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&fu(o,n,i,!0);else{Vn(t)&&(t=t(l));var M=(e||"0").split(" "),y,b,T,x;v=jn(t,l)||Tt,y=Dr(v)||{},(!y||!y.left&&!y.top)&&Ui(v).display==="none"&&(x=v.style.display,v.style.display="block",y=Dr(v),x?v.style.display=x:v.style.removeProperty("display")),b=hu(M[0],y[i.d]),T=hu(M[1]||"0",n),e=y[i.p]-c[i.p]-u+b+s-T,o&&fu(o,T,i,n-T<20||o._isStart&&T>20),n-=n-T}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var S=e+n,L=a._isStart;m="scroll"+i.d2,fu(a,S,i,L&&S>20||!L&&(d?Math.max(Tt[m],Ti[m]):a.parentNode[m])<=S+1),d&&(c=Dr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+hn))}return f&&v&&(m=Dr(v),f.seek(h),_=Dr(v),f._caScrollDist=m[i.p]-_[i.p],e=e/f._caScrollDist*h),f&&f.seek(p),f?e:Math.round(e)},xS=/(webkit|moz|length|cssText|inset)/i,l0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===Tt){e._stOrig=s.cssText,o=Ui(e);for(a in o)!+a&&!xS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ze.core.getCache(e).uncache=1,t.appendChild(e)}},R0=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},cu=function(e,t,n){var i={};i[t.p]="+="+n,Ze.set(e,i)},c0=function(e,t){var n=Ir(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,g={};c=c||n();var p=R0(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return p(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){lt.cache++,a.tween&&Nr()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=Ze.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},_n(e,"wheel",n.wheelHandler),it.isTouch&&_n(e,"touchmove",n.wheelHandler),s},it=(function(){function r(t,n){Ba||r.register(Ze)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),zd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!rl){this.update=this.refresh=this.kill=cr;return}n=n0(bi(n)||al(n)||n.nodeType?{trigger:n}:n,au);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,p=s.invalidateOnRefresh,m=s.anticipatePin,_=s.onScrubComplete,v=s.onSnapComplete,M=s.once,y=s.snap,b=s.pinReparent,T=s.pinSpacer,x=s.containerAnimation,S=s.fastScrollEnd,L=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?kn:nn,V=!d&&d!==0,O=jn(n.scroller||ht),ne=Ze.core.getCache(O),B=Ks(O),K=("pinType"in n?n.pinType:Lr(O,"pinType")||B&&"fixed")==="fixed",ie=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],H=V&&n.toggleActions.split(" "),Z="markers"in n?n.markers:au.markers,re=B?0:parseFloat(Ui(O)["border"+C.p2+Va])||0,I=this,oe=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Ce=lS(O,B,C),Ne=cS(O,B),J=0,ge=0,Ee=0,Q=Ir(O,C),W,k,z,q,fe,le,D,$,G,N,j,Y,A,P,F,se,U,Re,Ve,De,_e,ke,Me,ze,R,w,ae,we,ye,Le,Oe,ce,xe,Ie,X,pe,me,Fe,Ae;if(I._startClamp=I._endClamp=!1,I._dir=C,m*=45,I.scroller=O,I.scroll=x?x.time.bind(x):Q,q=Q(),ds&&Q.rec==null&&(Q.rec=q),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(d0=1,n.refreshPriority===-9999&&(dl=I)),ne.tweenScroll=ne.tweenScroll||{top:c0(O,nn),left:c0(O,kn)},I.tweenTo=W=ne.tweenScroll[C.p],I.scrubDuration=function(ve){xe=al(ve)&&ve,xe?ce?ce.duration(ve):ce=Ze.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:xe,paused:!0,onComplete:function(){return _&&_(I)}}):(ce&&ce.progress(1).kill(),ce=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(d),Le=0,l||(l=i.vars.id)),y&&((!qs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Tt.style&&Ze.set(B?[Tt,Ti]:O,{scrollBehavior:"auto"}),lt.forEach(function(ve){return Vn(ve)&&ve.target===(B?At.scrollingElement||Ti:O)&&(ve.smooth=!1)}),z=Vn(y.snapTo)?y.snapTo:y.snapTo==="labels"?hS(i):y.snapTo==="labelsDirectional"?fS(i):y.directional!==!1?function(ve,Ge){return Kd(y.snapTo)(ve,Gn()-ge<500?0:Ge.direction)}:Ze.utils.snap(y.snapTo),Ie=y.duration||{min:.1,max:2},Ie=qs(Ie)?ll(Ie.min,Ie.max):ll(Ie,Ie),X=Ze.delayedCall(y.delay||xe/2||.1,function(){var ve=Q(),Ge=Gn()-ge<500,Se=W.tween;if((Ge||Math.abs(I.getVelocity())<10)&&!Se&&!yu&&J!==ve){var qe=(ve-le)/P,pt=i&&!V?i.totalProgress():qe,st=Ge?0:(pt-Oe)/(Gn()-il)*1e3||0,Ft=Ze.utils.clamp(-qe,1-qe,Oa(st/2)*st/.185),jt=qe+(y.inertia===!1?0:Ft),Bt,Pt,bt=y,on=bt.onStart,It=bt.onInterrupt,Dn=bt.onComplete;if(Bt=z(jt,I),al(Bt)||(Bt=jt),Pt=Math.max(0,Math.round(le+Bt*P)),ve<=D&&ve>=le&&Pt!==ve){if(Se&&!Se._initted&&Se.data<=Oa(Pt-ve))return;y.inertia===!1&&(Ft=Bt-qe),W(Pt,{duration:Ie(Oa(Math.max(Oa(jt-pt),Oa(Bt-pt))*.185/st/.05||0)),ease:y.ease||"power3",data:Oa(Pt-ve),onInterrupt:function(){return X.restart(!0)&&It&&Ua(I,It)},onComplete:function(){I.update(),J=Q(),i&&!V&&(ce?ce.resetTo("totalProgress",Bt,i._tTime/i._tDur):i.progress(Bt)),Le=Oe=i&&!V?i.totalProgress():I.progress,v&&v(I),Dn&&Ua(I,Dn)}},ve,Ft*P,Pt-ve-Ft*P),on&&Ua(I,on,W.tween)}}else I.isActive&&J!==ve&&X.restart(!0)}).pause()),l&&(Vd[l]=I),h=I.trigger=jn(h||f!==!0&&f),Ae=h&&h._gsap&&h._gsap.stRevert,Ae&&(Ae=Ae(I)),f=f===!0?h:jn(f),bi(o)&&(o={targets:h,className:o}),f&&(g===!1||g===Ni||(g=!g&&f.parentNode&&f.parentNode.style&&Ui(f.parentNode).display==="flex"?!1:rn),I.pin=f,k=Ze.core.getCache(f),k.spacer?F=k.pinState:(T&&(T=jn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),k.spacerIsNative=!!T,T&&(k.spacerState=lu(T))),k.spacer=Re=T||At.createElement("div"),Re.classList.add("pin-spacer"),l&&Re.classList.add("pin-spacer-"+l),k.pinState=F=lu(f)),n.force3D!==!1&&Ze.set(f,{force3D:!0}),I.spacer=Re=k.spacer,ye=Ui(f),ze=ye[g+C.os2],De=Ze.getProperty(f),_e=Ze.quickSetter(f,C.a,hn),Od(f,Re,ye),U=lu(f)),Z){Y=qs(Z)?n0(Z,i0):i0,N=ou("scroller-start",l,O,C,Y,0),j=ou("scroller-end",l,O,C,Y,0,N),Ve=N["offset"+C.op.d2];var Ue=jn(Lr(O,"content")||O);$=this.markerStart=ou("start",l,Ue,C,Y,Ve,0,x),G=this.markerEnd=ou("end",l,Ue,C,Y,Ve,0,x),x&&(Fe=Ze.quickSetter([$,G],C.a,hn)),!K&&!(Yi.length&&Lr(O,"fixedMarkers")===!0)&&(uS(B?Tt:O),Ze.set([N,j],{force3D:!0}),w=Ze.quickSetter(N,C.a,hn),we=Ze.quickSetter(j,C.a,hn))}if(x){var Pe=x.vars.onUpdate,Be=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){I.update(0,0,1),Pe&&Pe.apply(x,Be||[])})}if(I.previous=function(){return ut[ut.indexOf(I)-1]},I.next=function(){return ut[ut.indexOf(I)+1]},I.revert=function(ve,Ge){if(!Ge)return I.kill(!0);var Se=ve!==!1||!I.enabled,qe=zn;Se!==I.isReverted&&(Se&&(pe=Math.max(Q(),I.scroll.rec||0),Ee=I.progress,me=i&&i.progress()),$&&[$,G,N,j].forEach(function(pt){return pt.style.display=Se?"none":"block"}),Se&&(zn=I,I.update(Se)),f&&(!b||!I.isActive)&&(Se?mS(f,Re,F):Od(f,Re,Ui(f),R)),Se||I.update(Se),zn=qe,I.isReverted=Se)},I.refresh=function(ve,Ge,Se,qe){if(!((zn||!I.enabled)&&!Ge)){if(f&&ve&&Oi){_n(r,"scrollEnd",T0);return}!ni&&oe&&oe(I),zn=I,W.tween&&!Se&&(W.tween.kill(),W.tween=0),ce&&ce.pause(),p&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ue){return ue.vars.immediateRender&&ue.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var pt=Ce(),st=Ne(),Ft=x?x.duration():ur(O,C),jt=P<=.01||!P,Bt=0,Pt=qe||0,bt=qs(Se)?Se.end:n.end,on=n.endTrigger||h,It=qs(Se)?Se.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),Dn=I.pinnedContainer=n.pinnedContainer&&jn(n.pinnedContainer,I),gi=h&&Math.max(0,ut.indexOf(I))||0,Yt=gi,en,ln,_i,Sa,cn,Zt,Pi,Fo,Rc,jr,E,ee,de;for(Z&&qs(Se)&&(ee=Ze.getProperty(N,C.p),de=Ze.getProperty(j,C.p));Yt-- >0;)Zt=ut[Yt],Zt.end||Zt.refresh(0,1)||(zn=I),Pi=Zt.pin,Pi&&(Pi===h||Pi===f||Pi===Dn)&&!Zt.isReverted&&(jr||(jr=[]),jr.unshift(Zt),Zt.revert(!0,!0)),Zt!==ut[Yt]&&(gi--,Yt--);for(Vn(It)&&(It=It(I)),It=Qg(It,"start",I),le=o0(It,h,pt,C,Q(),$,N,I,st,re,K,Ft,x,I._startClamp&&"_startClamp")||(f?-.001:0),Vn(bt)&&(bt=bt(I)),bi(bt)&&!bt.indexOf("+=")&&(~bt.indexOf(" ")?bt=(bi(It)?It.split(" ")[0]:"")+bt:(Bt=hu(bt.substr(2),pt),bt=bi(It)?It:(x?Ze.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,le):le)+Bt,on=h)),bt=Qg(bt,"end",I),D=Math.max(le,o0(bt||(on?"100% 0":Ft),on,pt,C,Q()+Bt,G,j,I,st,re,K,Ft,x,I._endClamp&&"_endClamp"))||-.001,Bt=0,Yt=gi;Yt--;)Zt=ut[Yt]||{},Pi=Zt.pin,Pi&&Zt.start-Zt._pinPush<=le&&!x&&Zt.end>0&&(en=Zt.end-(I._startClamp?Math.max(0,Zt.start):Zt.start),(Pi===h&&Zt.start-Zt._pinPush<le||Pi===Dn)&&isNaN(It)&&(Bt+=en*(1-Zt.progress)),Pi===f&&(Pt+=en));if(le+=Bt,D+=Bt,I._startClamp&&(I._startClamp+=Bt),I._endClamp&&!ni&&(I._endClamp=D||-.001,D=Math.min(D,ur(O,C))),P=D-le||(le-=.01)&&.001,jt&&(Ee=Ze.utils.clamp(0,1,Ze.utils.normalize(le,D,pe))),I._pinPush=Pt,$&&Bt&&(en={},en[C.a]="+="+Bt,Dn&&(en[C.p]="-="+Q()),Ze.set([$,G],en)),f&&!(Gd&&I.end>=ur(O,C)))en=Ui(f),Sa=C===nn,_i=Q(),ke=parseFloat(De(C.a))+Pt,!Ft&&D>1&&(E=(B?At.scrollingElement||Ti:O).style,E={style:E,value:E["overflow"+C.a.toUpperCase()]},B&&Ui(Tt)["overflow"+C.a.toUpperCase()]!=="scroll"&&(E.style["overflow"+C.a.toUpperCase()]="scroll")),Od(f,Re,en),U=lu(f),ln=Dr(f,!0),Fo=K&&Ir(O,Sa?kn:nn)(),g?(R=[g+C.os2,P+Pt+hn],R.t=Re,Yt=g===rn?_u(f,C)+P+Pt:0,Yt&&(R.push(C.d,Yt+hn),Re.style.flexBasis!=="auto"&&(Re.style.flexBasis=Yt+hn)),Ga(R),Dn&&ut.forEach(function(ue){ue.pin===Dn&&ue.vars.pinSpacing!==!1&&(ue._subPinOffset=!0)}),K&&Q(pe)):(Yt=_u(f,C),Yt&&Re.style.flexBasis!=="auto"&&(Re.style.flexBasis=Yt+hn)),K&&(cn={top:ln.top+(Sa?_i-le:Fo)+hn,left:ln.left+(Sa?Fo:_i-le)+hn,boxSizing:"border-box",position:"fixed"},cn[Zs]=cn["max"+Va]=Math.ceil(ln.width)+hn,cn[Js]=cn["max"+$d]=Math.ceil(ln.height)+hn,cn[Ni]=cn[Ni+hl]=cn[Ni+cl]=cn[Ni+fl]=cn[Ni+ul]="0",cn[rn]=en[rn],cn[rn+hl]=en[rn+hl],cn[rn+cl]=en[rn+cl],cn[rn+fl]=en[rn+fl],cn[rn+ul]=en[rn+ul],se=_S(F,cn,b),ni&&Q(0)),i?(Rc=i._initted,Ld(1),i.render(i.duration(),!0,!0),Me=De(C.a)-ke+P+Pt,ae=Math.abs(P-Me)>1,K&&ae&&se.splice(se.length-2,2),i.render(0,!0,!0),Rc||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ld(0)):Me=P,E&&(E.value?E.style["overflow"+C.a.toUpperCase()]=E.value:E.style.removeProperty("overflow-"+C.a));else if(h&&Q()&&!x)for(ln=h.parentNode;ln&&ln!==Tt;)ln._pinOffset&&(le-=ln._pinOffset,D-=ln._pinOffset),ln=ln.parentNode;jr&&jr.forEach(function(ue){return ue.revert(!1,!0)}),I.start=le,I.end=D,q=fe=ni?pe:Q(),!x&&!ni&&!ds&&(q<pe&&Q(pe),I.scroll.rec=0),I.revert(!1,!0),ge=Gn(),X&&(J=-1,X.restart(!0)),zn=0,i&&V&&(i._initted||me)&&i.progress()!==me&&i.progress(me||0,!0).render(i.time(),!0,!0),(jt||Ee!==I.progress||x||p||i&&!i._initted)&&(i&&!V&&(i._initted||Ee||i.vars.immediateRender!==!1)&&i.totalProgress(x&&le<-.001&&!Ee?Ze.utils.normalize(le,D,0):Ee,!0),I.progress=jt||(q-le)/P===Ee?0:Ee),f&&g&&(Re._pinOffset=Math.round(I.progress*Me)),ce&&ce.invalidate(),isNaN(ee)||(ee-=Ze.getProperty(N,C.p),de-=Ze.getProperty(j,C.p),cu(N,C,ee),cu($,C,ee-(qe||0)),cu(j,C,de),cu(G,C,de-(qe||0))),jt&&!ni&&I.update(),u&&!ni&&!A&&(A=!0,u(I),A=!1)}},I.getVelocity=function(){return(Q()-fe)/(Gn()-il)*1e3||0},I.endAnimation=function(){nl(I.callbackAnimation),i&&(ce?ce.progress(1):i.paused()?V||nl(i,I.direction<0,1):nl(i,i.reversed()))},I.labelToScroll=function(ve){return i&&i.labels&&(le||I.refresh()||le)+i.labels[ve]/i.duration()*P||0},I.getTrailing=function(ve){var Ge=ut.indexOf(I),Se=I.direction>0?ut.slice(0,Ge).reverse():ut.slice(Ge+1);return(bi(ve)?Se.filter(function(qe){return qe.vars.preventOverlaps===ve}):Se).filter(function(qe){return I.direction>0?qe.end<=le:qe.start>=D})},I.update=function(ve,Ge,Se){if(!(x&&!Se&&!ve)){var qe=ni===!0?pe:I.scroll(),pt=ve?0:(qe-le)/P,st=pt<0?0:pt>1?1:pt||0,Ft=I.progress,jt,Bt,Pt,bt,on,It,Dn,gi;if(Ge&&(fe=q,q=x?Q():qe,y&&(Oe=Le,Le=i&&!V?i.totalProgress():st)),m&&f&&!zn&&!nu&&Oi&&(!st&&le<qe+(qe-fe)/(Gn()-il)*m?st=1e-4:st===1&&D>qe+(qe-fe)/(Gn()-il)*m&&(st=.9999)),st!==Ft&&I.enabled){if(jt=I.isActive=!!st&&st<1,Bt=!!Ft&&Ft<1,It=jt!==Bt,on=It||!!st!=!!Ft,I.direction=st>Ft?1:-1,I.progress=st,on&&!zn&&(Pt=st&&!Ft?0:st===1?1:Ft===1?2:3,V&&(bt=!It&&H[Pt+1]!=="none"&&H[Pt+1]||H[Pt],gi=i&&(bt==="complete"||bt==="reset"||bt in i))),L&&(It||gi)&&(gi||d||!i)&&(Vn(L)?L(I):I.getTrailing(L).forEach(function(_i){return _i.endAnimation()})),V||(ce&&!zn&&!nu?(ce._dp._time-ce._start!==ce._time&&ce.render(ce._dp._time-ce._start),ce.resetTo?ce.resetTo("totalProgress",st,i._tTime/i._tDur):(ce.vars.totalProgress=st,ce.invalidate().restart())):i&&i.totalProgress(st,!!(zn&&(ge||ve)))),f){if(ve&&g&&(Re.style[g+C.os2]=ze),!K)_e(sl(ke+Me*st));else if(on){if(Dn=!ve&&st>Ft&&D+1>qe&&qe+1>=ur(O,C),b)if(!ve&&(jt||Dn)){var Yt=Dr(f,!0),en=qe-le;l0(f,Tt,Yt.top+(C===nn?en:0)+hn,Yt.left+(C===nn?0:en)+hn)}else l0(f,Re);Ga(jt||Dn?se:U),ae&&st<1&&jt||_e(ke+(st===1&&!Dn?Me:0))}}y&&!W.tween&&!zn&&!nu&&X.restart(!0),o&&(It||M&&st&&(st<1||!Dd))&&pl(o.targets).forEach(function(_i){return _i.classList[jt||M?"add":"remove"](o.className)}),a&&!V&&!ve&&a(I),on&&!zn?(V&&(gi&&(bt==="complete"?i.pause().totalProgress(1):bt==="reset"?i.restart(!0).pause():bt==="restart"?i.restart(!0):i[bt]()),a&&a(I)),(It||!Dd)&&(c&&It&&Ua(I,c),ie[Pt]&&Ua(I,ie[Pt]),M&&(st===1?I.kill(!1,1):ie[Pt]=0),It||(Pt=st===1?1:3,ie[Pt]&&Ua(I,ie[Pt]))),S&&!jt&&Math.abs(I.getVelocity())>(al(S)?S:2500)&&(nl(I.callbackAnimation),ce?ce.progress(1):nl(i,bt==="reverse"?1:!st,1))):V&&a&&!zn&&a(I)}if(we){var ln=x?qe/x.duration()*(x._caScrollDist||0):qe;w(ln+(N._isFlipped?1:0)),we(ln)}Fe&&Fe(-qe/x.duration()*(x._caScrollDist||0))}},I.enable=function(ve,Ge){I.enabled||(I.enabled=!0,_n(O,"resize",ol),B||_n(O,"scroll",Fa),oe&&_n(r,"refreshInit",oe),ve!==!1&&(I.progress=Ee=0,q=fe=J=Q()),Ge!==!1&&I.refresh())},I.getTween=function(ve){return ve&&W?W.tween:ce},I.setPositions=function(ve,Ge,Se,qe){if(x){var pt=x.scrollTrigger,st=x.duration(),Ft=pt.end-pt.start;ve=pt.start+Ft*ve/st,Ge=pt.start+Ft*Ge/st}I.refresh(!1,!1,{start:jg(ve,Se&&!!I._startClamp),end:jg(Ge,Se&&!!I._endClamp)},qe),I.update()},I.adjustPinSpacing=function(ve){if(R&&ve){var Ge=R.indexOf(C.d)+1;R[Ge]=parseFloat(R[Ge])+ve+hn,R[1]=parseFloat(R[1])+ve+hn,Ga(R)}},I.disable=function(ve,Ge){if(ve!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Ge||ce&&ce.pause(),pe=0,k&&(k.uncache=1),oe&&gn(r,"refreshInit",oe),X&&(X.pause(),W.tween&&W.tween.kill()&&(W.tween=0)),!B)){for(var Se=ut.length;Se--;)if(ut[Se].scroller===O&&ut[Se]!==I)return;gn(O,"resize",ol),B||gn(O,"scroll",Fa)}},I.kill=function(ve,Ge){I.disable(ve,Ge),ce&&!Ge&&ce.kill(),l&&delete Vd[l];var Se=ut.indexOf(I);Se>=0&&ut.splice(Se,1),Se===ti&&du>0&&ti--,Se=0,ut.forEach(function(qe){return qe.scroller===I.scroller&&(Se=1)}),Se||ni||ds||(I.scroll.rec=0),i&&(i.scrollTrigger=null,ve&&i.revert({kill:!1}),Ge||i.kill()),$&&[$,G,N,j].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),dl===I&&(dl=0),f&&(k&&(k.uncache=1),Se=0,ut.forEach(function(qe){return qe.pin===f&&Se++}),Se||(k.spacer=0)),n.onKill&&n.onKill(I)},ut.push(I),I.enable(!1,!1),Ae&&Ae(I),i&&i.add&&!P){var be=I.update;I.update=function(){I.update=be,lt.cache++,le||D||I.refresh()},Ze.delayedCall(.01,I.update),P=.01,le=D=0}else I.refresh();f&&pS()},r.register=function(n){return Ba||(Ze=n||x0(),_0()&&window.document&&r.enable(),Ba=rl),Ba},r.defaults=function(n){if(n)for(var i in n)au[i]=n[i];return au},r.disable=function(n,i){rl=0,ut.forEach(function(a){return a[i?"kill":"disable"](n)}),gn(ht,"wheel",Fa),gn(At,"scroll",Fa),clearInterval(tu),gn(At,"touchcancel",cr),gn(Tt,"touchstart",cr),ru(gn,At,"pointerdown,touchstart,mousedown",e0),ru(gn,At,"pointerup,touchend,mouseup",t0),gu.kill(),iu(gn);for(var s=0;s<lt.length;s+=3)su(gn,lt[s],lt[s+1]),su(gn,lt[s],lt[s+2])},r.enable=function(){if(ht=window,At=document,Ti=At.documentElement,Tt=At.body,Ze){if(pl=Ze.utils.toArray,ll=Ze.utils.clamp,zd=Ze.core.context||cr,Ld=Ze.core.suppressOverwrites||cr,qd=ht.history.scrollRestoration||"auto",Hd=ht.pageYOffset||0,Ze.core.globals("ScrollTrigger",r),Tt){rl=1,za=document.createElement("div"),za.style.height="100vh",za.style.position="absolute",C0(),oS(),Kt.register(Ze),r.isTouch=Kt.isTouch,fs=Kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),kd=Kt.isTouch===1,_n(ht,"wheel",Fa),Xd=[ht,At,Ti,Tt],Ze.matchMedia?(r.matchMedia=function(u){var d=Ze.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},Ze.addEventListener("matchMediaInit",function(){E0(),Qd()}),Ze.addEventListener("matchMediaRevert",function(){return w0()}),Ze.addEventListener("matchMedia",function(){Ys(0,1),js("matchMedia")}),Ze.matchMedia().add("(orientation: portrait)",function(){return Ud(),Ud})):console.warn("Requires GSAP 3.11.0 or later"),Ud(),_n(At,"scroll",Fa);var n=Tt.hasAttribute("style"),i=Tt.style,s=i.borderTopStyle,a=Ze.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Dr(Tt),nn.m=Math.round(o.top+nn.sc())||0,kn.m=Math.round(o.left+kn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),tu=setInterval(r0,250),Ze.delayedCall(.5,function(){return nu=0}),_n(At,"touchcancel",cr),_n(Tt,"touchstart",cr),ru(_n,At,"pointerdown,touchstart,mousedown",e0),ru(_n,At,"pointerup,touchend,mouseup",t0),Bd=Ze.utils.checkPrefix("transform"),pu.push(Bd),Ba=Gn(),gu=Ze.delayedCall(.2,Ys).pause(),ka=[At,"visibilitychange",function(){var u=ht.innerWidth,d=ht.innerHeight;At.hidden?($g=u,Kg=d):($g!==u||Kg!==d)&&ol()},At,"DOMContentLoaded",Ys,ht,"load",Ys,ht,"resize",ol],iu(_n),ut.forEach(function(u){return u.enable(0,1)}),l=0;l<lt.length;l+=3)su(gn,lt[l],lt[l+1]),su(gn,lt[l],lt[l+2])}else if(At){var c=function u(){r.enable(),At.removeEventListener("DOMContentLoaded",u)};At.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Dd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(tu)||(tu=i)&&setInterval(r0,i),"ignoreMobileResize"in n&&(kd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(iu(gn)||iu(_n,n.autoRefreshEvents||"none"),p0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=jn(n),a=lt.indexOf(s),o=Ks(s);~a&&lt.splice(a,o?6:2),i&&(o?Yi.unshift(ht,i,Tt,i,Ti,i):Yi.unshift(s,i))},r.clearMatchMedia=function(n){ut.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(bi(n)?jn(n):n).getBoundingClientRect(),o=a[s?Zs:Js]*i||0;return s?a.right-o>0&&a.left+o<ht.innerWidth:a.bottom-o>0&&a.top+o<ht.innerHeight},r.positionInViewport=function(n,i,s){bi(n)&&(n=jn(n));var a=n.getBoundingClientRect(),o=a[s?Zs:Js],l=i==null?o/2:i in xu?xu[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ht.innerWidth:(a.top+l)/ht.innerHeight},r.killAll=function(n){if(ut.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Qs.killAll||[];Qs={},i.forEach(function(s){return s()})}},r})();it.version="3.15.1";it.saveStyles=function(r){return r?pl(r).forEach(function(e){if(e&&e.style){var t=Mi.indexOf(e);t>=0&&Mi.splice(t,5),Mi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ze.core.getCache(e),zd())}}):Mi};it.revert=function(r,e){return Qd(!r,e)};it.create=function(r,e){return new it(r,e)};it.refresh=function(r){return r?ol(!0):(Ba||it.register())&&Ys(!0)};it.update=function(r){return++lt.cache&&Nr(r===!0?2:0)};it.clearScrollMemory=A0;it.maxScroll=function(r,e){return ur(r,e?kn:nn)};it.getScrollFunc=function(r,e){return Ir(jn(r),e?kn:nn)};it.getById=function(r){return Vd[r]};it.getAll=function(){return ut.filter(function(r){return r.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!Oi};it.snapDirectional=Kd;it.addEventListener=function(r,e){var t=Qs[r]||(Qs[r]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(r,e){var t=Qs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};it.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=Ze.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Vn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Vn(s)&&(s=s(),_n(it,"refresh",function(){return s=e.batchMax()})),pl(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(it.create(c))}),t};var u0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Fd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Kt.isTouch?" pinch-zoom":""):"none",e===Ti&&r(Tt,t)},uu={auto:1,scroll:1},yS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ze.core.getCache(s),o=Gn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(uu[(l=Ui(s)).overflowY]||uu[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Ks(s)&&(uu[(l=Ui(s)).overflowY]||uu[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},P0=function(e,t,n,i){return Kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&yS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&_n(At,Kt.eventTypes[0],f0,!1,!0)},onDisable:function(){return gn(At,Kt.eventTypes[0],f0,!0)}})},vS=/(input|label|select|textarea)/i,h0,f0=function(e){var t=vS.test(e.target.tagName);(t||h0)&&(e._gsapAllow=!0,h0=t)},SS=function(e){qs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=jn(e.target)||Ti,u=Ze.core.globals().ScrollSmoother,d=u&&u.get(),h=fs&&(e.content&&jn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=Ir(c,nn),g=Ir(c,kn),p=1,m=(Kt.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,_=0,v=Vn(i)?function(){return i(o)}:function(){return i||2.8},M,y,b=P0(c,e.type,!0,s),T=function(){return y=!1},x=cr,S=cr,L=function(){l=ur(c,nn),S=ll(fs?1:0,l),n&&(x=ll(0,ur(c,kn))),M=$s},C=function(){h._gsap.y=sl(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},V=function(){if(y){requestAnimationFrame(T);var Z=sl(o.deltaY/2),re=S(f.v-Z);if(h&&re!==f.v+f.offset){f.offset=re-f.v;var I=sl((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",h._gsap.y=I+"px",f.cacheID=lt.cache,Nr()}return!0}f.offset&&C(),y=!0},O,ne,B,K,ie=function(){L(),O.isActive()&&O.vars.scrollY>l&&(f()>l?O.progress(1)&&f(l):O.resetTo("scrollY",l))};return h&&Ze.set(h,{y:"+=0"}),e.ignoreCheck=function(H){return fs&&H.type==="touchmove"&&V(H)||p>1.05&&H.type!=="touchstart"||o.isGesturing||H.touches&&H.touches.length>1},e.onPress=function(){y=!1;var H=p;p=sl((ht.visualViewport&&ht.visualViewport.scale||1)/m),O.pause(),H!==p&&Fd(c,p>1.01?!0:n?!1:"x"),ne=g(),B=f(),L(),M=$s},e.onRelease=e.onGestureStart=function(H,Z){if(f.offset&&C(),!Z)K.restart(!0);else{lt.cache++;var re=v(),I,oe;n&&(I=g(),oe=I+re*.05*-H.velocityX/.227,re*=u0(g,I,oe,ur(c,kn)),O.vars.scrollX=x(oe)),I=f(),oe=I+re*.05*-H.velocityY/.227,re*=u0(f,I,oe,ur(c,nn)),O.vars.scrollY=S(oe),O.invalidate().duration(re).play(.01),(fs&&O.vars.scrollY>=l||I>=l-1)&&Ze.to({},{onUpdate:ie,duration:re})}a&&a(H)},e.onWheel=function(){O._ts&&O.pause(),Gn()-_>1e3&&(M=0,_=Gn())},e.onChange=function(H,Z,re,I,oe){if($s!==M&&L(),Z&&n&&g(x(I[2]===Z?ne+(H.startX-H.x):g()+Z-I[1])),re){f.offset&&C();var Ce=oe[2]===re,Ne=Ce?B+H.startY-H.y:f()+re-oe[1],J=S(Ne);Ce&&Ne!==J&&(B+=J-Ne),f(J)}(re||Z)&&Nr()},e.onEnable=function(){Fd(c,n?!1:"x"),it.addEventListener("refresh",ie),_n(ht,"resize",ie),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),b.enable()},e.onDisable=function(){Fd(c,!0),gn(ht,"resize",ie),it.removeEventListener("refresh",ie),b.kill()},e.lockAxis=e.lockAxis!==!1,o=new Kt(e),o.iOS=fs,fs&&!f()&&f(1),fs&&Ze.ticker.add(cr),K=o._dc,O=Ze.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:R0(f,f(),function(){return O.pause()})},onUpdate:Nr,onComplete:K.vars.onComplete}),o};it.sort=function(r){if(Vn(r))return ut.sort(r);var e=ht.pageYOffset||0;return it.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ht.innerHeight}),ut.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};it.observe=function(r){return new Kt(r)};it.normalizeScroll=function(r){if(typeof r>"u")return ei;if(r===!0&&ei)return ei.enable();if(r===!1){ei&&ei.kill(),ei=r;return}var e=r instanceof Kt?r:SS(r);return ei&&ei.target===e.target&&ei.kill(),Ks(e.target)&&(ei=e),e};it.core={_getVelocityProp:eu,_inputObserver:P0,_scrollers:lt,_proxies:Yi,bridge:{ss:function(){Oi||js("scrollStart"),Oi=Gn()},ref:function(){return zn}}};x0()&&Ze.registerPlugin(it);function I0(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function MS(r,e,t){return e&&I0(r.prototype,e),t&&I0(r,t),r}var wt,vu,Hn,Ur,Ha,hr,bS,ea,L0,ot,fr,Su,D0,N0,U0,O0,F0=function(){return typeof window<"u"},B0=function(){return wt||F0()&&(wt=window.gsap)&&wt.registerPlugin&&wt};var TS=function(e){return Math.round(e*1e5)/1e5||0},ps=function(e){return ot.maxScroll(e||Hn)},wS=function(e,t){var n=e.parentNode||Ha,i=e.getBoundingClientRect(),s=n.getBoundingClientRect(),a=s.top-i.top,o=s.bottom-i.bottom,l=(Math.abs(a)>Math.abs(o)?a:o)/(1-t),c=-l*t,u,d;return l>0&&(u=s.height/(Hn.innerHeight+s.height),d=u===.5?s.height*2:Math.min(s.height,Math.abs(-l*u/(2*u-1)))*2*(t||1),c+=t?-d*t:-d/2,l+=d),{change:l,offset:c}},ES=function(e){var t=Ur.querySelector(".ScrollSmoother-wrapper");return t||(t=Ur.createElement("div"),t.classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t},ms=(function(){function r(e){var t=this;vu||r.register(wt)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},fr&&fr.kill(),fr=this,U0(this);var n=e,i=n.smoothTouch,s=n.onUpdate,a=n.onStop,o=n.smooth,l=n.onFocusIn,c=n.normalizeScroll,u=n.wholePixels,d,h,f,g,p,m,_,v,M,y,b,T,x,S,L=this,C=e.effectsPrefix||"",V=ot.getScrollFunc(Hn),O=ot.isTouch===1?i===!0?.8:parseFloat(i)||0:o===0||o===!1?0:parseFloat(o)||.8,ne=O&&+e.speed||1,B=0,K=0,ie=1,H=D0(0),Z=function(){return H.update(-B)},re={y:0},I=function(){return d.style.overflow="visible"},oe,Ce=function(A){A.update();var P=A.getTween();P&&(P.pause(),P._time=P._dur,P._tTime=P._tDur),oe=!1,A.animation.progress(A.progress,!0)},Ne=function(A,P){(A!==B&&!y||P)&&(u&&(A=Math.round(A)),O&&(d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+A+", 0, 1)",d._gsap.y=A+"px"),K=A-B,B=A,ot.isUpdating||r.isRefreshing||ot.update())},J=function(A){return arguments.length?(A<0&&(A=0),re.y=-A,oe=!0,y?B=-A:Ne(-A),ot.isRefreshing?g.update():V(A/ne),this):-B},ge=typeof ResizeObserver<"u"&&e.autoResize!==!1&&new ResizeObserver(function(){if(!ot.isRefreshing){var Y=ps(h)*ne;Y<-B&&J(Y),O0.restart(!0)}}),Ee,Q=function(A){h.scrollTop=0,!(A.target.contains&&A.target.contains(h)||l&&l(t,A)===!1)&&(ot.isInViewport(A.target)||A.target===Ee||t.scrollTo(A.target,!1,"center center"),Ee=A.target)},W=function(A,P){if(A<P.start)return A;var F=isNaN(P.ratio)?1:P.ratio,se=P.end-P.start,U=A-P.start,Re=P.offset||0,Ve=P.pins||[],De=Ve.offset||0,_e=P._startClamp&&P.start<=0||P.pins&&P.pins.offset?0:P._endClamp&&P.end===ps()?1:.5;return Ve.forEach(function(ke){se-=ke.distance,ke.nativeStart<=A&&(U-=ke.distance)}),De&&(U*=(se-De/F)/se),A+(U-Re*_e)/F-U},k=function Y(A,P,F){F||(A.pins.length=A.pins.offset=0);var se=A.pins,U=A.markers,Re,Ve,De,_e,ke,Me,ze,R;for(ze=0;ze<P.length;ze++)if(R=P[ze],A.trigger&&R.trigger&&A!==R&&(R.trigger===A.trigger||R.pinnedContainer===A.trigger||A.trigger.contains(R.trigger))&&(ke=R._startNative||R._startClamp||R.start,Me=R._endNative||R._endClamp||R.end,De=W(ke,A),_e=R.pin&&Me>0?De+(Me-ke):W(Me,A),R.setPositions(De,_e,!0,(R._startClamp?Math.max(0,De):De)-ke),R.markerStart&&U.push(wt.quickSetter([R.markerStart,R.markerEnd],"y","px")),R.pin&&R.end>0&&!F)){if(Re=R.end-R.start,Ve=A._startClamp&&R.start<0,Ve){if(A.start>0){A.setPositions(0,A.end+(A._startNative-A.start),!0),Y(A,P);return}Re+=R.start,se.offset=-R.start}se.push({start:R.start,nativeStart:ke,end:R.end,distance:Re,trig:R}),A.setPositions(A.start,A.end+(Ve?-R.start:Re),!0)}},z=function(A,P){p.forEach(function(F){return k(F,A,P)})},q=function(){Ha=Ur.documentElement,hr=Ur.body,I(),requestAnimationFrame(I),p&&(ot.getAll().forEach(function(A){A._startNative=A.start,A._endNative=A.end}),p.forEach(function(A){var P=A._startClamp||A.start,F=A.autoSpeed?Math.min(ps(),A.end):P+Math.abs((A.end-P)/A.ratio),se=F-A.end;if(P-=se/2,F-=se/2,P>F){var U=P;P=F,F=U}A._startClamp&&P<0?(F=A.ratio<0?ps():A.end/A.ratio,se=F-A.end,P=0):(A.ratio<0||A._endClamp&&F>=ps())&&(F=ps(),P=A.ratio<0||A.ratio>1?0:F-(F-A.start)/A.ratio,se=(F-P)*A.ratio-(A.end-A.start)),A.offset=se||1e-4,A.pins.length=A.pins.offset=0,A.setPositions(P,F,!0)}),z(ot.sort())),H.reset()},fe=function(){return ot.addEventListener("refresh",q)},le=function(){return p&&p.forEach(function(A){return A.vars.onRefresh(A)})},D=function(){return p&&p.forEach(function(A){return A.vars.onRefreshInit(A)}),le},$=function(A,P,F,se){return function(){var U=typeof P=="function"?P(F,se):P;U||U===0||(U=se.getAttribute("data-"+C+A)||(A==="speed"?1:0)),se.setAttribute("data-"+C+A,U);var Re=(U+"").substr(0,6)==="clamp(";return{clamp:Re,value:Re?U.substr(6,U.length-7):U}}},G=function(A,P,F,se,U){U=(typeof U=="function"?U(se,A):U)||0;var Re=$("speed",P,se,A),Ve=$("lag",F,se,A),De=wt.getProperty(A,"y"),_e=A._gsap,ke,Me,ze,R,w,ae,we=[],ye=function(){P=Re(),F=parseFloat(Ve().value),ke=parseFloat(P.value)||1,ze=P.value==="auto",w=ze||Me&&Me._startClamp&&Me.start<=0||we.offset?0:Me&&Me._endClamp&&Me.end===ps()?1:.5,R&&R.kill(),R=F&&wt.to(A,{ease:Su,overwrite:!1,y:"+=0",duration:F}),Me&&(Me.ratio=ke,Me.autoSpeed=ze)},Le=function(){_e.y=De+"px",_e.renderTransform(1),ye()},Oe=[],ce=0,xe=function(X){if(ze){Le();var pe=wS(A,L0(0,1,-X.start/(X.end-X.start)));ce=pe.change,ae=pe.offset}else ae=we.offset||0,ce=(X.end-X.start-ae)*(1-ke);we.forEach(function(me){return ce-=me.distance*(1-ke)}),X.offset=ce||.001,X.vars.onUpdate(X),R&&R.progress(1)};return ye(),(ke!==1||ze||R)&&(Me=ot.create({trigger:ze?A.parentNode:A,start:function(){return P.clamp?"clamp(top bottom+="+U+")":"top bottom+="+U},end:function(){return P.value<0?"max":P.clamp?"clamp(bottom top-="+U+")":"bottom top-="+U},scroller:h,scrub:!0,refreshPriority:-999,onRefreshInit:Le,onRefresh:xe,onKill:function(X){var pe=p.indexOf(X);pe>=0&&p.splice(pe,1),Le()},onUpdate:function(X){var pe=De+ce*(X.progress-w),me=we.length,Fe=0,Ae,Ue,Pe;if(X.offset){if(me){for(Ue=-B,Pe=X.end;me--;){if(Ae=we[me],Ae.trig.isActive||Ue>=Ae.start&&Ue<=Ae.end){R&&(Ae.trig.progress+=Ae.trig.direction<0?.001:-.001,Ae.trig.update(0,0,1),R.resetTo("y",parseFloat(_e.y),-K,!0),ie&&R.progress(1));return}Ue>Ae.end&&(Fe+=Ae.distance),Pe-=Ae.distance}pe=De+Fe+ce*((wt.utils.clamp(X.start,X.end,Ue)-X.start-Fe)/(Pe-X.start)-w)}Oe.length&&!ze&&Oe.forEach(function(Be){return Be(pe-Fe)}),pe=TS(pe+ae),R?(R.resetTo("y",pe,-K,!0),ie&&R.progress(1)):(_e.y=pe+"px",_e.renderTransform(1))}}}),xe(Me),wt.core.getCache(Me.trigger).stRevert=D,Me.startY=De,Me.pins=we,Me.markers=Oe,Me.ratio=ke,Me.autoSpeed=ze,A.style.willChange="transform"),Me};fe(),ot.addEventListener("killAll",fe),wt.delayedCall(.5,function(){return ie=0}),this.scrollTop=J,this.scrollTo=function(Y,A,P){var F=wt.utils.clamp(0,ps(),isNaN(Y)?t.offset(Y,P,!!A&&!y):+Y);A?y?wt.to(t,{duration:O,scrollTop:F,overwrite:"auto",ease:Su}):V(F):J(F)},this.offset=function(Y,A,P){Y=ea(Y)[0];var F=Y.style.cssText,se=ot.create({trigger:Y,start:A||"top top"}),U;return p&&(ie?ot.refresh():z([se],!0)),U=se.start/(P?ne:1),se.kill(!1),Y.style.cssText=F,wt.core.getCache(Y).uncache=1,U};function N(){return f=d.clientHeight,d.style.overflow="visible",hr.style.height=Hn.innerHeight+(f-Hn.innerHeight)/ne+"px",f-Hn.innerHeight}this.content=function(Y){if(arguments.length){var A=ea(Y||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||hr.children[0];return A!==d&&(d=A,M=d.getAttribute("style")||"",ge&&ge.observe(d),wt.set(d,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),O||wt.set(d,{clearProps:"transform"})),this}return d},this.wrapper=function(Y){return arguments.length?(h=ea(Y||"#smooth-wrapper")[0]||ES(d),v=h.getAttribute("style")||"",N(),wt.set(h,O?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):h},this.effects=function(Y,A){var P;if(p||(p=[]),!Y)return p.slice(0);Y=ea(Y),Y.forEach(function(ke){for(var Me=p.length;Me--;)p[Me].trigger===ke&&p[Me].kill()}),A=A||{};var F=A,se=F.speed,U=F.lag,Re=F.effectsPadding,Ve=[],De,_e;for(De=0;De<Y.length;De++)_e=G(Y[De],se,U,De,Re),_e&&Ve.push(_e);return(P=p).push.apply(P,Ve),A.refresh!==!1&&ot.refresh(),Ve},this.sections=function(Y,A){var P;if(m||(m=[]),!Y)return m.slice(0);var F=ea(Y).map(function(se){return ot.create({trigger:se,start:"top 120%",end:"bottom -20%",onToggle:function(Re){se.style.opacity=Re.isActive?"1":"0",se.style.pointerEvents=Re.isActive?"all":"none"}})});return A&&A.add?(P=m).push.apply(P,F):m=F.slice(0),F},this.content(e.content),this.wrapper(e.wrapper),this.render=function(Y){return Ne(Y||Y===0?Y:B)},this.getVelocity=function(){return H.getVelocity(-B)},ot.scrollerProxy(h,{scrollTop:J,scrollHeight:function(){return N()&&hr.scrollHeight},fixedMarkers:e.fixedMarkers!==!1&&!!O,content:d,getBoundingClientRect:function(){return{top:0,left:0,width:Hn.innerWidth,height:Hn.innerHeight}}}),ot.defaults({scroller:h});var j=ot.getAll().filter(function(Y){return Y.scroller===Hn||Y.scroller===h});j.forEach(function(Y){return Y.revert(!0,!0)}),g=ot.create({animation:wt.fromTo(re,{y:function(){return S=0,0}},{y:function(){return S=1,-N()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(S){var A=oe;A&&(Ce(g),re.y=B),Ne(re.y,A),Z(),s&&!y&&s(L)}}}),onRefreshInit:function(A){if(!r.isRefreshing){if(r.isRefreshing=!0,p){var P=ot.getAll().filter(function(se){return!!se.pin});p.forEach(function(se){se.vars.pinnedContainer||P.forEach(function(U){if(U.pin.contains(se.trigger)){var Re=se.vars;Re.pinnedContainer=U.pin,se.vars=null,se.init(Re,se.animation)}})})}var F=A.getTween();x=F&&F._end>F._dp._time,T=B,re.y=0,O&&(ot.isTouch===1&&(h.style.position="absolute"),h.scrollTop=0,ot.isTouch===1&&(h.style.position="fixed"))}},onRefresh:function(A){A.animation.invalidate(),re.y=0,A.setPositions(A.start,N()/ne),x||Ce(A),re.y=-V()*ne,Ne(re.y),ie||(x&&(oe=!1),A.animation.progress(wt.utils.clamp(0,1,T/ne/-A.end))),x&&(A.progress-=.001,A.update()),r.isRefreshing=!1},id:"ScrollSmoother",scroller:Hn,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return N()/ne},onScrubComplete:function(){H.reset(),a&&a(t)},scrub:O||!0}),this.smooth=function(Y){return arguments.length&&(O=Y||0,ne=O&&+e.speed||1,g.scrubDuration(Y)),g.getTween()?g.getTween().duration():0},g.getTween()&&(g.getTween().vars.ease=e.ease||Su),this.scrollTrigger=g,e.effects&&this.effects(e.effects===!0?"[data-"+C+"speed], [data-"+C+"lag]":e.effects,{effectsPadding:e.effectsPadding,refresh:!1}),e.sections&&this.sections(e.sections===!0?"[data-section]":e.sections),j.forEach(function(Y){Y.vars.scroller=h,Y.revert(!1,!0),Y.init(Y.vars,Y.animation)}),this.paused=function(Y,A){return arguments.length?(!!y!==Y&&(Y?(g.getTween()&&g.getTween().pause(),V(-B/ne),H.reset(),b=ot.normalizeScroll(),b&&b.disable(),y=ot.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return J(-B)}}),y.nested=N0(Ha,"wheel,touch,scroll",!0,A!==!1)):(y.nested.kill(),y.kill(),y=0,b&&b.enable(),g.progress=(-B/ne-g.start)/(g.end-g.start),Ce(g))),this):!!y},this.kill=this.revert=function(){t.paused(!1),Ce(g),g.kill();for(var Y=(p||[]).concat(m||[]),A=Y.length;A--;)Y[A].kill();ot.scrollerProxy(h),ot.removeEventListener("killAll",fe),ot.removeEventListener("refresh",q),h.style.cssText=v,d.style.cssText=M;var P=ot.defaults({});P&&P.scroller===h&&ot.defaults({scroller:Hn}),t.normalizer&&ot.normalizeScroll(!1),clearInterval(_),fr=null,ge&&ge.disconnect(),hr.style.removeProperty("height"),Hn.removeEventListener("focusin",Q)},this.refresh=function(Y,A){return g.refresh(Y,A)},c&&(this.normalizer=ot.normalizeScroll(c===!0?{debounce:!0,content:!O&&d}:c)),ot.config(e),"scrollBehavior"in Hn.getComputedStyle(hr)&&wt.set([hr,Ha],{scrollBehavior:"auto"}),Hn.addEventListener("focusin",Q),_=setInterval(Z,250),Ur.readyState==="loading"||requestAnimationFrame(function(){return ot.refresh()})}return r.register=function(t){return vu||(wt=t||B0(),F0()&&window.document&&(Hn=window,Ur=document,Ha=Ur.documentElement,hr=Ur.body),wt&&(ea=wt.utils.toArray,L0=wt.utils.clamp,Su=wt.parseEase("expo"),U0=wt.core.context||function(){},ot=wt.core.globals().ScrollTrigger,wt.core.globals("ScrollSmoother",r),hr&&ot&&(O0=wt.delayedCall(.2,function(){return ot.isRefreshing||fr&&fr.refresh()}).pause(),bS=[Hn,Ur,Ha,hr],D0=ot.core._getVelocityProp,N0=ot.core._inputObserver,r.refresh=ot.refresh,vu=1))),vu},MS(r,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),r})();ms.version="3.15.1";ms.create=function(r){return fr&&r&&fr.content()===ea(r.content)[0]?fr:new ms(r)};ms.get=function(){return fr};B0()&&wt.registerPlugin(ms);var gl,_l,k0=typeof Symbol=="function"?Symbol():"_split",ep,AS=()=>ep||Xa.register(window.gsap),z0=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,xl=r=>r?typeof r=="string"?xl(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...xl(t)):e.push(t),e),[]):[r]:[],G0=r=>xl(r).filter(e=>e&&e.nodeType===1),Mu=[],jd=function(){},CS={add:r=>r()},RS=/\s+/g,V0=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),bu={left:0,top:0,width:0,height:0},PS=(r,e)=>{for(;++e<r.length&&r[e]===bu;);return r[e]||bu},H0=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},W0=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||Mu),n=r.length,i,s,a,o;if(t.size)for(;--n>-1;){s=r[n];for(a of t)if(a.startsWith(s)&&a.length>s.length){for(i=0,o=s;a.startsWith(o+=r[n+ ++i])&&o.length<a.length;);if(i&&o.length===a.length){r[n]=a,r.splice(n+1,i);break}}}}return r},X0=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Wa=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),tp=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:a=!1}=e,o=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let d=document.createElement(i),h=t.length+1;return n&&(d.className=n+(l?" "+n+h:"")),a&&d.style.setProperty("--"+r,h+""),s!=="none"&&d.setAttribute("aria-hidden","true"),i!=="span"&&(d.style.position="relative",d.style.display=o),d.textContent=u,t.push(d),d};return l&&(n=n.replace("++","")),c.collection=t,c},IS=(r,e,t,n)=>{let i=tp("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(a,o)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[a]);a<o;a++)l.appendChild(e[a]);l.normalize()}},q0=(r,e,t,n,i,s,a,o,l,c)=>{var u;let d=Array.from(r.childNodes),h=0,{wordDelimiter:f,reduceWhiteSpace:g=!0,prepareText:p}=e,m=r.getBoundingClientRect(),_=m,v=!g&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",M=s&&c&&window.getComputedStyle(r).direction==="rtl",y=0,b=t.collection,T,x,S,L,C,V,O,ne,B,K,ie,H,Z,re,I,oe,Ce,Ne;for(typeof f=="object"?(S=f.delimiter||f,x=f.replaceWith||""):x=f===""?"":f||" ",T=x!==" ";h<d.length;h++)if(L=d[h],L.nodeType===3){for(I=L.textContent||"",g?I=I.replace(RS," "):v&&(I=I.replace(/\n/g,x+`
`)),p&&(I=p(I,r)),L.textContent=I,C=x||S?I.split(S||x):I.match(o)||Mu,Ce=C[C.length-1],ne=T?Ce.slice(-1)===" ":!Ce,Ce||C.pop(),_=m,O=T?C[0].charAt(0)===" ":!C[0],O&&Wa(" ",r,L),C[0]||C.shift(),W0(C,l),s&&c||(L.textContent=""),B=1;B<=C.length;B++)if(oe=C[B-1],!g&&v&&oe.charAt(0)===`
`&&((u=L.previousSibling)==null||u.remove(),Wa(document.createElement("br"),r,L),oe=oe.slice(1)),!g&&oe==="")Wa(x,r,L);else if(oe===" ")r.insertBefore(document.createTextNode(" "),L);else{if(T&&oe.charAt(0)===" "&&Wa(" ",r,L),y&&B===1&&!O&&b.indexOf(y.parentNode)>-1?(V=b[b.length-1],V.appendChild(document.createTextNode(n?"":oe))):(V=t(n?"":oe),Wa(V,r,L),y&&B===1&&!O&&V.insertBefore(y,V.firstChild)),n){if(ie=z0?W0([...z0.segment(oe)].map(J=>J.segment),l):oe.match(o)||Mu,l){let J=oe.match(l);J&&J.some(ge=>ie.indexOf(ge)<0)&&(ie=oe.match(o)||Mu)}for(Ne=0;Ne<ie.length;Ne++)V.appendChild(ie[Ne]===" "?document.createTextNode(" "):n(ie[Ne]))}if(s&&c){if(I=L.textContent=I.substring(oe.length+1,I.length),K=V.getBoundingClientRect(),K.top>_.top&&(M?K.left>=_.left:K.left<=_.left)){for(H=r.cloneNode(),Z=r.childNodes[0];Z&&Z!==V;)re=Z,Z=Z.nextSibling,H.appendChild(re);r.parentNode.insertBefore(H,r),i&&X0(H)}_=K}(B<C.length||ne)&&Wa(B>=C.length?" ":T&&oe.slice(-1)===" "?" "+x:x,r,L)}r.removeChild(L),y=0}else L.nodeType===1&&(a&&a.indexOf(L)>-1?(b.indexOf(L.previousSibling)>-1&&b[b.length-1].appendChild(L),y=L):(q0(L,e,t,n,i,s,a,o,l,!0),y=0),i&&X0(L))},Y0=class Z0{constructor(e,t){this.isSplit=!1,AS(),this.elements=G0(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(s=>{var a;t.overwrite!==!1&&((a=s[k0])==null||a._data.orig.filter(({element:o})=>o===s).forEach(H0)),s[k0]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i=()=>{let s=n.length,a;for(;s--;){a=n[s];let o=a.element.offsetWidth;if(o!==a.width){a.width=o,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(i,200)})},jd(this),this.split(t)}split(e){return(this._ctx||CS).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:a,autoSplit:o=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,d=t.indexOf("chars")>-1,h=t.indexOf("words")>-1,f=d&&!h&&!u,g=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),p=g?new RegExp(g.source+"|"+V0.source,"gu"):V0,m=!!e.ignore&&G0(e.ignore),{orig:_,animTime:v,obs:M}=this._data,y;(d||h||u)&&(this.elements.forEach((b,T)=>{_[T]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},n==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):n==="hidden"&&b.setAttribute("aria-hidden","true");let x=[],S=[],L=[],C=d?tp("char",e,x):null,V=tp("word",e,S),O,ne,B,K;if(q0(b,e,V,C,f,i&&(u||f),m,p,g,!1),u){let ie=xl(b.childNodes),H=IS(b,ie,e,L),Z,re=[],I=0,oe=window.getComputedStyle(b).direction==="rtl",Ce=ie.map(ge=>ge.nodeType===1?ge.getBoundingClientRect():bu),Ne=bu,J;for(O=0;O<ie.length;O++)Z=ie[O],Z.nodeType===1&&(Z.nodeName==="BR"?((!O||ie[O-1].nodeName!=="BR")&&(re.push(Z),H(I,O+1)),I=O+1,Ne=PS(Ce,O)):(J=Ce[O],O&&J.top>Ne.top&&(oe?J.left+J.width>Ne.left+1:J.left<Ne.left+Ne.width-1)&&(H(I,O),I=O),Ne=J));I<O&&H(I,O),re.forEach(ge=>{var Ee;return(Ee=ge.parentNode)==null?void 0:Ee.removeChild(ge)})}if(!h){for(O=0;O<S.length;O++)if(ne=S[O],d||!ne.nextSibling||ne.nextSibling.nodeType!==3)if(s&&!u){for(B=document.createElement("span"),B.style.whiteSpace="nowrap";ne.firstChild;)B.appendChild(ne.firstChild);ne.replaceWith(B)}else ne.replaceWith(...ne.childNodes);else K=ne.nextSibling,K&&K.nodeType===3&&(K.textContent=(ne.textContent||"")+(K.textContent||""),ne.remove());S.length=0,b.normalize()}this.lines.push(...L),this.words.push(...S),this.chars.push(...x)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let T=b.cloneNode();return b.replaceWith(T),T.appendChild(b),b.className&&(T.className=b.className.trim().split(" ").map(x=>x+"-mask").join(" ")),T.style.overflow="clip",T.style.verticalAlign="top",T}))),this.isSplit=!0,_l&&u&&o&&_l.addEventListener("loadingdone",this._split),(y=a&&a(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),u&&o&&this.elements.forEach((b,T)=>{_[T].width=b.offsetWidth,M&&M.observe(b)})}),this}kill(){let{obs:e,t}=this._data;e&&e.disconnect(),clearTimeout(t),_l?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(H0),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new Z0(e,t)}static register(e){gl=gl||e||window.gsap,gl&&(xl=gl.utils.toArray,jd=gl.core.context||jd),!ep&&window.innerWidth>0&&(_l=document.fonts,ep=!0)}};Y0.version="3.15.1";var Xa=Y0;var N_=0,Hp=1,U_=2;var ac=1,O_=2,wo=3,As=0,Rn=1,Pn=2,Zr=0,Eo=1,ji=2,Wp=3,Xp=4,F_=5;var ga=100,B_=101,k_=102,z_=103,G_=104,V_=200,H_=201,W_=202,X_=203,qp=204,Yp=205,q_=206,Y_=207,Z_=208,J_=209,$_=210,K_=211,Q_=212,j_=213,ex=214,ih=0,rh=1,sh=2,oo=3,ah=4,oh=5,lh=6,ch=7,Zp=0,tx=1,nx=2,Gi=0,oc=1,lc=2,cc=3,uc=4,hc=5,fc=6,dc=7;var Jp=300,_a=301,Ao=302,kh=303,zh=304,lo=1e3,Bi=1001,co=1002,Sn=1003,ix=1004;var pc=1005;var ri=1006,Gh=1007;var Jr=1008;var di=1009,$p=1010,Kp=1011,Co=1012,Vh=1013,er=1014,Vi=1015,In=1016,Hh=1017,Wh=1018,xa=1020,Qp=35902,jp=35899,em=1021,tm=1022,tr=1023,Wr=1026,$r=1027,Xh=1028,qh=1029,Cs=1030,Yh=1031;var Zh=1033,mc=33776,gc=33777,_c=33778,xc=33779,Jh=35840,$h=35841,Kh=35842,Qh=35843,jh=36196,ef=37492,tf=37496,nf=37488,rf=37489,yc=37490,sf=37491,af=37808,of=37809,lf=37810,cf=37811,uf=37812,hf=37813,ff=37814,df=37815,pf=37816,mf=37817,gf=37818,_f=37819,xf=37820,yf=37821,vf=36492,Sf=36494,Mf=36495,bf=36283,Tf=36284,vc=36285,wf=36286;var Pl=2300,uh=2301,eh=2302,Cp=2303,Rp=2400,Pp=2401,Ip=2402;var rx=3200;var Ef=0,sx=1,Kr="",ii="srgb",Il="srgb-linear",Ll="linear",vt="srgb";var th=7680;var ax=519,ox=512,lx=513,cx=514,nm=515,ux=516,hx=517,im=518,rm=519,fx=35044;var sm="300 es",ki=2e3,uo=2001;function LS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function DS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Dl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dx(){let r=Dl("canvas");return r.style.display="block",r}var J0={},ho=null;function am(...r){let e="THREE."+r.shift();ho?ho("log",e,...r):console.log(e,...r)}function px(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function nt(...r){r=px(r);let e="THREE."+r.shift();if(ho)ho("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function rt(...r){r=px(r);let e="THREE."+r.shift();if(ho)ho("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Al(...r){let e=r.join(" ");e in J0||(J0[e]=!0,nt(...r))}function mx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var gx={[ih]:ih,[sh]:lh,[ah]:ah,[oo]:oh,[rh]:rh,[lh]:sh,[ch]:ch,[oh]:oo},mr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var nh=Math.PI/180,hh=180/Math.PI;function Ro(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[n&255]+Wn[n>>8&255]+Wn[n>>16&255]+Wn[n>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function NS(r,e){return(r%e+e)%e}function np(r,e,t){return(1-t)*r+t*e}function _x(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function om(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function US(r,e){if(e.constructor===Float32Array)return r;let t=om(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function OS(r,e){if(e.constructor===Float32Array)return r;let t=om(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}var dm=class dm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dm.prototype.isVector2=!0;var Te=dm,zi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],g=s[a+2],p=s[a+3];if(d!==p||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*p;m<0&&(h=-h,f=-f,g=-g,p=-p,m=-m);let _=1-o;if(m<.9995){let v=Math.acos(m),M=Math.sin(v);_=Math.sin(_*v)/M,o=Math.sin(o*v)/M,l=l*_+h*o,c=c*_+f*o,u=u*_+g*o,d=d*_+p*o}else{l=l*_+h*o,c=c*_+f*o,u=u*_+g*o,d=d*_+p*o;let v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pm=class pm{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ip.copy(this).projectOnVector(e),this.sub(ip)}reflect(e){return this.sub(ip.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pm.prototype.isVector3=!0;var te=pm,ip=new te,$0=new zi,mm=class mm{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],p=i[0],m=i[3],_=i[6],v=i[1],M=i[4],y=i[7],b=i[2],T=i[5],x=i[8];return s[0]=a*p+o*v+l*b,s[3]=a*m+o*M+l*T,s[6]=a*_+o*y+l*x,s[1]=c*p+u*v+d*b,s[4]=c*m+u*M+d*T,s[7]=c*_+u*y+d*x,s[2]=h*p+f*v+g*b,s[5]=h*m+f*M+g*T,s[8]=h*_+f*y+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=d*p,e[1]=(i*c-u*n)*p,e[2]=(o*n-i*a)*p,e[3]=h*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-o*t)*p,e[6]=f*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Al("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rp.makeScale(e,t)),this}rotate(e){return Al("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rp.makeRotation(-e)),this}translate(e,t){return Al("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};mm.prototype.isMatrix3=!0;var et=mm,rp=new et,K0=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q0=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FS(){let r={enabled:!0,workingColorSpace:Il,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(i.r=Hr(i.r),i.g=Hr(i.g),i.b=Hr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(i.r=ao(i.r),i.g=ao(i.g),i.b=ao(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Kr?Ll:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Il]:{primaries:e,whitePoint:n,transfer:Ll,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),r}var ft=FS();function Hr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var qa,fh=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qa===void 0&&(qa=Dl("canvas")),qa.width=e.width,qa.height=e.height;let i=qa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Dl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Hr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hr(t[n]/255)*255):t[n]=Hr(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},BS=0,fo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Ro(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(sp(i[a].image)):s.push(sp(i[a]))}else s=sp(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function sp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}var kS=0,ap=new te,si=class r extends mr{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Bi,i=Bi,s=ri,a=Jr,o=tr,l=di,c=r.DEFAULT_ANISOTROPY,u=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Ro(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ap).x}get height(){return this.source.getSize(ap).y}get depth(){return this.source.getSize(ap).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=Jp;si.DEFAULT_ANISOTROPY=1;var gm=class gm{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,b=(_+1)/2,T=(u+h)/4,x=(d+p)/4,S=(g+m)/4;return M>y&&M>b?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=T/n,s=x/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=S/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=x/s,i=S/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-p)*(d-p)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-p)/v,this.z=(h-u)/v,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gm.prototype.isVector4=!0;var zt=gm,dh=class extends mr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new si({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ri,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new fo(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},fn=class extends dh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Nl=class extends si{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ph=class extends si{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Bh=class Bh{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,g,p,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,p,m)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,g,p,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=d,_[14]=h,_[3]=f,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bh().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ya.setFromMatrixColumn(e,0).length(),s=1/Ya.setFromMatrixColumn(e,1).length(),a=1/Ya.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,p=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,p=c*d;t[0]=h+p*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,p=c*d;t[0]=h-p*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,p=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+p,t[1]=l*d,t[5]=p*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-p*d}else if(e.order==="XZY"){let h=a*l,f=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+p,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=p*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zS,e,GS)}lookAt(e,t,n){let i=this.elements;return wi.subVectors(e,t),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),gs.crossVectors(n,wi),gs.lengthSq()===0&&(Math.abs(n.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),gs.crossVectors(n,wi)),gs.normalize(),Tu.crossVectors(wi,gs),i[0]=gs.x,i[4]=Tu.x,i[8]=wi.x,i[1]=gs.y,i[5]=Tu.y,i[9]=wi.y,i[2]=gs.z,i[6]=Tu.z,i[10]=wi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],p=n[6],m=n[10],_=n[14],v=n[3],M=n[7],y=n[11],b=n[15],T=i[0],x=i[4],S=i[8],L=i[12],C=i[1],V=i[5],O=i[9],ne=i[13],B=i[2],K=i[6],ie=i[10],H=i[14],Z=i[3],re=i[7],I=i[11],oe=i[15];return s[0]=a*T+o*C+l*B+c*Z,s[4]=a*x+o*V+l*K+c*re,s[8]=a*S+o*O+l*ie+c*I,s[12]=a*L+o*ne+l*H+c*oe,s[1]=u*T+d*C+h*B+f*Z,s[5]=u*x+d*V+h*K+f*re,s[9]=u*S+d*O+h*ie+f*I,s[13]=u*L+d*ne+h*H+f*oe,s[2]=g*T+p*C+m*B+_*Z,s[6]=g*x+p*V+m*K+_*re,s[10]=g*S+p*O+m*ie+_*I,s[14]=g*L+p*ne+m*H+_*oe,s[3]=v*T+M*C+y*B+b*Z,s[7]=v*x+M*V+y*K+b*re,s[11]=v*S+M*O+y*ie+b*I,s[15]=v*L+M*ne+y*H+b*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],p=e[7],m=e[11],_=e[15],v=l*f-c*h,M=o*f-c*d,y=o*h-l*d,b=a*f-c*u,T=a*h-l*u,x=a*d-o*u;return t*(p*v-m*M+_*y)-n*(g*v-m*b+_*T)+i*(g*M-p*b+_*x)-s*(g*y-p*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],p=e[13],m=e[14],_=e[15],v=t*o-n*a,M=t*l-i*a,y=t*c-s*a,b=n*l-i*o,T=n*c-s*o,x=i*c-s*l,S=u*p-d*g,L=u*m-h*g,C=u*_-f*g,V=d*m-h*p,O=d*_-f*p,ne=h*_-f*m,B=v*ne-M*O+y*V+b*C-T*L+x*S;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let K=1/B;return e[0]=(o*ne-l*O+c*V)*K,e[1]=(i*O-n*ne-s*V)*K,e[2]=(p*x-m*T+_*b)*K,e[3]=(h*T-d*x-f*b)*K,e[4]=(l*C-a*ne-c*L)*K,e[5]=(t*ne-i*C+s*L)*K,e[6]=(m*y-g*x-_*M)*K,e[7]=(u*x-h*y+f*M)*K,e[8]=(a*O-o*C+c*S)*K,e[9]=(n*C-t*O-s*S)*K,e[10]=(g*T-p*y+_*v)*K,e[11]=(d*y-u*T-f*v)*K,e[12]=(o*L-a*V-l*S)*K,e[13]=(t*V-n*L+i*S)*K,e[14]=(p*M-g*b-m*v)*K,e[15]=(u*b-d*M+h*v)*K,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,p=a*u,m=a*d,_=o*d,v=l*c,M=l*u,y=l*d,b=n.x,T=n.y,x=n.z;return i[0]=(1-(p+_))*b,i[1]=(f+y)*b,i[2]=(g-M)*b,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(h+_))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+M)*x,i[9]=(m-v)*x,i[10]=(1-(h+p))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ya.set(i[0],i[1],i[2]).length(),o=Ya.set(i[4],i[5],i[6]).length(),l=Ya.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Zi.copy(this);let c=1/a,u=1/o,d=1/l;return Zi.elements[0]*=c,Zi.elements[1]*=c,Zi.elements[2]*=c,Zi.elements[4]*=u,Zi.elements[5]*=u,Zi.elements[6]*=u,Zi.elements[8]*=d,Zi.elements[9]*=d,Zi.elements[10]*=d,t.setFromRotationMatrix(Zi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=ki,l=!1){let c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),g,p;if(l)g=s/(a-s),p=a*s/(a-s);else if(o===ki)g=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===uo)g=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ki,l=!1){let c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i),g,p;if(l)g=1/(a-s),p=a/(a-s);else if(o===ki)g=-2/(a-s),p=-(a+s)/(a-s);else if(o===uo)g=-1/(a-s),p=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Bh.prototype.isMatrix4=!0;var St=Bh,Ya=new te,Zi=new St,zS=new te(0,0,0),GS=new te(1,1,1),gs=new te,Tu=new te,wi=new te,j0=new St,e_=new zi,Xr=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return j0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(j0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return e_.setFromEuler(this),this.setFromQuaternion(e_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xr.DEFAULT_ORDER="XYZ";var Ul=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},VS=0,t_=new te,Za=new zi,Or=new St,wu=new te,yl=new te,HS=new te,WS=new zi,n_=new te(1,0,0),i_=new te(0,1,0),r_=new te(0,0,1),s_={type:"added"},XS={type:"removed"},Ja={type:"childadded",child:null},op={type:"childremoved",child:null},Mn=class r extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new te,t=new Xr,n=new zi,i=new te(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new et}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Za.setFromAxisAngle(e,t),this.quaternion.multiply(Za),this}rotateOnWorldAxis(e,t){return Za.setFromAxisAngle(e,t),this.quaternion.premultiply(Za),this}rotateX(e){return this.rotateOnAxis(n_,e)}rotateY(e){return this.rotateOnAxis(i_,e)}rotateZ(e){return this.rotateOnAxis(r_,e)}translateOnAxis(e,t){return t_.copy(e).applyQuaternion(this.quaternion),this.position.add(t_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(n_,e)}translateY(e){return this.translateOnAxis(i_,e)}translateZ(e){return this.translateOnAxis(r_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Or.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wu.copy(e):wu.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Or.lookAt(yl,wu,this.up):Or.lookAt(wu,yl,this.up),this.quaternion.setFromRotationMatrix(Or),i&&(Or.extractRotation(i.matrixWorld),Za.setFromRotationMatrix(Or),this.quaternion.premultiply(Za.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(s_),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(XS),op.child=e,this.dispatchEvent(op),op.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Or.multiply(e.parent.matrixWorld)),e.applyMatrix4(Or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(s_),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,e,HS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,WS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Mn.DEFAULT_UP=new te(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},qS={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let p of e.hand.values()){let m=t.getJointPose(p,n),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qS)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_s={h:0,s:0,l:0},Eu={h:0,s:0,l:0};function lp(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=NS(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=lp(a,s,e+1/3),this.g=lp(a,s,e),this.b=lp(a,s,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=ii){function n(s){s!==void 0&&parseFloat(s)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){let n=xx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return ft.workingToColorSpace(Xn.copy(this),e),Math.round(mt(Xn.r*255,0,255))*65536+Math.round(mt(Xn.g*255,0,255))*256+Math.round(mt(Xn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Xn.copy(this),t);let n=Xn.r,i=Xn.g,s=Xn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=ii){ft.workingToColorSpace(Xn.copy(this),e);let t=Xn.r,n=Xn.g,i=Xn.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(_s),this.setHSL(_s.h+e,_s.s+t,_s.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_s),e.getHSL(Eu);let n=np(_s.h,Eu.h,t),i=np(_s.s,Eu.s,t),s=np(_s.l,Eu.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xn=new tt;tt.NAMES=xx;var Ol=class r{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(e),this.density=t}clone(){return new r(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var sa=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ji=new te,Fr=new te,cp=new te,Br=new te,$a=new te,Ka=new te,a_=new te,up=new te,hp=new te,fp=new te,dp=new zt,pp=new zt,mp=new zt,Vr=class r{constructor(e=new te,t=new te,n=new te){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ji.subVectors(e,t),i.cross(Ji);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ji.subVectors(i,t),Fr.subVectors(n,t),cp.subVectors(e,t);let a=Ji.dot(Ji),o=Ji.dot(Fr),l=Ji.dot(cp),c=Fr.dot(Fr),u=Fr.dot(cp),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Br)===null?!1:Br.x>=0&&Br.y>=0&&Br.x+Br.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Br)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Br.x),l.addScaledVector(a,Br.y),l.addScaledVector(o,Br.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return dp.setScalar(0),pp.setScalar(0),mp.setScalar(0),dp.fromBufferAttribute(e,t),pp.fromBufferAttribute(e,n),mp.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(dp,s.x),a.addScaledVector(pp,s.y),a.addScaledVector(mp,s.z),a}static isFrontFacing(e,t,n,i){return Ji.subVectors(n,t),Fr.subVectors(e,t),Ji.cross(Fr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),Fr.subVectors(this.a,this.b),Ji.cross(Fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;$a.subVectors(i,n),Ka.subVectors(s,n),up.subVectors(e,n);let l=$a.dot(up),c=Ka.dot(up);if(l<=0&&c<=0)return t.copy(n);hp.subVectors(e,i);let u=$a.dot(hp),d=Ka.dot(hp);if(u>=0&&d<=u)return t.copy(i);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector($a,a);fp.subVectors(e,s);let f=$a.dot(fp),g=Ka.dot(fp);if(g>=0&&f<=g)return t.copy(s);let p=f*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ka,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return a_.subVectors(s,i),o=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(a_,o);let _=1/(m+p+h);return a=p*_,o=h*_,t.copy(n).addScaledVector($a,a).addScaledVector(Ka,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gr=class{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$i):$i.fromBufferAttribute(s,a),$i.applyMatrix4(e.matrixWorld),this.expandByPoint($i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Au.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Au.copy(n.boundingBox)),Au.applyMatrix4(e.matrixWorld),this.union(Au)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vl),Cu.subVectors(this.max,vl),Qa.subVectors(e.a,vl),ja.subVectors(e.b,vl),eo.subVectors(e.c,vl),xs.subVectors(ja,Qa),ys.subVectors(eo,ja),ta.subVectors(Qa,eo);let t=[0,-xs.z,xs.y,0,-ys.z,ys.y,0,-ta.z,ta.y,xs.z,0,-xs.x,ys.z,0,-ys.x,ta.z,0,-ta.x,-xs.y,xs.x,0,-ys.y,ys.x,0,-ta.y,ta.x,0];return!gp(t,Qa,ja,eo,Cu)||(t=[1,0,0,0,1,0,0,0,1],!gp(t,Qa,ja,eo,Cu))?!1:(Ru.crossVectors(xs,ys),t=[Ru.x,Ru.y,Ru.z],gp(t,Qa,ja,eo,Cu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},kr=[new te,new te,new te,new te,new te,new te,new te,new te],$i=new te,Au=new gr,Qa=new te,ja=new te,eo=new te,xs=new te,ys=new te,ta=new te,vl=new te,Cu=new te,Ru=new te,na=new te;function gp(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){na.fromArray(r,s);let o=i.x*Math.abs(na.x)+i.y*Math.abs(na.y)+i.z*Math.abs(na.z),l=e.dot(na),c=t.dot(na),u=n.dot(na);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var sn=new te,Pu=new Te,YS=0,qn=class extends mr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fx,this.updateRanges=[],this.gpuType=Vi,this.version=0,this._normalizationScale=e!==void 0?om(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pu.fromBufferAttribute(this,t),Pu.applyMatrix3(e),this.setXY(t,Pu.x,Pu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):US(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):OS(e,this.array)}};var Fl=class extends qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Bl=class extends qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends qn{constructor(e,t,n){super(new Float32Array(e),t,n)}},ZS=new gr,Sl=new te,_p=new te,_r=class{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ZS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sl.subVectors(e,this.center);let t=Sl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Sl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_p.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sl.copy(e.center).add(_p)),this.expandByPoint(Sl.copy(e.center).sub(_p))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},JS=0,Fi=new St,xp=new Mn,to=new te,Ei=new gr,Ml=new gr,xn=new te,Ut=class r extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LS(e)?Bl:Fl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fi.makeRotationFromQuaternion(e),this.applyMatrix4(Fi),this}rotateX(e){return Fi.makeRotationX(e),this.applyMatrix4(Fi),this}rotateY(e){return Fi.makeRotationY(e),this.applyMatrix4(Fi),this}rotateZ(e){return Fi.makeRotationZ(e),this.applyMatrix4(Fi),this}translate(e,t,n){return Fi.makeTranslation(e,t,n),this.applyMatrix4(Fi),this}scale(e,t,n){return Fi.makeScale(e,t,n),this.applyMatrix4(Fi),this}lookAt(e){return xp.lookAt(e),xp.updateMatrix(),this.applyMatrix4(xp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(to).negate(),this.translate(to.x,to.y,to.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Ei.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Ei.min),this.boundingBox.expandByPoint(Ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){let n=this.boundingSphere.center;if(Ei.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ml.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(Ei.min,Ml.min),Ei.expandByPoint(xn),xn.addVectors(Ei.max,Ml.max),Ei.expandByPoint(xn)):(Ei.expandByPoint(Ml.min),Ei.expandByPoint(Ml.max))}Ei.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)xn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(xn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xn.fromBufferAttribute(o,c),l&&(to.fromBufferAttribute(e,c),xn.add(to)),i=Math.max(i,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new te,l[L]=new te;let u=new te,d=new te,h=new te,f=new Te,g=new Te,p=new Te,m=new te,_=new te;function v(L,C,V){c[L]=c[C]=c[V]=1,u.fromBufferAttribute(n,L),d.fromBufferAttribute(n,C),h.fromBufferAttribute(n,V),f.fromBufferAttribute(s,L),g.fromBufferAttribute(s,C),p.fromBufferAttribute(s,V),d.sub(u),h.sub(u),g.sub(f),p.sub(f);let O=1/(g.x*p.y-p.x*g.y);isFinite(O)&&(m.copy(d).multiplyScalar(p.y).addScaledVector(h,-g.y).multiplyScalar(O),_.copy(h).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(O),o[L].add(m),o[C].add(m),o[V].add(m),l[L].add(_),l[C].add(_),l[V].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,C=M.length;L<C;++L){let V=M[L],O=V.start,ne=V.count;for(let B=O,K=O+ne;B<K;B+=3)v(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let y=new te,b=new te,T=new te,x=new te;function S(L){T.fromBufferAttribute(i,L),x.copy(T);let C=o[L];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),b.crossVectors(x,C);let O=b.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,O)}for(let L=0,C=n.count;L<C;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new qn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new te,s=new te,a=new te,o=new te,l=new te,c=new te,u=new te,d=new te;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),p=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let p=0,m=l.length;p<m;p++){o.isInterleavedBufferAttribute?f=l[p]*o.data.stride+o.offset:f=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[f++]}return new qn(h,u,d)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yp=new te,$S=new te,KS=new et,Ki=class{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=yp.subVectors(n,t).cross($S.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(yp),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||KS.getNormalMatrix(e),i=this.coplanarPoint(yp).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},QS=0,xr=class extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Ro(),this.name="",this.type="Material",this.blending=Eo,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qp,this.blendDst=Yp,this.blendEquation=ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=th,this.stencilZFail=th,this.stencilZPass=th,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ki().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Te().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var zr=new te,vp=new te,Iu=new te,Lu=new te,mo=class{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=zr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zr.copy(this.origin).addScaledVector(this.direction,t),zr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){vp.copy(e).add(t).multiplyScalar(.5),Iu.copy(t).sub(e).normalize(),Lu.copy(this.origin).sub(vp);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Iu),o=Lu.dot(this.direction),l=-Lu.dot(Iu),c=Lu.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){let p=1/u;d*=p,h*=p,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(vp).addScaledVector(Iu,h),f}intersectSphere(e,t){if(e.radius<0)return null;zr.subVectors(e.center,this.origin);let n=zr.dot(this.direction),i=zr.dot(zr)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,zr)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,p=t.y-a.y,m=t.z-a.z,_=n.x-a.x,v=n.y-a.y,M=n.z-a.z,y=Math.abs(l),b=Math.abs(c),T=Math.abs(u),x,S,L,C,V,O,ne,B,K,ie,H,Z;if(y>=b&&y>=T?(L=l,O=d,K=g,Z=_,l>=0?(x=c,S=u,C=h,V=f,ne=p,B=m,ie=v,H=M):(x=u,S=c,C=f,V=h,ne=m,B=p,ie=M,H=v)):b>=T?(L=c,O=h,K=p,Z=v,c>=0?(x=u,S=l,C=f,V=d,ne=m,B=g,ie=M,H=_):(x=l,S=u,C=d,V=f,ne=g,B=m,ie=_,H=M)):(L=u,O=f,K=m,Z=M,u>=0?(x=l,S=c,C=d,V=h,ne=g,B=p,ie=_,H=v):(x=c,S=l,C=h,V=d,ne=p,B=g,ie=v,H=_)),L===0)return null;let re=x/L,I=S/L,oe=1/L,Ce=C-re*O,Ne=V-I*O,J=ne-re*K,ge=B-I*K,Ee=ie-re*Z,Q=H-I*Z,W=Ee*ge-Q*J,k=Ce*Q-Ne*Ee,z=J*Ne-ge*Ce;if(i){if(W<0||k<0||z<0)return null}else if((W<0||k<0||z<0)&&(W>0||k>0||z>0))return null;let q=W+k+z;if(q===0)return null;let fe=oe*(W*O+k*K+z*Z);return(q>0?fe<0:fe>0)?null:this.at(fe/q,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Cn=class extends xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=Zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},o_=new St,ia=new mo,Du=new _r,l_=new te,Nu=new te,Uu=new te,Ou=new te,Sp=new te,Fu=new te,c_=new te,Bu=new te,Et=class extends Mn{constructor(e=new Ut,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Fu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],d=s[l];u!==0&&(Sp.fromBufferAttribute(d,e),a?Fu.addScaledVector(Sp,u):Fu.addScaledVector(Sp.sub(t),u))}t.add(Fu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Du.copy(n.boundingSphere),Du.applyMatrix4(s),ia.copy(e.ray).recast(e.near),!(Du.containsPoint(ia.origin)===!1&&(ia.intersectSphere(Du,l_)===null||ia.origin.distanceToSquared(l_)>(e.far-e.near)**2))&&(o_.copy(s).invert(),ia.copy(e.ray).applyMatrix4(o_),!(n.boundingBox!==null&&ia.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ia)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,p=h.length;g<p;g++){let m=h[g],_=a[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,b=M;y<b;y+=3){let T=o.getX(y),x=o.getX(y+1),S=o.getX(y+2);i=ku(this,_,e,n,c,u,d,T,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),p=Math.min(o.count,f.start+f.count);for(let m=g,_=p;m<_;m+=3){let v=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);i=ku(this,a,e,n,c,u,d,v,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,p=h.length;g<p;g++){let m=h[g],_=a[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,b=M;y<b;y+=3){let T=y,x=y+1,S=y+2;i=ku(this,_,e,n,c,u,d,T,x,S),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),p=Math.min(l.count,f.start+f.count);for(let m=g,_=p;m<_;m+=3){let v=m,M=m+1,y=m+2;i=ku(this,a,e,n,c,u,d,v,M,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function jS(r,e,t,n,i,s,a,o){let l;if(e.side===Rn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===As,o),l===null)return null;Bu.copy(o),Bu.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Bu);return c<t.near||c>t.far?null:{distance:c,point:Bu.clone(),object:r}}function ku(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Nu),r.getVertexPosition(l,Uu),r.getVertexPosition(c,Ou);let u=jS(r,e,t,n,Nu,Uu,Ou,c_);if(u){let d=new te;Vr.getBarycoord(c_,Nu,Uu,Ou,d),i&&(u.uv=Vr.getInterpolatedAttribute(i,o,l,c,d,new Te)),s&&(u.uv1=Vr.getInterpolatedAttribute(s,o,l,c,d,new Te)),a&&(u.normal=Vr.getInterpolatedAttribute(a,o,l,c,d,new te),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new te,materialIndex:0};Vr.getNormal(Nu,Uu,Ou,h.normal),u.face=h,u.barycoord=d}return u}var kl=class extends si{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Sn,u=Sn,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zl=class extends qn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},no=new St,u_=new St,zu=[],h_=new gr,eM=new St,bl=new Et,Tl=new _r,Gl=class extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,eM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,no),h_.copy(e.boundingBox).applyMatrix4(no),this.boundingBox.union(h_)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _r),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,no),Tl.copy(e.boundingSphere).applyMatrix4(no),this.boundingSphere.union(Tl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(bl.geometry=this.geometry,bl.material=this.material,bl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(n),e.ray.intersectsSphere(Tl)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,no),u_.multiplyMatrices(n,no),bl.matrixWorld=u_,bl.raycast(e,zu);for(let a=0,o=zu.length;a<o;a++){let l=zu[a];l.instanceId=s,l.object=this,t.push(l)}zu.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new kl(new Float32Array(i*this.count),i,this.count,Xh,Vi));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ra=new _r,tM=new Te(.5,.5),Gu=new te,Ss=class{constructor(e=new Ki,t=new Ki,n=new Ki,i=new Ki,s=new Ki,a=new Ki){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ki,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],p=s[9],m=s[10],_=s[11],v=s[12],M=s[13],y=s[14],b=s[15];if(i[0].setComponents(c-a,f-u,_-g,b-v).normalize(),i[1].setComponents(c+a,f+u,_+g,b+v).normalize(),i[2].setComponents(c+o,f+d,_+p,b+M).normalize(),i[3].setComponents(c-o,f-d,_-p,b-M).normalize(),n)i[4].setComponents(l,h,m,y).normalize(),i[5].setComponents(c-l,f-h,_-m,b-y).normalize();else if(i[4].setComponents(c-l,f-h,_-m,b-y).normalize(),t===ki)i[5].setComponents(c+l,f+h,_+m,b+y).normalize();else if(t===uo)i[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ra.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ra.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ra)}intersectsSprite(e){ra.center.set(0,0,0);let t=tM.distanceTo(e.center);return ra.radius=.7071067811865476+t,ra.applyMatrix4(e.matrixWorld),this.intersectsSphere(ra)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Gu.x=i.normal.x>0?e.max.x:e.min.x,Gu.y=i.normal.y>0?e.max.y:e.min.y,Gu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},f_=new St,mh=class r{constructor(){this.coordinateSystem=ki,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];f_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ss),n[i].setFromProjectionMatrix(f_,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ss),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new r().copy(this)}};var qr=class extends xr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gh=new te,_h=new te,d_=new St,wl=new mo,Vu=new _r,Mp=new te,p_=new te,xh=class extends Mn{constructor(e=new Ut,t=new qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)gh.fromBufferAttribute(t,i-1),_h.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=gh.distanceTo(_h);e.setAttribute("lineDistance",new dt(n,1))}else nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vu.copy(n.boundingSphere),Vu.applyMatrix4(i),Vu.radius+=s,e.ray.intersectsSphere(Vu)===!1)return;d_.copy(i).invert(),wl.copy(e.ray).applyMatrix4(d_);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let p=f,m=g-1;p<m;p+=c){let _=u.getX(p),v=u.getX(p+1),M=Hu(this,e,wl,l,_,v,p);M&&t.push(M)}if(this.isLineLoop){let p=u.getX(g-1),m=u.getX(f),_=Hu(this,e,wl,l,p,m,g-1);_&&t.push(_)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let p=f,m=g-1;p<m;p+=c){let _=Hu(this,e,wl,l,p,p+1,p);_&&t.push(_)}if(this.isLineLoop){let p=Hu(this,e,wl,l,g-1,f,g-1);p&&t.push(p)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Hu(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(gh.fromBufferAttribute(o,i),_h.fromBufferAttribute(o,s),t.distanceSqToSegment(gh,_h,Mp,p_)>n)return;Mp.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Mp);if(!(c<e.near||c>e.far))return{distance:c,point:p_.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var m_=new te,g_=new te,Ms=class extends xh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)m_.fromBufferAttribute(t,i),g_.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+m_.distanceTo(g_);e.setAttribute("lineDistance",new dt(n,1))}else nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var bs=class extends xr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},__=new St,Lp=new mo,Wu=new _r,Xu=new te,aa=class extends Mn{constructor(e=new Ut,t=new bs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wu.copy(n.boundingSphere),Wu.applyMatrix4(i),Wu.radius+=s,e.ray.intersectsSphere(Wu)===!1)return;__.copy(i).invert(),Lp.copy(e.ray).applyMatrix4(__);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,p=f;g<p;g++){let m=c.getX(g);Xu.fromBufferAttribute(d,m),x_(Xu,m,l,i,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,p=f;g<p;g++)Xu.fromBufferAttribute(d,g),x_(Xu,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function x_(r,e,t,n,i,s,a){let o=Lp.distanceSqToPoint(r);if(o<t){let l=new te;Lp.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Vl=class extends si{constructor(e=[],t=_a,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oa=class extends si{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yr=class extends si{constructor(e,t,n=er,i,s,a,o=Sn,l=Sn,c,u=Wr,d=1){if(u!==Wr&&u!==$r)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Hl=class extends Yr{constructor(e,t=er,n=_a,i,s,a=Sn,o=Sn,l,c=Wr){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Wl=class extends si{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yr=class r extends Ut{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function g(p,m,_,v,M,y,b,T,x,S,L){let C=y/x,V=b/S,O=y/2,ne=b/2,B=T/2,K=x+1,ie=S+1,H=0,Z=0,re=new te;for(let I=0;I<ie;I++){let oe=I*V-ne;for(let Ce=0;Ce<K;Ce++){let Ne=Ce*C-O;re[p]=Ne*v,re[m]=oe*M,re[_]=B,c.push(re.x,re.y,re.z),re[p]=0,re[m]=0,re[_]=T>0?1:-1,u.push(re.x,re.y,re.z),d.push(Ce/x),d.push(1-I/S),H+=1}}for(let I=0;I<S;I++)for(let oe=0;oe<x;oe++){let Ce=h+oe+K*I,Ne=h+oe+K*(I+1),J=h+(oe+1)+K*(I+1),ge=h+(oe+1)+K*I;l.push(Ce,Ne,ge),l.push(Ne,J,ge),Z+=6}o.addGroup(f,Z,L),f+=Z,h+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var yh=class r extends Ut{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let M=new te,y=new te,b=new te;for(let T=0;T<t.length;T+=3)f(t[T+0],M),f(t[T+1],y),f(t[T+2],b),l(M,y,b,v)}function l(v,M,y,b){let T=b+1,x=[];for(let S=0;S<=T;S++){x[S]=[];let L=v.clone().lerp(y,S/T),C=M.clone().lerp(y,S/T),V=T-S;for(let O=0;O<=V;O++)O===0&&S===T?x[S][O]=L:x[S][O]=L.clone().lerp(C,O/V)}for(let S=0;S<T;S++)for(let L=0;L<2*(T-S)-1;L++){let C=Math.floor(L/2);L%2===0?(h(x[S][C+1]),h(x[S+1][C]),h(x[S][C])):(h(x[S][C+1]),h(x[S+1][C+1]),h(x[S+1][C]))}}function c(v){let M=new te;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(v),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function u(){let v=new te;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];let y=m(v)/2/Math.PI+.5,b=_(v)/Math.PI+.5;a.push(y,1-b)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){let M=a[v+0],y=a[v+2],b=a[v+4],T=Math.max(M,y,b),x=Math.min(M,y,b);T>.9&&x<.1&&(M<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),b<.2&&(a[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function f(v,M){let y=v*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){let v=new te,M=new te,y=new te,b=new te,T=new Te,x=new Te,S=new Te;for(let L=0,C=0;L<s.length;L+=9,C+=6){v.set(s[L+0],s[L+1],s[L+2]),M.set(s[L+3],s[L+4],s[L+5]),y.set(s[L+6],s[L+7],s[L+8]),T.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),S.set(a[C+4],a[C+5]),b.copy(v).add(M).add(y).divideScalar(3);let V=m(b);p(T,C+0,v,V),p(x,C+2,M,V),p(S,C+4,y,V)}}function p(v,M,y,b){b<0&&v.x===1&&(a[M]=v.x-1),y.x===0&&y.z===0&&(a[M]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function _(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}};var qu=new te,Yu=new te,bp=new te,Zu=new Vr,Xl=class extends Ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(nh*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h=new Map,f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:p,b:m,c:_}=Zu;if(p.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),_.fromBufferAttribute(o,c[2]),Zu.getNormal(bp),d[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){let M=(v+1)%3,y=d[v],b=d[M],T=Zu[u[v]],x=Zu[u[M]],S=`${y}_${b}`,L=`${b}_${y}`,C=h.get(L);C?(bp.dot(C.normal)<=s&&(f.push(T.x,T.y,T.z),f.push(x.x,x.y,x.z)),h.set(L,null)):h.has(S)||h.set(S,{index0:c[v],index1:c[M],normal:bp.clone()})}}for(let g of h.values())if(g){let{index0:p,index1:m}=g;qu.fromBufferAttribute(o,p),Yu.fromBufferAttribute(o,m),f.push(qu.x,qu.y,qu.z),f.push(Yu.x,Yu.y,Yu.z)}this.setAttribute("position",new dt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){nt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);let u=n[i],h=n[i+1]-u,f=(a-u)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new Te:new te);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new te,i=[],s=[],a=[],o=new te,l=new St;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new te)}s[0]=new te,a[0]=new te;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(mt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(mt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},go=class extends Ai{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Te){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vh=class extends go{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lm(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,i(a,o,h,f)},calc:function(s){let a=s*s,o=a*s;return r+e*s+t*a+n*o}}}var y_=new te,v_=new te,Tp=new lm,wp=new lm,Ep=new lm,Sh=class extends Ai{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new te){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(v_.subVectors(i[0],i[1]).add(i[0]),c=v_);let d=i[o%s],h=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(y_.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=y_),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),Tp.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,p,m),wp.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,p,m),Ep.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,p,m)}else this.curveType==="catmullrom"&&(Tp.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),wp.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Ep.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Tp.calc(l),wp.calc(l),Ep.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new te().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function S_(r,e,t,n,i){let s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function nM(r,e){let t=1-r;return t*t*e}function iM(r,e){return 2*(1-r)*r*e}function rM(r,e){return r*r*e}function Cl(r,e,t,n){return nM(r,e)+iM(r,t)+rM(r,n)}function sM(r,e){let t=1-r;return t*t*t*e}function aM(r,e){let t=1-r;return 3*t*t*r*e}function oM(r,e){return 3*(1-r)*r*r*e}function lM(r,e){return r*r*r*e}function Rl(r,e,t,n,i){return sM(r,e)+aM(r,t)+oM(r,n)+lM(r,i)}var ql=class extends Ai{constructor(e=new Te,t=new Te,n=new Te,i=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Te){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Rl(e,i.x,s.x,a.x,o.x),Rl(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mh=class extends Ai{constructor(e=new te,t=new te,n=new te,i=new te){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new te){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Rl(e,i.x,s.x,a.x,o.x),Rl(e,i.y,s.y,a.y,o.y),Rl(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yl=class extends Ai{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bh=class extends Ai{constructor(e=new te,t=new te){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zl=class extends Ai{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Cl(e,i.x,s.x,a.x),Cl(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Th=class extends Ai{constructor(e=new te,t=new te,n=new te){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new te){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Cl(e,i.x,s.x,a.x),Cl(e,i.y,s.y,a.y),Cl(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jl=class extends Ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(S_(o,l.x,c.x,u.x,d.x),S_(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Te().fromArray(i))}return this}},Dp=Object.freeze({__proto__:null,ArcCurve:vh,CatmullRomCurve3:Sh,CubicBezierCurve:ql,CubicBezierCurve3:Mh,EllipseCurve:go,LineCurve:Yl,LineCurve3:bh,QuadraticBezierCurve:Zl,QuadraticBezierCurve3:Th,SplineCurve:Jl}),wh=class extends Ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Dp[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},vr=class extends wh{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Yl(this.currentPoint.clone(),new Te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Zl(this.currentPoint.clone(),new Te(e,t),new Te(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new ql(this.currentPoint.clone(),new Te(e,t),new Te(n,i),new Te(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Jl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new go(e,t,n,i,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},$l=class extends vr{constructor(e){super(e),this.uuid=Ro(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new vr().fromJSON(i))}return this}};function cM(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=yx(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=pM(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let u=o,d=l;for(let h=t;h<i;h+=t){let f=r[h],g=r[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Kl(s,a,t,o,l,c,0),a}function yx(r,e,t,n,i){let s;if(i===wM(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=M_(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=M_(a/n|0,r[a],r[a+1],s);return s&&_o(s,s.next)&&(jl(s),s=s.next),s}function la(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(_o(t,t.next)||qt(t.prev,t,t.next)===0)){if(jl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Kl(r,e,t,n,i,s,a){if(!r)return;!a&&s&&yM(r,n,i,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?hM(r,n,i,s):uM(r)){e.push(l.i,r.i,c.i),jl(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=fM(la(r),e),Kl(r,e,t,n,i,s,2)):a===2&&dM(r,e,t,n,i,s):Kl(la(r),e,t,n,i,s,1);break}}}function uM(r){let e=r.prev,t=r,n=r.next;if(qt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(i,s,a),d=Math.min(o,l,c),h=Math.max(i,s,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&El(i,o,s,l,a,c,g.x,g.y)&&qt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function hM(r,e,t,n){let i=r.prev,s=r,a=r.next;if(qt(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,u=i.y,d=s.y,h=a.y,f=Math.min(o,l,c),g=Math.min(u,d,h),p=Math.max(o,l,c),m=Math.max(u,d,h),_=Np(f,g,e,t,n),v=Np(p,m,e,t,n),M=r.prevZ,y=r.nextZ;for(;M&&M.z>=_&&y&&y.z<=v;){if(M.x>=f&&M.x<=p&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&El(o,u,l,d,c,h,M.x,M.y)&&qt(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=p&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&El(o,u,l,d,c,h,y.x,y.y)&&qt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=_;){if(M.x>=f&&M.x<=p&&M.y>=g&&M.y<=m&&M!==i&&M!==a&&El(o,u,l,d,c,h,M.x,M.y)&&qt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=p&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&El(o,u,l,d,c,h,y.x,y.y)&&qt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function fM(r,e){let t=r;do{let n=t.prev,i=t.next.next;!_o(n,i)&&Sx(n,t,t.next,i)&&Ql(n,i)&&Ql(i,n)&&(e.push(n.i,t.i,i.i),jl(t),jl(t.next),t=r=i),t=t.next}while(t!==r);return la(t)}function dM(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&MM(a,o)){let l=Mx(a,o);a=la(a,a.next),l=la(l,l.next),Kl(a,e,t,n,i,s,0),Kl(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function pM(r,e,t,n){let i=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=yx(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(SM(c))}i.sort(mM);for(let s=0;s<i.length;s++)t=gM(i[s],t);return t}function mM(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function gM(r,e){let t=_M(r,e);if(!t)return e;let n=Mx(t,r);return la(n,n.next),la(t,t.next)}function _M(r,e){let t=e,n=r.x,i=r.y,s=-1/0,a;if(_o(r,t))return t;do{if(_o(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&vx(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){let d=Math.abs(i-t.y)/(n-t.x);Ql(t,r)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&xM(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function xM(r,e){return qt(r.prev,r,e.prev)<0&&qt(e.next,r,r.next)<0}function yM(r,e,t,n){let i=r;do i.z===0&&(i.z=Np(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,vM(i)}function vM(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function Np(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function SM(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function vx(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function El(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&vx(r,e,t,n,i,s,a,o)}function MM(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!bM(r,e)&&(Ql(r,e)&&Ql(e,r)&&TM(r,e)&&(qt(r.prev,r,e.prev)||qt(r,e.prev,e))||_o(r,e)&&qt(r.prev,r,r.next)>0&&qt(e.prev,e,e.next)>0)}function qt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function _o(r,e){return r.x===e.x&&r.y===e.y}function Sx(r,e,t,n){let i=$u(qt(r,e,t)),s=$u(qt(r,e,n)),a=$u(qt(t,n,r)),o=$u(qt(t,n,e));return!!(i!==s&&a!==o||i===0&&Ju(r,t,e)||s===0&&Ju(r,n,e)||a===0&&Ju(t,r,n)||o===0&&Ju(t,e,n))}function Ju(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function $u(r){return r>0?1:r<0?-1:0}function bM(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Sx(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ql(r,e){return qt(r.prev,r,r.next)<0?qt(r,e,r.next)>=0&&qt(r,r.prev,e)>=0:qt(r,e,r.prev)<0||qt(r,r.next,e)<0}function TM(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Mx(r,e){let t=Up(r.i,r.x,r.y),n=Up(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function M_(r,e,t,n){let i=Up(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function jl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Up(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wM(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}var Op=class{static triangulate(e,t,n=2){return cM(e,t,n)}},pr=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];b_(e),T_(n,e);let a=e.length;t.forEach(b_);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,T_(n,t[l]);let o=Op.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function b_(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function T_(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var ca=class r extends Ut{constructor(e=new $l([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new dt(i,3)),this.setAttribute("uv",new dt(s,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:EM,M,y=!1,b,T,x,S;if(_){M=_.getSpacedPoints(u),y=!0,h=!1;let D=_.isCatmullRomCurve3?_.closed:!1;b=_.computeFrenetFrames(u,D),T=new te,x=new te,S=new te}h||(m=0,f=0,g=0,p=0);let L=o.extractPoints(c),C=L.shape,V=L.holes;if(!pr.isClockWise(C)){C=C.reverse();for(let D=0,$=V.length;D<$;D++){let G=V[D];pr.isClockWise(G)&&(V[D]=G.reverse())}}function ne(D){let G=10000000000000001e-36,N=D[0];for(let j=1;j<=D.length;j++){let Y=j%D.length,A=D[Y],P=A.x-N.x,F=A.y-N.y,se=P*P+F*F,U=Math.max(Math.abs(A.x),Math.abs(A.y),Math.abs(N.x),Math.abs(N.y)),Re=G*U*U;if(se<=Re){D.splice(Y,1),j--;continue}N=A}}ne(C),V.forEach(ne);let B=V.length,K=C;for(let D=0;D<B;D++){let $=V[D];C=C.concat($)}function ie(D,$,G){return $||rt("ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector($,G)}let H=C.length;function Z(D,$,G){let N,j,Y,A=D.x-$.x,P=D.y-$.y,F=G.x-D.x,se=G.y-D.y,U=A*A+P*P,Re=A*se-P*F;if(Math.abs(Re)>Number.EPSILON){let Ve=Math.sqrt(U),De=Math.sqrt(F*F+se*se),_e=$.x-P/Ve,ke=$.y+A/Ve,Me=G.x-se/De,ze=G.y+F/De,R=((Me-_e)*se-(ze-ke)*F)/(A*se-P*F);N=_e+A*R-D.x,j=ke+P*R-D.y;let w=N*N+j*j;if(w<=2)return new Te(N,j);Y=Math.sqrt(w/2)}else{let Ve=!1;A>Number.EPSILON?F>Number.EPSILON&&(Ve=!0):A<-Number.EPSILON?F<-Number.EPSILON&&(Ve=!0):Math.sign(P)===Math.sign(se)&&(Ve=!0),Ve?(N=-P,j=A,Y=Math.sqrt(U)):(N=A,j=P,Y=Math.sqrt(U/2))}return new Te(N/Y,j/Y)}let re=[];for(let D=0,$=K.length,G=$-1,N=D+1;D<$;D++,G++,N++)G===$&&(G=0),N===$&&(N=0),re[D]=Z(K[D],K[G],K[N]);let I=[],oe,Ce=re.concat();for(let D=0,$=B;D<$;D++){let G=V[D];oe=[];for(let N=0,j=G.length,Y=j-1,A=N+1;N<j;N++,Y++,A++)Y===j&&(Y=0),A===j&&(A=0),oe[N]=Z(G[N],G[Y],G[A]);I.push(oe),Ce=Ce.concat(oe)}let Ne;if(m===0)Ne=pr.triangulateShape(K,V);else{let D=[],$=[];for(let G=0;G<m;G++){let N=G/m,j=f*Math.cos(N*Math.PI/2),Y=g*Math.sin(N*Math.PI/2)+p;for(let A=0,P=K.length;A<P;A++){let F=ie(K[A],re[A],Y);k(F.x,F.y,-j),N===0&&D.push(F)}for(let A=0,P=B;A<P;A++){let F=V[A];oe=I[A];let se=[];for(let U=0,Re=F.length;U<Re;U++){let Ve=ie(F[U],oe[U],Y);k(Ve.x,Ve.y,-j),N===0&&se.push(Ve)}N===0&&$.push(se)}}Ne=pr.triangulateShape(D,$)}let J=Ne.length,ge=g+p;for(let D=0;D<H;D++){let $=h?ie(C[D],Ce[D],ge):C[D];y?(x.copy(b.normals[0]).multiplyScalar($.x),T.copy(b.binormals[0]).multiplyScalar($.y),S.copy(M[0]).add(x).add(T),k(S.x,S.y,S.z)):k($.x,$.y,0)}for(let D=1;D<=u;D++)for(let $=0;$<H;$++){let G=h?ie(C[$],Ce[$],ge):C[$];y?(x.copy(b.normals[D]).multiplyScalar(G.x),T.copy(b.binormals[D]).multiplyScalar(G.y),S.copy(M[D]).add(x).add(T),k(S.x,S.y,S.z)):k(G.x,G.y,d/u*D)}for(let D=m-1;D>=0;D--){let $=D/m,G=f*Math.cos($*Math.PI/2),N=g*Math.sin($*Math.PI/2)+p;for(let j=0,Y=K.length;j<Y;j++){let A=ie(K[j],re[j],N);k(A.x,A.y,d+G)}for(let j=0,Y=V.length;j<Y;j++){let A=V[j];oe=I[j];for(let P=0,F=A.length;P<F;P++){let se=ie(A[P],oe[P],N);y?k(se.x,se.y+M[u-1].y,M[u-1].x+G):k(se.x,se.y,d+G)}}}Ee(),Q();function Ee(){let D=i.length/3;if(h){let $=0,G=H*$;for(let N=0;N<J;N++){let j=Ne[N];z(j[2]+G,j[1]+G,j[0]+G)}$=u+m*2,G=H*$;for(let N=0;N<J;N++){let j=Ne[N];z(j[0]+G,j[1]+G,j[2]+G)}}else{for(let $=0;$<J;$++){let G=Ne[$];z(G[2],G[1],G[0])}for(let $=0;$<J;$++){let G=Ne[$];z(G[0]+H*u,G[1]+H*u,G[2]+H*u)}}n.addGroup(D,i.length/3-D,0)}function Q(){let D=i.length/3,$=0;W(K,$),$+=K.length;for(let G=0,N=V.length;G<N;G++){let j=V[G];W(j,$),$+=j.length}n.addGroup(D,i.length/3-D,1)}function W(D,$){let G=D.length;for(;--G>=0;){let N=G,j=G-1;j<0&&(j=D.length-1);for(let Y=0,A=u+m*2;Y<A;Y++){let P=H*Y,F=H*(Y+1),se=$+N+P,U=$+j+P,Re=$+j+F,Ve=$+N+F;q(se,U,Re,Ve)}}}function k(D,$,G){l.push(D),l.push($),l.push(G)}function z(D,$,G){fe(D),fe($),fe(G);let N=i.length/3,j=v.generateTopUV(n,i,N-3,N-2,N-1);le(j[0]),le(j[1]),le(j[2])}function q(D,$,G,N){fe(D),fe($),fe(N),fe($),fe(G),fe(N);let j=i.length/3,Y=v.generateSideWallUV(n,i,j-6,j-3,j-2,j-1);le(Y[0]),le(Y[1]),le(Y[3]),le(Y[1]),le(Y[2]),le(Y[3])}function fe(D){i.push(l[D*3+0]),i.push(l[D*3+1]),i.push(l[D*3+2])}function le(D){s.push(D.x),s.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return AM(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Dp[i.type]().fromJSON(i)),new r(n,e.options)}},EM={generateTopUV:function(r,e,t,n,i){let s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new Te(s,a),new Te(o,l),new Te(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[i*3],f=e[i*3+1],g=e[i*3+2],p=e[s*3],m=e[s*3+1],_=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Te(a,1-l),new Te(c,1-d),new Te(h,1-g),new Te(p,1-_)]:[new Te(o,1-l),new Te(u,1-d),new Te(f,1-g),new Te(m,1-_)]}};function AM(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var xo=class r extends yh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var Sr=class r extends Ut{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],p=[],m=[];for(let _=0;_<u;_++){let v=_*h-a;for(let M=0;M<c;M++){let y=M*d-s;g.push(y,-v,0),p.push(0,0,1),m.push(M/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<o;v++){let M=v+c*_,y=v+c*(_+1),b=v+1+c*(_+1),T=v+1+c*_;f.push(M,y,T),f.push(y,b,T)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},ec=class r extends Ut{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],u=[],d=e,h=(t-e)/i,f=new te,g=new Te;for(let p=0;p<=i;p++){for(let m=0;m<=n;m++){let _=s+m/n*a;f.x=d*Math.cos(_),f.y=d*Math.sin(_),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let p=0;p<i;p++){let m=p*(n+1);for(let _=0;_<n;_++){let v=_+m,M=v,y=v+n+1,b=v+n+2,T=v+1;o.push(M,y,T),o.push(y,b,T)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var yo=class r extends Ut{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new te,h=new te,f=[],g=[],p=[],m=[];for(let _=0;_<=n;_++){let v=[],M=_/n,y=a+M*o,b=e*Math.cos(y),T=Math.sqrt(e*e-b*b),x=0;_===0&&a===0?x=.5/t:_===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let L=S/t,C=i+L*s;d.x=-T*Math.cos(C),d.y=b,d.z=T*Math.sin(C),g.push(d.x,d.y,d.z),h.copy(d).normalize(),p.push(h.x,h.y,h.z),m.push(L+x,1-M),v.push(c++)}u.push(v)}for(let _=0;_<n;_++)for(let v=0;v<t;v++){let M=u[_][v+1],y=u[_][v],b=u[_+1][v],T=u[_+1][v+1];(_!==0||a>0)&&f.push(M,y,T),(_!==n-1||l<Math.PI)&&f.push(y,b,T)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vo=class r extends Ut{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],u=[],d=[],h=new te,f=new te,g=new te;for(let p=0;p<=n;p++){let m=a+p/n*o;for(let _=0;_<=i;_++){let v=_/i*s;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(_/i),d.push(p/n)}}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let _=(i+1)*p+m-1,v=(i+1)*(p-1)+m-1,M=(i+1)*(p-1)+m,y=(i+1)*p+m;l.push(_,v,y),l.push(v,M,y)}this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ya(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(w_(i))i.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(w_(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Yn(r){let e={};for(let t=0;t<r.length;t++){let n=ya(r[t]);for(let i in n)e[i]=n[i]}return e}function w_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function CM(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function cm(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Qr={clone:ya,merge:Yn},RM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends xr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RM,this.fragmentShader=PM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ya(e.uniforms),this.uniformsGroups=CM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new tt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Te().fromArray(i.value);break;case"v3":this.uniforms[n].value=new te().fromArray(i.value);break;case"v4":this.uniforms[n].value=new zt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new et().fromArray(i.value);break;case"m4":this.uniforms[n].value=new St().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},So=class extends bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ai=class extends xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ef,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Eh=class extends xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ah=class extends xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function io(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ku(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Ts=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ch=class extends Ts{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rp,endingEnd:Rp}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pp:s=e,o=2*t-n;break;case Ip:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pp:a=e,l=2*n-t;break;case Ip:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),p=g*g,m=p*g,_=-h*m+2*h*p-h*g,v=(1+h)*m+(-1.5-2*h)*p+(-.5+h)*g+1,M=(-1-f)*m+(1.5+f)*p+.5*g,y=f*m-f*p;for(let b=0;b!==o;++b)s[b]=_*a[u+b]+v*a[c+b]+M*a[l+b]+y*a[d+b];return s}},Rh=class extends Ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*d+a[l+h]*u;return s}},Ph=class extends Ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ih=class extends Ts{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(i-t),p=1-g;for(let m=0;m!==o;++m)s[m]=a[c+m]*p+a[l+m]*g;return s}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let p=a[c+g],m=a[l+g],_=f*h+g*2,v=d[_],M=d[_+1],y=e*h+g*2,b=u[y],T=u[y+1],x=LM(n,t,v,b,i);s[g]=bx(x,p,M,T,m)}return s}};function bx(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function IM(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function LM(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=bx(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=IM(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var Ci=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=io(t,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:io(e.times,Array),values:io(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Ku(e.settings)&&(n.settings={inTangents:io(e.settings.inTangents,Array),outTangents:io(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ih(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Pl:t=this.InterpolantFactoryMethodDiscrete;break;case uh:t=this.InterpolantFactoryMethodLinear;break;case eh:t=this.InterpolantFactoryMethodSmooth;break;case Cp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return nt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pl;case this.InterpolantFactoryMethodLinear:return uh;case this.InterpolantFactoryMethodSmooth:return eh;case this.InterpolantFactoryMethodBezier:return Cp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Ku(this.settings)&&(E_(this.settings.inTangents,e),E_(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Ku(this.settings)&&(A_(this.settings.inTangents,e),A_(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){rt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&DS(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===eh,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let p=t[d+g];if(p!==t[h+g]||p!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ku(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function E_(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]+=e}function A_(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}Ci.prototype.ValueTypeName="";Ci.prototype.TimeBufferType=Float32Array;Ci.prototype.ValueBufferType=Float32Array;Ci.prototype.DefaultInterpolation=uh;var ws=class extends Ci{constructor(e,t,n){super(e,t,n)}};ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Pl;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Lh=class extends Ci{constructor(e,t,n,i){super(e,t,n,i)}};Lh.prototype.ValueTypeName="color";var Dh=class extends Ci{constructor(e,t,n,i){super(e,t,n,i)}};Dh.prototype.ValueTypeName="number";var Nh=class extends Ts{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let u=c+o;c!==u;c+=4)zi.slerpFlat(s,0,a,c-o,a,c,l);return s}},tc=class extends Ci{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Nh(this.times,this.values,this.getValueSize(),e)}};tc.prototype.ValueTypeName="quaternion";tc.prototype.InterpolantFactoryMethodSmooth=void 0;var Es=class extends Ci{constructor(e,t,n){super(e,t,n)}};Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Pl;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Uh=class extends Ci{constructor(e,t,n,i){super(e,t,n,i)}};Uh.prototype.ValueTypeName="vector";var Fp={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(C_(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!C_(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function C_(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Oh=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tx=new Oh,ua=class{constructor(e){this.manager=e!==void 0?e:Tx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ua.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gr={},Bp=class extends Error{constructor(e,t){super(e),this.response=t}},nc=class extends ua{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Fp.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Gr[e]!==void 0){Gr[e].push({onLoad:t,onProgress:n,onError:i});return}Gr[e]=[],Gr[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Gr[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0,p=0,m=new ReadableStream({start(_){v();function v(){d.read().then(({done:M,value:y})=>{if(M)_.close();else{p+=y.byteLength;let b=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:f});for(let T=0,x=u.length;T<x;T++){let S=u[T];S.onProgress&&S.onProgress(b)}_.enqueue(y),v()}},M=>{_.error(M)})}}});return new Response(m)}else throw new Bp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Fp.add(`file:${e}`,c);let u=Gr[e];delete Gr[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Gr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Gr[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Mo=class extends Mn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ha=class extends Mo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ap=new St,R_=new te,P_=new te,ic=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;R_.setFromMatrixPosition(e.matrixWorld),t.position.copy(R_),P_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(P_),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Ap.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ap,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===uo||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Ap)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qu=new te,ju=new zi,dr=new te,rc=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qu,ju,dr),dr.x===1&&dr.y===1&&dr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qu,ju,dr.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qu,ju,dr),dr.x===1&&dr.y===1&&dr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qu,ju,dr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vs=new te,I_=new Te,L_=new Te,yn=class extends rc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hh*2*Math.atan(Math.tan(nh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,t){return this.getViewBounds(e,I_,L_),t.subVectors(L_,I_)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nh*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var kp=class extends ic{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}},fa=class extends Mo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new kp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},da=class extends rc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zp=class extends ic{constructor(){super(new da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pa=class extends Mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new zp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ro=-90,so=1,bo=class extends Mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new yn(ro,so,e,t);i.layers=this.layers,this.add(i);let s=new yn(ro,so,e,t);s.layers=this.layers,this.add(s);let a=new yn(ro,so,e,t);a.layers=this.layers,this.add(a);let o=new yn(ro,so,e,t);o.layers=this.layers,this.add(o);let l=new yn(ro,so,e,t);l.layers=this.layers,this.add(l);let c=new yn(ro,so,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let p=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=p,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fh=class extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},sc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=DM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function DM(){this._document.hidden===!1&&this.reset()}var um="\\[\\]\\.:\\/",NM=new RegExp("["+um+"]","g"),hm="[^"+um+"]",UM="[^"+um.replace("\\.","")+"]",OM=/((?:WC+[\/:])*)/.source.replace("WC",hm),FM=/(WCOD+)?/.source.replace("WCOD",UM),BM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hm),kM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hm),zM=new RegExp("^"+OM+FM+BM+kM+"$"),GM=["material","materials","bones","map"],Gp=class{constructor(e,t,n){let i=n||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ot=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(NM,"")}static parseTrackName(e){let t=zM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);GM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=Gp;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fA=new Float32Array(1);var _m=class _m{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};_m.prototype.isMatrix2=!0;var Vp=_m,D_=new Te,To=class{constructor(e=new Te(1/0,1/0),t=new Te(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=D_.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,D_).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var ma=class extends Ms{constructor(e=10,t=10,n=4473924,i=8947848){n=new tt(n),i=new tt(i);let s=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,f=0,g=-o;h<=t;h++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);let p=h===s?n:i;p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3}let u=new Ut;u.setAttribute("position",new dt(l,3)),u.setAttribute("color",new dt(c,3));let d=new qr({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Qi=class{constructor(){this.type="ShapePath",this.color=new tt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new vr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1,d=c.length;for(let h=0,f=d-1;h<d;f=h++){let g=c[h],p=c[f];g.y>l.y!=p.y>l.y&&l.x<(p.x-g.x)*(l.y-g.y)/(p.y-g.y)+g.x&&(u=!u)}return u}function t(l,c){let u=c.getCenter(new Te);if(e(u,l))return u;let d=u.y,h=[],f=l.length;for(let g=0;g<f;g++){let p=l[g],m=l[(g+1)%f];if(p.y>d!=m.y>d){let _=p.x+(d-p.y)*(m.x-p.x)/(m.y-p.y);h.push(_)}}return h.length>1&&(h.sort((g,p)=>g-p),u.x=(h[0]+h[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(nt('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let u=pr.area(c);if(u===0)continue;let d=new To;for(let h=0;h<c.length;h++)d.expandByPoint(c[h]);s.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){let c=s[l],u=0;for(let d=l-1;d>=0;d--){let h=s[d];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}i(c.winding)===i(u)&&(c.exclude=!0)}for(let l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let a=[],o=new Map;for(let l of s){if(l.exclude||l.role!=="outer")continue;let c=new $l;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(let l of s){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let u=new vr;u.curves=l.subPath.curves,c.holes.push(u)}return a}};function fm(r,e,t,n){let i=VM(n);switch(t){case em:return r*e;case Xh:return r*e/i.components*i.byteLength;case qh:return r*e/i.components*i.byteLength;case Cs:return r*e*2/i.components*i.byteLength;case Yh:return r*e*2/i.components*i.byteLength;case tm:return r*e*3/i.components*i.byteLength;case tr:return r*e*4/i.components*i.byteLength;case Zh:return r*e*4/i.components*i.byteLength;case mc:case gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _c:case xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $h:case Qh:return Math.max(r,16)*Math.max(e,8)/4;case Jh:case Kh:return Math.max(r,8)*Math.max(e,8)/2;case jh:case ef:case nf:case rf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case tf:case yc:case sf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case af:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case of:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case lf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case cf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case uf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case hf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ff:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case df:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case pf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case mf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case gf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case _f:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case xf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case yf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case vf:case Sf:case Mf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case bf:case Tf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case vc:case wf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function VM(r){switch(r){case di:case $p:return{byteLength:1,components:1};case Co:case Kp:case In:return{byteLength:2,components:1};case Hh:case Wh:return{byteLength:2,components:4};case er:case Vh:case Vi:return{byteLength:4,components:1};case Qp:case jp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function qx(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function WM(r){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],p=d[f];p.start<=g.start+g.count+1?g.count=Math.max(g.count,p.start+p.count-g.start):(++h,d[h]=p)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let p=d[f];r.bufferSubData(c,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var XM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ib=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Tb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ab=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ib=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Db=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ub=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ob=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Fb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qb=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,e1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r1=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,o1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,c1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,d1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,v1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,A1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,L1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,D1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,F1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,W1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,X1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y1=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Q1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:XM,alphahash_pars_fragment:qM,alphamap_fragment:YM,alphamap_pars_fragment:ZM,alphatest_fragment:JM,alphatest_pars_fragment:$M,aomap_fragment:KM,aomap_pars_fragment:QM,batching_pars_vertex:jM,batching_vertex:eb,begin_vertex:tb,beginnormal_vertex:nb,bsdfs:ib,iridescence_fragment:rb,bumpmap_pars_fragment:sb,clipping_planes_fragment:ab,clipping_planes_pars_fragment:ob,clipping_planes_pars_vertex:lb,clipping_planes_vertex:cb,color_fragment:ub,color_pars_fragment:hb,color_pars_vertex:fb,color_vertex:db,common:pb,defaultnormal_vertex:mb,displacementmap_pars_vertex:gb,displacementmap_vertex:_b,emissivemap_fragment:xb,emissivemap_pars_fragment:yb,colorspace_fragment:vb,colorspace_pars_fragment:Sb,envmap_fragment:Mb,envmap_common_pars_fragment:bb,envmap_pars_fragment:Tb,envmap_pars_vertex:wb,envmap_physical_pars_fragment:Ob,envmap_vertex:Eb,fog_vertex:Ab,fog_pars_vertex:Cb,fog_fragment:Rb,fog_pars_fragment:Pb,gradientmap_pars_fragment:Ib,lightmap_pars_fragment:Lb,lights_lambert_fragment:Db,lights_lambert_pars_fragment:Nb,lights_pars_begin:Ub,lights_toon_fragment:Fb,lights_toon_pars_fragment:Bb,lights_phong_fragment:kb,lights_phong_pars_fragment:zb,lights_physical_fragment:Gb,lights_physical_pars_fragment:Vb,lights_fragment_begin:Hb,lights_fragment_maps:Wb,lights_fragment_end:Xb,lightprobes_pars_fragment:qb,logdepthbuf_fragment:Yb,logdepthbuf_pars_fragment:Zb,logdepthbuf_pars_vertex:Jb,logdepthbuf_vertex:$b,map_fragment:Kb,map_pars_fragment:Qb,map_particle_fragment:jb,map_particle_pars_fragment:e1,metalnessmap_fragment:t1,metalnessmap_pars_fragment:n1,morphinstance_vertex:i1,morphcolor_vertex:r1,morphnormal_vertex:s1,morphtarget_pars_vertex:a1,morphtarget_vertex:o1,normal_fragment_begin:l1,normal_fragment_maps:c1,normal_pars_fragment:u1,normal_pars_vertex:h1,normal_vertex:f1,normalmap_pars_fragment:d1,clearcoat_normal_fragment_begin:p1,clearcoat_normal_fragment_maps:m1,clearcoat_pars_fragment:g1,iridescence_pars_fragment:_1,opaque_fragment:x1,packing:y1,premultiplied_alpha_fragment:v1,project_vertex:S1,dithering_fragment:M1,dithering_pars_fragment:b1,roughnessmap_fragment:T1,roughnessmap_pars_fragment:w1,shadowmap_pars_fragment:E1,shadowmap_pars_vertex:A1,shadowmap_vertex:C1,shadowmask_pars_fragment:R1,skinbase_vertex:P1,skinning_pars_vertex:I1,skinning_vertex:L1,skinnormal_vertex:D1,specularmap_fragment:N1,specularmap_pars_fragment:U1,tonemapping_fragment:O1,tonemapping_pars_fragment:F1,transmission_fragment:B1,transmission_pars_fragment:k1,uv_pars_fragment:z1,uv_pars_vertex:G1,uv_vertex:V1,worldpos_vertex:H1,background_vert:W1,background_frag:X1,backgroundCube_vert:q1,backgroundCube_frag:Y1,cube_vert:Z1,cube_frag:J1,depth_vert:$1,depth_frag:K1,distance_vert:Q1,distance_frag:j1,equirect_vert:eT,equirect_frag:tT,linedashed_vert:nT,linedashed_frag:iT,meshbasic_vert:rT,meshbasic_frag:sT,meshlambert_vert:aT,meshlambert_frag:oT,meshmatcap_vert:lT,meshmatcap_frag:cT,meshnormal_vert:uT,meshnormal_frag:hT,meshphong_vert:fT,meshphong_frag:dT,meshphysical_vert:pT,meshphysical_frag:mT,meshtoon_vert:gT,meshtoon_frag:_T,points_vert:xT,points_frag:yT,shadow_vert:vT,shadow_frag:ST,sprite_vert:MT,sprite_frag:bT},Xe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},br={basic:{uniforms:Yn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Yn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Yn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Yn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Yn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new tt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Yn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Yn([Xe.points,Xe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Yn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Yn([Xe.common,Xe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Yn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Yn([Xe.sprite,Xe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Yn([Xe.common,Xe.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Yn([Xe.lights,Xe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};br.physical={uniforms:Yn([br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Af={r:0,b:0,g:0},TT=new St,Yx=new et;Yx.set(-1,0,0,0,1,0,0,0,1);function wT(r,e,t,n,i,s){let a=new tt(0),o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){let y=v.backgroundBlurriness>0;M=e.get(M,y)}return M}function g(v){let M=!1,y=f(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),M=!0);let b=r.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(v,M){let y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new Et(new yr(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:ya(br.backgroundCube.uniforms),vertexShader:br.backgroundCube.vertexShader,fragmentShader:br.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(TT.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yx),c.material.toneMapped=ft.getTransfer(y.colorSpace)!==vt,(u!==y||d!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Et(new Sr(2,2),new bn({name:"BackgroundMaterial",uniforms:ya(br.background.uniforms),vertexShader:br.background.vertexShader,fragmentShader:br.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ft.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(Af,cm(r)),t.buffers.color.setClear(Af.r,Af.g,Af.b,M,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:p,dispose:_}}function ET(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null),s=i,a=!1;function o(V,O,ne,B,K){let ie=!1,H=d(V,B,ne,O);s!==H&&(s=H,c(s.object)),ie=f(V,B,ne,K),ie&&g(V,B,ne,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,y(V,O,ne,B),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return r.createVertexArray()}function c(V){return r.bindVertexArray(V)}function u(V){return r.deleteVertexArray(V)}function d(V,O,ne,B){let K=B.wireframe===!0,ie=n[O.id];ie===void 0&&(ie={},n[O.id]=ie);let H=V.isInstancedMesh===!0?V.id:0,Z=ie[H];Z===void 0&&(Z={},ie[H]=Z);let re=Z[ne.id];re===void 0&&(re={},Z[ne.id]=re);let I=re[K];return I===void 0&&(I=h(l()),re[K]=I),I}function h(V){let O=[],ne=[],B=[];for(let K=0;K<t;K++)O[K]=0,ne[K]=0,B[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:ne,attributeDivisors:B,object:V,attributes:{},index:null}}function f(V,O,ne,B){let K=s.attributes,ie=O.attributes,H=0,Z=ne.getAttributes();for(let re in Z)if(Z[re].location>=0){let oe=K[re],Ce=ie[re];if(Ce===void 0&&(re==="instanceMatrix"&&V.instanceMatrix&&(Ce=V.instanceMatrix),re==="instanceColor"&&V.instanceColor&&(Ce=V.instanceColor)),oe===void 0||oe.attribute!==Ce||Ce&&oe.data!==Ce.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function g(V,O,ne,B){let K={},ie=O.attributes,H=0,Z=ne.getAttributes();for(let re in Z)if(Z[re].location>=0){let oe=ie[re];oe===void 0&&(re==="instanceMatrix"&&V.instanceMatrix&&(oe=V.instanceMatrix),re==="instanceColor"&&V.instanceColor&&(oe=V.instanceColor));let Ce={};Ce.attribute=oe,oe&&oe.data&&(Ce.data=oe.data),K[re]=Ce,H++}s.attributes=K,s.attributesNum=H,s.index=B}function p(){let V=s.newAttributes;for(let O=0,ne=V.length;O<ne;O++)V[O]=0}function m(V){_(V,0)}function _(V,O){let ne=s.newAttributes,B=s.enabledAttributes,K=s.attributeDivisors;ne[V]=1,B[V]===0&&(r.enableVertexAttribArray(V),B[V]=1),K[V]!==O&&(r.vertexAttribDivisor(V,O),K[V]=O)}function v(){let V=s.newAttributes,O=s.enabledAttributes;for(let ne=0,B=O.length;ne<B;ne++)O[ne]!==V[ne]&&(r.disableVertexAttribArray(ne),O[ne]=0)}function M(V,O,ne,B,K,ie,H){H===!0?r.vertexAttribIPointer(V,O,ne,K,ie):r.vertexAttribPointer(V,O,ne,B,K,ie)}function y(V,O,ne,B){p();let K=B.attributes,ie=ne.getAttributes(),H=O.defaultAttributeValues;for(let Z in ie){let re=ie[Z];if(re.location>=0){let I=K[Z];if(I===void 0&&(Z==="instanceMatrix"&&V.instanceMatrix&&(I=V.instanceMatrix),Z==="instanceColor"&&V.instanceColor&&(I=V.instanceColor)),I!==void 0){let oe=I.normalized,Ce=I.itemSize,Ne=e.get(I);if(Ne===void 0)continue;let J=Ne.buffer,ge=Ne.type,Ee=Ne.bytesPerElement,Q=ge===r.INT||ge===r.UNSIGNED_INT||I.gpuType===Vh;if(I.isInterleavedBufferAttribute){let W=I.data,k=W.isInterleavedBuffer===!0?W.stride:W.itemSize,z=I.offset;if(W.isInstancedInterleavedBuffer||W.isInstancedBufferAttribute){for(let q=0;q<re.locationSize;q++)_(re.location+q,W.meshPerAttribute);V.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let q=0;q<re.locationSize;q++)m(re.location+q);r.bindBuffer(r.ARRAY_BUFFER,J);for(let q=0;q<re.locationSize;q++)M(re.location+q,Ce/re.locationSize,ge,oe,k*Ee,(z+Ce/re.locationSize*q)*Ee,Q)}else{if(I.isInstancedBufferAttribute){for(let W=0;W<re.locationSize;W++)_(re.location+W,I.meshPerAttribute);V.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let W=0;W<re.locationSize;W++)m(re.location+W);r.bindBuffer(r.ARRAY_BUFFER,J);for(let W=0;W<re.locationSize;W++)M(re.location+W,Ce/re.locationSize,ge,oe,Ce*Ee,Ce/re.locationSize*W*Ee,Q)}}else if(H!==void 0){let oe=H[Z];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(re.location,oe);break;case 3:r.vertexAttrib3fv(re.location,oe);break;case 4:r.vertexAttrib4fv(re.location,oe);break;default:r.vertexAttrib1fv(re.location,oe)}}}}v()}function b(){L();for(let V in n){let O=n[V];for(let ne in O){let B=O[ne];for(let K in B){let ie=B[K];for(let H in ie)u(ie[H].object),delete ie[H];delete B[K]}}delete n[V]}}function T(V){if(n[V.id]===void 0)return;let O=n[V.id];for(let ne in O){let B=O[ne];for(let K in B){let ie=B[K];for(let H in ie)u(ie[H].object),delete ie[H];delete B[K]}}delete n[V.id]}function x(V){for(let O in n){let ne=n[O];for(let B in ne){let K=ne[B];if(K[V.id]===void 0)continue;let ie=K[V.id];for(let H in ie)u(ie[H].object),delete ie[H];delete K[V.id]}}}function S(V){for(let O in n){let ne=n[O],B=V.isInstancedMesh===!0?V.id:0,K=ne[B];if(K!==void 0){for(let ie in K){let H=K[ie];for(let Z in H)u(H[Z].object),delete H[Z];delete K[ie]}delete ne[B],Object.keys(ne).length===0&&delete n[O]}}}function L(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:p,enableAttribute:m,disableUnusedAttributes:v}}function AT(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function CT(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==tr&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let S=x===In&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==di&&x!==Vi&&!S&&n.convert(x)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&nt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:p,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:b,samples:T}}function RT(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Ki,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,p=d.clipIntersection,m=d.clipShadows,_=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{let v=s?0:n,M=v*4,y=_.clippingState||null;l.value=y,y=u(g,h,M,f);for(let b=0;b!==M;++b)y[b]=t[b];_.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let p=d!==null?d.length:0,m=null;if(p!==0){if(m=l.value,g!==!0||m===null){let _=f+p*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let M=0,y=f;M!==p;++M,y+=4)a.copy(d[M]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}var bc=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Vl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new yr(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:ya(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:Zr});s.uniforms.tEquirect.value=t;let a=new Et(i,s),o=t.minFilter;return t.minFilter===Jr&&(t.minFilter=ri),new bo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},wx=256,PT=3,IT=20,Zx=256,Jx=16,LT=3,DT=new te,NT=new tt,Rf=class r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new bo(1,10,null),this._boxMesh=new Et(new yr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=DT}=s,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,p=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,p===null&&(e.background=l.getClearColor(NT));let m=new bo(n,i,u);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=g,e.background=p,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ax(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(wx,_x(e))}_fromTexture(e,t){e.mapping===_a||e.mapping===Ao?this._setSize(e.image.length===0?wx:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Ex(e,!1,!1),n=Math.log2(e)-PT;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ex(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===_a||e.mapping===Ao?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cx()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ax()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=UT(),this._integrationMaterial=OT());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Jx);for(let a=0;a<=n;a++){let o=r.lodToRoughness(a,n);if(a>n-LT)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Zx*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=FT());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function Ex(r,e,t){return new bc(r,{minFilter:Jr,generateMipmaps:e,type:In,colorSpace:Il,depthBuffer:t})}function Tc(r,e,t){return new bn({name:r,uniforms:e,vertexShader:ct.cube_vert,fragmentShader:t,side:Rn,blending:Zr,depthTest:!1,depthWrite:!1})}function UT(){return Tc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Zx}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function OT(){return Tc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Jx}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function FT(){return Tc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${IT}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ax(){return Tc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Cx(){return Tc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function BT(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){let f=h.mapping;if(f===kh||f===zh)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let p=new bc(g.height);return p.fromEquirectangularTexture(r,h),e.set(h,p),h.addEventListener("dispose",c),o(p.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,g=f===kh||f===zh,p=f===_a||f===Ao;if(g||p){let m=t.get(h),_=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new Rf(r)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let v=h.image;return g&&v&&v.height>0||p&&v&&l(v)?(n===null&&(n=new Rf(r)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===kh?h.mapping=_a:f===zh&&(h.mapping=Ao),h}function l(h){let f=0,g=6;for(let p=0;p<g;p++)h[p]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function kT(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Al("WebGLRenderer: "+n+" extension not supported."),i}}}function zT(r,e,t,n){let i={},s=new WeakMap,a=new FinalizationRegistry(g=>delete i[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete i[g.id],a.unregister(g);let p=s.get(g);p&&(e.remove(p),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,p){return i[p.id]!==void 0||(p.addEventListener("dispose",o),i[p.id]=new WeakRef(p),a.register(p,p.id,p),t.memory.geometries++),p}function u(g){let p=g.attributes;for(let m in p)e.update(p[m],r.ARRAY_BUFFER)}function d(g){let p=g.index,m=g.attributes.position,_=0;if(m===void 0)return;let v=p!==null?p.array.length:m.array.length/3-1,M=m.count>=65535?Bl:Fl,y=new M(Math.ceil(v/3)*6,1),b=y.array;if(p!==null){let x=p.array;_=p.version;for(let S=0,L=0;S<v;S+=3){let C=x[S+0],V=x[S+1],O=x[S+2];b[L++]=C,b[L++]=V,b[L++]=V,b[L++]=O,b[L++]=O,b[L++]=C}}else{_=m.version;for(let x=0,S=0;x<v;x+=3){let L=x+0,C=x+1,V=x+2;b[S++]=L,b[S++]=C,b[S++]=C,b[S++]=V,b[S++]=V,b[S++]=L}}y.version=_;let T=s.get(g);T&&e.remove(T),s.set(g,y)}function h(g){let p=s.get(g);if(p){let m=g.index;m!==null&&p.version<m.version&&d(g)}else d(g);return s.get(g)}function f(){for(let g in i){let p=i[g].deref();p!==void 0&&l(p)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function GT(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let p=0;for(let m=0;m<f;m++)p+=h[m];t.update(p,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function VT(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function HT(r,e,t){let n=new WeakMap,i=new zt;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let L=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),p===!0&&(M=3);let y=o.attributes.position.count*M,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*b*4*d),x=new Nl(T,y,b,d);x.type=Vi,x.needsUpdate=!0;let S=M*4;for(let C=0;C<d;C++){let V=m[C],O=_[C],ne=v[C],B=y*b*4*C;for(let K=0;K<V.count;K++){let ie=K*S;f===!0&&(i.fromBufferAttribute(V,K),T[B+ie+0]=i.x,T[B+ie+1]=i.y,T[B+ie+2]=i.z,T[B+ie+3]=0),g===!0&&(i.fromBufferAttribute(O,K),T[B+ie+4]=i.x,T[B+ie+5]=i.y,T[B+ie+6]=i.z,T[B+ie+7]=0),p===!0&&(i.fromBufferAttribute(ne,K),T[B+ie+8]=i.x,T[B+ie+9]=i.y,T[B+ie+10]=i.z,T[B+ie+11]=ne.itemSize===4?i.w:1)}}h={count:d,texture:x,size:new Te(y,b)},n.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let p=0;p<c.length;p++)f+=c[p];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function WT(r,e,t,n,i){let s=new WeakMap;function a(c){let u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var XT={[oc]:"LINEAR_TONE_MAPPING",[lc]:"REINHARD_TONE_MAPPING",[cc]:"CINEON_TONE_MAPPING",[uc]:"ACES_FILMIC_TONE_MAPPING",[fc]:"AGX_TONE_MAPPING",[dc]:"NEUTRAL_TONE_MAPPING",[hc]:"CUSTOM_TONE_MAPPING"};function qT(r,e,t,n,i,s){let a=new fn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new Ut;u.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new dt([0,2,0,0,2,0],2));let d=new So({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Et(u,d),f=new da(-1,1,1,-1,0,1),g=null,p=null,m=!1,_,v=null,M=[],y=!1;this.setSize=function(b,T){a.setSize(b,T),o!==null&&o.setSize(b,T),l!==null&&l.setSize(b,T);for(let x=0;x<M.length;x++){let S=M[x];S.setSize&&S.setSize(b,T)}},this.setEffects=function(b){M=b,y=M.length>0&&M[0].isRenderPass===!0;let T=a.width,x=a.height;M.length>0&&o===null&&(o=new fn(T,x,{type:In,depthBuffer:!1,stencilBuffer:!1}),l=new fn(T,x,{type:In,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&M.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Yr(T,x),s===!0&&(c.format=$r,c.type=xa)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<M.length;L++){let C=M[L];C.setSize&&C.setSize(T,x),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(b,T){if(m||b.toneMapping===Gi&&M.length===0)return!1;if(v=T,T!==null){let x=T.width,S=T.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return y===!1&&b.setRenderTarget(a),_=b.toneMapping,b.toneMapping=Gi,!0},this.hasRenderPass=function(){return y},this.end=function(b,T){b.toneMapping=_,m=!0;let x=a,S=o;for(let L=0;L<M.length;L++){let C=M[L];C.enabled!==!1&&(C.render(b,S,x,T),C.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(g!==b.outputColorSpace||p!==b.toneMapping){g=b.outputColorSpace,p=b.toneMapping,d.defines={},ft.getTransfer(g)===vt&&(d.defines.SRGB_TRANSFER="");let L=XT[p];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(v),b.render(h,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var $x=new si,Kx=new Yr(1,1),Qx=new Hl(1),jx=new Nl,ey=new ph,ty=new Vl,Rx=[],Px=[],Ix=new Float32Array(16),Lx=new Float32Array(9),Dx=new Float32Array(4);function Lo(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Rx[i];if(s===void 0&&(s=new Float32Array(i),Rx[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function dn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function pn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Pf(r,e){let t=Px[e];t===void 0&&(t=new Int32Array(e),Px[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function YT(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ZT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2fv(this.addr,e),pn(t,e)}}function JT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;r.uniform3fv(this.addr,e),pn(t,e)}}function $T(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4fv(this.addr,e),pn(t,e)}}function KT(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;Dx.set(n),r.uniformMatrix2fv(this.addr,!1,Dx),pn(t,n)}}function QT(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;Lx.set(n),r.uniformMatrix3fv(this.addr,!1,Lx),pn(t,n)}}function jT(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;Ix.set(n),r.uniformMatrix4fv(this.addr,!1,Ix),pn(t,n)}}function ew(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function tw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2iv(this.addr,e),pn(t,e)}}function nw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3iv(this.addr,e),pn(t,e)}}function iw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4iv(this.addr,e),pn(t,e)}}function rw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;r.uniform2uiv(this.addr,e),pn(t,e)}}function aw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;r.uniform3uiv(this.addr,e),pn(t,e)}}function ow(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;r.uniform4uiv(this.addr,e),pn(t,e)}}function If(r){return r.version===0&&(r.compareFunction=rm,r.needsUpdate=!0),r}function lw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=If(Kx):s=$x,t.setTexture2D(e||s,i)}function cw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ey,i)}function uw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=If(Qx):s=ty,t.setTextureCube(e||s,i)}function hw(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jx,i)}function fw(r){switch(r){case 5126:return YT;case 35664:return ZT;case 35665:return JT;case 35666:return $T;case 35674:return KT;case 35675:return QT;case 35676:return jT;case 5124:case 35670:return ew;case 35667:case 35671:return tw;case 35668:case 35672:return nw;case 35669:case 35673:return iw;case 5125:return rw;case 36294:return sw;case 36295:return aw;case 36296:return ow;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return cw;case 35680:case 36300:case 36308:case 36293:return uw;case 36289:case 36303:case 36311:case 36292:return hw}}function dw(r,e){r.uniform1fv(this.addr,e)}function pw(r,e){let t=Lo(e,this.size,2);r.uniform2fv(this.addr,t)}function mw(r,e){let t=Lo(e,this.size,3);r.uniform3fv(this.addr,t)}function gw(r,e){let t=Lo(e,this.size,4);r.uniform4fv(this.addr,t)}function _w(r,e){let t=Lo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xw(r,e){let t=Lo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yw(r,e){let t=Lo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function vw(r,e){r.uniform1iv(this.addr,e)}function Sw(r,e){r.uniform2iv(this.addr,e)}function Mw(r,e){r.uniform3iv(this.addr,e)}function bw(r,e){r.uniform4iv(this.addr,e)}function Tw(r,e){r.uniform1uiv(this.addr,e)}function ww(r,e){r.uniform2uiv(this.addr,e)}function Ew(r,e){r.uniform3uiv(this.addr,e)}function Aw(r,e){r.uniform4uiv(this.addr,e)}function Cw(r,e,t){let n=this.cache,i=e.length,s=Pf(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=If(Kx):a=$x;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Rw(r,e,t){let n=this.cache,i=e.length,s=Pf(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ey,s[a])}function Pw(r,e,t){let n=this.cache,i=e.length,s=Pf(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=If(Qx):a=ty;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function Iw(r,e,t){let n=this.cache,i=e.length,s=Pf(t,i);dn(n,s)||(r.uniform1iv(this.addr,s),pn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||jx,s[a])}function Lw(r){switch(r){case 5126:return dw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return _w;case 35675:return xw;case 35676:return yw;case 5124:case 35670:return vw;case 35667:case 35671:return Sw;case 35668:case 35672:return Mw;case 35669:case 35673:return bw;case 5125:return Tw;case 36294:return ww;case 36295:return Ew;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Iw}}var vm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fw(t.type)}},Sm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lw(t.type)}},Mm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},xm=/(\w+)(\])?(\[|\.)?/g;function Nx(r,e){r.seq.push(e),r.map[e.id]=e}function Dw(r,e,t){let n=r.name,i=n.length;for(xm.lastIndex=0;;){let s=xm.exec(n),a=xm.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Nx(t,c===void 0?new vm(o,r,e):new Sm(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Mm(o),Nx(t,d)),t=d}}}var Po=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Dw(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ux(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Nw=37297,Uw=0;function Ow(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ox=new et;function Fw(r){ft._getMatrix(Ox,ft.workingColorSpace,r);let e=`mat3( ${Ox.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case Ll:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Fx(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ow(r.getShaderSource(e),o)}else return s}function Bw(r,e){let t=Fw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var kw={[oc]:"Linear",[lc]:"Reinhard",[cc]:"Cineon",[uc]:"ACESFilmic",[fc]:"AgX",[dc]:"Neutral",[hc]:"Custom"};function zw(r,e){let t=kw[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cf=new te;function Gw(){ft.getLuminanceCoefficients(Cf);let r=Cf.x.toFixed(4),e=Cf.y.toFixed(4),t=Cf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mc).join(`
`)}function Hw(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ww(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Mc(r){return r!==""}function Bx(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function kx(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function bm(r){return r.replace(Xw,qw)}function qw(r,e){let t=ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return bm(t)}var Yw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zx(r){return r.replace(Yw,Zw)}function Zw(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Gx(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Jw={[ac]:"SHADOWMAP_TYPE_PCF",[wo]:"SHADOWMAP_TYPE_VSM"};function $w(r){return Jw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kw={[Ao]:"ENVMAP_MODE_REFRACTION"};function Qw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Kw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var jw={[Zp]:"ENVMAP_BLENDING_MULTIPLY",[tx]:"ENVMAP_BLENDING_MIX",[nx]:"ENVMAP_BLENDING_ADD"};function eE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":jw[r.combine]||"ENVMAP_BLENDING_NONE"}function tE(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=$w(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Qw(t),d=eE(t),h=Vw(t),f=Hw(s),g=i.createProgram(),p,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Mc).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Mc).join(`
`),m.length>0&&(m+=`
`)):(p=[Gx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mc).join(`
`),m=[Gx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?ct.tonemapping_pars_fragment:"",t.toneMapping!==Gi?zw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Bw("linearToOutputTexel",t.outputColorSpace),Gw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mc).join(`
`)),a=bm(a),a=Bx(a,t),a=kx(a,t),o=bm(o),o=Bx(o,t),o=kx(o,t),a=zx(a),o=zx(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+p+a,M=_+m+o,y=Ux(i,i.VERTEX_SHADER,v),b=Ux(i,i.FRAGMENT_SHADER,M);i.attachShader(g,y),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(C){if(r.debug.checkShaderErrors){let V=i.getProgramInfoLog(g)||"",O=i.getShaderInfoLog(y)||"",ne=i.getShaderInfoLog(b)||"",B=V.trim(),K=O.trim(),ie=ne.trim(),H=!0,Z=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,y,b);else{let re=Fx(i,y,"vertex"),I=Fx(i,b,"fragment");rt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+re+`
`+I)}else B!==""?nt("WebGLProgram: Program Info Log:",B):(K===""||ie==="")&&(Z=!1);Z&&(C.diagnostics={runnable:H,programLog:B,vertexShader:{log:K,prefix:p},fragmentShader:{log:ie,prefix:m}})}i.deleteShader(y),i.deleteShader(b),x=new Po(i,g),S=Ww(i,g)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(g,Nw)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Uw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=b,this}var nE=0,Tm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wm(e),t.set(e,n)),n}},wm=class{constructor(e){this.id=nE++,this.code=e,this.usedTimes=0}};function iE(r){return r===Cs||r===yc||r===vc}function rE(r,e,t,n,i,s){let a=new Ul,o=new Tm,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,S,L,C,V,O){let ne=C.fog,B=V.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,ie=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||K,ie),Z=h[x.type],re=n.precision;x.precision!==null&&(re=n.getMaxPrecision(x.precision),re!==x.precision&&nt("WebGLProgram.getParameters:",x.precision,"not supported, using",re,"instead."));let I=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,oe=I!==void 0?I.length:0,Ce=0;B.morphAttributes.position!==void 0&&(Ce=1),B.morphAttributes.normal!==void 0&&(Ce=2),B.morphAttributes.color!==void 0&&(Ce=3);let Ne,J,ge,Ee;if(Z){let Se=br[Z];Ne=Se.vertexShader,J=Se.fragmentShader}else{Ne=x.vertexShader,J=x.fragmentShader;let Se=o.getVertexShaderStage(x),qe=o.getFragmentShaderStage(x);o.update(x,Se,qe),ge=Se.id,Ee=qe.id}let Q=r.getRenderTarget(),W=r.state.buffers.depth.getReversed(),k=V.isInstancedMesh===!0,z=V.isBatchedMesh===!0,q=!!x.map,fe=!!x.matcap,le=!!H,D=le&&H.isPMREMTexture===!0,$=!!x.aoMap,G=!!x.lightMap,N=!!x.bumpMap&&x.wireframe===!1,j=!!x.normalMap,Y=!!x.displacementMap,A=!!x.emissiveMap,P=!!x.metalnessMap,F=!!x.roughnessMap,se=x.anisotropy>0,U=x.clearcoat>0,Re=x.diffuseRoughness>0,Ve=x.dispersion>0,De=x.retroreflectivity>0,_e=x.iridescence>0,ke=x.sheen>0,Me=x.transmission>0,ze=se&&!!x.anisotropyMap,R=U&&!!x.clearcoatMap,w=U&&!!x.clearcoatNormalMap,ae=U&&!!x.clearcoatRoughnessMap,we=Re&&!!x.diffuseRoughnessMap,ye=_e&&!!x.iridescenceMap,Le=_e&&!!x.iridescenceThicknessMap,Oe=ke&&!!x.sheenColorMap,ce=ke&&!!x.sheenRoughnessMap,xe=!!x.specularMap,Ie=!!x.specularColorMap,X=!!x.specularIntensityMap,pe=Me&&!!x.transmissionMap,me=Me&&!!x.thicknessMap,Fe=!!x.gradientMap,Ae=!!x.alphaMap,Ue=x.alphaTest>0,Pe=!!x.alphaHash,Be=!!x.extensions,be=Gi;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(be=r.toneMapping);let ve=D?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ge={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Ne,fragmentShader:J,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:re,batching:z,batchingColor:z&&V._colorsTexture!==null,instancing:k,instancingColor:k&&V.instanceColor!==null,instancingMorph:k&&V.morphTexture!==null,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:q,matcap:fe,envMap:le,envMapMode:le&&H.mapping,envMapPMREM:D,envMapMaxLod:D?ve.length-1:null,envMapSize:D?ve[0].width:null,aoMap:$,lightMap:G,bumpMap:N,normalMap:j,displacementMap:Y,emissiveMap:A,normalMapObjectSpace:j&&x.normalMapType===sx,normalMapTangentSpace:j&&x.normalMapType===Ef,packedNormalMap:j&&x.normalMapType===Ef&&iE(x.normalMap.format),metalnessMap:P,roughnessMap:F,anisotropy:se,anisotropyMap:ze,clearcoat:U,clearcoatMap:R,clearcoatNormalMap:w,clearcoatRoughnessMap:ae,diffuseRoughness:Re,diffuseRoughnessMap:we,dispersion:Ve,retroreflection:De,iridescence:_e,iridescenceMap:ye,iridescenceThicknessMap:Le,sheen:ke,sheenColorMap:Oe,sheenRoughnessMap:ce,specularMap:xe,specularColorMap:Ie,specularIntensityMap:X,transmission:Me,transmissionMap:pe,thicknessMap:me,gradientMap:Fe,opaque:x.transparent===!1&&x.blending===Eo&&x.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Ue,alphaHash:Pe,combine:x.combine,mapUv:q&&f(x.map.channel),aoMapUv:$&&f(x.aoMap.channel),lightMapUv:G&&f(x.lightMap.channel),bumpMapUv:N&&f(x.bumpMap.channel),normalMapUv:j&&f(x.normalMap.channel),displacementMapUv:Y&&f(x.displacementMap.channel),emissiveMapUv:A&&f(x.emissiveMap.channel),metalnessMapUv:P&&f(x.metalnessMap.channel),roughnessMapUv:F&&f(x.roughnessMap.channel),anisotropyMapUv:ze&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ye&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ce&&f(x.sheenRoughnessMap.channel),specularMapUv:xe&&f(x.specularMap.channel),specularColorMapUv:Ie&&f(x.specularColorMap.channel),specularIntensityMapUv:X&&f(x.specularIntensityMap.channel),transmissionMapUv:pe&&f(x.transmissionMap.channel),thicknessMapUv:me&&f(x.thicknessMap.channel),alphaMapUv:Ae&&f(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(j||se),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(q||Ae),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&j===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:W,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ce,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(Se=>Se.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:be,decodeVideoTexture:q&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:A&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pn,flipSided:x.side===Rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Be&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&x.extensions.multiDraw===!0||z)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function p(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)S.push(L),S.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(S,x),_(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function _(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let S=h[x.type],L;if(S){let C=br[S];L=Qr.clone(C.uniforms)}else L=x.uniforms;return L}function M(x,S){let L=u.get(S);return L!==void 0?++L.usedTimes:(L=new tE(r,S,x,i),c.push(L),u.set(S,L)),L}function y(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:M,releaseProgram:y,releaseShaderCache:b,programs:c,dispose:T}}function sE(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function aE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Vx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Hx(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,p,m,_){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:p,renderOrder:h.renderOrder,z:m,group:_},r[e]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=g,v.materialVariant=a(h),v.groupOrder=p,v.renderOrder=h.renderOrder,v.z=m,v.group=_),e++,v}function l(h,f,g,p,m,_,v){v.reversedDepth===!0&&(m=-m);let M=o(h,f,g,p,m,_);g.transmission>0?n.push(M):g.transparent===!0?i.push(M):t.push(M)}function c(h,f,g,p,m,_){let v=o(h,f,g,p,m,_);g.transmission>0?n.unshift(v):g.transparent===!0?i.unshift(v):t.unshift(v)}function u(h,f){t.length>1&&t.sort(h||aE),n.length>1&&n.sort(f||Vx),i.length>1&&i.sort(f||Vx)}function d(){for(let h=e,f=r.length;h<f;h++){let g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function oE(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new Hx,r.set(n,[a])):i>=s.length?(a=new Hx,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function lE(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new te,color:new tt};break;case"SpotLight":t={position:new te,direction:new te,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new te,halfWidth:new te,halfHeight:new te};break}return r[e.id]=t,t}}}function cE(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var uE=0;function hE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function fE(r){let e=new lE,t=cE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new te);let i=new te,s=new St,a=new St;function o(c){let u=0,d=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,p=0,m=0,_=0,v=0,M=0,y=0,b=0,T=0,x=0,S=0,L=0,C=0;c.sort(hE);for(let O=0,ne=c.length;O<ne;O++){let B=c[O],K=B.color,ie=B.intensity,H=B.distance,Z=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Cs?Z=B.shadow.map.texture:Z=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=K.r*ie,d+=K.g*ie,h+=K.b*ie;else if(B.isLightProbe){for(let re=0;re<9;re++)n.probe[re].addScaledVector(B.sh.coefficients[re],ie);C++}else if(B.isSunLight){let re=e.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let I=B.shadow,oe=t.get(B);oe.shadowIntensity=I.intensity,oe.shadowBias=I.bias,oe.shadowNormalBias=I.normalBias,oe.shadowRadius=I.radius,oe.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),n.sunShadow[g]=oe,n.sunShadowMap[g]=Z;let Ce=I.getViewportCount();for(let Ne=0;Ne<Ce;Ne++)n.sunShadowMatrix[p+Ne]=I.getMatrix(Ne),n.sunShadowCascade[p+Ne]=I._cascadeData[Ne];p+=Ce,g++}n.sun[f]=re,f++}else if(B.isDirectionalLight){let re=e.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let I=B.shadow,oe=t.get(B);oe.shadowIntensity=I.intensity,oe.shadowBias=I.bias,oe.shadowNormalBias=I.normalBias,oe.shadowRadius=I.radius,oe.shadowMapSize=I.mapSize,n.directionalShadow[m]=oe,n.directionalShadowMap[m]=Z,n.directionalShadowMatrix[m]=B.shadow.matrix,b++}n.directional[m]=re,m++}else if(B.isSpotLight){let re=e.get(B);re.position.setFromMatrixPosition(B.matrixWorld),re.color.copy(K).multiplyScalar(ie),re.distance=H,re.coneCos=Math.cos(B.angle),re.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),re.decay=B.decay,n.spot[v]=re;let I=B.shadow;if(B.map&&(n.spotLightMap[S]=B.map,S++,I.updateMatrices(B),B.castShadow&&L++),n.spotLightMatrix[v]=I.matrix,B.castShadow){let oe=t.get(B);oe.shadowIntensity=I.intensity,oe.shadowBias=I.bias,oe.shadowNormalBias=I.normalBias,oe.shadowRadius=I.radius,oe.shadowMapSize=I.mapSize,n.spotShadow[v]=oe,n.spotShadowMap[v]=Z,x++}v++}else if(B.isRectAreaLight){let re=e.get(B);re.color.copy(K).multiplyScalar(ie),re.halfWidth.set(B.width*.5,0,0),re.halfHeight.set(0,B.height*.5,0),n.rectArea[M]=re,M++}else if(B.isPointLight){let re=e.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity),re.distance=B.distance,re.decay=B.decay,B.castShadow){let I=B.shadow,oe=t.get(B);oe.shadowIntensity=I.intensity,oe.shadowBias=I.bias,oe.shadowNormalBias=I.normalBias,oe.shadowRadius=I.radius,oe.shadowMapSize=I.mapSize,oe.shadowCameraNear=I.camera.near,oe.shadowCameraFar=I.camera.far,n.pointShadow[_]=oe,n.pointShadowMap[_]=Z,n.pointShadowMatrix[_]=B.shadow.matrix,T++}n.point[_]=re,_++}else if(B.isHemisphereLight){let re=e.get(B);re.skyColor.copy(B.color).multiplyScalar(ie),re.groundColor.copy(B.groundColor).multiplyScalar(ie),n.hemi[y]=re,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xe.LTC_FLOAT_1,n.rectAreaLTC2=Xe.LTC_FLOAT_2):(n.rectAreaLTC1=Xe.LTC_HALF_1,n.rectAreaLTC2=Xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let V=n.hash;(V.sunLength!==f||V.directionalLength!==m||V.pointLength!==_||V.spotLength!==v||V.rectAreaLength!==M||V.hemiLength!==y||V.numSunShadows!==g||V.numDirectionalShadows!==b||V.numPointShadows!==T||V.numSpotShadows!==x||V.numSpotMaps!==S||V.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=M,n.point.length=_,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=p,n.sunShadowCascade.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-L,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=C,V.sunLength=f,V.directionalLength=m,V.pointLength=_,V.spotLength=v,V.rectAreaLength=M,V.hemiLength=y,V.numSunShadows=g,V.numDirectionalShadows=b,V.numPointShadows=T,V.numSpotShadows=x,V.numSpotMaps=S,V.numLightProbes=C,n.version=uE++)}function l(c,u){let d=0,h=0,f=0,g=0,p=0,m=0,_=u.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){let y=c[v];if(y.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(_),d++}else if(y.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(_),h++}else if(y.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(_),g++}else if(y.isRectAreaLight){let b=n.rectArea[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),a.identity(),s.copy(y.matrixWorld),s.premultiply(_),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(_),f++}else if(y.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(_),m++}}}return{setup:o,setupView:l,state:n}}function Wx(r){let e=new fE(r),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),i.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function dE(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new Wx(r),e.set(i,[o])):s>=a.length?(o=new Wx(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var pE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gE=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],_E=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],Xx=new St,Sc=new te,ym=new te;function xE(r,e,t){let n=new Ss,i=new Te,s=new Te,a=new zt,o=new Eh,l=new Ah,c={},u=t.maxTextureSize,d={[As]:Rn,[Rn]:As,[Pn]:Pn},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:pE,fragmentShader:mE}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new Et(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let _=this.type;this.render=function(T,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===O_&&(nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ac);let L=r.getRenderTarget(),C=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),O=r.state;O.setBlending(Zr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let ne=_!==this.type;ne&&x.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(K=>K.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,K=T.length;B<K;B++){let ie=T[B],H=ie.shadow;if(H===void 0){nt("WebGLShadowMap:",ie,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let Z=H.getFrameExtents();i.multiply(Z),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,H.mapSize.y=s.y));let re=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=re,H.map===null||ne===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===wo){if(ie.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new fn(i.x,i.y,{format:Cs,type:In,minFilter:ri,magFilter:ri,generateMipmaps:!1}),H.map.texture.name=ie.name+".shadowMap",H.map.depthTexture=new Yr(i.x,i.y,Vi),H.map.depthTexture.name=ie.name+".shadowMapDepth",H.map.depthTexture.format=Wr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Sn,H.map.depthTexture.magFilter=Sn}else ie.isPointLight?(H.map=new bc(i.x),H.map.depthTexture=new Hl(i.x,er)):(H.map=new fn(i.x,i.y),H.map.depthTexture=new Yr(i.x,i.y,er)),H.map.depthTexture.name=ie.name+".shadowMap",H.map.depthTexture.format=Wr,this.type===ac?(H.map.depthTexture.compareFunction=re?im:nm,H.map.depthTexture.minFilter=ri,H.map.depthTexture.magFilter=ri):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Sn,H.map.depthTexture.magFilter=Sn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==i.x||H.map.height!==i.y)&&H.map.setSize(i.x,i.y);let I=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();ie.isPointLight!==!0&&H.updateMatrices(ie,S);let oe=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let Ce=0;Ce<I;Ce++){let Ne=H.getCamera(Ce);if(ie.isPointLight){let J=H.camera,ge=H.matrix,Ee=ie.distance||J.far;Ee!==J.far&&(J.far=Ee,J.updateProjectionMatrix()),Sc.setFromMatrixPosition(ie.matrixWorld),J.position.copy(Sc),ym.copy(J.position),ym.add(gE[Ce]),J.up.copy(_E[Ce]),J.lookAt(ym),J.updateMatrixWorld(),ge.makeTranslation(-Sc.x,-Sc.y,-Sc.z),Xx.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Xx,J.coordinateSystem,J.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,Ce),r.clear();else{Ce===0&&(r.setRenderTarget(H.map),r.clear());let J=H.getViewport(Ce);a.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),O.viewport(a)}n=H.getFrustum(Ce),y(x,S,Ne,ie,oe,this.type)}H.isPointLightShadow!==!0&&this.type===wo&&v(H,S),H.needsUpdate=!1}_=this.type,m.needsUpdate=!1,r.setRenderTarget(L,C,V)};function v(T,x){let S=e.update(p);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new fn(i.x,i.y,{format:Cs,type:In}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(x,null,S,h,p,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(x,null,S,f,p,null)}function M(T,x,S,L){let C=null,V=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)C=V;else if(C=S.isPointLight===!0?l:o,r.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=C.uuid,ne=x.uuid,B=c[O];B===void 0&&(B={},c[O]=B);let K=B[ne];K===void 0&&(K=C.clone(),B[ne]=K,x.addEventListener("dispose",b)),C=K}if(C.visible=x.visible,C.wireframe=x.wireframe,L===wo?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=r.properties.get(C);O.light=S}return C}function y(T,x,S,L,C,V){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&V===wo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let B=e.update(T),K=T.material;if(Array.isArray(K)){let ie=B.groups;for(let H=0,Z=ie.length;H<Z;H++){let re=ie[H],I=K[re.materialIndex];if(I&&I.visible){let oe=M(T,I,L,V);T.onBeforeShadow(r,T,x,S,B,oe,re),r.renderBufferDirect(S,null,B,oe,T,re),T.onAfterShadow(r,T,x,S,B,oe,re)}}}else if(K.visible){let ie=M(T,K,L,V);T.onBeforeShadow(r,T,x,S,B,ie,null),r.renderBufferDirect(S,null,B,ie,T,null),T.onAfterShadow(r,T,x,S,B,ie,null)}}let ne=T.children;for(let B=0,K=ne.length;B<K;B++)y(ne[B],x,S,L,C,V)}function b(T){T.target.removeEventListener("dispose",b);for(let S in c){let L=c[S],C=T.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function yE(r,e){function t(){let X=!1,pe=new zt,me=null,Fe=new zt(0,0,0,0);return{setMask:function(Ae){me!==Ae&&!X&&(r.colorMask(Ae,Ae,Ae,Ae),me=Ae)},setLocked:function(Ae){X=Ae},setClear:function(Ae,Ue,Pe,Be,be){be===!0&&(Ae*=Be,Ue*=Be,Pe*=Be),pe.set(Ae,Ue,Pe,Be),Fe.equals(pe)===!1&&(r.clearColor(Ae,Ue,Pe,Be),Fe.copy(pe))},reset:function(){X=!1,me=null,Fe.set(-1,0,0,0)}}}function n(){let X=!1,pe=!1,me=null,Fe=null,Ae=null;return{setReversed:function(Ue){if(pe!==Ue){let Pe=e.get("EXT_clip_control");Ue?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),pe=Ue;let Be=Ae;Ae=null,this.setClear(Be)}},getReversed:function(){return pe},setTest:function(Ue){Ue?W(r.DEPTH_TEST):k(r.DEPTH_TEST)},setMask:function(Ue){me!==Ue&&!X&&(r.depthMask(Ue),me=Ue)},setFunc:function(Ue){if(pe&&(Ue=gx[Ue]),Fe!==Ue){switch(Ue){case ih:r.depthFunc(r.NEVER);break;case rh:r.depthFunc(r.ALWAYS);break;case sh:r.depthFunc(r.LESS);break;case oo:r.depthFunc(r.LEQUAL);break;case ah:r.depthFunc(r.EQUAL);break;case oh:r.depthFunc(r.GEQUAL);break;case lh:r.depthFunc(r.GREATER);break;case ch:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=Ue}},setLocked:function(Ue){X=Ue},setClear:function(Ue){Ae!==Ue&&(Ae=Ue,pe&&(Ue=1-Ue),r.clearDepth(Ue))},reset:function(){X=!1,me=null,Fe=null,Ae=null,pe=!1}}}function i(){let X=!1,pe=null,me=null,Fe=null,Ae=null,Ue=null,Pe=null,Be=null,be=null;return{setTest:function(ve){X||(ve?W(r.STENCIL_TEST):k(r.STENCIL_TEST))},setMask:function(ve){pe!==ve&&!X&&(r.stencilMask(ve),pe=ve)},setFunc:function(ve,Ge,Se){(me!==ve||Fe!==Ge||Ae!==Se)&&(r.stencilFunc(ve,Ge,Se),me=ve,Fe=Ge,Ae=Se)},setOp:function(ve,Ge,Se){(Ue!==ve||Pe!==Ge||Be!==Se)&&(r.stencilOp(ve,Ge,Se),Ue=ve,Pe=Ge,Be=Se)},setLocked:function(ve){X=ve},setClear:function(ve){be!==ve&&(r.clearStencil(ve),be=ve)},reset:function(){X=!1,pe=null,me=null,Fe=null,Ae=null,Ue=null,Pe=null,Be=null,be=null}}}let s=new t,a=new n,o=new i,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],p=null,m=!1,_=null,v=null,M=null,y=null,b=null,T=null,x=null,S=new tt(0,0,0),L=0,C=!1,V=null,O=null,ne=null,B=null,K=null,ie=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,re=r.getParameter(r.VERSION);re.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(re)[1]),H=Z>=1):re.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),H=Z>=2);let I=null,oe={},Ce=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),J=new zt().fromArray(Ce),ge=new zt().fromArray(Ne);function Ee(X,pe,me,Fe){let Ae=new Uint8Array(4),Ue=r.createTexture();r.bindTexture(X,Ue),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<me;Pe++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(pe,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Ae):r.texImage2D(pe+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ae);return Ue}let Q={};Q[r.TEXTURE_2D]=Ee(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=Ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=Ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=Ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(r.DEPTH_TEST),a.setFunc(oo),N(!1),j(Hp),W(r.CULL_FACE),$(Zr);function W(X){u[X]!==!0&&(r.enable(X),u[X]=!0)}function k(X){u[X]!==!1&&(r.disable(X),u[X]=!1)}function z(X,pe){return h[X]!==pe?(r.bindFramebuffer(X,pe),h[X]=pe,X===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=pe),X===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=pe),!0):!1}function q(X,pe){let me=g,Fe=!1;if(X){me=f.get(pe),me===void 0&&(me=[],f.set(pe,me));let Ae=X.textures;if(me.length!==Ae.length||me[0]!==r.COLOR_ATTACHMENT0){for(let Ue=0,Pe=Ae.length;Ue<Pe;Ue++)me[Ue]=r.COLOR_ATTACHMENT0+Ue;me.length=Ae.length,Fe=!0}}else me[0]!==r.BACK&&(me[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(me)}function fe(X){return p!==X?(r.useProgram(X),p=X,!0):!1}let le={[ga]:r.FUNC_ADD,[B_]:r.FUNC_SUBTRACT,[k_]:r.FUNC_REVERSE_SUBTRACT};le[z_]=r.MIN,le[G_]=r.MAX;let D={[V_]:r.ZERO,[H_]:r.ONE,[W_]:r.SRC_COLOR,[qp]:r.SRC_ALPHA,[$_]:r.SRC_ALPHA_SATURATE,[Z_]:r.DST_COLOR,[q_]:r.DST_ALPHA,[X_]:r.ONE_MINUS_SRC_COLOR,[Yp]:r.ONE_MINUS_SRC_ALPHA,[J_]:r.ONE_MINUS_DST_COLOR,[Y_]:r.ONE_MINUS_DST_ALPHA,[K_]:r.CONSTANT_COLOR,[Q_]:r.ONE_MINUS_CONSTANT_COLOR,[j_]:r.CONSTANT_ALPHA,[ex]:r.ONE_MINUS_CONSTANT_ALPHA};function $(X,pe,me,Fe,Ae,Ue,Pe,Be,be,ve){if(X===Zr){m===!0&&(k(r.BLEND),m=!1);return}if(m===!1&&(W(r.BLEND),m=!0),X!==F_){if(X!==_||ve!==C){if((v!==ga||b!==ga)&&(r.blendEquation(r.FUNC_ADD),v=ga,b=ga),ve)switch(X){case Eo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ji:r.blendFunc(r.ONE,r.ONE);break;case Wp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:rt("WebGLState: Invalid blending: ",X);break}else switch(X){case Eo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ji:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Wp:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xp:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",X);break}M=null,y=null,T=null,x=null,S.set(0,0,0),L=0,_=X,C=ve}return}Ae=Ae||pe,Ue=Ue||me,Pe=Pe||Fe,(pe!==v||Ae!==b)&&(r.blendEquationSeparate(le[pe],le[Ae]),v=pe,b=Ae),(me!==M||Fe!==y||Ue!==T||Pe!==x)&&(r.blendFuncSeparate(D[me],D[Fe],D[Ue],D[Pe]),M=me,y=Fe,T=Ue,x=Pe),(Be.equals(S)===!1||be!==L)&&(r.blendColor(Be.r,Be.g,Be.b,be),S.copy(Be),L=be),_=X,C=!1}function G(X,pe){X.side===Pn?k(r.CULL_FACE):W(r.CULL_FACE);let me=X.side===Rn;pe&&(me=!me),N(me),X.blending===Eo&&X.transparent===!1?$(Zr):$(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),s.setMask(X.colorWrite);let Fe=X.stencilWrite;o.setTest(Fe),Fe&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),A(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?W(r.SAMPLE_ALPHA_TO_COVERAGE):k(r.SAMPLE_ALPHA_TO_COVERAGE)}function N(X){V!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),V=X)}function j(X){X!==N_?(W(r.CULL_FACE),X!==O&&(X===Hp?r.cullFace(r.BACK):X===U_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):k(r.CULL_FACE),O=X}function Y(X){X!==ne&&(H&&r.lineWidth(X),ne=X)}function A(X,pe,me){X?(W(r.POLYGON_OFFSET_FILL),(B!==pe||K!==me)&&(B=pe,K=me,a.getReversed()&&(pe=-pe,me=-me),r.polygonOffset(pe,me))):k(r.POLYGON_OFFSET_FILL)}function P(X){X?W(r.SCISSOR_TEST):k(r.SCISSOR_TEST)}function F(X){X===void 0&&(X=r.TEXTURE0+ie-1),I!==X&&(r.activeTexture(X),I=X)}function se(X,pe,me){me===void 0&&(I===null?me=r.TEXTURE0+ie-1:me=I);let Fe=oe[me];Fe===void 0&&(Fe={type:void 0,texture:void 0},oe[me]=Fe),(Fe.type!==X||Fe.texture!==pe)&&(I!==me&&(r.activeTexture(me),I=me),r.bindTexture(X,pe||Q[X]),Fe.type=X,Fe.texture=pe)}function U(){let X=oe[I];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Re(){try{r.compressedTexImage2D(...arguments)}catch(X){rt("WebGLState:",X)}}function Ve(){try{r.compressedTexImage3D(...arguments)}catch(X){rt("WebGLState:",X)}}function De(){try{r.texSubImage2D(...arguments)}catch(X){rt("WebGLState:",X)}}function _e(){try{r.texSubImage3D(...arguments)}catch(X){rt("WebGLState:",X)}}function ke(){try{r.compressedTexSubImage2D(...arguments)}catch(X){rt("WebGLState:",X)}}function Me(){try{r.compressedTexSubImage3D(...arguments)}catch(X){rt("WebGLState:",X)}}function ze(){try{r.texStorage2D(...arguments)}catch(X){rt("WebGLState:",X)}}function R(){try{r.texStorage3D(...arguments)}catch(X){rt("WebGLState:",X)}}function w(){try{r.texImage2D(...arguments)}catch(X){rt("WebGLState:",X)}}function ae(){try{r.texImage3D(...arguments)}catch(X){rt("WebGLState:",X)}}function we(X){return d[X]!==void 0?d[X]:r.getParameter(X)}function ye(X,pe){d[X]!==pe&&(r.pixelStorei(X,pe),d[X]=pe)}function Le(X){J.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),J.copy(X))}function Oe(X){ge.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),ge.copy(X))}function ce(X,pe){let me=c.get(pe);me===void 0&&(me=new WeakMap,c.set(pe,me));let Fe=me.get(X);Fe===void 0&&(Fe=r.getUniformBlockIndex(pe,X.name),r.uniformBlockBinding(pe,Fe,Fe),me.set(X,Fe))}function xe(X,pe,me){let Ae=c.get(pe).get(X);l[Ae]!==me&&(r.bindBufferBase(r.UNIFORM_BUFFER,Ae,me),l[Ae]=me)}function Ie(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,oe={},h={},l={},f=new WeakMap,g=[],p=null,m=!1,_=null,v=null,M=null,y=null,b=null,T=null,x=null,S=new tt(0,0,0),L=0,C=!1,V=null,O=null,ne=null,B=null,K=null,J.set(0,0,r.canvas.width,r.canvas.height),ge.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:W,disable:k,bindFramebuffer:z,drawBuffers:q,useProgram:fe,setBlending:$,setMaterial:G,setFlipSided:N,setCullFace:j,setLineWidth:Y,setPolygonOffset:A,setScissorTest:P,activeTexture:F,bindTexture:se,unbindTexture:U,compressedTexImage2D:Re,compressedTexImage3D:Ve,texImage2D:w,texImage3D:ae,pixelStorei:ye,getParameter:we,updateUBOMapping:ce,uniformBlockBinding:xe,texStorage2D:ze,texStorage3D:R,texSubImage2D:De,texSubImage3D:_e,compressedTexSubImage2D:ke,compressedTexSubImage3D:Me,scissor:Le,viewport:Oe,reset:Ie}}function vE(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap,d=new Set,h,f=new WeakMap,g=new Set,p=new FinalizationRegistry(R=>g.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,w){return m?new OffscreenCanvas(R,w):Dl("canvas")}function v(R,w,ae){let we=1,ye=ze(R);if((ye.width>ae||ye.height>ae)&&(we=ae/Math.max(ye.width,ye.height)),we<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Le=Math.floor(we*ye.width),Oe=Math.floor(we*ye.height);h===void 0&&(h=_(Le,Oe));let ce=w?_(Le,Oe):h;return ce.width=Le,ce.height=Oe,ce.getContext("2d").drawImage(R,0,0,Le,Oe),nt("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+Le+"x"+Oe+")."),ce}else return"data"in R&&nt("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),R;return R}function M(R){return R.generateMipmaps}function y(R){r.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(R,w,ae,we,ye,Le=!1){if(R!==null){if(r[R]!==void 0)return r[R];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Oe;we&&(Oe=e.get("EXT_texture_norm16"),Oe||nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=w;if(w===r.RED&&(ae===r.FLOAT&&(ce=r.R32F),ae===r.HALF_FLOAT&&(ce=r.R16F),ae===r.UNSIGNED_BYTE&&(ce=r.R8),ae===r.UNSIGNED_SHORT&&Oe&&(ce=Oe.R16_EXT),ae===r.SHORT&&Oe&&(ce=Oe.R16_SNORM_EXT)),w===r.RED_INTEGER&&(ae===r.UNSIGNED_BYTE&&(ce=r.R8UI),ae===r.UNSIGNED_SHORT&&(ce=r.R16UI),ae===r.UNSIGNED_INT&&(ce=r.R32UI),ae===r.BYTE&&(ce=r.R8I),ae===r.SHORT&&(ce=r.R16I),ae===r.INT&&(ce=r.R32I)),w===r.RG&&(ae===r.FLOAT&&(ce=r.RG32F),ae===r.HALF_FLOAT&&(ce=r.RG16F),ae===r.UNSIGNED_BYTE&&(ce=r.RG8),ae===r.UNSIGNED_SHORT&&Oe&&(ce=Oe.RG16_EXT),ae===r.SHORT&&Oe&&(ce=Oe.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(ae===r.UNSIGNED_BYTE&&(ce=r.RG8UI),ae===r.UNSIGNED_SHORT&&(ce=r.RG16UI),ae===r.UNSIGNED_INT&&(ce=r.RG32UI),ae===r.BYTE&&(ce=r.RG8I),ae===r.SHORT&&(ce=r.RG16I),ae===r.INT&&(ce=r.RG32I)),w===r.RGB_INTEGER&&(ae===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),ae===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),ae===r.UNSIGNED_INT&&(ce=r.RGB32UI),ae===r.BYTE&&(ce=r.RGB8I),ae===r.SHORT&&(ce=r.RGB16I),ae===r.INT&&(ce=r.RGB32I)),w===r.RGBA_INTEGER&&(ae===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),ae===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),ae===r.UNSIGNED_INT&&(ce=r.RGBA32UI),ae===r.BYTE&&(ce=r.RGBA8I),ae===r.SHORT&&(ce=r.RGBA16I),ae===r.INT&&(ce=r.RGBA32I)),w===r.RGB&&(ae===r.UNSIGNED_SHORT&&Oe&&(ce=Oe.RGB16_EXT),ae===r.SHORT&&Oe&&(ce=Oe.RGB16_SNORM_EXT),ae===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),ae===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),w===r.RGBA){let xe=Le?Ll:ft.getTransfer(ye);ae===r.FLOAT&&(ce=r.RGBA32F),ae===r.HALF_FLOAT&&(ce=r.RGBA16F),ae===r.UNSIGNED_BYTE&&(ce=xe===vt?r.SRGB8_ALPHA8:r.RGBA8),ae===r.UNSIGNED_SHORT&&Oe&&(ce=Oe.RGBA16_EXT),ae===r.SHORT&&Oe&&(ce=Oe.RGBA16_SNORM_EXT),ae===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),ae===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(R,w){let ae;return R?w===null||w===er||w===xa?ae=r.DEPTH24_STENCIL8:w===Vi?ae=r.DEPTH32F_STENCIL8:w===Co&&(ae=r.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===er||w===xa?ae=r.DEPTH_COMPONENT24:w===Vi?ae=r.DEPTH_COMPONENT32F:w===Co&&(ae=r.DEPTH_COMPONENT16),ae}function S(R,w){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==Sn&&R.minFilter!==ri?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function L(R){let w=new WeakRef(R);n.get(R).__ref=w,g.add(w),p.register(R,w,w)}function C(R){let w=n.get(R).__ref;w!==void 0&&(g.delete(w),p.unregister(w))}function V(R){ne(R.target)}function O(R){B(R.target)}function ne(R){R.removeEventListener("dispose",V),C(R),ie(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&d.delete(R)}function B(R){R.removeEventListener("dispose",O),C(R),Z(R)}function K(){for(let R of g){let w=R.deref();w!==void 0&&(w.isRenderTarget===!0?B(w):ne(w))}g.clear(),d.clear()}function ie(R){let w=n.get(R);if(w.__webglInit===void 0)return;let ae=R.source,we=f.get(ae);if(we){let ye=we[w.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&H(R),Object.keys(we).length===0&&f.delete(ae)}n.remove(R)}function H(R){let w=n.get(R);r.deleteTexture(w.__webglTexture);let ae=R.source,we=f.get(ae);delete we[w.__cacheKey],a.memory.textures--}function Z(R){let w=n.get(R);w.__depthDisposeCallback&&w.__depthDisposeCallback();let ae=R.depthTexture;if(ae&&ae.renderTarget===R&&ne(ae),R.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(w.__webglFramebuffer[ye]))for(let Le=0;Le<w.__webglFramebuffer[ye].length;Le++)r.deleteFramebuffer(w.__webglFramebuffer[ye][Le]);else r.deleteFramebuffer(w.__webglFramebuffer[ye]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[ye])}else{if(Array.isArray(w.__webglFramebuffer))for(let ye=0;ye<w.__webglFramebuffer.length;ye++)r.deleteFramebuffer(w.__webglFramebuffer[ye]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ye=0;ye<w.__webglColorRenderbuffer.length;ye++)w.__webglColorRenderbuffer[ye]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[ye]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let we=R.textures;for(let ye=0,Le=we.length;ye<Le;ye++){let Oe=n.get(we[ye]);Oe.__webglTexture&&(r.deleteTexture(Oe.__webglTexture),a.memory.textures--),n.remove(we[ye])}n.remove(R)}let re=0;function I(){re=0}function oe(){return re}function Ce(R){re=R}function Ne(){let R=re;return R>=i.maxTextures&&nt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),re+=1,R}function J(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.mipmapsAutoUpdate),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function ge(R,w){let ae=n.get(R);if(R.isVideoTexture&&ke(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&ae.__version!==R.version){let we=R.image;if(we===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{G(ae,R,w);return}}else R.isExternalTexture&&(ae.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,ae.__webglTexture,r.TEXTURE0+w)}function Ee(R,w){let ae=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ae.__version!==R.version){G(ae,R,w);return}else R.isExternalTexture&&(ae.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,ae.__webglTexture,r.TEXTURE0+w)}function Q(R,w){let ae=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ae.__version!==R.version){G(ae,R,w);return}t.bindTexture(r.TEXTURE_3D,ae.__webglTexture,r.TEXTURE0+w)}function W(R,w){let ae=n.get(R);if(R.version>0&&ae.__version!==R.version){N(ae,R,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture,r.TEXTURE0+w)}let k={[lo]:r.REPEAT,[Bi]:r.CLAMP_TO_EDGE,[co]:r.MIRRORED_REPEAT},z={[Sn]:r.NEAREST,[ix]:r.NEAREST_MIPMAP_NEAREST,[pc]:r.NEAREST_MIPMAP_LINEAR,[ri]:r.LINEAR,[Gh]:r.LINEAR_MIPMAP_NEAREST,[Jr]:r.LINEAR_MIPMAP_LINEAR},q={[ox]:r.NEVER,[rm]:r.ALWAYS,[lx]:r.LESS,[nm]:r.LEQUAL,[cx]:r.EQUAL,[im]:r.GEQUAL,[ux]:r.GREATER,[hx]:r.NOTEQUAL};function fe(R,w){if(w.type===Vi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ri||w.magFilter===Gh||w.magFilter===pc||w.magFilter===Jr||w.minFilter===ri||w.minFilter===Gh||w.minFilter===pc||w.minFilter===Jr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,k[w.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,k[w.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,k[w.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,z[w.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,z[w.minFilter]),w.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Sn||w.minFilter!==pc&&w.minFilter!==Jr||w.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let ae=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function le(R,w){let ae=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",V),L(w));let we=w.source,ye=f.get(we);ye===void 0&&(ye={},f.set(we,ye));let Le=J(w);if(Le!==R.__cacheKey){ye[Le]===void 0&&(ye[Le]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,ae=!0),ye[Le].usedTimes++;let Oe=ye[R.__cacheKey];Oe!==void 0&&(ye[R.__cacheKey].usedTimes--,Oe.usedTimes===0&&H(w)),R.__cacheKey=Le,R.__webglTexture=ye[Le].texture}return ae}function D(R,w,ae){return Math.floor(Math.floor(R/ae)/w)}function $(R,w,ae,we){let Le=R.updateRanges;if(Le.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,ae,we,w.data);else{Le.sort((X,pe)=>X.start-pe.start);let Oe=0;for(let X=1;X<Le.length;X++){let pe=Le[Oe],me=Le[X],Fe=pe.start+pe.count,Ae=D(me.start,w.width,4),Ue=D(pe.start,w.width,4);me.start<=Fe+1&&Ae===Ue&&D(me.start+me.count-1,w.width,4)===Ae?pe.count=Math.max(pe.count,me.start+me.count-pe.start):(++Oe,Le[Oe]=me)}Le.length=Oe+1;let ce=t.getParameter(r.UNPACK_ROW_LENGTH),xe=t.getParameter(r.UNPACK_SKIP_PIXELS),Ie=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let X=0,pe=Le.length;X<pe;X++){let me=Le[X],Fe=Math.floor(me.start/4),Ae=Math.ceil(me.count/4),Ue=Fe%w.width,Pe=Math.floor(Fe/w.width),Be=Ae,be=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(r.UNPACK_SKIP_ROWS,Pe),t.texSubImage2D(r.TEXTURE_2D,0,Ue,Pe,Be,be,ae,we,w.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ce),t.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ie)}}function G(R,w,ae){let we=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(we=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(we=r.TEXTURE_3D);let ye=le(R,w),Le=w.source;t.bindTexture(we,R.__webglTexture,r.TEXTURE0+ae);let Oe=n.get(Le);if(Le.version!==Oe.__version||ye===!0){if(t.activeTexture(r.TEXTURE0+ae),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let be=ft.getPrimaries(ft.workingColorSpace),ve=w.colorSpace===Kr?null:ft.getPrimaries(w.colorSpace),Ge=w.colorSpace===Kr||be===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let xe=v(w.image,!1,i.maxTextureSize);xe=Me(w,xe);let Ie=s.convert(w.format,w.colorSpace),X=s.convert(w.type),pe=T(w.internalFormat,Ie,X,w.normalized,w.colorSpace,w.isVideoTexture);fe(we,w);let me,Fe=w.mipmaps,Ae=w.isVideoTexture!==!0,Ue=Oe.__version===void 0||ye===!0,Pe=Le.dataReady,Be=S(w,xe);if(w.isDepthTexture)pe=x(w.format===$r,w.type),Ue&&(Ae?t.texStorage2D(r.TEXTURE_2D,1,pe,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,pe,xe.width,xe.height,0,Ie,X,null));else if(w.isDataTexture)if(Fe.length>0){Ae&&Ue&&t.texStorage2D(r.TEXTURE_2D,Be,pe,Fe[0].width,Fe[0].height);for(let be=0,ve=Fe.length;be<ve;be++)me=Fe[be],Ae?Pe&&t.texSubImage2D(r.TEXTURE_2D,be,0,0,me.width,me.height,Ie,X,me.data):t.texImage2D(r.TEXTURE_2D,be,pe,me.width,me.height,0,Ie,X,me.data);w.generateMipmaps=!1}else Ae?(Ue&&t.texStorage2D(r.TEXTURE_2D,Be,pe,xe.width,xe.height),Pe&&$(w,xe,Ie,X)):t.texImage2D(r.TEXTURE_2D,0,pe,xe.width,xe.height,0,Ie,X,xe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ae&&Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Be,pe,Fe[0].width,Fe[0].height,xe.depth);for(let be=0,ve=Fe.length;be<ve;be++)if(me=Fe[be],w.format!==tr)if(Ie!==null)if(Ae){if(Pe)if(w.layerUpdates.size>0){let Ge=fm(me.width,me.height,w.format,w.type);for(let Se of w.layerUpdates){let qe=me.data.subarray(Se*Ge/me.data.BYTES_PER_ELEMENT,(Se+1)*Ge/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,Se,me.width,me.height,1,Ie,qe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,me.width,me.height,xe.depth,Ie,me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,be,pe,me.width,me.height,xe.depth,0,me.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?Pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,be,0,0,0,me.width,me.height,xe.depth,Ie,X,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,be,pe,me.width,me.height,xe.depth,0,Ie,X,me.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ae&&Ue&&t.texStorage2D(r.TEXTURE_2D,Be,pe,Fe[0].width,Fe[0].height);for(let be=0,ve=Fe.length;be<ve;be++)me=Fe[be],w.format!==tr?Ie!==null?Ae?Pe&&t.compressedTexSubImage2D(r.TEXTURE_2D,be,0,0,me.width,me.height,Ie,me.data):t.compressedTexImage2D(r.TEXTURE_2D,be,pe,me.width,me.height,0,me.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?Pe&&t.texSubImage2D(r.TEXTURE_2D,be,0,0,me.width,me.height,Ie,X,me.data):t.texImage2D(r.TEXTURE_2D,be,pe,me.width,me.height,0,Ie,X,me.data)}else if(w.isDataArrayTexture)if(Ae){if(Ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Be,pe,xe.width,xe.height,xe.depth),Pe)if(w.layerUpdates.size>0){let be=fm(xe.width,xe.height,w.format,w.type);for(let ve of w.layerUpdates){let Ge=xe.data.subarray(ve*be/xe.data.BYTES_PER_ELEMENT,(ve+1)*be/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,xe.width,xe.height,1,Ie,X,Ge)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ie,X,xe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,pe,xe.width,xe.height,xe.depth,0,Ie,X,xe.data);else if(w.isData3DTexture)Ae?(Ue&&t.texStorage3D(r.TEXTURE_3D,Be,pe,xe.width,xe.height,xe.depth),Pe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ie,X,xe.data)):t.texImage3D(r.TEXTURE_3D,0,pe,xe.width,xe.height,xe.depth,0,Ie,X,xe.data);else if(w.isFramebufferTexture){if(Ue)if(Ae)t.texStorage2D(r.TEXTURE_2D,Be,pe,xe.width,xe.height);else{let be=xe.width,ve=xe.height;for(let Ge=0;Ge<Be;Ge++)t.texImage2D(r.TEXTURE_2D,Ge,pe,be,ve,0,Ie,X,null),be>>=1,ve>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){let be=r.canvas;if(be.hasAttribute("layoutsubtree")||be.setAttribute("layoutsubtree","true"),xe.parentNode!==be){be.appendChild(xe),d.add(w),be.onpaint=ve=>{let Ge=ve.changedElements;for(let Se of d)Ge.includes(Se.image)&&(Se.needsUpdate=!0)},be.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,xe);else{let Ge=r.RGBA,Se=r.RGBA,qe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ge,Se,qe,xe)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ae&&Ue){let be=ze(Fe[0]);t.texStorage2D(r.TEXTURE_2D,Be,pe,be.width,be.height)}for(let be=0,ve=Fe.length;be<ve;be++)me=Fe[be],Ae?Pe&&t.texSubImage2D(r.TEXTURE_2D,be,0,0,Ie,X,me):t.texImage2D(r.TEXTURE_2D,be,pe,Ie,X,me);w.generateMipmaps=!1}else if(Ae){if(Ue){let be=ze(xe);t.texStorage2D(r.TEXTURE_2D,Be,pe,be.width,be.height)}Pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ie,X,xe)}else t.texImage2D(r.TEXTURE_2D,0,pe,Ie,X,xe);M(w)&&w.mipmapsAutoUpdate===!0&&y(we),Oe.__version=Le.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function N(R,w,ae){if(w.image.length!==6)return;let we=le(R,w),ye=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+ae);let Le=n.get(ye);if(ye.version!==Le.__version||we===!0){t.activeTexture(r.TEXTURE0+ae);let Oe=ft.getPrimaries(ft.workingColorSpace),ce=w.colorSpace===Kr?null:ft.getPrimaries(w.colorSpace),xe=w.colorSpace===Kr||Oe===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let Ie=w.isCompressedTexture||w.image[0].isCompressedTexture,X=w.image[0]&&w.image[0].isDataTexture,pe=[];for(let Se=0;Se<6;Se++)!Ie&&!X?pe[Se]=v(w.image[Se],!0,i.maxCubemapSize):pe[Se]=X?w.image[Se].image:w.image[Se],pe[Se]=Me(w,pe[Se]);let me=pe[0],Fe=s.convert(w.format,w.colorSpace),Ae=s.convert(w.type),Ue=T(w.internalFormat,Fe,Ae,w.normalized,w.colorSpace),Pe=w.isVideoTexture!==!0,Be=Le.__version===void 0||we===!0,be=ye.dataReady,ve=S(w,me);fe(r.TEXTURE_CUBE_MAP,w);let Ge;if(w.isDepthTexture){if(Ue=x(w.format===$r,w.type),Be)if(Pe)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,Ue,me.width,me.height);else for(let Se=0;Se<6;Se++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ue,me.width,me.height,0,Fe,Ae,null)}else if(Ie){Pe&&Be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,Ue,me.width,me.height);for(let Se=0;Se<6;Se++){Ge=pe[Se].mipmaps;for(let qe=0;qe<Ge.length;qe++){let pt=Ge[qe];w.format!==tr?Fe!==null?Pe?be&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe,0,0,pt.width,pt.height,Fe,pt.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe,Ue,pt.width,pt.height,0,pt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?be&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe,0,0,pt.width,pt.height,Fe,Ae,pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe,Ue,pt.width,pt.height,0,Fe,Ae,pt.data)}}}else{if(Ge=w.mipmaps,Pe&&Be){Ge.length>0&&ve++;let Se=ze(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,Ue,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(X){Pe?be&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,pe[Se].width,pe[Se].height,Fe,Ae,pe[Se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ue,pe[Se].width,pe[Se].height,0,Fe,Ae,pe[Se].data);for(let qe=0;qe<Ge.length;qe++){let st=Ge[qe].image[Se].image;Pe?be&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe+1,0,0,st.width,st.height,Fe,Ae,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe+1,Ue,st.width,st.height,0,Fe,Ae,st.data)}}else{Pe?be&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Fe,Ae,pe[Se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ue,Fe,Ae,pe[Se]);for(let qe=0;qe<Ge.length;qe++){let pt=Ge[qe];Pe?be&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe+1,0,0,Fe,Ae,pt.image[Se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe+1,Ue,Fe,Ae,pt.image[Se])}}}M(w)&&w.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),Le.__version=ye.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function j(R,w,ae,we,ye,Le){let Oe=s.convert(ae.format,ae.colorSpace),ce=s.convert(ae.type),xe=T(ae.internalFormat,Oe,ce,ae.normalized,ae.colorSpace),Ie=n.get(w),X=n.get(ae);if(X.__renderTarget=w,!Ie.__hasExternalTextures){let pe=Math.max(1,w.width>>Le),me=Math.max(1,w.height>>Le);ye===r.TEXTURE_3D||ye===r.TEXTURE_2D_ARRAY?t.texImage3D(ye,Le,xe,pe,me,w.depth,0,Oe,ce,null):t.texImage2D(ye,Le,xe,pe,me,0,Oe,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),_e(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,we,ye,X.__webglTexture,0,De(w)):(ye===r.TEXTURE_2D||ye>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,we,ye,X.__webglTexture,Le),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Y(R,w,ae){if(r.bindRenderbuffer(r.RENDERBUFFER,R),w.depthBuffer){let we=w.depthTexture,ye=we&&we.isDepthTexture?we.type:null,Le=x(w.stencilBuffer,ye),Oe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_e(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De(w),Le,w.width,w.height):ae?r.renderbufferStorageMultisample(r.RENDERBUFFER,De(w),Le,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Le,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Oe,r.RENDERBUFFER,R)}else{let we=w.textures;for(let ye=0;ye<we.length;ye++){let Le=we[ye],Oe=s.convert(Le.format,Le.colorSpace),ce=s.convert(Le.type),xe=T(Le.internalFormat,Oe,ce,Le.normalized,Le.colorSpace);_e(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De(w),xe,w.width,w.height):ae?r.renderbufferStorageMultisample(r.RENDERBUFFER,De(w),xe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,xe,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function A(R,w,ae){let we=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ye=n.get(w.depthTexture);ye.__renderTarget=w;let Le=we?w.depthTexture.image[0]:w.depthTexture.image;(!ye.__webglTexture||Le.width!==w.width||Le.height!==w.height)&&(Le.width=w.width,Le.height=w.height,w.depthTexture.needsUpdate=!0),we?W(w.depthTexture,0):ge(w.depthTexture,0);let Oe=ye.__webglTexture,ce=De(w),xe=we?r.TEXTURE_CUBE_MAP_POSITIVE_X+ae:r.TEXTURE_2D,Ie=w.depthTexture.format===$r?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===Wr)_e(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ie,xe,Oe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,Ie,xe,Oe,0);else if(w.depthTexture.format===$r)_e(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ie,xe,Oe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,Ie,xe,Oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function P(R){let w=n.get(R),ae=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let we=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),we){let ye=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,we.removeEventListener("dispose",ye)};we.addEventListener("dispose",ye),w.__depthDisposeCallback=ye}w.__boundDepthTexture=we}if(R.depthTexture&&!w.__autoAllocateDepthBuffer)if(ae)for(let we=0;we<6;we++)A(w.__webglFramebuffer[we],R,we);else R.texture.mipmaps.length>0?A(w.__webglFramebuffer[0],R,0):A(w.__webglFramebuffer,R,0);else if(ae){w.__webglDepthbuffer=[];for(let we=0;we<6;we++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[we]),w.__webglDepthbuffer[we]===void 0)w.__webglDepthbuffer[we]=r.createRenderbuffer(),Y(w.__webglDepthbuffer[we],R,!1);else{let ye=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=w.__webglDepthbuffer[we];r.bindRenderbuffer(r.RENDERBUFFER,Le),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,Le)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Y(w.__webglDepthbuffer,R,!1);else{let ye=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Le),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,Le)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function F(R,w,ae){let we=n.get(R);w!==void 0&&j(we.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ae!==void 0&&P(R)}function se(R){let w=R.texture,ae=n.get(R),we=n.get(w);R.addEventListener("dispose",O),L(R);let ye=R.textures,Le=R.isWebGLCubeRenderTarget===!0,Oe=ye.length>1;if(Oe||(we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture()),we.__version=w.version,a.memory.textures++),Le){ae.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(w.mipmaps.length>0){ae.__webglFramebuffer[ce]=[];for(let xe=0;xe<w.mipmaps.length;xe++)ae.__webglFramebuffer[ce][xe]=r.createFramebuffer()}else ae.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(w.mipmaps.length>0){ae.__webglFramebuffer=[];for(let ce=0;ce<w.mipmaps.length;ce++)ae.__webglFramebuffer[ce]=r.createFramebuffer()}else ae.__webglFramebuffer=r.createFramebuffer();if(Oe)for(let ce=0,xe=ye.length;ce<xe;ce++){let Ie=n.get(ye[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&_e(R)===!1){ae.__webglMultisampledFramebuffer=r.createFramebuffer(),ae.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer);for(let ce=0;ce<ye.length;ce++){let xe=ye[ce];ae.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ae.__webglColorRenderbuffer[ce]);let Ie=s.convert(xe.format,xe.colorSpace),X=s.convert(xe.type),pe=T(xe.internalFormat,Ie,X,xe.normalized,xe.colorSpace,R.isXRRenderTarget===!0),me=De(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,me,pe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,ae.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(ae.__webglDepthRenderbuffer=r.createRenderbuffer(),Y(ae.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Le){t.bindTexture(r.TEXTURE_CUBE_MAP,we.__webglTexture),fe(r.TEXTURE_CUBE_MAP,w);for(let ce=0;ce<6;ce++)if(w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)j(ae.__webglFramebuffer[ce][xe],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,xe);else j(ae.__webglFramebuffer[ce],R,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);M(w)?y(r.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Oe){for(let ce=0,xe=ye.length;ce<xe;ce++){let Ie=ye[ce],X=n.get(Ie),pe=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,X.__webglTexture),fe(pe,Ie),j(ae.__webglFramebuffer,R,Ie,r.COLOR_ATTACHMENT0+ce,pe,0),M(Ie)&&y(pe)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,we.__webglTexture),fe(ce,w),w.mipmaps.length>0)for(let xe=0;xe<w.mipmaps.length;xe++)j(ae.__webglFramebuffer[xe],R,w,r.COLOR_ATTACHMENT0,ce,xe);else j(ae.__webglFramebuffer,R,w,r.COLOR_ATTACHMENT0,ce,0);M(w)?y(ce):w.mipmaps.length>0&&r.texParameteri(ce,r.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&P(R)}function U(R){let w=R.textures;for(let ae=0,we=w.length;ae<we;ae++){let ye=w[ae];if(M(ye)&&ye.mipmapsAutoUpdate===!0){let Le=b(R),Oe=n.get(ye).__webglTexture;t.bindTexture(Le,Oe),y(Le),t.unbindTexture()}}}let Re=[];function Ve(R){if(R.samples>0){if(_e(R)===!1){let w=R.textures,ae=R.width,we=R.height,ye=r.COLOR_BUFFER_BIT,Le=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=n.get(R),ce=w.length>1;if(ce)for(let Ie=0;Ie<w.length;Ie++)t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ie=0;Ie<w.length;Ie++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ye|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ye|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ie]);let X=n.get(w[Ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,X,0)}r.blitFramebuffer(0,0,ae,we,0,0,ae,we,ye,r.NEAREST),l===!0&&(Re.length=0,Re.push(r.COLOR_ATTACHMENT0+Ie),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Re.push(Le),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Re))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let Ie=0;Ie<w.length;Ie++){t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ie]);let X=n.get(w[Ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,X,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let w=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function De(R){return Math.min(i.maxSamples,R.samples)}function _e(R){let w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ke(R){let w=a.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function Me(R,w){let ae=R.colorSpace,we=R.format,ye=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||ae!==Il&&ae!==Kr&&(ft.getTransfer(ae)===vt?(we!==tr||ye!==di)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",ae)),w}function ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ne,this.resetTextureUnits=I,this.getTextureUnits=oe,this.setTextureUnits=Ce,this.setTexture2D=ge,this.setTexture2DArray=Ee,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=F,this.setupRenderTarget=se,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=j,this.useMultisampledRTT=_e,this.dispose=K}function SE(r,e){function t(n,i=Kr){let s,a=ft.getTransfer(i);if(n===di)return r.UNSIGNED_BYTE;if(n===Hh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Qp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===jp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===$p)return r.BYTE;if(n===Kp)return r.SHORT;if(n===Co)return r.UNSIGNED_SHORT;if(n===Vh)return r.INT;if(n===er)return r.UNSIGNED_INT;if(n===Vi)return r.FLOAT;if(n===In)return r.HALF_FLOAT;if(n===em)return r.ALPHA;if(n===tm)return r.RGB;if(n===tr)return r.RGBA;if(n===Wr)return r.DEPTH_COMPONENT;if(n===$r)return r.DEPTH_STENCIL;if(n===Xh)return r.RED;if(n===qh)return r.RED_INTEGER;if(n===Cs)return r.RG;if(n===Yh)return r.RG_INTEGER;if(n===Zh)return r.RGBA_INTEGER;if(n===mc||n===gc||n===_c||n===xc)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_c)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jh||n===$h||n===Kh||n===Qh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Jh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$h)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jh||n===ef||n===tf||n===nf||n===rf||n===yc||n===sf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jh||n===ef)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===tf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===nf)return s.COMPRESSED_R11_EAC;if(n===rf)return s.COMPRESSED_SIGNED_R11_EAC;if(n===yc)return s.COMPRESSED_RG11_EAC;if(n===sf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===af||n===of||n===lf||n===cf||n===uf||n===hf||n===ff||n===df||n===pf||n===mf||n===gf||n===_f||n===xf||n===yf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===af)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===of)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ff)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===df)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_f)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yf)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vf||n===Sf||n===Mf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===vf)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bf||n===Tf||n===vc||n===wf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===bf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Tf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var ME=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Em=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Wl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bn({vertexShader:ME,fragmentShader:bE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Sr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Am=class extends mr{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,p=typeof XRWebGLBinding<"u",m=new Em,_={},v=t.getContextAttributes(),M=null,y=null,b=[],T=[],x=new Te,S=null,L=null,C=new yn;C.viewport=new zt;let V=new yn;V.viewport=new zt;let O=[C,V],ne=new Fh,B=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ge=b[J];return ge===void 0&&(ge=new po,b[J]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(J){let ge=b[J];return ge===void 0&&(ge=new po,b[J]=ge),ge.getGripSpace()},this.getHand=function(J){let ge=b[J];return ge===void 0&&(ge=new po,b[J]=ge),ge.getHandSpace()};function ie(J){let ge=T.indexOf(J.inputSource);if(ge===-1)return;let Ee=b[ge];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,c||a),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){i.removeEventListener("select",ie),i.removeEventListener("selectstart",ie),i.removeEventListener("selectend",ie),i.removeEventListener("squeeze",ie),i.removeEventListener("squeezestart",ie),i.removeEventListener("squeezeend",ie),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Z);for(let J=0;J<b.length;J++){let ge=T[J];ge!==null&&(T[J]=null,b[J].disconnect(ge))}B=null,K=null,m.reset();for(let J in _)delete _[J];if(e.setRenderTarget(M),f=null,h=null,d=null,i=null,y=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),L!==null){let J=L.camera;J.fov=L.fov,J.zoom=L.zoom,J.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&p&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",ie),i.addEventListener("selectstart",ie),i.addEventListener("selectend",ie),i.addEventListener("squeeze",ie),i.addEventListener("squeezestart",ie),i.addEventListener("squeezeend",ie),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),p&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Q=null,W=null;v.depth&&(W=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=v.stencil?$r:Wr,Q=v.stencil?xa:er);let k={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(k),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new fn(h.textureWidth,h.textureHeight,{format:tr,type:di,depthTexture:new Yr(h.textureWidth,h.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new fn(f.framebufferWidth,f.framebufferHeight,{format:tr,type:di,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ne.setContext(i),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(J){for(let ge=0;ge<J.removed.length;ge++){let Ee=J.removed[ge],Q=T.indexOf(Ee);Q>=0&&(T[Q]=null,b[Q].disconnect(Ee))}for(let ge=0;ge<J.added.length;ge++){let Ee=J.added[ge],Q=T.indexOf(Ee);if(Q===-1){for(let k=0;k<b.length;k++)if(k>=T.length){T.push(Ee),Q=k;break}else if(T[k]===null){T[k]=Ee,Q=k;break}if(Q===-1)break}let W=b[Q];W&&W.connect(Ee)}}function re(J,ge){ge===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ge.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ge=J.near,Ee=J.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),ne.near=V.near=C.near=ge,ne.far=V.far=C.far=Ee,(B!==ne.near||K!==ne.far)&&(i.updateRenderState({depthNear:ne.near,depthFar:ne.far}),B=ne.near,K=ne.far),ne.layers.mask=J.layers.mask|6,C.layers.mask=ne.layers.mask&-5,V.layers.mask=ne.layers.mask&-3;let Q=J.parent,W=ne.cameras;re(ne,Q);for(let k=0;k<W.length;k++)re(W[k],Q);ne.projectionMatrix.copy(C.projectionMatrix),ne.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&J.isPerspectiveCamera&&(L={camera:J,fov:J.fov,zoom:J.zoom}),I(J,ne,Q)};function I(J,ge,Ee){Ee===null?J.matrix.copy(ge.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(ge.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=hh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(ne)},this.getCameraTexture=function(J){return _[J]};let oe=null;function Ce(J,ge){if(u=ge.getViewerPose(c||a),g=ge,u!==null){let Ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Q=!1;Ee.length!==ne.cameras.length&&(ne.cameras.length=0,Q=!0);for(let q=0;q<Ee.length;q++){let fe=Ee[q],le=null;if(f!==null)le=f.getViewport(fe);else{let $=d.getViewSubImage(h,fe);le=$.viewport,q===0&&(e.setRenderTargetTextures(y,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(y))}let D=O[q];D===void 0&&(D=new yn,D.layers.enable(q),D.viewport=new zt,O[q]=D),D.matrix.fromArray(fe.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(fe.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(le.x,le.y,le.width,le.height),q===0&&(ne.matrix.copy(D.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Q===!0&&ne.cameras.push(D)}let W=i.enabledFeatures;if(W&&W.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&p){d=n.getBinding();let q=d.getDepthInformation(Ee[0]);q&&q.isValid&&q.texture&&m.init(q,i.renderState)}if(W&&W.includes("camera-access")&&p){e.state.unbindTexture(),d=n.getBinding();for(let q=0;q<Ee.length;q++){let fe=Ee[q].camera;if(fe){let le=_[fe];le||(le=new Wl,_[fe]=le);let D=d.getCameraImage(fe);le.sourceTexture=D}}}}for(let Ee=0;Ee<b.length;Ee++){let Q=T[Ee],W=b[Ee];Q!==null&&W!==void 0&&W.update(Q,ge,c||a)}oe&&oe(J,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),g=null}let Ne=new qx;Ne.setAnimationLoop(Ce),this.setAnimationLoop=function(J){oe=J},this.dispose=function(){}}},TE=new St,ny=new et;ny.set(-1,0,0,0,1,0,0,0,1);function wE(r,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,cm(r)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,v,M,y){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(m,_):_.isMeshLambertMaterial?(s(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(m,_),d(m,_)):_.isMeshPhongMaterial?(s(m,_),u(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(m,_),h(m,_),_.isMeshPhysicalMaterial&&f(m,_,y)):_.isMeshMatcapMaterial?(s(m,_),g(m,_)):_.isMeshDepthMaterial?s(m,_):_.isMeshDistanceMaterial?(s(m,_),p(m,_)):_.isMeshNormalMaterial?s(m,_):_.isLineBasicMaterial?(a(m,_),_.isLineDashedMaterial&&o(m,_)):_.isPointsMaterial?l(m,_,v,M):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Rn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Rn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let v=e.get(_),M=v.envMap,y=v.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(TE.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ny),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function a(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function o(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,v,M){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*v,m.scale.value=M*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function u(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function d(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function h(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function f(m,_,v){m.ior.value=_.ior,_.diffuseRoughness>0&&(m.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=_.diffuseRoughnessMap,t(_.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Rn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,_){_.matcap&&(m.matcap.value=_.matcap)}function p(m,_){let v=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function EE(r,e,t,n){let i={},s={};function a(v,M){let y=M.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,M){let y=i[v.id];y===void 0&&(g(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",m));let b=M.program;n.updateUBOMapping(v,b);let T=e.render.frame;s[v.id]!==T&&(c(v),s[v.id]=T)}function l(v){let M=r.createBuffer(),y=v.__size,b=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,y,b),r.bindBuffer(r.UNIFORM_BUFFER,null),M}function c(v){let M=i[v.id],y=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let T=0,x=y.length;T<x;T++){let S=y[T];if(Array.isArray(S))for(let L=0,C=S.length;L<C;L++)u(S[L],T,L,b);else u(S,T,0,b)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(v,M,y,b){if(h(v,M,y,b)===!0){let T=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let L=0;L<x.length;L++){let C=x[L],V=p(C,!0);d(C,v.__data,S),S+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,v.__data)}}function d(v,M,y){typeof v=="number"||typeof v=="boolean"?M[y]=v:v.isMatrix3?(M[y]=v.elements[0],M[y+1]=v.elements[1],M[y+2]=v.elements[2],M[y+3]=0,M[y+4]=v.elements[3],M[y+5]=v.elements[4],M[y+6]=v.elements[5],M[y+7]=0,M[y+8]=v.elements[6],M[y+9]=v.elements[7],M[y+10]=v.elements[8],M[y+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-y),y):v.toArray(M,y)}function h(v,M,y,b){let T=v.value,x=M+"_"+y;if(Array.isArray(T)){b[x]===void 0&&(b[x]=[]);let S=b[x],L=!1;for(let C=0;C<T.length;C++)f(T[C],S,C)===!0&&(L=!0);return L}return f(T,b,x)}function f(v,M,y){if(M[y]===void 0)return typeof v=="number"||typeof v=="boolean"?M[y]=v:ArrayBuffer.isView(v)?M[y]=v.slice():M[y]=v.clone(),!0;{let b=M[y];if(typeof v=="number"||typeof v=="boolean"){if(b!==v)return M[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(b.equals(v)===!1)return b.copy(v),!0}}return!1}function g(v){let M=v.uniforms,y=0,b=16;for(let x=0,S=M.length;x<S;x++){let L=Array.isArray(M[x])?M[x]:[M[x]];for(let C=0,V=L.length;C<V;C++){let O=L[C],ne=Array.isArray(O.value)?O.value:[O.value],B=Array.isArray(M[x])||Array.isArray(O.value),K=y;for(let H=0,Z=ne.length;H<Z;H++){let re=ne[H],I=p(re,B),oe=y%b,Ce=oe%I.boundary,Ne=oe+Ce;y+=Ce,Ne!==0&&b-Ne<I.storage&&(y+=b-Ne),H===0&&(K=y),y+=I.storage}let ie=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new ie((y-K)/Float32Array.BYTES_PER_ELEMENT),O.__offset=K}}let T=y%b;return T>0&&(y+=b-T),v.__size=y,v.__cache={},this}function p(v,M){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):nt("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let M=v.target;M.removeEventListener("dispose",m),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function _(){for(let v in i)r.deleteBuffer(i[v]);i={},s={}}return{bind:a,update:o,dispose:_}}var AE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mr=null;function CE(){return Mr===null&&(Mr=new kl(AE,16,16,Cs,In),Mr.name="DFG_LUT",Mr.minFilter=ri,Mr.magFilter=ri,Mr.wrapS=Bi,Mr.wrapT=Bi,Mr.generateMipmaps=!1,Mr.needsUpdate=!0),Mr}var Io=class{constructor(e={}){let{canvas:t=dx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=di}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let p=f,m=new Set([Zh,Yh,qh]),_=new Set([di,er,Co,xa,Hh,Wh]),v=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,T=null,x=[],S=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,V=!1,O=null,ne=null,B=null,K=null;this._outputColorSpace=ii;let ie=0,H=0,Z=null,re=-1,I=null,oe=new zt,Ce=new zt,Ne=null,J=new tt(0),ge=0,Ee=t.width,Q=t.height,W=1,k=null,z=null,q=new zt(0,0,Ee,Q),fe=new zt(0,0,Ee,Q),le=!1,D=new Ss,$=new mh,G=!1,N=!1,j=new St,Y=new te,A=new zt,P={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},F=!1;function se(){return Z===null?W:1}let U=n;function Re(E,ee){return t.getContext(E,ee)}let Ve,De,_e,ke,Me,ze,R,w,ae,we,ye,Le,Oe,ce,xe,Ie,X,pe,me,Fe,Ae,Ue,Pe;try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",Se,!1),U===null){let ee="webgl2";if(U=Re(ee,E),U===null)throw Re(ee)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(E){throw t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),rt("WebGLRenderer: "+E.message),E}function Be(){Ve=new kT(U),Ve.init(),Ae=new SE(U,Ve),De=new CT(U,Ve,e,Ae),_e=new yE(U,Ve),De.reversedDepthBuffer&&h&&_e.buffers.depth.setReversed(!0),ne=U.createFramebuffer(),B=U.createFramebuffer(),K=U.createFramebuffer(),ke=new VT(U),Me=new sE,ze=new vE(U,Ve,_e,Me,De,Ae,ke),R=new BT(C),w=new WM(U),Ue=new ET(U,w),ae=new zT(U,w,ke,Ue),we=new WT(U,ae,w,Ue,ke),pe=new HT(U,De,ze),xe=new RT(Me),ye=new rE(C,R,Ve,De,Ue,xe),Le=new wE(C,Me),Oe=new oE,ce=new dE(Ve),X=new wT(C,R,_e,we,g,l),Ie=new xE(C,we,De),Pe=new EE(U,ke,De,_e),me=new AT(U,Ve,ke),Fe=new GT(U,Ve,ke),ke.programs=ye.programs,C.capabilities=De,C.extensions=Ve,C.properties=Me,C.renderLists=Oe,C.shadowMap=Ie,C.state=_e,C.info=ke}p!==di&&(L=new qT(p,t.width,t.height,o,i,s));let be=new Am(C,U);this.xr=be,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(Ee,Q,!1))},this.getSize=function(E){return E.set(Ee,Q)},this.setSize=function(E,ee,de=!0){if(be.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=E,Q=ee,t.width=Math.floor(E*W),t.height=Math.floor(ee*W),de===!0&&(t.style.width=E+"px",t.style.height=ee+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,E,ee)},this.getDrawingBufferSize=function(E){return E.set(Ee*W,Q*W).floor()},this.setDrawingBufferSize=function(E,ee,de){Ee=E,Q=ee,W=de,t.width=Math.floor(E*de),t.height=Math.floor(ee*de),this.setViewport(0,0,E,ee)},this.setEffects=function(E){if(p===di){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let ee=0;ee<E.length;ee++)if(E[ee].isOutputPass===!0){nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(oe)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,ee,de,ue){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,ee,de,ue),_e.viewport(oe.copy(q).multiplyScalar(se()).round())},this.getScissor=function(E){return E.copy(fe)},this.setScissor=function(E,ee,de,ue){E.isVector4?fe.set(E.x,E.y,E.z,E.w):fe.set(E,ee,de,ue),_e.scissor(Ce.copy(fe).multiplyScalar(se()).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(E){_e.setScissorTest(le=E)},this.setOpaqueSort=function(E){k=E},this.setTransparentSort=function(E){z=E},this.getClearColor=function(E){return E.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor(...arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha(...arguments)},this.clear=function(E=!0,ee=!0,de=!0){let ue=0;if(E){let he=!1;if(Z!==null){let We=Z.texture.format;he=m.has(We)}if(he){let We=Z.texture.type,Je=_.has(We),He=X.getClearColor(),Ye=X.getClearAlpha(),Qe=He.r,at=He.g,gt=He.b;Je?(v[0]=Qe,v[1]=at,v[2]=gt,v[3]=Ye,U.clearBufferuiv(U.COLOR,0,v)):(M[0]=Qe,M[1]=at,M[2]=gt,M[3]=Ye,U.clearBufferiv(U.COLOR,0,M))}else ue|=U.COLOR_BUFFER_BIT}ee&&(ue|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ue|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&U.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),X.dispose(),Oe.dispose(),ce.dispose(),ze.dispose(),Me.dispose(),R.dispose(),we.dispose(),ae.dispose(),Ue.dispose(),Pe.dispose(),ye.dispose(),be.dispose(),be.removeEventListener("sessionstart",Pt),be.removeEventListener("sessionend",bt),on.stop()};function ve(E){E.preventDefault(),am("WebGLRenderer: Context Lost."),V=!0}function Ge(){am("WebGLRenderer: Context Restored."),V=!1;let E=ke.autoReset,ee=Ie.enabled,de=Ie.autoUpdate,ue=Ie.needsUpdate,he=Ie.type;Be(),ke.autoReset=E,Ie.enabled=ee,Ie.autoUpdate=de,Ie.needsUpdate=ue,Ie.type=he}function Se(E){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qe(E){let ee=E.target;ee.removeEventListener("dispose",qe),pt(ee)}function pt(E){st(E),Me.remove(E)}function st(E){let ee=Me.get(E).programs;ee!==void 0&&(ee.forEach(function(de){ye.releaseProgram(de)}),E.isShaderMaterial&&ye.releaseShaderCache(E))}this.renderBufferDirect=function(E,ee,de,ue,he,We){ee===null&&(ee=P);let Je=he.isMesh&&he.matrixWorld.determinantAffine()<0,He=Pi(E,ee,de,ue,he);_e.setMaterial(ue,Je);let Ye=de.index,Qe=1;if(ue.wireframe===!0){if(Ye=ae.getWireframeAttribute(de),Ye===void 0)return;Qe=2}let at=de.drawRange,gt=de.attributes.position,$e=at.start*Qe,_t=(at.start+at.count)*Qe;We!==null&&($e=Math.max($e,We.start*Qe),_t=Math.min(_t,(We.start+We.count)*Qe)),Ye!==null?($e=Math.max($e,0),_t=Math.min(_t,Ye.count)):gt!=null&&($e=Math.max($e,0),_t=Math.min(_t,gt.count));let tn=_t-$e;if(tn<0||tn===1/0)return;Ue.setup(he,ue,He,de,Ye);let Nt,Lt=me;if(Ye!==null&&(Nt=w.get(Ye),Lt=Fe,Lt.setIndex(Nt)),he.isMesh)ue.wireframe===!0?(_e.setLineWidth(ue.wireframeLinewidth*se()),Lt.setMode(U.LINES)):Lt.setMode(U.TRIANGLES);else if(he.isLine){let Nn=ue.linewidth;Nn===void 0&&(Nn=1),_e.setLineWidth(Nn*se()),he.isLineSegments?Lt.setMode(U.LINES):he.isLineLoop?Lt.setMode(U.LINE_LOOP):Lt.setMode(U.LINE_STRIP)}else he.isPoints?Lt.setMode(U.POINTS):he.isSprite&&Lt.setMode(U.TRIANGLES);if(he.isBatchedMesh)if(Ve.get("WEBGL_multi_draw"))Lt.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{let Nn=he._multiDrawStarts,Ke=he._multiDrawCounts,Zn=he._multiDrawCount,Mt=Ye?w.get(Ye).bytesPerElement:1,Ds=Me.get(ue).currentProgram.getUniforms();for(let Un=0;Un<Zn;Un++)Ds.setValue(U,"_gl_DrawID",Un),Lt.render(Nn[Un]/Mt,Ke[Un])}else if(he.isInstancedMesh)Lt.renderInstances($e,tn,he.count);else if(de.isInstancedBufferGeometry){let Nn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ke=Math.min(de.instanceCount,Nn);Lt.renderInstances($e,tn,Ke)}else Lt.render($e,tn)};function Ft(E,ee,de,ue){O!==null&&E.isNodeMaterial&&O.setObject(ue,E),G===!0&&xe.setState(E,de,!1),E.transparent===!0&&E.side===Pn&&E.forceSinglePass===!1?(E.side=Rn,E.needsUpdate=!0,_i(E,ee,ue),E.side=As,E.needsUpdate=!0,_i(E,ee,ue),E.side=Pn):_i(E,ee,ue)}this.compile=function(E,ee,de=null){de===null&&(de=E),O!==null&&O.renderStart(E,ee,de),T=ce.get(de),T.init(ee),S.push(T),de.traverseVisible(function(he){he.isLight&&he.layers.test(ee.layers)&&(T.pushLight(he),he.castShadow&&T.pushShadow(he))}),E!==de&&E.traverseVisible(function(he){he.isLight&&he.layers.test(ee.layers)&&(T.pushLight(he),he.castShadow&&T.pushShadow(he))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),N=this.localClippingEnabled,G=xe.init(this.clippingPlanes,N),G===!0&&xe.setGlobalState(this.clippingPlanes,ee),O!==null&&Ie.render(T.state.shadowsArray,de,ee);let ue=new Set;return E.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;let We=he.material;if(We)if(Array.isArray(We))for(let Je=0;Je<We.length;Je++){let He=We[Je];Ft(He,de,ee,he),ue.add(He)}else Ft(We,de,ee,he),ue.add(We)}),T=S.pop(),O!==null&&O.renderEnd(),ue},this.compileAsync=function(E,ee,de=null){let ue=this.compile(E,ee,de);return new Promise(he=>{function We(){if(ue.forEach(function(Je){let Ye=Me.get(Je).currentProgram;(Ye===void 0||Ye.isReady())&&ue.delete(Je)}),ue.size===0){he(E);return}setTimeout(We,10)}Ve.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let jt=null;function Bt(E){jt&&jt(E)}function Pt(){on.stop()}function bt(){on.start()}let on=new qx;on.setAnimationLoop(Bt),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(E){jt=E,be.setAnimationLoop(E),E===null?on.stop():on.start()},be.addEventListener("sessionstart",Pt),be.addEventListener("sessionend",bt),this.render=function(E,ee){if(ee!==void 0&&ee.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;O!==null&&O.renderStart(E,ee);let de=be.enabled===!0&&be.isPresenting===!0,ue=L!==null&&(Z===null||de)&&L.begin(C,Z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(ee),ee=be.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,ee,Z),T=ce.get(E,S.length),T.init(ee),T.state.textureUnits=ze.getTextureUnits(),S.push(T),j.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ee.isArrayCamera?$.setFromArrayCamera(ee):D.setFromProjectionMatrix(j,ki,ee.reversedDepth),N=this.localClippingEnabled,G=xe.init(this.clippingPlanes,N),b=Oe.get(E,x.length),b.init(),x.push(b),this.info.render.frame++,be.enabled===!0&&be.isPresenting===!0){let Je=C.xr.getDepthSensingMesh();Je!==null&&It(Je,ee,-1/0,C.sortObjects)}It(E,ee,0,C.sortObjects),b.finish(),O!==null&&O.updateLights(T.state.lightsArray),C.sortObjects===!0&&b.sort(k,z),F=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,F&&X.addToRenderList(b,E),this.info.autoReset===!0&&this.info.reset(),G===!0&&xe.beginShadows();let he=T.state.shadowsArray;if(Ie.render(he,E,ee),G===!0&&xe.endShadows(),(ue&&L.hasRenderPass())===!1){let Je=b.opaque,He=b.transmissive;if(T.setupLights(),ee.isArrayCamera){let Ye=ee.cameras;if(He.length>0)for(let Qe=0,at=Ye.length;Qe<at;Qe++){let gt=Ye[Qe];gi(Je,He,E,gt)}F&&X.render(E);for(let Qe=0,at=Ye.length;Qe<at;Qe++){let gt=Ye[Qe];Dn(b,E,gt,gt.viewport)}}else He.length>0&&gi(Je,He,E,ee),F&&X.render(E),Dn(b,E,ee)}Z!==null&&H===0&&(ze.updateMultisampleRenderTarget(Z),ze.updateRenderTargetMipmap(Z)),ue&&L.end(C),E.isScene===!0&&E.onAfterRender(C,E,ee),Ue.resetDefaultState(),re=-1,I=null,S.pop(),S.length>0?(T=S[S.length-1],ze.setTextureUnits(T.state.textureUnits),G===!0&&xe.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?b=x[x.length-1]:b=null,O!==null&&O.renderEnd()};function It(E,ee,de,ue){if(E.visible===!1)return;if(E.layers.test(ee.layers)){if(E.isGroup)de=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(ee);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Je=ee.isArrayCamera?$:D;if(!E.frustumCulled||E.intersectsFrustum(Je)){ue&&A.setFromMatrixPosition(E.matrixWorld).applyMatrix4(j);let He=we.update(E),Ye=E.material;Ye.visible&&b.push(E,He,Ye,de,A.z,null,ee)}}else if(E.isMesh||E.isLine||E.isPoints){let Je=ee.isArrayCamera?$:D;if(!E.frustumCulled||E.intersectsFrustum(Je)){let He=we.update(E),Ye=E.material;if(ue&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),A.copy(E.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),A.copy(He.boundingSphere.center)),A.applyMatrix4(E.matrixWorld).applyMatrix4(j)),Array.isArray(Ye)){let Qe=He.groups;for(let at=0,gt=Qe.length;at<gt;at++){let $e=Qe[at],_t=Ye[$e.materialIndex];_t&&_t.visible&&b.push(E,He,_t,de,A.z,$e,ee)}}else Ye.visible&&b.push(E,He,Ye,de,A.z,null,ee)}}}let We=E.children;for(let Je=0,He=We.length;Je<He;Je++)It(We[Je],ee,de,ue)}function Dn(E,ee,de,ue){let{opaque:he,transmissive:We,transparent:Je}=E;T.setupLightsView(de),G===!0&&xe.setGlobalState(C.clippingPlanes,de),ue&&_e.viewport(oe.copy(ue)),he.length>0&&Yt(he,ee,de),We.length>0&&Yt(We,ee,de),Je.length>0&&Yt(Je,ee,de),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function gi(E,ee,de,ue){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ue.id]===void 0){let $e=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ue.id]=new fn(1,1,{generateMipmaps:!0,type:$e?In:di,minFilter:Jr,samples:Math.max(4,De.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let We=T.state.transmissionRenderTarget[ue.id],Je=ue.viewport||oe;We.setSize(Je.z*C.transmissionResolutionScale,Je.w*C.transmissionResolutionScale);let He=C.getRenderTarget(),Ye=C.getActiveCubeFace(),Qe=C.getActiveMipmapLevel();C.setRenderTarget(We),C.getClearColor(J),ge=C.getClearAlpha(),ge<1&&C.setClearColor(16777215,.5),C.clear(),F&&X.render(de);let at=C.toneMapping;C.toneMapping=Gi;let gt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),T.setupLightsView(ue),G===!0&&xe.setGlobalState(C.clippingPlanes,ue),Yt(E,de,ue),ze.updateMultisampleRenderTarget(We),ze.updateRenderTargetMipmap(We),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let _t=0,tn=ee.length;_t<tn;_t++){let Nt=ee[_t],{object:Lt,geometry:Nn,material:Ke,group:Zn}=Nt;if(Ke.side===Pn&&Lt.layers.test(ue.layers)){let Mt=Ke.side;Ke.side=Rn,Ke.needsUpdate=!0,en(Lt,de,ue,Nn,Ke,Zn),Ke.side=Mt,Ke.needsUpdate=!0,$e=!0}}$e===!0&&(ze.updateMultisampleRenderTarget(We),ze.updateRenderTargetMipmap(We))}C.setRenderTarget(He,Ye,Qe),C.setClearColor(J,ge),gt!==void 0&&(ue.viewport=gt),C.toneMapping=at}function Yt(E,ee,de){let ue=ee.isScene===!0?ee.overrideMaterial:null;for(let he=0,We=E.length;he<We;he++){let Je=E[he],{object:He,geometry:Ye,group:Qe}=Je,at=Je.material;at.allowOverride===!0&&ue!==null&&(at=ue),He.layers.test(de.layers)&&en(He,ee,de,Ye,at,Qe)}}function en(E,ee,de,ue,he,We){O!==null&&he.isNodeMaterial&&O.setObject(E,he),E.onBeforeRender(C,ee,de,ue,he,We),E.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),he.onBeforeRender(C,ee,de,ue,E,We),he.transparent===!0&&he.side===Pn&&he.forceSinglePass===!1?(he.side=Rn,he.needsUpdate=!0,C.renderBufferDirect(de,ee,ue,he,E,We),he.side=As,he.needsUpdate=!0,C.renderBufferDirect(de,ee,ue,he,E,We),he.side=Pn):C.renderBufferDirect(de,ee,ue,he,E,We),E.onAfterRender(C,ee,de,ue,he,We)}function ln(E){let ee=0;for(let de of E)de.texture!==null&&ee++;return ee}function _i(E,ee,de){ee.isScene!==!0&&(ee=P);let ue=Me.get(E),he=T.state.lights,We=T.state.shadowsArray,Je=he.state.version,He=ye.getParameters(E,he.state,We,ee,de,T.state.lightProbeGridArray),Ye=ye.getProgramCacheKey(He),Qe=ue.programs;ue.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?ee.environment:null,ue.fog=ee.fog;let at=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;ue.envMap=R.get(E.envMap||ue.environment,at),ue.envMapRotation=ue.environment!==null&&E.envMap===null?ee.environmentRotation:E.envMapRotation,Qe===void 0&&(E.addEventListener("dispose",qe),Qe=new Map,ue.programs=Qe,ue.programVariants=new Map);let gt=Qe.get(Ye);if(gt!==void 0){if(ue.currentProgram===gt&&ue.lightsStateVersion===Je)return Zt(E,He),gt}else He.uniforms=ye.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,de,He),E.onBeforeCompile(He,C),gt=ye.acquireProgram(He,Ye),Qe.set(Ye,gt),ue.uniforms=He.uniforms;let $e=ue.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&($e.clippingPlanes=xe.uniform),Zt(E,He),ue.needsLights=Rc(E),ue.lightsStateVersion=Je,ue.needsLights&&($e.ambientLightColor.value=he.state.ambient,$e.lightProbe.value=he.state.probe,$e.sunLights.value=he.state.sun,$e.sunLightShadows.value=he.state.sunShadow,$e.directionalLights.value=he.state.directional,$e.directionalLightShadows.value=he.state.directionalShadow,$e.spotLights.value=he.state.spot,$e.spotLightShadows.value=he.state.spotShadow,$e.rectAreaLights.value=he.state.rectArea,$e.ltc_1.value=he.state.rectAreaLTC1,$e.ltc_2.value=he.state.rectAreaLTC2,$e.pointLights.value=he.state.point,$e.pointLightShadows.value=he.state.pointShadow,$e.hemisphereLights.value=he.state.hemi,$e.sunShadowMatrix.value=he.state.sunShadowMatrix,$e.sunShadowCascade.value=he.state.sunShadowCascade,$e.directionalShadowMatrix.value=he.state.directionalShadowMatrix,$e.spotLightMatrix.value=he.state.spotLightMatrix,$e.spotLightMap.value=he.state.spotLightMap,$e.pointShadowMatrix.value=he.state.pointShadowMatrix),ue.numLightProbeGrids=ln(T.state.lightProbeGridArray),ue.currentProgram=gt,ue.uniformsList=null,gt}function Sa(E,ee,de,ue,he){let We=Me.get(E),Je=We.currentProgram.id+","+ue+","+he,He=We.programVariants.get(Je);return He===void 0?(He=_i(E,ee,de),We.programVariants.set(Je,He)):(We.currentProgram=He,We.uniformsList=null,We.outputColorSpace=ue,We.toneMapping=he),He}function cn(E){if(E.uniformsList===null){let ee=E.currentProgram.getUniforms();E.uniformsList=Po.seqWithValue(ee.seq,E.uniforms)}return E.uniformsList}function Zt(E,ee){let de=Me.get(E);de.outputColorSpace=ee.outputColorSpace,de.batching=ee.batching,de.batchingColor=ee.batchingColor,de.instancing=ee.instancing,de.instancingColor=ee.instancingColor,de.instancingMorph=ee.instancingMorph,de.skinning=ee.skinning,de.morphTargets=ee.morphTargets,de.morphNormals=ee.morphNormals,de.morphColors=ee.morphColors,de.morphTargetsCount=ee.morphTargetsCount,de.numClippingPlanes=ee.numClippingPlanes,de.numIntersection=ee.numClipIntersection,de.vertexAlphas=ee.vertexAlphas,de.vertexTangents=ee.vertexTangents,de.toneMapping=ee.toneMapping}function Pi(E,ee,de,ue,he){ee.isScene!==!0&&(ee=P),ze.resetTextureUnits();let We=ee.fog,Je=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?ee.environment:null,He=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:ft.workingColorSpace,Ye=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,Qe=R.get(ue.envMap||Je,Ye),at=ue.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,gt=!!de.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),$e=!!de.morphAttributes.position,_t=!!de.morphAttributes.normal,tn=!!de.morphAttributes.color,Nt=Gi;ue.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Nt=C.toneMapping);let Lt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Nn=Lt!==void 0?Lt.length:0,Ke=Me.get(ue),Zn=T.state.lights;if(G===!0&&(N===!0||E!==I)){let Vt=E===I&&ue.id===re;xe.setState(ue,E,Vt)}let Mt=!1,Ds=!1;ue.version===Ke.__version?Ke.needsLights&&Ke.lightsStateVersion!==Zn.state.version||he.isBatchedMesh&&Ke.batching===!1||!he.isBatchedMesh&&Ke.batching===!0||he.isBatchedMesh&&Ke.batchingColor===!0&&he._colorsTexture===null||he.isBatchedMesh&&Ke.batchingColor===!1&&he._colorsTexture!==null||he.isInstancedMesh&&Ke.instancing===!1||!he.isInstancedMesh&&Ke.instancing===!0||he.isSkinnedMesh&&Ke.skinning===!1||!he.isSkinnedMesh&&Ke.skinning===!0||he.isInstancedMesh&&Ke.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&Ke.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&Ke.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&Ke.instancingMorph===!1&&he.morphTexture!==null||Ke.envMap!==Qe||ue.fog===!0&&Ke.fog!==We||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==xe.numPlanes||Ke.numIntersection!==xe.numIntersection)||Ke.vertexAlphas!==at||Ke.vertexTangents!==gt||Ke.morphTargets!==$e||Ke.morphNormals!==_t||Ke.morphColors!==tn||Ke.morphTargetsCount!==Nn||Ke.numLightProbeGrids!==ln(T.state.lightProbeGridArray)?Mt=!0:(Ke.outputColorSpace!==He||Ke.toneMapping!==Nt)&&(Ds=!0):(Mt=!0,Ke.__version=ue.version);let Un=Ke.currentProgram;(Mt===!0||Ds===!0)&&(Un=Ds===!0?Sa(ue,ee,he,He,Nt):_i(ue,ee,he),O&&ue.isNodeMaterial&&O.onUpdateProgram(ue,Un,Ke));let Pc=!1,es=!1,Ns=!1,yt=Un.getUniforms(),Tn=Ke.uniforms;if(_e.useProgram(Un.program)&&(Pc=!0,es=!0,Ns=!0),ue.id!==re&&(re=ue.id,es=!0),Pc||I!==E){_e.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),yt.setValue(U,"projectionMatrix",E.projectionMatrix),yt.setValue(U,"viewMatrix",E.matrixWorldInverse);let mn=yt.map.cameraPosition;mn!==void 0&&mn.setValue(U,Y.setFromMatrixPosition(E.matrixWorld)),De.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&yt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),I!==E&&(I=E,es=!0,Ns=!0)}if(Ke.needsLights&&(Zn.state.sunShadowMap.length>0&&yt.setValue(U,"sunShadowMap",Zn.state.sunShadowMap,ze),Zn.state.directionalShadowMap.length>0&&yt.setValue(U,"directionalShadowMap",Zn.state.directionalShadowMap,ze),Zn.state.spotShadowMap.length>0&&yt.setValue(U,"spotShadowMap",Zn.state.spotShadowMap,ze),Zn.state.pointShadowMap.length>0&&yt.setValue(U,"pointShadowMap",Zn.state.pointShadowMap,ze)),he.isSkinnedMesh){yt.setOptional(U,he,"bindMatrix"),yt.setOptional(U,he,"bindMatrixInverse");let Vt=he.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),yt.setValue(U,"boneTexture",Vt.boneTexture,ze))}he.isBatchedMesh&&(yt.setOptional(U,he,"batchingTexture"),yt.setValue(U,"batchingTexture",he._matricesTexture,ze),yt.setOptional(U,he,"batchingIdTexture"),yt.setValue(U,"batchingIdTexture",he._indirectTexture,ze),yt.setOptional(U,he,"batchingColorTexture"),he._colorsTexture!==null&&yt.setValue(U,"batchingColorTexture",he._colorsTexture,ze));let Xi=de.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&pe.update(he,de,Un),(es||Ke.receiveShadow!==he.receiveShadow)&&(Ke.receiveShadow=he.receiveShadow,yt.setValue(U,"receiveShadow",he.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&ee.environment!==null&&(Tn.envMapIntensity.value=ee.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=CE()),es){if(yt.setValue(U,"toneMappingExposure",C.toneMappingExposure),Ke.needsLights&&Fo(Tn,Ns),We&&ue.fog===!0&&Le.refreshFogUniforms(Tn,We),Le.refreshMaterialUniforms(Tn,ue,W,Q,T.state.transmissionRenderTarget[E.id]),Ke.needsLights&&Ke.numLightProbeGrids>0){let Vt=y,mn=0;for(let Tr of T.state.lightProbeGridArray)Tr.texture!==null&&(Vt.textures[mn]=Tr.texture,Vt.min[mn]=Tr.boundingBox.min,Vt.max[mn]=Tr.boundingBox.max,Vt.resolution[mn]=Tr.resolution,mn++);for(let Tr in Vt)Vt[Tr].length=mn;Tn.probesSH.value=Vt.textures,Tn.probesMin.value=Vt.min,Tn.probesMax.value=Vt.max,Tn.probesResolution.value=Vt.resolution}Po.upload(U,cn(Ke),Tn,ze)}if(ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Po.upload(U,cn(Ke),Tn,ze),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&yt.setValue(U,"center",he.center),yt.setValue(U,"modelViewMatrix",he.modelViewMatrix),yt.setValue(U,"normalMatrix",he.normalMatrix),yt.setValue(U,"modelMatrix",he.matrixWorld),ue.uniformsGroups!==void 0){let Vt=ue.uniformsGroups;for(let mn=0,Tr=Vt.length;mn<Tr;mn++){let Om=Vt[mn];Pe.update(Om,Un),Pe.bind(Om,Un)}}return Un}function Fo(E,ee){E.ambientLightColor.needsUpdate=ee,E.lightProbe.needsUpdate=ee,E.sunLights.needsUpdate=ee,E.sunLightShadows.needsUpdate=ee,E.directionalLights.needsUpdate=ee,E.directionalLightShadows.needsUpdate=ee,E.pointLights.needsUpdate=ee,E.pointLightShadows.needsUpdate=ee,E.spotLights.needsUpdate=ee,E.spotLightShadows.needsUpdate=ee,E.rectAreaLights.needsUpdate=ee,E.hemisphereLights.needsUpdate=ee}function Rc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(E,ee,de){let ue=Me.get(E);ue.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Me.get(E.texture).__webglTexture=ee,Me.get(E.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:de,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,ee){let de=Me.get(E);de.__webglFramebuffer=ee,de.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(E,ee=0,de=0){Z=E,ie=ee,H=de;let ue=null,he=!1,We=!1;if(E){let He=Me.get(E);if(He.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(U.FRAMEBUFFER,He.__webglFramebuffer),oe.copy(E.viewport),Ce.copy(E.scissor),Ne=E.scissorTest,_e.viewport(oe),_e.scissor(Ce),_e.setScissorTest(Ne),re=-1;return}else if(He.__webglFramebuffer===void 0)ze.setupRenderTarget(E);else if(He.__hasExternalTextures)ze.rebindTextures(E,Me.get(E.texture).__webglTexture,Me.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let at=E.depthTexture;if(He.__boundDepthTexture!==at){if(at!==null&&Me.has(at)&&(E.width!==at.image.width||E.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(E)}}let Ye=E.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(We=!0);let Qe=Me.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Qe[ee])?ue=Qe[ee][de]:ue=Qe[ee],he=!0):E.samples>0&&ze.useMultisampledRTT(E)===!1?ue=Me.get(E).__webglMultisampledFramebuffer:Array.isArray(Qe)?ue=Qe[de]:ue=Qe,oe.copy(E.viewport),Ce.copy(E.scissor),Ne=E.scissorTest}else oe.copy(q).multiplyScalar(W).floor(),Ce.copy(fe).multiplyScalar(W).floor(),Ne=le;if(de!==0&&(ue=ne),_e.bindFramebuffer(U.FRAMEBUFFER,ue)&&_e.drawBuffers(E,ue),_e.viewport(oe),_e.scissor(Ce),_e.setScissorTest(Ne),he){let He=Me.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+ee,He.__webglTexture,de)}else if(We){let He=ee;for(let Ye=0;Ye<E.textures.length;Ye++){let Qe=Me.get(E.textures[Ye]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ye,Qe.__webglTexture,de,He)}}else if(E!==null&&de!==0){let He=Me.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,He.__webglTexture,de)}re=-1};function jr(E){let ee=Me.get(E);return(ee.__readFormat!==E.format||ee.__readType!==E.type)&&(ee.__readFormat=E.format,ee.__readType=E.type,ee.__formatReadable=De.textureFormatReadable(E.format),ee.__typeReadable=De.textureTypeReadable(E.type)),ee}this.readRenderTargetPixels=function(E,ee,de,ue,he,We,Je,He=0){if(!(E&&E.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Je!==void 0&&(Ye=Ye[Je],Array.isArray(Ye)&&(Ye=Ye[0])),Ye){_e.bindFramebuffer(U.FRAMEBUFFER,Ye);try{let Qe=E.textures[He],at=Qe.format,gt=Qe.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+He);let $e=jr(Qe);if($e.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=E.width-ue&&de>=0&&de<=E.height-he&&U.readPixels(ee,de,ue,he,Ae.convert(at),Ae.convert(gt),We)}finally{let Qe=Z!==null?Me.get(Z).__webglFramebuffer:null;_e.bindFramebuffer(U.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(E,ee,de,ue,he,We,Je,He=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Me.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Je!==void 0&&(Ye=Ye[Je],Array.isArray(Ye)&&(Ye=Ye[0])),Ye)if(ee>=0&&ee<=E.width-ue&&de>=0&&de<=E.height-he){_e.bindFramebuffer(U.FRAMEBUFFER,Ye);let Qe=E.textures[He],at=Qe.format,gt=Qe.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+He);let $e=jr(Qe);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.bufferData(U.PIXEL_PACK_BUFFER,We.byteLength,U.STREAM_READ),U.readPixels(ee,de,ue,he,Ae.convert(at),Ae.convert(gt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let tn=Z!==null?Me.get(Z).__webglFramebuffer:null;_e.bindFramebuffer(U.FRAMEBUFFER,tn);let Nt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await mx(U,Nt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,We),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(_t),U.deleteSync(Nt),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,ee=null,de=0){let ue=Math.pow(2,-de),he=Math.floor(E.image.width*ue),We=Math.floor(E.image.height*ue),Je=ee!==null?ee.x:0,He=ee!==null?ee.y:0;ze.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,de,0,0,Je,He,he,We),_e.unbindTexture()},this.copyTextureToTexture=function(E,ee,de=null,ue=null,he=0,We=0){let Je,He,Ye,Qe,at,gt,$e,_t,tn,Nt=E.isCompressedTexture?E.mipmaps[We]:E.image;if(de!==null)Je=de.max.x-de.min.x,He=de.max.y-de.min.y,Ye=de.isBox3?de.max.z-de.min.z:1,Qe=de.min.x,at=de.min.y,gt=de.isBox3?de.min.z:0;else{let yt=Math.pow(2,-he);Je=Math.floor(Nt.width*yt),He=Math.floor(Nt.height*yt),E.isDataArrayTexture?Ye=Nt.depth:E.isData3DTexture?Ye=Math.floor(Nt.depth*yt):Ye=1,Qe=0,at=0,gt=0}ue!==null?($e=ue.x,_t=ue.y,tn=ue.z):($e=0,_t=0,tn=0);let Lt=Ae.convert(ee.format),Nn=Ae.convert(ee.type),Ke;ee.isData3DTexture?(ze.setTexture3D(ee,0),Ke=U.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(ze.setTexture2DArray(ee,0),Ke=U.TEXTURE_2D_ARRAY):(ze.setTexture2D(ee,0),Ke=U.TEXTURE_2D),_e.activeTexture(U.TEXTURE0),_e.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,ee.flipY),_e.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),_e.pixelStorei(U.UNPACK_ALIGNMENT,ee.unpackAlignment);let Zn=_e.getParameter(U.UNPACK_ROW_LENGTH),Mt=_e.getParameter(U.UNPACK_IMAGE_HEIGHT),Ds=_e.getParameter(U.UNPACK_SKIP_PIXELS),Un=_e.getParameter(U.UNPACK_SKIP_ROWS),Pc=_e.getParameter(U.UNPACK_SKIP_IMAGES);_e.pixelStorei(U.UNPACK_ROW_LENGTH,Nt.width),_e.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nt.height),_e.pixelStorei(U.UNPACK_SKIP_PIXELS,Qe),_e.pixelStorei(U.UNPACK_SKIP_ROWS,at),_e.pixelStorei(U.UNPACK_SKIP_IMAGES,gt);let es=E.isDataArrayTexture||E.isData3DTexture,Ns=ee.isDataArrayTexture||ee.isData3DTexture;if(E.isDepthTexture){let yt=Me.get(E),Tn=Me.get(ee),Xi=Me.get(yt.__renderTarget),Vt=Me.get(Tn.__renderTarget);_e.bindFramebuffer(U.READ_FRAMEBUFFER,Xi.__webglFramebuffer),_e.bindFramebuffer(U.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let mn=0;mn<Ye;mn++)es&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.get(E).__webglTexture,he,gt+mn),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Me.get(ee).__webglTexture,We,tn+mn)),U.blitFramebuffer(Qe,at,Qe+Je,at+He,$e,_t,$e+Je,_t+He,U.DEPTH_BUFFER_BIT,U.NEAREST);_e.bindFramebuffer(U.READ_FRAMEBUFFER,null),_e.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(he!==0||E.isRenderTargetTexture||Me.has(E)){let yt=Me.get(E),Tn=Me.get(ee);_e.bindFramebuffer(U.READ_FRAMEBUFFER,B),_e.bindFramebuffer(U.DRAW_FRAMEBUFFER,K);for(let Xi=0;Xi<Ye;Xi++)es?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yt.__webglTexture,he,gt+Xi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yt.__webglTexture,he),Ns?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Tn.__webglTexture,We,tn+Xi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Tn.__webglTexture,We),he!==0?U.blitFramebuffer(Qe,at,Qe+Je,at+He,$e,_t,$e+Je,_t+He,U.COLOR_BUFFER_BIT,U.NEAREST):Ns?U.copyTexSubImage3D(Ke,We,$e,_t,tn+Xi,Qe,at,Je,He):U.copyTexSubImage2D(Ke,We,$e,_t,Qe,at,Je,He);_e.bindFramebuffer(U.READ_FRAMEBUFFER,null),_e.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ns?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ke,We,$e,_t,tn,Je,He,Ye,Lt,Nn,Nt.data):ee.isCompressedArrayTexture?U.compressedTexSubImage3D(Ke,We,$e,_t,tn,Je,He,Ye,Lt,Nt.data):U.texSubImage3D(Ke,We,$e,_t,tn,Je,He,Ye,Lt,Nn,Nt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,We,$e,_t,Je,He,Lt,Nn,Nt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,We,$e,_t,Nt.width,Nt.height,Lt,Nt.data):U.texSubImage2D(U.TEXTURE_2D,We,$e,_t,Je,He,Lt,Nn,Nt);_e.pixelStorei(U.UNPACK_ROW_LENGTH,Zn),_e.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt),_e.pixelStorei(U.UNPACK_SKIP_PIXELS,Ds),_e.pixelStorei(U.UNPACK_SKIP_ROWS,Un),_e.pixelStorei(U.UNPACK_SKIP_IMAGES,Pc),We===0&&ee.generateMipmaps===!0&&ee.mipmapsAutoUpdate===!0&&U.generateMipmap(Ke),_e.unbindTexture()},this.initRenderTarget=function(E){Me.get(E).__webglFramebuffer===void 0&&ze.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ze.setTextureCube(E,0):E.isData3DTexture?ze.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ze.setTexture2DArray(E,0):ze.setTexture2D(E,0),_e.unbindTexture()},this.resetState=function(){ie=0,H=0,Z=null,_e.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var wc=ii,Rs=class r extends ua{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,i){let s=this,a=new nc(s.manager);a.setPriority(s.priority),a.setCache(s.cache),a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(l){i?i(l):console.error(l),s.manager.itemError(e)}},n,i)}parse(e){let t=this;function n(W,k){if(W.nodeType!==1)return;W.hasAttribute("filter")&&console.warn("THREE.SVGLoader: Filters are not supported.");let z=b(W),q=!1,fe=null;switch(W.nodeName){case"svg":k=p(W,k);break;case"style":s(W);break;case"g":k=p(W,k);break;case"path":k=p(W,k),W.hasAttribute("d")&&(fe=i(W));break;case"rect":k=p(W,k),fe=l(W);break;case"polygon":k=p(W,k),fe=c(W);break;case"polyline":k=p(W,k),fe=u(W);break;case"circle":k=p(W,k),fe=d(W);break;case"ellipse":k=p(W,k),fe=h(W);break;case"line":k=p(W,k),fe=f(W);break;case"defs":q=!0;break;case"use":k=p(W,k);let $=(W.getAttributeNS("http://www.w3.org/1999/xlink","href")||W.getAttribute("href")||"").substring(1),G=W.viewportElement.getElementById($);G?n(G,k):console.warn("SVGLoader: 'use node' references non-existent node id: "+$);break;default:}if(fe){k.fill!==void 0&&k.fill!=="none"&&!k.fill.startsWith("url")&&fe.color.setStyle(k.fill,wc),S(fe,ge),K.push(fe);let D=Object.assign({},k);D.strokeWidth=k.strokeWidth*ne(ge),fe.userData={node:W,style:D,transform:ge.clone(),gradients:H}}let le=W.childNodes;for(let D=0;D<le.length;D++){let $=le[D];q&&$.nodeName!=="style"&&$.nodeName!=="defs"||n($,k)}z&&(Z.pop(),Z.length>0?ge.copy(Z[Z.length-1]):ge.identity())}function i(W){let k=new Qi,z=new Te,q=new Te,fe=new Te,le=!1,D=W.getAttribute("d");if(D===""||D==="none")return null;let $=D.match(/[a-df-z][^a-df-z]*/ig);for(let G=0,N=$.length;G<N;G++){let j=$[G],Y=j.charAt(0),A=j.slice(1).trim();le===!0&&(Y!=="M"&&Y!=="m"&&Y!=="Z"&&Y!=="z"&&k.moveTo(fe.x,fe.y),le=!1);let P;switch(Y){case"M":P=_(A);for(let F=0,se=P.length;F<se;F+=2)z.x=P[F+0],z.y=P[F+1],q.x=z.x,q.y=z.y,F===0?k.moveTo(z.x,z.y):k.lineTo(z.x,z.y),F===0&&fe.copy(z);break;case"H":P=_(A);for(let F=0,se=P.length;F<se;F++)z.x=P[F],q.x=z.x,q.y=z.y,k.lineTo(z.x,z.y);break;case"V":P=_(A);for(let F=0,se=P.length;F<se;F++)z.y=P[F],q.x=z.x,q.y=z.y,k.lineTo(z.x,z.y);break;case"L":P=_(A);for(let F=0,se=P.length;F<se;F+=2)z.x=P[F+0],z.y=P[F+1],q.x=z.x,q.y=z.y,k.lineTo(z.x,z.y);break;case"C":P=_(A);for(let F=0,se=P.length;F<se;F+=6)k.bezierCurveTo(P[F+0],P[F+1],P[F+2],P[F+3],P[F+4],P[F+5]),q.x=P[F+2],q.y=P[F+3],z.x=P[F+4],z.y=P[F+5];break;case"S":P=_(A);for(let F=0,se=P.length;F<se;F+=4)k.bezierCurveTo(m(z.x,q.x),m(z.y,q.y),P[F+0],P[F+1],P[F+2],P[F+3]),q.x=P[F+0],q.y=P[F+1],z.x=P[F+2],z.y=P[F+3];break;case"Q":P=_(A);for(let F=0,se=P.length;F<se;F+=4)k.quadraticCurveTo(P[F+0],P[F+1],P[F+2],P[F+3]),q.x=P[F+0],q.y=P[F+1],z.x=P[F+2],z.y=P[F+3];break;case"T":P=_(A);for(let F=0,se=P.length;F<se;F+=2){let U=m(z.x,q.x),Re=m(z.y,q.y);k.quadraticCurveTo(U,Re,P[F+0],P[F+1]),q.x=U,q.y=Re,z.x=P[F+0],z.y=P[F+1]}break;case"A":P=_(A,[3,4],7);for(let F=0,se=P.length;F<se;F+=7){if(P[F+5]==z.x&&P[F+6]==z.y)continue;let U=z.clone();z.x=P[F+5],z.y=P[F+6],q.x=z.x,q.y=z.y,a(k,P[F],P[F+1],P[F+2],P[F+3],P[F+4],U,z)}break;case"m":P=_(A);for(let F=0,se=P.length;F<se;F+=2)z.x+=P[F+0],z.y+=P[F+1],q.x=z.x,q.y=z.y,F===0?k.moveTo(z.x,z.y):k.lineTo(z.x,z.y),F===0&&fe.copy(z);break;case"h":P=_(A);for(let F=0,se=P.length;F<se;F++)z.x+=P[F],q.x=z.x,q.y=z.y,k.lineTo(z.x,z.y);break;case"v":P=_(A);for(let F=0,se=P.length;F<se;F++)z.y+=P[F],q.x=z.x,q.y=z.y,k.lineTo(z.x,z.y);break;case"l":P=_(A);for(let F=0,se=P.length;F<se;F+=2)z.x+=P[F+0],z.y+=P[F+1],q.x=z.x,q.y=z.y,k.lineTo(z.x,z.y);break;case"c":P=_(A);for(let F=0,se=P.length;F<se;F+=6)k.bezierCurveTo(z.x+P[F+0],z.y+P[F+1],z.x+P[F+2],z.y+P[F+3],z.x+P[F+4],z.y+P[F+5]),q.x=z.x+P[F+2],q.y=z.y+P[F+3],z.x+=P[F+4],z.y+=P[F+5];break;case"s":P=_(A);for(let F=0,se=P.length;F<se;F+=4)k.bezierCurveTo(m(z.x,q.x),m(z.y,q.y),z.x+P[F+0],z.y+P[F+1],z.x+P[F+2],z.y+P[F+3]),q.x=z.x+P[F+0],q.y=z.y+P[F+1],z.x+=P[F+2],z.y+=P[F+3];break;case"q":P=_(A);for(let F=0,se=P.length;F<se;F+=4)k.quadraticCurveTo(z.x+P[F+0],z.y+P[F+1],z.x+P[F+2],z.y+P[F+3]),q.x=z.x+P[F+0],q.y=z.y+P[F+1],z.x+=P[F+2],z.y+=P[F+3];break;case"t":P=_(A);for(let F=0,se=P.length;F<se;F+=2){let U=m(z.x,q.x),Re=m(z.y,q.y);k.quadraticCurveTo(U,Re,z.x+P[F+0],z.y+P[F+1]),q.x=U,q.y=Re,z.x=z.x+P[F+0],z.y=z.y+P[F+1]}break;case"a":P=_(A,[3,4],7);for(let F=0,se=P.length;F<se;F+=7){if(P[F+5]==0&&P[F+6]==0)continue;let U=z.clone();z.x+=P[F+5],z.y+=P[F+6],q.x=z.x,q.y=z.y,a(k,P[F],P[F+1],P[F+2],P[F+3],P[F+4],U,z)}break;case"Z":case"z":k.currentPath.autoClose=!0,k.currentPath.curves.length>0&&(z.copy(fe),k.currentPath.currentPoint.copy(z),le=!0);break;default:console.warn(j)}}return k}function s(W){if(!(!W.sheet||!W.sheet.cssRules||!W.sheet.cssRules.length))for(let k=0;k<W.sheet.cssRules.length;k++){let z=W.sheet.cssRules[k];if(z.type!==1)continue;let q=z.selectorText.split(/,/gm).filter(Boolean).map(le=>le.trim()),fe={};for(let le=0;le<z.style.length;le++){let D=z.style[le];fe[D]=z.style.getPropertyValue(D)}for(let le=0;le<q.length;le++)ie[q[le]]=Object.assign(ie[q[le]]||{},fe)}}function a(W,k,z,q,fe,le,D,$){if(k==0||z==0){W.lineTo($.x,$.y);return}q=q*Math.PI/180,k=Math.abs(k),z=Math.abs(z);let G=(D.x-$.x)/2,N=(D.y-$.y)/2,j=Math.cos(q)*G+Math.sin(q)*N,Y=-Math.sin(q)*G+Math.cos(q)*N,A=k*k,P=z*z,F=j*j,se=Y*Y,U=F/A+se/P;if(U>1){let ae=Math.sqrt(U);k=ae*k,z=ae*z,A=k*k,P=z*z}let Re=A*se+P*F,Ve=(A*P-Re)/Re,De=Math.sqrt(Math.max(0,Ve));fe===le&&(De=-De);let _e=De*k*Y/z,ke=-De*z*j/k,Me=Math.cos(q)*_e-Math.sin(q)*ke+(D.x+$.x)/2,ze=Math.sin(q)*_e+Math.cos(q)*ke+(D.y+$.y)/2,R=o(1,0,(j-_e)/k,(Y-ke)/z),w=o((j-_e)/k,(Y-ke)/z,(-j-_e)/k,(-Y-ke)/z)%(Math.PI*2);W.currentPath.absellipse(Me,ze,k,z,R,R+w,le===0,q)}function o(W,k,z,q){let fe=W*z+k*q,le=Math.sqrt(W*W+k*k)*Math.sqrt(z*z+q*q),D=Math.acos(Math.max(-1,Math.min(1,fe/le)));return W*q-k*z<0&&(D=-D),D}function l(W){let k=y(W.getAttribute("x")||0),z=y(W.getAttribute("y")||0),q=y(W.getAttribute("rx")||W.getAttribute("ry")||0),fe=y(W.getAttribute("ry")||W.getAttribute("rx")||0),le=y(W.getAttribute("width")),D=y(W.getAttribute("height")),$=1-.551915024494,G=new Qi;return G.moveTo(k+q,z),G.lineTo(k+le-q,z),(q!==0||fe!==0)&&G.bezierCurveTo(k+le-q*$,z,k+le,z+fe*$,k+le,z+fe),G.lineTo(k+le,z+D-fe),(q!==0||fe!==0)&&G.bezierCurveTo(k+le,z+D-fe*$,k+le-q*$,z+D,k+le-q,z+D),G.lineTo(k+q,z+D),(q!==0||fe!==0)&&G.bezierCurveTo(k+q*$,z+D,k,z+D-fe*$,k,z+D-fe),G.lineTo(k,z+fe),(q!==0||fe!==0)&&G.bezierCurveTo(k,z+fe*$,k+q*$,z,k+q,z),G}function c(W){function k(le,D,$){let G=y(D),N=y($);fe===0?q.moveTo(G,N):q.lineTo(G,N),fe++}let z=/([+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)(?:,|\s)([+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)/g,q=new Qi,fe=0;return W.getAttribute("points").replace(z,k),q.currentPath.autoClose=!0,q}function u(W){function k(le,D,$){let G=y(D),N=y($);fe===0?q.moveTo(G,N):q.lineTo(G,N),fe++}let z=/([+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)(?:,|\s)([+-]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[+-]?\d+)?)/g,q=new Qi,fe=0;return W.getAttribute("points").replace(z,k),q.currentPath.autoClose=!1,q}function d(W){let k=y(W.getAttribute("cx")||0),z=y(W.getAttribute("cy")||0),q=y(W.getAttribute("r")||0),fe=new vr;fe.absarc(k,z,q,0,Math.PI*2);let le=new Qi;return le.subPaths.push(fe),le}function h(W){let k=y(W.getAttribute("cx")||0),z=y(W.getAttribute("cy")||0),q=y(W.getAttribute("rx")||0),fe=y(W.getAttribute("ry")||0),le=new vr;le.absellipse(k,z,q,fe,0,Math.PI*2);let D=new Qi;return D.subPaths.push(le),D}function f(W){let k=y(W.getAttribute("x1")||0),z=y(W.getAttribute("y1")||0),q=y(W.getAttribute("x2")||0),fe=y(W.getAttribute("y2")||0),le=new Qi;return le.moveTo(k,z),le.lineTo(q,fe),le.currentPath.autoClose=!1,le}function g(W){let k="http://www.w3.org/1999/xlink",z=W.querySelectorAll("linearGradient, radialGradient"),q=["x1","y1","x2","y2","cx","cy","r","fx","fy","gradientUnits","gradientTransform","spreadMethod"],fe={};for(let D of z){let $=D.getAttribute("id");if(!$)continue;let G={type:D.nodeName==="radialGradient"?"radialGradient":"linearGradient",attrs:{},stops:null,href:null},N=D.getAttributeNS(k,"href")||D.getAttribute("href")||"";N.startsWith("#")&&(G.href=N.substring(1));for(let Y of q)D.hasAttribute(Y)&&(G.attrs[Y]=D.getAttribute(Y));let j=D.querySelectorAll("stop");if(j.length>0){G.stops=[];for(let Y of j){let A=Y.getAttribute("stop-color");!A&&Y.style&&(A=Y.style["stop-color"]),A||(A="#000");let P=Y.getAttribute("stop-opacity");(P===null||P==="")&&Y.style&&(P=Y.style["stop-opacity"]),P=P===null||P===""||P===void 0?1:Math.max(0,Math.min(1,parseFloat(P)));let F=Math.max(0,Math.min(1,parseFloat(Y.getAttribute("offset")||"0")));G.stops.push({offset:F,color:A,opacity:P})}}fe[$]=G}function le(D,$){let G=fe[D];if(!G||$.has(D))return G;if($.add(D),G.href&&fe[G.href]){let N=le(G.href,$);if(N){G.stops||(G.stops=N.stops);for(let j in N.attrs)j in G.attrs||(G.attrs[j]=N.attrs[j])}}return G}for(let D in fe)le(D,new Set);for(let D in fe){let Y=function(A){return typeof A!="string"?0:A.endsWith("%")?parseFloat(A)/100:y(A)},$=fe[D],G=$.attrs,N=G.gradientUnits==="userSpaceOnUse"?"userSpaceOnUse":"objectBoundingBox",j={type:$.type,gradientUnits:N,spreadMethod:G.spreadMethod==="reflect"||G.spreadMethod==="repeat"?G.spreadMethod:"pad",gradientTransform:null,stops:($.stops||[]).slice().sort((A,P)=>A.offset-P.offset)};if(G.gradientTransform&&(j.gradientTransform=new et,x(G.gradientTransform,j.gradientTransform)),$.type==="linearGradient")j.x1=G.x1!==void 0?Y(G.x1):0,j.y1=G.y1!==void 0?Y(G.y1):0,j.x2=G.x2!==void 0?Y(G.x2):N==="objectBoundingBox"?1:0,j.y2=G.y2!==void 0?Y(G.y2):0;else{let A=N==="objectBoundingBox"?.5:0,P=N==="objectBoundingBox"?.5:0;j.cx=G.cx!==void 0?Y(G.cx):A,j.cy=G.cy!==void 0?Y(G.cy):A,j.r=G.r!==void 0?Y(G.r):P,j.fx=G.fx!==void 0?Y(G.fx):j.cx,j.fy=G.fy!==void 0?Y(G.fy):j.cy}H[D]=j}}function p(W,k){k=Object.assign({},k);let z={};if(W.hasAttribute("class")){let D=W.getAttribute("class").split(/\s/).filter(Boolean).map($=>$.trim());for(let $=0;$<D.length;$++)z=Object.assign(z,ie["."+D[$]])}W.hasAttribute("id")&&(z=Object.assign(z,ie["#"+W.getAttribute("id")]));function q(D,$,G){G===void 0&&(G=function(j){return j}),W.hasAttribute(D)&&(k[$]=G(W.getAttribute(D))),z[D]&&(k[$]=G(z[D])),W.style&&W.style[D]!==""&&(k[$]=G(W.style[D]))}function fe(D){return Math.max(0,Math.min(1,y(D)))}function le(D){return Math.max(0,y(D))}return q("fill","fill"),q("fill-opacity","fillOpacity",fe),q("fill-rule","fillRule"),q("opacity","opacity",fe),q("stroke","stroke"),q("stroke-opacity","strokeOpacity",fe),q("stroke-width","strokeWidth",le),q("stroke-linejoin","strokeLineJoin"),q("stroke-linecap","strokeLineCap"),q("stroke-miterlimit","strokeMiterLimit",le),q("visibility","visibility"),k}function m(W,k){return W-(k-W)}function _(W,k,z){if(typeof W!="string")throw new TypeError("Invalid input: "+typeof W);let q={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},fe=0,le=1,D=2,$=3,G=fe,N=!0,j="",Y="",A=[];function P(Re,Ve,De){let _e=new SyntaxError('Unexpected character "'+Re+'" at index '+Ve+".");throw _e.partial=De,_e}function F(){j!==""&&(Y===""?A.push(Number(j)):A.push(Number(j)*Math.pow(10,Number(Y)))),j="",Y=""}let se,U=W.length;for(let Re=0;Re<U;Re++){if(se=W[Re],Array.isArray(k)&&k.includes(A.length%z)&&q.FLAGS.test(se)){G=le,j=se,F();continue}if(G===fe){if(q.WHITESPACE.test(se))continue;if(q.DIGIT.test(se)||q.SIGN.test(se)){G=le,j=se;continue}if(q.POINT.test(se)){G=D,j=se;continue}q.COMMA.test(se)&&(N&&P(se,Re,A),N=!0)}if(G===le){if(q.DIGIT.test(se)){j+=se;continue}if(q.POINT.test(se)){j+=se,G=D;continue}if(q.EXP.test(se)){G=$;continue}q.SIGN.test(se)&&j.length===1&&q.SIGN.test(j[0])&&P(se,Re,A)}if(G===D){if(q.DIGIT.test(se)){j+=se;continue}if(q.EXP.test(se)){G=$;continue}q.POINT.test(se)&&j[j.length-1]==="."&&P(se,Re,A)}if(G===$){if(q.DIGIT.test(se)){Y+=se;continue}if(q.SIGN.test(se)){if(Y===""){Y+=se;continue}Y.length===1&&q.SIGN.test(Y)&&P(se,Re,A)}}q.WHITESPACE.test(se)?(F(),G=fe,N=!1):q.COMMA.test(se)?(F(),G=fe,N=!0):q.SIGN.test(se)?(F(),G=le,j=se):q.POINT.test(se)?(F(),G=D,j=se):P(se,Re,A)}return F(),A}let v=["mm","cm","in","pt","pc","px"],M={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function y(W){let k="px";if(typeof W=="string"||W instanceof String)for(let q=0,fe=v.length;q<fe;q++){let le=v[q];if(W.endsWith(le)){k=le,W=W.substring(0,W.length-le.length);break}}let z;return k==="px"&&t.defaultUnit!=="px"?z=M.in[t.defaultUnit]/t.defaultDPI:(z=M[k][t.defaultUnit],z<0&&(z=M[k].in*t.defaultDPI)),z*parseFloat(W)}function b(W){if(!(W.hasAttribute("transform")||W.nodeName==="use"&&(W.hasAttribute("x")||W.hasAttribute("y"))))return null;let k=T(W);return Z.length>0&&k.premultiply(Z[Z.length-1]),ge.copy(k),Z.push(k),k}function T(W){let k=new et;if(W.nodeName==="use"&&(W.hasAttribute("x")||W.hasAttribute("y"))){let z=y(W.getAttribute("x")||0),q=y(W.getAttribute("y")||0);k.makeTranslation(z,q)}return W.hasAttribute("transform")&&x(W.getAttribute("transform"),k),k}function x(W,k){let z=re,q=W.split(")");for(let fe=q.length-1;fe>=0;fe--){let le=q[fe].trim();if(le==="")continue;let D=le.indexOf("("),$=le.length;if(D>0&&D<$){let G=le.slice(0,D),N=_(le.slice(D+1));switch(z.identity(),G){case"translate":if(N.length>=1){let j=N[0],Y=0;N.length>=2&&(Y=N[1]),z.makeTranslation(j,Y)}break;case"rotate":if(N.length>=1){let j=0,Y=0,A=0;j=N[0]*Math.PI/180,N.length>=3&&(Y=N[1],A=N[2]),I.makeTranslation(-Y,-A),oe.makeRotation(j),Ce.multiplyMatrices(oe,I),I.makeTranslation(Y,A),z.multiplyMatrices(I,Ce)}break;case"scale":if(N.length>=1){let j=N[0],Y=j;N.length>=2&&(Y=N[1]),z.makeScale(j,Y)}break;case"skewX":N.length===1&&z.set(1,Math.tan(N[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":N.length===1&&z.set(1,0,0,Math.tan(N[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":N.length===6&&z.set(N[0],N[2],N[4],N[1],N[3],N[5],0,0,1);break}k.premultiply(z)}}return k}function S(W,k){function z(D){J.set(D.x,D.y,1).applyMatrix3(k),D.set(J.x,J.y)}function q(D){let $=D.xRadius,G=D.yRadius,N=Math.cos(D.aRotation),j=Math.sin(D.aRotation),Y=new te($*N,$*j,0),A=new te(-G*j,G*N,0),P=Y.applyMatrix3(k),F=A.applyMatrix3(k),se=re.set(P.x,F.x,0,P.y,F.y,0,0,0,1),U=I.copy(se).invert(),De=oe.copy(U).transpose().multiply(U).elements,_e=B(De[0],De[1],De[4]),ke=Math.sqrt(_e.rt1),Me=Math.sqrt(_e.rt2);if(D.xRadius=1/ke,D.yRadius=1/Me,D.aRotation=Math.atan2(_e.sn,_e.cs),!((D.aEndAngle-D.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let R=I.set(ke,0,0,0,Me,0,0,0,1),w=oe.set(_e.cs,_e.sn,0,-_e.sn,_e.cs,0,0,0,1),ae=R.multiply(w).multiply(se),we=ye=>{let{x:Le,y:Oe}=new te(Math.cos(ye),Math.sin(ye),0).applyMatrix3(ae);return Math.atan2(Oe,Le)};D.aStartAngle=we(D.aStartAngle),D.aEndAngle=we(D.aEndAngle),L(k)&&(D.aClockwise=!D.aClockwise)}}function fe(D){let $=V(k),G=O(k);D.xRadius*=$,D.yRadius*=G;let N=$>Number.EPSILON?Math.atan2(k.elements[1],k.elements[0]):Math.atan2(-k.elements[3],k.elements[4]);D.aRotation+=N,L(k)&&(D.aStartAngle*=-1,D.aEndAngle*=-1,D.aClockwise=!D.aClockwise)}let le=W.subPaths;for(let D=0,$=le.length;D<$;D++){let N=le[D].curves;for(let j=0;j<N.length;j++){let Y=N[j];Y.isLineCurve?(z(Y.v1),z(Y.v2)):Y.isCubicBezierCurve?(z(Y.v0),z(Y.v1),z(Y.v2),z(Y.v3)):Y.isQuadraticBezierCurve?(z(Y.v0),z(Y.v1),z(Y.v2)):Y.isEllipseCurve&&(Ne.set(Y.aX,Y.aY),z(Ne),Y.aX=Ne.x,Y.aY=Ne.y,C(k)?q(Y):fe(Y))}}}function L(W){let k=W.elements;return k[0]*k[4]-k[1]*k[3]<0}function C(W){let k=W.elements,z=k[0]*k[3]+k[1]*k[4];if(z===0)return!1;let q=V(W),fe=O(W);return Math.abs(z/(q*fe))>Number.EPSILON}function V(W){let k=W.elements;return Math.sqrt(k[0]*k[0]+k[1]*k[1])}function O(W){let k=W.elements;return Math.sqrt(k[3]*k[3]+k[4]*k[4])}function ne(W){let k=W.elements,z=k[0]*k[4]-k[1]*k[3];return Math.sqrt(Math.abs(z))}function B(W,k,z){let q,fe,le,D,$,G=W+z,N=W-z,j=Math.sqrt(N*N+4*k*k);return G>0?(q=.5*(G+j),$=1/q,fe=W*$*z-k*$*k):G<0?fe=.5*(G-j):(q=.5*j,fe=-.5*j),N>0?le=N+j:le=N-j,Math.abs(le)>2*Math.abs(k)?($=-2*k/le,D=1/Math.sqrt(1+$*$),le=$*D):Math.abs(k)===0?(le=1,D=0):($=-.5*le/k,le=1/Math.sqrt(1+$*$),D=$*le),N>0&&($=le,le=-D,D=$),{rt1:q,rt2:fe,cs:le,sn:D}}let K=[],ie={},H={},Z=[],re=new et,I=new et,oe=new et,Ce=new et,Ne=new Te,J=new te,ge=new et,Ee=new DOMParser().parseFromString(e,"image/svg+xml");return g(Ee),n(Ee.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:K,gradients:H,xml:Ee.documentElement}}static createFillMaterial(e){let t=e.userData.style;if(t.fill===void 0||t.fill==="none")return null;let n=e.color,i=null,s=ry.exec(t.fill);if(s){let o=e.userData.gradients&&e.userData.gradients[s[1]];i=RE(o,e)}let a=new Cn({opacity:t.fillOpacity*(t.opacity||1),transparent:!0,side:Pn,depthWrite:!1});return i!==null?a.map=i:a.color=n,a}static createStrokeMaterial(e){let t=e.userData.style;return t.stroke===void 0||t.stroke==="none"?null:(ry.test(t.stroke)&&console.warn("THREE.SVGLoader: Gradient strokes are not supported."),new Cn({color:new tt().setStyle(t.stroke,wc),opacity:t.strokeOpacity*(t.opacity||1),transparent:!0,side:Pn,depthWrite:!1}))}static createShapes(e){return console.warn("SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead."),e.toShapes()}static getStrokeStyle(e,t,n,i,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:s}}static pointsToStroke(e,t,n,i){let s=[],a=[],o=[];if(r.pointsToStrokeWithBuffers(e,t,n,i,s,a,o)===0)return null;let l=new Ut;return l.setAttribute("position",new dt(s,3)),l.setAttribute("normal",new dt(a,3)),l.setAttribute("uv",new dt(o,2)),l}static pointsToStrokeWithBuffers(e,t,n,i,s,a,o,l){let c=new Te,u=new Te,d=new Te,h=new Te,f=new Te,g=new Te,p=new Te,m=new Te,_=new Te,v=new Te,M=new Te,y=new Te,b=new Te,T=new Te,x=new Te,S=new Te,L=new Te;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,e=le(e);let C=e.length;if(C<2)return 0;let V=e[0].equals(e[C-1]),O,ne=e[0],B,K=t.strokeWidth/2,ie=1/(C-1),H=0,Z,re,I,oe,Ce=!1,Ne=0,J=l*3,ge=l*2;Ee(e[0],e[1],c).multiplyScalar(K),m.copy(e[0]).sub(c),_.copy(e[0]).add(c),v.copy(m),M.copy(_);for(let D=1;D<C;D++){O=e[D],D===C-1?V?B=e[1]:B=void 0:B=e[D+1];let $=c;if(Ee(ne,O,$),d.copy($).multiplyScalar(K),y.copy(O).sub(d),b.copy(O).add(d),Z=H+ie,re=!1,B!==void 0){Ee(O,B,u),d.copy(u).multiplyScalar(K),T.copy(O).sub(d),x.copy(O).add(d),I=!0,d.subVectors(B,ne),$.dot(d)<0&&(I=!1),D===1&&(Ce=I),d.subVectors(B,O),d.normalize();let G=Math.abs($.dot(d));if(G>Number.EPSILON){let N=K/G;d.multiplyScalar(-N),h.subVectors(O,ne),f.copy(h).setLength(N).add(d),S.copy(f).negate();let j=f.length(),Y=h.length();h.divideScalar(Y),g.subVectors(B,O);let A=g.length();if(g.divideScalar(A),h.dot(S)<Y&&g.dot(S)<A&&(re=!0),L.copy(f).add(O),S.add(O),re){let P=I?_:m,F=(L.x-P.x)*(S.y-P.y)-(L.y-P.y)*(S.x-P.x);(I&&F<0||!I&&F>0)&&S.copy(P)}switch(oe=!1,re?I?(x.copy(S),b.copy(S)):(T.copy(S),y.copy(S)):k(),t.strokeLineJoin){case"bevel":z(I,re,Z);break;case"round":q(I,re),I?W(O,y,T,Z,0):W(O,x,b,Z,1);break;default:let P=K*t.strokeMiterLimit/j;if(P<1)if(t.strokeLineJoin!=="miter-clip"){z(I,re,Z);break}else q(I,re),I?(g.subVectors(L,y).multiplyScalar(P).add(y),p.subVectors(L,T).multiplyScalar(P).add(T),Q(y,Z,0),Q(g,Z,0),Q(O,Z,.5),Q(O,Z,.5),Q(g,Z,0),Q(p,Z,0),Q(O,Z,.5),Q(p,Z,0),Q(T,Z,0)):(g.subVectors(L,b).multiplyScalar(P).add(b),p.subVectors(L,x).multiplyScalar(P).add(x),Q(b,Z,1),Q(g,Z,1),Q(O,Z,.5),Q(O,Z,.5),Q(g,Z,1),Q(p,Z,1),Q(O,Z,.5),Q(p,Z,1),Q(x,Z,1));else re?(I?(Q(_,H,1),Q(m,H,0),Q(L,Z,0),Q(_,H,1),Q(L,Z,0),Q(S,Z,1)):(Q(_,H,1),Q(m,H,0),Q(L,Z,1),Q(m,H,0),Q(S,Z,0),Q(L,Z,1)),I?T.copy(L):x.copy(L)):I?(Q(y,Z,0),Q(L,Z,0),Q(O,Z,.5),Q(O,Z,.5),Q(L,Z,0),Q(T,Z,0)):(Q(b,Z,1),Q(L,Z,1),Q(O,Z,.5),Q(O,Z,.5),Q(L,Z,1),Q(x,Z,1)),oe=!0;break}}else k()}else k();!V&&D===C-1&&fe(e[0],v,M,I,!0,H),H=Z,ne=O,m.copy(T),_.copy(x)}if(!V)fe(O,y,b,I,!1,Z);else if(re&&s){let D=L,$=S;Ce!==I&&(D=S,$=L),I?(oe||Ce)&&($.toArray(s,0),$.toArray(s,9),oe&&D.toArray(s,3)):(oe||!Ce)&&($.toArray(s,3),$.toArray(s,9),oe&&D.toArray(s,0))}if(s){let D=[new Te,new Te,new Te],$=l*3;for(let G=$;G<J;G+=9)D[0].set(s[G],s[G+1]),D[1].set(s[G+3],s[G+4]),D[2].set(s[G+6],s[G+7]),pr.area(D)<0&&(s[G+3]=D[0].x,s[G+4]=D[0].y)}return Ne;function Ee(D,$,G){return G.subVectors($,D),G.set(-G.y,G.x).normalize()}function Q(D,$,G){s&&(s[J]=D.x,s[J+1]=D.y,s[J+2]=0,a&&(a[J]=0,a[J+1]=0,a[J+2]=1),J+=3,o&&(o[ge]=$,o[ge+1]=G,ge+=2)),Ne+=3}function W(D,$,G,N,j){c.copy($).sub(D).normalize(),u.copy(G).sub(D).normalize();let Y=Math.PI,A=c.dot(u);Math.abs(A)<1&&(Y=Math.abs(Math.acos(A))),Y/=n,d.copy($);for(let P=0,F=n-1;P<F;P++)h.copy(d).rotateAround(D,Y),Q(d,N,j),Q(h,N,j),Q(D,N,.5),d.copy(h);Q(d,N,j),Q(G,N,j),Q(D,N,.5)}function k(){Q(_,H,1),Q(m,H,0),Q(y,Z,0),Q(_,H,1),Q(y,Z,0),Q(b,Z,1)}function z(D,$,G){$?D?(Q(_,H,1),Q(m,H,0),Q(y,Z,0),Q(_,H,1),Q(y,Z,0),Q(S,Z,1),Q(y,G,0),Q(T,G,0),Q(S,G,.5)):(Q(_,H,1),Q(m,H,0),Q(b,Z,1),Q(m,H,0),Q(S,Z,0),Q(b,Z,1),Q(b,G,1),Q(S,G,0),Q(x,G,1)):D?(Q(y,G,0),Q(T,G,0),Q(O,G,.5)):(Q(b,G,1),Q(x,G,0),Q(O,G,.5))}function q(D,$){$&&(D?(Q(_,H,1),Q(m,H,0),Q(y,Z,0),Q(_,H,1),Q(y,Z,0),Q(S,Z,1),Q(y,H,0),Q(O,Z,.5),Q(S,Z,1),Q(O,Z,.5),Q(T,H,0),Q(S,Z,1)):(Q(_,H,1),Q(m,H,0),Q(b,Z,1),Q(m,H,0),Q(S,Z,0),Q(b,Z,1),Q(b,H,1),Q(S,Z,0),Q(O,Z,.5),Q(O,Z,.5),Q(S,Z,0),Q(x,H,1)))}function fe(D,$,G,N,j,Y){switch(t.strokeLineCap){case"round":j?W(D,G,$,Y,.5):W(D,$,G,Y,.5);break;case"square":if(j)c.subVectors($,D),u.set(c.y,-c.x),d.addVectors(c,u).add(D),h.subVectors(u,c).add(D),N?(d.toArray(s,3),h.toArray(s,0),h.toArray(s,9)):(d.toArray(s,3),o[7]===1?h.toArray(s,9):d.toArray(s,9),h.toArray(s,0));else{c.subVectors(G,D),u.set(c.y,-c.x),d.addVectors(c,u).add(D),h.subVectors(u,c).add(D);let A=s.length;N?(d.toArray(s,A-3),h.toArray(s,A-6),h.toArray(s,A-12)):(h.toArray(s,A-6),d.toArray(s,A-3),h.toArray(s,A-12))}break;default:break}}function le(D){let $=!1;for(let N=1,j=D.length-1;N<j;N++)if(D[N].distanceTo(D[N+1])<i){$=!0;break}if(!$)return D;let G=[];G.push(D[0]);for(let N=1,j=D.length-1;N<j;N++)D[N].distanceTo(D[N+1])>=i&&G.push(D[N]);return G.push(D[D.length-1]),G}}},ry=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function RE(r,e,t=256){if(!r||!Array.isArray(r.stops)||r.stops.length===0)return null;let n=e.userData.transform,i=r.gradientUnits==="objectBoundingBox",s=null;if(i&&(s=PE(e,n),s===null))return null;function a(d,h,f){f.set(d,h,1),r.gradientTransform&&f.applyMatrix3(r.gradientTransform),i&&f.set(s.minX+f.x*s.width,s.minY+f.y*s.height,1),n&&f.applyMatrix3(n)}let o=document.createElement("canvas"),l;if(r.type==="linearGradient"){o.width=t,o.height=1;let d=o.getContext("2d"),h=d.createLinearGradient(0,0,t,0);sy(h,r.stops),d.fillStyle=h,d.fillRect(0,0,t,1);let f=new te,g=new te;a(r.x1,r.y1,f),a(r.x2,r.y2,g);let p=g.x-f.x,m=g.y-f.y,_=p*p+m*m||1e-20,v=p/_,M=m/_,y=-(v*f.x+M*f.y);l=new et().set(v,M,y,0,0,.5,0,0,1)}else{let d=r.cx,h=r.cy,f=r.fx,g=r.fy,p=r.r;if(r.gradientTransform){let S=new te;S.set(d,h,1).applyMatrix3(r.gradientTransform),d=S.x,h=S.y,S.set(f,g,1).applyMatrix3(r.gradientTransform),f=S.x,g=S.y}if(i&&(d=s.minX+d*s.width,h=s.minY+h*s.height,f=s.minX+f*s.width,g=s.minY+g*s.height,p=p*Math.sqrt((s.width*s.width+s.height*s.height)/2)),p<=0)return null;o.width=t,o.height=t;let m=o.getContext("2d"),_=d-p,v=h-p,M=2*p,y=t/M;m.setTransform(y,0,0,y,-_*y,-v*y);let b=m.createRadialGradient(f,g,0,d,h,p);sy(b,r.stops),m.fillStyle=b,m.fillRect(_,v,M,M);let T=n?n.clone().invert():new et;l=new et().set(1/M,0,-_/M,0,1/M,-v/M,0,0,1).multiply(T)}let c=new oa(o);c.colorSpace=wc,c.flipY=!1,c.matrixAutoUpdate=!1,c.matrix=l;let u=r.spreadMethod==="reflect"?co:r.spreadMethod==="repeat"?lo:Bi;return c.wrapS=u,c.wrapT=u,c}function PE(r,e){let t=e?e.clone().invert():null,n=new Te,i=new To;for(let s of r.subPaths)for(let a of s.getPoints())n.copy(a),t&&n.applyMatrix3(t),i.expandByPoint(n);return i.isEmpty()?null:{minX:i.min.x,minY:i.min.y,width:i.max.x-i.min.x,height:i.max.y-i.min.y}}function sy(r,e){let t=new tt;for(let n of e){let i=n.color;if(n.opacity<1){t.setStyle(n.color,wc);let s=/rgb\(([^)]+)\)/.exec(t.getStyle(wc));s&&(i=`rgba(${s[1]},${n.opacity})`)}r.addColorStop(Math.max(0,Math.min(1,n.offset)),i)}}var Do={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ri=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},IE=new da(-1,1,1,-1,0,1),Cm=class extends Ut{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}},LE=new Cm,Ps=class{constructor(e){this._mesh=new Et(LE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,IE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Lf=class extends Ri{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof bn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qr.clone(e.uniforms),this.material=new bn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ps(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ec=class extends Ri{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Df=class extends Ri{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Nf=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Te);this._width=n.width,this._height=n.height,t=new fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Lf(Do),this.copyPass.material.blending=Zr,this.timer=new sc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ec!==void 0&&(a instanceof Ec?n=!0:a instanceof Df&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Te);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Uf=class extends Ri{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new tt}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var ay={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new tt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var No=class r extends Ri{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Te(e.x,e.y):new Te(256,256),this.clearColor=new tt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new fn(s,a,{type:In,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new fn(s,a,{type:In,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new fn(s,a,{type:In,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),a=Math.round(a/2)}let o=ay;this.highPassUniforms=Qr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new bn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Te(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new te(1,1,1),new te(1,1,1),new te(1,1,1),new te(1,1,1),new te(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qr.clone(Do.uniforms),this.blendMaterial=new bn({uniforms:this.copyUniforms,vertexShader:Do.vertexShader,fragmentShader:Do.fragmentShader,premultipliedAlpha:!0,blending:ji,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new tt,this._oldClearAlpha=1,this._basic=new Cn,this._fsQuad=new Ps(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Te(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let i=[],s=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),s.push(c)}return new bn({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new Te(.5,.5)},direction:{value:new Te(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new bn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};No.BlurDirectionX=new Te(1,0);No.BlurDirectionY=new Te(0,1);var Ac={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Of=class extends Ri{constructor(){super(),this.isOutputPass=!0,this.uniforms=Qr.clone(Ac.uniforms),this.material=new So({name:Ac.name,uniforms:this.uniforms,vertexShader:Ac.vertexShader,fragmentShader:Ac.fragmentShader}),this._fsQuad=new Ps(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===oc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===uc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===fc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===dc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===hc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Rm=1184273,nr=15592164,Hi=15291434;var Cc=(r,e,t)=>Math.min(t,Math.max(e,r));var DE=r=>{let e=r>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)},NE='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 356 362"><path d="M60 0H290Q350 0 350 54L275 141V76H77V141H233L172 218H62Q0 218 0 158V60Q0 0 60 0Z" fill="#E7E4DE"/><path d="M350 58L353 62V160L191 358H163V281Z" fill="#E9542A"/></svg>';function oy({reduced:r,mobile:e,state:t}){let n=document.getElementById("gl"),i=t||{camZ:0,dolly:0,intro:1,grow:1,fov:55,bloom:.38,portal:1,vel:0},s;try{s=new Io({canvas:n,antialias:!e,powerPreference:"high-performance"})}catch{return n.style.display="none",null}s.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.5:2)),s.setClearColor(Rm,1),s.toneMapping=Gi;let a=new sa;a.fog=new Ol(Rm,e?.026:.021);let o=new yn(55,1,.1,400),l=new Et(new yo(300,16,12),new Cn({color:Rm,side:Rn,fog:!1,depthWrite:!1}));l.renderOrder=-10,a.add(l),a.add(new ha(15789286,1710616,.55));let c=new pa(16777215,1.5);c.position.set(-6,12,6),a.add(c);let u=new fa(16767433,220,60,2);a.add(u);let d=new Rs().parse(NE);function h(A=70,P=95){let F=new vn,se=new vn;se.position.set(-178,181,0),se.scale.y=-1,F.add(se);let U={};return d.paths.forEach((Re,Ve)=>{let De=Ve===1,_e=De?new ai({color:Hi,emissive:Hi,emissiveIntensity:1,roughness:.35,metalness:.1}):new ai({color:nr,emissive:nr,emissiveIntensity:.3,roughness:.38,metalness:.3});Rs.createShapes(Re).forEach(Me=>{let ze=new ca(Me,{depth:De?P:A,bevelEnabled:!0,bevelThickness:5,bevelSize:4,bevelOffset:-4,bevelSegments:3,curveSegments:28});ze.translate(0,0,-(De?P:A)/2);let R=new Et(ze,_e);se.add(R),U[De?"leg":"body"]=R})}),F.userData=U,F}let f=[],g=DE(42),p=e?150:300,m=780,_=new yr(1,1,1),v=new Gl(_,new ai({color:16777215,roughness:.55,metalness:.25}),p),M=new St,y=new zi,b=new te,T=new te,x=new tt;for(let A=0;A<p;A++){let P=g()<.5?-1:1,F=P*(11+g()*34),se=12-g()*m,U=.8+g()*2.6,Re=2+Math.pow(g(),1.6)*30;T.set(F,-9+Re/2,se),b.set(U,Re,U+g()*2),M.compose(T,y,b),v.setMatrixAt(A,M),f.push([F,se,U,Re,b.z]),x.setHex(g()<.08?Hi:nr).multiplyScalar(.2+g()*.3),v.setColorAt(A,x)}a.add(v);let S=1;function L(A){for(let P=0;P<p;P++){let[F,se,U,Re,Ve]=f[P],De=Cc(Math.abs(se)/m*.5+Math.abs(F)/60*.3,0,.8),_e=Cc((A*1.8-De)/1,0,1),ke=1-Math.pow(1-_e,3),Me=Math.max(.001,Re*ke);T.set(F,-9+Me/2,se),b.set(U,Me,Ve),M.compose(T,y,b),v.setMatrixAt(P,M)}v.instanceMatrix.needsUpdate=!0,S=A}let C=new ma(900,150,nr,nr);C.position.set(0,-9,-380),C.material.transparent=!0,C.material.opacity=.13,C.material.depthWrite=!1,a.add(C);let V=e?700:1600,O=new Float32Array(V*3);for(let A=0;A<V;A++)O[A*3]=(g()-.5)*90,O[A*3+1]=(g()-.5)*46,O[A*3+2]=14-g()*m;let ne=new Ut;ne.setAttribute("position",new qn(O,3));let B=new aa(ne,new bs({color:nr,size:.16,transparent:!0,opacity:.75,depthWrite:!1}));a.add(B);let K=h();a.add(K);let ie=new vn;a.add(ie);let H=[];[5,8.5,12.5,17].forEach((A,P)=>{let F=new Et(new yr(2.4,1,2.4),new ai({color:nr,roughness:.35,metalness:.4}));F.userData.h=A,F.position.x=P*3.6,ie.add(F);let se=new Et(new xo(.95,1),new ai({color:Hi,emissive:Hi,emissiveIntensity:1}));ie.add(se),H.push({col:F,cap:se,h:A})});let Z=new vn;a.add(Z);let re=new Et(new xo(2.6,2),new ai({color:nr,roughness:.3,metalness:.45,flatShading:!0}));Z.add(re);let I=[];for(let A=0;A<4;A++){let P=new Et(new yo(.95,24,24),new ai({color:Hi,emissive:Hi,emissiveIntensity:.9}));Z.add(P),I.push(P)}let oe=new Ut().setFromPoints(new Array(8).fill(0).map(()=>new te)),Ce=new Ms(oe,new qr({color:Hi,transparent:!0,opacity:.55}));Z.add(Ce);let Ne=new Et(new vo(7.5,.04,8,160),new Cn({color:nr,transparent:!0,opacity:.45}));Ne.rotation.x=1.25,Z.add(Ne);let J=[],ge=-168,Ee=20;for(let A=0;A<4;A++){let P=new vn;P.position.z=ge-A*Ee;let F=new ai({color:4868163,emissive:Hi,emissiveIntensity:0,roughness:.5,metalness:.4}),se=22,U=13,Re=.5;[[0,U/2,se,Re],[0,-U/2,se,Re],[-se/2,0,Re,U],[se/2,0,Re,U]].forEach(([Ve,De,_e,ke])=>{let Me=new Et(new yr(_e,ke,Re),F);Me.position.set(Ve,De,0),P.add(Me)}),a.add(P),J.push({g:P,mat:F})}let Q=h(90,120);a.add(Q);let W=new Et(new Sr(1,60),new Cn({color:Hi,transparent:!0,opacity:0,blending:ji,depthWrite:!1,side:Pn}));a.add(W);let k=new vn;a.add(k);for(let A=0;A<5;A++){let P=new Et(new vo(9-A*1.3,.18+A*.02,12,120),new ai({color:A%2?nr:Hi,emissive:A%2?nr:Hi,emissiveIntensity:A%2?.5:1.4}));P.position.z=-A*3,k.add(P)}let z=1.6,q=30;function fe(){let A=z>1.15,P=A?Math.min(11,q*.24):0,F=A?0:5.2,se=A?1:.62;K.position.set(P*1,A?.3:7.2,-24),K.userData.sc=.031*se*(A?1:1.2),K.scale.setScalar(K.userData.sc*Math.max(.001,i.intro)),K.userData.base=K.position.clone(),K.traverse(U=>{U.material&&(U.material.transparent=!A,U.material.opacity=A?1:.42)}),ie.position.set(A?4:-4.5,A?-3:-8,-62),ie.scale.setScalar(A?1:.6),H.forEach(({col:U,cap:Re,h:Ve},De)=>{U.scale.y=Ve,U.position.y=Ve/2,Re.position.set(De*3.6,Ve+1.6,0)}),Z.position.set(A?9:0,A?5.5:9,-122),Z.scale.setScalar(A?1:.7),Q.position.set(A?11:0,A?1:6,-318),Q.scale.setScalar(.085*(A?1:.6)),k.position.set(A?11:0,A?1.5:6,-716),k.scale.setScalar(A?1:.7)}let le=null,D=null;!e&&!/nobloom/.test(location.search)&&(le=new Nf(s),le.addPass(new Uf(a,o)),D=new No(new Te(innerWidth,innerHeight),.38,.5,.9),le.addPass(D),le.addPass(new Of));function $(){let A=innerWidth,P=innerHeight;s.setSize(A,P,!1),le&&le.setSize(A,P),z=A/P,o.aspect=z,o.updateProjectionMatrix(),q=52*Math.tan(o.fov*Math.PI/360)*z,fe()}addEventListener("resize",$),$();let G={x:0,y:0,sx:0,sy:0};addEventListener("pointermove",A=>{G.x=(A.clientX/innerWidth-.5)*2,G.y=(A.clientY/innerHeight-.5)*2});let N=0,j=performance.now();function Y(A){let P=Math.min(.05,(A-j)/1e3);j=A;let F=A/1e3;N=i.camZ,G.sx+=(G.x-G.sx)*(1-Math.exp(-P*4)),G.sy+=(G.y-G.sy)*(1-Math.exp(-P*4));let se=r?0:1;o.position.set(G.sx*1.1+Math.sin(F*.27)*.35*se,-G.sy*.7+Math.cos(F*.21)*.25*se,N+i.dolly),Math.abs(o.fov-i.fov)>.01&&(o.fov=i.fov,o.updateProjectionMatrix()),D&&(D.strength=i.bloom),i.grow!==S&&L(i.grow);let U=Cc((-N-262)/56,0,1),Re=Math.sin(U*Math.PI)*.1;o.rotation.set(Re-G.sy*.03,-G.sx*.045,0),l.position.copy(o.position),u.position.set(o.position.x+3,o.position.y+4,o.position.z-6),r||(K.scale.setScalar(K.userData.sc*Math.max(.001,i.intro)),K.rotation.y=Math.sin(F*.35)*.5+G.sx*.25+(1-i.intro)*Math.PI*3,K.rotation.x=Math.sin(F*.27)*.08-G.sy*.12,K.position.y=K.userData.base.y+Math.sin(F*.7)*.35,Z.rotation.y=F*.06,I.forEach((ke,Me)=>{let ze=F*(.35+Me*.07)+Me*1.57;ke.position.set(Math.cos(ze)*(6+Me*.5),Math.sin(ze*1.3)*2.5,Math.sin(ze)*(6+Me*.5))}),re.rotation.set(F*.2,F*.3,0));let Ve=oe.attributes.position;I.forEach((ke,Me)=>{Ve.setXYZ(Me*2,0,0,0),Ve.setXYZ(Me*2+1,ke.position.x,ke.position.y,ke.position.z)}),Ve.needsUpdate=!0;let De=Cc(1-Math.abs(N- -50)/46,0,1);H.forEach(({col:ke,cap:Me,h:ze},R)=>{let w=Cc(De*1.5-R*.12,0,1),ae=Math.max(.05,ze*w);ke.scale.y=ae,ke.position.y=ae/2,Me.position.y=ae+1.6,Me.rotation.y=F*.8,Me.scale.setScalar(.2+w*.8)}),J.forEach((ke,Me)=>{let ze=N<ke.g.position.z+6?1:0;ke.mat.emissiveIntensity+=((ze?1.5:0)-ke.mat.emissiveIntensity)*(1-Math.exp(-P*6))});let _e=Q.userData.leg;_e&&_e.position.set(U*40,-U*55,U*10),W.position.set(Q.position.x+4+U*9,Q.position.y+22+U*12,Q.position.z),W.rotation.z=-.55,W.scale.x=2+U*5,W.material.opacity=.02+U*.2,Q.rotation.y=Math.sin(F*.3)*.35-.2+G.sx*.2,k.children.forEach((ke,Me)=>{ke.position.z=-Me*3*(1+(1-i.portal)*2.4),ke.scale.setScalar(.35+.65*i.portal),ke.rotation.z=F*(.15+Me*.05)*(Me%2?-1:1),ke.material.emissiveIntensity=(Me%2?.5:1.4)*(.85+Math.sin(F*1.2+Me)*.15)}),le?le.render():s.render(a,o),requestAnimationFrame(Y)}return requestAnimationFrame(Y),{state:i}}var Uo=15592164,Oo=15291434,UE=1184273,OE='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 356 362"><path d="M60 0H290Q350 0 350 54L275 141V76H77V141H233L172 218H62Q0 218 0 158V60Q0 0 60 0Z" fill="#E7E4DE"/><path d="M350 58L353 62V160L191 358H163V281Z" fill="#E9542A"/></svg>',an=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),Wi=(r,e,t)=>r+(e-r)*t,ly=r=>1-Math.pow(1-r,3),cy=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,FE=r=>1+2.4*Math.pow(r-1,3)+1.4*Math.pow(r-1,2),BE=r=>{let e=r>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)};function uy({reduced:r=!1,mobile:e=!1}={}){let t=document.getElementById("loader"),n=document.getElementById("ldgl"),i=document.getElementById("ldn"),s=document.getElementById("ldbar"),a=document.getElementById("ldlog"),o=!1;try{o=sessionStorage.getItem("drp9-built")==="1",sessionStorage.setItem("drp9-built","1")}catch{}let l=[...document.querySelectorAll(".ld-steps li")],c=r?.5:o?1.4:3,u=!1,d=document.getElementById("ldSkip");d&&d.addEventListener("click",()=>{u=!0,d.disabled=!0});let h=0,f=0,g=performance.now(),p=!1,m,_=-1,v=0,M=new Promise(J=>{m=J}),y=[],b=(J,ge)=>{y.push([J,ge])},T=()=>{if(!a)return;let J=y.slice(-4).map(([ge,Ee],Q,W)=>`<div class="${Ee?"ok":""}${Q===W.length-1?" cur":""}">${ge}</div>`).join("");a.dataset.n!==String(y.length)&&(a.innerHTML=J,a.dataset.n=y.length)},x=null,S,L,C=[],V,O,ne,B,K,ie=0,H={p:0,flash:0,out:0},Z=0;if(!r)try{x=new Io({canvas:n,antialias:!e,alpha:!0,powerPreference:"high-performance"}),x.setPixelRatio(Math.min(devicePixelRatio||1,e?1.5:2)),x.setClearColor(UE,0),S=new sa,L=new yn(34,1,1,4e3),S.add(new ha(15789286,1710616,.8));let J=new pa(16777215,1.6);J.position.set(-300,500,600),S.add(J);let ge=new fa(16770776,12e4,1400,2);ge.position.set(120,60,220),S.add(ge);let Ee=new Rs().parse(OE),Q=new vn;Q.position.set(-178,181,0),Q.scale.y=-1;let W=new vn;W.add(Q),S.add(W),W.userData.inner=Q,W.scale.setScalar(1),W.position.y=48;let k=BE(5),z=[],q=[];Ee.paths.forEach((P,F)=>{let se=F===1,U=se?96:72;(P.toShapes?P.toShapes(!0):Rs.createShapes(P)).forEach(Ve=>{let De=new ca(Ve,{depth:U,bevelEnabled:!0,bevelThickness:5,bevelSize:4,bevelOffset:-4,bevelSegments:3,curveSegments:28});De.translate(0,0,-U/2);let _e=new ai({color:se?Oo:Uo,emissive:se?Oo:Uo,emissiveIntensity:0,roughness:.38,metalness:.3,transparent:!0,opacity:0}),ke=new Et(De,_e),Me=new vn;Me.add(ke);let ze=new Xl(De,22),R=ze.attributes.position.count,w=new Ms(ze,new qr({color:se?Oo:Uo,transparent:!0,opacity:.95}));ze.setDrawRange(0,0),Q.add(w),Q.add(Me),C.push({g:Me,mesh:ke,mat:_e,line:w,edges:ze,total:R,leg:se,depth:U});let ae=De.attributes.position;for(let we=0;we<ae.count;we+=Math.ceil(ae.count/(e?260:520)))z.push(ae.getX(we),ae.getY(we),ae.getZ(we),se?1:0)})});let fe=z.length/4,le=new Float32Array(fe*3),D=new Float32Array(fe*3),$=new Float32Array(fe*3),G=new Float32Array(fe);for(let P=0;P<fe;P++){let F=k()*6.283,se=Math.acos(2*k()-1),U=520+k()*520;$[P*3]=U*Math.sin(se)*Math.cos(F)+0,$[P*3+1]=U*Math.cos(se)*.7,$[P*3+2]=U*Math.sin(se)*Math.sin(F),G[P]=k()*.5,le.set($.subarray(P*3,P*3+3),P*3);let Re=new tt(z[P*4+3]?Oo:Uo);D.set([Re.r,Re.g,Re.b],P*3)}let N=new Ut;N.setAttribute("position",new qn(le,3)),N.setAttribute("color",new qn(D,3)),V=new aa(N,new bs({size:e?4:3.4,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:ji,sizeAttenuation:!0})),V.userData={n:fe,start:$,tp:z,dly:G},Q.add(V),O=new ma(1800,60,Uo,Uo),O.position.y=-230,O.material.transparent=!0,O.material.opacity=0,S.add(O),ne=new Et(new ec(268,272,128),new Cn({color:Oo,transparent:!0,opacity:0,side:Pn})),ne.rotation.x=-Math.PI/2,ne.position.y=-228,S.add(ne),B=new Et(new Sr(520,3),new Cn({color:Oo,transparent:!0,opacity:0,blending:ji,depthWrite:!1})),S.add(B);let j=document.createElement("canvas");j.width=j.height=256;let Y=j.getContext("2d"),A=Y.createRadialGradient(128,128,0,128,128,128);A.addColorStop(0,"rgba(233,84,42,.55)"),A.addColorStop(.45,"rgba(255,255,255,0.144)"),A.addColorStop(1,"rgba(18,18,17,0)"),Y.fillStyle=A,Y.fillRect(0,0,256,256),K=new Et(new Sr(1100,1100),new Cn({map:new oa(j),transparent:!0,opacity:0,depthWrite:!1,blending:ji})),K.position.z=-160,S.add(K),re(),addEventListener("resize",re)}catch(J){console.warn("loader 3D unavailable",J),x=null}function re(){if(!x)return;let J=innerWidth,ge=innerHeight;x.setSize(J,ge,!1),L.aspect=J/ge;let Ee=Math.min(J/980,ge/1e3);L.position.set(0,20,1560/Math.max(.46,Math.min(1.5,Ee*1.35))),L.updateProjectionMatrix()}function I(J,ge){ie+=ge;let Q=C[0].g.parent.parent,W=an(J/.34),k=ly(an((J-.24)/.44)),z=an((J-.12)/.55),q=an((J-.6)/.34),fe=an((J-.94)/.06);C.forEach(j=>{if(j.edges.setDrawRange(0,Math.floor(j.total*W/2)*2),j.line.material.opacity=Wi(.95,.22,an((J-.5)/.4)),!j.leg)j.mesh.scale.z=Math.max(.001,k),j.mat.opacity=an(k*1.4,0,1),j.mat.emissiveIntensity=.12+.28*H.flash;else{let Y=FE(q);j.g.position.set(Wi(220,0,Y),Wi(-300,0,Y),Wi(60,0,Y)),j.g.rotation.z=Wi(-.5,0,Y),j.mesh.scale.z=Math.max(.001,an(q*2,0,1)),j.mat.opacity=an(q*2.2,0,1),j.mat.emissiveIntensity=Wi(.2,.95,q)+1.2*H.flash}});let le=V.geometry.attributes.position,{n:D,start:$,tp:G,dly:N}=V.userData;for(let j=0;j<D;j++){let Y=cy(an((z-N[j]*.6)/.5)),A=j*3,P=G[j*4],F=G[j*4+1],se=G[j*4+2],U=(1-Y)*.9,Re=$[A]*Math.cos(U)-$[A+2]*Math.sin(U),Ve=$[A]*Math.sin(U)+$[A+2]*Math.cos(U);le.array[A]=Wi(Re*1,P,Y),le.array[A+1]=Wi($[A+1],F,Y),le.array[A+2]=Wi(Ve,se,Y)}le.needsUpdate=!0,V.material.opacity=.95*(1-an((J-.72)/.22))+0,O.material.opacity=Wi(0,.2,an(J/.2))*(1-H.out),ne.material.opacity=.55*an(J/.3)*(1-an((J-.85)/.15))*(1-H.out),ne.scale.setScalar(1+.04*Math.sin(ie*3)),B.position.y=Wi(-210,260,cy(an((J-.2)/.55))),B.material.opacity=.85*Math.sin(Math.PI*an((J-.2)/.55))*(1-H.out),K.material.opacity=Wi(0,.9,an((J-.3)/.6))+.6*H.flash,Q.rotation.y=Math.sin(ie*.55)*.42+(1-ly(an(J/.9)))*1.1,Q.rotation.x=Math.sin(ie*.4)*.07-.06,Q.scale.setScalar(.98+.05*H.flash+.02*fe),L.lookAt(0,0,0)}function oe(J){let ge=Math.round(J*100);i.textContent!==String(ge)&&(i.textContent=ge),s.style.transform=`scaleX(${J})`;let Ee=Math.min(3,Math.floor(J*4-1e-4));J>0&&Ee!==_&&(_=Ee,l.forEach((Q,W)=>{Q.classList.toggle("on",W===Ee),Q.classList.toggle("done",W<Ee)})),J>=1&&l.forEach(Q=>{Q.classList.remove("on"),Q.classList.add("done")})}let Ce=performance.now();function Ne(J){let ge=an((J-Ce)/1e3,0,.05);Ce=J;let Ee=(J-g)/1e3,Q=u?1:an(Ee/c,0,1),W=/[?&]ldhold=([\d.]+)/.exec(location.search),k=W?+W[1]:Math.min(h/100,Q,p?1:.985);f+=(k-f)*(1-Math.exp(-ge*7)),k-f<6e-4&&(f=k),x&&(I(f,ge),x.render(S,L)),oe(f),T(),!W&&p&&f>=.9995&&!m.fired&&(m.fired=!0,f=1,oe(1),m()),Z=requestAnimationFrame(Ne)}return Z=requestAnimationFrame(Ne),{log:b,setTarget(J){h=Math.max(h,J)},markComplete(){p=!0,h=100},whenFull:()=>M,outro(){return new Promise(J=>{let ge=je.timeline({onComplete:J});x?ge.to(H,{flash:1,duration:.35,ease:"power2.out"}).to(H,{flash:0,duration:.5,ease:"power2.in"},.35).to(L.position,{z:"-=420",duration:.9,ease:"power3.in"},.15).to(H,{out:1,duration:.5},.4):ge.to({},{duration:.2})})},destroy(){cancelAnimationFrame(Z),removeEventListener("resize",re),x&&(x.dispose(),x.forceContextLoss&&x.forceContextLoss()),t.remove()}}}je.registerPlugin(it,ms,Xa);je.config({nullTargetWarn:!1});var Bf=document.documentElement;Bf.classList.add("js");var Gt=matchMedia("(prefers-reduced-motion: reduce)").matches,Dm=matchMedia("(max-width: 760px)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),kE=matchMedia("(pointer:fine)").matches,Ct=(r,e=document)=>e.querySelector(r),Ln=(r,e=document)=>[...e.querySelectorAll(r)],zE=(r,e,t)=>Math.min(t,Math.max(e,r)),Is=r=>r.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),GE=Ct("#loader"),pi=uy({reduced:Gt,mobile:Dm}),hy={fonts:.12,world:.24,images:.38,load:.12,setup:.14},Pm={fonts:0,world:0,images:0,load:0,setup:0},kf=(r,e=1)=>{Pm[r]=Math.max(Pm[r],e),pi.setTarget(Object.keys(hy).reduce((t,n)=>t+hy[n]*Pm[n],0)*100)},my=(r,e,t)=>r.then(()=>{kf(e),pi.log(t,!0)});pi.log("starting build");var rr={camZ:0,dolly:26,intro:0,grow:0,fov:55,bloom:.38,portal:0,vel:0};Gt&&Object.assign(rr,{dolly:0,intro:1,grow:1,portal:1});var gy=null,VE=new Promise(r=>setTimeout(()=>{try{gy=oy({reduced:Gt,mobile:Dm,state:rr})}catch(e){console.warn("3D world failed, content still works",e)}kf("world"),pi.log("3D world mounted",!0),r()},Gt?0:260)),HE=my(document.fonts?document.fonts.ready:Promise.resolve(),"fonts","typefaces ready"),WE=my(new Promise(r=>document.readyState==="complete"?r():addEventListener("load",r,{once:!0})),"load","page assets loaded"),fy=["img/logo-orange.png","img/khaled.webp","img/kareem.webp","img/sawaf.webp",...Ln(".shot img").slice(0,4).map(r=>r.getAttribute("src"))],dy=0,XE=Promise.all(fy.map(r=>new Promise(e=>{let t=!1,n=()=>{t||(t=!0,dy++,kf("images",dy/fy.length),e())},i=new Image;i.onload=i.onerror=n,i.src=r,setTimeout(n,7e3)}))).then(()=>pi.log("images placed",!0)),_y=[{k:"khaled",n:"Khaled Gomaa",role:"technology \xB7 product",cv:`CTPO, 4Sale
Ex-CTO, elmenus`,sum:"CTPO at 4Sale. 16 years building marketplaces, ad tech, legal tech and e-commerce.",facts:`Cairo
German University in Cairo, computer science
English, Arabic`,tl:[["2024 \u2013","CTPO, 4Sale","Leading the shift from a classifieds site to a transaction-based business."],["2024 \u2013","Consultant and acting CTPO, Cartona","Egypt\u2019s B2B marketplace for retailers and suppliers. Product and technology lead."],["founder","Co-founder, DRP9 Tech","Parent of DRP9 (creator marketplace) and La7ma (butcher marketplace)."],["2021 \u2013 24","CTO, elmenus","Led engineering at Egypt\u2019s food discovery and delivery platform."],["2018 \u2013 20","CTO, CONNY (Berlin)","Built a low-code legal platform that changed German law; Disrupt Berlin 2019."],["2016 \u2013 18","Engineering Manager, AppLift","Managed Datalift360, an ad platform aggregating 200bn records a month."],["2007 \u2013 16","Co-founder: Mash, Naqeshny, Elves, Speakol","Mash (startup builder); Naqeshny (100k+ users); Elves (AI concierge)."]]},{k:"kareem",n:"Kareem Zaher",role:"AI \xB7 engineering leadership",cv:`Ex-CTO, Octane
Imolty.ai, Uniek.ai`,sum:"Engineering leader and tech entrepreneur. 12+ years, four startups built.",facts:`Lisbon \xB7 Amsterdam
Loughborough University, British University in Egypt
English, Arabic, Dutch (elementary)`,tl:[["2026 \u2013","Co-founder, Imolty.ai and Uniek.ai","AI agents for product teams, and a guest experience platform for luxury villas."],["2025 \u2013","Engineering Advisor, UpHill","Led the team and built hands-on Europe\u2019s first national-scale medical triage agent (30k+ calls a day)."],["2024 \u2013 25","CTO, Octane","Chief technology officer."],["earlier","Director of Engineering Europe, BetterUp","Launched the GDPR-compliant EU cluster, led extraction from the monolith and introduced the internal developer platform."],["earlier","Engineering Manager, Trips, Booking.com","Led three teams building the connected trip: flights, taxis, car rental and attractions."],["earlier","Engineering Manager, Brickyard","Dutch mobility software: license-plate camera, scan-car and enforcement-app systems used by municipalities."]]},{k:"sawaf",n:"Mohamed El Sawaf",role:"business \xB7 marketing",cv:`Co-founder, DRP9
Co-founder, Rise Personal`,sum:"Co-founder. 13 years in marketing and business development, building people-centric brands.",facts:`Dubai \xB7 Egypt
Marketing, brand strategy, business development`,tl:[["2026 \u2013","Co-founder, DRP9","The creator marketplace for fashion and prints, built with Khaled Gomaa."],["2022 \u2013","Co-founder, Rise Personal","Personal-branding consultancy that helps people and companies find their brand voice and grow sustainably."],["2015 \u2013","Marketing Consultant, Bnsights","Dubai innovation-management, foresight and government-excellence consultancy with its own software."],["2012 \u2013 14","Sales Engineer, Mobica","Interior and exterior workspace solutions, Egypt."]]}],qE=Ct("#fgrid");qE.innerHTML=_y.map((r,e)=>{let[t,n]=r.n.split(/ (.+)/);return`<button class="fcard rv" data-i="${e}" aria-haspopup="dialog"><div class="ph"><img src="img/${r.k}.webp" alt="${Is(r.n)}" loading="lazy"></div><h3>${Is(t)}<br>${Is(n)}</h3><span class="role">${Is(r.role)}</span><span class="cv">${Is(r.cv).replace(`
`,"<br>")}</span><span class="more">Full profile <span class="slash" aria-hidden="true"></span></span></button>`}).join("");var mi=!Gt&&it.isTouch===0?ms.create({wrapper:"#smooth-wrapper",content:"#smooth-content",smooth:1.15,effects:!0}):null,va=Ct("#nav"),Nm=Ln(".rv").filter(r=>!r.closest(".hero")&&!r.matches("h2")),Um=Ln(".hero .rv");Gt||(je.set(Nm,{opacity:0,y:40}),je.set(Um,{opacity:0,y:34}),je.set(va,{yPercent:-120}));var YE=Promise.all([HE,WE,XE,VE]),Ff=je.timeline({paused:!0,defaults:{ease:"none"}}),Im=null,Ls=null;function py(){let r=Ct("#smooth-content").getBoundingClientRect().top,e=it.maxScroll(window),t=[];if(Ln("[data-z]").forEach(n=>{let[i,s]=n.dataset.z.split(",").map(Number),a=n.id==="how"&&Ls&&Ls.spacer?Ls.spacer:n,o=a.getBoundingClientRect(),l=o.top-r,c=l+o.height,u=l,d=c-innerHeight;d<=u+1?t.push({s:Math.max(0,(u+d)/2),z:(i+s)/2}):t.push({s:u,z:i},{s:d,z:s})}),t.sort((n,i)=>n.s-i.s),!!t.length){t[0].s>0&&t.unshift({s:0,z:t[0].z}),t[t.length-1].s<e&&t.push({s:e,z:t[t.length-1].z}),Im&&Im.kill(),Ff.clear(),Ff.set(rr,{camZ:t[0].z},0);for(let n=1;n<t.length;n++){let i=t[n].s-t[n-1].s;i>.5&&Ff.to(rr,{camZ:t[n].z,duration:i},t[n-1].s)}Im=it.create({animation:Ff,start:0,end:e,scrub:Gt?!0:1.1})}}function ZE(){je.to("#prog",{scaleX:1,ease:"none",scrollTrigger:{start:0,end:"max",scrub:.2}});let r=je.to(va,{yPercent:-110,duration:.45,ease:"power3.inOut",paused:!0});it.create({start:0,end:"max",onUpdate:p=>{va.classList.toggle("solid",p.scroll()>40),p.scroll()>260&&p.direction===1?r.play():(p.direction===-1||p.scroll()<=260)&&r.reverse()}});let e=[["top","Start"],["who","Who we are"],["ecosystem","Ecosystem"],["how","How we build"],["idea","The idea"],["work","Work"],["partners","Partners"],["what","What we do"],["scale","Scale"],["people","Founders"],["brief","Start a project"],["faq","Questions"],["contact","Contact"]],t=Ct("#dots");t.innerHTML=e.map(([p,m])=>`<a href="#${p}" data-id="${p}" tabindex="-1" aria-label="${m}"><span>${m}</span></a>`).join("");let n=p=>{Ln(".dots a").forEach(m=>m.classList.toggle("on",m.dataset.id===p)),Ln(".top ul a").forEach(m=>m.classList.toggle("on",m.getAttribute("href")==="#"+p))};e.forEach(([p])=>{let m=document.getElementById(p);m&&it.create({trigger:m,start:"top 55%",end:"bottom 55%",onToggle:_=>{_.isActive&&n(p)}})}),Gt||(Ln("h2").forEach(p=>Xa.create(p,{type:"lines",mask:"lines",autoSplit:!0,onSplit:m=>je.from(m.lines,{yPercent:118,duration:1.15,ease:"expo.out",stagger:.1,scrollTrigger:{trigger:p,start:"top 88%",once:!0}})})),Ln(".eyebrow").forEach(p=>je.from(p,{opacity:0,x:-24,duration:.9,ease:"expo.out",scrollTrigger:{trigger:p,start:"top 92%",once:!0}})),it.batch(Nm,{start:"top 90%",once:!0,onEnter:p=>je.to(p,{opacity:1,y:0,duration:1.1,ease:"expo.out",stagger:.09,overwrite:"auto"})})),Ln("[data-count]").forEach(p=>{let m=+p.dataset.count,_=p.dataset.suffix||"",v={v:0};if(Gt){p.textContent=m+_;return}p.textContent="0"+_,je.to(v,{v:m,duration:1.8,ease:"power3.out",onUpdate:()=>{p.textContent=Math.round(v.v)+_},scrollTrigger:{trigger:p,start:"top 92%",once:!0}})});let i=Ln("#letters .L"),s=p=>i.forEach((m,_)=>m.classList.toggle("on",_<=p)),a=je.timeline({defaults:{ease:"none"},scrollTrigger:{id:"how",trigger:"#how",start:"top top",end:()=>"+="+Math.round(innerHeight*(Dm?2.4:3)),pin:!0,scrub:.7,anticipatePin:1,invalidateOnRefresh:!0}});Ls=a.scrollTrigger,a.fromTo("#rail i",{width:"0%"},{width:"100%",duration:4},0),i.forEach((p,m)=>{Gt||(a.fromTo(p,{opacity:.38,y:34,scale:.96},{opacity:1,y:0,scale:1,duration:.6,ease:"power2.out"},m),a.fromTo(Ct(".glyph",p),{rotation:-7,scale:.84,transformOrigin:"50% 80%"},{rotation:0,scale:1,duration:.7,ease:"back.out(2.2)"},m)),a.add(()=>s(m),m+.001)}),s(0),Gt||(Ln(".shot").forEach(p=>{je.fromTo(p,{clipPath:"inset(10% 8% 10% 8% round 14px)"},{clipPath:"inset(0% 0% 0% 0% round 14px)",duration:1.3,ease:"expo.out",scrollTrigger:{trigger:p,start:"top 92%",once:!0}}),je.fromTo(Ct("img",p),{scale:1.1,yPercent:-2},{scale:1,yPercent:0,ease:"none",scrollTrigger:{trigger:p,start:"top bottom",end:"bottom top",scrub:!0}})}),Ln(".frame img").forEach(p=>je.fromTo(p,{scale:1.16},{scale:1,ease:"none",scrollTrigger:{trigger:p,start:"top bottom",end:"center center",scrub:!0}})),Ln(".big").forEach(p=>je.fromTo(p,{letterSpacing:".06em",opacity:0},{letterSpacing:"-.04em",opacity:1,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:p,start:"top 90%",once:!0}})),Ln(".lt").forEach((p,m)=>je.from(p,{scale:.8,opacity:0,duration:.8,ease:"back.out(1.6)",delay:m%9*.04,scrollTrigger:{trigger:p,start:"top 94%",once:!0}})));let o=Ct(".mq-track");if(o){let p=je.to(o,{xPercent:-50,duration:Gt?0:38,ease:"none",repeat:-1,paused:Gt});it.create({start:0,end:"max",onUpdate:m=>{let _=Math.min(8,Math.abs(m.getVelocity())/420);je.to(p,{timeScale:(1+_)*(m.direction||1),duration:.25,overwrite:!0})}}),it.addEventListener("scrollEnd",()=>je.to(p,{timeScale:1,duration:1.2,ease:"power2.out"}))}let l=Ct(".big-cta");if(l&&!Gt){let p=Xa.create(l,{type:"chars"});je.from(p.chars,{yPercent:110,rotate:9,opacity:0,duration:1.2,ease:"expo.out",stagger:.045,scrollTrigger:{trigger:l,start:"top 85%",once:!0}}),p.chars.forEach(m=>{m.addEventListener("pointerenter",()=>je.fromTo(m,{y:0},{y:-26,duration:.35,ease:"power2.out",yoyo:!0,repeat:1,overwrite:"auto"}))})}if(Gt?rr.portal=1:je.to(rr,{portal:1,duration:2.6,ease:"expo.out",scrollTrigger:{trigger:"#contact",start:"top 85%",toggleActions:"play none none reverse"}}),!Gt&&gy){let p=je.quickTo(rr,"fov",{duration:.7,ease:"power3.out"}),m=je.quickTo(rr,"bloom",{duration:.7,ease:"power3.out"});it.create({start:0,end:"max",onUpdate:_=>{let v=zE(Math.abs(_.getVelocity())/240,0,1);p(55+v*13),m(.38+v*.5)}}),it.addEventListener("scrollEnd",()=>{p(55),m(.38)})}let c=Ct("#menuBtn"),u=Ct("#mnav");function d(p){c&&(c.setAttribute("aria-expanded",p),c.setAttribute("aria-label",p?"Close menu":"Open menu"),mi&&mi.paused(p),document.body.style.overflow=p?"hidden":"",p?(u.hidden=!1,Gt||(je.fromTo(u,{opacity:0},{opacity:1,duration:.35}),je.from(".mnav li, .mn-cta",{y:36,opacity:0,duration:.8,ease:"expo.out",stagger:.045,delay:.05})),Ct("a",u).focus({preventScroll:!0})):u.hidden||(Gt?u.hidden=!0:je.to(u,{opacity:0,duration:.25,onComplete:()=>{u.hidden=!0}})))}c&&(c.addEventListener("click",()=>d(c.getAttribute("aria-expanded")!=="true")),addEventListener("keydown",p=>{p.key==="Escape"&&c.getAttribute("aria-expanded")==="true"&&(d(!1),c.focus())}),u.addEventListener("click",p=>{p.target.closest("a")&&d(!1)}),matchMedia("(min-width:1101px)").addEventListener("change",p=>{p.matches&&d(!1)}));let h=p=>{let m=document.getElementById(p);if(!m)return;let _=p==="top"?0:p==="how"&&Ls?Ls.start:mi?mi.offset(m,"top top"):m.getBoundingClientRect().top+scrollY;mi?mi.scrollTo(_,!0):window.scrollTo({top:_,behavior:Gt?"auto":"smooth"})};document.addEventListener("click",p=>{let m=p.target.closest('a[href^="#"]');if(!m||m.getAttribute("href")==="#")return;p.preventDefault();let _=m.getAttribute("href").slice(1);h(_);let v=document.getElementById(_);v&&v.hasAttribute("tabindex")&&v.focus({preventScroll:!0})});let f,g=()=>{clearTimeout(f),f=setTimeout(py,60)};if(it.addEventListener("refresh",g),py(),window.ResizeObserver){let p=!0;new ResizeObserver(()=>{if(p){p=!1;return}clearTimeout(window.__rt),window.__rt=setTimeout(()=>it.refresh(),250)}).observe(Ct("#smooth-content"))}addEventListener("load",()=>it.refresh())}var Lm=[];function JE(){if(Gt)return;Lm=Xa.create(".hero h1 .ln",{type:"chars"}).chars,je.set(Lm,{yPercent:118,rotate:7,transformOrigin:"0% 100%"})}function $E(){location.hash.length>1&&document.getElementById(location.hash.slice(1))&&setTimeout(()=>{let t=location.hash.slice(1),n=document.getElementById(t),i=t==="how"&&Ls?Ls.start:mi?mi.offset(n,"top top"):n.getBoundingClientRect().top+scrollY;mi?mi.scrollTo(i,!1):window.scrollTo(0,i)},400),Bf.classList.add("ready");let r=()=>{pi.destroy(),it.refresh()};if(Gt){pi.destroy();return}je.timeline({defaults:{ease:"expo.out"},onComplete:r}).to(".ld-ui",{opacity:0,duration:.35,ease:"power2.in"},0).to(GE,{clipPath:"inset(0 0 100% 0)",duration:1.15,ease:"expo.inOut"},.3).to(Lm,{yPercent:0,rotate:0,duration:1.3,stagger:.035},.85).to(Um,{opacity:1,y:0,duration:1.1,stagger:.1},1).to(va,{yPercent:0,duration:1.1},1.2).to(rr,{intro:1,dolly:0,duration:2.8},.35).to(rr,{grow:1,duration:3.2,ease:"power3.out"},.35).fromTo(rr,{fov:88},{fov:55,duration:2.4,ease:"expo.out"},.35)}YE.then(()=>{pi.log("assembling page");try{JE(),ZE()}catch(r){console.warn("setup failed, showing static content",r),je.set([...Nm,...Um],{opacity:1,y:0,clearProps:"all"}),je.set(va,{yPercent:0})}return kf("setup"),pi.log("ready",!0),pi.markComplete(),pi.whenFull()}).then(()=>pi.outro()).then($E).catch(r=>{console.warn(r),Bf.classList.add("ready"),je.set([".rv",va],{opacity:1,y:0,yPercent:0}),pi.destroy()});setTimeout(()=>{document.getElementById("loader")&&(Bf.classList.add("ready"),je.set([".rv",va],{opacity:1,y:0,yPercent:0}),pi.destroy())},16e3);var ir=Ct("#bio"),KE=Ct("#fgrid");KE.addEventListener("click",r=>{let e=r.target.closest(".fcard");if(!e)return;let t=_y[+e.dataset.i];Ct("#bioImg").src=`img/${t.k}.webp`,Ct("#bioImg").alt=t.n,Ct("#bioName").textContent=t.n,Ct("#bioSum").textContent=t.sum,Ct("#bioFacts").textContent=t.facts,Ct("#bioTl").innerHTML=t.tl.map(n=>`<li><span class="yr">${Is(n[0])}</span><div class="it"><b>${Is(n[1])}</b><span>${Is(n[2])}</span></div></li>`).join(""),mi&&mi.paused(!0),ir.showModal?ir.showModal():ir.setAttribute("open",""),ir.scrollTop=0,Gt||(je.fromTo(ir,{opacity:0,y:46,scale:.96},{opacity:1,y:0,scale:1,duration:.6,ease:"expo.out"}),je.from(".bio-in > div:first-child > *",{opacity:0,y:24,duration:.7,ease:"expo.out",stagger:.07,delay:.1}),je.from("#bioTl li",{opacity:0,x:26,duration:.7,ease:"expo.out",stagger:.06,delay:.2}))});function xy(){if(Gt){ir.close();return}je.to(ir,{opacity:0,y:24,scale:.98,duration:.25,ease:"power2.in",onComplete:()=>ir.close()})}Ct("#bioClose").onclick=xy;ir.addEventListener("click",r=>{r.target===ir&&xy()});ir.addEventListener("close",()=>{mi&&mi.paused(!1)});Ln(".copy").forEach(r=>r.addEventListener("click",()=>{let e=document.getElementById(r.dataset.copy),t=e.textContent,n=()=>{r.textContent="Copied",setTimeout(()=>r.textContent="Copy",1600)},i=()=>{let s=document.createRange();s.selectNodeContents(e);let a=getSelection();a.removeAllRanges(),a.addRange(s),r.textContent="Selected"};try{navigator.clipboard.writeText(t).then(n,i)}catch{i()}}));(function(){let r=Ct("#bf");if(!r)return;let e=Ct("#bf-msg"),t=Ct("#bf-mail"),n=s=>{let a=r.querySelector('input[name="'+s+'"]:checked');return a?a.value:""};function i(){let s=n("what"),a=n("stage"),o=n("when"),l=s&&a&&o,c=l?`Hello, I need ${s}. I'm at the stage of ${a} and I'd like to start ${o}. Can we talk?`:"";e.textContent=l?c:"Pick an option in each group.",t.setAttribute("aria-disabled",l?"false":"true"),t.href="mailto:sales@drp9-tech.com"+(l?"?subject="+encodeURIComponent("Project enquiry")+"&body="+encodeURIComponent(c):"")}r.addEventListener("change",i),i()})();if(kE&&!Gt){let r=Ct("#ring"),e=Ct("#cdot"),t=Ct("#cursor"),n=Ct("span",r),i=je.quickTo(r,"x",{duration:.45,ease:"power3.out"}),s=je.quickTo(r,"y",{duration:.45,ease:"power3.out"}),a=je.quickTo(e,"x",{duration:.08}),o=je.quickTo(e,"y",{duration:.08}),l=je.quickTo(t,"x",{duration:1.1,ease:"power3.out"}),c=je.quickTo(t,"y",{duration:1.1,ease:"power3.out"});addEventListener("pointermove",h=>{i(h.clientX),s(h.clientY),a(h.clientX),o(h.clientY),l(h.clientX),c(h.clientY),t.style.opacity=1});let u="a,button,label,summary,.fcard,.copy";document.addEventListener("pointerover",h=>{let f=h.target.closest(u),g=h.target.closest(".pcard,.frame a");je.to(r,{scale:f?1.7:1,duration:.35,ease:"power3.out",overwrite:"auto"}),r.classList.toggle("big",!!g),n.textContent=g?"View":"",g&&je.to(r,{scale:2.1,duration:.35,overwrite:"auto"})}),document.addEventListener("pointerdown",()=>je.to(r,{scale:.8,duration:.15})),document.addEventListener("pointerup",()=>je.to(r,{scale:1,duration:.3})),document.addEventListener("pointerleave",()=>je.to([r,e],{opacity:0,duration:.2})),Ln(".btn, .copy, .dots a").forEach(h=>{let f=je.quickTo(h,"x",{duration:.6,ease:"elastic.out(1,.55)"}),g=je.quickTo(h,"y",{duration:.6,ease:"elastic.out(1,.55)"});h.addEventListener("pointermove",p=>{let m=h.getBoundingClientRect();f((p.clientX-(m.left+m.width/2))*.32),g((p.clientY-(m.top+m.height/2))*.4)}),h.addEventListener("pointerleave",()=>{f(0),g(0)})}),Ln(".card, .fcard, .pcard, .frame").forEach(h=>{let f=h.matches(".pcard,.frame,.fcard,.eco-card"),g=h.matches(".frame")?6:5,p=je.quickTo(h,"y",{duration:.5,ease:"power3.out"}),m=f?je.quickTo(h,"rotationX",{duration:.6,ease:"power3.out"}):null,_=f?je.quickTo(h,"rotationY",{duration:.6,ease:"power3.out"}):null;f&&je.set(h,{transformPerspective:900}),h.addEventListener("pointermove",v=>{let M=h.getBoundingClientRect(),y=(v.clientX-M.left)/M.width,b=(v.clientY-M.top)/M.height;h.style.setProperty("--mx",y*100+"%"),h.style.setProperty("--my",b*100+"%"),f&&(_((y-.5)*g*2),m(-(b-.5)*g*2))}),h.addEventListener("pointerenter",()=>{h.matches(".frame,.c-item")||p(-8)}),h.addEventListener("pointerleave",()=>{p(0),f&&(m(0),_(0))})})}})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollSmoother.js:
  (*!
   * ScrollSmoother 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
