(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/png-to-pdf.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "convertToPdf": ()=>convertToPdf
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__ = __turbopack_context__.i("[project]/node_modules/pdf-lib/es/api/PDFDocument.js [app-client] (ecmascript) <export default as PDFDocument>");
;
async function convertToPdf() {
    const fileInput = document.getElementById("file_input");
    const nameInput = document.getElementById("file_name");
    if (!fileInput || !fileInput.files) {
        alert("Select a PNG or JPG file first");
        return;
    }
    const files = Array.from(fileInput.files);
    const savedFileName = (nameInput === null || nameInput === void 0 ? void 0 : nameInput.value.trim()) || "converted-to-pdf";
    const pdfDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$PDFDocument$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PDFDocument$3e$__["PDFDocument"].create();
    for (const file of files){
        var _file_name_split_pop;
        const imgBytes = await file.arrayBuffer();
        const fileType = (_file_name_split_pop = file.name.split('.').pop()) === null || _file_name_split_pop === void 0 ? void 0 : _file_name_split_pop.toLowerCase();
        let pdfImage;
        if (fileType === "png") {
            pdfImage = await pdfDoc.embedPng(imgBytes);
        } else if (fileType === "jpg" || fileType === "jpeg") {
            pdfImage = await pdfDoc.embedJpg(imgBytes);
        } else {
            alert("The file type is unsupported, only PNG and JPG allowed.");
            return;
        }
        const imgDims = pdfImage.scale(1);
        const page = pdfDoc.addPage([
            imgDims.width,
            imgDims.height
        ]);
        page.drawImage(pdfImage, {
            x: 0,
            y: 0,
            width: imgDims.width,
            height: imgDims.height
        });
    }
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([
        pdfBytes
    ], {
        type: 'application/pdf'
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "".concat(savedFileName, ".pdf");
    link.click();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/png-to-pdf/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>PngToPdf
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$png$2d$to$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/png-to-pdf.ts [app-client] (ecmascript)");
'use client';
;
;
function PngToPdf() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center min-h-screen flex-col gap-6 p-4 bg-gray-900",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-white mb-4",
                    children: "PNG to PDF Converter"
                }, void 0, false, {
                    fileName: "[project]/src/app/png-to-pdf/page.tsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "file_input",
                            className: "block text-sm font-medium text-gray-300 mb-3",
                            children: "Choose PNG file"
                        }, void 0, false, {
                            fileName: "[project]/src/app/png-to-pdf/page.tsx",
                            lineNumber: 13,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "file_input",
                            type: "file",
                            multiple: true,
                            accept: "image/png/jpg",
                            className: "hover:ring-2 block w-full text-sm text-gray-300 border border-gray-600 rounded-lg cursor-pointer bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-colors"
                        }, void 0, false, {
                            fileName: "[project]/src/app/png-to-pdf/page.tsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "file_name",
                            type: "text",
                            placeholder: "Save pdf with the name...",
                            className: "my-2 border-solid border-1 px-4 py-1 rounded-lg border-gray-600 text-sm text-gray-300 "
                        }, void 0, false, {
                            fileName: "[project]/src/app/png-to-pdf/page.tsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/png-to-pdf/page.tsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$png$2d$to$2d$pdf$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToPdf"],
                    className: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg",
                    children: "Convert to PDF"
                }, void 0, false, {
                    fileName: "[project]/src/app/png-to-pdf/page.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/png-to-pdf/page.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/png-to-pdf/page.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = PngToPdf;
var _c;
__turbopack_context__.k.register(_c, "PngToPdf");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_08307e0d._.js.map