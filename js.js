
document.getElementById("check").addEventListener("click", 
   
   function() {
    a =Number(document.getElementById("number1").value);
    b = Number(document.getElementById("number2").value);

     document.getElementById("result").innerHTML = ""; 

    if (a > b) {
        document.getElementById("result").innerHTML = a + " is the largest number.";
    }
    else if (b > a) {
        document.getElementById("result").innerHTML = b + " is the largest number.";
      }
    else
      {document.getElementById("result").innerHTML = "Both numbers are equal."; }

});





// 1111111111111function factoriall of any number
// function factorial(n){
//    let fact=1;

//    for (let r=1; r<=n; r++){

//       fact *=r;

//    }
//    return fact
// }
// let num= 5;
// console.log("the factor is " + num + "is:" + factorial(num))

// let n=5;
// function factorial(n) {
//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }

//     return result;
// }        

// console.log(factorial(n));
// 22222222222fibanacci series up to any number term




// 33333333 to  display the largest number
// let Number =[1,10,0,70,70,30];
// let largest = Math.max(...Number);
// console.log("The largest number is " + largest); 

