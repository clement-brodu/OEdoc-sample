 
 /*------------------------------------------------------------------------
    File        : Father
    Purpose     : THE FATHER
    Syntax      : 
    Description : 
    Author(s)   : cbr
    Created     : Mon Dec 02 16:33:53 CET 2019
    Notes       : 
  ----------------------------------------------------------------------*/

USING Progress.Lang.*.

BLOCK-LEVEL ON ERROR UNDO, THROW.

CLASS Hello.Father: 
    
    

    /*------------------------------------------------------------------------------
     Purpose: Say Hello from Father
     Notes:
         @param pName Name to say hello from father
    ------------------------------------------------------------------------------*/

    METHOD PUBLIC VOID HelloWorld( INPUT pName AS CHARACTER  ):
        
        RETURN.

    END METHOD.

    /*------------------------------------------------------------------------------
     Purpose: Allé on y va
     Notes:
        @param pSteps number steps
    ------------------------------------------------------------------------------*/

    METHOD PUBLIC VOID WalkingOnTheMoon( INPUT  pSteps AS INTEGER ):
        
        RETURN.

    END METHOD.    
    

END CLASS.