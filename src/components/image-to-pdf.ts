import { PDFDocument, PDFImage } from 'pdf-lib'

export async function convertToPdf(): Promise<void> {
    const fileInput = document.getElementById("file_input") as HTMLInputElement | null;
    const nameInput = document.getElementById("file_name") as HTMLInputElement | null;

    if (!fileInput || !fileInput.files) {
        alert("Select a PNG or JPG file first");
        return;
    }

    const files = Array.from(fileInput.files);
    const savedFileName = nameInput?.value.trim() || "converted-to-pdf";

    const pdfDoc = await PDFDocument.create();

    for (const file of files) {
        const imgBytes = await file.arrayBuffer();
        const fileType = file.name.split('.').pop()?.toLowerCase();

        let pdfImage: PDFImage;

        if (fileType === "png") {
            pdfImage = await pdfDoc.embedPng(imgBytes);
        } else if (fileType === "jpg" || fileType === "jpeg") {
            pdfImage = await pdfDoc.embedJpg(imgBytes);
        } else {
            alert("The file type is unsupported, only PNG and JPG allowed.");
            return;
        }

        const imgDims = pdfImage.scale(1);
        const page = pdfDoc.addPage([imgDims.width, imgDims.height]);
    
        page.drawImage(pdfImage,{
            x: 0,
            y: 0,
            width: imgDims.width,
            height: imgDims.height
        });
    }
  
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${savedFileName}.pdf`;
    link.click();
}