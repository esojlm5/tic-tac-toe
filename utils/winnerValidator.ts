export const ticTacValidator = (tictac: string[]) => {
  let winner = {};
  const possibleWins = ["012", "345", "678", "036", "147", "258", "048", "246"];

  possibleWins.every((e) => {
    const splitElement = e.split("");
    const splitNumber = splitElement.map((s) => Number(s));
    let finishEvery = true;
    let createRow: Array<string> = [];
    splitNumber.every((c, index) => {
      let out = false;
      createRow = [...createRow, tictac[c]];
      out = createRow.every((f) => {
        return f === createRow[0] && f !== "-";
      });
      if (splitNumber.length - 1 === index && out) {
        winner = {
          positions: splitNumber,
          markType: createRow[0],
        };
        finishEvery = !out;
      }
      return true;
    });
    return finishEvery;
  });

  return winner;
};

export const createGameElements = (length: number) =>
  [...Array(length)].map(() => "-");
