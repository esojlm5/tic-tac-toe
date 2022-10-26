import type { NextApiRequest, NextApiResponse } from "next";

import connectMongo from "@/lib/dbConnect";
import PlayModel from "@/models/play.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id, name },
    method,
    body,
  } = req;
  await connectMongo();
  switch (method) {
    case "GET":
      try {
        const find = await PlayModel.find({ id: "123" }).exec();
        res.status(200).json({ id: find });
      } catch (err) {
        res.status(400).json({ message: err });
      }
      break;
    case "POST":
      // const bodyParse = JSON.parse(body);
      console.log(body?.partidaId);
      const startGame = Math.round(Math.random());
      res.status(200).json(startGame);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
