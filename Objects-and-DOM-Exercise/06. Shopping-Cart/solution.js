function solve() {
    let addProductDivs = Array.from(document.getElementsByClassName("add-product"));
    let checkoutButton = document.getElementsByClassName('checkout')[0];
    let textarea = document.getElementsByTagName('textarea')[0];
    let productTitles = [];
    let productPrices = [];
    addProductDivs.forEach((div) => {
            div.addEventListener('click', addToShoppingCart)
        }
    );
    checkoutButton.addEventListener('click', checkout);

    function checkout() {
        if (textarea.textContent) {
            let totalPrice = productPrices.reduce((acc, p) => {
                acc += +p;
                return acc;
            }, 0).toFixed(2);
            let allProductsBought = productTitles.join(', ');
            textarea.textContent += `You bought ${allProductsBought} for ${totalPrice}.`;
            addProductDivs.forEach((div) => {
                div.setAttribute('disabled', 'disabled');
                }
            );
            checkoutButton.removeEventListener('click', checkout);
        }
    }

    function addToShoppingCart(e) {
        let productDetailsDiv = e.target.parentElement.previousElementSibling;
        let productPriceDiv = e.target.parentElement.nextElementSibling;
        let productTitle = productDetailsDiv.getElementsByClassName('product-title')[0].textContent;
        let productPrice = Number(productPriceDiv.textContent).toFixed(2);
        textarea.textContent += `Added ${productTitle} for ${productPrice} to the cart.\n`;
        productTitles.push(productTitle);
        productPrices.push(productPrice);
    }
}