CREATE TABLE
    `product` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `organization_id` int(11) unsigned NOT NULL COMMENT '所属组织id',
        `group_id` int(11) unsigned COMMENT '分组id',
        -- 
        `name` varchar(20) NOT NULL COMMENT '名称',
        `desc` varchar(200) NOT NULL DEFAULT '' COMMENT '描述',
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        PRIMARY KEY (`id`),
        KEY `organization_id` (`organization_id`)
    ) DEFAULT CHARSET UTF8 COMMENT '产品表';