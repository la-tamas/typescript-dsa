import { dimension } from './dimension';

export interface ITable {
  name: string
  dimensions: dimension

  getDimensions(): dimension
}

const initialTableDimensions: dimension = {
  depth: 0,
  height: 0,
  width: 0
}

export default class Table implements ITable {
  name = ''
  dimensions = initialTableDimensions

  getDimensions(): dimension {
    return this.dimensions
  }
}