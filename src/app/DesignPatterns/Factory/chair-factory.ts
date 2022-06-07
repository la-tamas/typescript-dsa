import SmallChair from './small-chair'
import MediumChair from './medium-chair'
import BigChair from './big-chair'
import { IChair } from './chair'

export default class ChairFactory {
  static getChair(chair: string): IChair | null {
    if (chair === 'BigChair') {
      return new BigChair()
    }
    if (chair === 'MediumChair') {
      return new MediumChair()
    }
    if (chair === 'SmallChair') {
      return new SmallChair()
    }
    return null
  }
}