let users = [];

function getUsers() {
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => { users = data;
showUsers();
});
}

function showUsers() {
const table = document.getElementById("contentTableBody");
table.innerHTML = "";

users.forEach(user => {
const row = document.createElement("tr");

row.innerHTML = `
<td>{user.id}</td>
<td>${user.name || ""}</td>
<td>${user.email || ""}</td>
<td>${user.phone || ""}</td>
<td>
<button onclick="editUser(${user.id})">Edit</button>
<button onclick="deleteUser(${user.id})">Delete</button>
</td>`;


table.appendChild(row);
});
}

function deleteUser(id) {
users = users.filter(user => user.id !== id);
showUsers();
}

function addUser() {
showForm("Add User");
}

function editUser(id) {
const user = users.find(u => u.id === id);
if (!user) return;

document.getElementById("userId").value = user.id;
document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("phone").value = user.phone;
showForm("Edit User");
}
getUsers();
