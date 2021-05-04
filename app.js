var totalBudget = 1628;
var d = new Date;
var month = d.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];

document.getElementById("totals-banner").innerText = "Available budget in " + getMonth();
document.getElementById("total-budget").innerText = totalBudget.toString();


function getMonth() {
    return months[month];
    }