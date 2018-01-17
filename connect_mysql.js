// 查询数据
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   database : 'test'
// });
//
// connection.connect();
//
// connection.query('SELECT * FROM websites', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });

// 插入数据
// var mysql  = require('mysql');
//
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   port: '3306',
//   database: 'test',
// });
//
// connection.connect();
//
// // var  addSql = 'select * from websites';
// var  addSql = 'INSERT INTO websites(name, url, alexa, country, described) VALUES (?, ?, ?, ?, ?)';
// var  addSqlParams = ['test', 'https://c.runoob.com', '23453', 'CN', 'test'];
// //增
// connection.query(addSql, addSqlParams, function (err, result) {
//         if(err){
//          console.log('[INSERT ERROR] - ',err.message);
//          return;
//         }
//
//        console.log('--------------------------INSERT----------------------------');
//        //console.log('INSERT ID:',result.insertId);
//        console.log('INSERT ID:', result);
//        console.log('-----------------------------------------------------------------\n\n');
// });
//
// connection.end();

// 更新数据
// var mysql  = require('mysql');
//
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root',
//   port: '3306',
//   database: 'test',
// });
//
// connection.connect();
//
// var modSql = 'UPDATE websites SET name = ?,url = ?, described = ? WHERE id = ?';
// var modSqlParams = ['runoob', 'https://m.runoob.com','this is a update test', 6];
// //改
// connection.query(modSql,modSqlParams,function (err, result) {
//    if(err){
//          console.log('[UPDATE ERROR] - ',err.message);
//          return;
//    }
//   console.log('--------------------------UPDATE----------------------------');
//   console.log('UPDATE affectedRows',result.affectedRows);
//   console.log('-----------------------------------------------------------------\n\n');
// });
//
// connection.end();

// 删除数据
var mysql  = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port: '3306',
  database: 'test',
});

connection.connect();

var delSql = 'DELETE FROM websites where id=5';
//删
connection.query(delSql,function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }

       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       console.log('-----------------------------------------------------------------\n\n');
});

connection.end();
