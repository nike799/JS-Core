function solve(n) {
    let digits = n.toString().split("");
    let result = true;
    let count = Number(digits[digits.length-1]);
    for (let i = 0; i < digits.length - 1; i++) {
        count += Number(digits[i]);
        if (digits[i] !== digits[i + 1]) {
            result = false;
        }
    }
    console.log(result);
    console.log(count);
}

solve(2222222);