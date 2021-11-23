import SponsorModel from '../models/sponsors.js';

export const getAllSponsors = async () => {
	const sponsors = await SponsorModel.find({});
	return sponsors;
}