PR.registerLangHandler(PR.createSimpleLexer([["pln",/^[\t\n\r \xA0]+/,null,"\t\n\r \u00a0"],["str",/^(?:"(?:[^\"\\]|\\.)*"|'(?:[^\'\\]|\\.)*')/,null,"\"'"]],[["com",/^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//],["kwd",/^(?:ABSOLUTE|ABSTRACT|ACCELERATOR|ACCUM|ACCUMULATE|ACTIVE-FORM|ACTIVE-WINDOW|ADD|ADD-BUFFER|ADD-CALC-COLUMN|ADD-COLUMNS-FROM|ADD-EVENTS-PROCEDURE|ADD-FIELDS-FROM|ADD-FIRST|ADD-INDEX-FIELD|ADD-LAST|ADD-LIKE-COLUMN|ADD-LIKE-FIELD|ADD-LIKE-INDEX|ADD-NEW-FIELD|ADD-NEW-INDEX|ADD-SCHEMA-LOCATION|ADD-SUPER-PROCEDURE|ADM-DATA|ADVISE|ALERT-BOX|ALIAS|ALL|ALLOW-COLUMN-SEARCHING|ALLOW-REPLICATION|ALTER|ALWAYS-ON-TOP|AMBIGUOUS|ANALYZE|AND|ANSI-ONLY|ANY|ANYWHERE|APPEND|APPL-ALERT-BOXES|APPL-CONTEXT-ID|APPLICATION|APPLY|APPSERVER-INFO|APPSERVER-PASSWORD|APPSERVER-USERID|ARRAY-MESSAGE|AS|ASC|ASCENDING|ASK-OVERWRITE|ASSEMBLY|ASSIGN|ASYNCHRONOUS|ASYNC-REQUEST-COUNT|ASYNC-REQUEST-HANDLE|AT|ATTACHED-PAIRLIST|ATTR-SPACE|AUDIT-CONTROL|AUDIT-ENABLED|AUDIT-EVENT-CONTEXT|AUDIT-POLICY|AUTHENTICATION-FAILED|AUTHORIZATION|AUTO-COMPLETION|AUTO-ENDKEY|AUTO-END-KEY|AUTO-GO|AUTO-INDENT|AUTOMATIC|AUTO-RESIZE|AUTO-RETURN|AUTO-SYNCHRONIZE|AUTO-ZAP|AVAILABLE|AVAILABLE-FORMATS|AVERAGE|AVG|BACKGROUND|BACKWARDS|BASE64-DECODE|BASE64-ENCODE|BASE-ADE|BASE-KEY|BATCH-MODE|BATCH-SIZE|BEFORE-HIDE|BEGIN-EVENT-GROUP|BEGINS|BELL|BETWEEN|BGCOLOR|BIG-ENDIAN|BINARY|BIND|BIND-WHERE|BLANK|BLOCK-ITERATION-DISPLAY|BLOCK-LEVEL|BORDER-BOTTOM-CHARS|BORDER-BOTTOM-PIXELS|BORDER-LEFT-CHARS|BORDER-LEFT-PIXELS|BORDER-RIGHT-CHARS|BORDER-RIGHT-PIXELS|BORDER-TOP-CHARS|BORDER-TOP-PIXELS|BOX|BOX-SELECTABLE|BREAK|BROWSE|BUFFER|BUFFER-CHARS|BUFFER-COMPARE|BUFFER-COPY|BUFFER-CREATE|BUFFER-DELETE|BUFFER-FIELD|BUFFER-HANDLE|BUFFER-LINES|BUFFER-NAME|BUFFER-PARTITION-ID|BUFFER-RELEASE|BUFFER-VALUE|BUTTON|BUTTONS|BY|BY-POINTER|BY-VARIANT-POINTER|CACHE|CACHE-SIZE|CALL|CALL-NAME|CALL-TYPE|CANCEL-BREAK|CANCEL-BUTTON|CAN-CREATE|CAN-DELETE|CAN-DO|CAN-DO-DOMAIN-SUPPORT|CAN-FIND|CAN-QUERY|CAN-READ|CAN-SET|CAN-WRITE|CAPS|CAREFUL-PAINT|CASE|CASE-SENSITIVE|CAST|CATCH|CDECL|CENTERED|CHAINED|CHARACTER|CHARACTER_LENGTH|CHARSET|CHECK|CHECKED|CHOOSE|CHR|CLASS|CLASS-TYPE|CLEAR|CLEAR-APPL-CONTEXT|CLEAR-LOG|CLEAR-SELECTION|CLEAR-SORT-ARROWS|CLIENT-CONNECTION-ID|CLIENT-PRINCIPAL|CLIENT-TTY|CLIENT-TYPE|CLIENT-WORKSTATION|CLIPBOARD|CLOSE|CLOSE-LOG|CODE|CODEBASE-LOCATOR|CODEPAGE|CODEPAGE-CONVERT|COLLATE|COL-OF|COLON|COLON-ALIGNED|COLOR|COLOR-TABLE|COLUMN|COLUMN-BGCOLOR|COLUMN-DCOLOR|COLUMN-FGCOLOR|COLUMN-FONT|COLUMN-LABEL|COLUMN-MOVABLE|COLUMN-OF|COLUMN-PFCOLOR|COLUMN-READ-ONLY|COLUMN-RESIZABLE|COLUMNS|COLUMN-SCROLLING|COMBO-BOX|COM-HANDLE|COMMAND|COMPARES|COMPILE|COMPILER|COMPLETE|COM-SELF|CONFIG-NAME|CONNECT|CONNECTED|CONSTRUCTOR|CONTAINS|CONTENTS|CONTEXT|CONTEXT-HELP|CONTEXT-HELP-FILE|CONTEXT-HELP-ID|CONTEXT-POPUP|CONTROL|CONTROL-BOX|CONTROL-FRAME|CONVERT|CONVERT-3D-COLORS|CONVERT-TO-OFFSET|COPY-DATASET|COPY-LOB|COPY-SAX-ATTRIBUTES|COPY-TEMP-TABLE|COUNT|COUNT-OF|CPCASE|CPCOLL|CPINTERNAL|CPLOG|CPPRINT|CPRCODEIN|CPRCODEOUT|CPSTREAM|CPTERM|CRC-VALUE|CREATE|CREATE-LIKE|CREATE-LIKE-SEQUENTIAL|CREATE-NODE-NAMESPACE|CREATE-RESULT-LIST-ENTRY|CREATE-TEST-FILE|CURRENT|CURRENT_DATE|CURRENT_DATE|CURRENT-CHANGED|CURRENT-COLUMN|CURRENT-ENVIRONMENT|CURRENT-ITERATION|CURRENT-LANGUAGE|CURRENT-QUERY|CURRENT-REQUEST-INFO|CURRENT-RESPONSE-INFO|CURRENT-RESULT-ROW|CURRENT-ROW-MODIFIED|CURRENT-VALUE|CURRENT-WINDOW|CURSOR|CURSOR-CHAR|CURSOR-LINE|CURSOR-OFFSET|DATABASE|DATA-BIND|DATA-ENTRY-RETURN|DATA-RELATION|DATASERVERS|DATASET|DATASET-HANDLE|DATA-SOURCE|DATA-SOURCE-COMPLETE-MAP|DATA-SOURCE-MODIFIED|DATA-SOURCE-ROWID|DATA-TYPE|DATE|DATE-FORMAT|DAY|DBCODEPAGE|DBCOLLATION|DBNAME|DBPARAM|DB-CONTEXT|DB-REFERENCES|DBRESTRICTIONS|DBTASKID|DBTYPE|DBVERSION|DCOLOR|DDE|DDE-ERROR|DDE-ID|DDE-ITEM|DDE-NAME|DDE-TOPIC|DEBLANK|DEBUG|DEBUG-ALERT|DEBUGGER|DEBUG-LIST|DECIMAL|DECIMALS|DECLARE|DECLARE-NAMESPACE|DECRYPT|DEFAULT|DEFAULT-BUFFER-HANDLE|DEFAULT-BUTTON|DEFAULT-COMMIT|DEFAULT-EXTENSION|DEFAULT-NOXLATE|DEFAULT-VALUE|DEFAULT-WINDOW|DEFINE|DEFINED|DEFINE-USER-EVENT-MANAGER|DELEGATE|DELETE|DELETE|DELETE-CHAR|DELETE-CURRENT-ROW|DELETE-LINE|DELETE-RESULT-LIST-ENTRY|DELETE-SELECTED-ROW|DELETE-SELECTED-ROWS|DELIMITER|DESC|DESCENDING|DESELECT-FOCUSED-ROW|DESELECTION|DESELECT-ROWS|DESELECT-SELECTED-ROW|DESTRUCTOR|DIALOG-BOX|DICTIONARY|DIR|DISABLE|DISABLE-AUTO-ZAP|DISABLED|DISABLE-DUMP-TRIGGERS|DISABLE-LOAD-TRIGGERS|DISCONNECT|DISP|DISPLAY|DISPLAY-MESSAGE|DISPLAY-TYPE|DISTINCT|DO|DOMAIN-DESCRIPTION|DOMAIN-NAME|DOMAIN-TYPE|DOS|DOUBLE|DOWN|DRAG-ENABLED|DROP|DROP-DOWN|DROP-DOWN-LIST|DROP-FILE-NOTIFY|DROP-TARGET|ds-close-cursor|DSLOG-MANAGER|DUMP|DYNAMIC|DYNAMIC-ENUM|DYNAMIC-FUNCTION|DYNAMIC-INVOKE|EACH|ECHO|EDGE-CHARS|EDGE-PIXELS|EDIT-CAN-PASTE|EDIT-CAN-UNDO|EDIT-CLEAR|EDIT-COPY|EDIT-CUT|EDITING|EDITOR|EDIT-PASTE|EDIT-UNDO|ELSE|EMPTY|EMPTY-TEMP-TABLE|ENABLE|ENABLED-FIELDS|ENCODE|ENCRYPT|ENCRYPT-AUDIT-MAC-KEY|ENCRYPTION-SALT|END|END-DOCUMENT|END-ELEMENT|END-EVENT-GROUP|END-FILE-DROP|ENDKEY|END-KEY|END-MOVE|END-RESIZE|END-ROW-RESIZE|END-USER-PROMPT|ENTERED|ENTITY-EXPANSION-LIMIT|ENTRY|ENUM|EQ|ERROR|ERROR-COLUMN|ERROR-ROW|ERROR-STACK-TRACE|ERROR-STATUS|ESCAPE|ETIME|EVENT|EVENT-GROUP-ID|EVENT-PROCEDURE|EVENT-PROCEDURE-CONTEXT|EVENTS|EVENT-TYPE|EXCEPT|EXCLUSIVE-ID|EXCLUSIVE-LOCK|EXCLUSIVE-WEB-USER|EXECUTE|EXISTS|EXP|EXPAND|EXPANDABLE|EXPLICIT|EXPORT|EXPORT-PRINCIPAL|EXTENDED|EXTENT|EXTERNAL|FALSE|FETCH|FETCH-SELECTED-ROW|FGCOLOR|FIELD|FIELDS|FILE|FILE-CREATE-DATE|FILE-CREATE-TIME|FILE-INFORMATION|FILE-MOD-DATE|FILE-MOD-TIME|FILENAME|FILE-NAME|FILE-OFFSET|FILE-SIZE|FILE-TYPE|FILL|FILLED|FILL-IN|FILTERS|FINAL|FINALLY|FIND|FIND-BY-ROWID|FIND-CASE-SENSITIVE|FIND-CURRENT|FINDER|FIND-FIRST|FIND-GLOBAL|FIND-LAST|FIND-NEXT-OCCURRENCE|FIND-PREV-OCCURRENCE|FIND-SELECT|FIND-UNIQUE|FIND-WRAP-AROUND|FIRST|FIRST-ASYNCH-REQUEST|FIRST-CHILD|FIRST-COLUMN|FIRST-FORM|FIRST-OBJECT|FIRST-OF|FIRST-PROCEDURE|FIRST-SERVER|FIRST-TAB-ITEM|FIT-LAST-COLUMN|FIXED-ONLY|FLAT-BUTTON|FLOAT|FOCUS|FOCUSED-ROW|FOCUSED-ROW-SELECTED|FONT|FONT-TABLE|FOR|FORCE-FILE|FOREGROUND|FORM|FORM|FORMAT|FORMATTED|FORM-LONG-INPUT|FORWARD|FORWARDS|FRAGMENT|FRAME|FRAME-COL|FRAME-DB|FRAME-DOWN|FRAME-FIELD|FRAME-FILE|FRAME-INDEX|FRAME-LINE|FRAME-NAME|FRAME-ROW|FRAME-SPACING|FRAME-VALUE|FRAME-X|FRAME-Y|FREQUENCY|FROM|FROM-CHARS|FROM-CURRENT|FROM-PIXELS|FULL-HEIGHT-CHARS|FULL-HEIGHT-PIXELS|FULL-PATHNAME|FULL-WIDTH-CHARS|FULL-WIDTH-PIXELS|FUNCTION|FUNCTION-CALL-TYPE|GATEWAYS|GE|GENERATE-MD5|GENERATE-PBE-KEY|GENERATE-PBE-SALT|GENERATE-RANDOM-KEY|GENERATE-UUID|GET|GET-ATTR-CALL-TYPE|GET-ATTRIBUTE-NODE|GET-BINARY-DATA|GET-BLUE-VALUE|GET-BROWSE-COLUMN|GET-BUFFER-HANDLE|GETBYTE|GET-BYTE|GET-CALLBACK-PROC-CONTEXT|GET-CALLBACK-PROC-NAME|GET-CGI-LIST|GET-CGI-LONG-VALUE|GET-CGI-VALUE|GET-CLASS|GET-CODEPAGES|GET-COLLATIONS|GET-CONFIG-VALUE|GET-CURRENT|GET-DOUBLE|GET-DROPPED-FILE|GET-DYNAMIC|GET-ERROR-COLUMN|GET-ERROR-ROW|GET-FILE|GET-FILE-NAME|GET-FILE-OFFSET|GET-FIRST|GET-FLOAT|GET-GREEN-VALUE|GET-INDEX-BY-NAMESPACE-NAME|GET-INDEX-BY-QNAME|GET-INT64|GET-ITERATION|GET-KEY-VALUE|GET-LAST|GET-LOCALNAME-BY-INDEX|GET-LONG|GET-MESSAGE|GET-NEXT|GET-NUMBER|GET-POINTER-VALUE|GET-PREV|GET-PRINTERS|GET-PROPERTY|GET-QNAME-BY-INDEX|GET-RED-VALUE|GET-REPOSITIONED-ROW|GET-RGB-VALUE|GET-SELECTED-WIDGET|GET-SHORT|GET-SIGNATURE|GET-SIZE|GET-STRING|GET-TAB-ITEM|GET-TEXT-HEIGHT-CHARS|GET-TEXT-HEIGHT-PIXELS|GET-TEXT-WIDTH-CHARS|GET-TEXT-WIDTH-PIXELS|GET-TYPE-BY-INDEX|GET-TYPE-BY-NAMESPACE-NAME|GET-TYPE-BY-QNAME|GET-UNSIGNED-LONG|GET-UNSIGNED-SHORT|GET-URI-BY-INDEX|GET-VALUE-BY-INDEX|GET-VALUE-BY-NAMESPACE-NAME|GET-VALUE-BY-QNAME|GET-WAIT-STATE|GLOBAL|GO-ON|GO-PENDING|GRANT|GRAPHIC-EDGE|GRID-FACTOR-HORIZONTAL|GRID-FACTOR-VERTICAL|GRID-SNAP|GRID-UNIT-HEIGHT-CHARS|GRID-UNIT-HEIGHT-PIXELS|GRID-UNIT-WIDTH-CHARS|GRID-UNIT-WIDTH-PIXELS|GRID-VISIBLE|GROUP|GT|GUID|HANDLE|HANDLER|HAS-RECORDS|HAVING|HEADER|HEIGHT-CHARS|HEIGHT-PIXELS|HELP|HEX-DECODE|HEX-ENCODE|HIDDEN|HIDE|HORIZONTAL|HOST-BYTE-ORDER|HTML-CHARSET|HTML-END-OF-LINE|HTML-END-OF-PAGE|HTML-FRAME-BEGIN|HTML-FRAME-END|HTML-HEADER-BEGIN|HTML-HEADER-END|HTML-TITLE-BEGIN|HTML-TITLE-END|HWND|ICON|IF|IMAGE|IMAGE-DOWN|IMAGE-INSENSITIVE|IMAGE-SIZE|IMAGE-SIZE-CHARS|IMAGE-SIZE-PIXELS|IMAGE-UP|IMMEDIATE-DISPLAY|IMPLEMENTS|IMPORT|IMPORT-PRINCIPAL|IN|INCREMENT-EXCLUSIVE-ID|INDEX|INDEXED-REPOSITION|INDEX-HINT|INDEX-INFORMATION|INDICATOR|INFORMATION|IN-HANDLE|INHERIT-BGCOLOR|INHERIT-FGCOLOR|INHERITS|INITIAL|INITIAL-DIR|INITIAL-FILTER|INITIALIZE-DOCUMENT-TYPE|INITIATE|INNER-CHARS|INNER-LINES|INPUT|INPUT-OUTPUT|INPUT-VALUE|INSERT|INSERT-ATTRIBUTE|INSERT-BACKTAB|INSERT-FILE|INSERT-ROW|INSERT-STRING|INSERT-TAB|INT|INT64|INTEGER|INTERFACE|INTERNAL-ENTRIES|INTO|INVOKE|IS|IS-ATTR-SPACE|IS-CLASS|IS-JSON|IS-LEAD-BYTE|IS-OPEN|IS-PARAMETER-SET|IS-PARTITIONED|IS-ROW-SELECTED|IS-SELECTED|IS-XML|ITEM|ITEMS-PER-ROW|JOIN|JOIN-BY-SQLDB|KBLABEL|KEEP-CONNECTION-OPEN|KEEP-FRAME-Z-ORDER|KEEP-MESSAGES|KEEP-SECURITY-CACHE|KEEP-TAB-ORDER|KEY|KEYCODE|KEY-CODE|KEYFUNCTION|KEY-FUNCTION|KEYLABEL|KEY-LABEL|KEYS|KEYWORD|KEYWORD-ALL|LABEL|LABEL-BGCOLOR|LABEL-DCOLOR|LABEL-FGCOLOR|LABEL-FONT|LABEL-PFCOLOR|LABELS|LABELS-HAVE-COLONS|LANDSCAPE|LANGUAGES|LARGE|LARGE-TO-SMALL|LAST|LAST-ASYNCH-REQUEST|LAST-BATCH|LAST-CHILD|LAST-EVENT|LAST-FORM|LASTKEY|LAST-KEY|LAST-OBJECT|LAST-OF|LAST-PROCEDURE|LAST-SERVER|LAST-TAB-ITEM|LC|LDBNAME|LE|LEAVE|LEFT-ALIGNED|LEFT-TRIM|LENGTH|LIBRARY|LIKE|LIKE-SEQUENTIAL|LINE|LINE-COUNTER|LIST-EVENTS|LISTING|LIST-ITEM-PAIRS|LIST-ITEMS|LIST-PROPERTY-NAMES|LIST-QUERY-ATTRS|LIST-SET-ATTRS|LIST-WIDGETS|LITERAL-QUESTION|LITTLE-ENDIAN|LOAD|LOAD-DOMAINS|LOAD-ICON|LOAD-IMAGE|LOAD-IMAGE-DOWN|LOAD-IMAGE-INSENSITIVE|LOAD-IMAGE-UP|LOAD-MOUSE-POINTER|LOAD-PICTURE|LOAD-SMALL-ICON|LOCAL-NAME|LOCAL-VERSION-INFO|LOCATOR-COLUMN-NUMBER|LOCATOR-LINE-NUMBER|LOCATOR-PUBLIC-ID|LOCATOR-SYSTEM-ID|LOCATOR-TYPE|LOCKED|LOCK-REGISTRATION|LOG|LOG-AUDIT-EVENT|LOGICAL|LOGIN-EXPIRATION-TIMESTAMP|LOGIN-HOST|LOGIN-STATE|LOG-MANAGER|LOGOUT|LOOKAHEAD|LOOKUP|LT|MACHINE-CLASS|MANDATORY|MANUAL-HIGHLIGHT|MAP|MARGIN-EXTRA|MARGIN-HEIGHT-CHARS|MARGIN-HEIGHT-PIXELS|MARGIN-WIDTH-CHARS|MARGIN-WIDTH-PIXELS|MARK-NEW|MARK-ROW-STATE|MATCHES|MAX|MAX-BUTTON|MAX-CHARS|MAX-DATA-GUESS|MAX-HEIGHT|MAX-HEIGHT-CHARS|MAX-HEIGHT-PIXELS|MAXIMIZE|MAXIMUM|MAXIMUM-LEVEL|MAX-ROWS|MAX-SIZE|MAX-VALUE|MAX-WIDTH|MAX-WIDTH-CHARS|MAX-WIDTH-PIXELS|MD5-DIGEST|MEMBER|MEMPTR-TO-NODE-VALUE|MENU|MENUBAR|MENU-BAR|MENU-ITEM|MENU-KEY|MENU-MOUSE|MERGE-BY-FIELD|MESSAGE|MESSAGE-AREA|MESSAGE-AREA-FONT|MESSAGE-LINES|METHOD|MIN|MIN-BUTTON|MIN-COLUMN-WIDTH-CHARS|MIN-COLUMN-WIDTH-PIXELS|MIN-HEIGHT-CHARS|MIN-HEIGHT-PIXELS|MINIMUM|MIN-SIZE|MIN-VALUE|MIN-WIDTH-CHARS|MIN-WIDTH-PIXELS|MODIFIED|MODULO|MONTH|MOUSE|MOUSE-POINTER|MOVABLE|MOVE-AFTER-TAB-ITEM|MOVE-BEFORE-TAB-ITEM|MOVE-COLUMN|MOVE-TO-BOTTOM|MOVE-TO-EOF|MOVE-TO-TOP|MPE|MTIME|MULTI-COMPILE|MULTIPLE|MULTIPLE-KEY|MULTITASKING-INTERVAL|MUST-EXIST|NAME|NAMESPACE-PREFIX|NAMESPACE-URI|NATIVE|NE|NEEDS-APPSERVER-PROMPT|NEEDS-PROMPT|NEW|NEW-INSTANCE|NEW-ROW|NEXT|NEXT-COLUMN|NEXT-PROMPT|NEXT-ROWID|NEXT-SIBLING|NEXT-TAB-ITEM|NEXT-VALUE|NO|NO-APPLY|NO-ARRAY-MESSAGE|NO-ASSIGN|NO-ATTR-LIST|NO-ATTR-SPACE|NO-AUTO-VALIDATE|NO-BIND-WHERE|NO-BOX|NO-CONSOLE|NO-CONVERT|NO-CONVERT-3D-COLORS|NO-CURRENT-VALUE|NO-DEBUG|NODE-VALUE-TO-MEMPTR|NO-DRAG|NO-ECHO|NO-EMPTY-SPACE|NO-ERROR|NO-FILL|NO-FOCUS|NO-HELP|NO-HIDE|NO-INDEX-HINT|NO-INHERIT-BGCOLOR|NO-INHERIT-FGCOLOR|NO-JOIN-BY-SQLDB|NO-LABELS|NO-LOBS|NO-LOCK|NO-LOOKAHEAD|NO-MAP|NO-MESSAGE|NONAMESPACE-SCHEMA-LOCATION|NONE|NO-PAUSE|NO-PREFETCH|NORMALIZE|NO-ROW-MARKERS|NO-SCROLLBAR-VERTICAL|NO-SEPARATE-CONNECTION|NO-SEPARATORS|NOT|NO-TAB-STOP|NOT-ACTIVE|NO-UNDERLINE|NO-UNDO|NO-VALIDATE|NOW|NO-WAIT|NO-WORD-WRAP|NULL|NUM-ALIASES|NUM-BUFFERS|NUM-BUTTONS|NUM-COLUMNS|NUM-COPIES|NUM-DBS|NUM-DROPPED-FILES|NUM-ENTRIES|NUMERIC|NUMERIC-FORMAT|NUM-FIELDS|NUM-FORMATS|NUM-ITEMS|NUM-ITERATIONS|NUM-LINES|NUM-LOCKED-COLUMNS|NUM-MESSAGES|NUM-PARAMETERS|NUM-REFERENCES|NUM-REPLACED|NUM-RESULTS|NUM-SELECTED-ROWS|NUM-SELECTED-WIDGETS|NUM-TABS|NUM-TO-RETAIN|NUM-VISIBLE-COLUMNS|OCTET-LENGTH|OF|OFF|OK|OK-CANCEL|OLD|ON|ON-FRAME-BORDER|OPEN|OPSYS|OPTION|OR|ORDERED-JOIN|ORDINAL|OS-APPEND|OS-COMMAND|OS-COPY|OS-CREATE-DIR|OS-DELETE|OS-DIR|OS-DRIVES|OS-ERROR|OS-GETENV|OS-RENAME|OTHERWISE|OUTPUT|OVERLAY|OVERRIDE|OWNER|PAGE|PAGE-BOTTOM|PAGED|PAGE-NUMBER|PAGE-SIZE|PAGE-TOP|PAGE-WIDTH|PARAMETER|PARENT|PARSE-STATUS|PARTIAL-KEY|PASCAL|PASSWORD-FIELD|PATHNAME|PAUSE|PBE-HASH-ALGORITHM|PBE-KEY-ROUNDS|PDBNAME|PERSISTENT|PERSISTENT-CACHE-DISABLED|PFCOLOR|PIXELS|PIXELS-PER-COLUMN|PIXELS-PER-ROW|POPUP-MENU|POPUP-ONLY|PORTRAIT|POSITION|PRECISION|PREFER-DATASET|PREPARED|PREPARE-STRING|PREPROCESS|PRESELECT|PREV|PREV-COLUMN|PREV-SIBLING|PREV-TAB-ITEM|PRIMARY|PRINTER|PRINTER-CONTROL-HANDLE|PRINTER-HDC|PRINTER-NAME|PRINTER-PORT|PRINTER-SETUP|PRIVATE|PRIVATE-DATA|PRIVILEGES|PROCEDURE|PROCEDURE-CALL-TYPE|PROCEDURE-TYPE|PROCESS|PROC-HANDLE|PROC-STATUS|proc-text|proc-text-buffer|PROFILER|PROGRAM-NAME|PROGRESS|PROGRESS-SOURCE|PROMPT|PROMPT-FOR|PROMSGS|PROPATH|PROPERTY|PROTECTED|PROVERSION|PROXY|PROXY-PASSWORD|PROXY-USERID|PUBLIC|PUBLIC-ID|PUBLISH|PUBLISHED-EVENTS|PUT|PUTBYTE|PUT-BYTE|PUT-DOUBLE|PUT-FLOAT|PUT-INT64|PUT-KEY-VALUE|PUT-LONG|PUT-SHORT|PUT-STRING|PUT-UNSIGNED-LONG|QUERY|QUERY-CLOSE|QUERY-OFF-END|QUERY-OPEN|QUERY-PREPARE|QUERY-TUNING|QUESTION|QUIT|QUOTER|RADIO-BUTTONS|RADIO-SET|RANDOM|RAW|RAW-TRANSFER|RCODE-INFORMATION|READ-AVAILABLE|READ-EXACT-NUM|READ-FILE|READ-JSON|READ-ONLY|READ-XML|READKEY|REAL|RECID|RECORD-LENGTH|RECTANGLE|RECURSIVE|REFERENCE-ONLY|REFRESH|REFRESHABLE|REFRESH-AUDIT-POLICY|REGISTER-DOMAIN|RELEASE|REMOTE|REMOVE-EVENTS-PROCEDURE|REMOVE-SUPER-PROCEDURE|REPEAT|REPLACE|REPLACE-SELECTION-TEXT|REPOSITION|REPOSITION-BACKWARD|REPOSITION-FORWARD|REPOSITION-MODE|REPOSITION-TO-ROW|REPOSITION-TO-ROWID|REQUEST|REQUEST-INFO|RESET|RESIZABLE|RESIZE|RESPONSE-INFO|RESTART-ROW|RESTART-ROWID|RETAIN|RETAIN-SHAPE|RETRY|RETRY-CANCEL|RETURN|RETURN-INSERTED|RETURNS|RETURN-TO-START-DIR|RETURN-VALUE|RETURN-VALUE-DATA-TYPE|REVERSE-FROM|REVERT|REVOKE|RGB-VALUE|RIGHT-ALIGNED|RIGHT-TRIM|R-INDEX|ROLES|ROUND|ROUTINE-LEVEL|ROW|ROW-HEIGHT-CHARS|ROW-HEIGHT-PIXELS|ROWID|ROW-MARKERS|ROW-OF|ROW-RESIZABLE|RULE|RUN|RUN-PROCEDURE|SAVE|SAVE|SAVE-AS|SAVE-FILE|SAX-COMPLETE|SAX-PARSE|SAX-PARSE-FIRST|SAX-PARSE-NEXT|SAX-PARSER-ERROR|SAX-RUNNING|SAX-UNINITIALIZED|SAX-WRITE-BEGIN|SAX-WRITE-COMPLETE|SAX-WRITE-CONTENT|SAX-WRITE-ELEMENT|SAX-WRITE-ERROR|SAX-WRITE-IDLE|SAX-WRITER|SAX-WRITE-TAG|SCHEMA|SCHEMA-LOCATION|SCHEMA-MARSHAL|SCHEMA-PATH|SCREEN|SCREEN-IO|SCREEN-LINES|SCREEN-VALUE|SCROLL|SCROLLABLE|SCROLLBAR-HORIZONTAL|SCROLL-BARS|SCROLLBAR-VERTICAL|SCROLL-DELTA|SCROLLED-ROW-POSITION|SCROLLING|SCROLL-OFFSET|SCROLL-TO-CURRENT-ROW|SCROLL-TO-ITEM|SCROLL-TO-SELECTED-ROW|SDBNAME|SEAL|SEAL-TIMESTAMP|SEARCH|SEARCH-SELF|SEARCH-TARGER|SECTION|SECURITY-POLICY|SEEK|SELECT|SELECTABLE|SELECT-ALL|SELECTED|SELECT-FOCUSED-ROW|SELECTION|SELECTION-END|SELECTION-LIST|SELECTION-START|SELECTION-TEXT|SELECT-NEXT-ROW|SELECT-PREV-ROW|SELECT-ROW|SELF|SEND|send-sql-statement|SENSITIVE|SEPARATE-CONNECTION|SEPARATOR-FGCOLOR|SEPARATORS|SERIALIZABLE|SERIALIZE-HIDDEN|SERIALIZE-NAME|SERVER|SERVER-CONNECTION-BOUND|SERVER-CONNECTION-BOUND-REQUEST|SERVER-CONNECTION-CONTEXT|SERVER-CONNECTION-ID|SERVER-OPERATING-MODE|SESSION|SESSION-ID|SET|SET-APPL-CONTEXT|SET-ATTR-CALL-TYPE|SET-ATTRIBUTE-NODE|SET-BLUE-VALUE|SET-BREAK|SET-BUFFERS|SET-CALLBACK|SET-CLIENT|SET-COMMIT|SET-CONTENTS|SET-CURRENT-VALUE|SET-DB-CLIENT|SET-DYNAMIC|SET-EVENT-MANAGER-OPTION|SET-GREEN-VALUE|SET-INPUT-SOURCE|SET-OPTION|SET-OUTPUT-DESTINATION|SET-PARAMETER|SET-POINTER-VALUE|SET-PROPERTY|SET-RED-VALUE|SET-REPOSITIONED-ROW|SET-RGB-VALUE|SET-ROLLBACK|SET-SELECTION|SET-SIZE|SET-SORT-ARROW|SETUSERID|SET-WAIT-STATE|SHA1-DIGEST|SHARED|SHARE-LOCK|SHOW-IN-TASKBAR|SHOW-STATS|SIDE-LABEL-HANDLE|SIDE-LABELS|SIGNATURE|SILENT|SIMPLE|SINGLE|SINGLE-RUN|SINGLETON|SIZE|SIZE-CHARS|SIZE-PIXELS|SKIP|SKIP-DELETED-RECORD|SLIDER|SMALL-ICON|SMALLINT|SMALL-TITLE|SOME|SORT|SORT-ASCENDING|SORT-NUMBER|SOURCE|SOURCE-PROCEDURE|SPACE|SQL|SQRT|SSL-SERVER-NAME|STANDALONE|START|START-DOCUMENT|START-ELEMENT|START-MOVE|START-RESIZE|START-ROW-RESIZE|STATE-DETAIL|STATIC|STATUS|STATUS-AREA|STATUS-AREA-FONT|STDCALL|STOP|STOP-AFTER|STOP-PARSING|STOPPED|STORED-PROCEDURE|STREAM|STREAM-HANDLE|STREAM-IO|STRETCH-TO-FIT|STRICT|STRICT-ENTITY-RESOLUTION|STRING|STRING-VALUE|STRING-XREF|SUB-AVERAGE|SUB-COUNT|SUB-MAXIMUM|SUB-MENU|SUB-MINIMUM|SUBSCRIBE|SUBSTITUTE|SUBSTRING|SUB-TOTAL|SUBTYPE|SUM|SUPER|SUPER-PROCEDURES|SUPPRESS-NAMESPACE-PROCESSING|SUPPRESS-WARNINGS|SYMMETRIC-ENCRYPTION-ALGORITHM|SYMMETRIC-ENCRYPTION-IV|SYMMETRIC-ENCRYPTION-KEY|SYMMETRIC-SUPPORT|SYSTEM-ALERT-BOXES|SYSTEM-DIALOG|SYSTEM-HELP|SYSTEM-ID|TABLE|TABLE-HANDLE|TABLE-NUMBER|TABLE-SCAN|TAB-POSITION|TAB-STOP|TARGET|TARGET-PROCEDURE|TEMP-DIRECTORY|TEMP-TABLE|TEMP-TABLE-PREPARE|TERM|TERMINAL|TERMINATE|TEXT|TEXT-CURSOR|TEXT-SEG-GROW|TEXT-SELECTED|THEN|THIS-OBJECT|THIS-PROCEDURE|THREAD-SAFE|THREE-D|THROW|THROUGH|THRU|TIC-MARKS|TIME|TIME-SOURCE|TITLE|TITLE-BGCOLOR|TITLE-DCOLOR|TITLE-FGCOLOR|TITLE-FONT|TO|TODAY|TOGGLE-BOX|TOOLTIP|TOOLTIPS|TOPIC|TOP-NAV-QUERY|TOP-ONLY|TO-ROWID|TOTAL|TRAILING|TRANS|TRANSACTION|TRANSACTION-MODE|TRANS-INIT-PROCEDURE|TRANSPARENT|TRIGGER|TRIGGERS|TRIM|TRUE|TRUNCATE|TYPE|TYPE-OF|UNBOX|UNBUFFERED|UNDERLINE|UNDO|UNFORMATTED|UNION|UNIQUE|UNIQUE-ID|UNIQUE-MATCH|UNIX|UNLESS-HIDDEN|UNLOAD|UNSIGNED-LONG|UNSUBSCRIBE|UP|UPDATE|UPDATE-ATTRIBUTE|URL|URL-DECODE|URL-ENCODE|URL-PASSWORD|URL-USERID|USE|USE-DICT-EXPS|USE-FILENAME|USE-INDEX|USER|USE-REVVIDEO|USERID|USER-ID|USE-TEXT|USE-UNDERLINE|USE-WIDGET-POOL|USING|V6DISPLAY|V6FRAME|VALIDATE|VALIDATE-EXPRESSION|VALIDATE-MESSAGE|VALIDATE-SEAL|VALIDATION-ENABLED|VALID-EVENT|VALID-HANDLE|VALID-OBJECT|VALUE|VALUE-CHANGED|VALUES|VARIABLE|VERBOSE|VERSION|VERTICAL|VIEW|VIEW-AS|VIEW-FIRST-COLUMN-ON-REOPEN|VIRTUAL-HEIGHT-CHARS|VIRTUAL-HEIGHT-PIXELS|VIRTUAL-WIDTH-CHARS|VIRTUAL-WIDTH-PIXELS|VISIBLE|VOID|WAIT|WAIT-FOR|WARNING|WEB-CONTEXT|WEEKDAY|WHEN|WHERE|WHILE|WIDGET|WIDGET-ENTER|WIDGET-ID|WIDGET-LEAVE|WIDGET-POOL|WIDTH|WIDTH-CHARS|WIDTH-PIXELS|WINDOW|WINDOW-MAXIMIZED|WINDOW-MINIMIZED|WINDOW-NAME|WINDOW-NORMAL|WINDOW-STATE|WINDOW-SYSTEM|WITH|WORD-INDEX|WORD-WRAP|WORK-AREA-HEIGHT-PIXELS|WORK-AREA-WIDTH-PIXELS|WORK-AREA-X|WORK-AREA-Y|WORKFILE|WORK-TABLE|WRITE|WRITE-CDATA|WRITE-CHARACTERS|WRITE-COMMENT|WRITE-DATA-ELEMENT|WRITE-EMPTY-ELEMENT|WRITE-ENTITY-REF|WRITE-EXTERNAL-DTD|WRITE-FRAGMENT|WRITE-JSON|WRITE-MESSAGE|WRITE-PROCESSING-INSTRUCTION|WRITE-STATUS|WRITE-XML|WRITE-XMLSCHEMA|X|XCODE|XML-DATA-TYPE|XML-ENTITY-EXPANSION-LIMIT|XML-NODE-TYPE|XML-SCHEMA-PATH|XML-STRICT-ENTITY-RESOLUTION|XML-SUPPRESS-NAMESPACE-PROCESSING|X-OF|XREF|XREF-XML|Y|YEAR|YEAR-OFFSET|YES|YES-NO|YES-NO-CANCEL|Y-OF)(?=[^\w-]|$)/i,
null],["lit",/^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i],["pln",/^[a-z_][\w-]*/i],["pun",/^[^\w\t\n\r \xA0\"\'][^\w\t\n\r \xA0+\-\"\']*/]]),["openedge"]);
