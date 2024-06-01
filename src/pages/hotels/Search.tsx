import React, { useState } from "react";
import { Stack } from "@chakra-ui/react";
import { SearchCondition } from "./SearchCondition";
import { SortBy, useGetHotelsSuspenseQuery } from "../../generated/graphql";

export const Search: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortBy>("PRICE_LOW_TO_HIGH");
  const { data, error } = useGetHotelsSuspenseQuery({
    variables: { sortBy },
  });
  console.log(data, error);
  return (
    <Stack width="100%">
      <SearchCondition
        sortBy={sortBy}
        setSortBy={setSortBy}
        numberOfHotels={data.hotels?.length ?? 0}
      />
    </Stack>
  );
};
