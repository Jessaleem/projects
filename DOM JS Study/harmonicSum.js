function harmonicSum(n){
  let result = 0;
  if (n===1) return n
  for (let i=2; i<=n; i++){
    result += 1/i
  }
  return result + 1
}
console.log(harmonicSum(4))

//Recursión
function harmonicSumRec(n){
  if (n<2) return n
  result = 1/n
  return result + harmonicSumRec(n-1)
  
}
console.log(harmonicSumRec(4))
