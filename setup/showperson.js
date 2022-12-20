export const showPerson = (i,singlePerson) => {
  singlePerson.innerHTML = `<img src="${people[i].img}" class="person-img" alt="">
             <h4 class="person-name">${people[i].name}</h4>
             <h4 class="person-job">${people[i].job}</h4>
             <p class="person-text">${people[i].text}</p>
             <span class="quote" ><i class="fas fa-quote-left" ></i></span>`;
};
