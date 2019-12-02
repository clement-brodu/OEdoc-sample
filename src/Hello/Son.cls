 
 /*------------------------------------------------------------------------
    File        : Son
    Purpose     : THE SON
    Syntax      : 
    Description : 
    Author(s)   : cbr
    Created     : Mon Dec 02 16:34:10 CET 2019
    Notes       : 
  ----------------------------------------------------------------------*/

USING Progress.Lang.*.
USING Hello.Father FROM PROPATH.

BLOCK-LEVEL ON ERROR UNDO, THROW.

CLASS Hello.Son INHERITS Father IMPLEMENTS Hello.ITruc: 
 
    /*------------------------------------------------------------------------------
     Purpose: Say Hello from son
     Notes:
         @param pName Name to say hello from son
    ------------------------------------------------------------------------------*/

    METHOD PUBLIC OVERRIDE VOID HelloWorld( INPUT pName AS CHARACTER  ):
        
        RETURN.

    END METHOD.
    
     METHOD PUBLIC CHARACTER getFamily(  ) :
         RETURN "Skywalker".
     END METHOD.
    
END CLASS.