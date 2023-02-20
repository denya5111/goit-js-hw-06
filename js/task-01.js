const itemAllEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemAllEl.length}`);

itemAllEl.forEach(item => {
  console.log(
    `\nCategory: ${item.firstElementChild.textContent}\nElements: ${
      item.querySelectorAll('li').length
    }`
  );
});
