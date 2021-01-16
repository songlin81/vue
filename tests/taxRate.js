function sumVATValue(init, rate){
    return (rate/100) * init + init;
}

module.exports = sumVATValue;