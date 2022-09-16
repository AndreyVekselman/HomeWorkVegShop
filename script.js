let MyCart = [];
let count = 0;

function ShowCart() {
  let TotalPrice = 0.0;
  document.getElementById("Cart").innerHTML = "";
  if (MyCart.length == 0) {
    document.getElementById("CartHeader").innerHTML = "Your Cart is Empty";
    document.getElementById("Total").innerHTML = "Total Price: " + TotalPrice;
  } else {
    document.getElementById("CartHeader").innerHTML = "In your Cart: ";
    for (let i = 0; i < MyCart.length; i++) {
      let removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      let inx = MyCart[i][0];
      removeBtn.setAttribute("onclick", "RemoveProduct(" + inx + ")");
      removeBtn.setAttribute("class", "RmvBtn");

      let PrdDesc = document.createElement("span");
      let product = document.createElement("div");
      PrdDesc.innerText = MyCart[i][1] + " " + MyCart[i][2] + " Shekel ";
      product.appendChild(PrdDesc);
      product.appendChild(removeBtn);
      document.getElementById("Cart").appendChild(product);
      document.getElementById("Cart").appendChild(product);
      TotalPrice += MyCart[i][2];
    }
    document.getElementById("Total").innerHTML =
      "Total Price: " + TotalPrice.toFixed(2) + " Shekel";
  }
  console.log("Masive:" + MyCart);
  console.log("counter" + count);
}

ShowCart();

function AddProduct(Veg) {
  let Product = [];
  switch (Veg) {
    case "Tomato":
      Product.push(count);
      Product.push("Tomato");
      Product.push(4.9);
      ShowCart();
      break;
    case "Cucumber":
      Product.push(count);
      Product.push("Cucumber");
      Product.push(4.95);
      ShowCart();
      break;
    case "Gamba":
      Product.push(count);
      Product.push("Gamba");
      Product.push(5.45);
      ShowCart();
      break;
  }
  MyCart.push(Product);
  count++;
  ShowCart();
}
function RemoveProduct(Index) {
  for (let i = 0; i < MyCart.length; i++) {
    if (MyCart[i][0] == Index) {
      MyCart.splice(i, 1);
      ShowCart();
    }
  }
}
