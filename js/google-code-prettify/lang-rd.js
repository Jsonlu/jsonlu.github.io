// build time:Tue Jun 20 2017 19:38:20 GMT+0800 (CST)
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xA0]+/,null,"\t\n\r  "],["com",/^%[^\r\n]*/,null,"%"]],[["lit",/^\\(?:cr|l?dots|R|tab)\b/],["kwd",/^\\[a-zA-Z@]+/],["kwd",/^#(?:ifn?def|endif)/],["pln",/^\\[{}]/],["pun",/^[{}()\[\]]+/]]),["Rd","rd"]);
//rebuild by neat 