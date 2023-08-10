import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import "./Home.css";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Cards from "./Cards/Cards";
//import react router dom
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const Options = () => {
    return (
      <div className="options">
        <div className="close-bar">
          <ClearRoundedIcon
            id="close-icon"
            onClick={() => setMenuIsOpen(false)}
          />
        </div>
        <div className="option-bar">
          <div className="project">Home</div>
          <div className="about">
          <Link to="/about" style={{
            textDecoration: 'none',
            color: 'black'
          }}>About</Link>
          </div>
          <div className="contact">Contact</div>
        </div>
      </div>
    );
  };
  return (
    <div className="Home">
      <div className={`menu-bar ${menuIsOpen ? "open" : ""}`}>
        {menuIsOpen ? (
          <Options />
        ) : (
          <MenuRoundedIcon id="menu-icon" onClick={() => setMenuIsOpen(true)} />
        )}
      </div>
      <div className="Container">
        {/* typeeffect header */}
        <section className="header">
          <h1> Praneeth portfolio</h1>
        </section>
        <span className="Desc">sssssssssssssssssssssssss</span>
        <div className="select">
          <Stack direction="row" spacing={1}>
            <Chip variant="outlined" label="Show All" />
            <Chip variant="outlined" label="Front-End" />
            <Chip variant="outlined" label="Back-End" />
            <Chip variant="outlined" label="ReactJS" />
            <Chip variant="outlined" label="Machine Learning" />
            <Chip variant="outlined" label="Python" />
            <Chip variant="outlined" label="Operating System" />
          </Stack>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default Home;
