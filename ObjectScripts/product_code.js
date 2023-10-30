"use strict";

"use strict";

let partCode1 = "XYZ:1234-L";

let parsedCode = parsePartCode(partCode1); 

function parsePartCode(code) {
    return {
        supplierCode: extractSupplierCode(code),
        productNumber: getProductNumber(code),
        size: getSize(code)
    };
}

function extractSupplierCode(code) {
    let pos = code.indexOf(':');
    return code.slice(0, pos);
}

function getProductNumber(code) {
    let startPos = code.indexOf(':') + 1;
    let endPos = code.indexOf('-');
    return code.slice(startPos, endPos); 
}

function getSize(code) {
    let pos = code.indexOf('-') + 1;
    return code.slice(pos);
}

console.log("Supplier: " + parsedCode.supplierCode +
 " Product Number: " + parsedCode.productNumber +
 " Size: " + parsedCode.size);
