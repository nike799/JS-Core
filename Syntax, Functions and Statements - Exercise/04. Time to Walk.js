function solve(steps, meters, speed) {
    let distanceInMeters = steps * meters;
    let speedInSeconds = 3600 / (speed * 1000);
    let getDistanceInSeconds = distanceInMeters * speedInSeconds;

    getDistanceInSeconds += Math.floor(distanceInMeters / 500) * 60;

    let hours = Math.floor(getDistanceInSeconds / 3600);
    let mins = Math.floor(getDistanceInSeconds / 60 % 60);
    let secs = Math.round(getDistanceInSeconds % 60);

    if (hours.toString().length === 1) {
        hours = "0" + hours;
    }
    if (mins.toString().length === 1) {
        mins = "0" + mins;
    }

    if (secs.toString().length === 1) {
        secs = "0" + secs;
    }
    console.log(`${hours}:${mins}:${secs}`)
}

solve(2564, 0.70, 5.5);