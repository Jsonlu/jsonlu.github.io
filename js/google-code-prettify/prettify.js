// build time:Tue May 02 2017 16:08:21 GMT+0800 (CST)
!function(){window.PR_SHOULD_USE_CONTINUATION=!0;(function(){function e(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return(t=p[n])?t:"0"<=n&&"7">=n?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1)}function n(e){if(32>e)return(16>e?"\\x0":"\\x")+e.toString(16);e=String.fromCharCode(e);return"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e}function r(e){var r=e.substring(1,e.length-1).match(/\\u[0-9A-Fa-f]{4}|\\x[0-9A-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\s\S]|-|[^-\\]/g);e=[];var a="^"===r[0],l=["["];a&&l.push("^");for(var a=a?1:0,s=r.length;a<s;++a){var i=r[a];if(/\\[bdsw]/i.test(i))l.push(i);else{var i=t(i),o;a+2<s&&"-"===r[a+1]?(o=t(r[a+2]),a+=2):o=i;e.push([i,o]);65>o||122<i||(65>o||90<i||e.push([Math.max(65,i)|32,Math.min(o,90)|32]),97>o||122<i||e.push([Math.max(97,i)&-33,Math.min(o,122)&-33]))}}e.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]});r=[];s=[];for(a=0;a<e.length;++a)i=e[a],i[0]<=s[1]+1?s[1]=Math.max(s[1],i[1]):r.push(s=i);for(a=0;a<r.length;++a)i=r[a],l.push(n(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&l.push("-"),l.push(n(i[1])));l.push("]");return l.join("")}function a(e){for(var t=e.source.match(/(?:\[(?:[^\x5C\x5D]|\\[\s\S])*\]|\\u[A-Fa-f0-9]{4}|\\x[A-Fa-f0-9]{2}|\\[0-9]+|\\[^ux0-9]|\(\?[:!=]|[\(\)\^]|[^\x5B\x5C\(\)\^]+)/g),a=t.length,i=[],o=0,u=0;o<a;++o){var c=t[o];"("===c?++u:"\\"===c.charAt(0)&&(c=+c.substring(1))&&(c<=u?i[c]=-1:t[o]=n(c))}for(o=1;o<i.length;++o)-1===i[o]&&(i[o]=++l);for(u=o=0;o<a;++o)c=t[o],"("===c?(++u,i[u]||(t[o]="(?:")):"\\"===c.charAt(0)&&(c=+c.substring(1))&&c<=u&&(t[o]="\\"+i[c]);for(o=0;o<a;++o)"^"===t[o]&&"^"!==t[o+1]&&(t[o]="");if(e.ignoreCase&&s)for(o=0;o<a;++o)c=t[o],e=c.charAt(0),2<=c.length&&"["===e?t[o]=r(c):"\\"!==e&&(t[o]=c.replace(/[a-zA-Z]/g,function(e){e=e.charCodeAt(0);return"["+String.fromCharCode(e&-33,e|32)+"]"}));return t.join("")}for(var l=0,s=!1,i=!1,o=0,u=e.length;o<u;++o){var c=e[o];if(c.ignoreCase)i=!0;else if(/[a-z]/i.test(c.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){s=!0;i=!1;break}}for(var p={b:8,t:9,n:10,v:11,f:12,r:13},f=[],o=0,u=e.length;o<u;++o){c=e[o];if(c.global||c.multiline)throw Error(""+c);f.push("(?:"+a(c)+")")}return new RegExp(f.join("|"),i?"gi":"g")}function t(e,t){function n(e){var o=e.nodeType;if(1==o){if(!r.test(e.className)){for(o=e.firstChild;o;o=o.nextSibling)n(o);o=e.nodeName.toLowerCase();if("br"===o||"li"===o)a[i]="\n",s[i<<1]=l++,s[i++<<1|1]=e}}else if(3==o||4==o)o=e.nodeValue,o.length&&(o=t?o.replace(/\r\n?/g,"\n"):o.replace(/[ \t\r\n]+/g," "),a[i]=o,s[i<<1]=l,l+=o.length,s[i++<<1|1]=e)}var r=/(?:^|\s)nocode(?:\s|$)/,a=[],l=0,s=[],i=0;n(e);return{a:a.join("").replace(/\n$/,""),c:s}}function n(e,t,n,r,a){n&&(e={h:e,l:1,j:null,m:null,a:n,c:null,i:t,g:null},r(e),a.push.apply(a,e.g))}function r(e){for(var t=void 0,n=e.firstChild;n;n=n.nextSibling)var r=n.nodeType,t=1===r?t?e:n:3===r?b.test(n.nodeValue)?e:t:t;return t===e?void 0:t}function a(t,r){function a(e){for(var t=e.i,u=e.h,c=[t,"pln"],p=0,f=e.a.match(s)||[],d={},h=0,g=f.length;h<g;++h){var m=f[h],y=d[m],v=void 0,b;if("string"===typeof y)b=!1;else{var x=l[m.charAt(0)];if(x)v=m.match(x[1]),y=x[0];else{for(b=0;b<i;++b)if(x=r[b],v=m.match(x[1])){y=x[0];break}v||(y="pln")}!(b=5<=y.length&&"lang-"===y.substring(0,5))||v&&"string"===typeof v[1]||(b=!1,y="src");b||(d[m]=y)}x=p;p+=m.length;if(b){b=v[1];var w=m.indexOf(b),S=w+b.length;v[2]&&(S=m.length-v[2].length,w=S-b.length);y=y.substring(5);n(u,t+x,m.substring(0,w),a,c);n(u,t+x+w,b,o(y,b),c);n(u,t+x+S,m.substring(S),a,c)}else c.push(t+x,y)}e.g=c}var l={},s;(function(){for(var n=t.concat(r),a=[],i={},o=0,u=n.length;o<u;++o){var c=n[o],p=c[3];if(p)for(var f=p.length;0<=--f;)l[p.charAt(f)]=c;c=c[1];p=""+c;i.hasOwnProperty(p)||(a.push(c),i[p]=null)}a.push(/[\0-\uffff]/);s=e(a)})();var i=r.length;return a}function l(e){var t=[],n=[];e.tripleQuotedStrings?t.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):e.multiLineStrings?t.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):t.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);e.verbatimStrings&&n.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var r=e.hashComments;r&&(e.cStyleComments?(1<r?t.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):t.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),n.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):t.push(["com",/^#[^\r\n]*/,null,"#"]));e.cStyleComments&&(n.push(["com",/^\/\/[^\r\n]*/,null]),n.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));if(r=e.regexLiterals){var l=(r=1<r?"":"\n\r")?".":"[\\S\\s]";n.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+r+"])(?:[^/\\x5B\\x5C"+r+"]|\\x5C"+l+"|\\x5B(?:[^\\x5C\\x5D"+r+"]|\\x5C"+l+")*(?:\\x5D|$))+/")+")")])}(r=e.types)&&n.push(["typ",r]);r=(""+e.keywords).replace(/^ | $/g,"");r.length&&n.push(["kwd",new RegExp("^(?:"+r.replace(/[\s,]+/g,"|")+")\\b"),null]);t.push(["pln",/^\s+/,null," \r\n\t "]);r="^.[^\\s\\w.$@'\"`/\\\\]*";e.regexLiterals&&(r+="(?!s*/)");n.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(r),null]);return a(t,n)}function s(e,t,n){function r(e){var t=e.nodeType;if(1==t&&!l.test(e.className))if("br"===e.nodeName)a(e),e.parentNode&&e.parentNode.removeChild(e);else for(e=e.firstChild;e;e=e.nextSibling)r(e);else if((3==t||4==t)&&n){var o=e.nodeValue,u=o.match(s);u&&(t=o.substring(0,u.index),e.nodeValue=t,(o=o.substring(u.index+u[0].length))&&e.parentNode.insertBefore(i.createTextNode(o),e.nextSibling),a(e),t||e.parentNode.removeChild(e))}}function a(e){function t(e,n){var r=n?e.cloneNode(!1):e,a=e.parentNode;if(a){var a=t(a,1),l=e.nextSibling;a.appendChild(r);for(var s=l;s;s=l)l=s.nextSibling,a.appendChild(s)}return r}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;e=t(e.nextSibling,0);for(var n;(n=e.parentNode)&&1===n.nodeType;)e=n;u.push(e)}for(var l=/(?:^|\s)nocode(?:\s|$)/,s=/\r\n?|\n/,i=e.ownerDocument,o=i.createElement("li");e.firstChild;)o.appendChild(e.firstChild);for(var u=[o],c=0;c<u.length;++c)r(u[c]);t===(t|0)&&u[0].setAttribute("value",t);var p=i.createElement("ol");p.className="linenums";t=Math.max(0,t-1|0)||0;for(var c=0,f=u.length;c<f;++c)o=u[c],o.className="L"+(c+t)%10,o.firstChild||o.appendChild(i.createTextNode(" ")),p.appendChild(o);e.appendChild(p)}function i(e,t){for(var n=t.length;0<=--n;){var r=t[n];w.hasOwnProperty(r)?c.console&&console.warn("cannot override language handler %s",r):w[r]=e}}function o(e,t){e&&w.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code");return w[e]}function u(e){var n=e.j;try{var r=t(e.h,e.l),a=r.a;e.a=a;e.c=r.c;e.i=0;o(n,a)(e);var l=/\bMSIE\s(\d+)/.exec(navigator.userAgent),l=l&&8>=+l[1],n=/\n/g,s=e.a,i=s.length,r=0,u=e.c,p=u.length,a=0,f=e.g,d=f.length,h=0;f[d]=i;var g,m;for(m=g=0;m<d;)f[m]!==f[m+2]?(f[g++]=f[m++],f[g++]=f[m++]):m+=2;d=g;for(m=g=0;m<d;){for(var y=f[m],v=f[m+1],b=m+2;b+2<=d&&f[b+1]===v;)b+=2;f[g++]=y;f[g++]=v;m=b}f.length=g;var x=e.h;e="";x&&(e=x.style.display,x.style.display="none");try{for(;a<p;){var w=u[a+2]||i,S=f[h+2]||i,b=Math.min(w,S),C=u[a+1],N;if(1!==C.nodeType&&(N=s.substring(r,b))){l&&(N=N.replace(n,"\r"));C.nodeValue=N;var _=C.ownerDocument,k=_.createElement("span");k.className=f[h+1];var T=C.parentNode;T.replaceChild(k,C);k.appendChild(C);r<w&&(u[a+1]=C=_.createTextNode(s.substring(b,w)),T.insertBefore(C,k.nextSibling))}r=b;r>=w&&(a+=2);r>=S&&(h+=2)}}finally{x&&(x.style.display=e)}}catch(E){c.console&&console.log(E&&E.stack||E)}}var c=window,p=["break,continue,do,else,for,if,return,while"],f=[[p,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],d=[f,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],h=[f,"abstract,assert,boolean,byte,extends,finally,final,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],g=[f,"abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,internal,into,is,let,lock,null,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],f=[f,"debugger,eval,export,function,get,instanceof,null,set,undefined,var,with,Infinity,NaN"],m=[p,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],y=[p,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],p=[p,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],v=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,b=/\S/,x=l({keywords:[d,g,h,f,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",m,y,p],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),w={};i(x,["default-code"]);i(a([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));i(a([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);i(a([],[["atv",/^[\s\S]+/]]),["uq.val"]);i(l({keywords:d,hashComments:!0,cStyleComments:!0,types:v}),"c cc cpp cxx cyc m".split(" "));i(l({keywords:"null,true,false"}),["json"]);i(l({keywords:g,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:v}),["cs"]);i(l({keywords:h,cStyleComments:!0}),["java"]);i(l({keywords:p,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);i(l({keywords:m,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);i(l({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);i(l({keywords:y,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);i(l({keywords:f,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);i(l({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);i(a([],[["str",/^[\s\S]+/]]),["regex"]);var S=c.PR={createSimpleLexer:a,registerLangHandler:i,sourceDecorator:l,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:c.prettyPrintOne=function(e,t,n){n=n||!1;t=t||null;var r=document.createElement("div");r.innerHTML="<pre>"+e+"</pre>";r=r.firstChild;n&&s(r,n,!0);u({j:t,m:n,h:r,l:1,a:null,i:null,c:null,g:null});return r.innerHTML},prettyPrint:c.prettyPrint=function(e,t){function n(){for(var t=c.PR_SHOULD_USE_CONTINUATION?d.now()+250:Infinity;h<i.length&&d.now()<t;h++){for(var a=i[h],o=w,p=a;p=p.previousSibling;){var f=p.nodeType,S=(7===f||8===f)&&p.nodeValue;if(S?!/^\??prettify\b/.test(S):3!==f||/\S/.test(p.nodeValue))break;if(S){o={};S.replace(/\b(\w+)=([\w:.%+-]+)/g,function(e,t,n){o[t]=n});break}}p=a.className;if((o!==w||m.test(p))&&!y.test(p)){f=!1;for(S=a.parentNode;S;S=S.parentNode)if(x.test(S.tagName)&&S.className&&m.test(S.className)){f=!0;break}if(!f){a.className+=" prettyprinted";f=o.lang;if(!f){var f=p.match(g),C;!f&&(C=r(a))&&b.test(C.tagName)&&(f=C.className.match(g));f&&(f=f[1])}if(v.test(a.tagName))S=1;else var S=a.currentStyle,N=l.defaultView,S=(S=S?S.whiteSpace:N&&N.getComputedStyle?N.getComputedStyle(a,null).getPropertyValue("white-space"):0)&&"pre"===S.substring(0,3);N=o.linenums;(N="true"===N||+N)||(N=(N=p.match(/\blinenums\b(?::(\d+))?/))?N[1]&&N[1].length?+N[1]:!0:!1);N&&s(a,N,S);u({j:f,h:a,m:N,l:S,a:null,i:null,c:null,g:null})}}}h<i.length?c.setTimeout(n,250):"function"===typeof e&&e()}for(var a=t||document.body,l=a.ownerDocument||document,a=[a.getElementsByTagName("pre"),a.getElementsByTagName("code"),a.getElementsByTagName("xmp")],i=[],o=0;o<a.length;++o)for(var p=0,f=a[o].length;p<f;++p)i.push(a[o][p]);var a=null,d=Date;d.now||(d={now:function(){return+new Date}});var h=0,g=/\blang(?:uage)?-([\w.]+)(?!\S)/,m=/\bprettyprint\b/,y=/\bprettyprinted\b/,v=/pre|xmp/i,b=/^code$/i,x=/^(?:pre|code|xmp)$/i,w={};n()}},d=c.define;"function"===typeof d&&d.amd&&d("google-code-prettify",[],function(){return S})})()}();
//rebuild by neat 