CREATE TABLE
    `co_organization` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `owner_id` int(11) unsigned NOT NULL COMMENT '所有者id',
        -- 
        `name` varchar(200) NOT NULL DEFAULT '' COMMENT '名称',
        `logo` varchar(200) NOT NULL DEFAULT '' COMMENT 'logo',
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        PRIMARY KEY (`id`)
    ) DEFAULT CHARSET UTF8 COMMENT '组织表';

CREATE TABLE
    `co_organization_user` (
        `organization_id` int(11) unsigned NOT NULL COMMENT '组织id',
        `user_id` int(11) unsigned NOT NULL COMMENT '用户id',
        -- 
        `join_time` datetime COMMENT '加入时间',
        `status` tinyint(4) unsigned NOT NULL DEFAULT 2 COMMENT '成员状态',
        PRIMARY KEY (`organization_id`, `user_id`)
    ) DEFAULT CHARSET UTF8 COMMENT '组织用户关联表';