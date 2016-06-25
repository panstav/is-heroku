# is-heroku

> Checks if currently on a Heroku instance by checking on process.env.DYNO

## Usage

```js
const isHeroku = require('@panstav/is-heroku');

// not on heroku
console.log(isHeroku);
// -> false

// on Heroku
console.log(isHeroku);
// -> true
```