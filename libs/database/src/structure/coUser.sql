CREATE TABLE
    `co_user` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        -- 
        `account` varchar(200) NOT NULL COMMENT '账号',
        `password` varchar(32) NOT NULL COMMENT '密码',
        `salt` varchar(4) NOT NULL COMMENT '密码盐',
        -- 
        `name` varchar(200) DEFAULT '' COMMENT '名称',
        `avatar` varchar(200) DEFAULT '' COMMENT '头像',
        `phone` varchar(11) DEFAULT '' COMMENT '手机号',
        `sex` tinyint(4) unsigned DEFAULT 0 COMMENT '性别',
        `register_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
        `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
        --
        `logic_delete` tinyint(4) DEFAULT 0 COMMENT '是否逻辑删除 0:正常 1:删除',
        PRIMARY KEY (`id`),
        KEY `account` (`account`)
    ) DEFAULT CHARSET UTF8 COMMENT '用户表';