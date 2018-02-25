export function getRandomNumber (min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getNext(min: number, max: number): number {
  return Math.trunc((Math.random() / (1 / (max - min + 1)))) + min;
}