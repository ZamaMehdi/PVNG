import jsPDF from 'jspdf';
import { Content } from './content';

// Helper function to strip HTML tags
function stripHtmlTags(html: string): string {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

export function generateCompanyPDF(langContent: any) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  let yPosition = margin;

  // Helper function to add a new page if needed
  const checkPageBreak = (requiredHeight: number) => {
    if (yPosition + requiredHeight > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Helper function to add text with automatic wrapping
  const addText = (text: string, fontSize: number, isBold: boolean = false, color: number[] = [0, 0, 0]) => {
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);
    if (isBold) {
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setFont('helvetica', 'normal');
    }
    
    const textLines = doc.splitTextToSize(stripHtmlTags(text), pageWidth - 2 * margin);
    
    checkPageBreak(textLines.length * fontSize * 1.5);
    
    doc.text(textLines, margin, yPosition);
    yPosition += textLines.length * fontSize * 1.5;
    return yPosition;
  };

  // Title
  addText(langContent.headerTitle, 18, true, [0, 60, 130]);
  yPosition += 5;

  // About Section
  addText(langContent.aboutTitle, 16, true, [0, 100, 200]);
  yPosition += 3;
  addText(langContent.aboutPara1, 10, false, [50, 50, 50]);
  addText(langContent.aboutPara2, 10, false, [50, 50, 50]);
  addText(langContent.aboutPara3, 10, false, [50, 50, 50]);
  addText(langContent.aboutPara4, 10, false, [50, 50, 50]);
  yPosition += 10;

  // Services Section
  addText(langContent.servicesTitle, 16, true, [0, 100, 200]);
  yPosition += 3;
  addText(langContent.servicesIntro, 10, false, [50, 50, 50]);
  yPosition += 5;

  // Service 1
  addText(langContent.service1Heading, 12, true, [200, 0, 0]);
  yPosition += 3;
  addText(langContent.service1Para, 9, false, [50, 50, 50]);
  yPosition += 3;

  // Service 2
  addText(langContent.service2Heading, 12, true, [0, 100, 200]);
  yPosition += 3;
  addText(langContent.service2Para, 9, false, [50, 50, 50]);
  yPosition += 3;

  // Service 3
  addText(langContent.service3Heading, 12, true, [200, 100, 0]);
  yPosition += 3;
  addText(langContent.service3Para, 9, false, [50, 50, 50]);
  yPosition += 3;

  // Service 4
  addText(langContent.service4Heading, 12, true, [100, 0, 200]);
  yPosition += 3;
  addText(langContent.service4Para, 9, false, [50, 50, 50]);
  yPosition += 3;

  // Service 5
  addText(langContent.service5Heading, 12, true, [0, 150, 0]);
  yPosition += 3;
  addText(langContent.service5Para, 9, false, [50, 50, 50]);
  yPosition += 10;

  // Contact Section
  addText('Contact Information', 16, true, [0, 100, 200]);
  yPosition += 5;

  // Phone
  addText('Phone:', 11, true, [200, 0, 100]);
  addText('+971 52 211 0379', 9, false, [50, 50, 50]);
  yPosition += 3;

  // Email
  addText('Email:', 11, true, [100, 0, 200]);
  addText('finance@pvngelectromechanical.com', 9, false, [50, 50, 50]);
  addText('info@pvngelectromechanical.com', 9, false, [50, 50, 50]);
  addText('sales@pvngelectromechanical.com', 9, false, [50, 50, 50]);
  addText('hr@pvngelectromechanical.com', 9, false, [50, 50, 50]);
  yPosition += 3;

  // Address
  addText('Address:', 11, true, [200, 0, 100]);
  addText(langContent.contactAddressLine1, 9, false, [50, 50, 50]);
  addText(langContent.contactAddressLine2, 9, false, [50, 50, 50]);
  addText(langContent.contactAddressLine3, 9, false, [50, 50, 50]);
  if (langContent.contactAddressLine4) {
    addText(langContent.contactAddressLine4, 9, false, [50, 50, 50]);
  }

  // Save the PDF
  doc.save('PVNG-Company-Information.pdf');
}

