import connectMongo from "@/lib/dbConnect";
import PlayModel from "@/models/play.model";

const findGame = async (id = "") => {
  // await connectMongo();
  const find = await PlayModel.findById(id).exec();
  console.log("find", find);
  return find;
};

export { findGame };
