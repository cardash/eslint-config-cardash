# CarDash JavaScript Style Guide

This style guide is based off [AirBnb's JavaScript styleguide](https://github.com/airbnb/javascript) with
modifications for certain cases in our repositories.

## Installation

0. Ensure `eslint` is installed
```
> npm install --save-dev eslint
```

1. Install `eslint-config-cardash`
```
> npm install --save-dev git+ssh://git@github.com/cardash/eslint-config-cardash.git
```

2. Add the following to the `.eslintrc.js` in your project root directory
```
module.exports = {
  extends: 'eslint-config-cardash',
}
```
