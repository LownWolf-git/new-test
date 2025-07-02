import numpy as np

def solve():
      n = int(input())

      element = [int(input()) for _ in range(n)]

      original_array = np.array(elements)

      print("Original array:")
      print(original_array)

      reversed_array = np.flip(original_array)

      concatenated_array = np.concatenate((original_array,reversed_array))

      expanded_array = np.expand_dims(concatenated_array, axis=0)

      print("Expanded array:")
      print(expanded_array)
solve()