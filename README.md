# Description
Utility used to change the case of keys in an object to any other case. Performs a deep clone of the object, handling
nested objects and arrays

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
 * 
 *  
 **/

```