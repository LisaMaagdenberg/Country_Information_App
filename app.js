//This file automatically runs the level 2 code. For level 1, take a look at the comments :)
var fs = require('fs');

//lines 3-14 are level 2 code!
var jsonReader = require('./json-file-reader')

function showNameDomain(someData){		//parsed is argument, same as countries in level 1.
	for (var i = 0; i < someData.length; i++) {
		if (someData[i].name === process.argv[2]) {
			console.log('Country: ' + someData[i].name);
			console.log('Top level domain: ' + someData[i].topLevelDomain);
		}
	}
}

jsonReader('./countries.json', showNameDomain);

// *** This is the level 1 code! ***
// fs.readFile('./countries.json', 'utf-8', function (err, contents){
// 	if (err) {
// 		console.log('WHYYYYY?!');
// 		throw err;
// 	}
// 	var nameInTerminal = process.argv[2];	//called like this so you don't confuse .name and var name
// 	var countries = JSON.parse(contents);	//All the data from the file is now an array with objects, stored in var countries
// 	for (var i = 0; i < countries.length; i++) {	//.length of array, which has all the countries as objects
// 		if (countries[i].name === nameInTerminal) {
// 			console.log("Country: " + countries[i].name);	
// 			console.log("Top level domain: " + countries[i].topLevelDomain);		
// 		}
// 	}
// });