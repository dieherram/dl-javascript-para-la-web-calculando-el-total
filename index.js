quantity = document.querySelector('.cantidad')
quantityNum = Number(quantity.innerHTML)

precio = 400000
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

document.querySelector('#plus').addEventListener('click', function () {
    quantityNum += 1
    quantity.innerHTML = quantityNum
    totalAmount = document.querySelector('.valor-total')
    totalAmount.innerHTML = quantityNum * precio
})

document.querySelector('#minus').addEventListener('click', function () {
    if (quantityNum > 0) {
        quantityNum -= 1
        quantity.innerHTML = quantityNum
    totalAmount = document.querySelector('.valor-total')
    totalAmount.innerHTML = quantityNum * precio
    }
})