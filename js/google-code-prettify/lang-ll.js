// build time:Sat Apr 29 2017 22:18:31 GMT+0800 (CST)
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xA0]+/,null,"\t\n\r  "],["str",/^!?\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/,null,'"'],["com",/^;[^\r\n]*/,null,";"]],[["pln",/^[%@!](?:[-a-zA-Z$._][-a-zA-Z$._0-9]*|\d+)/],["kwd",/^[A-Za-z_][0-9A-Za-z_]*/,null],["lit",/^\d+\.\d+/],["lit",/^(?:\d+|0[xX][a-fA-F0-9]+)/],["pun",/^[()\[\]{},=*<>:]|\.\.\.$/]]),["llvm","ll"]);
//rebuild by neat 