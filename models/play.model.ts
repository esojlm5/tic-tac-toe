import { Schema, model, models } from "mongoose";

const Play = new Schema({
  partidaId: String,
  estadoTablero: Array,
  historial: Array,
  winner: Object,
});

const PlayModel = models.Play || model("Play", Play);

export default PlayModel;
