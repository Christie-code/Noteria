// select ui elements to interact with
const employeeName = document.getElementById("name");
const employeeDepartment = document.getElementById("department");
const employeeId = document.getElementById("employee-id");
const newNote = document.getElementById("new-note");
const standupContainer = document.getElementById("standup-container");
const standupList = document.getElementById("standuplist-container");
const centerPics = document.getElementById("center-picture");
const standupCard = document.getElementById("standup-card");
const deleteCard = document.getElementById("delete-card");
const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");


// get user and standups from local storage and convert to JSON
const user = {name: "Christy",
            department: 'WEB',
            staffId: 'NOTEIRA849H',
            password: 'ludhivnhv'};//JSON.parse(window.localStorage.getItem('loggedInUser'));
const staffId = user.staffIdNo;
let standupArray = JSON.parse(window.localStorage.getItem(staffId));

//display user content on the left panee
let displayUser = function (employee) {
    employeeName.innerHTML= employee.name;
    employeeDepartment.innerHTML= employee.department;
    employeeId.innerHTML = employee.staffId;
}

// create standup Items
let createStandupItems = function (standup) {
    const listItem = document.createElement("li");
    const bullet = document.createElement("img");
    const date = document.createElement("p");
    date.innerHTML = standup.date;
    const deleteItem = document.createElement("img");
    bullet.src = "images/bullet.png"
    deleteItem.src = "images/trash-can.png";
    bullet.classList.add("small");
    deleteItem.classList.add("tiny");

    //append items to the List item
    listItem.append(bullet);
    listItem.append(date);
    listItem.append(deleteItem);


    return listItem;
}

let displayStandups = function (standups) {
    standupList.innerHTML = "";

    if (standups === null) {
        return;
    }
    for (let i=0; i < standups.length; i++) {
        let listItem =createStandupItems(standups[i]);
        standupList.append(listItem);
    }
}

//show logo
let showLogo = function () {
    console.log("show logo called");
    centerPics.classList.add("showMode");
    centerPics.classList.remove("hideMode");
    standupCard.classList.add("hideMode");
    standupCard.classList.remove("showMode");
    deleteCard.classList.add("hideMode");
    deleteCard.classList.remove("showMode");
}

//show standup
let showStandup = function () {
    centerPics.classList.toggle("hideMode");
    centerPics.classList.remove("showMode");
    standupCard.classList.add("showMode");
    standupCard.classList.remove("hideMode");
    deleteCard.classList.add("hideMode");
    deleteCard.classList.remove("showMode");
}

//show delete
let showDelete = function () {
    centerPics.classList.add("hideMode");
    centerPics.classList.remove("showMode");
    standupCard.classList.add("hideMode");
    standupCard.classList.remove("showMode");
    deleteCard.classList.add("showMode");
    deleteCard.classList.remove("hideMode");
}




















displayUser(user, standupArray);
displayStandups(standupArray);
showStandup()