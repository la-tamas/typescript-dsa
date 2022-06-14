import { IChair } from './Chair'
import ChairFactory from './ChairFactory'
import { ITable } from './Table'
import TableFactory from './TableFactory'

interface IFurniture extends IChair, ITable {}

export default class FurnitureFactroy {
  static getFurniture(furniture: string): IFurniture | undefined {
    if (['SmallChair', 'MediumChair', 'BigChair'].indexOf(furniture) > -1) {
      return ChairFactory.getChair(furniture)
    }
    if (['SmallTable', 'MediumTable', 'BigTable'].indexOf(furniture) > -1) {
      return TableFactory.getTable(furniture)
    }
    throw new Error('No Factory Found')
  }
}