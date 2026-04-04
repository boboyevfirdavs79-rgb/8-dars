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
// 2-masala
// function myfunc(arr) {
//   let a = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > a) {
//       a = arr[i]
//     }


//   }
//   let b = arr.indexOf(a)
//   arr.splice(b, 1)
//   aa = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > aa) {
//       aa = arr[i]
//     }


//   }
//   return [a, aa]

// }
// console.log(myfunc([1, 2, 3, 4]));
// 3-masala
// function myfunc(arr) {
//   let a = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > a) {
//       a = arr[i]
//     }


//   }
//   let b = arr.indexOf(a)
//   arr.splice(b, 1)
//   aa = 0
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > aa) {
//       aa = arr[i]
//     }


//   }
//   return a * aa

// }
// console.log(myfunc([1, 2, 3, 4]));
// Homework
// 1-masala
// 2-masala
// function toBinary(n) {

//    return n.toString(2);
// }
// 3
// function swapElements(arr, i, j) {
//    let s=arr[i]
//    let ss=arr[j]
//    arr[i]=ss
//    arr[j]=s
//    return arr;
// }
// 4
// function letterFrequency(str) {
//   let natija = {};
//   let matn = str.toLowerCase();

//   for (let i = 0; i < matn.length; i++) {
//     let harf = matn[i];

//     if (harf >= 'a' && harf <= 'z') {
//       if (natija[harf] === undefined) {
//         natija[harf] = 1;
//       } else {
//         natija[harf] = natija[harf] + 1;
//       }
//     }
//   }

//   return natija;
// }
// 5
// function isAnagram(str1, str2) {
//   let s1 = str1.toLowerCase().replace(/\s/g, "");
//   let s2 = str2.toLowerCase().replace(/\s/g, "");

//   if (s1.length !== s2.length) {
//     return false;
//   }

//   let tartiblangan1 = s1.split('').sort().join('');
//   let tartiblangan2 = s2.split('').sort().join('');

//   return tartiblangan1 === tartiblangan2;
// }
// 6
// function longestUniqueSubstring(str) {
//   let maxUzunlik = 0;
//   let chap = 0;
//   let harflar = new Set();

//   for (let ong = 0; ong < str.length; ong++) {
//     while (harflar.has(str[ong])) {
//       harflar.delete(str[chap]);
//       chap++;
//     }

//     harflar.add(str[ong]);

//     let joriyUzunlik = ong - chap + 1;
//     if (joriyUzunlik > maxUzunlik) {
//       maxUzunlik = joriyUzunlik;
//     }
//   }

//   return maxUzunlik;
// }

// console.log(longestUniqueSubstring("abcabcbb"));
//7
// function maxSubArraySum(arr) {
//   if (arr.length === 0) return 0;

//   let maxHozirgi = arr[0];
//   let maxUmumiy = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     maxHozirgi = Math.max(arr[i], maxHozirgi + arr[i]);

//     if (maxHozirgi > maxUmumiy) {
//       maxUmumiy = maxHozirgi;
//     }
//   }

//   return maxUmumiy;
// }

// console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 ([4, -1, 2, 1])

//8
// function findTwoSum(arr, target) {
//   let ko'rilganlar = {};

//   for (let i = 0; i < arr.length; i++) {
//     let hozirgiSon = arr[i];
//     let kerakliSon = target - hozirgiSon;

//     if (ko'rilganlar[kerakliSon] !== undefined) {
//       return [ko'rilganlar[kerakliSon], i];
//     }

//     ko'rilganlar[hozirgiSon] = i;
//   }

//   return [];
// }

// // Tekshirish:
// console.log(findTwoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(findTwoSum([3, 2, 4], 6));      // [1, 2]
//9
// function longestConsecutive(arr) {
//   if (arr.length === 0) return 0;

//   let sonlar = new Set(arr);
//   let maxUzunlik = 0;

//   for (let son of sonlar) {
//     if (!sonlar.has(son - 1)) {
//       let joriySon = son;
//       let joriyUzunlik = 1;

//       while (sonlar.has(joriySon + 1)) {
//         joriySon++;
//         joriyUzunlik++;
//       }

//       if (joriyUzunlik > maxUzunlik) {
//         maxUzunlik = joriyUzunlik;
//       }
//     }
//   }

//   return maxUzunlik;
// }

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4 (1, 2, 3, 4)
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9

//10
// function sumPositivesAndNegatives(arr) {
//   let natija = { positiveSum: 0, negativeSum: 0 };

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       natija.positiveSum += arr[i];
//     } else if (arr[i] < 0) {
//       natija.negativeSum += arr[i];
//     }
//   }

//   return natija;
// }

// console.log(sumPositivesAndNegatives([1, -2, 3, 4, -5, 0])); 
