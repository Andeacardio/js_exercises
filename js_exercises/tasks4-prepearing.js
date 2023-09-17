// ------Ex1--------check if word is palindrome-------
function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}
// console.log(isPalindrome("edde"));
// --------------check if word is palindrome in enother way-------
function isPalindrome2(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
// console.log(isPalindrome2("edde"));

//-----Ex2 ----function that return min and max number of arr
const arr1 = [5, 4, 5, 32, 3, 7, 1, 8];
function getMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}
// console.log(getMinMax(arr1));
//------enother way - sort method
function getMinMax2(arr) {
  const sortedArray = arr.sort((a, b) => a - b);

  return {
    min: sortedArray[0],
    max: sortedArray[sortedArray.length - 1],
  };
}
// console.log(getMinMax2(arr1));
//-----enother way --for of method
function getMinMax3(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let current of arr) {
    if (current > max) {
      max = current;
    }
    if (current < min) {
      min = current;
    }
    return {
      min,
      max,
    };
  }
}
// console.log(getMinMax3(arr1));

//---EX3------chek if string is balansed ()
function isBalanced(str) {
  const stack = [];
  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else {
      const lastStackItem = stack.pop();
      if (lastStackItem !== "(") {
        return false;
      }
    }
  }
  if (stack.length !== 0) return false;
  return true;
}
// console.log(isBalanced("()(())"));
// my solution (you can check expression)
function isBalanced2(str) {
  const stack = [];
  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    }
    if (char === ")") {
      stack.pop();
    }
  }
  return stack.length === 0 ? true : false;
}
// console.log(isBalanced2("hello(2+2)+((3-1))"));

//----EX4 ----remote duplicates value of array
function remoteDuplicates(array) {
  return [...new Set(array)];
}
const arr2 = ["a", "b", "c", "a", "a", "c", "d"];
// console.log(remoteDuplicates(arr2));
// another solution
function removeDuplicates2(array) {
  const map = {};
  for (const char of array) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }
  return Object.keys(map);
}
// console.log(removeDuplicates2(arr2));

//----EX5-----reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
// console.log(reverseString("Hello"));
//  ---another way---foreach
function reverseString2(str) {
  let reversedString = "";
  str.split("").forEach((char) => {
    reversedString = char + reversedString;
  });
  return reversedString;
}
// console.log(reverseString2("hello"));
//---another way---reduce
function reverseString3(str) {
  return str.split("").reduce((prev, curr) => curr + prev, "");
}
// console.log(reverseString3("hello"));

// ----Ex6 ---count word ---
function countWords(str) {
  return str.split(" ").length;
}
// console.log(countWords("Hello my friends !"));

//----Ex7---count vowels lettersin sentence
function getVowelsCount(sentence) {
  return sentence.match(/[aeuio]/gi) ? sentence.match(/[aeuio]/gi).length : 0;
}
// console.log(getVowelsCount("Hello my friends"));
//another way
function getVowelsCount2(sentence) {
  let countVoutes = 0;
  const vowels = ["a", "e", "i", "u", "o"];
  for (let char of sentence) {
    if (vowels.includes(char.toLowerCase())) {
      countVoutes++;
    }
  }
  return countVoutes;
}
// console.log(getVowelsCount2("Hello my friends"));

//---EX8--capitalize all words in sentence
//my solution
function cappitalize(sentence) {
  const arr = sentence.split(" ");
  const cappitalizeArr = [];
  for (let word of arr) {
    const currentWord = word.split("");
    currentWord[0] = currentWord[0].toUpperCase();
    cappitalizeArr.push(currentWord.join(""));
  }
  return cappitalizeArr.join(" ");
}
// console.log(cappitalize("Hello my friend! And welcome to my home!"));
//refactoring
function capitalize3(sentence) {
  const words = [];
  for (let word of sentence.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
}
// console.log(capitalize3("thank you my friend!"));
//solution with map
function capitalize2(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
// console.log(capitalize2("Hello my friend! And welcome to my home!"));

//---EX9 ----get max char
function getMaxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of normalizeString(str)) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
function normalizeString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase();
}
// console.log(getMaxChar("baaaaAAAdddddc"));

//-----EX10 -----fizzbuzz
function fizzbuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
// fizzbuzz();

// ---EX11-----check anagram
//my solution
function isAnagram(str1, str2) {
  let anagram = true;
  const arr1 = str1.toLowerCase().split("");
  const arr2 = str2.toLowerCase().split("");
  if (arr1.length !== arr2.length) {
    anagram = false;
  }
  arr2.forEach((el) => {
    if (!arr1.includes(el)) {
      anagram = false;
    }
  });
  console.log(anagram);
  // return anagram;
}
// isAnagram("Night", "Thing");
// array methods
function isAnagram2(str1, str2) {
  const normalize = (str) => {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  };
  return normalize(str1) === normalize(str2);
}
// isAnagram2("Night", "Thing");
