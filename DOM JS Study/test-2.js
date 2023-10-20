// function filterDuplicates(data) {
//   // Write your code here
//   let unique = [];
//   let newData = data.sort()
//   console.log(newData.len)
 
//   for(let i = 0; i < newData.length; i++){
//     console.log(newData[i])
//     let value = newData[i]

//     if(unique.indexOf(value) < 0){
//       unique.push(value)
//     }
//   }
//   return unique
 
//   // To debug: console.error('Debug messages...');
  
// }

function filterDuplicates(data) {
  const result = []
  const unique = data.filter((index) => {
    return result.hasOwnProperty(index)? false : (result[index]= true);
  }
}

console.log(filterDuplicates([7, 6, 4, 3, 3, 4, 9]))
