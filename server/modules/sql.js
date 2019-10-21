// SQL语句封裝
var user = {
  insert:'INSERT INTO user_info(id, name, age) VALUES(?,?,?)',
  update:'UPDATE user_info SET name=?, age=? WHERE id=?',
  delete: 'DELETE FROM user_info WHERE id=?',
  queryById: 'SELECT * FROM user_info WHERE id=?',
  queryAll: 'SELECT res.*, s.NAME, s.USER_LEVEL, s.YEARS, a.NAME AS SKILLS FROM user_info AS res left join user_skill AS s on res.ID = s.RID left join user_ability AS a on res.ID = a.RID'
};
module.exports = user;