const fs = require('fs');

const users = () => {
	let csv = 'id, name, picture'
	let names = ["Anoop Sownderraj", "Arthur Hovanesian", "ben.cronin", "David.Patterson-Cole", "hyuk.kim", "Jay.Unger", "John Lukenoff", 
				 "Katie Truong", "Mark Kuba", "Meifang Lin", "Michael Lin", "michael.lee", "Monsoon", "Nick Petrik", "nick.vincent-hill", 
				 "Ocean Zhang", "ozge.yurtsever", "pouya.ghazvini", "Sam Getlan", "Sam Liebow", "Alex Romanak", "brian.so", "Andrew Powell-Morse", 
				 "Aaron Tesfai", "Duss Wang", "Deepali Garg", "Diane Huang", "christopher.wildenradt", "David.Patterson-Cole", "ben.cronin", 
				 "Anoop Sownderraj", "Arthur Hovanesian", "Calin.Lewis", "Danny Tuñón", "josh.cho", "Cheyenne Noel Chun", "Courtney.Chao", "allison.chen", 
				 "Annisa Karaca"];
	let pictures = ['pic'];
	for (let i = 0; i < names.length; i++) {
		csv  = csv + `\n${i + 1}, ${names[i]}, ${pictures[0]}`;
	}
	return csv;
}

const reviews = (numOfReview) => {
	let csv = 'id, user_id, room_id, date, comment, accuracy, communication, cleanliness, location, check_in, value, average';

	const ranNum = (num) => {
		return Math.floor(Math.random() * num);
	}
	const randomDate = (start, end) => {
  		return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
	}
	let words =   ["Lorem ", "ipsum ", "dolor ", "sit ", "ame t ", "consectetur ", "adipiscing ", "elit. ", "Quisque ", "quis ", "ante ", "sed ", "metus ", 
				   "varius ", "luctus ", "a ", "at ", "justo. ", "Etiam ", "lectus ", "eli t ", "molestie ", "et ", "vestibulum ", "ne c ", "aliquet ", "at ", 
				   "lacus. ", "Mauris ", "feugia t ", "purus ", "vel ", "vulputate ", "vehicul a ", "nisi ", "enim ", "lacinia ", "arc u ", "sed ", "vulputate ", 
				   "dui ", "diam ", "eget ", "augue. ", "Ut ", "a ", "arcu ", "convalli s ", "lacinia ", "urna ", "e t ", "sodales ", "dui. ", "Aliquam ", "quis ", 
				   "sapien ", "et ", "neque ", "porta ", "fringilla ", "quis ", "sed ", "erat. ", "Nam ", "faucibus ", "sollicitudin ", "enim ", "sed ", "dictum. ", 
				   "Vestibulum ", "vehicula ", "dui ", "nis l ", "tempor ", "fringilla ", "arcu ", "consequat ", "at. ", "Donec ", "viverra ", "feugiat ", "m i ", "nec ", 
				   "mollis ", "nibh ", "posuere ", "vitae. ", "Vivamus ", "semper ", "orci ", "eu ", "quam ", "commodo ", "pretium. ", "Nulla ", "sodales ", "mauris ", 
				   "puru s ", "at ", "gravida."]
	const randomText = (words) => {
		let wordCount = Math.floor(Math.random() * words.length);
		let sentence = ''
		for (let i = 0; i < wordCount; i++) {
			sentence += words[ranNum(words.length)]
		}
		return sentence;
	}

	for (let i = 0; i < numOfReview; i++) {
		let room_id = ranNum(101)
		let accuracy = ranNum(6);
		let communication = ranNum(6);
		let cleanliness = ranNum(6);
		let location = ranNum(6);
		let check_in = ranNum(6);
		let value = ranNum(6);
		let average = Math.round((accuracy + communication + cleanliness + location + check_in + value) / 6);
		let date = randomDate(new Date(1800, 0, 1), new Date())
		csv = csv + `\n ${i + 1}, ${ranNum(40)}, ${room_id}, ${date}, ${randomText(words)}, ${accuracy}, ${communication}, ${cleanliness}, ${location}, ${check_in}, ${value}, ${average}`
	}
	return csv;
}
fs.writeFile('users.csv', users(), (err) => {
  if (err) throw err;
  fs.writeFile('reviews.csv', reviews(5000), (err) => {
  	if (err) throw err;
  	console.log('sucess');
  })
});



