$\overline{a}$ -- mean (average) value
$|a|$ -- absolute value (modulo) or length of $a$
$\equiv$ -- тождество, эквивалентность
$5\equiv5$, for example

# Measurements

For $N$ measurements of $a$, the mean value of $a$ equals to

$$\overline{a}=\dfrac1N*\sum_{n=1}^{N} a_n =\dfrac1N*(a_1+a_2+...+a_N)$$

Python code
```python
a = [1.1, 1.2, 1.05, 1.07]
N = len(a)
S = 0
for n, val in enumerate(a):
	S += a[n]
mean = S/N
```



For each mesurement we can calculate a deviation
$$d_n=|\overline{a}-a_n|$$

Continue with Python
```python
d = [0]*N # creating empty array
for n, val in enumerate(a):
	d[n] = abs(a[n] - mean)
```

Standard deviation

$$\sigma=\sqrt{\dfrac{1}{N-1}*\sum_{n=1}^{N} d_n^2 }=\sqrt{\dfrac{1}{N-1}*(d_1^2+d_2^2+...+d_N^2) }$$

Final Python code
```python
a = [3.9, 3.5, 3.7, 3.4, 3.5]

N = len(a)
S = sum(a)
mean = S / N

d = [round(abs(val - mean), 2) for val in a]
squares_of_deviations = [round(val**2, 2) for val in d]
sigma = (sum(squares_of_deviations) / (N - 1))**0.5

print("Sum value = {}".format(S))
print("Mean value = {}".format(mean))
print("Deviations are {}".format(d))
print("Squares of deviations are {}".format(squares_of_deviations))
print("sigma = {}".format(sigma))
```
