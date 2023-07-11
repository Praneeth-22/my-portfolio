import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import "./App.css";
import { useState } from "react";


function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const Options = () => {
    return (
      <div className="options">
        <div className="close-bar">
          <ClearRoundedIcon id="close-icon" onClick={()=>setMenuIsOpen(false)} />
        </div>
        <div className="option-bar">
          <div className="project">Home</div>
          <div className="about">About</div>
          <div className="contact">Contact</div>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <div className={`menu-bar ${menuIsOpen ? "open" : ""}`}>
        {menuIsOpen ? (<Options /> ): (<MenuRoundedIcon id="menu-icon" onClick={()=> setMenuIsOpen(true)} />)}
      </div>
    </div>
  );
}

export default App;
