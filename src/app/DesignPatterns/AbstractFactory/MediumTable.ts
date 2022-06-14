import Table from './Table'

export default class MediunTable extends Table {
  constructor() {
    super()
    this.name = 'MediumTable'
    this.dimensions = {
      depth: 60,
      height: 60,
      width: 60
    }
  }
}