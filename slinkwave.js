//parameters

console.log('hej')
const svgMaxWidth = 800;
const xPoints = [];

function amplitude() {
    if (window.innerWidth < 450){
        return 10;
    }
    else return 20;
}

const padding = 5;
function offset(){

    return amplitude()+padding;

}


const animationSpeed = 0.2;



for (let i = 0; i <= svgMaxWidth; i++) {
    xPoints.push(i)
}


let time = 0;

function animate () {

    //this is to set the svg height to match the wave amplitude.
    document.querySelector('svg').setAttribute("height", `${amplitude()*2+(padding*2)}px`);

    //fill array with sine wave points
    let points = xPoints.map(x => {

        let y = sineWave(x,amplitude(), window.innerWidth/30, time, window.innerWidth);
        return [x,y + offset()]
    })

    //format to svg
    let path = "M" + points.map(p => {
        return p[0] + "," +p[1]
    }).join("L");

    //apply new shape to svg
    document.querySelector('svg').setAttribute('d', path);

    //speed of animation
    time += animationSpeed * (distance+0.5);

    //call this function before next frame update
    requestAnimationFrame(animate)
}

//start animation
animate();