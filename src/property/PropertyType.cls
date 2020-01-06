 
 /*------------------------------------------------------------------------
    File        : PropertyType
    Purpose     : 
    Syntax      : 
    Description : 
    Author(s)   : Han Solo
    Created     : Mon Jan 06 19:25:03 CET 2020
    Notes       : 
  ----------------------------------------------------------------------*/

USING Progress.Lang.*.
USING System.Windows.Forms.Application FROM ASSEMBLY.
USING Progress.Reflect.Property FROM PROPATH.
USING Telerik.WinControls.UI.RadSpinEditor FROM ASSEMBLY.
USING Infragistics.Win.UltraWinEditors.UltraTextEditor FROM ASSEMBLY.

BLOCK-LEVEL ON ERROR UNDO, THROW.

CLASS property.PropertyType: 
    

    DEFINE PUBLIC PROPERTY PropertyMicrosoft1 AS Application NO-UNDO 
    GET.
    SET. 

    DEFINE PUBLIC PROPERTY PropertyProgress1 AS Property NO-UNDO 
    GET.
    SET. 

    DEFINE PUBLIC PROPERTY PropertyTelerik1 AS RadSpinEditor NO-UNDO 
    GET.
    SET.   
    
    DEFINE PUBLIC PROPERTY PropertyInfragistics1 AS UltraTextEditor NO-UNDO 
    GET.
    SET.   
    

    DEFINE PUBLIC PROPERTY PropertyMicrosoft2 AS System.Windows.Forms.Form NO-UNDO 
    GET.
    SET. 

    DEFINE PUBLIC PROPERTY PropertyProgress2 AS Progress.Lang.Class NO-UNDO 
    GET.
    SET. 

    DEFINE PUBLIC PROPERTY PropertyTelerik2 AS Telerik.WinControls.UI.RadTextBox NO-UNDO 
    GET.
    SET.   
    
    DEFINE PUBLIC PROPERTY PropertyInfragistics2 AS Infragistics.Win.UltraWinGrid.UltraGrid NO-UNDO 
    GET.
    SET.    
    

END CLASS.