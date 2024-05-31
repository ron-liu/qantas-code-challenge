import { graphql } from "msw";
import data from "../../doc/data.json";

export const handlers = [
  // @ts-ignore
  graphql.query("hotels", (req, res, ctx) => {
    const { sortBy } = req.variables;
    let sortedHotels = data.results;

    if (sortBy === "PRICE_HIGH_TO_LOW") {
      sortedHotels = [...sortedHotels].sort(
        (a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount
      );
    } else if (sortBy === "PRICE_LOW_TO_HIGH") {
      sortedHotels = [...sortedHotels].sort(
        (a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount
      );
    }

    return res(
      ctx.data({
        hotels: sortedHotels,
      })
    );
  }),
];
