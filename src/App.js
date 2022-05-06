import React, { useEffect } from "react";

import Listing from "./components/Listing/Listing";
import Main from "./components/Main/Main";

function App() {
  useEffect(() => {
    setTimeout(() => {}, 300);
  });
  return (
    <div className="App">
      <Main />
      <Listing />
    </div>
  );
}

export default App;
