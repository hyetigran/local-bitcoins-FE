import axios from "axios";
import { updateAction } from "../../helpers/updateActions";
import { dataMapper } from "../../helpers/dataMapper";

const baseURL = process.env.REACT_APP_BASE_URL;

export const FETCH_ALL_OFFERS = "FETCH_ALL_OFFERS";
export const ADD_OFFER = "ADD_OFFER";
export const UPDATE_OFFER = "UPDATE_OFFER";
export const DELETE_OFFER = "DELETE_OFFER";

export const fetchAllOffers = () => async (dispatch) => {
  try {
    const result = await axios.get(`${baseURL}/api/offers/all-offers`);
    let buyOffers = [];
    let sellOffers = [];
    result.data.forEach((offer) => {
      if (offer.buyBCH) buyOffers.push(dataMapper(offer));
      else if (!offer.buyBCH) sellOffers.push(dataMapper(offer));
    });

    dispatch(updateAction(FETCH_ALL_OFFERS, { buyOffers, sellOffers }));
  } catch (error) {
    console.log(error);
  }
};

export const addOffer = (offer) => (dispatch) => {
  const prop = offer.buyBCH ? "buyOffers" : "sellOffers";
  const offerMapped = dataMapper(offer);
  dispatch(updateAction(ADD_OFFER, { prop, offer: offerMapped }));
};

export const updateOffer = (offer) => (dispatch) => {
  const prop = offer.buyBCH ? "buyOffers" : "sellOffers";
  const offerMapped = dataMapper(offer);
  dispatch(updateAction(UPDATE_OFFER, { prop, offer: offerMapped }));
};

export const deleteOffer = (id) => (dispatch) => {
  dispatch(updateAction(DELETE_OFFER, id));
};
