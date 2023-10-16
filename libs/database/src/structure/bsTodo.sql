CREATE TABLE
    `bs_todo_item` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `title` varchar(50) NOT NULL COMMENT '标题',
        `desc_id` INT(11) UNSIGNED COMMENT '具体描述id',
        `parent_id` INT(11) UNSIGNED NOT NULL COMMENT '所属产品id',
        `order` varchar(100) COMMENT '子项目排序',
        `owner_id` int(11) unsigned NOT NULL COMMENT '所有者id',
        -- 
        `logo` varchar(200) NOT NULL DEFAULT '' COMMENT 'logo',
        `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
        PRIMARY KEY (`id`),
        KEY `product_id` (`product_id`)
    ) DEFAULT CHARSET UTF8 COMMENT '缺陷集合项目表';