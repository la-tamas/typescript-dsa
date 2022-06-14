import SmallTable from './SmallTable'
import MediumTable from './MediumTable'
import BigTable from './BigTable'
import { ITable } from './Table'

export default class TableFactory {
  static getTable(table: string): ITable {
    if (table === 'BigTable') {
      return new BigTable()
    }
    if (table === 'MediumTable') {
      return new MediumTable()
    }
    if (table === 'SmallTable') {
      return new SmallTable()
    }
    throw new Error('No Table Found')
  }
}