import Chair from './chair'

export default class BigChair extends Chair {
  constructor() {
    super()
    this.dimensions.height = 80
    this.dimensions.width = 80
    this.dimensions.depth = 80
  }
}