// 编写一个函数，接受一个数字数组作为参数，并返回这些数字的平均值

function average(num: number[]) {
    if (num.length === 0) {
        return 0
    }
    let sum = num.reduce((acc, cur) => acc + cur)
    return sum / num.length

}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
const avg = average(arr);
console.log(avg); // 输出 3

// 编写一个函数，接受一个字符串数组作为参数，并返回其中最长的字符串

const str = ["apple", "orange", "banana", "watermelon", "tangerine", "pineapple"]

function findlength(strorage: string[]) {
    let len = ""
    for (const str of strorage) {
        if (str.length > len.length) {
            len = str
        }
    }
    return len
}

console.log(findlength(str));

// 编写一个函数，接受一个字符串，返回里面出现次数最多的字母比如aaadereargerg，返回a:4

let most: string = "aaabbbccc"

function linelength(str: string): string {
    let letterCounts: { [key: string]: number } = {}
    for (let letter of str) {
        const lettcount = letter.toLocaleLowerCase()
        if (!letterCounts[lettcount]) {
            letterCounts[lettcount] = 1
        } else {
            letterCounts[lettcount]++
        }
    }
    let maxCount = 0;
    let mostFrequentLetter = '';

    // 找到出现次数最多的字母
    for (const letter in letterCounts) {
        if (letterCounts[letter] > maxCount) {
            maxCount = letterCounts[letter];
            mostFrequentLetter = letter;
        }
    }

    return `${mostFrequentLetter}:${maxCount}`;
}

console.log(linelength(most));
// 各个字母出现的次数
function countLetterOccurrences(str: string): { [key: string]: number } {
    const letterCounts: { [key: string]: number } = {};

    // 统计每个字母出现的次数
    for (const letter of str) {
        const normalizedLetter = letter.toLowerCase(); // 将字母转换为小写以忽略大小写
        if (!letterCounts[normalizedLetter]) {
            letterCounts[normalizedLetter] = 1;
        } else {
            letterCounts[normalizedLetter]++;
        }
    }

    return letterCounts;
}

// 测试函数
const testString = "aaadereargerg";
console.log(countLetterOccurrences(testString))
// 定义一个Animal接口，具有name和species属性，定义一Dog类,实现 Animal接口，接受 个Animal类型的数组作为参数，并返回其中所有狗的名字和品种
interface Animal {
    name: string;
    species: string
}
class Dog implements Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }
}
function finDog(animals: Animal[]): { name: string; species: string }[] {
    const dogs: { name: string, species: string }[] = [];

    for (let animal of animals) {
        if (animal.species.toLocaleLowerCase() === "dog") {
            dogs.push({ name: animal.name, species: animal.species });
        }
    }
    return dogs;
}
const animals: Animal[] = [
    { name: 'Buddy', species: 'Dog' },
    { name: 'Mittens', species: 'Cat' },
    { name: 'Max', species: 'Dog' },
    { name: 'Fluffy', species: 'Rabbit' }
];

const dogs = finDog(animals);
console.log(dogs);