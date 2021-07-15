// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword",
//   database: "mydb"
// }); 
fetch("/data")
.then((res)=>res.json())
.then(data => console.log(data))
.catch(console.error)

// const pool = new Pool({ 
//   user: 'awnxjhldkaoisa',
//   host: 'ec2-54-211-77-238.compute-1.amazonaws.com',
//   database: 'd1r3brqarbmi7v',
//   password: 'd56b56c1868335b38051b3d12b02812d860929637cd993e51e936cf89aa424eb',
//   port: 5432,
// })
// ! ***********************************************
const button = document.getElementsByClassName("BorrowBtn");
button.addEventListener('click', () => {
    getUsers();
    console.log(getUsers());
})

// const getUsers = (request, response) => {
//     pool.query('SELECT * FROM users', (error, results) => {
//       if (error) {
//         throw error
//       }
//     //   response.status(200).json(results.rows);
//         console.log(results.rows);
//     })
//   }




// TODO /*********************************************/


// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM books", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// }); 
