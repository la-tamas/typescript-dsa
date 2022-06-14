import FurnitureFactroy from '../../../app/DesignPatterns/AbstractFactory/FurnitureFactroy';
import SmallChair from '../../../app/DesignPatterns/AbstractFactory/SmallChair';
import MediumChair from '../../../app/DesignPatterns/AbstractFactory/MediumChair';
import BigChair from '../../../app/DesignPatterns/AbstractFactory/BigChair';
import SmallTable from '../../../app/DesignPatterns/AbstractFactory/SmallTable';
import MediumTable from '../../../app/DesignPatterns/AbstractFactory/MediumTable';
import BigTable from '../../../app/DesignPatterns/AbstractFactory/BigTable';

describe('Abstract Factory test suite', () => {
  it('Should create SmallChair', () => {
    const MOCK = new SmallChair()
    const CREATED = FurnitureFactroy.getFurniture('SmallChair')
    expect(CREATED).toEqual(MOCK)
    expect(CREATED?.getDimensions()).toEqual(MOCK.getDimensions())
  })

  it('Should create MediumChair', () => {
    const MOCK = new MediumChair()
    const CREATED = FurnitureFactroy.getFurniture('MediumChair')
    expect(CREATED).toEqual(MOCK)
    expect(CREATED?.getDimensions()).toEqual(MOCK.getDimensions())
  })

  it('Should create BigChair', () => {
    const MOCK = new BigChair()
    const CREATED = FurnitureFactroy.getFurniture('BigChair')
    expect(CREATED).toEqual(MOCK)
    expect(CREATED?.getDimensions()).toEqual(MOCK.getDimensions())
  })

  it('Should create SmallTable', () => {
    const MOCK = new SmallTable()
    const CREATED = FurnitureFactroy.getFurniture('SmallTable')
    expect(CREATED).toEqual(MOCK)
    expect(CREATED?.getDimensions()).toEqual(MOCK.getDimensions())
  })

  it('Should create MediumTable', () => {
    const MOCK = new MediumTable()
    const CREATED = FurnitureFactroy.getFurniture('MediumTable')
    expect(CREATED).toEqual(MOCK)
    expect(CREATED?.getDimensions()).toEqual(MOCK.getDimensions())
  })

  it('Should create BigTable', () => {
    const MOCK = new BigTable()
    const CREATED = FurnitureFactroy.getFurniture('BigTable')
    expect(CREATED).toEqual(MOCK)
    expect(CREATED?.getDimensions()).toEqual(MOCK.getDimensions())
  })

  it('Should throw error', () => {
    try {
      FurnitureFactroy.getFurniture('NoSuchFurniture')
    } catch (e) {
      expect(e).toEqual(new Error('No Factory Found'))
    }
  })
})