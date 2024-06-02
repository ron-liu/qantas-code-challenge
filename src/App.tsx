import { Suspense } from "react";

import { Layout } from "./components/Layout";
import { HotelsPage } from "./pages/hotels/HotelsPage";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <HotelsPage />
      </Layout>
    </Suspense>
  );
}

export default App;
