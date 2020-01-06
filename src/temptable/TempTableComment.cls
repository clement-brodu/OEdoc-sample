 
 /*------------------------------------------------------------------------
    File        : TempTableComment
    Purpose     : 
    Syntax      : 
    Description : 
    Author(s)   : Han Solo
    Created     : Mon Jan 06 19:32:30 CET 2020
    Notes       : 
  ----------------------------------------------------------------------*/

USING Progress.Lang.*.

BLOCK-LEVEL ON ERROR UNDO, THROW.

CLASS temptable.TempTableComment: 

       
    /*------------------------------------------------------------------------------
     Purpose: Purpose of ttStatic
     Notes: 
    ------------------------------------------------------------------------------*/
    DEFINE TEMP-TABLE ttStatic NO-UNDO
        FIELD champ1 AS CHARACTER /* Comment Champ 1 */
        FIELD champ2 AS CHARACTER /* Comment Champ 2 */
        INDEX i1 IS PRIMARY UNIQUE champ1.
        
    /*------------------------------------------------------------------------------
     Purpose: Purpose of ttStatic
     Notes: 
    ------------------------------------------------------------------------------*/
    DEFINE TEMP-TABLE ttListe NO-UNDO
        FIELD champ1 AS CHARACTER 
        FIELD champ2 AS CHARACTER EXTENT 2
        FIELD champ3 AS CHARACTER FORMAT "X(3)"
        FIELD champ4 AS CHARACTER EXTENT 4 FORMAT "X(3)"
        INDEX i1 IS PRIMARY UNIQUE champ1.    
        
        
    
        
END CLASS.