import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import {save,load} from './localstorage'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
player.on('timeupdate',throttle(function({seconds}) {
    save(STORAGE_KEY, seconds);
  
},1000) );
 ;
const timeStorage = load(STORAGE_KEY);
player.setCurrentTime(timeStorage || 0);





