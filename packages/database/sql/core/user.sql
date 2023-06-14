CREATE TABLE
    `user` (
        `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
        `account` varchar(200) NOT NULL COMMENT '账号',
        `password` varchar(24) NOT NULL COMMENT '密码',
        `salt` varchar(4) NOT NULL COMMENT '密码盐',
        `name` varchar(200) DEFAULT '' COMMENT '名称',
        `avatar` varchar(200) DEFAULT '' COMMENT '头像',
        `sex` tinyint(4) unsigned DEFAULT 0 COMMENT '性别 0:未知 1:男性 2:女性',
        `register_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
        `update_time` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
        PRIMARY KEY (`id`),
        KEY `account` (`account`)
    ) DEFAULT CHARSET UTF8 COMMENT '用户表';