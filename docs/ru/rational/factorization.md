# Факторизация

https://cindyjs.org/gallery/main/EuclidsAlgorithm/

::: todo
Химические уравнения и насколько это пойдет в плюс
:::

Всё множество натуральных чисел можно поделить на две категории - простые и составные.

_Простое_ число - число, которое делится целым образом только на себя и на единицу. Ряд простых чисел начинается таким образом: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 и т.д. Число 2 – наименьшее и единственное чётное простое число. Остальные простые числа – нечётные. Также как и в случае с натуральными числами, не существует наибольшего простого числа.

Все остальные натуральные числа называются _составными_. Любое составное число можно единственным образом представить в виде произведения простых чисел.

Например, 12 - составное число. Из таблицы умножения известно, что $$12=3\*4$$

В свою очередь, 4 можно представить как произведение 2 на 2. Тогда
$$12=3*2*2$$

_Факторизация_ (от англ. factor - множитель) - это то, что мы только что сделали с числом 12 - разложили его на простые множители. Делать это удобно с помощью вертикальной черты.

Покажем на примере числа 18. Слева мы будем записывать результат деления, справа - число, на которое делим

$$
\begin{center}
\begin{tabular}{r|l}
{\color{blue}\text{исходное число}\to18} &
{\color{purple}_2}\gets_\\
{\color{brown}18:2\to9} &
{\color{purple}_3}\gets\text{делители}_\\
3 & {\color{purple}3\gets}\\
1 \\
\end{tabular}
\end{center}
$$

В результате разложения слева мы должны получить единицу. Умножив все числа справа, мы получим первоначальное число
$$2*3*3=18$$
Главное условие - использовать справа только простые числа.

Факторизация пригодится нам для работы с обыкновенными дробями, но об этом чуть позже.

Разложить на множители числа: 15, 16, 42, 23, 60, 210, 45, 27, 85, 56.

## БОД

Числа, на которые число делится нацело (то есть без остатка) называются _делителями_ числа. Например, делителями числа 12 являются
$$\divisors(12)=\{1, 2, 3, 4, 6, 12\}$$

_Больший общий делитель (БОД)_ двух чисел a и b - это наибольшее число, на которое оба числа a и b делятся без остатка.
$$\gcf(a, b)=\gcf(a, b)$$

В литературе обычно используется запись НОД (наибольший общий делитель). Чтобы в голове не было путаницы между НОД и НОК (наименьшим общим кратным, о котором мы поговорим позже), мы будем использовать запись БОД и МОК.

БОД можно искать не только для двух чисел. Для этого удобно пользоваться разложением на множители. Для примера найдем $\gcf(12, 18)$ - факторизацию для них мы уже сделали. Следующий шаг - выделим в обоих разложениях пары одинаковых чисел

$$
\begin{center}
\begin{tabular}[t]{ccccc}
\begin{tabular}[t]{r|l}
12 & \boxed{2}\\
6 & 2\\
3 & \boxed{3}\\
1 & \\
\end{tabular} & &
\begin{tabular}[t]{r|l}
18 & \boxed{2}\\
9 & \boxed{3}\\
3 & 3\\
1 & \\
\end{tabular} \\
\\
12=2*2*3 & &
18=2*3*3\\
\end{tabular}
\end{center}
$$

Тогда $\gcf(12, 18)$ будет равен произведению
$$\gcf(12, 18)=2\*3=6$$

Как видно, мы не умножили все выделенные числа, а взяли только по одному числу из каждой пары.

В качестве следующего примера найдем $\gcf(15, 30)$

$$
\begin{center}
\begin{tabular}[t]{ccccc}
\begin{tabular}[t]{r|l}
15 & \boxed{5}\\
3 & \boxed{3}\\
1 & \\
\end{tabular} & &
\begin{tabular}[t]{r|l}
30 & \boxed{3}\\
10 & 2\\
5 & \boxed{5}\\
1 & \\
\end{tabular} \\
\\
15=5*3 & &
30=3*2\*5\\
\end{tabular}
\end{center}
$$

