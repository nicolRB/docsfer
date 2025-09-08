import { RouterProvider } from "react-router-dom";

import { router } from "./router/route2";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
