import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, name },
    method,
    body,
  } = req;
  console.log(req);
  switch (method) {
    case "GET":
      res.status(200).json({ name: "John Doe" });
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
