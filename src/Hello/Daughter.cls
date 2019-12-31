 
 /*------------------------------------------------------------------------
    File        : Daughter
    Purpose     : THE DAUGHTER
    Syntax      : 
    Description : 
    Author(s)   : Han Solo
    Created     : Mon Dec 02 16:34:30 CET 2019
    Notes       : 
  ----------------------------------------------------------------------*/

USING Progress.Lang.*.
USING Hello.ITruc FROM PROPATH.

BLOCK-LEVEL ON ERROR UNDO, THROW.

CLASS Hello.Daughter INHERITS Hello.Father IMPLEMENTS ITruc : 
     
    /*------------------------------------------------------------------------------
     Purpose: Say Hello from Daughter
     Notes:
         @param pName Name to say hello from Daughter
    ------------------------------------------------------------------------------*/

    METHOD PUBLIC OVERRIDE VOID HelloWorld( INPUT pName AS CHARACTER  ):
        
        RETURN.

    END METHOD.

     METHOD PUBLIC CHARACTER getFamily(  ) :
         RETURN "Skywalker".
     END METHOD.

END CLASS.