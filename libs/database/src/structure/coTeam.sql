CREATE TABLE
    `co_team` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `owner_id` int(11) unsigned NOT NULL COMMENT '所有者id',
        `organization_id` int(11) unsigned NOT NULL COMMENT '所属组织id',
        -- 
        `name` varchar(200) NOT NULL DEFAULT '' COMMENT '名称',
        `logo` varchar(200) NOT NULL DEFAULT '' COMMENT 'logo',
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        `data_status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '数据状态 0:正常 99:删除',
        PRIMARY KEY (`id`)
    ) DEFAULT CHARSET UTF8 COMMENT '团队表';

CREATE TABLE
    `co_team_user` (
        `team_id` int(11) unsigned NOT NULL COMMENT '团队id',
        `user_id` int(11) unsigned NOT NULL COMMENT '用户id',
        -- 
        `status` tinyint(4) unsigned NOT NULL DEFAULT 2 COMMENT '成员状态',
        PRIMARY KEY (`team_id`, `user_id`)
    ) DEFAULT CHARSET UTF8 COMMENT '团队用户的关联表';