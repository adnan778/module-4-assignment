 // Product data
 const products = [
    { name: "Phone", price: 15000 },
    { name: "Tv", price: 20000 },
    { name: "Pc", price: 70000 },
    { name: "Shoe", price: 4000 }
  ];

  // Cart data
  let cart = [];

  // Display products in the product list
  const displayProducts = () => {
    const productList = document.getElementById("product-list");

    products.forEach((product, index) => {
      const listItem =
      
      document.createElement("div");
      listItem.innerHTML = `
      <div class="col-md-6 flex mt-4 bg-primary shadow-md p-3  rounded">
      <div class="row">
      <p class="col-md-6 text-white mt-2"> <strong class="mx-2">${product.name}</strong> - ${product.price}</p> 
      <span class="col-md-6"><button class=" mx-2  px-3 py-2 btn btn-light rounded-md text-sm shadow-sm add-to-cart" data-index="${index}">Add to Cart</button></span>
      
      </div>
         
          </div>
        
      `;

      productList.appendChild(listItem);-2
    });
  };

  // Add product to cart
  const addToCart = (index) => {
    const product = products[index];
    cart.push(product);
    updateCart();
  };

  // Update the cart display
  const updateCart = () => {
    const cartList = document.getElementById("cart");
    cartList.innerHTML = "";

    let total = 0;

    cart.forEach((product, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <div class="row">
      <p class="mt-2 mx-2"> <strong style="margin-top:8px;">${product.name}</strong> - $${product.price}</p>
       
      <button class=" btn btn-danger btn-sm shadow-sm remove-from-cart" data-index="${index}">Remove</button>
      </div>
     
      `;

      cartList.appendChild(listItem);
      total += product.price;
    });

    const totalItem = document.createElement("li");
    totalItem.innerHTML = `<strong>Total: $${total}</strong>`;
    cartList.appendChild(totalItem);
  };

  // Remove product from cart
  const removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCart();
  };

  // Clear the cart
  const clearCart = () => {
    cart = [];
    updateCart();
  };

  // Add event listeners
  document.addEventListener("DOMContentLoaded", displayProducts);

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-to-cart")) {
      const index = event.target.dataset.index;
      addToCart(index);
    }

    if (event.target.classList.contains("remove-from-cart")) {
      const index = event.target.dataset.index;
      removeFromCart(index);
    }

    if (event.target.id === "clear-cart") {
      clearCart();
    }
  });