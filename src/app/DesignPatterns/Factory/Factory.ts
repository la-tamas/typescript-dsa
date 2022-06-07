interface IProduct {
  name: string
}

class ConcreteProduct implements IProduct {
  name = ''
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'ConcreteProductA'
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'ConcreteProductB'
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'ConcreteProductC'
  }
}

class Creator {
  static createObject(someProperty: string): IProduct | null {
    if (someProperty === 'a') {
      return new ConcreteProductA()
    }
    if (someProperty === 'b') {
      return new ConcreteProductB()
    }
    if (someProperty === 'c') {
      return new ConcreteProductC()
    }
    return null
  }
}

const PRODUCT = Creator.createObject('b')
console.log(PRODUCT)