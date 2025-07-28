'use client';

import { convertToPdf  } from "@/components/png-to-pdf";

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