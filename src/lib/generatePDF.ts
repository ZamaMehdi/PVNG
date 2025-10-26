import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export async function generateCompanyPDF() {
  try {
    // Hide floating buttons during capture
    const floatingButtons = document.querySelectorAll('.fixed');
    floatingButtons.forEach((btn) => {
      (btn as HTMLElement).style.visibility = 'hidden';
    });

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = 210; // A4 width in mm
    const pdfHeight = 295; // A4 height in mm

    // Helper function to add a page to PDF
    const addPageToPDF = (content: HTMLElement) => {
      return html2canvas(content, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: content.scrollWidth,
        windowHeight: content.scrollHeight
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;

        let remainingHeight = imgHeight;
        
        while (remainingHeight > 0) {
          pdf.addPage();
          const heightForThisPage = Math.min(remainingHeight, pdfHeight);
          pdf.addImage(imgData, 'PNG', 0, -(imgHeight - remainingHeight), imgWidth, imgHeight);
          remainingHeight -= pdfHeight;
        }
      });
    };

    // Get main content from current page
    const mainContent = document.querySelector('main');
    if (mainContent) {
      await addPageToPDF(mainContent as HTMLElement);
    }

    // Save PDF
    pdf.save('PVNG-Company-Information.pdf');
    
    // Restore floating buttons
    floatingButtons.forEach((btn) => {
      (btn as HTMLElement).style.visibility = 'visible';
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
  }
}

