"use strict";
let secondContainer = document.getElementById("second-container");
let containerOne = document.getElementById("containerOne");
let containerTwo = document.getElementById("containerTwo");
let containerThree = document.getElementById("containerThree");
let createButton = document.getElementById("create-button");
let form = document.getElementById("forms");
let arrayForms = [];

createButton.addEventListener("click", function (event) {
  event.preventDefault();

  let nameStore = nameWebsite.value;
  let linkStore = linkWebsite.value;
  let describeStore = describeWebsite.value;

  let objectDetails = {
    nameObject: nameStore,
    linkObject: linkStore,
    describeObject: describeStore,
  };

  arrayForms.push(objectDetails);
  buttonClick();
  form.reset();
});

function buttonClick() {
  secondContainer.innerHTML = ``;

  arrayForms.forEach(function (item) {
    let checkName = item.nameObject;
    let checkLink = item.linkObject;
    let checkDescription = item.describeObject;

    if (
      checkName.length !== 0 &&
      checkLink.match(
        /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/
      ) &&
      checkDescription !== 0
    ) {
      let showName = document.createElement("div");
      showName.classList.add("checkName");

      // checkName = document.createElement("h3"); causing the object html element

      showName.style.border = "2px solid black";
      showName.style.padding = "1rem 0.75rem 1rem 0.75rem";
      showName.style.width = "100%";
      showName.style.display = "flex";
      showName.style.flexDirection = "row";
      showName.style.justifyContent = "space-between";
      showName.style.fontWeight = "bold";

      let showNameChild = checkName;

      showName.innerHTML = showNameChild + ' <i class="fa-solid fa-trash"></i>';
      let result = secondContainer.append(showName);
      console.log(result);
    } else {
      secondContainer.append("Error");
    }
  });
}

function openContainerOne() {
  containerOne.classList.remove("hidden");
}
