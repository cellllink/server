CREATE TABLE
    `group` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `name` varchar(20) NOT NULL COMMENT '名称',
        `desc` varchar(200) NOT NULL DEFAULT '' COMMENT '描述',
        `type` varchar(32) NOT NULL COMMENT '分组类型',
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        PRIMARY KEY (`id`)
    ) DEFAULT CHARSET UTF8 COMMENT '分组表';