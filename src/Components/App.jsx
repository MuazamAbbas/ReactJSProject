import React from "react";
import Netflix from "./Netflix";
import Amazone from "./Amazone";

const favSeries = "amazone";

const App = () => (
  <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
    {favSeries === "netflix" ? <Netflix /> : <Amazone />}
  </>
);

export default App;
