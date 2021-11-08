

var video = document.querySelector("#player1")

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
 })

//  slow down
document.querySelector("#slower").addEventListener("click", function(){
	console.log("slowing down video")
	video.playbackRate = (video.playbackRate * 0.95)
	console.log(video.playbackRate)

})

// speed up
document.querySelector("#faster").addEventListener("click", function(){
	console.log("speeding up video")
	video.playbackRate = (video.playbackRate / 0.95)
	console.log(video.playbackRate)
})

// skip ahead
document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime = video.currentTime + 15
	// handle case where video ends,  loops back to beginning
	video.addEventListener("ended", function(){
		video.currentTime = 0
		video.play() 
	})
	console.log(video.currentTime)
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
	 video.muted = true
 })

//  old school style
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
})

// original style
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
})

