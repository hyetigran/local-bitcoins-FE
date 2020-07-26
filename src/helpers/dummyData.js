export const payMethodData = [
  { name: "Cash in person", usa: true },
  { name: "Paypal", usa: true },
  { name: "Cash deposit", usa: true },
  { name: "Bank transfer", usa: true },
  { name: "Venmo", usa: true },
  { name: "MoneyGram", usa: false },
  { name: "Western Union", usa: false },
  { name: "International Wire", usa: false },
];

export const currencyTypesData = [
  { name: "USD", symbol: "S" },
  { name: "CAD", symbol: "S" },
  { name: "GBP", symbol: "£" },
  { name: "YEN", symbol: "¥" },
  { name: "EUR", symbol: "€" },
  { name: "RUB", symbol: "₽" },
];

export const exchangeTypesData = [
  { name: "Kraken" },
  { name: "Coinbase" },
  { name: "Binance" },
  { name: "Bitfinex" },
  { name: "Gemini" },
];

// let minutes = {
//   top: ":00",
//   quarter: ":15",
//   half: ":30",
//   threeQ: ":45"
// };
// let ampm = {
//   am: " am",
//   pm: " pm"
// };

// let hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

// const getTimes = (hours, minutes, ampm) => {
//   let newArr = [...hours, ...hours];
//   let results = [];
//   for (let i = 0; i < newArr.length; i++) {
//     let fullOne = newArr[i] + minutes.top;
//     let fullTwo = newArr[i] + minutes.quarter;
//     let fullThree = newArr[i] + minutes.half;
//     let fullFour = newArr[i] + minutes.threeQ;
//     if (i <= 11) {
//       fullOne += ampm.am;
//       fullTwo += ampm.am;
//       fullThree += ampm.am;
//       fullFour += ampm.am;
//     } else {
//       fullOne += ampm.pm;
//       fullTwo += ampm.pm;
//       fullThree += ampm.pm;
//       fullFour += ampm.pm;
//     }
//     results = [...results, fullOne, fullTwo, fullThree, fullFour];
//   }
//   return results;
// };

export const selectTimesData = [
  { id: 0, time: "12:00 am" },
  { id: 1, time: "12:15 am" },
  { id: 2, time: "12:30 am" },
  { id: 3, time: "12:45 am" },
  { id: 1, time: "1:00 am" },
  { id: 2, time: "1:15 am" },
  { id: 3, time: "1:30 am" },
  { id: 4, time: "1:45 am" },
  { id: 2, time: "2:00 am" },
  { id: 3, time: "2:15 am" },
  { id: 4, time: "2:30 am" },
  { id: 5, time: "2:45 am" },
  { id: 3, time: "3:00 am" },
  { id: 4, time: "3:15 am" },
  { id: 5, time: "3:30 am" },
  { id: 6, time: "3:45 am" },
  { id: 4, time: "4:00 am" },
  { id: 5, time: "4:15 am" },
  { id: 6, time: "4:30 am" },
  { id: 7, time: "4:45 am" },
  { id: 5, time: "5:00 am" },
  { id: 6, time: "5:15 am" },
  { id: 7, time: "5:30 am" },
  { id: 8, time: "5:45 am" },
  { id: 6, time: "6:00 am" },
  { id: 7, time: "6:15 am" },
  { id: 8, time: "6:30 am" },
  { id: 9, time: "6:45 am" },
  { id: 7, time: "7:00 am" },
  { id: 8, time: "7:15 am" },
  { id: 9, time: "7:30 am" },
  { id: 10, time: "7:45 am" },
  { id: 8, time: "8:00 am" },
  { id: 9, time: "8:15 am" },
  { id: 10, time: "8:30 am" },
  { id: 11, time: "8:45 am" },
  { id: 9, time: "9:00 am" },
  { id: 10, time: "9:15 am" },
  { id: 11, time: "9:30 am" },
  { id: 12, time: "9:45 am" },
  { id: 10, time: "10:00 am" },
  { id: 11, time: "10:15 am" },
  { id: 12, time: "10:30 am" },
  { id: 13, time: "10:45 am" },
  { id: 11, time: "11:00 am" },
  { id: 12, time: "11:15 am" },
  { id: 13, time: "11:30 am" },
  { id: 14, time: "11:45 am" },
  { id: 12, time: "12:00 pm" },
  { id: 13, time: "12:15 pm" },
  { id: 14, time: "12:30 pm" },
  { id: 15, time: "12:45 pm" },
  { id: 13, time: "1:00 pm" },
  { id: 14, time: "1:15 pm" },
  { id: 15, time: "1:30 pm" },
  { id: 16, time: "1:45 pm" },
  { id: 14, time: "2:00 pm" },
  { id: 15, time: "2:15 pm" },
  { id: 16, time: "2:30 pm" },
  { id: 17, time: "2:45 pm" },
  { id: 15, time: "3:00 pm" },
  { id: 16, time: "3:15 pm" },
  { id: 17, time: "3:30 pm" },
  { id: 18, time: "3:45 pm" },
  { id: 16, time: "4:00 pm" },
  { id: 17, time: "4:15 pm" },
  { id: 18, time: "4:30 pm" },
  { id: 19, time: "4:45 pm" },
  { id: 17, time: "5:00 pm" },
  { id: 18, time: "5:15 pm" },
  { id: 19, time: "5:30 pm" },
  { id: 20, time: "5:45 pm" },
  { id: 18, time: "6:00 pm" },
  { id: 19, time: "6:15 pm" },
  { id: 20, time: "6:30 pm" },
  { id: 21, time: "6:45 pm" },
  { id: 19, time: "7:00 pm" },
  { id: 20, time: "7:15 pm" },
  { id: 21, time: "7:30 pm" },
  { id: 22, time: "7:45 pm" },
  { id: 20, time: "8:00 pm" },
  { id: 21, time: "8:15 pm" },
  { id: 22, time: "8:30 pm" },
  { id: 23, time: "8:45 pm" },
  { id: 21, time: "9:00 pm" },
  { id: 22, time: "9:15 pm" },
  { id: 23, time: "9:30 pm" },
  { id: 24, time: "9:45 pm" },
  { id: 22, time: "10:00 pm" },
  { id: 23, time: "10:15 pm" },
  { id: 24, time: "10:30 pm" },
  { id: 25, time: "10:45 pm" },
  { id: 23, time: "11:00 pm" },
  { id: 24, time: "11:15 pm" },
  { id: 25, time: "11:30 pm" },
  { id: 26, time: "11:45 pm" },
];
