import { BaseException } from '../httpException';

export function baseExceptionCheck(isTrue: boolean, message = ''): void {
  if (isTrue) throw new BaseException(message);
}
