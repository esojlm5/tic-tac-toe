import PlayModel from "@/models/play.model";

const findGame = async (id = "") => {
  const find = await PlayModel.find({ partidaId: id }).exec();
  return find;
};

export { findGame };
