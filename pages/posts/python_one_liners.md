---
title: 5 Powerful Python One-Liners
date: 2023/03/03
description: Learn some of the most common and powerful Python One-Liners.
tag: web development, python, coding, iterators, one-liner, programming
author: Cliff Mirschel
---

# 5 Powerful Python One-Liners

##  1. Reverse a list

One of the most common python One-Liners I find myself using often is a simple way to reverse a list in python. Simply use the colon notation to tell python to return a slice of the list reversed.

The syntax is as follows:

```
list[<start>:<stop>:<step>]
```

Below is a simple example of the code in action:

```
lst = [1,2,3,4,5]

print(lst[::-1]) # => [5,4,3,2,1]
```

> Note this is applicable for both lists and tuples in Python. 

##  2. Return days left in the year

We can write cool scripts that import external libraies on one line by using the import ____ ; syntax.

```
import datetime;print((datetime.date(2023,12,31)-datetime.date.today()).days)
```

This will return the days left in a calendar year by using the datetime library. Import datetime, then print the (last_day_of_year) - (curr_day_of_year) which gives us total days left in a year.

##  3. Reading files into a list

Using a tecnique in python called list comprehension, we can create a new list in shorthand notation syntax. This powerful syntax combined with some of python's built in methods can be used together to create powerful scripts with only one line of code.

With List Comprehension, we can simplfy the following code:

```
result = []

for i in range(10):
    result.append(i**2)
```

This code can be converted the equivalent code:

```
res = [i**2 for i in range(10)]
```

Using List Comprehension, we can read all lines from a file into a python list with this one-liner:

```
names[line.strip() for line in open("names.txt","r")]
```

> Note the .strip() method will remove trailing and leading empty spaces in a string if given no parameters to the method.

## 4. Lambda functions

Lambda function in Python are simple. While they don't change functionally they act as a shorthand notation to define functions. 

```
# Basic function

def sum(a,b):
    return a + b

# Lambda function 
sum = lambda x, y: x + y
```

This type of shorthand notation is often paired with built in higher-order functions such as map, filter, reduce, sorted, sum, any, and all. 

```
map(lambda x: x**2, [i for i in range(3)]) # <map object at 0x105558b80>
```
> Note, to convert result of the above into a list rather than an iterable, wrap the code using the list() function. => [0,1,4]

## 5. Palindrome Python One-Liner

Using the list reversal technique we saw eariler, we can easily check if a given phrase is a palindrome using this sweet one-liner.

```
phrase.find(phrase[::-1])
```

This will return a bool which will determine if the input phrase is a palindrome or not by comparing the given input phrase to the phrase in reverse.

# Bonus One-Liner (Swap two variables):

```a,b = b,a ````

Nice.


Thanks for reading, 

Cliff





