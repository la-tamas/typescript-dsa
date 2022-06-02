import { hash } from './HashFunction';

export default class HashTable<T> {
  keyMap: Array<Array<Record<string, T>>> = []

  constructor(size: number = 53) {
    this.keyMap = new Array<Array<Record<string, T>>>(size)
  }

  _hash(key: string): number {
    return hash(key, this.keyMap.length)
  }

  set(key: string, value: T) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    const target = this.keyMap[index].find(item => Object.keys(item)[0] === key)
    if (target) {
      const override = this.keyMap[index].indexOf(target)
      this.keyMap[index][override] = ({ [key]: value })
    } else {
      this.keyMap[index].push({
        [key]: value
      });
    }
  }

  get(key: string): T | undefined {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      const search = this.keyMap[index].find(item => Object.keys(item)[0] === key)
      return search ? search[key] : undefined
    }
    return undefined
  }

  values(): T[] {
    let valuesArray: T[] = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          const value = Object.values(this.keyMap[i][j])[0]
          if (!valuesArray.includes(value)) {
            valuesArray.push(value)
          }
        }
      }
    }
    return valuesArray
  }

  keys(): string[] {
    let keysArray: string[] = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          const key = Object.keys(this.keyMap[i][j])[0]
          if (!keysArray.includes(key)) {
            keysArray.push(key)
          }
        }
      }
    }
    return keysArray
  }
}