CREATE TABLE `bs_defect` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
    `project_id` INT(11) unsigned NOT NULL COMMENT '所属缺陷集合项目id',
    `owner_id` int(11) unsigned NOT NULL COMMENT '所有者id',
    `deal_user_id` int(11) unsigned NOT NULL COMMENT '处理人',
    -- 
    `title` varchar(100) NOT NULL COMMENT '标题',
    `detail_id` INT(11) unsigned COMMENT '详情id',
    -- 
    `priority` INT(4) unsigned COMMENT '优先级',
    `severity` INT(4) unsigned COMMENT '严重程度',
    `group_id` int(11) unsigned COMMENT '分组id',
    `tag_id` INT(11) unsigned COMMENT '标签id',
    `status` INT(4) unsigned NOT NULL DEFAULT 0 COMMENT '状态',
    -- 
    `deadline` datetime COMMENT '截至时间',
    `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`id`)
) DEFAULT CHARSET UTF8 COMMENT '缺陷表';

CREATE TABLE `bs_defect_project` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
    `product_id` INT(11) UNSIGNED NOT NULL COMMENT '所属产品id',
    `owner_id` int(11) unsigned NOT NULL COMMENT '所有者id',
    -- 
    `name` varchar(20) NOT NULL COMMENT '标题',
    `logo` varchar(200) NOT NULL DEFAULT '' COMMENT 'logo',
    `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    PRIMARY KEY (`id`),
    KEY `product_id` (`product_id`)
) DEFAULT CHARSET UTF8 COMMENT '缺陷集合项目表';