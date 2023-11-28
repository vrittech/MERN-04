import { useState } from "react";

export const TicTacToe = () => {
  const [turn, setTurn] = useState(1);
  const [inputs, setInputs] = useState([]);

  const handleClick = (i, turn) => () => {
    setTurn(turn === 1 ? 2 : 1);
    setInputs((prev) => {
      const copy = [...prev];
      copy[i] = turn === 1 ? "X" : "O";
      return copy;
    });
  };

  const getWinner = (inputs) => {
    let winner = null;
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];
      if (inputs[a] && inputs[a] === inputs[b] && inputs[a] === inputs[c]) {
        winner = inputs[a] === "X" ? 1 : 2;
        break;
      }
    }

    return winner;
  };

  const reset = () => {
    setInputs([]);
    setTurn(1);
  };

  const winner = getWinner(inputs);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-2xl font-extrabold">Tic-Tac-Toe</h1>
        <p className="text-lg font-medium">Player 1(X), Player 2(O)</p>
        <p className="text-lg font-medium">Player {turn} turn</p>
        {winner && (
          <h2 className="text-xl font-bold text-red-600">
            Winner is Player {winner}
          </h2>
        )}
      </div>

      <div className="flex flex-col gap-0 items-center">
        <div className="flex flex-row gap-0">
          <button
            className="w-8 h-8 border-2 border-blue-600 border-solid"
            onClick={handleClick(0, turn)}
            disabled={inputs[0] || winner}
          >
            {inputs[0]}
          </button>
          <button
            className="w-8 h-8 border-2 border-l-0 border-blue-600 border-solid"
            onClick={handleClick(1, turn)}
            disabled={inputs[1] || winner}
          >
            {inputs[1]}
          </button>
          <button
            className="w-8 h-8 border-2 border-l-0 border-blue-600 border-solid"
            onClick={handleClick(2, turn)}
            disabled={inputs[2] || winner}
          >
            {inputs[2]}
          </button>
        </div>
        <div className="flex flex-row gap-0">
          <button
            className="w-8 h-8 border-2 border-t-0 border-blue-600 border-solid"
            onClick={handleClick(3, turn)}
            disabled={inputs[3] || winner}
          >
            {inputs[3]}
          </button>
          <button
            className="w-8 h-8 border-2 border-t-0 border-l-0 border-blue-600 border-solid"
            onClick={handleClick(4, turn)}
            disabled={inputs[4] || winner}
          >
            {inputs[4]}
          </button>
          <button
            className="w-8 h-8 border-2 border-t-0 border-l-0 border-blue-600 border-solid"
            onClick={handleClick(5, turn)}
            disabled={inputs[5] || winner}
          >
            {inputs[5]}
          </button>
        </div>
        <div className="flex flex-row gap-0">
          <button
            className="w-8 h-8 border-2 border-t-0 border-blue-600 border-solid"
            onClick={handleClick(6, turn)}
            disabled={inputs[6] || winner}
          >
            {inputs[6]}
          </button>
          <button
            className="w-8 h-8 border-2 border-t-0 border-l-0 border-blue-600 border-solid"
            onClick={handleClick(7, turn)}
            disabled={inputs[7] || winner}
          >
            {inputs[7]}
          </button>
          <button
            className="w-8 h-8 border-2 border-t-0 border-l-0 border-blue-600 border-solid"
            onClick={handleClick(8, turn)}
            disabled={inputs[8] || winner}
          >
            {inputs[8]}
          </button>
        </div>
      </div>

      <button
        className="border-2 border-green-600 border-solid rounded w-20"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};
