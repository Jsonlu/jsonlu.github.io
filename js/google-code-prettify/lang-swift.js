// build time:Mon Jul 03 2017 23:34:08 GMT+0800 (CST)
PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[ \n\r\t\v\f\0]+/,null," \n\r\t\x0B\f\0"],["str",/^"(?:[^"\\]|(?:\\.)|(?:\\\((?:[^"\\)]|\\.)*\)))*"/,null,'"']],[["lit",/^(?:(?:0x[\da-fA-F][\da-fA-F_]*\.[\da-fA-F][\da-fA-F_]*[pP]?)|(?:\d[\d_]*\.\d[\d_]*[eE]?))[+-]?\d[\d_]*/,null],["lit",/^-?(?:(?:0(?:(?:b[01][01_]*)|(?:o[0-7][0-7_]*)|(?:x[\da-fA-F][\da-fA-F_]*)))|(?:\d[\d_]*))/,null],["lit",/^(?:true|false|nil)\b/,null],["kwd",/^\b(?:__COLUMN__|__FILE__|__FUNCTION__|__LINE__|#available|#else|#elseif|#endif|#if|#line|arch|arm|arm64|associativity|as|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|dynamicType|else|enum|fallthrough|final|for|func|get|import|indirect|infix|init|inout|internal|i386|if|in|iOS|iOSApplicationExtension|is|lazy|left|let|mutating|none|nonmutating|operator|optional|OSX|OSXApplicationExtension|override|postfix|precedence|prefix|private|protocol|Protocol|public|required|rethrows|return|right|safe|self|set|static|struct|subscript|super|switch|throw|try|Type|typealias|unowned|unsafe|var|weak|watchOS|while|willSet|x86_64)\b/,null],["com",/^\/\/.*?[\n\r]/,null],["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null],["pun",/^<<=|<=|<<|>>=|>=|>>|===|==|\.\.\.|&&=|\.\.<|!==|!=|&=|~=|~|\(|\)|\[|\]|{|}|@|#|;|\.|,|:|\|\|=|\?\?|\|\||&&|&\*|&\+|&-|&=|\+=|-=|\/=|\*=|\^=|%=|\|=|->|`|==|\+\+|--|\/|\+|!|\*|%|<|>|&|\||\^|\?|=|-|_/,null],["typ",/^\b(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null]]),["swift"]);
//rebuild by neat 