import mongoose from "mongoose";

const sponsorSchema = mongoose.Schema({
  name: String,
  location: String,
});
const SponsorModel = mongoose.model("Sponsor", sponsorSchema);

export default SponsorModel;
