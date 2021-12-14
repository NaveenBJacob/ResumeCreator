import Bttn from "./button";
import React, { useState } from "react";

function Skills(props) {
  let Show = props.show;
  const items = [];
  const [Btn, setBtn] = useState(0);
  function Count() {
    setBtn(Btn + 1);
  }
  function keyReturner() {
    return Math.floor(Math.random() * 100);
  }
  for (let i = 0; i < Btn; i++) {
    items.push(
      <div>
        <div contentEditable suppressContentEditableWarning={true}>
          Explain about the projects that you have worked on
        </div>
      </div>
    );
  }
  // const [Show, setShow] = useState(true);
  // function change_state_show() {
  //   let state = Show;
  //   setShow(!state);
  //   console.log(state);
  // }
  return (
    <div>
      <div>
        <h4 className="d-flex align-items-center justify-content-center p-5">
          Projects Worked on
        </h4>
        <div>
          <div contentEditable suppressContentEditableWarning={true}>
            Explain about the projects that you have worked on
          </div>
          <div key={keyReturner}>{items}</div>
          <div style={{ display: !Show ? "block" : "none" }}>
            <Bttn onClick={Count} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
