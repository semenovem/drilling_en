/**
 * Диапазон изучаемых чисел
 */
export interface Range {
  start: number;
  end: number;
}

export interface Item {
  number: number;
  duration: number;

  // статус, например дан ли ответ и какой
}
