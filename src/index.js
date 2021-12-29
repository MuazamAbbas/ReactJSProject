import React from "react";
import ReactDOM from "react-dom";
import './Components/Card';
import Card from "./Components/Card";
import './index.css';


ReactDOM.render(
    <>

    <Card imgscr="https://wallpapercave.com/wp/wp4056410.jpg" title="A Netflix Orignal Seeries" sname="DARK" link="https://www.netflix.com/in/title/80990668?source=35" />

    <Card imgscr="https://www.heavenofhorror.com/wp-content/uploads/2020/04/Extracurricular-netflix-review.jpg" title="A Netflix Orignal Seeries" sname="Extra Curricular" link="https://www.netflix.com/pk/title/80990668?source=35" />

    <Card imgscr="https://wallpapercave.com/wp/wp1917154.jpg" title="A Netflix Orignal Seeries" sname="Strange Things" link="https://www.netflix.com/pk/title/80057281" />

    </>
    , document.getElementById("root")
);