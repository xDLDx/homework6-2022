const theVideo = document.getElementsByClassName('video')[0];

window.addEventListener("load", function () {
	console.log("Good job opening the window");
	var theVideo = document.getElementsByClassName('video')[0];
	var btnPlay = document.getElementById('play');
	var btnPause = document.getElementById('pause');
	var btnSlower = document.getElementById('slower');
	var btnFaster = document.getElementById('faster');
	var btnSkip = document.getElementById('skip');
	var btnMute = document.getElementById('mute');
	var btnOldSchool = document.getElementById('vintage');
	var inputVolume = document.querySelector('input');
	
});
var inputVolume = document.querySelector('input');
 inputVolume.addEventListener('input',updateVolume);
 var infoVolumne = document.querySelector("#volume");

function updateVolume(event){

     theVideo.volume=event.target.value/100;
     infoVolumne .innerHTML=event.target.value+'%';
	 console.log(theVideo.volume);

 }



document.querySelector("#play").addEventListener("click", function (event) {
	console.log("Play Video");
	theVideo.play();
	document.getElementById('volume').innerHTML=100*theVideo.volume+'%';
	theVideo.loop=false;
});

document.querySelector("#pause").addEventListener("click", function (event) {
	console.log("Pause Video");
	theVideo.pause();
});

document.querySelector("#slower").addEventListener("click", function (event) {
	
	theVideo.playbackRate= theVideo.playbackRate*0.95;
	
	theVideo.onratechange=function(){myFunction()};
	function myFunction(){
		console.log("New Speed is "+theVideo.playbackRate);
	};
});
document.querySelector("#faster").addEventListener("click", function (event) {
	
	theVideo.playbackRate= theVideo.playbackRate/0.95;
	
	theVideo.onratechange=function(){myFunction()};
	function myFunction(){
		console.log("New Speed is "+theVideo.playbackRate);
	}
	;
});

document.querySelector("#mute").addEventListener("click", function (event) {
    console.log("Video is muted");
	if(theVideo.muted ===false){
	theVideo.muted =true;
	document.getElementById('mute').innerHTML="Unmute";
    }
	else{
	theVideo.muted =false;
	document.getElementById('mute').innerHTML="Mute";
	}
})

document.querySelector("#skip").addEventListener("click", function (event) {
    var vidTime=theVideo.currentTime;
	var vidDuration=theVideo.duration;
	if(vidTime+15<vidDuration){
		console.log("Original location "+theVideo.currentTime);
        theVideo.currentTime+=15;

		console.log("New location "+theVideo.currentTime);
	}
	else{
		console.log("Original location "+theVideo.currentTime);
		theVideo.currentTime=0;
		theVideo.pause();
	    console.log("Going back to beiginning");
		console.log("New location "+theVideo.currentTime);
	}
	
	
})

document.querySelector("#vintage").addEventListener("click", function (event) {
	console.log("old school");
	theVideo.className = "oldSchool";
})
document.querySelector("#orig").addEventListener("click", function (event) {
	console.log("original");
	theVideo.className = "video";
})

