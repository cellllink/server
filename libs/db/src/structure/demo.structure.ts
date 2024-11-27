import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('demo', { schema: 'cellink' })
export class Demo {}

export interface DemoPo {}

export type PDemoPo = Promise<DemoPo>;

export type PDemoPos = Promise<DemoPo[]>;
