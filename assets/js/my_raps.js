document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audio-player");
  const playButton = document.getElementById("play-audio");
  const stopButton = document.getElementById("stop-audio");
  const trackSelect = document.getElementById("track-select");

  // Change track when selecting a new one
  trackSelect.addEventListener("change", function () {
    // Update the audio source based on selected track
    audioPlayer.src = `assets/audio/${trackSelect.value}.mp3`;
  });

  // Play Audio
  playButton.addEventListener("click", function () {
    audioPlayer.play();
  });

  // Stop Audio
  stopButton.addEventListener("click", function () {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reset the track to the start
  });
});
