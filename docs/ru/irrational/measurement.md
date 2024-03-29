# Измерения

$\overline{a}$ -- mean (average) value

For $N$ measurements of $a$, the mean value of $a$ equals to

$$\overline{a} = \dfrac{1}{N} * \sum_{n = 1}^{N} a_n = \dfrac1N * (a_1 + a_2 + ... + a_N)$$

Python code

```python
a = [1.1, 1.2, 1.05, 1.07]
N = len(a)
S = 0

for n, val in enumerate(a):
     S += a[n]

mean = S / N
```

For each mesurement we can calculate a deviation
$$d_n = |\overline{a} - a_n|$$

Continue with Python

```python
d = [0] * N # [0, 0, 0, 0, ...]

for n, val in enumerate(a):
    d[n] = abs(a[n] - mean)
```

Standard deviation

$$\sigma = \sqrt{\dfrac{1}{N - 1} * \sum_{n = 1}^{N} d_n^2 } = \sqrt{\dfrac{1}{N-1}*(d_1^2+d_2^2+...+d_N^2) }$$

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

## Международная система единиц

В наиболее широко используемой международной системе единиц СИ (франц. _Le Systeme International d’Unites, SI_), за базовые величины приняты единица расстояния [метр, м, meter, m] и единица времени [секунда, с, second, sec]. Как можно было заметить, единицы измерения обычно записываются в квадратных скобках.

Из единиц измерения расстояния и времени получают единицы измерения скорости. Проделаем это, подставив в уравнение движения известные единицы измерения

$$D = vt -> \text{m} = v * \text{sec}$$

Поделив на sec слева и справа, получаем

$$v = \dfrac{D}{t} = \left[ \dfrac{\text{m}}{\text{sec}} \right]$$

Таким образом, скорость измеряется в м/сек. Другие единицы измерения, конечно же, тоже используются. На спидометре (_speed+meter_) в автомобиле мы увидим км/ч, расстояние в космосе измеряется в световых годах (light-years), на море используются мили (miles) и узлы (knots). Но на данном этапе своего развития человечество переходит к использованию СИ, добавляя к ней математические степени.
Например, 10000 км можно записать с помощью 10<sup>7</sup> м.

Зачем? Почему бы не сохранить многообразие единиц измерения?

Примеры говорят за себя намного лучше всякой логики и здравого смысла. Так что совершим небольшой экскурс в 1998 год.

::: todo

Mars Climate Orbiter pic

:::

MCO был запущен в декабре 1998. Его миссия заключалась в том, чтобы выйти на орбиту Марса и зафиксировать атмосферные условия, температуру, погодные условия, содержание водяных паров и изменения поверхности. MCO добрался до Марса, а после растворился в его атмосфере.

Провал произошел за счет невероятно простой и маленькой ошибки, которая обошлась NASA в 125 миллионов долларов. Производитель Lockheed Martin рассчитывал импульс, произведенный двигателями, используя метрическую систему (ньютон-секунды). В собственных расчетах NASA решило, что используются стандартные единицы (фунт-секунды).

В результате орбитальный аппарат вошел в атмосферу Марса на траектории ниже, чем необходимо, и двигатели не справились с перегревом.

Что самое неловкое в этой миссии, так это то, что провал можно было предотвратить. Большинство ошибок происходит, когда космический корабль уже в космосе и слишком поздно исправлять ошибку. В этом случае ошибка случилась за 10 месяцев, когда аппарат был еще на Земле. Несмотря на бесчисленное количество людей, которые проверяли работоспособность космического аппарата, никто не заметил ошибку.

## Перевод единиц измерения

До тех пор, пока существуют разные единицы измерения, полезно знать, как переходить от одних единиц к другим.

Например, как перевести ураганный ветер со скоростью 120 km/h в m/sec?

Так как $1 km = 1000 m$, а $1$ h содержит $3600$ sec ($60$ min = $60$ sec), то просто домножим $120$ на $1000/3600$

$120 \dfrac{\text{km}}{\text{h}} = 120 * \dfrac{1000}{3600} * \dfrac{\text{m}}{\text{sec}} = \dfrac{1200}{36} \dfrac{\text{m}}{\text{sec}} ~= 33.3 \dfrac{\text{m}}{\text{sec}}$

Более сложный пример. Разделим исходную единицу измерения на составляющие

$1000\ \dfrac{\text{g}}{\text{cm}^3} -> \dfrac{\text{kg}}{\text{dm}^3}$

Для начала разберем каждую единицу по отдельности

$1\ \text{g} = 10^{-3}\ \text{kg}$

$1\ \text{cm} = 10^{-1}\ \text{dm}$

Сделаем поправку на степени, используемые в формуле

$(1\ \text{cm})^{-3} = (10^{-1}\ \text{dm})^{-3}=10^{-1 * (-3)}\ \text{dm}^{-3}=10^3\ \text{dm}^{-3}$

Время подставлять!

$1000\ \text{g} * \text{cm}^{-3} = 10^3 * 10^{-3}\ \text{kg} * 10^{-1}\ \text{dm}^{-3} = 10^3 * 10^{-3} * 10^{3}\ \text{kg} * \text{dm}^{-3} = 1000\ \text{kg} * \text{dm}^{-3}$

::: todo

Переписать в виде дробей

:::
