import Chair from './Chair';

export default class MediumChair extends Chair {
  constructor() {
    super()
    this.name = 'MediumChair'
    this.dimensions = {
      depth: 60,
      width: 60,
      height: 60
    }
  }
}