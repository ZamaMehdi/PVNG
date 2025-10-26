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

    // Try to find sections in order
    const sections: HTMLElement[] = [];
    
    // Try to find the about section
    const aboutSection = document.getElementById('about');
    if (aboutSection && aboutSection instanceof HTMLElement) {
      sections.push(aboutSection);
    }

    // Try to find the services section
    const servicesSection = document.getElementById('services-showcase') || 
                           document.querySelector('.services-showcase');
    if (servicesSection && servicesSection instanceof HTMLElement) {
      sections.push(servicesSection);
    }

    // Try to find the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection && contactSection instanceof HTMLElement) {
      sections.push(contactSection);
    }

    if (sections.length === 0) {
      // Fallback: capture the entire main content
      const mainContent = document.querySelector('main');
      if (mainContent) {
        const canvas = await html2canvas(mainContent as HTMLElement, {
          scale: 2,
          useCORS: true,
          logging: false,
          windowWidth: mainContent.scrollWidth,
          windowHeight: mainContent.scrollHeight
        });
        
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        
        // Add new pages if content is longer than one page
        let position = imgHeight - pdfHeight;
        while (position > 0) {
          pdf.addPage();
          const imgHeightPage = position;
          pdf.addImage(imgData, 'PNG', 0, -position, imgWidth, imgHeight);
          position -= pdfHeight;
        }
        
        pdf.save('PVNG-Company-Information.pdf');
        
        // Restore floating buttons
        floatingButtons.forEach((btn) => {
          (btn as HTMLElement).style.visibility = 'visible';
        });
        return;
      }
    }

    // Capture each section individually
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      
      // Scroll section into view
      section.scrollIntoView({ behavior: 'instant', block: 'start' });
      
      // Wait a bit for any animations
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const canvas = await html2canvas(section, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: section.scrollWidth,
        windowHeight: section.scrollHeight
      });
      
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      // Add new pages if content is longer than one page
      let position = imgHeight - pdfHeight;
      while (position > 0) {
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, -position, imgWidth, imgHeight);
        position -= pdfHeight;
      }
      
      // Add space between sections
      if (i < sections.length - 1) {
        pdf.addPage();
      }
    }
    
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

