import { useState } from "react";

import Heading from "./components/heading";
import Personal from "./components/personalInfo";
import Skills from "./components/skills";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function App() {
  const [Pressed, setPressed] = useState(false);
  function changeState() {
    let state = true;
    setPressed(state);
  }
  function createPDF() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0.5);
      pdf.save("download.pdf"); 
  });
  }
  return (
    <div>
      <div id="capture">
        <Heading />
        <div className="container-fluid align-items-center">
          <div className="row">
            <div className="col">
              <Personal show={Pressed} />
            </div>
            <div className="col">
              <Skills show={Pressed} />
            </div>
          </div>
        </div>
      </div>
      <div className="m-5 d-inline-block text-center text-white d-flex align-items-center justify-content-center">
        <button onClick={changeState}>Save</button>
      </div>
      <div className="d-inline-block text-center text-white d-flex align-items-center justify-content-center">
        <button onClick={createPDF}>Print</button>
      </div>
    </div>
  );
}

export default App;
