from time import perf_counter
import sys
import math
from functools import reduce

# Helper function for factors


def find_factors(n):
    return set(reduce(list.__add__,
                      ([i, n//i] for i in range(1, int(n**0.5) + 1) if n % i == 0)))


# Main code
number = int(sys.argv[1])
start_time = perf_counter()
square = number * number
cube = square * number
square_root = round(math.sqrt(number), 2)
cube_root = round(math.pow(number, (1/3.0)), 2)
factors = find_factors(number)
end_time = perf_counter()
time_elapsed = (end_time - start_time)*1000
print("<hr/><strong>PYTHON RESULTS</strong><hr/>Square = "+str(square) + "<br/>Cube = "+str(cube)+"<br/>Square Root = "+str(square_root) +
      "<br/>Cube Root = "+str(cube_root)+" <br/> Factors = "+str(factors)+"<br/><hr/>Time elapsed for the operation = "+str(time_elapsed)+"ms<hr/>")
sys.stdout.flush()
