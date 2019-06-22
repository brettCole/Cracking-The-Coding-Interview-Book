# Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string.

def URLify(str)
  str = str.split(//)
  str.each_with_index do |char, i|
    if char == ' '
      str[i] = '%20'
    end
  end
  return str.join()
end

puts URLify('testing one two')
puts URLify('nothing-changed')
puts URLify(' one last one to test ')
puts URLify(' ')