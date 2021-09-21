const pi = Math.PI;

const container = document.querySelector('body');
let distance = 1;
const easing = (num) => Math.pow(num, 2);

//returns y point of wave
function sineWave(x, amplitude, period, time){
const windowWidthFactor = window.innerWidth/1000 + 1;
    return amplitude*Math.cos(x*windowWidthFactor/20*(distance)*0.3+0.1) * Math.sin((x+time) * (pi/period))
}

// outputs distance from center, range 0-1
function calculateDistance([x, y]) {
    const center = [innerWidth / 2, window.innerHeight / 2];
    const maxHypot = Math.hypot(center[0], center[1]);
    const hypot = Math.hypot(center[0] - x, center[1] - y);

    return hypot / maxHypot;
}



const handleMove = ({ clientX, clientY }) => {
    distance = (easing(calculateDistance([clientX, clientY])));
};

const handleTouch = ({ touches }) => {
    distance = (easing(calculateDistance([touches[0].clientX, touches[0].clientY])));
};

container.addEventListener("mousemove", handleMove);
container.addEventListener("touchmove", handleTouch);



