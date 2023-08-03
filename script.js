var Sname = [];
var Sclass = [];
var Sreg = [];
var Sgrade = [];

var n = 1;
var x = 0;

function AddRow(){
 
    var AddRown = document.getElementById('table');
	var NewRow = AddRown.insertRow(n);
    

    Sname[x] = document.getElementById("name").value;
    Sclass[x] = document.getElementById("class").value;
    Sreg[x] = document.getElementById("regno").value;
    Sgrade[x] = document.getElementById("grade").value;

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);

    cel1.innerHTML = Sname[x];
    cel2.innerHTML = Sclass[x];
    cel3.innerHTML = Sreg[x];
    cel4.innerHTML = Sgrade[x];

    n++;
    x++;
}