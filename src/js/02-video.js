import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate ',_.throttle(function(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
},1000) );

// const timeStorage = localStorage.getItem('videoplayer-current-time');
// player.setCurrentTime(timeStorage || 0);
