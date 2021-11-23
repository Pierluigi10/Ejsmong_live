import SpeakerModel from "../models/speakers.js";

export const getAllSpeakers = async () => {
  const speakers = await SpeakerModel.find({});
  return speakers;
};

export const getAllCountries = async () => {
  const speakers = await SpeakerModel.find({});
  const countries = speakers.map((speaker) => speaker.country);
  const uniqueCountries = [...new Set(countries)]
    .join(", ")
    .replace(/,(?=[^,]*$)/, " and ");
  return uniqueCountries;
};
