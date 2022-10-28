import type { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

import { ticTacValidator, createGameElements } from "@/utils/winnerValidator";
import connectMongo from "@/lib/dbConnect";
import PlayModel from "@/models/play.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  await connectMongo();
  switch (method) {
    case "GET":
      try {
        const { partidaId } = body;
        const find = await PlayModel.find({ partidaId }).exec();
        res.status(200).json(!find.length ? { message: "id not found" } : find);
      } catch (err) {
        res.status(400).json({ message: err });
      }
      break;
    case "POST":
      const randomToe = (length: number) => Math.floor(Math.random() * length);
      try {
        if (body?.partidaId) {
          const { estadoTablero, siguienteMovimiento } = body;
          const { caracter, posicion } = siguienteMovimiento;

          const copyTable = [...estadoTablero];
          let validate: any = ticTacValidator(copyTable);
          if (!validate?.markType) {
            estadoTablero[posicion] = caracter;
            const toeFilter = estadoTablero.reduce(
              (acc: any, current: string, index: number) => {
                let result = acc?.free ?? [];
                if (current === "-") {
                  result = [...result, index];
                }
                return { ...acc, free: result };
              },
              {}
            );
            const { free } = toeFilter;
            const random = randomToe(toeFilter.free.length);
            estadoTablero[free[random]] = "O";
          }
          validate = ticTacValidator(estadoTablero);
          const find = await PlayModel.findOneAndUpdate(
            { partidaId: body.partidaId },
            {
              estadoTablero: siguienteMovimiento?.deshacer
                ? createGameElements(9)
                : estadoTablero,
              $push: {
                historial: siguienteMovimiento?.deshacer
                  ? {}
                  : siguienteMovimiento,
              },
            },
            { returnOriginal: false }
          );
          res.status(200).json({
            ...find._doc,
            siguienteMovimiento: null,
            validate: siguienteMovimiento?.deshacer || validate,
          });
          res.end();
        } else {
          const startGame = Math.round(Math.random());
          let createTablero = createGameElements(9);
          if (!startGame) {
            createTablero[randomToe(createTablero.length)] = "O";
          }
          const create = await PlayModel.create({
            partidaId: uuidv4(),
            estadoTablero: createTablero,
            historial: [],
          });
          res.status(200).json(create);
          res.end();
        }
      } catch (err) {
        res.status(400).json({ message: "Not valid payload format" });
      }
      break;
    case "PUT":
      try {
        const { estadoTablero } = body;
        const update = await PlayModel.findOneAndUpdate(
          { partidaId: body.partidaId },
          estadoTablero
        );
        res.status(200).json(update);
        res.end();
      } catch (err) {
        res.status(400).json({ message: err });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
