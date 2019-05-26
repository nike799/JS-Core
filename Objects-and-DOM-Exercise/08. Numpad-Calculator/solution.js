function solve() {
    let allButtons = Array.from(document.querySelectorAll('.keys button'));
    document.querySelector('button.clear')
        .addEventListener('click', () => {
            expressionOutput.textContent = '';
            resultOutput.textContent = '';
        });
    let expressionOutput = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');
    let result = 0;

    function getResult() {
        if (expressionOutput.textContent) {
            let getNumbersReg = new RegExp('[^\\d\\.\\s]+');
            let getOperandReg = new RegExp('[0-9\\.\\s]+');
            let numbers = expressionOutput.textContent.split(getNumbersReg).map((n) => Number(n));
            let operands = expressionOutput.textContent.split(getOperandReg);
            operands = operands.slice(1, operands.length - 1);
            let index = 0;
            let cycle = 0;
            numbers.forEach((n) => {
                if (cycle === 0) {
                    result = n;
                    cycle++;
                } else {
                    switch (operands[index]) {
                        case '+':
                            result += n;
                            break;
                        case '-':
                            result -= n;
                            break;
                        case 'x':
                            result *= n;
                            break;
                        case '/':
                            result /= n;
                            break;
                    }
                    index++;
                }
            });
            resultOutput.textContent = result;
        }
    }

    let resultButton = document.querySelector('button[value="="]').addEventListener('click', getResult);


    function visualizeBtnValue(e) {
        let value = e.target.textContent;
        let lastChar = expressionOutput.textContent.trimEnd().substr(expressionOutput.textContent.trimEnd().length - 1);
        let isEmptyExpressionOutput = expressionOutput.textContent === '' && isNaN(Number(value));
        let isLastCharIsOperand = !isNaN(Number(value)) || (lastChar !== 'x' && lastChar !== '-' && lastChar !== '+' && lastChar !== '/');
        if (!isEmptyExpressionOutput && (!isNaN(Number(value)) || (!isNaN(Number(lastChar)) || lastChar === '.')) && value !== "=" && isLastCharIsOperand) {
            if (isNaN(Number(value)) && value !== '.') {
                value = ' ' + value + ' ';
            }
            expressionOutput.textContent += value;
        }
    }

    allButtons.forEach((btn) => {
        btn.addEventListener('click', visualizeBtnValue)
    })
}
