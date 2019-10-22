/*
    数据增删改查模块封装
    req.query 解析GET请求中的参数 包含在路由中每个查询字符串参数属性的对象，如果没有则为{}
    req.params 包含映射到指定的路线“参数”属性的对象,如果有route/user/name，那么“name”属性可作为req.params.name
    req.body通常用来解析POST请求中的数据
     +req.query.id 可以将id转为整数
 */
// 引入mysql
const mysql = require('mysql');
// 引入mysql连接配置
const mysqlconfig = require('../config/mysql');
// 引入连接池配置
const poolextend = require('./poolextend');
// 引入SQL模块
const sql = require('./sql');
// 引入json模块
const json = require('./json');
// 使用连接池，提升性能
const pool = mysql.createPool(poolextend({}, mysqlconfig));

/**
 * @description 转换大小写和下划线命名
 * @author Chilly
 * @param {*} [obj={}]    对象
 * @param {string} [type='H']   转换类型：H驼峰，U下划线
 * @returns
 */
function serializeJSON(obj = {}, type = 'H') {
    return Object.keys(obj).reduce((res, item) => {
        const objKey = type === 'H'
                        ? item.toLowerCase().replace(/_(\w)/g, (v, k) => k.toUpperCase())
                        : item.replace(/([A-Z])/g, (k, v) => `_${k}`).toUpperCase()
        res[objKey] = obj[item]
        return res
    }, {})
}

const userData = {
    add: function(req, res, next) {
        let param = req.body;
        param = serializeJSON(param, 'U');
        param = [ param.NAME, param.AGE, param.INTRODUCTION || '', param.GENDER, param.SKILL_INFO || '', param.ABILITY_INFO || '', param.EXP_INFO || '' ]
        pool.getConnection(function(err, connection) {
            connection.query(sql.insert, param, function(err, result) {
                if (result) {
                    result = 'add'
                }
                // 以json形式，把操作结果返回给前台页面
                json(res, result);
                // 释放连接
                connection.release();
            });
        });
    },
    delete: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            const id = +req.query.id;
            connection.query(sql.delete, id, function(err, result) {
                if (result.affectedRows > 0) {
                    result = 'delete';
                } else {
                    result = undefined;
                }
                json(res, result);
                connection.release();
            });
        });
    },
    update: function(req, res, next) {
        const param = req.body;
        if (param.name == null || param.age == null || param.id == null) {
            json(res, undefined);
            return;
        }
        pool.getConnection(function(err, connection) {
            connection.query(sql.update, [param.name, param.age, +param.id], function(err, result) {
                if (result.affectedRows > 0) {
                    result = 'update'
                } else {
                    result = undefined;
                }
                json(res, result);
                connection.release();
            });
        });
    },
    
    
    queryById: function(req, res, next) {
        const id = +req.query.id;
        pool.getConnection(function(err, connection) {
            connection.query(sql.queryById, id, function(err, result) {
                if (result) {
                    const _result = result;
                    result = {
                        result: 'select',
                        data: _result.map(v => serializeJSON(v))
                    }
                } else {
                    result = undefined;
                }
                json(res, result);
                connection.release();
            });
        });
    },
    queryAllBaseInfo: function(req, res, next) {
        const id = +req.query.id;
        pool.getConnection(function(err, connection) {
            connection.query(sql.queryAllBaseInfo, id, function(err, result) {
                if (!!result) {
                    const _result = result
                    result = {
                        result: 'selectall',
                        data: _result.map(v => serializeJSON(v))
                    }
                } else {
                    result = undefined
                }
                json(res, result)
                connection.release()
            });
        });
    },
    queryUserSkills: function(req, res, next) {
        const id = +req.query.id;
        pool.getConnection(function(err, connection) {
            connection.query(sql.queryUserSkills, id, function(err, result) {
                if(!!result) {
                    const _result = result
                    result = {
                        result: 'userSkills',
                        data: _result.map(v => serializeJSON(v))
                    }
                } else {
                    result = undefined
                }
                json(res, result)
                connection.release()
            })
        })
    },
    queryUserAbilities: function(req, res, next) {
        const id = +req.query.id;
        pool.getConnection(function(err, connection) {
            connection.query(sql.queryUserAbilities, id, function(err, result) {
                if(!!result) {
                    const _result = result
                    result = {
                        result: 'userAbilities',
                        data: _result.map(v => serializeJSON(v))
                    }
                } else {
                    result = undefined
                }
                json(res, result)
                connection.release()
            })
        })
    }
};
module.exports = userData;