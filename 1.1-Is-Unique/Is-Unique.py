#  Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

def isUnique(str):
  newDict = {}
  for x in str:
    if x in newDict.keys():
      return False
    else:
      newDict[x] = 0
  return True

print(isUnique('what'))
print(isUnique('straight'))
print(isUnique('oneMoretest'))
print(isUnique(' '))