

var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// implement play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video")
	video.play()
	var display = document.querySelector("#volume")
	display.innerHTML = document.querySelector("#slider").value + "%"

 });

// implement pause button
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause()
 })

//  slow down
document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = (video.playbackRate * 0.95)
	console.log(video.volume)
	console.log("New speed is:" + video.playbackRate)

})

// speed up
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = (video.playbackRate / 0.95)
	console.log("New speed is: " + video.playbackRate)
})

// skip ahead
document.querySelector("#skip").addEventListener("click", function(){
	console.log("Current location: " + video.currentTime)
	var time = video.currentTime
	var duration = video.duration

	if ((time + 15) < duration)  {
		video.currentTime = time + 15
	}
   else if ((time + 15) >= duration) {
		video.currentTime = 0
	}
	// video.currentTime = video.currentTime + 15
	// handle case where video ends,  loops back to beginning
	// video.addEventListener("ended", function(){
		// video.currentTime = 0
		// video.play() 
	// })
	console.log("New location at: " + video.currentTime)
})

// slider
document.querySelector("#slider").addEventListener("change", function(){
	console.log("clicked slider")
	var volume = document.querySelector("#slider").value
	var display = document.querySelector("#volume")
	display.innerHTML = volume + "%"
	video.volume = volume / 100
	console.log(video.volume)
})

//  mute video
 document.querySelector("#mute").addEventListener('click', function() {
	 console.log("Muted Video")
	 var muteButton = document.querySelector("#mute")
	 video.muted = !video.muted
	 if (video.muted == true)  {
		 muteButton.innerHTML = 'Unmute'
	 }
	else if (video.muted == false) {
		 muteButton.innerHTML = 'Mute'
	 }
 })

//  old school style
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
	console.log("Changed to old school style")
})

// original style
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
	console.log("Changed to original school style")
})

