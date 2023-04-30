const cartBtnOpen = document.getElementById("cart-icon");
const cart = document.querySelector(".cart");
const cartBtnClose = document.getElementById("cart-close");

cartBtnOpen.addEventListener("click", () => {
  cart.classList.add("cart-active");
});

cartBtnClose.addEventListener("click", () => {
  cart.classList.remove("cart-active");
});

document.addEventListener("DOMContentLoaded", loadFood);

function loadFood() {
  loadContent();
}

function loadContent() {
  //Remove items

  let removeItem = document.querySelectorAll(".cart-remove");
  removeItem.forEach((removeBtn) => {
    removeBtn.addEventListener("click", removeItemList);
  });

  // Quantity

  let qtn = document.querySelectorAll(".cart-quantity");
  qtn.forEach((qtnelement) => {
    qtnelement.addEventListener("change", checkqtn);
  });

  // Add cart functionality

  let addCartList = document.querySelectorAll(".add-cart");

  addCartList.forEach((cart) => {
    cart.addEventListener("click", addCart);
  });

  //updateQuantity
  updateTotal();
}

function removeItemList() {
  if (confirm("Are you sure to remove?")) {
    let removeFood =
      this.parentElement.querySelector(".cart-food-title").innerHTML;
    itemList = itemList.filter((el) => el.foodName != removeFood);
    this.parentElement.remove();
    loadContent();
  }
}

function checkqtn() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
  loadContent();
}

let itemList = [];

function addCart() {
  let foodMenu = this.parentElement;
  let foodName = foodMenu.querySelector(".food-title").innerHTML;
  let foodPrice = foodMenu.querySelector(".food-price").innerHTML;
  let foodPic = foodMenu.querySelector(".food-img").src;

  let newProduct = { foodName, foodPic, foodPrice };

  if (itemList.find((el) => el.foodName == newProduct.foodName)) {
    alert("Product Already added in Cart");
    return;
  } else {
    itemList.push(newProduct);
  }

  let newProductElement = createCartElement(foodName, foodPrice, foodPic);
  let element = document.createElement("div");
  element.innerHTML = newProductElement;

  let contentBox = document.querySelector(".cart-content");
  contentBox.append(element);
  loadContent();
}

function createCartElement(name, price, img) {
  return `<div class="cart-box">
  <img src=${img} class="cart-img" />
  <div class="detail-box">
    <div class="cart-food-title">${name}</div>
    <div class="price-box">
      <div class="cart-price">${price}</div>
      <div class="cart-amt">${price}</div>
    </div>
    <input type="number" value="1" class="cart-quantity" />
  </div>
  <ion-icon name="trash" class="cart-remove"></ion-icon>
</div>`;
}

function updateTotal() {
  const cartItems = document.querySelectorAll(".cart-box");
  const totalValue = document.querySelector(".total-price");

  let total = 0;
  cartItems.forEach((cart) => {
    let priceElement = cart.querySelector(".cart-price");

    let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""));

    let quantity = cart.querySelector(".cart-quantity").value;
    total += price * quantity;
  });
  totalValue.innerHTML = "RS." + total;

  let cartCount = document.querySelector(".cart-count");
  let element = itemList.length;
  cartCount.innerHTML = element;

  if (element == 0) {
    cartCount.style.display = "none";
  } else {
    cartCount.style.display = "block";
  }
}
