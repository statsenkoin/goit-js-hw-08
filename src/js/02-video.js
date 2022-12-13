import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);
let videoPlayerCurrentTime = 0;

iframePlayer.on('play', function () {
  console.log('played the video!');
  console.log('videoPlayerCurrentTime :>> ', videoPlayerCurrentTime);
});

iframePlayer.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// ========================================================

iframePlayer.on('timeupdate', function (e) {
  //   console.log('seconds: ', e.seconds);
  videoPlayerCurrentTime = e.seconds;
});
