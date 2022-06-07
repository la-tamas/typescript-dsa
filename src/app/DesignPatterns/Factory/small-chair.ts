import Chair from './chair'

export default class SmallChair extends Chair {
  constructor() {
    super()
    this.dimensions.height = 40
    this.dimensions.width = 40
    this.dimensions.depth = 40
  }
}