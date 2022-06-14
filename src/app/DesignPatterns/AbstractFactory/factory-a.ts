export interface IProductA {
  name: string
}

class ConcreteProduct implements IProductA {
  name = ''
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super()
    this.name= 'FactoryA:ConcreteProductA'
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'FactoryA:ConcreteProductB'
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'FactroyA:ConcreteProductC'
  }
}

export class FactoryA {
  static getObject(some_property: string): IProductA {
    try {
      if (some_property === 'a') {
        return new ConcreteProductA()
      }
      if (some_property === 'b') {
        return new ConcreteProductB()
      }
      if (some_property === 'c') {
        return new ConcreteProductC()
      }
      throw new Error('Class not found!')
    } catch (e) {
      console.log(e)
    }
    return new ConcreteProduct()
  }
}