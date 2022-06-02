import { hashString, hash } from "../../../app/Classes/HashTables/HashFunction";

describe('Hash Functions test suite!', () => {
  it('Should work as hash function for strings', () => {
    const mockLength = 10;
    expect(hashString('Hello!', mockLength)).toBeLessThan(mockLength);
    
    const firstHash = hashString('Hello!', mockLength);
    const secondHash = hashString('Hello!', mockLength);

    expect(firstHash).toEqual(secondHash);
  })

  it('Should work as hash function for strings', () => {
    const mockLength = 13;
    const firstHash = hash('Hello!', mockLength);
    const secondHash = hash('Hello!', mockLength);

    expect(firstHash).toBeLessThan(mockLength);
    expect(firstHash).toEqual(secondHash);
  })
})