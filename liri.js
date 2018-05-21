require("dotenv").config();

//require("dotenv").config();
// imports keys to js files
var keys = require('./keys.js');
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require("request");
var fs = require('fs');

var command = process.argv[2]
var selection = process.argv[3];
var liriNode = (command, selection);

var getMyTweets = function () {
    var client = new Twitter(keys.twitter);
    var params = {
        screen_name: 'inrtracker'
    };
    client.get('statuses/usere_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log(" ");
                console.log(tweets[i].text);
            }
        }
    });

var getArtistNames = function(artist) {
    return artist.name;
}
}
var getMeSpotify = function (songName) {
    spotify.search({
        type: 'track',
        query: song
    }, function (err, data) {
        if (err) {
            console.log("error occurred: " + err);
            return;
        }
        var songs  = data.tracks.items;
        for(var i=0; i<songs.length; i++) {
            console.log(i);
            console.log('song name: ' + songs[i].name);
            cconsole.log('album: ' + songs[i].album.name);
            console.log('-----------------------------------');
        }
        
    });
}

var getMeMovie = function(movieName){
    
   request('https://www.omdbapi.com/?apikey=trilogy&t=' + movieName + ' &y=&plot=short&r=json'
, function(error, res, body) {
    if (!error && res.statusCode == 200) {
        var jsonData = JSON.parse(body);

        console.log('Title: ' + jsonData.Title);
        console.log('Year: ' + jsonData.Year);
        console.log('Rated: ' + jsonData.Rated);
        console.log('Country: ' + jsonData.Country);
        console.log('Language: ' + jsonData.Language);
        console.log('Plot: ' + jsonData.Plot);
        console.log('Actors: ' + jsonData.Actors);
        console.log('')
    }
});
}  
var doWhatItSays = function() {
    fs.readFile('random.txt', 'utf8', function(err,data){
        if(err) throw err;
        var dataArr = data.split(',');
        if (dataArr.length == 2) {
            pick(dataArr[0], dataArr[1]);

        } else if(dataArr.length == 1) {
            pick(dataArr[0]);
        }
 

}); 
}   
    


var pick = function (caseData, functionData) {
    switch (caseData) {
        case 'my-tweets':
            getMyTweets();
            break;
        case 'spotify-this-song':
            getMeSpotify(functionData);
            break;
        case 'movie-this':
        getMeMovie(functionData);
        case 'do-what-it-says':
        doWhatItSays();
        break;
        default:
            console.log('LIRI does not know that');
    }
}
var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
};
runThis(process.argv[2], process.argv[3]);


