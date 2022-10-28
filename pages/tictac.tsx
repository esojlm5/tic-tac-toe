import React, { useEffect, useState } from "react";

import styles from "@/styles/TicTac.module.css";
import { postGame } from "@/services/tictac";

interface playInterface {
  partidaId: string;
  estadoTablero: Array<string>;
  validate: {
    markType?: string;
  };
}

const TicTac = () => {
  const [markType, setMarkType] = useState("x");
  const [myTurn, setMyTurn] = useState(false);
  const [move, setMove] = useState<playInterface>({
    partidaId: "",
    estadoTablero: [],
    validate: {},
  });

  const played = async (update: object) => {
    const response = await postGame(update);
    setMyTurn(false);
    setMove({ ...move, ...response });
  };

  useEffect(() => {
    setMyTurn(true);
    played({ partidaId: "" });
  }, []);

  const handleClick = (index: number, element: string) => {
    const { partidaId, estadoTablero, validate } = move;
    if (element !== "-" || myTurn || validate?.markType) {
      return null;
    }
    estadoTablero[index] = markType;
    setMyTurn(true);
    played({
      partidaId,
      estadoTablero,
      siguienteMovimiento: {
        caracter: markType,
        posicion: index,
      },
    });
  };

  return (
    <div className={styles.tictac}>
      <div className={styles.tictacContainer}>
        {move?.estadoTablero &&
          move.estadoTablero.map((element, index) => {
            return (
              <div
                className={`${styles.tictacElement} ${
                  move.validate?.positions &&
                  move.validate?.positions.includes(index)
                    ? styles.ticWinner
                    : null
                }`}
                key={index}
                onClick={() => handleClick(index, element)}
              >
                {element}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TicTac;
