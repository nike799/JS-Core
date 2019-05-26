function solve(fruit, weight,money) {
    let weightInKilograms = weight/1000;
    let price = money * weightInKilograms;
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`)
}
solve('apple', 1563, 2.35);