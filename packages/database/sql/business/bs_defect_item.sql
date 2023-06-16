CREATE TABLE
    `bs_defect_item` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `project_id` INT(11) unsigned NOT NULL COMMENT '所属缺陷集合项目id',
        `owner_id` int(11) unsigned NOT NULL COMMENT '所有者id',
        `deal_user_id` int(11) unsigned NOT NULL COMMENT '处理人',
        -- 
        `title` varchar(200) NOT NULL COMMENT '标题',
        `detail_id` INT(11) unsigned COMMENT '详情id',
        -- 
        `priority` INT(4) unsigned COMMENT '优先级 0: 低 1: 中 2: 高 3: 紧急',
        `severity` INT(4) unsigned COMMENT '严重程度 0: 建议 1: 一般 2: 严重',
        -- `gurop_id` INT(11) unsigned COMMENT '分组id',
        -- `tag_id` INT(11) unsigned COMMENT '标签id',
        `status` INT(4) unsigned NOT NULL DEFAULT 0 COMMENT '状态 0: 待处理 1: 处理中 2: 待验证 3: 已拒绝 4: 重新打开 5: 已关闭',
        -- 
        `deadline` datetime COMMENT '截至时间',
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
        PRIMARY KEY (`id`),
        KEY `project_id` (`project_id`),
        KEY `owner_id` (`owner_id`),
        KEY `deal_user_id` (`deal_user_id`)
    ) DEFAULT CHARSET UTF8 COMMENT '缺陷表';