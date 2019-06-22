// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const isUnique = (str) => {
  let newObj = {}
  for (let i = 0; i < str.length; i++) {
    if (str[i] in newObj) {
      return false
    } else {
      newObj[str[i]] = 0
    }
  }
  return true
}

console.log(isUnique('what'))
console.log(isUnique('straight'))
console.log(isUnique('oneMoretest'))
console.log(isUnique(' '))