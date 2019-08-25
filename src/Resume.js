import React from "react";
import { Document, Page } from "react-pdf";

function Resume() {
  return (
    <div>
      <Document file="../resources/Jeffrey_Yokup_Resume.pdf">
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
export default Resume;
