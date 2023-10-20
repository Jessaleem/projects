// function shortcut (string) {
//   let newString= string.replace(/[aeiou]/gi, '')
//   return newString
// }

function shortcut(string) {
  return string.split('').filter(str=> !'aeiou'.includes(str)).join('')
}
console.log(shortcut("hello"))
