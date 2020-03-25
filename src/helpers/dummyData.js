export const offerPosts = [
  {
    id: "1",
    badges: ["fast-response"],
    tradeHistory: 25,
    username: "bigJohn1",
    payMethod: "PayPal",
    headline: "fastest trades here",
    country: "China",
    city: "Wuhan",
    limit: { min: "", max: "5000" }
  },
  {
    id: "2",
    badges: [],
    tradeHistory: 100,
    username: "traderPro",
    payMethod: "Venmo",
    headline: "4+ years experience",
    country: "United States",
    city: "New York",
    limit: { min: "20", max: "" }
  },
  {
    id: "3",
    badges: ["fast-response"],
    tradeHistory: 250,
    username: "adamB",
    payMethod: "Cash",
    headline: "Quick and safe",
    country: "United States",
    city: "Chicago",
    limit: { min: "100", max: "1000" }
  },
  {
    id: "4",
    badges: [],
    tradeHistory: 999,
    username: "DaveCh",
    payMethod: "Deposit",
    headline: "Best deals",
    country: "United States",
    city: "Miami",
    limit: { min: "", max: "" }
  }
];

export const payMethodData = [
  { name: "Cash (in person)", usa: true },
  { name: "Paypal", usa: true },
  { name: "Cash deposit", usa: true },
  { name: "Bank transfer", usa: true },
  { name: "MoneyGram", usa: false },
  { name: "Western Union", usa: false },
  { name: "International Wire", usa: false }
];
