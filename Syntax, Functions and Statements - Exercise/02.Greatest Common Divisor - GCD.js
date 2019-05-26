function solve(num1,num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (num1 === 0 || num2 === 0) {
        return;
    }
    let min = Math.min(num1,num2);
    for (let i = min; i >= 1 ; i--) {
        if (num1 % i === 0 && num2 % i === 0) {
            console.log(i);
            return;
        }
    }
}
solve(2, 5);