
// iPhone 11 Case function start 

// work of plus and minus
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update case-total
    const productTotal = document.getElementById(product + '-total');

    productTotal.innerText = productNumber * price;
    calculateTotal();

}
function getInputValue(product) {

    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const laptopTotal = getInputValue('laptop') * 1500;
    const standTotal = getInputValue('stand') * 10;
    const subTotal = phoneTotal + caseTotal + laptopTotal + standTotal;
    console.log(subTotal);
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}
//phone Increase decrease event

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);

})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);

})


// handel case Increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {

    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {

    updateProductNumber('case', 59, false);
})

// Laptop  Increase decrease event
document.getElementById('laptop-plus').addEventListener('click', function () {

    updateProductNumber('laptop', 1500, true);
})

document.getElementById('laptop-minus').addEventListener('click', function () {

    updateProductNumber('laptop', 1500, false);
})

// Laptop Stand Increase decrease event
document.getElementById('stand-plus').addEventListener('click', function () {

    updateProductNumber('stand', 10, true);
})

document.getElementById('stand-minus').addEventListener('click', function () {

    updateProductNumber('stand', 10, false);
})



