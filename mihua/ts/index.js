// 编写一个函数，接受一个数字数组作为参数，并返回这些数字的平均值
function average(num) {
  if (num.length === 0) {
    return 0;
  }
  var sum = num.reduce(function (acc, cur) {
    return acc + cur;
  });
  return sum / num.length;
}
var arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];
var avg = average(arr);
console.log(avg); // 输出 3
// 编写一个函数，接受一个字符串数组作为参数，并返回其中最长的字符串
var str = ["apple", "orange", "banana", "watermelon", "tangerine", "pineapple"];
function findlength(strorage) {
  var len = "";
  for (var _i = 0, strorage_1 = strorage; _i < strorage_1.length; _i++) {
    var str_1 = strorage_1[_i];
    if (str_1.length > len.length) {
      len = str_1;
    }
  }
  return len;
}
console.log(findlength(str));
// 编写一个函数，接受一个字符串，返回里面出现次数最多的字母比如aaadereargerg，返回a:4
var most = "aaabbbccc";
function linelength(str) {
  var letterCounts = {};
  for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
    var letter = str_2[_i];
    var lettcount = letter.toLocaleLowerCase();
    if (!letterCounts[lettcount]) {
      letterCounts[lettcount] = 1;
    } else {
      letterCounts[lettcount]++;
    }
  }
  var maxCount = 0;
  var mostFrequentLetter = "";
  // 找到出现次数最多的字母
  for (var letter in letterCounts) {
    if (letterCounts[letter] > maxCount) {
      maxCount = letterCounts[letter];
      mostFrequentLetter = letter;
    }
  }
  return "".concat(mostFrequentLetter, ":").concat(maxCount);
}
console.log(linelength(most));
// 各个字母出现的次数
function countLetterOccurrences(str) {
  var letterCounts = {};
  // 统计每个字母出现的次数
  for (var _i = 0, str_3 = str; _i < str_3.length; _i++) {
    var letter = str_3[_i];
    var normalizedLetter = letter.toLowerCase(); // 将字母转换为小写以忽略大小写
    if (!letterCounts[normalizedLetter]) {
      letterCounts[normalizedLetter] = 1;
    } else {
      letterCounts[normalizedLetter]++;
    }
  }
  return letterCounts;
}
// 测试函数
var testString = "aaadereargerg";
console.log(countLetterOccurrences(testString));
var Dog = /** @class */ (function () {
  function Dog(name, species) {
    this.name = name;
    this.species = species;
  }
  return Dog;
})();
function finDog(animals) {
  var dogs = [];
  for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    if (animal.species.toLocaleLowerCase() === "dog") {
      dogs.push({ name: animal.name, species: animal.species });
    }
  }
  return dogs;
}
var animals = [
  { name: "Buddy", species: "Dog" },
  { name: "Mittens", species: "Cat" },
  { name: "Max", species: "Dog" },
  { name: "Fluffy", species: "Rabbit" },
];
var dogs = finDog(animals);
console.log(dogs);
