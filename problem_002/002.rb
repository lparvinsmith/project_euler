#Even Fibonacci numbers
#find sum of even-valued terms whose values do not exceed four million

#get nth fibonacci number
def fibonacci(n)
  if n <= 1
    return n
  else
    return fibonacci(n - 1) + fibonacci(n - 2)
  end
end

#get sum of even fibonacci values from 1 to max
def sum_fib_evens(max)
  sum = 0
  n = 1
  while fibonacci(n) < max
    if fibonacci(n).even?
      sum += fibonacci(n)
    end
    n += 1
  end
  return sum
end


