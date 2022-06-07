import Chair from './chair'

export default class MediumChair extends Chair {
  constructor() {
    super()
    this.dimensions.height = 60
    this.dimensions.width = 60
    this.dimensions.depth = 60
  }
}