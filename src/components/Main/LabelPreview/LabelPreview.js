import React, { useContext } from "react";
import "./LabelPreview.css";
import "../../../shared-styles.css";

import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import PrintOutlinedIcon from "@material-ui/icons/PrintOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";

import CustomButton from "../CustomUI/CustomButton";
import { StateContext } from "../../../context";

function LabelPreview() {
  const { hazardousSymbols, setShowModal, label } = useContext(StateContext);
  function showSymbol(symbol) {
    return (
      <div className="symbol">
        <img src={require(`../../../assets/symbols/${symbol}.jpg`)} />
      </div>
    );
  }

  return (
    <div className="panel-container">
      <div className="main-bg-wrapper">
        <div className="secondary-bg-wrapper">
          <div className="title-big">Step 2: Check the preview</div>
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
                    <div className="label-text">
                      Description:{label.description}
                    </div>
                    <div className="label-text">Name/ID No:{label.owner}</div>
                    <div className="label-text">
                      Contact:{label.contactInfo}
                    </div>
                  </div>
                </div>
                <div className="label-sheet">
                  <div className="title-label">Hazardous Symbols</div>
                  <div className="flex-center margin symbol-wrapper">
                    {hazardousSymbols.map((elem) => showSymbol(elem))}
                  </div>
                  <div id="diamond" className="warning-diamond">
                    Warning Diamond
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="save-button-wrapper">
            <CustomButton endIcon={<SaveOutlinedIcon />} name="Save" />
          </div>
          <div className="title-big">Step 3: Manage label and file</div>
          <div className="collection-wrapper flex-center">
            <div className="small-label title-label">Label 1</div>
            <div className="small-label title-label">Label 2</div>
            <div className="small-label title-label">Label 3</div>
          </div>
          <div className="buttons-wrapper">
            <CustomButton endIcon={<ShareOutlinedIcon />} name="Share" />
            <CustomButton
              endIcon={<PrintOutlinedIcon />}
              name="Print"
              onClick={() => {
                console.log("clicked button");
                setShowModal(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default LabelPreview;
