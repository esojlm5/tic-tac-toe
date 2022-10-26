import React, { useEffect, useState } from "react";

import styles from "@/styles/TicTac.module.css";
import { postGame, hello } from "@/services/tictac";

const TicTac = () => {
  const [markType, setMarType] = useState("x");
  useEffect(() => {
    postGame({ partidaId: 123123 });
  }, []);

  const handleClick = (index: number) => {
    console.log(index, markType);
  };

  return (
    <div className={styles.tictac}>
      <div className={styles.tictacContainer}>
        {[...Array(9)].map((_, index) => {
          return (
            <div
              className={styles.tictacElement}
              key={index}
              onClick={() => handleClick(index)}
            >
              {index}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicTac;
