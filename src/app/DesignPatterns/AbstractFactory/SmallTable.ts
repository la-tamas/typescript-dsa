import Table from './Table'

export default class SmallTable extends Table {
  constructor() {
    super()
    this.name = 'SmallTable'
    this.dimensions = {
      depth: 40,
      height: 40,
      width: 40
    }
  }
}