const video = document.getElementById('player');
video.volume = 0.1;
playVideo = function(){
  if(video.paused){
    video.play();
  }else{
    video.pause();
  }
}