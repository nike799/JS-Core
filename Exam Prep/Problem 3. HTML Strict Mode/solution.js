function solve(inputArr) {
    let sortedCities = [];
    let townsWhichHaveMostPopularModel ={};

    function getMostProfitableCity() {
        let cities = {};

        inputArr.forEach(obj => {
            if (cities[obj.town]) {
                cities[obj.town].totalProfit += obj.price;
                cities[obj.town].totalVignettes += 1;
            } else {
                let properties = {};
                properties.totalProfit = obj.price;
                properties.totalVignettes = 1;
                cities[obj.town] = properties
            }
        });
        Object.keys(cities).forEach(city => {
            sortedCities.push([city, cities[city]]);
        });
        sortedCities = sortedCities.sort((a, b) => {
            if (b[1].totalProfit - a[1].totalProfit !== 0) {
                return b[1].totalProfit - a[1].totalProfit;
            } else {
                return b[1].totalVignettes - a[1].totalVignettes;
            }
        });
        return sortedCities[0][0];
    }

    function getMostDrivenCar() {
        let mostProfitableCity = getMostProfitableCity();
        let cars = {};
        inputArr.forEach(obj => {
            if (obj.town === mostProfitableCity) {
                if (cars[obj.model]) {
                    cars[obj.model].count += 1;
                } else {
                    let properties = {};
                    properties.count = 1;
                    properties.vignettePrice = obj.price;
                    cars[obj.model] = properties;

                }
            }
        });
        let sortedCars = [];
        Object.keys(cars).forEach(model => {
            sortedCars.push([model, cars[model]]);
        });
        sortedCars = sortedCars.sort((a, b) => {
            if (b[1].count - a[1].count !== 0) {
                return b[1].count - a[1].count;
            } else {
             if(b[1].vignettePrice - a[1].vignettePrice !== 0){
                 return b[1].vignettePrice - a[1].vignettePrice;
             }else {
                 return a[0].localeCompare(b[0]);
             }
            }
        });
        return sortedCars[0][0];
    }
    let mostPopularCar = getMostDrivenCar();
    inputArr.forEach(obj=>{
        if (obj.model === mostPopularCar ) {
            if(townsWhichHaveMostPopularModel[obj.town]){
                townsWhichHaveMostPopularModel[obj.town].push(obj.regNumber);
            }else {
                townsWhichHaveMostPopularModel[obj.town] = [];
                townsWhichHaveMostPopularModel[obj.town].push(obj.regNumber);
            }
        }
    });
    let sortedTownsWhichHaveMostPopularModel = [];
    Object.keys(townsWhichHaveMostPopularModel).forEach((city)=>{
        let sortedRegNumbers = townsWhichHaveMostPopularModel[city].sort((a,b)=>{
           return  a.localeCompare(b);
        });
        sortedTownsWhichHaveMostPopularModel.push([city,sortedRegNumbers]);
    });
    sortedTownsWhichHaveMostPopularModel = sortedTownsWhichHaveMostPopularModel.sort((a,b)=>{
        return a[0].localeCompare(b[0]);
    });
    console.log(`${getMostProfitableCity()} is most profitable - ${sortedCities[0][1].totalProfit} BGN`);
    console.log(`Most driven model: ${getMostDrivenCar()}`);
    sortedTownsWhichHaveMostPopularModel.forEach(arr=>{
        console.log(`${arr[0]}: ${arr[1].join(", ")}`)
    });
}