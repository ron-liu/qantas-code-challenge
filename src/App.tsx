import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  useGetHotelsQuery,
  useGetHotelsSuspenseQuery,
} from "./generated/graphql";

function App() {
  const [count, setCount] = useState(0);
  const { data, error } = useGetHotelsSuspenseQuery({
    variables: { sortBy: "PRICE_HIGH_TO_LOW" },
  });
  console.log(data, error);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Suspense>
  );
}

export default App;
