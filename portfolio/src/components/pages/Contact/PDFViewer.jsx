import React from "react";
import "./styleContact.css";

{/*create PDFViewer component using inbuilt react hook */} 
const PDFViewer = () => {
 return (
 <div>
 <iframe className="pdf-frame" src='..\..\ContactImages\Barham_CV_2024_02_22.pdf' width="100%" height="450px" />
 </div>
 );
};
export default PDFViewer;