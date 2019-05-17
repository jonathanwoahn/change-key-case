import * as changeCase from 'change-case';

const isArray = (value: any) => !!value && (value.constructor === Array);
const isObject = (value: any) => !!value && (value.constructor === Object);
type KeyCase = 'camelCase' | 'camel' | 'constant' | 'dot' | 'header' | 'isLower' |
  'isUpper' | 'lower' | 'lcFirst' | 'no' | 'param' | 'pascal' | 'path' | 'sentence' |
  'snake' | 'swap' | 'title' | 'upper' | 'ucFirst';

export const changeKeyCase = (input: Object | Array<any> | string, keyCase: KeyCase): any => {
  if (isArray(input)) {
    return (input as Array<any>).map((value: any) => changeKeyCase(value, keyCase));
  }

  if (isObject(input)) {
    return Object.keys(input).reduce((result: Object, key: any) => {
      const modifiedKey = changeCase[keyCase](key).toString();
      if (isObject(input[key]) || isArray(input[key])) {
        result[modifiedKey] = changeKeyCase(input[key], keyCase);
      } else {
        result[modifiedKey] = input[key];
      }
      return result;
    }, {});
  }

  if (typeof input === 'string') {
    return changeCase[keyCase](input);
  }
};