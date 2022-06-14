import SmallChair from './SmallChair'
import MediumChair from './MediumChair'
import BigChair from './BigChair'
import { IChair } from './Chair'

export default class ChairFactory {
  static getChair(chair: string): IChair {
    if (chair === 'BigChair') {
      return new BigChair()
    }
    if (chair === 'MediumChair') {
      return new MediumChair()
    }
    if (chair === 'SmallChair') {
      return new SmallChair()
    }
    throw new Error('No Chair Found')
  }
}