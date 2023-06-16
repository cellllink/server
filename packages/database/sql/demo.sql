CREATE TABLE
    `demo` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        -- 
        `title` varchar(200) NOT NULL DEFAULT '' COMMENT '标题',
        -- 
        `priority` INT(4) UNSIGNED COMMENT '优先级',
        `status` INT(4) UNSIGNED NOT NULL COMMENT '状态 0: 待处理 1: 处理中 2: 已解决 3: 已关闭 4: 重新打开',
        -- 
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
        PRIMARY KEY (`id`),
        PRIMARY KEY (`organization_id`, `user_id`) KEY `team_id` (`team_id`),
    ) DEFAULT CHARSET UTF8 COMMENT 'xxxxxx';