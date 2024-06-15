import React, { useState } from "react";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { Liquidation } from "./components/Liquidation/Liquidation";
import { MainComponent } from "./components/MainComponent/MainComponent";
import { GeneralInfo } from "./components/GeneralInfo/GeneralInfo";
import { PayComponent } from "./components/PayComponent/PayComponent";
import "./App.css";

function App() {
  const [generalInfoSubmitted, setGeneralInfoSubmitted] = useState(false);
  const [liquidationSubmitted, setLiquidationSubmitted] = useState(false);

  const handleGeneralInfoSubmit = () => {
    setGeneralInfoSubmitted(true);
  };

  const handleLiquidationSubmit = () => {
    setLiquidationSubmitted(true);
  };

  return (
    <>
      <HeaderNav />
      <MainComponent>
        <GeneralInfo onFormSubmit={handleGeneralInfoSubmit} />
        <Liquidation
          generalInfoSubmitted={generalInfoSubmitted}
          onFormSubmit={handleLiquidationSubmit}
        />
        <PayComponent liquidationSubmitted={liquidationSubmitted} />
      </MainComponent>
    </>
  );
}

export default App;
