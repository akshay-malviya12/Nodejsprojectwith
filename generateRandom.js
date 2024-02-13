const generateRandomcodeforotp = () => {
  return Math.floor(Math.random() * (900000 - 100000 + 1)) + 100000;
};

module.exports = { generateRandomcodeforotp };

// function generateRandomcodeforotp(length){
//   var randomstring = '';
//   var randomascii = '';
//   var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   for (var i = 0; i < length; i++) {
//       randomascii = Math.floor(Math.random() * possible.length);
//       randomstring += possible.charAt(randomascii);
//   }
//   return randomstring;
// }
