-- user_info
create table  user_info
(
       ID                INT auto_increment primary key not null,
       NAME              VARCHAR(10) not null comment '姓名',
       AGE               NUMERIC(2) not null comment '年龄',
       INTRODUCTION      VARCHAR(500) comment '简介',
       GENDER            TINYINT(2) not null comment '0女 1男',
       SKILL_INFO        VARCHAR(500) comment '技能描述',
       ABILITY_INFO      VARCHAR(500) comment '能力描述',
       EXP_INFO          VARCHAR(500) comment '经验描述'
) comment '用户基本信息';

-- user_skill
create table  user_skill
(
       ID                INT auto_increment primary key not null comment '主键',
       RID               INT comment '外键',
       NAME              VARCHAR(255) comment '名称',
       INTRODUCTION      VARCHAR(4000) comment '简介',
       YEARS             NUMERIC(2) comment '年限',
       USER_LEVEL        NUMERIC(3) comment '程度'
) comment '用户技能';

-- user_ability
create table  user_ability
(
       ID                INT auto_increment primary key not null comment '主键',
       RID               INT comment '外键',
       NAME              VARCHAR(100) comment '名称',
       INTRODUCTION      VARCHAR(500) comment '简介'
) comment '用户能力';

-- user_experience
create table  user_experience
(
       ID                INT auto_increment primary key not null comment '编号',
       RID               INT comment '外键',
       USER_POSITION     VARCHAR(4000) comment '职位',
       DESCRIPTION       VARCHAR(4000) comment '描述'
) comment '项目经验';

-- user_message
create table  user_message
(
       ID                INT auto_increment primary key not null comment '编号',
       NAME              VARCHAR(10) comment '名称',
       EMAIL             VARCHAR(50) comment '电子邮箱',
       MESSAGE           VARCHAR(500) comment '留言内容',
       CREATED           DATETIME default now() comment '创建日期'
) comment '用户留言';

alter  table user_skill
       add constraint FK_user_skill_RID foreign key (RID)
       references user_info(ID);

alter  table user_ability
       add constraint FK_user_ability_RID foreign key (RID)
       references user_info(ID);

alter  table user_experience
       add constraint FK_user_experience_RID foreign key (RID)
       references user_info(ID);

