function showForm(title) {
  document.getElementById("formTitle").textContent = title;
  document.getElementById("userForm").style.display = "flex";
}

function hideForm() {
  clearForm();
  document.getElementById("userForm").style.display = "none";
}

function clearForm() {
document.getElementById("userId").value = "";
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("phone").value = "";
}

function saveUser() {
const id = document.getElementById("userId").value.trim();
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();

if (!name || !email || !phone) {
alert("Please fill in all fields."); 
 return;
 }

if (id === "") {
const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
users.push({ id: newId, name, email, phone });
} else {
const user = users.find(u => u.id == id);
if (user) {
 user.name = name;
 user.email = email;
 user.phone = phone;
} else {
 alert("User not found.");
 }
}

  showUsers();
  hideForm();
}
