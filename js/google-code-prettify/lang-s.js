// build time:Sun Apr 30 2017 12:43:58 GMT+0800 (CST)
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xA0]+/,null,"\t\n\r  "],["str",/^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/,null,'"'],["str",/^\'(?:[^\'\\]|\\[\s\S])*(?:\'|$)/,null,"'"]],[["com",/^#.*/],["kwd",/^(?:if|else|for|while|repeat|in|next|break|return|switch|function)(?![A-Za-z0-9_.])/],["lit",/^0[xX][a-fA-F0-9]+([pP][0-9]+)?[Li]?/],["lit",/^[+-]?([0-9]+(\.[0-9]+)?|\.[0-9]+)([eE][+-]?[0-9]+)?[Li]?/],["lit",/^(?:NULL|NA(?:_(?:integer|real|complex|character)_)?|Inf|TRUE|FALSE|NaN|\.\.(?:\.|[0-9]+))(?![A-Za-z0-9_.])/],["pun",/^(?:<<?-|->>?|-|==|<=|>=|<|>|&&?|!=|\|\|?|\*|\+|\^|\/|!|%.*?%|=|~|\$|@|:{1,3}|[\[\](){};,?])/],["pln",/^(?:[A-Za-z]+[A-Za-z0-9_.]*|\.[a-zA-Z_][0-9a-zA-Z\._]*)(?![A-Za-z0-9_.])/],["str",/^`.+`/]]),["r","s","R","S","Splus"]);
//rebuild by neat 