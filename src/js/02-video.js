import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player')
const play = new Player(iframe);

play.on(`timeupdate`, throttle(delay, 1000));

function delay(data) {
    let time = data.seconds;
    localStorage.setItem(`videoplayer-current-time`, time);
}

const currentTime = localStorage.getItem('videoplayer-current-time');
play.setCurrentTime(currentTime);

