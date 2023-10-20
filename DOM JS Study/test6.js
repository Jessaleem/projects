// function solution(str){
//   const result = []
//   const array = [...str]
//   for (let i = array.length - 1; i>=0; i--){
//     result.push(array[i])
//   }
//   return result.join('')
// }


// function solution(str){
//   return str.split('').reverse().join('')
// }

// function solution(str){
//   let result = ''
//   for (let i = str.length - 1; i>=0; i--){
//     result += str[i]
//   }
//   return result
// }

function solution(str){
  let result = ''
  for (let i = 1; i<str.length + 1 ; i++){
    result += str.at(-i)
  }
  return result
}


console.log(solution('world'))

