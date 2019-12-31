
/*------------------------------------------------------------------------
    File        : start.p
    Purpose     : 

    Syntax      :

    Description : 

    Author(s)   : Han Solo
    Created     : Mon Dec 02 16:44:15 CET 2019
    Notes       :
  ----------------------------------------------------------------------*/

/* ***************************  Definitions  ************************** */

BLOCK-LEVEL ON ERROR UNDO, THROW.

/* ********************  Preprocessor Definitions  ******************** */


/* ***************************  Main Block  *************************** */

DEFINE VARIABLE vFather   AS Hello.Father   NO-UNDO.
DEFINE VARIABLE vDaughter AS Hello.Daughter NO-UNDO.
DEFINE VARIABLE vSon      AS Hello.Son      NO-UNDO.



/* **********************  Internal Procedures  *********************** */

RUN Initialize IN THIS-PROCEDURE.

PROCEDURE Initialize:
/*------------------------------------------------------------------------------
 Purpose: Initialize the machine
 Notes:
------------------------------------------------------------------------------*/
    ASSIGN 
         vFather   = NEW Hello.Father   ()
         vDaughter = NEW Hello.Daughter ()
         vSon      = NEW Hello.Son      ()
         .

END PROCEDURE.
