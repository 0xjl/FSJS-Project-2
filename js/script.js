//searchFilter function

// insertInput function
function insertInput() {
  const header = document.querySelector(".header h2");
  const input = `  
  <label for="search" class="student-search">
  <span>Search by name</span>
  <input id="search" placeholder="Search by name...">
  <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  </label>
  `;
  header.insertAdjacentHTML("afterend", input);
}

// showPage function - should output 9 student items
function showPage(list, page) {
  let startIndex = page * 9 - 9;
  let endIndex = page * 9;
  let studentItem;
  const studentList = document.querySelector(".student-list");
  studentList.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      studentItem = `
      <li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src="https://randomuser.me/api/portraits/women/${i}.jpg" alt="Profile Picture">
          <h3>${list[i].name.first} ${list[i].name.last}</h3>
          <span class="email">${list[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${list[i].registered.date}</span>
        </div>
      </li>
      `;
      studentList.insertAdjacentHTML("beforeend", studentItem);
    }
  }
}

// addPagination function
function addPagination(list) {
  const numOfPages = Math.ceil(list.length / 9);
  const linkList = document.querySelector(".link-list");
  linkList.innerHTML = "";
  for (let i = 1; i <= numOfPages; i++) {
    const button = `<li>
    <button type="button">${i}</button>
  </li>`;
    linkList.insertAdjacentHTML("beforeend", button);
    document.querySelector("li button").className = "active";
  }
  linkList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log("yes");
      document.querySelector(".active").className = "";
      e.target.className = "active";
      showPage(list, e.target.textContent);
    }
  });
}

// Calling the functions
insertInput();
showPage(data, 1);
addPagination(data);
