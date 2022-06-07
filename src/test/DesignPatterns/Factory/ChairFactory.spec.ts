import ChairFactory from '../../../app/DesignPatterns/Factory/chair-factory'
import SmallChair from '../../../app/DesignPatterns/Factory/small-chair'
import MediumChair from '../../../app/DesignPatterns/Factory/medium-chair'
import BigChair from '../../../app/DesignPatterns/Factory/big-chair'

describe('Chair Factory test suite', () => {
  it('Should create small chair', () => {
    const MOCK = new SmallChair()

    const CREATED = ChairFactory.getChair('SmallChair')
    expect(CREATED).toEqual(MOCK)
    expect(CREATED?.getDimensions()).toEqual(MOCK.getDimensions())
  })

  it('Should create medium chair', () => {
    const MOCK = new MediumChair()

    const CREATED = ChairFactory.getChair('MediumChair')
    expect(CREATED).toEqual(MOCK)
    expect(CREATED?.getDimensions()).toEqual(MOCK.getDimensions())
  })

  it('Should create big chair', () => {
    const MOCK = new BigChair()

    const CREATED = ChairFactory.getChair('BigChair')
    expect(CREATED).toEqual(MOCK)
    expect(CREATED?.getDimensions()).toEqual(MOCK.getDimensions())
  })

  it('Should not create chair', () => {
    expect(ChairFactory.getChair('Unexisting')).toBe(null)
  })
})