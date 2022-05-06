import React, { useState } from "react";
import Main from "./components/Main/Main";
import AppContext from "./store/appContext";

function App() {
  const [step, setStep] = useState(0);
  return (
    <AppContext.Provider
      value={{ currentStep: step, increaseCurrentStep: () => setStep(step + 1) }}
    >
      <Main />
    </AppContext.Provider>
  );
}

export default App;
