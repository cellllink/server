import * as dayjs from 'dayjs';
import { ValueTransformer } from 'typeorm';

export const datetimeTransformer: ValueTransformer = {
  to: (value: Date) => value,
  from: (value: Date) => dayjs(value).format('YYYY-MM-DD HH:mm:ss'),
};

export const dateTransformer: ValueTransformer = {
  to: (value: Date) => value,
  from: (value: Date) => dayjs(value).format('YYYY-MM-DD'),
};
