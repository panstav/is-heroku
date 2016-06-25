# is-heroku [![Build Status](https://travis-ci.org/panstav/is-heroku.svg?branch=master)](https://travis-ci.org/panstav/is-heroku)

> Checks if it's running on a Heroku instance by asserting process.env.DYNO

## Installation

    npm install @panstav/is-heroku

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