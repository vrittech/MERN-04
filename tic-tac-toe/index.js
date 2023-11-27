let player = 1;

const turn = document.getElementById("turn");
const winner = document.getElementById("winner");
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const input3 = document.getElementById("input-3");
const input4 = document.getElementById("input-4");
const input5 = document.getElementById("input-5");
const input6 = document.getElementById("input-6");
const input7 = document.getElementById("input-7");
const input8 = document.getElementById("input-8");
const input9 = document.getElementById("input-9");

const winnerMessage1 = "Player 1 is winner";
const winnerMessage2 = "Player 2 is winner";

function stopGame() {
  if (winner.innerHTML) {
    input1.disabled = true;
    input2.disabled = true;
    input3.disabled = true;
    input4.disabled = true;
    input5.disabled = true;
    input6.disabled = true;
    input7.disabled = true;
    input8.disabled = true;
    input9.disabled = true;
  }
}

function getWinner() {
  const input1Value = input1.value;
  const input2Value = input2.value;
  const input3Value = input3.value;
  const input4Value = input4.value;
  const input5Value = input5.value;
  const input6Value = input6.value;
  const input7Value = input7.value;
  const input8Value = input8.value;
  const input9Value = input9.value;

  if (input1Value === "X" && input2Value === "X" && input3Value === "X") {
    winner.innerHTML = winnerMessage1;
    stopGame();
  } else if (
    input4Value === "X" &&
    input5Value === "X" &&
    input6Value === "X"
  ) {
    winner.innerHTML = winnerMessage1;
    stopGame();
  } else if (
    input7Value === "X" &&
    input8Value === "X" &&
    input9Value === "X"
  ) {
    winner.innerHTML = winnerMessage1;
    stopGame();
  } else if (
    input1Value === "X" &&
    input4Value === "X" &&
    input7Value === "X"
  ) {
    winner.innerHTML = winnerMessage1;
    stopGame();
  } else if (
    input2Value === "X" &&
    input5Value === "X" &&
    input8Value === "X"
  ) {
    winner.innerHTML = winnerMessage1;
    stopGame();
  } else if (
    input3Value === "X" &&
    input6Value === "X" &&
    input9Value === "X"
  ) {
    winner.innerHTML = winnerMessage1;
    stopGame();
  } else if (
    input1Value === "X" &&
    input5Value === "X" &&
    input9Value === "X"
  ) {
    winner.innerHTML = winnerMessage1;
    stopGame();
  } else if (
    input3Value === "X" &&
    input5Value === "X" &&
    input7Value === "X"
  ) {
    winner.innerHTML = winnerMessage1;
    stopGame();
  } else if (
    input1Value === "O" &&
    input2Value === "O" &&
    input3Value === "O"
  ) {
    winner.innerHTML = winnerMessage2;
    stopGame();
  } else if (
    input4Value === "O" &&
    input5Value === "O" &&
    input6Value === "O"
  ) {
    winner.innerHTML = winnerMessage2;
    stopGame();
  } else if (
    input7Value === "O" &&
    input8Value === "O" &&
    input9Value === "O"
  ) {
    winner.innerHTML = winnerMessage2;
    stopGame();
  } else if (
    input2Value === "O" &&
    input4Value === "O" &&
    input7Value === "O"
  ) {
    winner.innerHTML = winnerMessage2;
    stopGame();
  } else if (
    input2Value === "O" &&
    input5Value === "O" &&
    input8Value === "O"
  ) {
    winner.innerHTML = winnerMessage2;
    stopGame();
  } else if (
    input3Value === "O" &&
    input6Value === "O" &&
    input9Value === "O"
  ) {
    winner.innerHTML = winnerMessage2;
    stopGame();
  } else if (
    input2Value === "O" &&
    input5Value === "O" &&
    input9Value === "O"
  ) {
    winner.innerHTML = winnerMessage2;
    stopGame();
  } else if (
    input3Value === "O" &&
    input5Value === "O" &&
    input7Value === "O"
  ) {
    winner.innerHTML = winnerMessage2;
    stopGame();
  }
}

function changeTurn(player) {
  if (player === 1) {
    turn.innerHTML = "Player 1 turn";
  } else {
    turn.innerHTML = "Player 2 turn";
  }
}

function myFunc1() {
  if (player === 1) {
    input1.value = "X";
    player = 2;
    changeTurn(2);
  } else {
    input1.value = "O";
    player = 1;
    changeTurn(1);
  }
  input1.disabled = true;
}

function myFunc2() {
  if (player === 1) {
    input2.value = "X";
    player = 2;
    changeTurn(2);
  } else {
    input2.value = "O";
    player = 1;
    changeTurn(1);
  }
  input2.disabled = true;
}

function myFunc3() {
  if (player === 1) {
    input3.value = "X";
    player = 2;
    changeTurn(2);
  } else {
    input3.value = "O";
    player = 1;
    changeTurn(1);
  }
  input3.disabled = true;
}

function myFunc4() {
  if (player === 1) {
    input4.value = "X";
    player = 2;
    changeTurn(2);
  } else {
    input4.value = "O";
    player = 1;
    changeTurn(1);
  }
  input4.disabled = true;
}

function myFunc5() {
  if (player === 1) {
    input5.value = "X";
    player = 2;
    changeTurn(2);
  } else {
    input5.value = "O";
    player = 1;
    changeTurn(1);
  }
  input5.disabled = true;
}

function myFunc6() {
  if (player === 1) {
    input6.value = "X";
    player = 2;
    changeTurn(2);
  } else {
    input6.value = "O";
    player = 1;
    changeTurn(1);
  }
  input6.disabled = true;
}

function myFunc7() {
  if (player === 1) {
    input7.value = "X";
    player = 2;
    changeTurn(2);
  } else {
    input7.value = "O";
    player = 1;
    changeTurn(1);
  }
  input7.disabled = true;
}

function myFunc8() {
  if (player === 1) {
    input8.value = "X";
    player = 2;
    changeTurn(2);
  } else {
    input8.value = "O";
    player = 1;
    changeTurn(1);
  }
  input8.disabled = true;
}

function myFunc9() {
  if (player === 1) {
    input9.value = "X";
    player = 2;
    changeTurn(2);
  } else {
    input9.value = "O";
    player = 1;
    changeTurn(1);
  }
  input9.disabled = true;
}

function reset() {
  input1.value = "";
  input1.disabled = false;
  input2.value = "";
  input2.disabled = false;
  input3.value = "";
  input3.disabled = false;
  input4.value = "";
  input4.disabled = false;
  input5.value = "";
  input5.disabled = false;
  input6.value = "";
  input6.disabled = false;
  input7.value = "";
  input7.disabled = false;
  input8.value = "";
  input8.disabled = false;
  input9.value = "";
  input9.disabled = false;
  winner.innerHTML = "";
  player = 1;
}
