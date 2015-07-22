# Sum square difference
# Problem 6
# make solution work for any range of numbers

def sum_of_squares(min,max)
  sum = 0
  (min..max).each do |num|
    sum += num**2
  end
  return sum
end

def square_of_sums(min,max)
  sum = 0
  (min..max).each do |num|
    sum += num
  end
  return sum**2
end

def difference(min, max)
  square_of_sums(min, max) - sum_of_squares(min,max)
end
