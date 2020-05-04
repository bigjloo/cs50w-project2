document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#login-form").onsubmit = function () {
    document.querySelector("#login-form-div").style.display = "none";
    const user = document.querySelector("#username").value;
    localStorage.setItem("user", user);
    return false;
  };
});

function loadPage() {
  document.querySelector("#page").style.display = "block";
}
