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