CREATE TABLE
    `organization` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `owner_id` int(11) unsigned NOT NULL COMMENT '所有者id',
        `name` varchar(200) NOT NULL DEFAULT '' COMMENT '名称',
        `logo` varchar(200) NOT NULL COMMENT 'logo',
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        PRIMARY KEY (`id`)
    ) DEFAULT CHARSET UTF8 COMMENT '组织表';