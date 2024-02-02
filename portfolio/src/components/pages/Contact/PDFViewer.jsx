import React from "react";
import "./styleContact.css";

{/*create PDFViewer component using inbuilt react hook */} 
const PDFViewer = () => {
 return (
 <div>
 <iframe className="pdf-frame" src='..\..\ContactImages\Curriculum_Vitae_Lydia_Barham_24_01.pdf' width="100%" height="450px" />
 </div>
 );
};
export default PDFViewer;