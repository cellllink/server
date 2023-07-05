CREATE TABLE
    `co_team_user` (
        `team_id` int(11) unsigned NOT NULL COMMENT '团队id',
        `user_id` int(11) unsigned NOT NULL COMMENT '用户id',
        -- 
        `status` tinyint(4) unsigned NOT NULL DEFAULT 2 COMMENT '成员状态',
        PRIMARY KEY (`team_id`, `user_id`)
    ) DEFAULT CHARSET UTF8 COMMENT '团队用户的关联表';