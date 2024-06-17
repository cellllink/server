CREATE TABLE `bs_demand` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
  -- 
  `title` varchar(64) NOT NULL DEFAULT '' COMMENT '标题',
  `detail_id` INT(11) unsigned COMMENT '详情id',
  -- 
  `priority` INT(4) UNSIGNED COMMENT '优先级',
  `status` INT(4) UNSIGNED NOT NULL COMMENT '状态',
  --
  `create_user_id` int(11) unsigned NOT NULL COMMENT '创建人',
  --
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  PRIMARY KEY (`organization_id`, `user_id`) KEY `team_id` (`team_id`),
) DEFAULT CHARSET UTF8 COMMENT '需求表';