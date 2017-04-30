// build time:Sun Apr 30 2017 11:04:13 GMT+0800 (CST)
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xA0]+/,null,"\t\n\r  "],["com",/^%[^\r\n]*/,null,"%"]],[["lit",/^\\(?:cr|l?dots|R|tab)\b/],["kwd",/^\\[a-zA-Z@]+/],["kwd",/^#(?:ifn?def|endif)/],["pln",/^\\[{}]/],["pun",/^[{}()\[\]]+/]]),["Rd","rd"]);
//rebuild by neat 