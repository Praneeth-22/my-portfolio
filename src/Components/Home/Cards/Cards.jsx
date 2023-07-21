import React from 'react'
import "./cards.css"
import img from "../Img/imgUse.jpg";
function Cards() {
  return (
    <div className="Cards">
      <div className="Card">
        <img src={img} className="card-img" alt="project" />
        <div className="card-body">
          <h2 className="card-title">IRI</h2>
          <p className="card-sub-title">qwe qereqr ertertety</p>
          <p className="card-info">lore adfaf af af af aasdasdasdasd asdas</p>
          <button className="card-btn">know more</button>
        </div>
      </div>
      <div className="Card">
        <img src={img} className="card-img" alt="project" />
        <div className="card-body">
          <h2 className="card-title">IRI</h2>
          <p className="card-sub-title">qwe qereqr ertertety</p>
          <p className="card-info">lore adfaf af af af aasdasdasdasd asdas</p>
          <button className="card-btn">know more</button>
        </div>
      </div>
      <div className="Card">
        <img src={img} className="card-img" alt="project" />
        <div className="card-body">
          <h2 className="card-title">IRI</h2>
          <p className="card-sub-title">qwe qereqr ertertety</p>
          <p className="card-info">lore adfaf af af af aasdasdasdasd asdas</p>
          <button className="card-btn">know more</button>
        </div>
      </div>
      <div className="Card">
        <img src={img} className="card-img" alt="project" />
        <div className="card-body">
          <h2 className="card-title">IRI</h2>
          <p className="card-sub-title">qwe qereqr ertertety</p>
          <p className="card-info">lore adfaf af af af aasdasdasdasd asdas</p>
          <button className="card-btn">know more</button>
        </div>
      </div>
    </div>
  );
}

export default Cards
