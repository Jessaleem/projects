// function sumMatrix(mat) {
//   let sum = 0;

//   for (let i=0; i<mat.length; i++){
//     for (let j=0; j<mat[i].length; j++){
//       console.log(mat[i][j])
//       sum += mat[i][j] 
//     }
//   }
//   return sum
// }

// console.log(sumMatrix([[1,2,3],[4,5,6],[7,8,9]]))

// function printNumber(x) {
//   console.log(x); // imprime el número
//   if (x < 10) { printNumber(x + 1); }
// }
// printNumber(1); 
// console.log(printNumber(1))

// function fibonacci(n){
//  let result = [];
//  if (n===0){
//   result.push(1)
//  } else if (n===1){
//   result.push(1, 1)
//  } else if (n>=2) {
    
//  }
//  return result
// }

// console.log(fibonacci(3))

// function imprimirNumeros(num){
//   // let result = []
// for(let i=num; i>=1; i--){
//   console.log(i)
// }
// }
// imprimirNumeros(10)

// function imprimirNumerosRec(num){
// console.log(num)
// if (num>1) { imprimirNumerosRec(num-1) }
// }


// imprimirNumerosRec(10)

/*function factorial(num){
  let result = 1;
for (let i=2; i<=num; i++){
  result *= i
}
return result
}
console.log(factorial(5))*/

function factorialRec(num){
  if(num===1) return 1
  return num * factorialRec(num-1)
}
console.log(factorialRec(5))

