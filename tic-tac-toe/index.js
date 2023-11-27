let player = 1;

const turn = document.getElementById("turn");

function changeTurn(player) {
  if (player === 1) {
    turn.innerHTML = "Player 1 turn";
  } else {
    turn.innerHTML = "Player 2 turn";
  }
}

function myFunc1() {
  let input1 = document.getElementById("input-1");
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
  let input2 = document.getElementById("input-2");
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
  let input3 = document.getElementById("input-3");
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
  let input4 = document.getElementById("input-4");
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
  let input5 = document.getElementById("input-5");
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
  let input6 = document.getElementById("input-6");
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
  let input7 = document.getElementById("input-7");
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
  let input8 = document.getElementById("input-8");
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
  let input9 = document.getElementById("input-9");
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
