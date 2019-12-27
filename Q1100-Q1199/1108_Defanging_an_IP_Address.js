/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    // return address.replace(/\./gi, '[.]')
    return address.split('.').join('[.]')
};

console.log(defangIPaddr('1.1.1.1'))