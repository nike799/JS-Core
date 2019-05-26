
/**
 * 
 * @param {Array} arr 
 */
function solve(arr) {

    let area = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };
    let speedOver = Number(arr[0]) - Number(area[arr[1]]);

    if (speedOver > 0 && speedOver <= 20) {
        console.log('speeding')
    } else if (speedOver > 20 && speedOver <= 40) {
        console.log('excessive speeding')
    } else if (speedOver > 40) {
        console.log('reckless driving')
    }
}

solve([200, 'motorway']);