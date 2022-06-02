import HashTable from "../../../app/Classes/HashTables/HashTable";

describe('Hash Table test suite', () => {
  it('Should get/set items', () => {
    const ht = new HashTable<string>(17);

    ht.set('foo', 'bar')
    ht.set('pink', 'roze')
    ht.set('orange', 'color')
    ht.set('blue', 'sky')
    ht.set('orange', 'fruit')

    expect(ht.get('foo')).toEqual('bar')
    expect(ht.get('pink')).toEqual('roze')
    expect(ht.get('orange')).toEqual('fruit')
    expect(ht.get('blue')).toEqual('sky')

    expect(ht.get('any')).toBe(undefined)
    expect(ht.get('anything')).toBe(undefined)

    expect(ht.values()).toEqual(['fruit', 'bar', 'roze', 'sky'])

    expect(ht.keys()).toEqual(['orange', 'foo', 'pink', 'blue'])
  })
})