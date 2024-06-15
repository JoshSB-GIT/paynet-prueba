import React, { useState, useEffect } from "react";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { Liquidation } from "./components/Liquidation/Liquidation";
import { MainComponent } from "./components/MainComponent/MainComponent";
import { GeneralInfo } from "./components/GeneralInfo/GeneralInfo";
import { PayComponent } from "./components/PayComponent/PayComponent";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import "./App.css";

function App() {
  const [generalInfoSubmitted, setGeneralInfoSubmitted] = useState(false);
  const [liquidationSubmitted, setLiquidationSubmitted] = useState(false);
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  const handleGeneralInfoSubmit = () => {
    setGeneralInfoSubmitted(true);
  };

  const handleLiquidationSubmit = () => {
    setLiquidationSubmitted(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
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
      )}
    </>
  );
}

export default App;
