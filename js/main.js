/* Brandon Ruger
 * Project 2
 * VFW 1308 */

window.addEventListener("DOMContentLoaded", function(){
    
    //getElementByID Function
    function $(x) {
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    
    
    //Create select field element and populuate it with options.
    function makeFleaMedOptions() {
        var formTag = document.getElementsByTagName("form"); // formTag is an array of all the form tags
        var chooseList = $('select');
        var makeSelect = document.createElement('select');
        makeSelect.setAttribute("id", "fleaRx");
        for (var i=0, j=fleaMedication.length; i<j; i++) {
            var createOption = document.createElement('option');
            var optionText = fleaMedication[i];
            createOption.setAttribute("value", optionText);
            createOption.innerHTML = optionText;
            makeSelect.appendChild(createOption);
        }
        chooseList.appendChild(makeSelect);
    }
    
    //Find value of selected checked items:
    function getSelectedCheckedBoxes() {
        if ($('fleaValue').checked) {
            fleaValue = $('fleaValue').value;
        } else {
            fleaValue = "No"
        }
        if ($('heartwormValue').checked){
            heartwormValue = $('heartwormValue').value;
        } else {
            heartwormValue = "No"
        }
        if ($('otherValue').checked) {
            otherValue = $('otherValue').value;
        } else{
            otherValue = "No"
        }
    }
    
    
    
    //Create function to submit data.
    function submitData() {
        var generateId =    Math.floor(Math.random()*100000001);
        //Gather up all our form field values and store in an object.
        //Object properties contain array with the form label and input value.
        getSelectedCheckedBoxes();
        var itemList            = {};
            itemList.fleaRx     = ["Flea Rx:", $('fleaRx').value];
            itemList.petname    = ["Pet Name:", $('petname').value];
            itemList.petage     = ["Pet Age:", $('petage').value];
            itemList.pettype    = ["Pet Type:", $('pettype').value];
            itemList.flea       = ["Flea:", fleaValue];
            itemList.heartworm  = ["Heartworm:", heartwormValue];
            itemList.other      = ["Other:", otherValue];
            itemList.date       = ["Date:", $('date').value];
            itemList.range      = ["Range:", $('range').value];
            itemList.note       = ["Note:", $('note').value];
            
            //Save data into Local Storage: use Stringify to convert object to a string:
            localStorage.setItem(generateId, JSON.stringify(itemList));
            alert("Reminder has been added!");
    }
    
    //Variable Defaults
    var fleaMedication = ["--Type of Flea Medication--", "Topical", "Oral", "Spray-On"];
    var fleaCheckBox;
    makeFleaMedOptions();
    
    //Set Link & Submit Click Events
    
    /*var displayData = $('displayData');
    displayData.addEventListener("click", getDataFromStorage);
    var clearData = $('clearData');
    clearData.addEventListener("click", clearLocalStorage);*/
    var createButton = $('button');
    createButton.addEventListener("click", "submitData");
    
    
    
    
    
});

