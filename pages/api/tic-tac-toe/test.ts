import connectMongo from "@/lib/dbConnect";
import PlayModel from "@/models/play.model";

export default async function addTest(req, res) {
  try {
    console.log("CONNECTING TO MONGO");
    await connectMongo();
    console.log("CONNECTED TO MONGO");

    console.log("CREATING DOCUMENT");
    const test = await PlayModel.create(req.body);
    console.log("CREATED DOCUMENT");

    res.json({ test });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
