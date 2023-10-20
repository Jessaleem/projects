// function hotpo(n){
//   if(n<0){
//     return 'Number must be positive';
//   }

//   let counter = 0

//   while (n>1){
//     if(n % 2 === 0){
//       n = n/2
//       counter ++ 
//     } else {
//       n = ((3*n)+1)
//       counter ++
//     } 
//   }
//   return counter
// }

function hotpo(n){
  if(n<0){
    return 'Number must be positive';
  }

  let counter = 0

  while (n>1){
    n = (n%2 ? (3 * n)+ 1 : n / 2 )
    counter++
  }
  return counter
}

console.log(hotpo(0))