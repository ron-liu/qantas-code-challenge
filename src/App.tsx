import { Suspense } from "react";

import { Layout } from "./components/Layout";
import { Hotels } from "./pages/hotels/Hotels";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Hotels />
      </Layout>
    </Suspense>
  );
}

export default App;
