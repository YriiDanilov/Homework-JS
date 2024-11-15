import data from "./database.js";


document.addEventListener('DOMContentLoaded', () => {
  let cart = [];
  const searchInput = document.querySelector(".searchInput");
  const search = document.querySelector(".search");
  const form = document.querySelector(".form");
  const cartUI = document.querySelector(".cart");
  const total = document.querySelector(".total");
  const print = document.querySelector(".print");

  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    const items = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
    if (value === "") {
      search.innerHTML = "";
    } else {
      search.innerHTML = items.map((item) => `<div><img src="${item.src}" class="img-item"><span>${item.title} --- id = ${item.id} price = ${item.price}</span></div`);
    }
  });

    searchInput.addEventListener("input", (e) => {
      const trimmedValue = e.target.value.trim();
      const searchResults = data.filter((item) => item.title.toLowerCase().includes(trimmedValue.toLowerCase()));

      if (trimmedValue === "") {
        search.innerHTML = "";
      } else {
        search.innerHTML = searchResults.map((el) => `<div class="cart-item"><img src="${el.src}" class="img-item"><div>${el.title} --- id = ${el.id}</div></div>`).join("\n");
      }
    });

    const getItemData = (item) => {
      return `${item.title} x ${item.count || 1} ----------- ${item.price * (item.count || 1)}р \n`;
    };

    const printTotal = (cart) => {
      const totalCart = cart.map((el) => getItemData(el));
      alert(totalCart.join(""));
    };

    const setItemInUICart = (item) => {
      const itemUI = document.createElement("div");
      itemUI.classList.add("cart-item");

      // Отображение информации о товаре
      const itemText = document.createElement("span");
      itemText.textContent = getItemData(item);

      // Создание кнопок "+"
      const addButton = document.createElement("button");
      addButton.textContent = "+";
      addButton.addEventListener("click", () => {
        if (item.count) {
          item.count += 1;
        } else {
          item.count = 1;
        }
        updateCartUI();
      });

      
      const removeButton = document.createElement("button");
      removeButton.textContent = "-";
      removeButton.addEventListener("click", () => {
        if (item.count > 1) {
          item.count -= 1;
        } else {
          cart = cart.filter((cartItem) => cartItem.id !== item.id);
        }
        updateCartUI();
      });

      const divElForButton = document.createElement('div');
      divElForButton.classList.add('button-wrapper');

    
      itemUI.append(itemText);
      divElForButton.append(addButton);
      divElForButton.append(removeButton);
      itemUI.append(divElForButton);

      return itemUI;
    };

    const getItem = (item) => {
      const element = cart.find((el) => el.id === item.id);
      if (element) {
      
        if (element.count) {
          element.count += 1; 
        } else {
          element.count = 1; 
        }
        return element;
      }

      return { ...item, count: 1 };
    };

    const updateCartUI = () => {
      cartUI.innerHTML = "";
      cart.forEach((el) => cartUI.appendChild(setItemInUICart(el)));
      total.textContent = `ИТОГ: ${cart.reduce((total, el) => (total += el.count * el.price), 0)} руб`
    }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const itemId = Number(formData.get("id"));
    const item = data.find((el) => el.id === itemId);

    if (item) {
      const cartItem = getItem(item);
      if (!cart.includes(cartItem)) {
        cart.push(cartItem);
      }
      updateCartUI();
      e.target.reset();
    } else {
      alert("Товар не найден");
    }
  });

    print.addEventListener("click", () => {
      printTotal(cart);
    });
})