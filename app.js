var d = new Date;
var month = d.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];

document.getElementById("totals").innerText = "Total budget for " + getMonth();



function getMonth() {
    return months[month];
    }