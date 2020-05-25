# 1. How to get indices of N maximum values in a NumPy array?

# 2. Mention the use of // operator in Python?

# 3. What is the difference between a list and a tuple?

# 4. What would be the output of the following?

## 1

a = [1,2,3]
b = a
c = [1,2,3]

-- 1
print(a == b)
print(a == c)

-- 2
print(a is b)
print(a is c)

## 2 Looking at the below code, write down the final values of A0, A1, ...An.

A0 = dict(zip(('a','b','c','d','e'),(1,2,3,4,5)))
A1 = range(10)
A2 = sorted([i for i in A1 if i in A0])
A3 = sorted([A0[s] for s in A0])
A4 = [i for i in A1 if i in A3]
A5 = {i:i*i for i in A1}
A6 = [[i,i*i] for i in A1]

If you don't know what zip is don't stress out. No sane employer will expect you to memorize the standard library. Here is the output of help(zip).

zip(...)
zip(seq1 [, seq2 [...]]) -> [(seq1[0], seq2[0] ...), (...)]

Return a list of tuples, where each tuple contains the i-th element
from each of the argument sequences. The returned list is truncated
in length to the length of the shortest argument sequence.
If that doesn't make sense then take a few minutes to figure it out however you choose to.

# 5. Define a class named car with 2 attributes, “color” and “speed”. Then create an instance and return speed.

# 6. Write a regular expression that will accept an email id. Use the re module.

# 7. If you have to choose between a list, set, and a dictionary to store 10 million integers, what will you use? Bear in mind that you would later like to query the frequency of a number within the dataset.
