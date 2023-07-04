import { FindOptionsOrder, FindOptionsSelect } from 'typeorm';

interface FindOptionsPage {
  skip: number;
  take: number;
}

/**
 * 获取分页的筛选配置
 * @param pageNumber 分页从 1 开始
 * @param pageSize 不传默认 10 条每页
 * @returns FindOptionsPage
 */
export function getFindOptionsPage(pageNumber: number, pageSize = 10): FindOptionsPage {
  return {
    skip: pageNumber - 1,
    take: pageSize,
  };
}

/**
 * 获取排序的筛选配置
 * @param ascs 正序排列 字段列表
 * @param descs  倒序排列 字段列表
 * @returns FindOptionsOrder<Entity>
 */
export function getOrderFindOption<Entity>(
  ascs: string[],
  descs: string[],
): FindOptionsOrder<Entity> {
  return Object.assign(
    {},
    ...ascs.map(name => ({ [name]: 'ASC' })),
    ...descs.map(name => ({ [name]: 'DASC' })),
  );
}

/**
 * 创建 Entity 搜索的数据结构，隐藏数据库表某些特殊的字段(如：用户密码)
 * @param keys
 * @returns FindOptionsSelect<Entity>
 */
export function createSelectOptions<Entity>(keys: string[]): FindOptionsSelect<Entity> {
  return keys.reduce((selectOptions, key) => {
    selectOptions[key] = true;
    return selectOptions;
  }, {});
}
