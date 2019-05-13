# Комбинации

<mermaid>
graph TB
    A(Важен порядок?) -- Да --> B(Нужно выбрать все n элементов?)
    A -- Нет --> C(Сочетания)
    B -- Да --> D(Перестановки)
    B -- Нет --> E(Размещения)
</mermaid>

А теперь остается лишь выбрать, есть повторения, или нет

| Тип          | Без повторений                        | С повторениями                                                               |
| ------------ | ------------------------------------- | ---------------------------------------------------------------------------- |
| Перестановки | $P_n = n!$                            | ${\overline{P}_n(r_1, ..., r_k) = \dfrac{n!}{r_1! * ... * r_k!}}$            |
| Размещения   | ${A_n^r = \dfrac{n!}{(n - r)!}}$      | $\overline{A}_n^r = n^r$                                                     |
| Сочетания    | ${C^r_n = \dfrac{n!}{r! * (n - r)!}}$ | ${\overline{C}_n^r = C_{n + r - 1}^r = \dfrac{(n + r - 1)!}{r! * (n - 1)!}}$ |

- $n$ -- общее количество объектов
- $r$ -- сколько объектов выбираем

<Block type="tasks">

1. A bag contains 36 marbles. There arc twelve blue marbles, eight red marbles, seven green marbles, five yellow marbles, and four white marbles. Without looking, you reach into the bag and pull out eight marbles. What is the probability you pull out:
    1. All blue marbles?
    2. Seven green and one yellow marble?
    3. No blue marbles?
    4. Four blue and four white marbles?
    5. At least one red and at least two yellow?

2. Find the ways 10 different books can be given to Luke, Leia and Han, if Luke is to receive 4 books, Leia is to receive 3 books and Han is to receive 3 books.

3. A group of five people are chosen from four males and seven females.
    1.	Determine how many possible groups can be chosen.
    2.	Determine how many possible groups can be formed consisting of two males and three females.
    3.	Determine how many possible groups can be formed consisting of all females.
    4.	What is the probability that the group will consist of all females.

4. The juniors at Sunny Valley High have 4 final exams (history, math, science, and literature) to take over 4 days.
    1.	How many different final exam schedules can be made.
    2.	How many different final exam schedules can be made if history and literature MUST be on consecutive days.
    3.	What is the probability that history and literature will be on consecutive days?

5. All standard license plates in Alaska start with three letters followed by three digits. If repetition is allowed, how many different license plates arc there?

</Block>