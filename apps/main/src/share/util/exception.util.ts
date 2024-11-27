import { BaseException } from '../httpException';

export function baseExceptionCheck(checkResult: boolean, message = ''): void {
  if (checkResult) throw new BaseException(message);
}
