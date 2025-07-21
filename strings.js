function reverseStr(str){
  return str.split('').reverse().join('');
   
}

console.log(reverseStr('hello'));



function firstCapitalLetter(str){
    const arrStrWords = str.split(' ');
   const firstWord = arrStrWords[0].split('');
   const firstLetter = firstWord[0].toUpperCase();
   firstWord.splice(0,1, firstLetter);
   const first = firstWord.join('');
   arrStrWords.splice(0, 1, first);
   return arrStrWords.join(' ');
  
}

console.log(firstCapitalLetter('hello world'));

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}


console.log(countVowels("JavaScript")); 

// Task 5: Find the longest word in a sentence

// Input: "The quick brown fox jumps over the lazy dog"
// Output: "jumps"

function longestWord(str){
    const arrayStr = str.split(' ');
    let count = 0;
    let longest = '';

    for(let word of arrayStr){
        if(word.length >= count){
            count = word.length;
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord("The quick brown fox jumps over the lazy dog"));

// Task 6: Replace all spaces with dashes

// Input: "JavaScript is fun"
// Output: "JavaScript-is-fun"

function replace(str){
   return str.split(' ').join("-");
}

console.log(replace("JavaScript is fun"));

// Task 8: Remove duplicate characters

// Input: "aabbcc"
// Output: "abc"

function removeDuplicates(str){
   const arrStr = str.split('');
   const newArr = [...new Set(arrStr)];
   return newArr.join('');
}

console.log(removeDuplicates("aabbcc"));