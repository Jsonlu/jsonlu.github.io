// build time:Mon Jul 03 2017 23:34:08 GMT+0800 (CST)
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xA0]+/,null,"\t\n\r  "],["com",/^%[^\r\n]*/,null,"%"]],[["kwd",/^\\[a-zA-Z@]+/],["kwd",/^\\./],["typ",/^[$&]/],["lit",/[+-]?(?:\.\d+|\d+(?:\.\d*)?)(cm|em|ex|in|pc|pt|bp|mm)/i],["pun",/^[{}()\[\]=]+/]]),["latex","tex"]);
//rebuild by neat 