// function countSheeps(arrayOfSheep) {
//   let result = 0;
//   for (let i=0; i<arrayOfSheep.length; i++){
//     if(arrayOfSheep[i]===true){
//       result=result+1
//     }
//   }
//   return result  
// }

// function countSheeps(arrayOfSheep) {
//   let result = arrayOfSheep.reduce((acc, word) => acc + (word===true?1:0), 0)
//   return result
// }

// let countSheeps = x => x.filter( s => s ).length;

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]))