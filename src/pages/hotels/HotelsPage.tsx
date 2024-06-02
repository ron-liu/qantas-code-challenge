import React, { Suspense } from "react";
import { VStack } from "@chakra-ui/react";

import { Header } from "./Header";
import { Search } from "./Search";

export const HotelsPage: React.FC = () => (
  <VStack spacing={8} alignItems="flex-start">
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Search />
    </Suspense>
  </VStack>
);
