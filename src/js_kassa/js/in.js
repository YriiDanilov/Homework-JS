import data from './database.js';

const container = document.querySelector(".container");

const updateCartUI = (items) => {
items.map((item) => {
  const divItem = document.createElement("div");
  divItem.className = "item";
  const imgItem = document.createElement("img");
  imgItem.className = "item__img";
  imgItem.setAttribute("src", `${item.src}`);
  imgItem.setAttribute("alt", `picture`);
  const h2Item = document.createElement("h2");
  h2Item.className = "item__title";
  h2Item.textContent = `${item.title}`;
  const spanItem = document.createElement("span");
  spanItem.className = "item__price";
  spanItem.textContent = `Цена: ${item.price} руб`;

  
  container.append(divItem);
  divItem.append(imgItem);
  divItem.append(h2Item);
  divItem.append(spanItem);
});
}
	updateCartUI(data);

	const inputSearch = document.querySelector(".searchInput");
	
	inputSearch.addEventListener('keyup', (e) => {
		container.innerHTML = '';
		const value = e.target.value.trim();
		const items = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
		if (items) {
      updateCartUI(items);
    } else if (value === "") {
      updateCartUI(data);
    }
})

