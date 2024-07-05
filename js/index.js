// // obyektga oid /
// const sturden = {
//   name: "ali",
//   age: 21,
//   phone: 303928475483,
// };
// /*console.log(Object.keys(sturden));
// console.log(Object.values(sturden));
// console.log(Object.entries(sturden));*/
// console.log(Object.freeze(sturden));
// sturden.age = 22;
// console.log(sturden);

// shablon
// function Inson(name, age, email) {
//   this.name = name;
//   this.age = age;
//   this.email = email;-
// }
// let ali = new Inson("ali", 18, "ali@gmail.com");
// console.log(ali);

// let Preson = [
//   { name: "olim", age: 21 },
//   { name: "baxtiyor", age: 34 },
// ];
// // let res = JSON.stringify(Preson);
// let res11 = JSON.parse(Preson);
// console.log(res11);

// try {
//   console.log("try", test);
//   console.log("salom");
// } catch (error) {
//   console.log("catch", error);
// }

// Obyekt metodlariga oid masalalar.
// 1-masla
// const peple = {
//   surname: "qoqonboyev",
//   name: "javohir",
//   age: 19,
// };
// function peplekeys(peple) {
//   let result = Object.keys(peple);
//   return result;
// }
// console.log(peplekeys(peple));

// 2-masala
// const peple = {
//   surname: "qoqonboyev",
//   name: "javohir",
//   age: 19,
// };
// function peplekeys(peple) {
//   let result = Object.values(peple);
//   return result;
// }
// console.log(peplekeys(peple));

// 3-masala
// const peple = {
//   surname: "qoqonboyev",
//   name: "javohir",
//   age: 19,
// };
// function peplekeys(peple) {
//   let result = Object.entries(peple);
//   return result;
// }
// console.log(peplekeys(peple));

// 4-masala
// const peple = {
//   surname: "qoqonboyev",
//   name: "javohir",
//   age: 19,
// };
// function peplekeys(peple) {
//   let result = Object.freeze(peple);
//   return result;
// }
// console.log(peplekeys(peple));

// Massiv metodlariga oid masalalar.
// 1-masala
// let son = [2, 3, 4, 5, 6, 7, 8];
// function ortasidagi3taniQirqibolish(son) {
//   let res = son.slice(2, son.length - 2);
//   //   for (let i = 0; i < son.length; i++) {
//   //     res = i++;
//   //   }
//   return res;
// }
// console.log(ortasidagi3taniQirqibolish(son));

// 2 - masala

// 3-masala
// let arr1 = [7, 8, 9];
// let arr3 = [4, 5, 6];
// let arr2 = [1, 2, 3];
// function massivlarnibirlashtirish(arr) {
//   let res = arr2.concat(arr3, arr1);
//   return res;
// }
// console.log(massivlarnibirlashtirish(arr1, arr2, arr3));

// 4-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = 5;
// function qiymatqaytarish(arr, element) {
//   let result;
//   if (res == element) {
//     result = arr.indexOf(element) ** 3;
//   }
//   return result;
// }
// console.log(qiymatqaytarish(arr, 5));

// 5-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 4, 8, 9];
// let res;
// function oxirgiqiymatindex(arr, element) {
//   res = arr.lastIndexOf(element);
//   return res;
// }
// console.log(oxirgiqiymatindex(arr, 4));

// 6-masala
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [11, 10, 21, 3, 4, 34, 12, 1];
// let res;
// let result;
// function concatvaindexofbirga(arr, element) {
//   res = arr.concat(arr2);
//   res = res.indexOf(element);
//   if (res !== -1) {
//     result = "true";
//   } else {
//     result = "false";
//   }
//   return result;
// }
// console.log(concatvaindexofbirga(arr, 0));

// // 7-masala
// let arr1 = [11, 10, 21, 3, 4, 34, 12, 1];
// function elelmentQidirish(arr, element) {
//   let res = arr1.includes(element);
//   return res;
// }
// console.log(elelmentQidirish(arr1, 34));

// 8-masala

// let arr2 = [112, 101, 218, 505, 444, 303, 120, 101, 716];
// function toqlariningOrtachasinitopish(arr) {
//   let sum = 0;
//   let soni = 0;
//   arr.forEach(function (value) {
//     if (value % 2 === 1 && value >= 100 && value < 1000) {
//       sum += value;
//       soni++;
//     }
//   });
//   if (soni === 0) {
//     return 0;
//   }
//   let orta = sum / soni;
//   return orta;
// }
// console.log(toqlariningOrtachasinitopish(arr2));

// 9-masala
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let result;
// function yangimassivhosilqilish(arr) {
//   return arr.map(function (value) {
//     if (value % 2 == 0) {
//       return value ** 2;
//     } else {
//       return value ** 3;
//     }
//   });
// }
// console.log(yangimassivhosilqilish(arr));

// 10-masala
// let arr = ["salom", "yaxshimisz", "mashina", "bmw"];
// function strarr(arr) {
//   return arr.map(function (value) {
//     return value.slice(value.length - 1);
//   });
// }
// console.log(strarr(arr));

// 11-masala
// let arr = ["slom", "yaxshimisz", "mashina", "bmw"];
// function yangimassivhosilqilish(arr) {
//   return arr.filter(function (value) {
//     return value.length <= 4;
//   });
// }
// console.log(yangimassivhosilqilish(arr));

// 12-masla
// let user = [
//   { name: "jon", age: 5 },
//   { name: "doe", age: 20 },
//   { name: "alex", age: 50 },
// ];
// function somearr(user) {
//   return user.some(function (value) {
//     return value.age > 18;
//   });
// }
// console.log(somearr(user));

// 13-masala
// let uzbek = ["Azamjon", "Shavkatjon", "Qulpiddin"];
// function jonibomasayoq(uzbek) {
//   return uzbek.every(function (jon) {
//     return jon.includes("jon");
//   });
// }
// console.log(jonibomasayoq(uzbek));

// // 14-masala
// let arr = [12, 54, 321, 125, 366, 78, 767, 800, 100];
// function karralilarinitopish(arr) {
//   return arr.find(function (a) {
//     return a >= 100 && a < 1000 && a % 5 == 0;
//   });
// }
// console.log(karralilarinitopish(arr));

// // 15-masala
// let uzbek = ["Sarvar", "Ravshnabek", "Qulpiddin"];
// function beksozibosi(uzbek) {
//   return uzbek.findIndex(function (a) {
//     return a.includes("bek");
//   });
// }
// console.log(beksozibosi(uzbek));

// savolllarga javob
// IIFE ga oid 4 ta misol tuzing hamda ularning qanday ishlashini, IIFE ning nega kerakligini izohlang.
(function () {
  let a = 5;
})();
/*-
uning avzalligi iife da elon qilingan  har qanday ozgaruvchi console oynasidan qidirilganda 
korinmaydi va bu bizning kodimizga tashqaridan murojat qilishni yoq qilib qoyadi agar kodimizni 
global scopeda elon qilsak uni tashqaridan bemalol chaqirib olsa b0ladi .iifeni biz doim ham
ishlatishimiz  shart emas u ozimiz korilishini istamaydigan qismlar uchun berganimiz yaxshi*/

//   2-savol
// a)
// let son = [1, 2, 3, 4, 5, 6, 7];
// const juft = (son) => {
//   return son.filter(function (a) {
//     return a % 2 == 0;
//   });
// };
// console.log(juft(son));

//b)
let son = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = 0;
const juft = (son) => {
  let res = son.map(function (a) {
    result += a;
  });
  return result;
};
console.log(juft(son));
