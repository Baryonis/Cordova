document.addEventListener("deviceready", onDeviceReady);

function onDeviceReady() {
  const formAddObject = document.querySelector(".form-add-object");
  const objectsTag = document.querySelector(".objects");
  const errorTag = document.querySelector(".error");

  formAddObject.addEventListener("submit", (e) => {
    e.preventDefault();
    const objectName = formAddObject.name.value;
    const objectDescription = formAddObject.description.value;

    if (isValid(objectName) && isValid(objectDescription)) {
      const objectTag = document.createElement("ion-item");
      objectTag.className = "object";
      objectTag.innerHTML = `
        <ion-label>${capitalizeFirstLetter(
          objectName
        )} (${objectDescription})</ion-label>

      `;

      objectsTag.insertBefore(objectTag, objectsTag.lastChild);

      formAddObject.reset();
    } else {
      errorTag.innerHTML = "<p>Formulaire invalide !</p>";
      setTimeout(() => (errorTag.innerHTML = ""), 2000);
    }
  });

  function capitalizeFirstLetter(value) {
    return value.trim().slice(0, 1).toUpperCase() + value.trim().slice(1);
  }
  function isValid(value) {
    return value && value.length > 2 && value.length < 50;
  }
}
