document.addEventListener("deviceready", onDeviceReady);

function onDeviceReady() {
  const formAddPizza = document.querySelector(".form-add-pizza");
  const pizzasTag = document.querySelector(".pizzas");
  const errorTag = document.querySelector(".error");

  formAddPizza.addEventListener("submit", (e) => {
    e.preventDefault();
    const pizzaName = formAddPizza.name.value;
    const ingredients = formAddPizza.ingredients.value;

    if (isValid(pizzaName) && isValid(ingredients)) {
      const pizzaTag = document.createElement("div");
      pizzaTag.className = "pizza";
      pizzaTag.innerHTML = `
        <h3>${capitalizeFirstLetter(pizzaName)}</h3>
        <p>(${formatIngredients(ingredients)})</p>
      `;

      pizzasTag.insertBefore(pizzaTag, pizzasTag.firstElementChild);

      formAddPizza.reset();
    } else {
      errorTag.innerHTML = "<p>Formulaire invalide !</p>";
      setTimeout(() => (errorTag.innerHTML = ""), 2000);
    }
  });

  function capitalizeFirstLetter(value) {
    return value.trim().slice(0, 1).toUpperCase() + value.trim().slice(1);
  }
  function formatIngredients(value) {
    return value.trim().replaceAll(" ", ", ");
  }
  function isValid(value) {
    return value && value.length > 2 && value.length < 50;
  }
}
