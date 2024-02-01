import React from "react";
import "./styleContact.css";

const PDFViewer = () => {
 return (
 <div>
 <iframe className="pdf-frame" src='..\..\public\ContactImages\Curriculum_Vitae_Lydia_Barham_24_01.pdf' width="100%" height="700px" />
 </div>
 );
};
export default PDFViewer;