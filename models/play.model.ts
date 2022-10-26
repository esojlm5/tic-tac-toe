import { Schema, model, models } from "mongoose";

const Play = new Schema({
  id: String,
  estadoTablero: Array,
});

const PlayModel = models.Play || model("Play", Play);

export default PlayModel;
