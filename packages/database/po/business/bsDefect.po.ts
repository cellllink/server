import { ApiProperty } from '@nestjs/swagger';

export enum BsDefectItemPriority {
  low = 0, // 低
  medium = 1, // 中
  high = 2, // 高
  urgent = 3, // 紧急
}

export enum BsDefectItemSeverity {
  suggested = 0, // 建议
  generic = 1, // 一般
  serious = 2, // 严重
}

export enum BsDefectItemStatus {
  pending = 0, // 待处理
  processed = 1, // 处理中
  waitVerification = 2, // 待验证
  refused = 3, // 已拒绝
  reopen = 4, // 重新打开
  closed = 5, // 已关闭
}

export class BsDefectProjectPo {
  id: number;
  product_id: number;
  owner_id: number;
  name: string;
  create_time: string;
}

export class BsDefectItemPo {
  id: number;
  project_id: number;
  owner_id: number;
  deal_user_id: number;
  title: string;
  detail_id: number;
  priority: BsDefectItemPriority;
  severity: BsDefectItemSeverity;
  // gurop_id: number;
  // tag_id: number;
  status: BsDefectItemStatus;
  deadline: string;
  create_time: string;
  update_time: string;
}
