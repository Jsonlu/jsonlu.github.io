// build time:Tue May 02 2017 16:08:21 GMT+0800 (CST)
PR.registerLangHandler(PR.createSimpleLexer([["str",/^\"(?:[^\"\\\n\x0C\r]|\\[\s\S])*(?:\"|$)/,null,'"'],["lit",/^[a-z][a-zA-Z0-9_]*/],["lit",/^\'(?:[^\'\\\n\x0C\r]|\\[^&])+\'?/,null,"'"],["lit",/^(?:0'.|0b[0-1]+|0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i,null,"0123456789"]],[["com",/^%[^\r\n]*/,null,"%"],["com",/^\/\*[\s\S]*?\*\//],["kwd",/^\s*:-\s(c(a(lls|tegory)|oinductive)|p(ublic|r(ot(ocol|ected)|ivate))|e(l(if|se)|n(coding|sure_loaded)|xport)|i(f|n(clude|itialization|fo))|alias|d(ynamic|iscontiguous)|m(eta_(non_terminal|predicate)|od(e|ule)|ultifile)|reexport|s(et_(logtalk|prolog)_flag|ynchronized)|o(bject|p)|use(s|_module))/],["kwd",/^\s*:-\s(e(lse|nd(if|_(category|object|protocol)))|built_in|dynamic|synchronized|threaded)/],["typ",/^[A-Z_][a-zA-Z0-9_]*/],["pun",/^[.,;{}:^<>=\\\/+*?#!-]/]]),["logtalk","lgt"]);
//rebuild by neat 