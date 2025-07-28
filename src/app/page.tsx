import React from 'react';
import { FileImage, FileText, Image, File, ArrowRight } from 'lucide-react';

export default function FileConverterHomepage() {
  const converterOptions = [
    {
      icon: <FileImage className="w-6 h-6" />,
      title: "PNG to PDF",
      description: "Convert PNG images to PDF format",
      color: "bg-red-100 ",
      page: "png-to-pdf"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "JPG to PDF", 
      description: "Transform JPEG images to PDF",
      color: "bg-blue-100",
      page: ""
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Word to PDF",
      description: "Convert Word docs to PDF",
      color: "bg-green-100",
      page: ""
    },
    {
      icon: <File className="w-6 h-6" />,
      title: "PDF Tools",
      description: "Merge, split and compress PDFs",
      color: "bg-purple-100",
      page: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Cpath d='M0 0h40v40H0V0z'/%3E%3C/g%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Cpath d='M0 20h40v1H0v-1zm20-20v40h1V0h-1z'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '40px 40px'
    }}>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-gray-900 mb-6 leading-tight">
            Convert your files,<br />
            <span className="font-medium">simply and quickly</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Transform your documents and images with our easy-to-use converter tools. 
            No registration required.
          </p>
        </div>

        {/* Converter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {converterOptions.map((option, index) => (
            <a
              key={index}
              href={option.page}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-sm transition-shadow cursor-pointer group"
            >
              <div className={`${option.color} w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-grey-700`}>
                {option.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {option.description}
              </p>
              <div className="flex items-center text-gray-400 group-hover:text-gray-600 transition-colors">
                <span className="text-sm font-medium mr-2">Get started</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div>© 2025 FileConverter</div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-700">Privacy</a>
              <a href="#" className="hover:text-gray-700">Terms</a>
              <a href="#" className="hover:text-gray-700">Support</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}