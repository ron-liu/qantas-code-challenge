import React, { Suspense, useMemo, useState } from "react";
import { Divider, Stack } from "@chakra-ui/react";
import { SearchCondition } from "./SearchCondition";
import { SortBy, useGetHotelsSuspenseQuery } from "../../generated/graphql";
import { HotelBlock } from "./HotelBlock";

export const Search: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortBy>("PRICE_LOW_TO_HIGH");
  const { data: rawData } = useGetHotelsSuspenseQuery({
    variables: { sortBy },
  });

  // Add the useMemo hook to add the hotel id to the preview image URL to prevent caching
  const hotels = useMemo(() => {
    return rawData.hotels?.map((hotel) => ({
      ...hotel,
      property: {
        ...hotel.property,
        previewImage: {
          ...hotel.property.previewImage,
          url: `${hotel.property.previewImage.url}=${hotel.id}`,
        },
      },
    }));
  }, [rawData]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Stack width="100%">
        <SearchCondition sortBy={sortBy} setSortBy={setSortBy} numberOfHotels={hotels?.length ?? 0} />
        <Divider />
        <Stack divider={<Divider />}>
          {hotels?.map((hotel) => (
            <HotelBlock key={hotel.id} hotel={hotel} />
          ))}
        </Stack>
        <Divider />
      </Stack>
    </Suspense>
  );
};
