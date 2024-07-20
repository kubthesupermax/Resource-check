"use strict";
let showModal = document.getElementById("show-modal");
let modal = document.querySelector(".modal");
let closeIcon = document.getElementById("close-icon");

// Modal form
let nameWebsite = document.getElementById("namewebsite");
let linkWebsite = document.getElementById("linkwebsite");
let describeWebsite = document.getElementById("describewebsite");

let nameWebsiteAlert = document.getElementById("namewebsite-alert");
let linkWebsiteAlert = document.getElementById("linkwebsite-alert");
let describeWebsiteAlert = document.getElementById("describewebsite-alert");

// Open
function openModal() {
  modal.classList.remove("hidden");
}

showModal.addEventListener("click", openModal);

const closeModal = () => {
  modal.classList.add("hidden");
};

closeIcon.addEventListener("click", closeModal);

// Modal form
// Name of Website
nameWebsite.addEventListener("keyup", function () {
  validateNameWebsite();
});

function validateNameWebsite() {
  let userName = nameWebsite.value;
  if (userName.length == 0) {
    nameWebsiteAlert.innerText = `Enter A Name`;
    nameWebsite.style.border = "1px solid red";
  } else {
    nameWebsiteAlert.innerText = ` `;
    nameWebsite.style.border = `2px solid green`;
  }
}

// Website link
linkWebsite.addEventListener("keyup", function () {
  validateLinkWebsite();
});

function validateLinkWebsite() {
  let userLink = linkWebsite.value;

  if (userLink.length == 0) {
    linkWebsiteAlert.innerText = `Website field is empty`;
    userLink.style.border = `1px solid red`;
  } else if (
    !userLink.match(/^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/[^\s]*)?$/)
  ) {
    linkWebsiteAlert.innerText = `Website link is invalid`;
    linkWebsite.style.border = `1px solid red`;
  } else {
    linkWebsiteAlert.innerText = ` `;
    linkWebsite.style.border = `1px solid green`;
  }
}

// Website description
describeWebsite.addEventListener("keyup", function () {
  validateWebsiteDescription();
});

function validateWebsiteDescription() {
  let userDescription = describeWebsite.value;

  if (userDescription.length == 0) {
    describeWebsiteAlert.innerText = `Field is empty`;
    describeWebsite.style.border = `1px solid red`;
  } else {
    describeWebsiteAlert.innerText = ` `;
    describeWebsite.style.border = `1px solid green`;
  }
}

// A
// b
// c
// d
// e
// f
// g
// i
// j
