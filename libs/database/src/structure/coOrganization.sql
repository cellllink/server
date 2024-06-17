CREATE TABLE `co_organization` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
    `owner_id` int(11) unsigned NOT NULL COMMENT '所有者id',
    -- 
    `name` varchar(200) NOT NULL DEFAULT '' COMMENT '名称',
    `logo` varchar(200) NOT NULL DEFAULT '' COMMENT 'logo',
    `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    -- 
    `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
    --
    PRIMARY KEY (`id`)
) DEFAULT CHARSET UTF8 COMMENT '核心 - 组织表';

CREATE TABLE `co_organization_user` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
    `organization_id` int(11) unsigned NOT NULL COMMENT '组织id',
    `user_id` int(11) unsigned NOT NULL COMMENT '用户id',
    -- 
    `join_time` datetime COMMENT '加入时间',
    `status` tinyint(4) unsigned NOT NULL DEFAULT 2 COMMENT '成员状态',
    -- 
    `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
    --
    PRIMARY KEY (`id`),
    KEY `organization_id` (`organization_id`),
    KEY `user_id` (`user_id`)
) DEFAULT CHARSET UTF8 COMMENT '核心 - 组织用户关联表';

CREATE TABLE `co_organization_team` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
    `organization_id` int(11) unsigned NOT NULL COMMENT '组织id',
    `team_id` int(11) unsigned NOT NULL COMMENT '团队id',
    `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    -- 
    `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
    --
    PRIMARY KEY (`id`),
    KEY `organization_id` (`organization_id`),
    KEY `team_id` (`team_id`)
) DEFAULT CHARSET UTF8 COMMENT '核心 - 组织团队关联表';