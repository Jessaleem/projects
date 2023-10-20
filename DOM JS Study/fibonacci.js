/*function fibonacci(n){
  let result = 0;
  let arr = [0,1]
  let aux = 0;
  if(n===0){
    result = 0;
  }
  if(n===1){
    result = 1;
  }
  for (let i = 0; i<= n; i++){
    aux = arr[i]+arr[i+1]
    arr.push(aux)
    result = arr[n]
  }
  return result
} */

/*function fibonacci(n){
  let n1 = 0;
  let n2 = 1;
  if (n<2){
    return n
  }
  for (let i=2; i<=n; i++){
    const temp = n1+n2;
    n1 = n2;
    n2 = temp
  }
  return n2
}*/

// recursiva - Top Down Approach
function fibonacciRec(n){
  //caso trivial
  if (n<2) return n
  //caso general
  return fibonacciRec(n-1) + fibonacciRec(n-2)
}
console.log(fibonacciRec(4))