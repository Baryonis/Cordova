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
      const pizzaTag = document.createElement("ion-accordeon");
      pizzaTag.className =
        "pizza md accordion-animated hydrated accordion-collapsed";
      pizzaTag.innerHTML = `
      <ion-item slot="header" color="light">
        <ion-label>${capitalizeFirstLetter(pizzaName)}</ion-label>
      </ion-item>

      <div class="ion-padding" slot="content">
        (${formatIngredients(ingredients)})
      </div>
      `;

      pizzasTag.insertBefore(pizzaTag, pizzasTag.lastChild);

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
