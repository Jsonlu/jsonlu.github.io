// build time:Sun Apr 30 2017 11:41:12 GMT+0800 (CST)
!function(){(function(){function e(e){function t(){try{a.doScroll("left")}catch(e){n.setTimeout(t,50);return}l("poll")}function l(t){if("readystatechange"!=t.type||"complete"==r.readyState)("load"==t.type?n:r)[u](d+t.type,l,!1),!i&&(i=!0)&&e.call(n,t.type||t)}var s=r.addEventListener,i=!1,o=!0,c=s?"addEventListener":"attachEvent",u=s?"removeEventListener":"detachEvent",d=s?"":"on";if("complete"==r.readyState)e.call(n,"lazy");else{if(r.createEventObject&&a.doScroll){try{o=!n.frameElement}catch(p){}o&&t()}r[c](d+"DOMContentLoaded",l,!1);r[c](d+"readystatechange",l,!1);n[c](d+"load",l,!1)}}function t(){d&&e(function(){var e=h.length;m(e?function(){for(var t=0;t<e;++t)(function(e){n.setTimeout(function(){n.exports[h[e]].apply(n,arguments)},0)})(t)}:void 0)})}for(var n=window,r=document,a=r.documentElement,l=r.head||r.getElementsByTagName("head")[0]||a,s="",i=r.getElementsByTagName("script"),o=i.length;0<=--o;){var c=i[o],u=c.src.match(/^[^?#]*\/run_prettify\.js(\?[^#]*)?(?:#.*)?$/);if(u){s=u[1]||"";c.parentNode.removeChild(c);break}}var d=!0,p=[],f=[],h=[];s.replace(/[?&]([^&=]+)=([^&]+)/g,function(e,t,n){n=decodeURIComponent(n);t=decodeURIComponent(t);"autorun"==t?d=!/^[0fn]/i.test(n):"lang"==t?p.push(n):"skin"==t?f.push(n):"callback"==t&&h.push(n)});o=0;for(s=p.length;o<s;++o)(function(){var e=r.createElement("script");e.onload=e.onerror=e.onreadystatechange=function(){!e||e.readyState&&!/loaded|complete/.test(e.readyState)||(e.onerror=e.onload=e.onreadystatechange=null,--g,g||n.setTimeout(t,0),e.parentNode&&e.parentNode.removeChild(e),e=null)};e.type="text/javascript";e.src="https://cdn.rawgit.com/google/code-prettify/master/loader/lang-"+encodeURIComponent(p[o])+".js";l.insertBefore(e,l.firstChild)})(p[o]);for(var g=p.length,i=[],o=0,s=f.length;o<s;++o)i.push("https://cdn.rawgit.com/google/code-prettify/master/loader/skins/"+encodeURIComponent(f[o])+".css");i.push("https://cdn.rawgit.com/google/code-prettify/master/loader/prettify.css");(function(e){function t(a){if(a!==n){var s=r.createElement("link");s.rel="stylesheet";s.type="text/css";a+1<n&&(s.error=s.onerror=function(){t(a+1)});s.href=e[a];l.appendChild(s)}}var n=e.length;t(0)})(i);var m=function(){window.PR_SHOULD_USE_CONTINUATION=!0;var e;(function(){function t(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return(t=d[n])?t:"0"<=n&&"7">=n?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1)}function n(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e}function r(e){var r=e.substring(1,e.length-1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g);e=[];var a="^"===r[0],l=["["];a&&l.push("^");for(var a=a?1:0,s=r.length;a<s;++a){var i=r[a];if(/\\[bdsw]/i.test(i))l.push(i);else{var i=t(i),o;a+2<s&&"-"===r[a+1]?(o=t(r[a+2]),a+=2):o=i;e.push([i,o]);65>o||122<i||(65>o||90<i||e.push([Math.max(65,i)|32,Math.min(o,90)|32]),97>o||122<i||e.push([Math.max(97,i)&-33,Math.min(o,122)&-33]))}}e.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]});r=[];s=[];for(a=0;a<e.length;++a)i=e[a],i[0]<=s[1]+1?s[1]=Math.max(s[1],i[1]):r.push(s=i);for(a=0;a<r.length;++a)i=r[a],l.push(n(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&l.push("-"),l.push(n(i[1])));l.push("]");return l.join("")}function a(e){for(var t=e.source.match(/(?:\[(?:[^\x5C\x5D]|\\[\s\S])*\]|\\u[A-Fa-f0-9]{4}|\\x[A-Fa-f0-9]{2}|\\[0-9]+|\\[^ux0-9]|\(\?[:!=]|[\(\)\^]|[^\x5B\x5C\(\)\^]+)/g),a=t.length,i=[],o=0,c=0;o<a;++o){var u=t[o];"("===u?++c:"\\"===u.charAt(0)&&(u=+u.substring(1))&&(u<=c?i[u]=-1:t[o]=n(u))}for(o=1;o<i.length;++o)-1===i[o]&&(i[o]=++l);for(c=o=0;o<a;++o)u=t[o],"("===u?(++c,i[c]||(t[o]="(?:")):"\\"===u.charAt(0)&&(u=+u.substring(1))&&u<=c&&(t[o]="\\"+i[u]);for(o=0;o<a;++o)"^"===t[o]&&"^"!==t[o+1]&&(t[o]="");if(e.ignoreCase&&s)for(o=0;o<a;++o)u=t[o],e=u.charAt(0),2<=u.length&&"["===e?t[o]=r(u):"\\"!==e&&(t[o]=u.replace(/[a-zA-Z]/g,function(e){e=e.charCodeAt(0);return"["+String.fromCharCode(e&-33,e|32)+"]"}));return t.join("")}for(var l=0,s=!1,i=!1,o=0,c=e.length;o<c;++o){var u=e[o];if(u.ignoreCase)i=!0;else if(/[a-z]/i.test(u.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){s=!0;i=!1;break}}for(var d={b:8,t:9,n:10,v:11,f:12,r:13},p=[],o=0,c=e.length;o<c;++o){u=e[o];if(u.global||u.multiline)throw Error(""+u);p.push("(?:"+a(u)+")")}return new RegExp(p.join("|"),i?"gi":"g")}function n(e,t){function n(e){var o=e.nodeType;if(1==o){if(!r.test(e.className)){for(o=e.firstChild;o;o=o.nextSibling)n(o);o=e.nodeName.toLowerCase();if("br"===o||"li"===o)a[i]="\n",s[i<<1]=l++,s[i++<<1|1]=e}}else if(3==o||4==o)o=e.nodeValue,o.length&&(o=t?o.replace(/\r\n?/g,"\n"):o.replace(/[ \t\r\n]+/g," "),a[i]=o,s[i<<1]=l,l+=o.length,s[i++<<1|1]=e)}var r=/(?:^|\s)nocode(?:\s|$)/,a=[],l=0,s=[],i=0;n(e);return{a:a.join("").replace(/\n$/,""),c:s}}function r(e,t,n,r,a){n&&(e={h:e,l:1,j:null,m:null,a:n,c:null,i:t,g:null},r(e),a.push.apply(a,e.g))}function a(e){for(var t=void 0,n=e.firstChild;n;n=n.nextSibling)var r=n.nodeType,t=1===r?t?e:n:3===r?x.test(n.nodeValue)?e:t:t;return t===e?void 0:t}function l(e,n){function a(e){for(var t=e.i,o=e.h,u=[t,"pln"],d=0,p=e.a.match(s)||[],f={},h=0,g=p.length;h<g;++h){var m=p[h],y=f[m],v=void 0,b;if("string"===typeof y)b=!1;else{var x=l[m.charAt(0)];if(x)v=m.match(x[1]),y=x[0];else{for(b=0;b<i;++b)if(x=n[b],v=m.match(x[1])){y=x[0];break}v||(y="pln")}!(b=5<=y.length&&"lang-"===y.substring(0,5))||v&&"string"===typeof v[1]||(b=!1,y="src");b||(f[m]=y)}x=d;d+=m.length;if(b){b=v[1];var w=m.indexOf(b),S=w+b.length;v[2]&&(S=m.length-v[2].length,w=S-b.length);y=y.substring(5);r(o,t+x,m.substring(0,w),a,u);r(o,t+x+w,b,c(y,b),u);r(o,t+x+S,m.substring(S),a,u)}else u.push(t+x,y)}e.g=u}var l={},s;(function(){for(var r=e.concat(n),a=[],i={},o=0,c=r.length;o<c;++o){var u=r[o],d=u[3];if(d)for(var p=d.length;0<=--p;)l[d.charAt(p)]=u;u=u[1];d=""+u;i.hasOwnProperty(d)||(a.push(u),i[d]=null)}a.push(/[\0-\uffff]/);s=t(a)})();var i=n.length;return a}function s(e){var t=[],n=[];e.tripleQuotedStrings?t.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);e.verbatimStrings&&n.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;r&&(e.cStyleComments?(1<r?t.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),n.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push(["com",/^#[^\r\n]*/,null,"#"]));e.cStyleComments&&(n.push(["com",/^\/\/[^\r\n]*/,null]),n.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));if(r=e.regexLiterals){var a=(r=1<r?"":"\n\r")?".":"[\\S\\s]";n.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+r+"])(?:[^/\\x5B\\x5C"+r+"]|\\x5C"+a+"|\\x5B(?:[^\\x5C\\x5D"+r+"]|\\x5C"+a+")*(?:\\x5D|$))+/")+")")])}(r=e.types)&&n.push(["typ",r]);r=(""+e.keywords).replace(/^ | $/g,"");r.length&&n.push(["kwd",new RegExp("^(?:"+r.replace(/[\s,]+/g,"|")+")\\b"),null]);t.push(["pln",/^\s+/,null," \r\n\t "]);r="^.[^\\s\\w.$@'\"`/\\\\]*";e.regexLiterals&&(r+="(?!s*/)");n.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(r),null]);return l(t,n)}function i(e,t,n){function r(e){var t=e.nodeType;if(1==t&&!l.test(e.className))if("br"===e.nodeName)a(e),e.parentNode&&e.parentNode.removeChild(e);else for(e=e.firstChild;e;e=e.nextSibling)r(e);else if((3==t||4==t)&&n){var o=e.nodeValue,c=o.match(s);c&&(t=o.substring(0,c.index),e.nodeValue=t,(o=o.substring(c.index+c[0].length))&&e.parentNode.insertBefore(i.createTextNode(o),e.nextSibling),a(e),t||e.parentNode.removeChild(e))}}function a(e){function t(e,n){var r=n?e.cloneNode(!1):e,a=e.parentNode;if(a){var a=t(a,1),l=e.nextSibling;a.appendChild(r);for(var s=l;s;s=l)l=s.nextSibling,a.appendChild(s)}return r}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;e=t(e.nextSibling,0);for(var n;(n=e.parentNode)&&1===n.nodeType;)e=n;c.push(e)}for(var l=/(?:^|\s)nocode(?:\s|$)/,s=/\r\n?|\n/,i=e.ownerDocument,o=i.createElement("li");e.firstChild;)o.appendChild(e.firstChild);for(var c=[o],u=0;u<c.length;++u)r(c[u]);t===(t|0)&&c[0].setAttribute("value",t);var d=i.createElement("ol");d.className="linenums";t=Math.max(0,t-1|0)||0;for(var u=0,p=c.length;u<p;++u)o=c[u],o.className="L"+(u+t)%10,o.firstChild||o.appendChild(i.createTextNode(" ")),d.appendChild(o);e.appendChild(d)}function o(e,t){for(var n=t.length;0<=--n;){var r=t[n];S.hasOwnProperty(r)?d.console&&console.warn("cannot override language handler %s",r):S[r]=e}}function c(e,t){e&&S.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code");return S[e]}function u(e){var t=e.j;try{var r=n(e.h,e.l),a=r.a;e.a=a;e.c=r.c;e.i=0;c(t,a)(e);var l=/\bMSIE\s(\d+)/.exec(navigator.userAgent),l=l&&8>=+l[1],t=/\n/g,s=e.a,i=s.length,r=0,o=e.c,u=o.length,a=0,p=e.g,f=p.length,h=0;p[f]=i;var g,m;for(m=g=0;m<f;)p[m]!==p[m+2]?(p[g++]=p[m++],p[g++]=p[m++]):m+=2;f=g;for(m=g=0;m<f;){for(var y=p[m],v=p[m+1],b=m+2;b+2<=f&&p[b+1]===v;)b+=2;p[g++]=y;p[g++]=v;m=b}p.length=g;var x=e.h;e="";x&&(e=x.style.display,x.style.display="none");try{for(;a<u;){var w=o[a+2]||i,S=p[h+2]||i,b=Math.min(w,S),C=o[a+1],N;if(1!==C.nodeType&&(N=s.substring(r,b))){l&&(N=N.replace(t,"\r"));C.nodeValue=N;var E=C.ownerDocument,_=E.createElement("span");_.className=p[h+1];var k=C.parentNode;k.replaceChild(_,C);_.appendChild(C);r<w&&(o[a+1]=C=E.createTextNode(s.substring(b,w)),k.insertBefore(C,_.nextSibling))}r=b;r>=w&&(a+=2);r>=S&&(h+=2)}}finally{x&&(x.style.display=e)}}catch(T){d.console&&console.log(T&&T.stack||T)}}var d=window,p=["break,continue,do,else,for,if,return,while"],f=[[p,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],h=[f,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],g=[f,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],m=[f,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],f=[f,"debugger,eval,export,function,get,instanceof,null,set,undefined,var,with,Infinity,NaN"],y=[p,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],v=[p,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],p=[p,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],b=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,x=/\S/,w=s({keywords:[h,m,g,f,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",y,v,p],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),S={};o(w,["default-code"]);o(l([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));o(l([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);o(l([],[["atv",/^[\s\S]+/]]),["uq.val"]);o(s({keywords:h,hashComments:!0,cStyleComments:!0,types:b}),"c cc cpp cxx cyc m".split(" "));o(s({keywords:"null,true,false"}),["json"]);o(s({keywords:m,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:b}),["cs"]);o(s({keywords:g,cStyleComments:!0}),["java"]);o(s({keywords:p,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);o(s({keywords:y,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);o(s({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);o(s({keywords:v,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);o(s({keywords:f,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);o(s({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);o(l([],[["str",/^[\s\S]+/]]),["regex"]);var C=d.PR={createSimpleLexer:l,registerLangHandler:o,sourceDecorator:s,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:function(e,t,n){n=n||!1;t=t||null;var r=document.createElement("div");r.innerHTML="<pre>"+e+"</pre>";r=r.firstChild;n&&i(r,n,!0);u({j:t,m:n,h:r,l:1,a:null,i:null,c:null,g:null});return r.innerHTML},prettyPrint:e=e=function(e,t){function n(){for(var t=d.PR_SHOULD_USE_CONTINUATION?f.now()+250:Infinity;h<s.length&&f.now()<t;h++){for(var r=s[h],o=w,c=r;c=c.previousSibling;){var p=c.nodeType,S=(7===p||8===p)&&c.nodeValue;if(S?!/^\??prettify\b/.test(S):3!==p||/\S/.test(c.nodeValue))break;if(S){o={};S.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,t,n){o[t]=n});break}}c=r.className;if((o!==w||m.test(c))&&!y.test(c)){p=!1;for(S=r.parentNode;S;S=S.parentNode)if(x.test(S.tagName)&&S.className&&m.test(S.className)){p=!0;break}if(!p){r.className+=" prettyprinted";p=o.lang;if(!p){var p=c.match(g),C;!p&&(C=a(r))&&b.test(C.tagName)&&(p=C.className.match(g));p&&(p=p[1])}if(v.test(r.tagName))S=1;else var S=r.currentStyle,N=l.defaultView,S=(S=S?S.whiteSpace:N&&N.getComputedStyle?N.getComputedStyle(r,null).getPropertyValue("white-space"):0)&&"pre"===S.substring(0,3);N=o.linenums;(N="true"===N||+N)||(N=(N=c.match(/\blinenums\b(?::(\d+))?/))?N[1]&&N[1].length?+N[1]:!0:!1);N&&i(r,N,S);u({j:p,h:r,m:N,l:S,a:null,i:null,c:null,g:null})}}}h<s.length?d.setTimeout(n,250):"function"===typeof e&&e()}for(var r=t||document.body,l=r.ownerDocument||document,r=[r.getElementsByTagName("pre"),r.getElementsByTagName("code"),r.getElementsByTagName("xmp")],s=[],o=0;o<r.length;++o)for(var c=0,p=r[o].length;c<p;++c)s.push(r[o][c]);var r=null,f=Date;f.now||(f={now:function(){return+new Date}});var h=0,g=/\blang(?:uage)?-([\w.]+)(?!\S)/,m=/\bprettyprint\b/,y=/\bprettyprinted\b/,v=/pre|xmp/i,b=/^code$/i,x=/^(?:pre|code|xmp)$/i,w={};n()}},h=d.define;"function"===typeof h&&h.amd&&h("google-code-prettify",[],function(){return C})})();return e}();g||n.setTimeout(t,0)})()}();
//rebuild by neat 