// Import the createPlaylist function from playlist.js
// Note: This assumes that you have implemented the createPlaylist function in playlist.js
const { createPlaylist } = require('./js/playlist');

// Create a playlist with an initial capacity of 3
const playlist = createPlaylist(3);

// Add songs to the playlist
playlist.playSong("S1");
playlist.playSong("S2");
playlist.playSong("S3");

// Print the playlist after adding songs
console.log("Playlist after adding songs:", playlist.getPlaylist());

playlist.playSong("S4");
console.log("Playlist after S4:", playlist.getPlaylist());

playlist.playSong("S2");
console.log("Playlist after S2:", playlist.getPlaylist());

playlist.playSong("S1");
console.log("Playlist after S1:", playlist.getPlaylist());
