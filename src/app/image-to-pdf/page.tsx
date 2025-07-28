'use client';

import Navbar from "@/components/Navbar"
import { convertToPdf  } from "@/components/image-to-pdf";

export default function PngToPdf() {
    return (
        <div 
            className="min-h-screen bg-gray-50"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Cpath d='M0 0h40v40H0V0z'/%3E%3C/g%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Cpath d='M0 20h40v1H0v-1zm20-20v40h1V0h-1z'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '40px 40px'}}>
            <Navbar />

            <div className="flex justify-center items-center min-h-screen flex-col gap-6 p-4 ">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Image to PDF Converter
                </h1>
                <div className="w-full max-w-md">
                    <label htmlFor="file_input" className="block text-sm font-small text-gray-600 mb-3">
                        Choose PNG/JPG/JPEG file
                    </label>
                    <input 
                        id="file_input" 
                        type="file" 
                        multiple
                        accept="image/png/jpg" 
                        className="block w-full text-sm text-gray-800 border border-gray-800 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-400 file:text-black hover:file:bg-slate-600 transition-colors"
                    />
                    <input id="file_name" type="text" placeholder="Save pdf with the name..." className="my-2 border-solid border-1 px-4 py-1 rounded-lg border-gray-600 text-sm text-gray-800 "></input>
                </div>
                <button 
                    onClick={convertToPdf} 
                    className="bg-red-100 hover:bg-red-200 border  text-black font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg"
                >
                    Convert to PDF
                </button>
            </div>
        </div>
    )
}