Число 15 полностью вошло в разложение для 30. Очевидно, ведь $30=15\*2$. Тогда
$$\gcf(15, 30)=15$$

Еще пример. Вычислим БОД для 14 и 9

$$
\begin{center}
\begin{tabular}[t]{ccccc}
\begin{tabular}[t]{r|l}
14 & 7\\
2 & 2\\
1 & \\
\end{tabular} & &
\begin{tabular}[t]{r|l}
9 & 3\\
3 & 3\\
1 & \\
\end{tabular} \\
\end{tabular}
\end{center}
$$

Числа 14 и 9 имеют только один общий делитель - число 1. Такие натуральные числа называют _взаимно простыми_.

## Алгоритм Евклида

\gcf(64, 32)=
\gcf(11, 44)=
\gcf(32, 56)=
\gcf(54, 36)=
\gcf(256, 128)=

## МОК

_Кратное_ числа a - это число, которое делится на число a без остатка. Числа, кратные 4 (эти числа делятся на 4 без остатка): 4, 8, 12, 16 и т.д.
$$\multiples(4)=\{4, 8, 12, 16, \ld\}$$

Таблица умножения почти полностью состоит из кратных чисел. У любого числа количество кратных бесконечно, в отличие от количества делителей
$$\underbrace{1, 2, 4}_{\mbox{делители}}\qquad\underbrace{4, 8, 12, \ld, 40, 44, 48, \ld}_{\mbox{кратные}}$$

_Меньшим общим кратным (МОК)_ двух и более натуральных чисел называется наименьшее натуральное число, которое делится нацело каждым из этих чисел.

Рассмотрим алгоритм нахождения меньшего общего кратного на примере $\lcm(12, 18)$:

1. Найти БОД указанных чисел - этот пункт у нас уже выполнен. Но теперь мы выделим в разложении меньших чисел множители, которые не вошли в разложение бо́льшего числа, то есть числа 18. В нашем примере в 18 отсутствует 2 из числа 12

$$
\begin{center}
\begin{tabular}[t]{ccccc}
\begin{tabular}[t]{r|l}
12 & \boxed{2}\\
6 & _2_\\
3 & \boxed{3}\\
1 & \\
\end{tabular} & &
\begin{tabular}[t]{r|l}
18 & \boxed{2}\\
9 & \boxed{3}\\
3 & 3\\
1 & \\
\end{tabular} \\
\\
12=2**2**3 & &
18=2*3*3\\
\end{tabular}
\end{center}
$$

0. Добавим недостающие множители в разложение бо́льшего числа и запишем ответ

$$\lcm(12, 18)=2*3*3\*_2}=18_\textbf{2\*=36$$

Еще пример. Найдём $\lcm(12, 16, 24)$

$$
\begin{center}
\begin{tabular}[t]{ccccc}
\begin{tabular}[t]{r|l}
12 & 2\\
6 & 2\\
3 & 3\\
1 & \\
\end{tabular} & &
\begin{tabular}[t]{r|l}
16 & 2\\
8 & 2\\
4 & 2\\
2 & _2_\\
1 & \\
\end{tabular} & &
\begin{tabular}[t]{r|l}
24 & 2\\
12 & 2\\
6 & 2\\
3 & 3\\
1 &\\
\end{tabular} \\
\\
12=2*2*3 & &
16=2*2*2\*_2_ & &
24=2*2*2\*3\\
\end{tabular}
\end{center}
$$

Как видно из разложения чисел, все множители 12 вошли в разложение 24 (самого бо́льшего из чисел). Три двойки в 24 есть, поэтому в МОК добавляем только одну _2_ из разложения числа 16.
$$\lcm(12, 16, 24)=24\*_2_=48$$

Так как взаимно простые числа не имеют общих простых делителей, то их наименьшее общее кратное равно произведению этих чисел. Например, $\lcm(13, 4)$.

\lcm(1, 2)=
\lcm(9, 12)=
\lcm(16, 48)=
\lcm(4, 5, 6)=
\lcm(12, 60, 15)=
