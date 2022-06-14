import { dimension } from './dimension';

export interface IChair {
  name: string
  dimensions: dimension

  getDimensions(): dimension
}

const initialChairDimensons: dimension = {
  height: 0,
  width: 0,
  depth: 0
}

export default class Chair implements IChair {
  name = ''
  dimensions = initialChairDimensons

  getDimensions(): dimension {
    return this.dimensions
  }
}