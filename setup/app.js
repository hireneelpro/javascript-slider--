import { getElement } from "./getelement.js";
import { showPerson } from "./showperson.js";
// const singlePerson = getElement(".single-person");
const nextBtn = getElement(".next");
const prevBtn = getElement(".prev");
const personContainer = getElement(".person-container");
personContainer.innerHTML = people
  .map((each, index) => {
    let position = "nextE";
    if (index === 0) {
      position = "activeE";
    }
    // if (index === 2) {
    //   position = "nextE";
    // }
    if (index === people.length - 1) {
      position = "prevE";
    }

    return `<div class="single-person  ${position}">
              <img src="${each.img}" class="person-img" alt="">
              <h4 class="person-name">${each.name}</h4>
              <h4 class="person-job">${each.job}</h4>
              <p class="person-text">${each.text}</p>
              <span class="quote" ><i class="fas fa-quote-left" ></i></span>
            </div>`;
  })
  .join("");

nextBtn.addEventListener("click", () => {
  let active = getElement(".activeE");
  let prev = getElement(".prevE");
  let next = active.nextElementSibling;
  if (!next) {
    next = personContainer.firstElementChild;
  }
  console.log(prev);
  prev.classList.replace("prevE", "nextE");
  active.classList.replace("activeE", "prevE");
  next.classList.replace("nextE", "activeE");
});
prevBtn.addEventListener("click", () => {
  let active = getElement(".activeE");
  let prev = getElement(".prevE");

  let next = prev.previousElementSibling;
  if (!next) {
    next = personContainer.lastElementChild;
  }

  active.classList.replace("activeE", "nextE");
  prev.classList.replace("prevE", "activeE");
  next.classList.replace("nextE", "prevE");
});
