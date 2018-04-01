
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var twitterKeys = new Twitter({
  consumer_key: 'rQ6z7iJymUeBpvaNn4us3XWcz',
  consumer_secret: 'tqzE81fI5Jc1qjObrP5aJdVqS4lZg5LLEBruzGoRJsXLwwRUyD',
  access_token_key: '971216917070532613-jXtpZJerW6Yi85HhcLuTUQH4qsyIVGU',
  access_token_secret: 'lpQVzsubXuDTsVnATo8Z6xmtrR9bRc5xWsCHDtkNZpBi4',
});

var spotifyKeys = new Spotify({
  id: "c35de30d24c142ac99c3f99d084402e5",
  secret: "7aaf433fbc264b7aaaee43a867a4cb00"
});

module.exports = {
	twitter : twitterKeys,
	spotify: spotifyKeys
};