CREATE TABLE
    `bs_defect_project` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `product_id` INT(11) UNSIGNED NOT NULL COMMENT '所属产品id',
        `owner_id` int(11) unsigned NOT NULL COMMENT '所有者id',
        `name` varchar(20) NOT NULL COMMENT '标题',
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        PRIMARY KEY (`id`),
        KEY `product_id` (`product_id`)
    ) DEFAULT CHARSET UTF8 COMMENT '缺陷集合项目表';