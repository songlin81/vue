const sumVATValue = require("./taxRate");
const sumValue = require("./taxRate");

test("add VAT tax rate 10% to original price", ()=>{
    expect(sumVATValue(100, 10)).toBe(110);
});

// Comment off below for branch colab
test("add VAT tax rate 15% to original price", ()=>{
    expect(sumVATValue(100, 15)).toBe(110);
});