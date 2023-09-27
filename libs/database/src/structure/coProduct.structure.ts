import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

/**
 * CoProduct
 */
@Entity('co_product', { schema: 'cellink' })
export class CoProduct {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id',
    comment: '自增id',
    unsigned: true,
  })
  id: number;
}

export interface CoProductPo {
  id: number;
}

export type PCoProductPo = Promise<CoProductPo>;

export type PCoProductPos = Promise<CoProductPo[]>;
