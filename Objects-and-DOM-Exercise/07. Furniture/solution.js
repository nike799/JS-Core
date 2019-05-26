function solve() {
    let generateButton = document.getElementsByTagName('button')[0];
    let buyButton = document.getElementsByTagName('button')[1];
    generateButton.addEventListener('click', generateFurniture);
    buyButton.addEventListener('click', buySelectedProducts);
    let boughtProductsNames = [];
    let totalPrice = 0;
    let decFactor = 0;

    function buySelectedProducts() {
        Array.from(document.getElementsByTagName('tr')).slice(2)
            .forEach((tr) => {
                let isChecked = tr.lastChild.firstChild.checked;
                if (isChecked) {
                    boughtProductsNames.push(tr.children[1].querySelector('p').textContent);
                    totalPrice += Number(tr.children[2].querySelector('p').textContent);
                    decFactor += Number(tr.children[3].querySelector('p').textContent);
                }
            });
        let inputTextarea = document.getElementsByTagName('textarea')[1];
        inputTextarea.value = `Bought furniture: ${boughtProductsNames.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor / boughtProductsNames.length}`
    }

    function generateFurniture() {
        let inputTextarea = document.getElementsByTagName('textarea')[0];
        let jsonData = JSON.parse(inputTextarea.value);
        let tbodyElement = document.getElementsByTagName('tbody')[0];

        jsonData.forEach((data) => {
            let trElement = tbodyElement.insertRow();
            let tdElement = '';
            Object.keys(data).forEach((key) => {
                tdElement = trElement.insertCell();
                if (key === 'img') {
                    tdElement.innerHTML = `<img src="${data[key]}">`
                } else {
                    tdElement.innerHTML = `<p>${data[key]}</p>`
                }
            });
            let productName = Array.from(trElement.children).shift();
            let productImg = Array.from(trElement.children).slice(1).shift();
            trElement.deleteCell(0);
            trElement.deleteCell(0);
            tdElement = trElement.insertCell(0);
            tdElement.innerHTML += productName.innerHTML;
            tdElement = trElement.insertCell(0);
            tdElement.innerHTML += productImg.innerHTML
            tdElement = trElement.insertCell();
            tdElement.innerHTML += `<input type="checkbox"/>`;
        })
    }

}
