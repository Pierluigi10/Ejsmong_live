import PresentationModel from "../models/presentations.js";

export const getAllPresentations = async () => {
  const presentations = await PresentationModel.find({});
  return presentations;
};

export const getPageTitle = async () => {
  const presentations = await PresentationModel.find({});
  return `${presentations.length} Presentations`;
};

export const getAllRooms = async () => {
  const presentations = await PresentationModel.find({});
  const rooms = presentations.map((presentation) => presentation.room);
  const uniqueRooms = [...new Set(rooms)]
    .join(", ")
    .replace(/,(?=[^,]*$)/, " and ");
  return uniqueRooms;
};
