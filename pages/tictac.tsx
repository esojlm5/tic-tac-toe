import React, { useEffect, useState } from "react";

import styles from "@/styles/TicTac.module.css";
import { postGame } from "@/services/tictac";
import { createGameElements } from "@/utils/winnerValidator";
import { PlayInterface } from "@/interfaces/playInterface";

const TicTac = () => {
  const [markType, setMarkType] = useState("x");
  const [myTurn, setMyTurn] = useState(false);
  const [move, setMove] = useState<PlayInterface>({
    partidaId: "",
    estadoTablero: [],
    winner: {},
    siguienteMovimiento: null,
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

  const handleReset = () => {
    const { partidaId, estadoTablero, winner } = move;
    played({
      partidaId,
      estadoTablero,
      siguienteMovimiento: { deshacer: true },
    });
  };

  const handleClick = (index: number, element: string) => {
    const { partidaId, estadoTablero, winner } = move;
    if (element !== "-" || myTurn || winner?.markType) {
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
      <button className={styles.playAgain} onClick={handleReset}>
        jugar denuevo
      </button>
      <div className={styles.tictacContainer}>
        {move?.estadoTablero &&
          move.estadoTablero.map((element, index) => {
            return (
              <div
                className={`${styles.tictacElement} ${
                  move.winner?.positions &&
                  move.winner?.positions.includes(index)
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
