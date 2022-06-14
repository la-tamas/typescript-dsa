import Table from './Table'

export default class BigTable extends Table {
  constructor() {
    super()
    this.name = 'BigTable'
    this.dimensions = {
      depth: 80,
      height: 80,
      width: 80
    }
  }
}