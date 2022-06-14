import { IProductA, FactoryA } from './factory-a';
import { IProductB, FactoryB } from './factory-b';

interface IProduct extends IProductA, IProductB {}

class AbstractFactory {
  static createObject(factory: string): IProduct | undefined {
    try {
      if (['aa', 'ab', 'ac'].indexOf(factory) > -1) {
        return FactoryA.getObject(factory[1])
      }
      if (['ba', 'bb', 'bc'].indexOf(factory) > -1) {
        return FactoryB.getObject(factory[1])
      }
      throw new Error('No factory found')
    } catch (e) {
      console.log(e)
    }
  }
}

let PRODUCT = AbstractFactory.createObject('ab')
console.log(PRODUCT)

PRODUCT = AbstractFactory.createObject('bc')
console.log(PRODUCT)