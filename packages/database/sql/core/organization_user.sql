CREATE TABLE
    `organization_user` (
        `organization_id` int(11) unsigned NOT NULL COMMENT '组织id',
        `user_id` int(11) unsigned NOT NULL COMMENT '用户id',
        `join_time` datetime COMMENT '加入时间',
        `status` tinyint(4) unsigned NOT NULL DEFAULT 2 COMMENT '成员状态 0:已邀请 1:已拒绝 2:在职(默认) 3:离职 99:已删除',
        PRIMARY KEY (`organization_id`, `user_id`)
    ) DEFAULT CHARSET UTF8 COMMENT '组织用户关联表';