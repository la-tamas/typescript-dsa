import Chair from './Chair';

export default class BigChair extends Chair {
  constructor() {
    super()
    this.name = 'BigChair'
    this.dimensions = {
      depth: 80,
      width: 80,
      height: 80
    }
  }
}