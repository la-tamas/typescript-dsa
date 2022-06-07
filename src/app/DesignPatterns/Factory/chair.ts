import { dimension } from './dimension';

export interface IChair {
  dimensions: dimension
  getDimensions: () => dimension
}

export default class Chair implements IChair {
  dimensions = {
    height: 0,
    width: 0,
    depth: 0
  }

  getDimensions(): dimension {
    return this.dimensions
  }
}