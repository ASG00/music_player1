# Playlist Creation and Management

This project implements a simple playlist management system in JavaScript. It allows you to create playlists with a specified capacity and manage the addition of songs to the playlist.

## Implementation

The playlist management system consists of a `createPlaylist` function that returns an object with methods to interact with the playlist. The implementation includes the following components:

- `playSong(song)`: This function is used to add a new song to the playlist. If the playlist is at maximum capacity, the oldest song is removed from the beginning of the queue to make space for the new song.

- `getPlaylist()`: This function retrieves the list of songs currently in the playlist.

## Getting Started

To use the playlist management system, follow these steps:

1. Include the implementation code in your JavaScript project.
2. Create a new playlist by calling the `createPlaylist` function and passing the desired capacity as an argument. For example:
   ```javascript
   const playlist = createPlaylist(3); // Create a playlist with a capacity of 3 songs
   
    Add songs to the playlist using the playSong method. For example:

    playlist.playSong("Song 1");
    playlist.playSong("Song 2");
    playlist.playSong("Song 3");

## Example

// Example: Using the Playlist Management System

// Create a playlist with an initial capacity of 3 songs
const playlist = createPlaylist(3);

// Add songs to the playlist
playlist.playSong("Song 1");
playlist.playSong("Song 2");
playlist.playSong("Song 3");

// Print the current playlist after adding songs
console.log("Playlist after adding songs:", playlist.getPlaylist());

// Add another song, which will replace the oldest song ("Song 1")
playlist.playSong("Song 4");
console.log("Playlist after adding Song 4:", playlist.getPlaylist());

// Expected output: Song 2, Song 3, Song 4

# Running the Project

To run this project, follow these steps:

1. **Install Node.js:**
   Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2. **Install Jest:**
   You can install Jest for unit test cases using the following command:  `npm install -g jest`

3. Run the Script:
   You can start the project using the following command: `npm run dev`

4. View the Result:
After running the above command, you will see the project output within the terminal window.

5. Run the Test Cases

Run the test cases using the following command: `npm run test`

That's it! You've successfully set up and run the project.




