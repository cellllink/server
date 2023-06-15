CREATE TABLE
    `bs_defect` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `product_id` INT(11) UNSIGNED NOT NULL COMMENT '所属产品id',
        `creator_id` int(11) unsigned NOT NULL COMMENT '创建者id',
        `deal_user_id` int(11) unsigned NOT NULL COMMENT '处理人',
        -- 
        `title` varchar(200) NOT NULL COMMENT '标题',
        `detail_id` INT(11) UNSIGNED COMMENT '详情id',
        -- 
        `priority` INT(4) UNSIGNED COMMENT '优先级',
        `severity` INT(4) UNSIGNED COMMENT '严重程度',
        `gurop_id` INT(11) UNSIGNED COMMENT '分组id',
        `status` INT(4) UNSIGNED NOT NULL COMMENT '状态 0: 待处理 1: 处理中 2: 已解决 3: 已关闭 4: 重新打开',
        -- 
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
        PRIMARY KEY (`id`),
        KEY `team_id` (`team_id`),
        KEY `project_id` (`project_id`),
        KEY `deal_user_id` (`deal_user_id`)
    ) DEFAULT CHARSET UTF8 COMMENT '缺陷管理表';