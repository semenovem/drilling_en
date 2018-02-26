/**
 * Диапазон изучаемых чисел
 */
export interface Range {
  start: number;
  end: number;
}

export interface Item {
  number: number;

  /**
   * Длительность прогресс-линии. Убрать отсюда
   */
  duration: number;

  // статус, например дан ли ответ и какой
}
