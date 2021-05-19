var counter = 0;
var totalBudget = 1628;
var d = new Date;
var month = d.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];

document.getElementById("totals-banner").innerText = "Available budget in " + fillInCurrentMonth();
document.getElementById("total-budget").innerText = totalBudget.toString();


function fillInCurrentMonth() {
    return months[month];
};

//GET USER INPUT AND STORE IT IN AN OBJECT
var userInputStore = function(negativePositive, description, amount) {
    this.negativePositive = negativePositive;
    this.description = description;
    this.amount = amount;
}

function formObject() {
    var negPos = document.getElementById("sign-select").value;
    var desc = document.getElementById("description").value;
    var amnt = document.getElementById("value").value;

    var inputObject = new userInputStore(negPos, desc, amnt);

    resetInputFields();
   
    
}

//UPDATE THE TABLES

//RESET INPUT FIELDS
function resetInputFields() {
    document.getElementById("description").value = '';
    document.getElementById("value").value = '';
}





















// function tableFiller() {
	
//     var table = document.getElementById("myTable");
//     var description1 = document.getElementById("description").value;
//     var numberValue = document.getElementById("value").value;
//     var row = table.insertRow(counter);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2)
//     cell1.innerText = description1;
//     cell2.innerHTML = numberValue;
//     cell3.innerHTML = counter;
//     counter++;
//     console.log(description1);
//   }