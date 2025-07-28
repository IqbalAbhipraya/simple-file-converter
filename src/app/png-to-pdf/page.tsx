'use client';
import { PDFDocument, PDFImage } from 'pdf-lib'

export async function convertToPdf() {
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

export default function PngToPdf() {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen flex-col gap-6 p-4 bg-gray-900">
                <h1 className="text-4xl font-bold text-white mb-4">
                    PNG to PDF Converter
                </h1>
                <div className="w-full max-w-md">
                    <label htmlFor="file_input" className="block text-sm font-medium text-gray-300 mb-3">
                        Choose PNG file
                    </label>
                    <input 
                        id="file_input" 
                        type="file" 
                        multiple
                        accept="image/png/jpg" 
                        className="hover:ring-2 block w-full text-sm text-gray-300 border border-gray-600 rounded-lg cursor-pointer bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-colors"
                    />
                    <input id="file_name" type="text" placeholder="Save pdf with the name..." className="my-2 border-solid border-1 px-4 py-1 rounded-lg border-gray-600 text-sm text-gray-300 "></input>
                </div>
                <button 
                    onClick={convertToPdf} 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg"
                >
                    Convert to PDF
                </button>
            </div>
        </div>
    )
}