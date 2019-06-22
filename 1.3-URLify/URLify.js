// Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

const URLify = (str) => {
  str = str.split('')
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      str[i] = '%20'
    }
  }
  return str.join('')
}

console.log(URLify('testing one two'))
console.log(URLify('nothing-changed'))
console.log(URLify(' one last one to test '))
console.log(URLify(' '))