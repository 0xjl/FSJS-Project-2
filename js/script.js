// showPage function
//This function will create and insert/append the elements needed to display a "page" of nine students

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

console.log(data);
showPage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
