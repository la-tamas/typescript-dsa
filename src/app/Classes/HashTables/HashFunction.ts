export function hashString(key: string, length: number): number {
  let total = 0
  for (let i = 0; i < key.length; i++) {
    const value = key[i].charCodeAt(0) - 96
    total = (total + value) % length
  }
  return total
}

export function hash(key: string, length: number): number {
  let total = 0
  let PRIME = 31
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const value = key[i].charCodeAt(0) - 96
    total = (total * PRIME + value) % length
  }
  return total
}