// build time:Mon Jul 03 2017 23:34:08 GMT+0800 (CST)
PR.registerLangHandler(PR.createSimpleLexer([["str",/^(?:"(?:[^\\"\r\n]|\\.)*(?:"|$))/,null,'"'],["pln",/^\s+/,null," \r\n\t "]],[["com",/^REM[^\r\n]*/,null],["kwd",/^\b(?:AND|CLOSE|CLR|CMD|CONT|DATA|DEF ?FN|DIM|END|FOR|GET|GOSUB|GOTO|IF|INPUT|LET|LIST|LOAD|NEW|NEXT|NOT|ON|OPEN|OR|POKE|PRINT|READ|RESTORE|RETURN|RUN|SAVE|STEP|STOP|SYS|THEN|TO|VERIFY|WAIT)\b/,null],["pln",/^[A-Z][A-Z0-9]?(?:\$|%)?/i,null],["lit",/^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?/i,null,"0123456789"],["pun",/^.[^\s\w\.$%"]*/,null]]),["basic","cbm"]);
//rebuild by neat 