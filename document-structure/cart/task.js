const minus = document.querySelectorAll("div.product__quantity-control.product__quantity-control_dec");
const plus = document.querySelectorAll("div.product__quantity-control.product__quantity-control_inc");

const productQuantityValue = document.querySelectorAll("div.product__quantity-value");

minus.forEach(function (item, index) {
    item.onclick = function () {
        if (Number(productQuantityValue[index].textContent > 1)) {
            productQuantityValue[index].textContent--
        }
    }
});

plus.forEach(function (item, index) {
    item.onclick = function () {
        productQuantityValue[index].textContent++
    }
});

let cartProducts = document.querySelector("div.cart__products");
const products = document.querySelectorAll("div.product");
let productAddButton = document.querySelectorAll("div.product__add");


productAddButton.forEach(function (item) {
    item.onclick = function () {
        productAddButton = Array.from(productAddButton);
        let itemIndex = productAddButton.indexOf(item);

        let dataProduct = products[itemIndex].getAttribute("data-id")

        let cartProduct = document.querySelectorAll("div.cart__product");
        cartProduct = Array.from(cartProduct);

        let sameProduct = cartProduct.filter(product => product.getAttribute("data-id") == dataProduct)

        if (sameProduct.length == 0) {

            //Картинка-клон
            let img = products[itemIndex].querySelector("img").cloneNode(false);
            img.classList.remove("product__image");
            img.classList.add("cart__product-image");

            //Количество-клон
            let cartProductCount = productQuantityValue[itemIndex].cloneNode(true);
            cartProductCount.classList.remove("product__quantity-value");
            cartProductCount.classList.add("cart__product-count");

            //Клон продукта с id
            let productClone = products[itemIndex].cloneNode(false);
            productClone.classList.remove("product");
            productClone.classList.add("cart__product");

            productClone.appendChild(img);
            productClone.appendChild(cartProductCount);

            //Добавили клон продукта в корзину
            cartProducts.appendChild(productClone);
        }


        if (sameProduct.length > 0) {
            sameProduct[0].querySelector("div.cart__product-count").textContent = (+sameProduct[0].querySelector("div.cart__product-count").textContent) + (+productQuantityValue[itemIndex].textContent);
        }

    }
});

