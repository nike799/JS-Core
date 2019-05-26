function solve(matrix, command) {
    let header = matrix[0];
    matrix = matrix.slice(1);
    let reg = new RegExp("\\s+")
    let commandToken = command.split(reg);
    let index = 0;
    for (let i = 0; i < header.length; i++) {
        if (header[i]===commandToken[1]){
            index = i;
            break;
        }
    }
    switch (commandToken[0]) {
        case "hide":
            for (let i = 0; i < matrix.length; i++) {
                matrix[i].splice(index,1);
            }
            break;
        case "sort":
            matrix = matrix.sort((arr1,arr2)=>{
                return (arr1[index]).localeCompare(arr2[index]);
            });
            break;
        case "filter":
            matrix.filter(arr=>{
                return  arr[index]===commandToken[2];
            });
            break;
    }
    console.log(header.join(" | "));
    matrix.forEach(arr=> console.log(arr.join(" | ")));
}