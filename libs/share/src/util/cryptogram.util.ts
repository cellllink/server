import * as crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

// 随机盐
export function makeSalt(): string {
  return crypto.randomBytes(3).toString('base64');
}

// 使用盐加密明文密码
export function encryptPasswordBySalt(password: string, salt: string): string {
  // 10000 代表迭代次数 16代表长度
  return crypto
    .pbkdf2Sync(password, Buffer.from(salt, 'base64'), 10000, 24, 'sha1')
    .toString('base64');
}

// 创建
export function createUUID(): string {
  return uuidv4();
}
