let seed
export class Random { // A 'good enough' PRNG for game randoms
  constructor(seed = 666) {
    this.seed = seed
  }
  seededRandom(max, min) {
    this.max = max
    this.min = min
    max = max || 1
    min = min || 0
    this.seed = (this.seed * 9301 + 49297) % 233280
    const rnd = this.seed / 233280.0
    return min + rnd * (max - min)
  }
  getNextRandom() {
    return this.seededRandom(this.max, this.min)
  }
  static getRandomBool() {
    return Math.round(Math.random()) == true
  }
  static setSeed(s) {
    seed = s
  }
  static seededRandom(max, min) {
    if(!seed) throw new Error("No Seed Set; Use Random.setSeed() before calling static seededRandom, or create a new Random(seed) instance")
    max = max || 1
    min = min || 0
    seed = (seed * 9301 + 49297) % 233280
    const rnd = Math.seed / 233280.0
    return min + rnd * (max - min)
  }
  static getRandomIntInclusive(min, max) { //The maximum is inclusive and the minimum is inclusive
    min = Math.ceil(min)
    max = max|0
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  static getRandomIntExclusive(min, max) { //The maximum is exclusive and the minimum is inclusive
    min = Math.ceil(min)
    max = max|0
    return Math.floor(Math.random() * (max - min)) + min
  }
}
