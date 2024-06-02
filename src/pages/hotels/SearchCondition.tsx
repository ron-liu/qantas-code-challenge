import React from "react";
import { Text, Flex, Select } from "@chakra-ui/react";
import { SortBy } from "../../generated/graphql";

type SearchConditionProps = {
  numberOfHotels: number;
  sortBy: SortBy;
  setSortBy: (sortBy: SortBy) => void;
};

export const SearchCondition: React.FC<SearchConditionProps> = ({ numberOfHotels, sortBy, setSortBy }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value as SortBy);
  };
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Text fontSize="xl" color="black" fontWeight="bold">
        {numberOfHotels}{" "}
        <Text as="i" color="gray.600" fontWeight="normal">
          hotels in{" "}
        </Text>
        <Text as="span">Sydney</Text>
      </Text>
      <Select value={sortBy} onChange={handleChange} maxW={160} data-testid="sort-select">
        <option value={"PRICE_HIGH_TO_LOW"}>Price high-low</option>
        <option value={"PRICE_LOW_TO_HIGH"}>Price low-high</option>
      </Select>
    </Flex>
  );
};
