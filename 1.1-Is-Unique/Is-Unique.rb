# Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

def isUnique(str)
  newHash = {}
  str.each_char { |char|
    if newHash.key?(char)
      return false
    else
      newHash[char] = 0
    end
  }
  return true
end

puts isUnique('what')
puts isUnique('straight')
puts isUnique('oneMoretest')
puts isUnique(' ')