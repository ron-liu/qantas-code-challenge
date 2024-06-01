import React from "react";
import { Header } from "./Header";
import { Search } from "./Search";
import { VStack } from "@chakra-ui/react";

export const Hotels: React.FC = () => (
  <VStack spacing={8} alignItems="flex-start">
    <Header />
    <Search />
  </VStack>
);
