function createPlaylist(capacity) {
  // Create the playlist object with initial properties
  const playlist = {
    capacity: capacity, // Store the maximum capacity of the playlist
    queue: [], // Store the list of songs in the playlist
  };

  // Define the function to add a song to the playlist
  function playSong(song) {
    // Check if the playlist is at maximum capacity
    if (playlist.queue.length === playlist.capacity) {
      playlist.queue.shift(); // Remove the oldest song from the playlist
    }
    playlist.queue.push(song); // Add the new song to the end of the playlist
  }

  // Define the function to retrieve the playlist
  function getPlaylist() {
    return playlist.queue; // Return the list of songs in the playlist
  }

  // Return an object containing the methods to interact with the playlist
  return {
    playSong: playSong, // Expose the playSong method
    getPlaylist: getPlaylist, // Expose the getPlaylist method
  };
}

module.exports = {
  createPlaylist,
};
