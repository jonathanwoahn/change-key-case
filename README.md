# Description
Utility used to change the case of keys in an object to any other case. Performs a deep modification of the original object, changing
the keys of all nested objects, arrays, and objects within arrays

# Install
```
npm i change-key-case
```

# Usage
Utilizes the [Change Case library](https://github.com/blakeembrey/change-case#readme)

```javascript

const superHero = {
  hero_name: 'Captain America',
  real_name: 'Steve Rogers'
};

const newKeys = changeKeyCase(superHero, 'camelCase');

/**
 *  newKeys prints out to
 * {
 *    heroName: 'Captain America',
 *    realName: 'Steve Rogers'
 * }
 **/

```

# API
changeKeyCase(object, caseType)

## object
An object, array, or even string that you want to convert

## caseType
String that represents the final output you want your object keys to be in. You can choose any of the values from the
[Change Case library](https://github.com/blakeembrey/change-case#readme)

- camelCase
- camel
- constant
- dot
- header
- isLower
- isUpper
- lower
- lcFirst
- no
- param
- pascal
- path
- sentence
- snake
- swap
- title
- upper
- ucFirst
