import { isArray, isObject, changeKeyCase } from './index';
import { expect } from 'chai';
import 'mocha';

describe('Change key case in object', () => {
  it('should detect arrays', () => {
    const array = [1,2,3];
    expect(isArray(array)).to.equal(true);
  });

  it('should detect objects', () => {
    const object = {
      name: 'Steve Rogers',
    };
    expect(isObject(object)).to.equal(true);
  });

  it('should detect the difference in objects and arrays', () => {
    const array = [1, 2, 3];
    const object = {
      name: 'Steve Rogers',
    };
    expect(isArray(object)).to.equal(false);
    expect(isObject(array)).to.equal(false);
  });

  it('should convert the keys in an object', () => {

    const hero = {
      name: 'Steven Rogers',
      super_powers: {
        super_speed: 5,
        super_strength: 4,
      },
    };
    
    const newHero = changeKeyCase(hero, 'camelCase');
    expect(hero.super_powers.super_speed).to.equal(newHero.superPowers.superSpeed);
    expect(hero.super_powers.super_strength).to.equal(newHero.superPowers.superStrength);
  });
});

