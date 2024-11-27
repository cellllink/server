import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//定义模式 主要是mongoDB 集合的各种信息
@Schema({
  collection: 'test',
})
export class Test extends Document {
  @Prop()
  id: number;

  @Prop()
  aaaaa: string;

  @Prop()
  bbbbb: string;

  @Prop()
  ccccc: string;
}

// 定义类型，与Document组合方便后面使用
export type TestDocument = Test & Document;

//使用createForClass 生产Schema对象
export const TestSchema = SchemaFactory.createForClass(Test);
