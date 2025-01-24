-- 创建数据库
CREATE DATABASE cellink DEFAULT CHARACTER
SET
  utf8mb4 COLLATE utf8mb4_general_ci;

-- 新增表字段
ALTER TABLE com_group
ADD COLUMN sore_order double (9, 8) UNSIGNED COMMENT '排序优先级';

-- 表的命名方式
-- co_xxx 核心表 (co_user)
-- com_xxx 共享表，做一些常用功能的聚合，通过 type 区分 (cm_tag cm_group)
-- bs_xxx_xxx 业务模块表 (bs_defect_project bs_defect_row)
-- th_xxx 第三方模块表 (th_discord)
CREATE TABLE
  `base` (
    `id` int (11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
    -- 
    `title` varchar(64) NOT NULL DEFAULT '' COMMENT '标题',
    -- 
    `priority` int (4) UNSIGNED COMMENT '优先级',
    `status` int (4) UNSIGNED NOT NULL COMMENT '状态 DemoStatusEnum',
    -- 
    `sore_order` double (9, 8) UNSIGNED COMMENT '排序优先级',
    `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`),
    PRIMARY KEY (`organization_id`, `user_id`) KEY `team_id` (`team_id`),
  ) DEFAULT CHARSET UTF8 COMMENT 'xxxxxx';