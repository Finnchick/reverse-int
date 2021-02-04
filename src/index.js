module.exports = function reverse (n) {
    if (String(n).startsWith('-')) {
        return  (String(n).split('').slice(1, String(n).length).reverse().join(''));
    } else {
        return  (String(n).split('').reverse().join(''));
    }
  
}
