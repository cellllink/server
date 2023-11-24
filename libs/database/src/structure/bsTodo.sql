-- 双链表实现排序

CREATE TABLE
    `bs_todo_group` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `scene_uuid` varchar(36) COMMENT '关联唯一场景标识scene_uuid,其他场景提供',
        `catalogue_id` INT(11) unsigned COMMENT '目录id,有这个id就是目录,没有就是列表',
        -- 
        `icon` varchar(20) COMMENT 'icon',
        `title` varchar(50) COMMENT '标题',
        `order_prev_id` int(11) unsigned COMMENT '排序上一个的id,没有这个id就是第一个',
        -- 
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
        -- 
        `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
        -- 
        PRIMARY KEY (`id`),
        KEY `scene_uuid` (`scene_uuid`)
    ) DEFAULT CHARSET UTF8 COMMENT '代办分组&列表';

CREATE TABLE
    `bs_todo_item` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `scene_uuid` varchar(36) COMMENT '关联唯一场景标识scene_uuid,其他场景提供',
        `group_id` int(11) unsigned NOT NULL COMMENT '分组id',
        -- 
        `title` varchar(50) COMMENT '标题',
        `remark_id` int(11) unsigned COMMENT '富文本备注id',
        -- 
        `is_finish` int(1) unsigned NOT NULL DEFAULT 0 COMMENT '是否完成',
        `is_important` int(1) unsigned NOT NULL DEFAULT 0 COMMENT '是否重要',
        `add_today_date` date COMMENT '加入今天的日期',
        `order_prev_id` int(11) unsigned COMMENT '排序上一个的id,没有这个id就是第一个',
        -- 
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
        -- 
        `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
        PRIMARY KEY (`id`),
        KEY `group_id` (`group_id`),
        KEY `scene_uuid` (`scene_uuid`)
    ) DEFAULT CHARSET UTF8 COMMENT 'todo 项';

CREATE TABLE
    `bs_todo_step` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `scene_uuid` varchar(36) COMMENT '关联唯一场景标识scene_uuid,其他场景提供',
        `item_id` int(11) unsigned NOT NULL COMMENT '分组id',
        -- 
        `title` varchar(50) COMMENT '标题',
        -- 
        `is_finish` int(1) unsigned NOT NULL DEFAULT 0 COMMENT '是否完成',
        `order_prev_id` int(11) unsigned COMMENT '排序上一个的id,没有这个id就是第一个',
        -- 
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
        -- 
        `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
        PRIMARY KEY (`id`),
        KEY `item_id` (`item_id`),
        KEY `scene_uuid` (`scene_uuid`)
    ) DEFAULT CHARSET UTF8 COMMENT '项的步骤';