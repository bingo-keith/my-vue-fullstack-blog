// SQL语句封裝
var user = {
  insert:'INSERT INTO user_info(NAME, AGE, INTRODUCTION, GENDER, SKILL_INFO, ABILITY_INFO, EXP_INFO) VALUES(?,?,?,?,?,?,?)',
  update:'UPDATE user_info SET NAME=?, AGE=? WHERE ID=?',
  delete: 'DELETE FROM user_info WHERE ID=?',
  queryById: 'SELECT i.*, (SELECT GROUP_CONCAT(name) FROM user_skill AS s WHERE s.RID=i.ID) AS SKILLS FROM user_info AS i WHERE i.ID=?',
  queryAllBaseInfo: 'SELECT * FROM user_info WHERE ID=?',
  queryUserSkills: 'SELECT * FROM user_skill WHERE RID=?',
  queryUserAbilities: 'SELECT * FROM user_ability WHERE RID=?'
};
module.exports = user;