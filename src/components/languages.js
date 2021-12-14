import Bttn from "./button";
import { useState } from "react";
export default function Language(props) {
  let Show = props.show;
  const itemsLan = [];
  const itemTools = [];
  const [BtnLan, setBtnlan] = useState(0);
  function countLan() {
    setBtnlan(BtnLan + 1);
  }
  const [BtnTools, setBtnTools] = useState(0);
  function countTools() {
    setBtnTools(BtnTools + 1);
  }
  function keyReturner() {
    return Math.floor(Math.random() * 100);
  }
  for (let i = 0; i < BtnLan; i++) {
    itemsLan.push(
      <div className="d-flex ">
        <div contentEditable suppressContentEditableWarning={true}>
          Language
        </div>
        <select style={{ marginLeft: "4px" }} name="skills" id="skills">
          <option value="Familiar">Familiar</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </div>
    );
  }
  for (let i = 0; i < BtnTools; i++) {
    itemTools.push(
      <div contentEditable suppressContentEditableWarning={true}>
        Tools
      </div>
    );
  }
  return (
    <div>
      {/*Store details on the various languages known and the tools familiar*/}
      <h5
        style={{ padding: "2rem" }}
        className="d-flex align-items-center justify-content-center"
      >
        Skills
      </h5>
      {/*contents*/}
      <div>
        <div className="d-flex ">
          <div contentEditable suppressContentEditableWarning={true}>
            Language
          </div>
          <select style={{ marginLeft: "4px" }} name="skills" id="skills">
            <option value="Familiar">Familiar</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <div key={keyReturner}>{itemsLan}</div>
        <div style={{ display: !Show ? "block" : "none" }}>
          <Bttn onClick={countLan} />
        </div>
      </div>
      <div>
        <h5
          style={{ padding: "2rem" }}
          className="d-flex align-items-center justify-content-center"
        >
          Tools
        </h5>
        <div>
          <div contentEditable suppressContentEditableWarning={true}>
            Tools
          </div>
          <div key={keyReturner}>{itemTools}</div>
          <div style={{ display: !Show ? "block" : "none" }}>
            <Bttn onClick={countTools} />
          </div>
        </div>
      </div>
    </div>
  );
}
