// identify DOM mode and set up variables

var myvideo = document.querySelector('video'),
mycontrol = document.querySelector('controlpanel'),
thumbs = document.querySelector('vidloader'),
playpause = document.querySelector('.pPause'),
mutebtn = document.querySelector('#volMute'),
volUp = document.querySelector('#volUp'),
volDown = document.querySelector('#volUp'),
fileext,
currentsource;


// function methods
function changeVideo(){


}

function playPauseVideos(){
// if the vid is ------0, start playing it ........... otherwise if the vid is --
// change the buttone label accordinly

if(myvideo.paused){
  play it
  change button label to pause
}----{
  myvideo.paused();
  change button label to play
}


function muteVideo(){
myvideo.volume = 0;
// this is how to tell it that mute = no volume = 0

}

function volumeUp(){
  // turn volume compare to current volume level
  // we need to make sure it can get
  //myvideo.volume = myvideo.volume += 0.9; ( we can use this line as "myvideo.volume +=0.9" )
myvideo.volume += 0.9
if(myvid.volume < 1){
  myvideo.volume += 0.6;
}

}

function volumeDown(){
if(myvideo.volume > 0){
  myvideo.volume -= 0.1;
}

}





// events and event listeners
for(car i=0; i < thumbs.length; i++){
thumbs[i].addEventListener

}

playpause.addEventListener('click',playPauseVideo, false);
mutebtn.addEventListener('click',muteVideo,false);
volup.addEventListener('click',volumeUp,false);
voldown.addEventListener('click',VolumeDown,false);
