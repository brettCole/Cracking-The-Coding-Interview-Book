# Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

def URLify(str):
  str = list(str)
  for x, value in enumerate(str):
    if value == ' ':
      str[x] = '%20'
  return ''.join(str)

print(URLify('testing one two'))
print(URLify('nothing-changed'))
print(URLify(' one last one to test '))
print(URLify(' '))