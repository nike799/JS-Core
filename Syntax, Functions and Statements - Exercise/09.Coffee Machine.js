function solve(input) {
    let income = 0;

    function checkForMilk(data) {
        let hasMilk = false;
        for (let i = 0; i < data.length; i++) {
            if (data[i] === "milk") {
                hasMilk = true;
                break;
            }
        }
        return hasMilk;
    }

    input.forEach((element) => {
        let data = element.split(/[,\s]+/);
        let price = 0;
        let product = data[1];
        switch (product) {
            case "coffee":
                if (data[2] === "caffeine") {
                    price = 0.80;
                } else if (data[2] === "decaf") {
                    price = 0.90
                }
                break;
            case "tea":
                price = 0.80;
                break;
        }
        if (checkForMilk(data)) {
            let milk = Math.round(((price * 10) / 100) * 10) / 10;
            price += milk;
        }
        let sugar = Number(data[data.length - 1]);
        if (sugar !== 0) {
            price += 0.1;
        }
        let budget = Number(data[0]);
        if (budget >= price) {
            console.log(`You ordered ${data[1]}. Price: $${price.toFixed(2)} Change: $${(budget - price).toFixed(2)}`)
            income += price;
        } else {
            console.log(`Not enough money for ${data[1]}. Need $${Math.abs(budget - price).toFixed(2)} more.`)
        }
    });
    console.log(`Income Report: $${income.toFixed(2)}`)
}

solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);