// E-TASK
const getReverse = (str) => {
  return str.split("").reverse().join("");
};
const res = getReverse("Hello");
console.log(res);
// D-TASK

// const checkContent = (str1, str2) => {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// };
// const res = checkContent("sobirov", "ibvorso");
// console.log(res);

// C-TASK
// Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
// MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

// class Shop {
//   constructor(product1, product2, product3) {
//     this.non = product1;
//     this.lagmon = product2;
//     this.cola = product3;
//   }

//   // methods

//   getCurrentTime() {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const currentTime = `${hours}:${minutes}`;
//     return currentTime;
//   }

//   qoldiq() {
//     const currentTime = this.getCurrentTime();
//     console.log(`Hozir ${currentTime}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
//   }
//   sotish(productName, num) {
//     if (productName === "non") {
//       this.non -= num;
//     } else if (productName === "lagmon") {
//       this.lagmon -= num;
//     } else {
//       this.cola -= num;
//     }
//   }
//   qabul(productName, num) {
//     if (productName === "non") {
//       this.non += num;
//     } else if (productName === "lagmon") {
//       this.lagmon += num;
//     } else {
//       this.cola += num;
//     }
//   }
// }

// const shop = new Shop(4, 5, 2);
// shop.qabul("cola", 5);
// shop.sotish("cola", 1);
// shop.sotish("lagmon", 2);
// shop.sotish("non", 3);
// shop.qoldiq();

// // Count Animals
// const animal_list = [
//   "fox",
//   "ant",
//   "bird",
//   "lion",
//   "wolf",
//   "deer",
//   "bear",
//   "frog",
//   "hen",
//   "mole",
//   "duck",
//   "goat",
//   "dog",
//   "cat",
//   "bat",
//   "cock",
//   "cow",
// ];

// const findAnimals = (str) => {
//   return animal_list.filter((ele) => {
//     for (const char of ele) {
//       if (!str.includes(char)) {
//         return false;
//       }
//     }
//     return true;
//   });
// };

// const javob = findAnimals("dgoat");
// console.log(javob);

// B-TASK
// const countLetter = (string) => {
//   let count = 0;
//   string.split("").forEach((letter) => {
//     if (parseInt(letter)) {
//       count++;
//     }
//   });
//   return count;
// };

// const res = countLetter("enginas2345eer");
// console.log(`Berilgan string ichida ${res} ta raqam bor`);
// // A-TASK
// const countLetter = (string, l) => {
//   let count = 0;
//   string.split("").forEach((letter) => {
//     if (letter === l) {
//       count++;
//     }
//   });
//   return count;
// };

// const res = countLetter("engineer", "e");
// console.log(res);

// console.log("TRAIN AREA!");
// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba bo'ling", // 0-20
//   "to'g'ri boshliq tanlang va ko'proq hato qiling", // 20-30
//   "o'zingizga ishlashni boshlang", // 30-40
//   "siz kuchli bo'lgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yo'q endi", // 60
// ];

// // Callback function
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(() => {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// // Asynchronous function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// // call via then/catch
// // console.log("passed here 0");
// // maslahatBering(25)
// //   .then((data) => {
// //     console.log("javob:", data);
// //   })
// //   .catch((err) => {
// //     console.log("ERROR:", err);
// //   });
// // console.log("passed here 1");

// //async/await
// // call via async/await
// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();
