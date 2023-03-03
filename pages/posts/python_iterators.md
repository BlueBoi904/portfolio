---
title: Python Iterators 
date: 2022/12/12
description: Learn how to properly use Python's built-in methods to handle iterators. 
tag: web development, python, coding, iterators
author: Cliff Mirschel
---

# Python Iterators

## 1) Avoid using For Loops in Python

Although the use of for loops in Python is a very common practice, there are many advantages to utilizing Python's built in methods when iterating over a data set.

While using a basic for-in loop in Python might have advantages in certain situations, typically that syntax can easily be replaced with faster, cleaner, and more reliable code. 

Lets take a look at the most common for loop syntax in Python, then we will optimize the code using built-in methods.


```
numbers = [1,2,3,4]
result = 0

for num in numbers:
    result += num

print(result)
```

Using the built-in sum() method in python, we can pass in any iterable and a starting index (optional), and python will sum all of the elements in the iterable.

> Remember, the sum() method will accept any iterable as the first parameter, and an (optional) starting index as the second parameter.
```
# Optimized solution using sum() => sum(iterable, start(optional))

numbers = [1,2,3,4]
result = sum(numbers)

print(result)
```

> To learn more about the built-in sum() method in Python => [documentation](https://www.programiz.com/python-programming/methods/built-in/sum).

## 2) Use enumerate(iterable) instead of for-in-range

Another great tool I reccomend using when coding in Python is the enumerate() method. This method will iterate over a given iterable, and will give you access to the index and value of each iteration. 

Both examples show code producing identical output, however, the second example using enumerate() greatly reduces the risk of errors and provides cleaner, readable code.

```
# Using for * in range(len(*)) syntax
numbers = [10,20,22,30]
for idx in range(len(numbers)):
    print(idx, numbers[idx])

# Output =>  
0 10
1 20
2 22
3 30

```

```
# Using enumerate()
numbers = [10,20,22,30]
for idx, val in enumerate(numbers):
    print(idx, val)

# Output =>
0 10
1 20
2 22
3 30
```

> Remember, the enumerate() method will accept any iterable as the first parameter, and an (optional) starting index as the second parameter.

```
# Using enumerate()
numbers = [10,20,22,30]
for idx, val in enumerate(numbers, start=1):
    print(idx, val)

# Output =>
1 10
2 20
3 22
4 30
```
Using enumerate helps reduce errors in code by giving access to both the index and current val at each index right out of the box.

> To learn more about the built-in enumerate() method in Python => [documentation](https://www.programiz.com/python-programming/methods/built-in/enumerate).

## 3) Use zip()

When we need to iterate over two seperate iterables concurrently, the built-in zip() method is the perfect solution to our problem.



```
a = [1, 2, 3]
b = ["a","b", "c"]

for idx in range(len(a)):
    print(a[idx], b[idx])

# Output =>  
1 a
2 b
3 c
```

```
a = [1, 2, 3, 4]
b = ["a","b", "c"]

for idx in range(len(a)):
    print(a[idx], b[idx])

# Output => "IndexError: list index out of range"  
```

To avoid these errors, lets use the built-in zip() method. The zip() method will automatically stop at the shorter of the two lists preventing application breaking errors. 

> Remember, The zip() method will automatically stop at the shorter of the two lists preventing application breaking errors.

```
a = [1, 2, 3]
b = ["a","b", "c"]

for val1, val2 in zip(a,b):
    print(val1, val2)

# Output =>  
1 a
2 b
3 c  
```

> To learn more about the built-in zip() method in Python => [documentation](https://www.programiz.com/python-programming/methods/built-in/zip).

## 4) Think Lazy, Use Generators!!

If you don't already know what a generator is, I suggest reading this [documentation](https://www.programiz.com/python-programming/generator) to help clear some things up. 

To put it simply, Python generators are a simple (_lazy_) way of creating _iterators_. A generator is a function that returns an object (iterator) which we can iterate over (one value at a time).

### Generator expressions   

Simple generators can be easily created on the fly using generator expressions. It makes building generators easy.

Similar to the lambda functions which create anonymous functions, generator expressions create anonymous generator functions.

The syntax for generator expression is similar to that of a list comprehension in Python. But the square brackets are replaced with round parentheses.

The major difference between a list comprehension and a generator expression is that a list comprehension produces the entire list while the generator expression produces one item at a time.

They have lazy execution ( producing items only when asked for ). For this reason, a generator expression is much more memory efficient than an equivalent list comprehension.

Define a generator expression like so => 

```
nums = [1,2,3]
res = (num for num in numbers) # => Generator expression
```

Take a look at the following code examples to see generator expressions in action!
```
events = [("learn",5), ("learn",10), ("relaxed",20)]
mins_studied = 0

for event in event:
    if event[0] == "learn":
        mins_studied += event[1]

print(mins_studied)

# Output => 15
```

```
events = [("learn",5), ("learn",10), ("relaxed",20)]

study_times = (event[1] for event in events if event[0] == "learn") # => Generator expression
mins_studied = sum(study_times)

print(mins_studied)

# Output => 15
``` 

> To learn more about generators in Python => [documentation](https://www.programiz.com/python-programming/generator).
## Summary

To summarize, we've discussed several of the most common built-in methods in Python, and how to properly use them. 

We've also learned how to best use **generators** in Python, and the major differences between generator and regular functions. 

I certainly hope you've learned something new while reading this post, and for more content like this, please check out the programming blog  => [here](https://www.cliffmirschel.io/posts). 

Best Wishes, 

Cliff