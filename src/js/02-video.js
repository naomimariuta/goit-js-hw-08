import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.getElementById('vimeo-player');
const player = new Player(vimeoPlayer);
console.log(player);
player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(currentTime => {
      localStorage.setItem('videoplayer-current-time', currentTime);
    });
  }, 1000)
);

const time = localStorage.getItem('videoplayer-current-time');
time === null ? player.setCurrentTime(0) : player.setCurrentTime(time);