const { createPlaylist } = require('../js/playlist'); // Replace with the correct path

describe('createPlaylist', () => {
  test('should add songs to the playlist and respect capacity', () => {
    const playlist = createPlaylist(3); // Capacity of 3

    playlist.playSong('Song 1');
    playlist.playSong('Song 2');
    playlist.playSong('Song 3');

    expect(playlist.getPlaylist()).toEqual(['Song 1', 'Song 2', 'Song 3']); // All songs should be in the playlist

    playlist.playSong('Song 4'); // Exceeds capacity, should remove 'Song 1'

    expect(playlist.getPlaylist()).toEqual(['Song 2', 'Song 3', 'Song 4']); // 'Song 1' should be removed
  });

  test('should return the correct playlist', () => {
    const playlist = createPlaylist(5);

    playlist.playSong('Song A');
    playlist.playSong('Song B');

    expect(playlist.getPlaylist()).toEqual(['Song A', 'Song B']); // Check if playlist returns correct songs

    playlist.playSong('Song C');

    expect(playlist.getPlaylist()).toEqual(['Song A', 'Song B', 'Song C']); // Check after adding another song
  });

  test('should handle empty playlist', () => {
    const playlist = createPlaylist(2);

    expect(playlist.getPlaylist()).toEqual([]); // Playlist should start empty
  });

  test('should not add more songs than capacity', () => {
    const playlist = createPlaylist(1);

    playlist.playSong('Song X');
    playlist.playSong('Song Y'); // Exceeds capacity, should only have 'Song Y'

    expect(playlist.getPlaylist()).toEqual(['Song Y']);
  });
});
