//fibanacciseries

let n1=0;
let n2=1;
let nextTerm;
let numberOfTerms =7;
     for (let i=1; i<=numberOfTerms; i++){
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
     }