import React from "react";
import "./styleContact.css";

const PDFViewer = () => {
 return (
 <div>
 <iframe className="pdf-frame" src='..\..\ContactImages\Curriculum_Vitae_Lydia_Barham_24_01.pdf' width="100%" height="450px" />
 </div>
 );
};
export default PDFViewer;