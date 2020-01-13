
/*------------------------------------------------------------------------
    File        : ProcSample.p
    Purpose     : 

    Syntax      :

    Description : Proc Sample Description

    Author(s)   : Han Solo
    Created     : Mon Jan 06 19:09:16 CET 2020
    Notes       :
    @param pParam1 The Param 1 comment
    @param pParam2 The Param 2 comment
  ----------------------------------------------------------------------*/

/* ***************************  Definitions  ************************** */

BLOCK-LEVEL ON ERROR UNDO, THROW.


DEFINE INPUT  PARAMETER pParam1 AS CHARACTER NO-UNDO.
DEFINE OUTPUT PARAMETER pParam2 AS CHARACTER NO-UNDO.

/*------------------------------------------------------------------------------
 Purpose: Purpose of ttStatic
 Notes: 
------------------------------------------------------------------------------*/
DEFINE TEMP-TABLE ttSample NO-UNDO
    FIELD champ1 AS CHARACTER 
    FIELD champ2 AS CHARACTER FORMAT "X(2)"
    FIELD champ3 AS INTEGER EXTENT 2
    INDEX i1 IS PRIMARY UNIQUE champ1.

/* ********************  Preprocessor Definitions  ******************** */

/* ************************  Function Prototypes ********************** */


FUNCTION Function1 RETURNS CHARACTER 
    ( INPUT pParam1 AS CHARACTER,
      OUTPUT pParam2 AS CHARACTER ) FORWARD.


/* ***************************  Main Block  *************************** */



/* **********************  Internal Procedures  *********************** */

PROCEDURE Procedure1:
/*------------------------------------------------------------------------------
 Purpose: Purpose of procedure1
 Notes: Note of procedure1
 @param pParam1 Desc of Param1
 @param pParam2 Desc of Param2
 @param pParam2 Desc of Param3
------------------------------------------------------------------------------*/
DEFINE INPUT  PARAMETER pParam1 AS CHARACTER NO-UNDO.
DEFINE INPUT-OUTPUT PARAMETER pParam2 AS CHARACTER NO-UNDO.
DEFINE OUTPUT PARAMETER pParam3 AS CHARACTER NO-UNDO.



END PROCEDURE.


/* ************************  Function Implementations ***************** */

FUNCTION Function1 RETURNS CHARACTER 
    ( INPUT pParam1 AS CHARACTER,
      OUTPUT pParam2 AS CHARACTER ):
/*------------------------------------------------------------------------------
 Purpose: Purpose Function1
 Notes:
 @param pParam1 Desc of pParam1
 @param pParam2 Desc of pParam2
 @return Desc of function return 
------------------------------------------------------------------------------*/    

        DEFINE VARIABLE result AS CHARACTER NO-UNDO.

        RETURN result.


        
END FUNCTION.

