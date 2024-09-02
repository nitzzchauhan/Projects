Here are the solutions to each of the 50 string-related coding questions in JavaScript:

```javascript
// 1. Reverse a string
function reverseString(s) {
    return s.split('').reverse().join('');
}

// 2. Check if a string is a palindrome
function isPalindrome(s) {
    const len = s.length;
    for (let i = 0; i < len / 2; i++) {
        if (s[i] !== s[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 3. Count the number of vowels and consonants in a string
function countVowelsAndConsonants(s) {
    const vowels = 'aeiouAEIOU';
    let vowelCount = 0, consonantCount = 0;
    for (let char of s) {
        if (vowels.includes(char)) vowelCount++;
        else if (char.match(/[a-z]/i)) consonantCount++;
    }
    return { vowels: vowelCount, consonants: consonantCount };
}

// 4. Find the first non-repeated character in a string
function firstNonRepeatedChar(s) {
    const charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of s) {
        if (charCount[char] === 1) return char;
    }
    return null;
}

// 5. Check if two strings are anagrams
function areAnagrams(s1, s2) {
    return s1.split('').sort().join('') === s2.split('').sort().join('');
}

// 6. Remove all white spaces from a string
function removeWhiteSpaces(s) {
    return s.replace(/\s+/g, '');
}

// 7. Find the longest substring without repeating characters
function longestSubstringWithoutRepeating(s) {
    let maxLength = 0;
    let start = 0;
    const usedChars = {};
    
    for (let i = 0; i < s.length; i++) {
        if (usedChars[s[i]] !== undefined && usedChars[s[i]] >= start) {
            start = usedChars[s[i]] + 1;
        }
        usedChars[s[i]] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
}

// 8. Convert a string to uppercase without using built-in methods
function toUpperCase(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(charCode - 32);
        } else {
            result += s[i];
        }
    }
    return result;
}

// 9. Count the number of words in a string
function countWords(s) {
    return s.trim().split(/\s+/).length;
}

// 10. Replace all occurrences of a character in a string with another character
function replaceCharacter(s, oldChar, newChar) {
    return s.split(oldChar).join(newChar);
}

// 11. Remove a specific character from a string
function removeCharacter(s, ch) {
    return s.split(ch).join('');
}

// 12. Reverse each word in a given string
function reverseWords(s) {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

// 13. Find the most frequent character in a string
function mostFrequentChar(s) {
    const charCount = {};
    let maxChar = '';
    let maxCount = 0;
    
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }
    return maxChar;
}

// 14. Check if a string contains only digits
function isOnlyDigits(s) {
    return /^\d+$/.test(s);
}

// 15. Convert the first letter of each word in a string to uppercase
function capitalizeFirstLetter(s) {
    return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// 16. Check if two strings are rotations of each other
function areRotations(s1, s2) {
    return s1.length === s2.length && (s1 + s1).includes(s2);
}

// 17. Find all substrings of a given string
function allSubstrings(s) {
    const result = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            result.push(s.slice(i, j));
        }
    }
    return result;
}

// 18. Check if a string contains only unique characters
function hasUniqueChars(s) {
    const charSet = new Set();
    for (let char of s) {
        if (charSet.has(char)) return false;
        charSet.add(char);
    }
    return true;
}

// 19. Remove all duplicate characters from a string
function removeDuplicates(s) {
    const charSet = new Set();
    let result = '';
    for (let char of s) {
        if (!charSet.has(char)) {
            charSet.add(char);
            result += char;
        }
    }
    return result;
}

// 20. Find the first repeated character in a string
function firstRepeatedChar(s) {
    const charSet = new Set();
    for (let char of s) {
        if (charSet.has(char)) return char;
        charSet.add(char);
    }
    return null;
}

// 21. Count the occurrences of a specific character in a string
function countOccurrences(s, ch) {
    let count = 0;
    for (let char of s) {
        if (char === ch) count++;
    }
    return count;
}

// 22. Check if a string is a valid palindrome, ignoring non-alphanumeric characters
function isPalindromeIgnoringNonAlphanumeric(s) {
    const filtered = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return isPalindrome(filtered);
}

// 23. Find the length of the longest common prefix in an array of strings
function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1);
            if (!prefix.length) return '';
        }
    }
    return prefix;
}

// 24. Sort the characters in a string alphabetically
function sortString(s) {
    return s.split('').sort().join('');
}

// 25. Split a string into an array of words
function splitIntoWords(s) {
    return s.trim().split(/\s+/);
}

// 26. Remove all instances of a given word from a string
function removeWord(s, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'g');
    return s.replace(regex, '').replace(/\s+/g, ' ').trim();
}

// 27. Check if a string is a valid IP address
function isValidIP(s) {
    const segments = s.split('.');
    if (segments.length !== 4) return false;
    return segments.every(seg => {
        const num = parseInt(seg, 10);
        return num >= 0 && num <= 255 && seg === num.toString();
    });
}

// 28. Convert a string to its ASCII values and vice versa
function stringToAscii(s) {
    return s.split('').map(char => char.charCodeAt(0));
}

function asciiToString(arr) {
    return arr.map(code => String.fromCharCode(code)).join('');
}

// 29. Find all permutations of a given string
function permutations(s) {
    if (s.length <= 1) return [s];
    const allPerms = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const remaining = s.slice(0, i) + s.slice(i + 1);
        for (let perm of permutations(remaining)) {
            allPerms.push(char + perm);
        }
    }
    return allPerms;
}

// 30. Find the longest palindromic substring in a string
function longestPalindromicSubstring(s) {
    let maxLength = 1, start = 0;
    const len = s.length;

    for (let i = 1; i < len; i++) {
        let low = i - 1;
        let high = i;

        while (low >= 0 && high < len && s[low] === s[high]) {
            if (high - low + 1 > maxLength) {
                start = low;
                maxLength = high - low + 1;
            }
            low--;
            high++;
        }

        low = i - 1;
        high = i + 1;

        while (low >= 0 && high < len && s[low] === s[high]) {
            if (high - low + 1 > maxLength) {
                start = low;
                maxLength = high - low + 1;
            }
            low--;
            high++;


        }
    }
    return s.substring(start, start + maxLength);
}

// 31. Check if a string can be rearranged to form a palindrome
function canFormPalindrome(s) {
    const charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let oddCount = 0;
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) oddCount++;
    }
    return oddCount <= 1;
}

// 32. Count the number of times a substring appears in a string
function countSubstringOccurrences(s, sub) {
    let count = 0;
    let pos = s.indexOf(sub);
    while (pos !== -1) {
        count++;
        pos = s.indexOf(sub, pos + 1);
    }
    return count;
}

// 33. Compress a string using the counts of repeated characters
function compressString(s) {
    let result = '';
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++;
        } else {
            result += s[i] + (count > 1 ? count : '');
            count = 1;
        }
    }
    return result;
}

// 34. Check if a string starts with a given prefix and ends with a given suffix
function startsAndEndsWith(s, prefix, suffix) {
    return s.startsWith(prefix) && s.endsWith(suffix);
}

// 35. Remove all non-alphabetic characters from a string
function removeNonAlphabetic(s) {
    return s.replace(/[^a-zA-Z]/g, '');
}

// 36. Find the smallest window in a string containing all characters of another string
function smallestWindow(s, t) {
    const charCount = {};
    for (let char of t) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let left = 0;
    let count = t.length;
    let minLength = Infinity;
    let minStart = 0;

    for (let right = 0; right < s.length; right++)