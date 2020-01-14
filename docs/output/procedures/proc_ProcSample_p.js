Ext.data.JsonP.proc_ProcSample_p({"files":[],"uses":[],"id":"procedure-proc\\ProcSample","tagname":"procedure","name":"proc/ProcSample.p","author":"Han Solo\n","comment":"\u003ch3\u003eFile:\u003c/h3\u003e\n\u003cp\u003eProcSample.p\u003c/p\u003e\n\u003ch3\u003eDescription:\u003c/h3\u003e\n\u003cp\u003eProc Sample Description\u003c/p\u003e\n\u003ch3\u003eCreated:\u003c/h3\u003e\n\u003cp\u003eMon Jan 06 19:09:16 CET 2020\u003c/p\u003e\n","icon":"procedure","members":[{"id":"procedure-Procedure1","name":"Procedure1","tagname":"procedure","comment":"\u003ch3\u003ePurpose:\u003c/h3\u003e\n\u003cp\u003ePurpose of procedure1\u003c/p\u003e\n\u003ch3\u003eNotes:\u003c/h3\u003e\n\u003cp\u003eNote of procedure1\u003c/p\u003e\n","parameters":[{"name":"pParam1","datatype":"CHARACTER","mode":"INPUT","comment":"Desc of Param1\n"},{"name":"pParam2","datatype":"CHARACTER","mode":"INOUT","comment":"Desc of Param3\n"},{"name":"pParam3","datatype":"CHARACTER","mode":"OUTPUT"}],"meta":{}},{"id":"function-Function1","name":"Function1","tagname":"function","comment":"\u003ch3\u003ePurpose:\u003c/h3\u003e\n\u003cp\u003ePurpose Function1\u003c/p\u003e\n","parameters":[{"name":"pParam1","datatype":"CHARACTER","mode":"INPUT","comment":"Desc of pParam1\n"},{"name":"pParam2","datatype":"CHARACTER","mode":"OUTPUT","comment":"Desc of pParam2\n"}],"returns":{"datatype":"CHARACTER","comment":"Desc of function return \n"},"meta":{}},{"id":"temptable-ttSample","name":"ttSample","tagname":"temptable","definition":"DEFINE TEMP-TABLE ttSample NO-UNDO \u003cbr\u003e\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;  FIELD champ1 AS CHARACTER\u003cbr\u003e\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;  FIELD champ2 AS CHARACTER FORMAT X(2)\u003cbr\u003e\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;  FIELD champ3 AS INTEGER EXTENT 2\u003cbr\u003e\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;  INDEX i1 PRIMARY UNIQUE champ1\u003cbr\u003e\u0026nbsp;\u0026nbsp;\u0026nbsp;\u0026nbsp;","comment":"\u003ch3\u003ePurpose:\u003c/h3\u003e\n\u003cp\u003ePurpose of ttStatic\u003c/p\u003e\n","meta":{"noundo":true}}],"parameters":[{"name":"pParam1","datatype":"CHARACTER","mode":"INPUT","comment":"The Param 1 comment\n"},{"name":"pParam2","datatype":"CHARACTER","mode":"OUTPUT","comment":"The Param 2 comment\n \n"}],"meta":{}});