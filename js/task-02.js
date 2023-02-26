const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

// document.querySelector('#ingredients').prepend(
//   ...ingredients.map(ingredient => {
//     const ingredientsItemEl = document.createElement('li');
//     ingredientsItemEl.textContent = ingredient;
//     ingredientsItemEl.classList = 'item';
//     return ingredientsItemEl;
//   })
// );

const arrayOfItems = ingredients.map(ingredient => {
  const ingredientsItemEl = document.createElement('li');

  ingredientsItemEl.textContent = ingredient;

  ingredientsItemEl.classList = 'item';

  return ingredientsItemEl;
});

document.querySelector('#ingredients').append(...arrayOfItems);
