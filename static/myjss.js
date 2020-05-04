document.addEventListener("DOMContentLoaded", () => {
  const user = prompt("Please type in your username");
  newUser(user);
});

function loadPage() {
  document.querySelector("#page").style.display = "block";
}

function newUser(user) {
  localStorage.setItem("user", user);
  const h3 = document.createElement("h3");
  h3.innerHTML = `Hi ${user}`;
  const user_div = document.querySelector("#show_username");
  user_div.append(h3);
}
