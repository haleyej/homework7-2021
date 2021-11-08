

var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// implement play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
 });

// implement pause button
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
 });

//  mute video
 document.querySelector("#mute").addEventListener('click', function() {
	 console.log("Muted Video")
	 video.muted = true
 })
