import React from "react";

const AppContext = React.createContext({
  currentStep: 0,
  increaseCurrentStep: () => {},
});

export default AppContext;
