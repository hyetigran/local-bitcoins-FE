export const orderMapper = (order) => {
  const { id, usertaker, usermaker, cancelled, complete } = order;
  return {
    id,
    usertaker,
    usermaker,
    cancelled,
    complete,
    bchAmount: order.bch_amount,
    createdAt: order.created_at,
    updatedAt: order.updated_at,
    fiatAmount: order.fiat_amount,
    makerId: order.maker_id,
    offerId: order.offer_id,
    priceBCH: order.price_bch,
    takerId: order.taker_id,
    isMakerBuying: order.is_maker_buying,
  };
};
