const mysql = require('mysql');
const mysqlConfig = require('./config.js');


const connection = mysql.createConnection(mysqlConfig);

const getReviews = (room_id, cb) => {
	let query = `select users.name, reviews.comment, reviews.accuracy, reviews.communication, reviews.cleanliness, reviews.location, reviews.check_in, reviews.value, reviews.average from users inner join reviews on users.id = reviews.user_id where reviews.room_id = ${room_id}`
	connection.query(query, (err, results) => {
		if (err) console.error(err)
		cb(err, results)
	})
}

module.exports = {
  getReviews,
};
