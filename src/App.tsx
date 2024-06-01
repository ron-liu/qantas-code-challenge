import { Suspense } from "react";
import { useGetHotelsSuspenseQuery } from "./generated/graphql";

function App() {
  const { data, error } = useGetHotelsSuspenseQuery({
    variables: { sortBy: "PRICE_HIGH_TO_LOW" },
  });
  console.log(data, error);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>Qantas code challenge</h1>
    </Suspense>
  );
}

export default App;
