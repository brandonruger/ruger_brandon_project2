/* Brandon Ruger
 * Project 2
 * VFW 1308 */

window.addEventListener("DOMContentLoaded", function(){
    
    //getElementByID Function
    function $(x) {
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    
    
    
    //Variable Defaults
    var fleaMedication = ["--Type of Flea Medication--", "Topical", "Oral", "Spray-On"];
    
    
    //Set Link & Submit Click Events
    
    var displayData = $('displayData');
    displayData.addEventListener("click", getDataFromStorage);
    var clearData = $('clearData');
    clearData.addEventListener("click", clearLocalStorage);
    var createButton = $('button');
    createButton.addEventListener("click", "submitData");
    
    
    
    
    
});

