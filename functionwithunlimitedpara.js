function sumOfAllParameter(){
let sum = 0 ;
for(let i = 0; i <arguments.length; i++) sum += arguments[i];
return sum;
}

let result = sumOfAllParameter(1,2,3,4,5,6)
console.log(result);
