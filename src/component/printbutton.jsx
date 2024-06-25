import React from 'react';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

const PrintButton = ({ targetRef }) => {
  const handleDownload = () => {
    toPng(targetRef.current)
      .then((dataUrl) => {
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('invoice.pdf');
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <button onClick={handleDownload} className="print-button">
      Download Invoice
    </button>
  );
};

export default PrintButton;
