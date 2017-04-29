// build time:Sun Apr 30 2017 00:01:22 GMT+0800 (CST)
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xA0]+/,null,"\t\n\r  "],["pln",/^(?:\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)|\'(?:[^\'\\]|\\[\s\S])+(?:\'|$)|`[^`]*(?:`|$))/,null,"\"'"]],[["com",/^(?:\/\/[^\r\n]*|\/\*[\s\S]*?\*\/)/],["pln",/^(?:[^\/\"\'`]|\/(?![\/\*]))+/i]]),["go"]);
//rebuild by neat 