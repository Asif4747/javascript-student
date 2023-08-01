function message(){
    var x1=document.getElementById("name").value;
    var x2=document.getElementById("class").value;
    var x3=document.getElementById("regno").value;
    var x4=document.getElementById("grade").value;
    
    let result = document.querySelector("#result")
    result.innerHTML = "Name : "+x1+" class : "+x2+" regno : "+x3+" grade : "+x4

    
}  