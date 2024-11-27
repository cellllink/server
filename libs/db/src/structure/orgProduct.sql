CREATE TABLE
    `org_product` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `organization_id` int(11) unsigned NOT NULL COMMENT '所属组织id',
        `group_id` int(11) unsigned COMMENT '分组id',
        -- 
        `name` varchar(20) NOT NULL COMMENT '名称',
        `logo` varchar(200) NOT NULL DEFAULT '' COMMENT 'logo',
        `desc` varchar(200) NOT NULL DEFAULT '' COMMENT '描述',
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        -- 
        `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
        PRIMARY KEY (`id`)
    ) DEFAULT CHARSET UTF8 COMMENT '产品表';