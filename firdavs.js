// 1 - masala
// function isBalanced(str) {
//   if (str.length % 2 !== 0) return false;

//   let pairs = {
//     '(': ')',
//     '[': ']',
//     '{': '}'
//   };

//   for (let i = 0; i < str.length / 2; i++) {
//     let opening = str[i];
//     let closing = str[str.length - 1 - i];
//     if (pairs[opening] !== closing) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isBalanced("({[{([])}]})"));