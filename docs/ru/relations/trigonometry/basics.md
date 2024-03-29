# Тригонометрия

## Идея

В какой-то момент людям потребовалось связать значения углов треугольника с длинами его сторон. Так и родилась тригонометрия (лат. _trigon_ - треугольник, _metrio_ - измерять).
Связь оказалась непрямая -- мы же не можем приравнять градусы к метрам. Поэтому изобрели специальные тригонометрические функции, которые исходя из величины какого-либо угла, дают информацию о соотношении сторон в треугольнике.

## Основные соотношения

::: todo

Картинка треугольника с углом альфа, лежащим напротив стороны

:::

Синус - отношение противолежащего катета к гипотенузе

$$\sin\alpha = \dfrac{a}{c}$$

Косинус - отношение прилежащего катета к гипотенузе

$$\cos\alpha = \dfrac{b}{c}$$

Тангенс - отношение противолежащего катета к прилежащему

$$\tan\alpha = \dfrac{a}{b}$$

Также тангенс может быть найден как

$$\tan\alpha = \dfrac{\sin \alpha}{ \cos \alpha}$$

Каждая из этих функций безразмерна, то есть ни в чём не измеряется.

::: todo

Пример с нахождением тригонометрической функции в каком-либо треугольнике. Метры делятся на метры, вуаля

:::

Синус и косинус любого угла также всегда будут лежать в диапазоне от -1 до 1

$$-1 \loe \sin\alpha \loe 1$$

$$-1 \loe \cos\alpha \loe 1$$

Почему? Потому что невозможна такая ситуация, при которой сохранится угол в 90 градусов и при этом один из катетов будет больше гипотенузы.

Конечно же, существуют и другие функции. Важно ещё раз подчеркнуть -- синус, косинус и тангенс не смогут нам предоставить информацию о том, какой длины будут стороны в треугольнике. Они смогут ответить лишь на вопрос о том, каково соотношение между сторонами.

::: todo

- периодичность тригонометрических функций
- главное тригонометрическое тождество

:::

## Обратные действия

Что же с обратным действием? Возможно ли найти угол по значению его синуса? Короткий ответ -- да

$$\arcsin(0.5) = 30 \circ$$

Функции, обратные к обычным тригонометрическим? называются арочными.

Но выражение выше не слишком верно. Проблема заключается в том, что функции синуса, косинуса, тангенса и т.д. периодические, а значит одному значению синуса может соответствовать бесконечное количество углов. Поэтому официально всё должно быть записано следующим образом

$$\arcsin(0.5) = 30^{\circ} + 2\pi n, n \in \Z$$

## Треугольники без прямого угла

Функции синуса, косинуса и тангенса определены для прямоугольного треугольника. Что же делать в случае, когда в треугольнике нет ни одного прямого угла?

::: todo

Рисунок непрямоугольного треугольника

:::

В этом случае на помощь приходят две мощные теоремы

### Теорема синусов

$$\dfrac{a}{\sin\alpha} = \dfrac{b}{\sin\beta} = \dfrac{c}{\sin\gamma}$$

Как видим, отношение между синусом угла и противолежащей стороной в треугольнике не зависит от того, какую пару (синус + противолежащая сторона) мы выбираем.

::: todo

Уточнить формулировку

:::

### Теорема косинусов

$$c^2 = a^2 + b^2 - 2ab\cos\gamma$$

Формула сильно похожа на теорему Пифагора. Появилось лишь одно новое слагаемое, которое как раз отвечает за "непрямоугольность" треугольника. Если угол $\gamma$ острый, то косинус будет положительным, а значит длина стороны $c$ будет уменьшаться. И наоборот, в случае тупоугольного треугольника, косинус будет отрицательным, поэтому $c$ будет больше чем в прямоугольном треугольнике с такими же сторонами $a$ и $b$.

Теорема синусов и теорема косинусов работают и в прямоугольном треугольнике. Только в нём они излишни -- с помощью обычного синуса и косинуса можно решить любую задачу за меньшее количество телодвижений.
