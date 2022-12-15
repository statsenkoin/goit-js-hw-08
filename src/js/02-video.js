import Player from '@vimeo/player';
const _throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);

localStorage.getItem('videoplayer-current-time')
  ? iframePlayer.setCurrentTime(
      localStorage.getItem('videoplayer-current-time')
    )
  : 0;

// ===== без throttle ===================================================
// iframePlayer.on('timeupdate', function (e) {
//   localStorage.setItem('videoplayer-current-time', e.seconds.toString());
// });

iframePlayer.on(
  'timeupdate',
  _throttle(function (e) {
    localStorage.setItem(
      'videoplayer-current-time',
      Math.floor(e.seconds).toString()
    );
    console.log(
      'videoplayer-current-time (seconds) >> ',
      localStorage.getItem('videoplayer-current-time')
    );
  }, 1000)
);
