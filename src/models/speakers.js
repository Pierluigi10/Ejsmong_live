import mongoose from "mongoose";

const speakerSchema = mongoose.Schema({
  name: String,
  country: String,
});
const SpeakerModel = mongoose.model("Speaker", speakerSchema);

export default SpeakerModel;
