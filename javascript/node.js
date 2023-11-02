function addPTag() {
  const div = document.getElementById("div");
  //   console.log(div);
  const p = document.createElement("p");
  p.id = "p1";
  p.style = "color:red;";
  //   const content = document.createTextNode("This is appended p tag");
  //   p.appendChild(content);
  p.append("This is appended p tag");
  div.appendChild(p);
}

function removePTag() {
  const div = document.getElementById("div");
  const p = document.getElementById("paragraph");
  div.removeChild(p);
}

function replacePTag() {
  const div = document.getElementById("div");
  const p = document.getElementById("paragraph");
  const span = document.createElement("span");
  span.append("This is new span");
  div.replaceChild(span, p);
}

function addNewNode() {
  const div = document.createElement("div");
  div.style = "border: 1px solid red;";
  const p = document.createElement("p");
  p.style = "color: blue;";
  p.append(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, asperiores."
  );
  div.appendChild(p);
  const parent = document.getElementById("node");
  parent.appendChild(div);
}
