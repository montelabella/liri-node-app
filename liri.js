require("dotenv").config();

//require("dotenv").config();
// imports keys to js files
var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require('fs');

var command = process.argv[2]
var selection = process.argv[3];
var liriNode = (command, selection);


function liriNode(command, selection) {
    switch (command) {
        case 'my-tweets':
            getTwitter();
            break;

        case 'spotify-this-song':
            getSpotify(selection);
            break;

        case 'movie-this':
            getMovie(selection);
            break;

        case 'do-what-it-says':
            readFile();
            break;

        default:
            console.log('"' + command + '" command not recognized');
            break;

    }
};

function getTwitter() {
    var twitterKey = new Twitter(keys.twitter);
    twitterKey.get('statuses/user_timeline', function (error, tweets, response) {
        if (error) {
            return console.log(error)
        }
        tweetResults('\nCommand: ' + command + '\n')
        tweets.forEach(function (tweet) {
            console.log('* ' + tweet.text)
            tweetResults('* ' + tweet.text + '\n')
        })

    })
};

function getSpotify(searchItem) {
    var spotify = new Spotify(keys.spotify)
    var query = searchItem ? searchItem : 'The Sign',
        trackNum = searchItem ? 0 : 5
    var secondArg = searchTerm ? searchTerm : ''
    spotify.search({
        type: 'track',
        query: query
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var track = data.tracks.items[trackNum]
        var album = track.album.name;
        var artist = track.artists[0].name;
        var ext_url = track.external_urls.spotify;
        var song = track.name;
        var result = '* ' + artist + '\n* ' + song + '\n* ' + ext_url + '\n* ' + album +
            '\n'

        console.log(result);
        logResults('\nCommand: ' + command + ' ' + secondArg + '\n' + result)
    });


}