import React from "react";
import "./Label.css";

function Label({ label }) {
  console.log(label.NFPA);
  function showSymbol(symbol) {
    return (
      <div className="symbol">
        <img
          src={require(`../../../../assets/symbols/${symbol}.jpg`)}
          alt="Symbol"
        />
      </div>
    );
  }
  return (
    <div className="preview-panel">
      <div className="label-wrapper">
        <div className="label">
          <div className="label-sheet">
            <div className="flex-center padding">
              <div className="title-blackBG">
                {label.productName} ({label.chemicalFormula})
              </div>
            </div>
            <div className="description-container">
              <div className="label-text">Date:{label.date}</div>
              <div className="label-text">Expiry Date:{label.eDate}</div>
              <div className="label-text">Description:{label.description}</div>
              <div className="label-text">Name/ID No:{label.owner}</div>
              <div className="label-text">Contact:{label.contactInfo}</div>
            </div>
          </div>
          <div className="label-sheet">
            <div className="title-label">Hazardous Symbols</div>
            <div className="flex-center margin symbol-wrapper">
              {label.symbols
                ? label.symbols.map((elem) => showSymbol(elem))
                : ""}
            </div>
            <div id="diamond" className="warning-diamond">
              Warning Diamond
              <div className="diamond-wrapper">
                <img
                  className="NFPA"
                  src={require("../../../../assets/symbols/NFPA_704.svg")}
                  alt="NFPA 704 symbol"
                ></img>
                <div className="redIndex">{label.NFPA.redIndex}</div>
                <div className="blueIndex">{label.NFPA.blueIndex}</div>
                <div className="yellowIndex">{label.NFPA.yellowIndex}</div>
                <div className="whiteIndex">{label.NFPA.whiteIndex}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Label;