// build time:Sun Apr 30 2017 11:41:12 GMT+0800 (CST)
PR.registerLangHandler(PR.createSimpleLexer([["opn",/^[\(\{\[]+/,null,"([{"],["clo",/^[\)\}\]]+/,null,")]}"],["com",/^;[^\r\n]*/,null,";"],["pln",/^[\t\n\r \xA0]+/,null,"\t\n\r  "],["str",/^\"(?:[^\"\\]|\\[\s\S])*(?:\"|$)/,null,'"']],[["kwd",/^(?:def|if|do|let|quote|var|fn|loop|recur|throw|try|monitor-enter|monitor-exit|defmacro|defn|defn-|macroexpand|macroexpand-1|for|doseq|dosync|dotimes|and|or|when|not|assert|doto|proxy|defstruct|first|rest|cons|defprotocol|deftype|defrecord|reify|defmulti|defmethod|meta|with-meta|ns|in-ns|create-ns|import|intern|refer|alias|namespace|resolve|ref|deref|refset|new|set!|memfn|to-array|into-array|aset|gen-class|reduce|map|filter|find|nil?|empty?|hash-map|hash-set|vec|vector|seq|flatten|reverse|assoc|dissoc|list|list?|disj|get|union|difference|intersection|extend|extend-type|extend-protocol|prn)\b/,null],["typ",/^:[0-9a-zA-Z\-]+/]]),["clj"]);
//rebuild by neat 