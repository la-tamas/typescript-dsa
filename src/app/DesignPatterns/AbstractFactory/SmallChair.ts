import Chair from './Chair';

export default class SmallChair extends Chair {
  constructor() {
    super()
    this.name = 'SmallChair'
    this.dimensions = {
      depth: 40,
      height: 40,
      width: 40
    }
  }
}