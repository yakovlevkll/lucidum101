# Геометрия (geometry)
### 1D
Линии (lines)
### 2D
\subsubsection{Трехугольники (triangles)}
\subsubsection{Четырехугольники (tetragons)}

\tikz \datavisualization [
school book axes,
all axes={unit length=5mm, ticks={step=2}},
visualize as smooth line]
data [format=function] {
var t : interval [0:2*pi];
func x = \value t _ cos(\value t r);
func y = \value t _ sin(\value t r);
};

\tikz [even odd rule]
\draw [general shadow={fill=red}](0,0) circle (.5) (0.5,0) circle (.5);

\tikz \datavisualization [
scientific axes=clean,
y axis={ticks={style={
/pgf/number format/fixed,
/pgf/number format/fixed zerofill,
/pgf/number format/precision=2}}},
x axis={ticks={tick suffix=${}^\circ$}},
visualize as smooth line/.list={1,2,3,4,5,6},
style sheet=vary hue]
data [format=function] {
var set : {1,...,6};
var x : interval [0:50];
func y = sin(\value x \* (\value{set}+10))/(\value{set}+5);
};

\tikz \datavisualization
[scientific axes={clean, end labels},
x axis={label=$x$}, y axis={grid={major also at=0}},
visualize as smooth line/.list={sin,cos,sin 2,cos 2},
legend={below, rows=2},
sin={label in legend={text=$\sin x$}},
cos={label in legend={text=$\cos x$}},
sin 2={label in legend={text=$\sin 2x$}},
cos 2={label in legend={text=$\cos 2x$}},
style sheet=strong colors]
data [set=sin, format=function] {
var x : interval[0:3*pi];
func y = sin(\value x r);
}
data [set=cos, format=function] {
var x : interval[0:3*pi];
func y = cos(\value x r);
}
data [set=sin 2, format=function] {
var x : interval[0:3*pi];
func y = sin(2*\value x r);
}
data [set=cos 2, format=function] {
var x : interval[0:3*pi];
func y = cos(2\*\value x r);
};

\tikz \datavisualization data group {function classes} = {
data [set=log, format=function] {
var x : interval [0.2:2.5];
func y = ln(\value x);
}
data [set=lin, format=function] {
var x : interval [-2:2.5];
func y = 0.5*(\value x);
}
data [set=squared, format=function] {
var x : interval [-1.5:1.5];
func y = (\value x)*(\value x);
}
data [set=exp, format=function] {
var x : interval [-2.5:1];
func y = exp(\value x);
}
};

\tikz \datavisualization [
school book axes,
x axis={label=$x$},
visualize as smooth line/.list={log, lin, squared, exp},
every data set label/.append style={text colored},
log= {label in data={text=$\log x$, when=y is -1,
text colored}},
lin= {pin in data={text=$x/2$, when=x is 2,
pin length=1ex}},
squared={pin in data={text=$x^2$, when=x is 1.1,
pin angle=230}},
exp= {label in data={text=$e^x$, when=x is -2}},
style sheet=vary hue,
style sheet=vary dashing]
data group {function classes};

\tikz \datavisualization [
school book axes, all axes={unit length=7.5mm},
visualize as smooth line/.list={log, lin, squared, exp},
style sheet=strong colors]
data group {function classes};

\begin{tikzpicture}
\draw [help lines](0,0) grid (3,2);
\draw [blue, thick, x=0.0085cm, y=1cm,
declare function={
sines(\t,\a,\b)=1 + 0.5*(sin(\t)+sin(\t*\a)+sin(\t*\b));
}]
plot [domain=0:360, samples=144, smooth](<\x,{sines(\x,3,5)}>);
\end{tikzpicture}

\begin{tikzpicture}[domain=0:4]
\draw[very thin,color=gray](-0.1,-1.1) grid (3.9,3.9);
\draw[->](-0.2,0) -- (4.2,0) node[right] {$x$};
\draw[->](0,-1.2) -- (0,4.2) node[above] {$f(x)$};
\draw[color=red] plot (\x,\x) node[right] {$f(x) =x$};
\draw[color=blue] plot (\x,{sin(\x r)}) node[right] {$f(x) = \sin x$};
\draw[color=orange] plot (\x,{0.05\*exp(\x)}) node[right]
{$f(x) = \frac{1}{20} \mathrm e^x$};
\end{tikzpicture}

\begin{tikzpicture}[scale=3]
\clip (-0.1,-0.2) rectangle (1.1,0.75);
\draw[step=.5cm,gray,very thin](-1.4,-1.4) grid (1.4,1.4);
\draw (-1.5,0) -- (1.5,0);
\draw (0,-1.5) -- (0,1.5);
\draw (0,0) circle [radius=1cm];
\filldraw[fill=green!20!white, draw=green!50!black](0,0) -- (3mm,0mm)
arc [start angle=0, end angle=30, radius=3mm] -- cycle;
\end{tikzpicture}

\tikz \shade (0,0) rectangle (2,1) (3,0.5) circle (.5cm);
