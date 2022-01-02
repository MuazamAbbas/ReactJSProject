import React from "react";
import ReactDOM from "react-dom";
import "./Components/Card";
import Card from "./Components/Card";
import "./index.css";
import Sdata from "./Components/Sdata";


ReactDOM.render(
  <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
    {Sdata.map((val) => {
        return (
            <Card
              imgscr={val.imgscr}
              title={val.title}
              sname={val.sname}
              link={val.link}
            />
          );
    })};
  </>,
  document.getElementById("root")
);
