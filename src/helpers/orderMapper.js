export const orderMapper = (order) => {
  const { id, username, cancelled, complete } = order;
  return {
    id,
    username,
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
  };
};
