function solve() {
    let trElements = Array.from(document.getElementsByTagName('tr')).slice(2);
    let matrix = [];
    let tableBorder = document.getElementsByTagName('table')[0];
    let pResultElement = document.getElementById('check').children[0];
    document.getElementsByTagName('button')[0]
        .addEventListener('click', checkResult);
    document.getElementsByTagName('button')[1]
        .addEventListener('click', clearTable);

    function clearTable() {
        trElements.forEach((tr) => {
            Array.from(tr.getElementsByTagName('input')).forEach((input) => input.value = '');
        });
        tableBorder.style.border = '';
        pResultElement.textContent = '';
    }

    function checkResult() {
        matrix = [];
        for (let i = 0; i < trElements.length; i++) {
            let row = [];
            Array.from(trElements[i].getElementsByTagName('input')).forEach((input) => {
                if (input.value !== undefined) {
                    row.push(Number(input.value));
                }
            });
            matrix.push(row);
        }
        let sumOfNumbersFirstRow = matrix[0].reduce((acc, curr) => {
            acc += curr;
            return acc;
        }, 0);
        let hasSudomu = true;
        matrix.forEach(row => {
            let sumOfNumbersOfMatrixRow = row.reduce((acc, curr) => {
                acc += curr;
                return acc;
            }, 0);
            if (sumOfNumbersOfMatrixRow !== sumOfNumbersFirstRow || sumOfNumbersOfMatrixRow === 0) {
                hasSudomu = false;
            }
        });
        if (hasSudomu) {
            tableBorder.style.border = '2px solid green';
            pResultElement.textContent = 'You solve it! Congratulations!';
        } else {
            tableBorder.style.border = '2px solid red';
            pResultElement.textContent = 'NOP! You are not done yet...';
        }
    }
}