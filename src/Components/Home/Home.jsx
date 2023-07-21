import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import "./Home.css";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Cards from "./Cards/Cards";
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
          <div className="about">About</div>
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
            <Chip label="Show All" />
            <Chip label="Front-End" />
            <Chip label="Back-End" />
            <Chip label="ReactJS" />
            <Chip label="Machine Learning" />
            <Chip label="Python" />
            <Chip label="Operating System" />
          </Stack>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default Home;
