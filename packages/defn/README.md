# defn

Utilitary function to define functions with multiple implementations.

## Getting Started

Install this package using your favorite package manager:

```
$ npm i @gustavofsantos/defn
```

Then define your first variadic function.

```js
const greet = defn(
  () => "Hello you",
  (name) => `Hello, ${name}`
)

greet() // Hello you
greet('Gustavo') // Hello, Gustavo
```
