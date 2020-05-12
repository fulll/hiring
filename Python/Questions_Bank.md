# How to get indices of N maximum values in a NumPy array?

Ans: We can get the indices of N maximum values in a NumPy array using the below code:

import numpy as np
arr = np.array([1, 3, 2, 4, 5])
print(arr.argsort()[-3:][::-1])

Output [ 4 3 1 ]

# Mention the use of // operator in Python?

It is a Floor Divisionoperator , which is used for dividing two operands with the result as quotient showing only digits before the decimal point. For instance, 10//5 = 2 and 10.0//5.0 = 2.0.

# What is the difference between a list and a tuple?

I’ve been asked this question in every python / data science interview I’ve ever had. Know the answer like the back of your hand.
Lists are mutable. They can be modified after creation.
Tuples are immutable. Once a tuple is created it cannot by changed
Lists have order. They are an ordered sequences, typically of the same type of object. Ie: all user names ordered by creation date, ["Seth", "Ema", "Eli"]
Tuples have structure. Different data types may exist at each index. Ie: a database record in memory, (2, "Ema", "2020–04–16") # id, name, created_at

# What would be the output of the following?

# 1

a = [1,2,3]
b = a
c = [1,2,3]

-- 1
print(a == b)
print(a == c)
response:
#=> True
#=> True

-- 2
print(a is b)
print(a is c)
response:
#=> True
#=> False

To go further, we can verify this by printing their object id’s.
print(id(a)) #=> 4369567560
print(id(b)) #=> 4369567560
print(id(c)) #=> 4369567624

c has a different id than a and b.

# 2 Looking at the below code, write down the final values of A0, A1, ...An.

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

Answer
A0 = {'a': 1, 'c': 3, 'b': 2, 'e': 5, 'd': 4} # the order may vary
A1 = range(0, 10) # or [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] in python 2
A2 = []
A3 = [1, 2, 3, 4, 5]
A4 = [1, 2, 3, 4, 5]
A5 = {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}
A6 = [[0, 0], [1, 1], [2, 4], [3, 9], [4, 16], [5, 25], [6, 36], [7, 49], [8, 64], [9, 81]]

# Define a class named car with 2 attributes, “color” and “speed”. Then create an instance and return speed.

class Car :
def **init**(self, color, speed):
self.color = color
self.speed = speed
car = Car('red','100mph')
car.speed
#=> '100mph'

# Q.39. Write a regular expression that will accept an email id. Use the re module.

> > > import re
> > > e=re.search(r'[0-9a-zA-Z.]+@[a-zA-Z]+\.(com|co\.in)\$','abc@gmail.com')
> > > e.group()
> > > ‘abc@gmail.com’
