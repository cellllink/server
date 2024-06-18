CREATE TABLE `co_permission` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
) DEFAULT CHARSET UTF8 COMMENT '权限表';

CREATE TABLE `co_permission_group` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
) DEFAULT CHARSET UTF8 COMMENT '权限分组表';

CREATE TABLE `co_role` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
) DEFAULT CHARSET UTF8 COMMENT '角色表';

CREATE TABLE `co_position` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增id',
) DEFAULT CHARSET UTF8 COMMENT '职位表';