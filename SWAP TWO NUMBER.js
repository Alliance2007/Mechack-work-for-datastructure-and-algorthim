
function swap() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

  
    [num1, num2] = [num2, num1];

    
    document.getElementById("num1").value = num1;
    document.getElementById("num2").value = num2;

    alert("The first number becomes " + num1 + " and the second number becomes " + num2);
}


//back
   