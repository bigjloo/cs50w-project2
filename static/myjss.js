document.addEventListener("DOMContentLoaded", () => {
  const user = prompt("Please type in your username");
  newUser(user);
});

function newUser(user) {
  localStorage.setItem("user", user);
  const h3 = document.createElement("h3");
  h3.innerHTML = `Hi ${user}`;
  const user_div = document.querySelector("#show_username");
  user_div.append(h3);
}

function loadChannels() {
  const request = new XMLHttpRequest();
  request.open("POST", "/channels");
  request.onload = () => {
    const data = JSON.parse(request.responseText);
    if (data.success) {
      let numberOfChannels = data.channels.length;
      for (let i = 0; i < numberOfChannels; i++) {
        const li = document.createElement("li");
        const channel_button = document.createElement("button");
        channel_button.value = data.channels[i].name;
        li.innerHTML = channel_button;
        document.querySelector("#channels_list").append(li);
      }
    } else {
      alert("error message");
    }
  };
}
