## Единицы измерения\\(units)

В наиболее широко используемой международной системе единиц СИ (франц. _Le Syst\`{e}me International d’Unit\'{e}s}, \textit{SI_), за базовые величины приняты единица расстояния [метр, м, meter, m] и единица времени [секунда, с, second, sec]. Как можно было заметить, единицы измерения обычно записываются в квадратных скобках.

Из единиц измерения расстояния и времени получают единицы измерения скорости. Проделаем это, подставив в уравнение движения известные единицы измерения
$$\text{m}=v\*\text{sec}$$
Поделив на sec слева и справа, получаем
$$v=dfrac\text{m}}{\text{sec}}$$
Таким образом, скорость измеряется в м/сек. Другие единицы измерения, конечно же, тоже используются. На спидометре (_speed+meter_) в автомобиле мы увидим км/ч, расстояние в космосе измеряется в световых годах (light-years), на море используются мили (miles) и узлы (knots). Но на данном этапе своего развития человечество переходит к использованию СИ, добавляя к ней математические степени.
Например, $10000$ км можно записать с помощью $10^7$ м.

Зачем? Почему бы не сохранить многообразие единиц измерения?

Примеры говорят за себя намного лучше всякой логики и здравого смысла. Так что совершим небольшой экскурс в 1998 год.
\subsection\*{Mars Climate Orbiter}
MCO был запущен в декабре 1998. Его миссия заключалась в том, чтобы выйти на орбиту Марса и зафиксировать атмосферные условия, температуру, погодные условия, содержание водяных паров и изменения поверхности. MCO добрался до Марса, а после растворился в его атмосфере.

Провал произошел за счет невероятно простой и маленькой ошибки, которая обошлась NASA в $125$ миллионов долларов. Производитель _Lockheed Martin_ рассчитывал импульс, произведенный двигателями, используя метрическую систему (ньютон-секунды). В собственных расчетах NASA решило, что используются стандартные единицы (фунт-секунды).

@image movement/orbiter
\caption{Mars Climate Orbiter}

В результате орбитальный аппарат вошел в атмосферу Марса на траектории ниже, чем необходимо, и двигатели не справились с перегревом.

Что самое неловкое в этой миссии, так это то, что провал можно было предотвратить. Большинство ошибок происходит, когда космический корабль уже в космосе и слишком поздно исправлять ошибку. В этом случае ошибка случилась за $10$ месяцев, когда аппарат был еще на Земле. Несмотря на бесчисленное количество людей, которые проверяли работоспособность космического аппарата, никто не заметил ошибку.

\subsection\*{Перевод единиц измерения}
До тех пор, пока существуют разные единицы измерения, полезно знать, как переходить от одних единиц к другим.
Например, как перевести ураганный ветер со скоростью $120$ km/h в m/sec?

Так как $1$ km=$1000$ m, а $1$ h содержит $3600$ sec ($60$ min $_$ $60$ sec), то просто домножим $120$ на $1000/3600$
$$120_dfrac\text{km}}{\text{h}}=120*dfrac1000}{3600}*dfrac\text{m}}{\text{sec}}=dfrac1200}{36}_dfrac\text{m}}{\text{sec}}\simeq33,3_dfrac\text{m}}{\text{sec}}$$

## Движение (motion)

В простейшем случае, уравнение движения записывается с помощью трех переменных
$$\boxed{S=v*t}$$
Здесь $S$ –- путь ($displacement$), $v$ –- скорость ($velocity$), $t$ –- время ($time$). Также существует реже встречающийся вариант записи
$$D=s*t,$$
где $D$ –- $distance$, $s$ -- $speed$, $t$ –- $time$.

Уравнение не учитывает ускорение и замедление, то есть в нашей математической модели любой объект сразу же набирает установленную скорость и не меняет её за время пути.

В случае с длинными расстояниями и большими отрезками времени такая модель дает хорошее приближение. Но если нам хочется узнать, за какое время стеклянный шар долетит с 5-го этажа до земли и разобьется, или сколько проедет автомобиль, прежде чем наберет скорость в 100 км/ч, то наши допущения дают сбой.

В физике, чаще всего, все переменные обозначаются по первой букве величины, которою они обозначают. Чуть позже мы столкнемся с $F$ – силой (_force}), $a$ – ускорением (\textit{acceleration}), $m$ – массой (\textit{mass}), $E$ – энергией (\textit{energy_) и другими величинами.

\begin{tabular}{|l|l|} \hline
Planet & D from the Sun (km) \\ \hline
Earth & $149.6$ million \\ \hline
Jupiter & $778500000$\\ \hline
Mars & $0.228$ billion \\ \hline
Mercury & $58$ million \\ \hline
Neptune & $4500000000$\\ \hline
Saturn & $1.43$ billion \\ \hline
Uranus & $2880000000$\\ \hline
Venus & $108$ million \\ \hline
\end{tabular}

### Световой год (light-year)

Световой год –- это расстояние, которое преодолевает свет за один год. Так как свет в вакууме имеет огромную постоянную скорость, равную
$$c=299792458\text{ m/sec},$$
то будет интересно, какое огромное расстояние он сможет пролететь за целый год.
Вспомним нашу формулу, преобразуя её для наших нужд
$$\text{1 ly}=c*\text{1 year}$$
1 год равен
$$\text{1 year}=\text{365 days}=365*24\text{ hours}=365*24*60\text{ min}$$$$=365*24*60*60\text{ sec}=31536000\text{ sec}$$
Таким образом, световой год равен
$$1\text{ световой год}=299792458\text{ }dfrac\text{м}}{\text{с}}*31536000\text{ с}=$$
$$=9454254955488000\text{ м}\simeq9\*10^{15}\text{ м}$$

### От Солнца до Земли

Космос славится своими большими величинами – длинами, временем, скоростями, массами и т.д. Трудно представить, но Земля (вместе с нами) движется вокруг Солнца со средней скоростью $30$ км в секунду (не в час!), т. е. со скоростью $108$ тыс. км в час. Для сравнения –- длина экватора равна лишь $40$ тыс. км.

Посмотрев на небо (как ночное, так и дневное) мы не увидим на нем ничего настоящего. Из-за огромных расстояний даже чрезвычайно быстрый свет не успевает долететь до нас сразу, ему требуется какое-то время.

Посчитаем, сколько времени ему потребуется, чтобы долететь от ближайшей от нас звезды до нас.

Среднее расстояние от нас до Солнца равно $149600000$ км. Скорость света мы уже знаем, так что просто преобразуем нашу формулу
$$t=dfracS}{c}=dfrac1496*10^5\text{ km}}{299792458\text{ m/sec}}=dfrac1496*10^8\text{ m}}{299792458\text{ m/sec}}=$$
$$=499.012\text{ }dfrac{\text{1/sec}}=499.012\text{ sec}\simeq8,3\text{ min}$$
Для того, чтобы произвести первое деление, нам пришлось преобразовать километры в метры, так как скорость света измеряется в м/с.

# Перемещение

## Перемещение в воде

**Дано:**
Downstream -- по течению, Upstream -- против течения
$D_{up} = 4\ km$
$D_{up} = 33\ km$
$t_{down} = 1\ h$
$v_{stream} = 6.5\ \dfrac{km}{h}$

**Найти:**

$V_{boat} = \ ?\ \dfrac{km}{h}$

**Решение:**

$\dfrac{D_{up}}{V_{boat} - V_{flow}} - \dfrac{D_{down}}{V_{boat} + V_{flow}} = t_{up}$

$\dfrac{4}{x - 6.5} + \dfrac{33}{x + 6.5} = 1$

$4( x + 6.5 ) + 33( x - 6.5 ) = 1( x - 6.5 )( x + 6.5 )$

$4x + 25 + 33x - 214.5 = x^{2} - 42.25$;

$x^{2} - 37x + 146.25 = 0$

$\Delta = b^2 - 4ac = ( - 37 )^{2} - 4*146.25 = 784 > 0;$

$x_{1} = \dfrac{- b - \sqrt{\Delta}}{2a} = \dfrac{37 - 28}{2} = 4.5$ -- лишний корень

$x_{2} = \dfrac{- b - \sqrt{\Delta}}{2a} = \dfrac{37 + 28}{2} = 32.5$ -- собств.скорость
теп.

**Ответ:**
$32.5\, \text{km} \text{h}$ -- собственная скорость теплохода.

В машине едет дама, совсем недавно получившая права. Двигаясь со скоростью 30 км/ч, машина за один час взбирается на гору. Но, преодолев подъем, дама обнаруживает, что забыла дома телефон, и немедленно — совсем не задержавшись на вершине — поворачивает обратно. С горы машина спускается со скоростью 60 км/ч. Чему равна средняя скорость движения?
ПОДСКАЗКА. Ответ 45 км/ч — неверный.

Велосипедистка, поднимаясь на гору, движется со скоростью 10 км/ч. Дорога заняла один час. С какой скоростью надо ехать вниз, чтобы средняя скорость была равна 20 км/ч, если длина подъема и спуска одинакова?
Не празднуйте победу преждевременно: ответ 30 км/ч — неверный.

Таракан Валентин объявил, что умеет бегать со скоростью 50 м/мин. Ему не поверили, и правильно: на самом деле Валентин всё перепутал и думал, что в метре 60 см, а в минуте 100 секунд. С какой скоростью на самом деле бегает таракан ?

## Движение с ускорением

Мяч брошен вертикально вверх со скоростью 40 м/c. Через сколько секунд мяч окажется на высоте в 60 метров?

Поезд, движущийся после начала торможения с ускорением 0,40 м/с2, через 15 с имел скорость 10 м/с. Найдите пройденный путь за это время.

Лифт Останкинской телевизионной башни заканчивает свое движение после прохождения 49 м за 14 с. Найдите ускорение и начальную скорость лифта.

A first stone is dropped from the roof of a building. 2.40s after that, a second stone is thrown straight down with an initial speed of 33.0 m/s, and it is observed that the two stones land at the same time.

1. How long did it take the first stone to reach the ground?
2. How high is the building?
3. What are the speeds of the two stones just before they hit the ground?