import { AiFillPhone } from "react-icons/ai";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Language from "./languages";
import { useState } from "react";
import Bttn from "./button";

function Skills(props) {
  //need the button for the education,languages familiar,tools that have worked with
  let Show = props.show;
  const items = [];
  const [Btn, setBtn] = useState(0);
  function count() {
    setBtn(Btn + 1);
  }
  function keyReturner() {
    return Math.floor(Math.random() * 100);
  }
  for (let i = 0; i < Btn; i++) {
    items.push(
      <div>
        <div id="iterable">
          <div
            className="row d-flex align-items-center justify-content-center"
            contentEditable
            suppressContentEditableWarning={true}
          >
            Years
          </div>
          <div
            style={{ backgroundColor: "transparent" }}
            contentEditable
            suppressContentEditableWarning={true}
            className="d-flex align-items-center justify-content-center row"
          >
            Institute-Name
          </div>
        </div>
      </div>
    );
  }

  return (
    // This section contains the personal information
    <div>
      <div>
        <div>
          <h4 className="d-flex align-items-center justify-content-center p-5">
            CONTACT
          </h4>
        </div>
        <div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ padding: "0.3rem" }}
          >
            <div className="container">
              <div className="row">
                <div
                  className="col"
                  contentEditable
                  suppressContentEditableWarning={true}
                >
                  your-number
                </div>
                <div
                  className="d-flex align-items-end col"
                  style={{ marginLeft: "4rem" }}
                >
                  <AiFillPhone />
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ padding: "0.3rem" }}
          >
            <div className="container">
              <div className="row">
                <div
                  className="col"
                  contentEditable
                  suppressContentEditableWarning={true}
                >
                  Email-id
                </div>
                <div
                  className="d-flex align-items-end col"
                  style={{ marginLeft: "4rem" }}
                >
                  <MdEmail />
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ padding: "0.3rem" }}
          >
            <div className="container">
              <div className="row">
                <div
                  className="col"
                  contentEditable
                  suppressContentEditableWarning={true}
                >
                  Address
                </div>
                <div
                  className="d-flex align-items-end col"
                  style={{ marginLeft: "4rem" }}
                >
                  <MdLocationOn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--------------------------------education------------------------*/}
      <div>
        <h4 className="d-flex align-items-center justify-content-center p-5">
          Education
        </h4>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ padding: "0.3rem" }}
        >
          <div className="container">
            <div id="iterable">
              <div
                className="row d-flex align-items-center justify-content-center"
                contentEditable
                suppressContentEditableWarning={true}
              >
                Years
              </div>
              <div
                style={{ backgroundColor: "transparent" }}
                contentEditable
                suppressContentEditableWarning={true}
                className="d-flex align-items-center justify-content-center row"
              >
                Institute-Name
              </div>
            </div>
            <div key={keyReturner}>{items}</div>
            <div style={{ display: !Show ? "block" : "none" }}>
              <Bttn onClick={count} />
            </div>
            <div id="container"></div>
          </div>
        </div>
      </div>
      {/*languages known*/}
      <div>
        <Language show={props.show} />
      </div>
    </div>
  );
}
export default Skills;
