const data = {
  name: "John Doe",
  age: 20,
  healthy: true,
  cars: ["Mustang", "Nexon"],
  location: {
    city: "Kathmandu",
    country: "Nepal",
  },
  birthDate: new Date(),
  func: function func1() {
    console.log("func1");
  },
};

function saveToStorage() {
  localStorage.setItem("token", "123QWERTY!@#");
  localStorage.setItem("user", JSON.stringify(data));
}

function getFromStorage() {
  const token = localStorage.getItem("token");
  // <p>Token is 123</p>
  const p = document.createElement("p");
  p.append(`Token is: ${token}`);
  // <div id="web-api"></div>
  const div = document.getElementById("web-api");
  //   <div id="web-api">
  //     <p>Token is 123</p>
  //   </div>
  div.appendChild(p);
  // console.log(JSON.parse(localStorage.getItem("user")));
}

function clearStorage() {
  //   localStorage.removeItem("token");
  localStorage.clear();
}

function getHistory() {
  const length = history.length;
  console.log(length);
}

function goBack() {
  history.back;
}
