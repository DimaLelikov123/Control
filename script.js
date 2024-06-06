const users = [
    {
        id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
    },
    {
        id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
    },
    {
        id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
    },
    {
        id: "249b6175-5c30-44c6-b154-f120923736f5",
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
    },
    {
        id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
    }
];

// Task 1: Find the Middle Character
function findMiddleCharacter() {
    let word = prompt("Please enter a word:");

    if (isNullInput(word)) {
        alert("Cancelled.");
        return "Cancelled";
    }

    if (isEmptyOrSpaces(word)) {
        alert("Invalid value");
        return;
    }

    displayMiddleCharacter(word);
}

function isNullInput(input) {
    return input === null;
}

function isEmptyOrSpaces(input) {
    return input.trim() === "";
}

function displayMiddleCharacter(word) {
    const length = word.length;
    const middle = Math.floor(length / 2);
    const isEven = length % 2 === 0;

    let result;
    if (isEven) {
        result = word[middle - 1] + word[middle];
    } else {
        result = word[middle];
    }
    alert(result);
}


// Task 2: Unique Skills
function getUniqueSkills(users) {
    const allSkills = users.flatMap(user => user.skills);
    return [...new Set(allSkills)];
}

function displayUniqueSkills() {
    const uniqueSkills = getUniqueSkills(users);
    document.getElementById("uniqueSkillsOutput").innerText = uniqueSkills.join(", ");
}

// Task 2: Total Balance
function getTotalBalance(users) {
    return users
        .filter(user => user.friends.length === 2 && user.age < 30)
        .reduce((total, user) => total + user.balance, 0);
}

function displayTotalBalance() {
    const totalBalance = getTotalBalance(users);
    document.getElementById("totalBalanceOutput").innerText = `Total Balance: $${totalBalance}`;
}

// Task 3: Spread and Rest Operators
function demonstrateSpreadAndRest() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const combinedArray = [...arr1, ...arr2];

    const numbers = [1, 2, 3, 4, 5];
    const sum = (...nums) => nums.reduce((total, num) => total + num, 0);
    const totalSum = sum(...numbers);

    document.getElementById("spreadRestOutput").innerText = `Combined Array: ${combinedArray}\nSum: ${totalSum}`;
}

// Task 4: Create Usernames List
function createUserNamesList() {
    const userList = document.getElementById("userNamesList");
    userList.innerHTML = "";

    users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name;
        listItem.addEventListener("click", () => alert(`Hello, ${user.name}`));

        userList.appendChild(listItem);
    });
}

const useCreateUserNamesList = () => createUserNamesList();
const useFindMiddleCharacter = () => findMiddleCharacter();
const useDisplayUniqueSkills = () => displayUniqueSkills();
const useDisplayTotalBalance = () => displayTotalBalance();
const useDemonstrateSpreadAndRest = () => demonstrateSpreadAndRest();

