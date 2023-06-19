/**
 * 获取 po 对象列表的指定属性的值
 * @param pos
 * @param key
 * @returns 返回一个 key 的 value 数组
 */
export function getPosValueOfTargetKey<T>(pos: T[], key: string): number[] {
  return pos.map(po => po[key]);
}
