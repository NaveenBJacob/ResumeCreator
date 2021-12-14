import React from "react";

export default function heading() {
  return (
    <h3
      contentEditable="true"
      suppressContentEditableWarning={true}
      placeholder="Name"
      style={{ height: "8rem" }}
      className="d-inline-block bg-primary w-100 text-center text-white d-flex  justify-content-center"
    >
      Enter Your name here
    </h3>
  );
}
