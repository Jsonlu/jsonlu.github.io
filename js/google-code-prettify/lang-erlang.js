// build time:Tue May 02 2017 16:28:36 GMT+0800 (CST)
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\x0B\x0C\r ]+/,null,"\t\n\x0B\f\r "],["str",/^\"(?:[^\"\\\n\x0C\r]|\\[\s\S])*(?:\"|$)/,null,'"'],["lit",/^[a-z][a-zA-Z0-9_]*/],["lit",/^\'(?:[^\'\\\n\x0C\r]|\\[^&])+\'?/,null,"'"],["lit",/^\?[^ \t\n({]+/,null,"?"],["lit",/^(?:0o[0-7]+|0x[\da-f]+|\d+(?:\.\d+)?(?:e[+\-]?\d+)?)/i,null,"0123456789"]],[["com",/^%[^\n]*/],["kwd",/^(?:module|attributes|do|let|in|letrec|apply|call|primop|case|of|end|when|fun|try|catch|receive|after|char|integer|float,atom,string,var)\b/],["kwd",/^-[a-z_]+/],["typ",/^[A-Z_][a-zA-Z0-9_]*/],["pun",/^[.,;]/]]),["erlang","erl"]);
//rebuild by neat 