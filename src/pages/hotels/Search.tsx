import React, { Suspense, useState } from "react";
import { Divider, Stack } from "@chakra-ui/react";
import { SearchCondition } from "./SearchCondition";
import { SortBy, useGetHotelsSuspenseQuery } from "../../generated/graphql";
import { HotelBlock } from "./HotelBlock";

export const Search: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortBy>("PRICE_LOW_TO_HIGH");
  const { data } = useGetHotelsSuspenseQuery({
    variables: { sortBy },
  });
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Stack width="100%">
        <SearchCondition sortBy={sortBy} setSortBy={setSortBy} numberOfHotels={data.hotels?.length ?? 0} />
        <Divider />
        <Stack divider={<Divider />}>
          {data.hotels?.map((hotel) => (
            <HotelBlock key={hotel.id} hotel={hotel} />
          ))}
        </Stack>
        <Divider />
      </Stack>
    </Suspense>
  );
};
