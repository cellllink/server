CREATE TABLE `bs_product` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
    `catalogue_id` INT(11) unsigned COMMENT '目录id,有这个id就是解决方案,没有就是产品',
    -- 
    `logo` varchar(200) COMMENT 'icon',
    `title` varchar(50) COMMENT '标题',
    -- 
    `scene_uuid` varchar(36) COMMENT '36位的场景标识，供其他使用',
    -- 
    `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
    -- 
    PRIMARY KEY (`id`)
) DEFAULT CHARSET UTF8 COMMENT '解决方案&产品列表';