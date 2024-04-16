import { Injectable } from '@nestjs/common';

@Injectable()
export class DemandEmitHookService {
  constructor() {}

  emit(): void {}

  add(ids: number) {}

  remove(ids: number) {}

  edit(ids: number[]) {}
}
