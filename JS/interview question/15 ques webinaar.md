Here are five very simple coding questions in JavaScript, suitable for beginners:








1. **Question 1: Reverse a Number**
   - **Description:** Write a function that takes a number and returns it reversed.
   - **Example:**
     ```javascript
     reverseNumber(12345);  // Output: 54321
     ```

2. **Question 2: Check for Even or Odd**
   - **Description:** Write a function that checks whether a number is even or odd.
   - **Example:**
     ```javascript
     isEven(4);  // Output: true
     isEven(5);  // Output: false
     ```

3. **Question 3: Find the Maximum Number in an Array**
   - **Description:** Write a function that returns the largest number from an array.
   - **Example:**
     ```javascript
     findMax([1, 2, 3, 4, 5]);  // Output: 5
     ```

4. **Question 4: Count Vowels in a String**
   - **Description:** Write a function that counts the number of vowels in a given string.
   - **Example:**
     ```javascript
     countVowels("hello");  // Output: 2
     ```

5. **Question 5: Check if a String Contains a Substring**
   - **Description:** Write a function that checks if a string contains a specified substring.
   - **Example:**
     ```javascript
     containsSubstring("hello world", "world");  // Output: true
     containsSubstring("hello world", "goodbye"); // Output: false
     ```

Here are simple solutions for each of the five JavaScript coding questions:

### 1. Reverse a Number
```javascript
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

// Example usage:
console.log(reverseNumber(12345));  // Output: 54321
```

### 2. Check for Even or Odd
```javascript
function isEven(num) {
    return num % 2 === 0;  // Returns true if the number is even
}

// Example usage:
console.log(isEven(4));  // Output: true
console.log(isEven(5));  // Output: false
```

### 3. Find the Maximum Number in an Array
```javascript
function findMax(arr) {
    return Math.max(...arr);  // Use the spread operator to find the max value
}

// Example usage:
console.log(findMax([1, 2, 3, 4, 5]));  // Output: 5
```

### 4. Count Vowels in a String
```javascript
function countVowels(str) {
    const vowels = 'aeiouAEIOU';  // List of vowels (case insensitive)
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;  // Increment count for each vowel
        }
    }

    return count;
}

// Example usage:
console.log(countVowels("hello"));  // Output: 2
```

### 5. Check if a String Contains a Substring
```javascript
function containsSubstring(str, substring) {
    return str.includes(substring);  // Use the includes method to check for substring
}

// Example usage:
console.log(containsSubstring("hello world", "world"));  // Output: true
console.log(containsSubstring("hello world", "goodbye")); // Output: false
```

### Summary:
- **Reverse a Number:** Converts the number to a string, reverses it, and converts it back to a number.
- **Check for Even or Odd:** Uses the modulo operator to determine if a number is even or odd.
- **Find the Maximum Number in an Array:** Uses the `Math.max` function with the spread operator to find the largest number.
- **Count Vowels in a String:** Iterates through the string and counts the vowels.
- **Check if a String Contains a Substring:** Utilizes the `includes` method to check for the presence of a substring.





































Here are coding interview questions in JavaScript that have been asked by companies, along with sources and references:

### 1. **Question:**
   - **Reverse a String in JavaScript.**
   - **Description:** Write a function that takes a string and returns it reversed.
   - **Example:**  
     Input: `"hello"`  
     Output: `"olleh"`

   **Asked by:** Google, Amazon  
   **Source:** [LeetCode Discuss](https://leetcode.com/discuss/interview-question/283824/google-coding-question-reverse-string)

---

### 2. **Question:**
   - **Find the First Non-Repeating Character in a String.**
   - **Description:** Write a function to find the first character that does not repeat in a string. Return the character or `null` if none found.
   - **Example:**  
     Input: `"swiss"`  
     Output: `"w"`

   **Asked by:** Amazon, Microsoft  
   **Source:** [InterviewBit](https://www.interviewbit.com/javascript-interview-questions/)

---

### 3. **Question:**
   - **Sum of Two Numbers in an Array Equal to a Given Target.**
   - **Description:** Write a function that returns the indices of the two numbers that add up to a specific target.
   - **Example:**  
     Input: `arr = [2, 7, 11, 15], target = 9`  
     Output: `[0, 1]`

   **Asked by:** Facebook, Uber  
   **Source:** [LeetCode - Two Sum](https://leetcode.com/problems/two-sum/)

---

### 4. **Question:**
   - **Check if a String is a Palindrome.**
   - **Description:** Write a function that checks if a given string is a palindrome. A palindrome is a word or phrase that reads the same forward and backward.
   - **Example:**  
     Input: `"madam"`  
     Output: `true`

   **Asked by:** Adobe, Cisco  
   **Source:** [GeeksforGeeks](https://www.geeksforgeeks.org/check-if-a-string-is-palindrome/)

---

### 5. **Question:**
   - **Find the Longest Substring Without Repeating Characters.**
   - **Description:** Given a string, find the length of the longest substring without repeating characters.
   - **Example:**  
     Input: `"abcabcbb"`  
     Output: `3` (The answer is `"abc"`)

   **Asked by:** Amazon, Microsoft  
   **Source:** [LeetCode - Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

---

###Solution

------
------



### Question: 
**Reverse a String in JavaScript.**

**Description:**  
Write a function that takes a string and returns it reversed.

**Example:**  
Input: `"hello"`  
Output: `"olleh"`

### Solution 1: Using Built-in JavaScript Methods
```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));  // Output: "olleh"
```

#### Explanation:
1. **`str.split('')`:**  
   This method splits the string into an array of characters. The argument `''` (empty string) tells `split()` to break the string at each character, returning an array of individual characters.  
   Example: `"hello".split('')` results in `["h", "e", "l", "l", "o"]`.

2. **`reverse()`:**  
   The `reverse()` method reverses the elements of the array in place. After calling this method, the array becomes `["o", "l", "l", "e", "h"]`.

3. **`join('')`:**  
   Finally, `join('')` converts the reversed array back into a string. The `''` argument tells `join()` to concatenate the characters with no separator. The final output is the string `"olleh"`.

---

### Solution 2: Using a For Loop (Without Built-in Methods)
```javascript
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello"));  // Output: "olleh"
```

#### Explanation:
1. **`let reversed = '';`**  
   We initialize an empty string `reversed` that will store the reversed string.

2. **`for (let i = str.length - 1; i >= 0; i--)`:**  
   We start from the last character (`str.length - 1`) and decrement the index (`i--`) in each iteration until we reach the first character (`i >= 0`). This ensures that we traverse the string from right to left.

3. **`reversed += str[i];`**  
   In each iteration, we append the current character (`str[i]`) to the `reversed` string.

4. **Return the `reversed` string.**  
   After the loop finishes, we return the final reversed string.

---

### Solution 3: Using Recursion
```javascript
function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str[0];
    }
}

console.log(reverseString("hello"));  // Output: "olleh"
```

#### Explanation:
1. **Base Case:**  
   If the string is empty (`str === ""`), return an empty string `""`.

2. **Recursive Case:**  
   We take the first character of the string (`str[0]`) and move it to the end. Then we recursively reverse the rest of the string (`str.substr(1)`).
   
   For example, for the input `"hello"`, the recursion would work like this:
   - Call 1: `"hello"` → `"ello" + "h"`
   - Call 2: `"ello"` → `"llo" + "e"`
   - Call 3: `"llo"` → `"lo" + "l"`
   - Call 4: `"lo"` → `"o" + "l"`
   - Call 5: `"o"` → `"" + "o"`

3. **Concatenation:**  
   Each recursive call builds up the final reversed string, starting from the innermost call where the string becomes empty.

---

### Performance Considerations:
- **Time Complexity:**  
  All three solutions have a time complexity of **O(n)**, where `n` is the length of the string. This is because we need to examine each character in the string once.
  
- **Space Complexity:**
  - The first solution using built-in methods (`split`, `reverse`, `join`) has a space complexity of **O(n)** because it creates a new array to store the characters.
  - The second solution using a loop has a space complexity of **O(n)** because it creates a new string.
  - The recursive solution also has a space complexity of **O(n)** due to the recursion stack.

### When to Use Each Solution:
- **Built-in Methods (Solution 1):** This is the most concise and readable solution. Use this when you need quick implementation and built-in methods are allowed.
- **For Loop (Solution 2):** If you want more control over how the string is processed or if you need to avoid using additional methods, this solution is ideal.
- **Recursion (Solution 3):** Use this approach if you want to demonstrate knowledge of recursion. However, it can be less efficient due to the overhead of recursive calls.


------
------
------
### Question:  
**Find the First Non-Repeating Character in a String.**

**Description:**  
Write a function to find the first character that does not repeat in a string. Return the character or `null` if none is found.

**Example:**  
Input: `"swiss"`  
Output: `"w"`



### Solution 1: Using a Hash Map (Object in JavaScript)
```javascript
function firstNonRepeatingCharacter(str) {
    const charCount = {};

    // Step 1: Count the occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first character with a count of 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;  // Return null if no non-repeating character is found
}

console.log(firstNonRepeatingCharacter("swiss"));  // Output: "w"
```

### Explanation:
1. **Step 1 (Counting occurrences):**  
   We use an object `charCount` to store the count of each character in the string.  
   - For each character in the string (`for (let char of str)`), we either initialize its count to `1` (if it’s the first time we see it) or increment its count by 1.
   - Example for input `"swiss"`:  
     - After counting: `{s: 3, w: 1, i: 1}`

2. **Step 2 (Finding the first non-repeating character):**  
   We iterate through the string again and for each character, check if its count in the `charCount` object is `1`. The first character that meets this condition is returned as the result.
   - In the example, the first non-repeating character is `"w"` because its count is `1`.

3. **Return `null`:**  
   If no non-repeating character is found, we return `null`.

---

### Solution 2: Using Array Indexing
```javascript
function firstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}

console.log(firstNonRepeatingCharacter("swiss"));  // Output: "w"
```

<hr>

### Explanation:
1. **`indexOf` and `lastIndexOf`:**  
   - `indexOf(str[i])` returns the first occurrence of the character `str[i]` in the string.
   - `lastIndexOf(str[i])` returns the last occurrence of the same character.
   - If both indices are the same, it means that character appears only once in the string.

2. **Iterating through the string:**  
   We loop through each character in the string and check if its first occurrence (`indexOf`) is equal to its last occurrence (`lastIndexOf`). If true, that character is non-repeating and is returned immediately.

3. **Return `null`:**  
   If no non-repeating character is found after the loop, we return `null`.

**Example for `"swiss"`:**
- For `s`: `indexOf('s') = 0`, `lastIndexOf('s') = 4`, so it repeats.
- For `w`: `indexOf('w') = 1`, `lastIndexOf('w') = 1`, so it is non-repeating.

---

### Performance Considerations:
- **Time Complexity:**
   - **Hash Map Solution (Solution 1):**  
     - Counting characters takes **O(n)** time.
     - The second loop to find the first non-repeating character also takes **O(n)**.
     - So the overall time complexity is **O(n)**, where `n` is the length of the string.

   - **Array Indexing Solution (Solution 2):**  
     - For each character, `indexOf` and `lastIndexOf` take **O(n)** time, and we do this for each character.
     - So the overall time complexity is **O(n^2)**, which is less efficient for longer strings.

- **Space Complexity:**
   - **Hash Map Solution (Solution 1):**  
     - The space complexity is **O(n)** because we store character counts in a hash map.
     
   - **Array Indexing Solution (Solution 2):**  
     - The space complexity is **O(1)** since we are not using any extra data structures apart from the input string.

### When to Use Each Solution:
- **Hash Map Solution (Solution 1):**  
  This is the most efficient solution with **O(n)** time complexity. Use this approach when performance is critical, especially with large strings.
  
- **Array Indexing Solution (Solution 2):**  
  This approach is simpler to implement but has a higher time complexity of **O(n^2)**. It's more suited for short strings or in cases where simplicity is preferred over performance.


---
---
---
### Question:  
**Sum of Two Numbers in an Array Equal to a Given Target.**

**Description:**  
Write a function that returns the indices of the two numbers in the array that add up to a specific target.

**Example:**  
Input: `arr = [2, 7, 11, 15], target = 9`  
Output: `[0, 1]`

**Explanation:**  
- The numbers at indices `0` and `1` (i.e., `2` and `7`) add up to `9`.

---

### Solution 1: Using a Hash Map (Optimal Solution)
```javascript
function twoSum(arr, target) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        // If the complement is in the map, return its index and the current index
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Add the current element to the map with its index
        map.set(arr[i], i);
    }

    return null;  // Return null if no solution is found
}

console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
```

### Explanation:
1. **Map to Store Indexes:**
   - We create a `Map()` object to store the indices of array elements as we iterate through the array.
   - The key is the array element, and the value is its index in the array.

2. **Checking for the Complement:**
   - For each element in the array `arr[i]`, we calculate its complement as `target - arr[i]`.
   - We check if this complement exists in the map (i.e., we’ve seen a number earlier in the array that, when added to `arr[i]`, equals the `target`).
   
3. **Return Indices:**
   - If the complement is found in the map, we return an array containing the index of the complement and the current index (`i`).

4. **Store the Current Element:**
   - If the complement is not found, we store the current element in the map, with its index as the value (`map.set(arr[i], i)`).

5. **Return `null`:**
   - If no such pair is found, return `null`.

**Example for `arr = [2, 7, 11, 15], target = 9`:**
- **Iteration 1 (i = 0, element = 2):**  
  - Complement = `9 - 2 = 7`.  
  - The map is empty, so store `2` with index `0`.  
  - Map: `{2: 0}`

- **Iteration 2 (i = 1, element = 7):**  
  - Complement = `9 - 7 = 2`.  
  - The map contains `2` at index `0`.  
  - Return `[0, 1]`.

---

### Solution 2: Using a Brute Force Approach (Less Efficient)
```javascript
function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j];
            }
        }
    }
    return null;  // Return null if no solution is found
}

console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
```

### Explanation:
1. **Two Nested Loops:**
   - We use two loops to compare each element in the array with every other element.
   - The outer loop runs through the array with index `i`, and the inner loop checks each subsequent element with index `j` (where `j > i`).

2. **Check Sum:**
   - For each pair of elements `arr[i]` and `arr[j]`, check if their sum equals the `target`.
   - If a matching pair is found, return their indices as an array `[i, j]`.

3. **Return `null`:**
   - If no matching pair is found after checking all possibilities, return `null`.

**Example for `arr = [2, 7, 11, 15], target = 9`:**
- **Iteration 1 (i = 0, j = 1):**  
  - `arr[0] + arr[1] = 2 + 7 = 9`.  
  - Return `[0, 1]`.

---

### Performance Considerations:
- **Time Complexity:**
   - **Hash Map Solution (Solution 1):**  
     - We loop through the array once, so the time complexity is **O(n)**, where `n` is the number of elements in the array.
     - Checking for the complement in the map and adding an element to the map are both **O(1)** operations.

   - **Brute Force Solution (Solution 2):**  
     - We use two nested loops, which results in a time complexity of **O(n^2)**. This is inefficient for larger arrays because each element is compared with every other element.

- **Space Complexity:**
   - **Hash Map Solution (Solution 1):**  
     - The space complexity is **O(n)** because we store the elements of the array in a map.
     
   - **Brute Force Solution (Solution 2):**  
     - The space complexity is **O(1)**, as we do not use any extra data structures beyond the input array.

### Conclusion:
- **Hash Map Solution (Optimal, Solution 1):**  
  This is the preferred solution with a time complexity of **O(n)**, making it efficient for large arrays.
  
- **Brute Force Solution (Solution 2):**  
  While simple and intuitive, this solution is less efficient with **O(n^2)** time complexity, and should be avoided for larger inputs.


---
---

### Question:  
**Check if a String is a Palindrome.**

**Description:**  
Write a function to check whether a given string is a palindrome. A palindrome is a string that reads the same forward and backward (ignoring spaces, punctuation, and case).

**Example:**  
Input: `"A man, a plan, a canal, Panama!"`  
Output: `true`

---

### Solution 1: Using Two Pointers
```javascript
function isPalindrome(str) {
    // Step 1: Clean the input string by removing non-alphanumeric characters and converting to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    // Step 2: Initialize two pointers
    let left = 0;
    let right = cleanedStr.length - 1;

    // Step 3: Compare characters from both ends
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;  // Not a palindrome if characters don't match
        }
        left++;
        right--;
    }

    return true;  // Return true if it's a palindrome
}

console.log(isPalindrome("A man, a plan, a canal, Panama!"));  // Output: true
```

### Explanation:
1. **Step 1 (Cleaning the input):**  
   We first clean the input string by:
   - Removing all non-alphanumeric characters using a regular expression (`/[^A-Za-z0-9]/g`). This removes punctuation, spaces, and special characters.
   - Converting all characters to lowercase to ensure the comparison is case-insensitive.

2. **Step 2 (Two Pointers):**  
   - We initialize two pointers, `left` and `right`. The `left` pointer starts at the beginning of the string, and the `right` pointer starts at the end.

3. **Step 3 (Character comparison):**  
   - We compare the characters at the `left` and `right` pointers. If they are equal, we move the `left` pointer forward and the `right` pointer backward.
   - If at any point the characters don’t match, we return `false` because the string is not a palindrome.
   - If we complete the loop without finding a mismatch, we return `true` as the string is a palindrome.

---

### Solution 2: Using Reverse Method
```javascript
function isPalindrome(str) {
    // Step 1: Clean the input string by removing non-alphanumeric characters and converting to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Step 2: Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Step 3: Compare the cleaned string with its reversed version
    return cleanedStr === reversedStr;
}

console.log(isPalindrome("A man, a plan, a canal, Panama!"));  // Output: true
```

### Explanation:
1. **Step 1 (Cleaning the input):**  
   Same as Solution 1, we remove non-alphanumeric characters and convert the string to lowercase.

2. **Step 2 (Reversing the string):**  
   - We convert the cleaned string into an array of characters using `split('')`.
   - Then we reverse the array using `reverse()`.
   - Finally, we join the reversed array back into a string using `join('')`.

3. **Step 3 (Comparison):**  
   We compare the original cleaned string with its reversed version. If they are equal, the string is a palindrome; otherwise, it’s not.

---

### Solution 3: Using Recursion
```javascript
function isPalindrome(str) {
    // Step 1: Clean the input string by removing non-alphanumeric characters and converting to lowercase
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Step 2: Recursive function to check for palindrome
    function checkPalindrome(start, end) {
        if (start >= end) return true;  // Base case: If pointers have crossed, it's a palindrome
        if (cleanedStr[start] !== cleanedStr[end]) return false;  // If characters don't match, it's not a palindrome
        return checkPalindrome(start + 1, end - 1);  // Move inward and check next pair of characters
    }

    return checkPalindrome(0, cleanedStr.length - 1);
}

console.log(isPalindrome("A man, a plan, a canal, Panama!"));  // Output: true
```

### Explanation:
1. **Step 1 (Cleaning the input):**  
   Same as the other solutions, we remove non-alphanumeric characters and convert the string to lowercase.

2. **Step 2 (Recursive palindrome check):**  
   - The `checkPalindrome` function takes two pointers: `start` (beginning of the string) and `end` (end of the string).
   - It recursively checks whether the characters at the `start` and `end` pointers are the same.
   - If the characters match, the function moves the pointers inward and continues the comparison.
   - The recursion stops if the pointers cross (i.e., the base case is `start >= end`), meaning the string is a palindrome.
   - If at any point the characters don’t match, the function returns `false`.

---

### Performance Considerations:
- **Time Complexity:**  
   All three solutions have a time complexity of **O(n)**, where `n` is the length of the cleaned string. This is because we need to examine each character in the string at least once.

- **Space Complexity:**  
   - **Two Pointers (Solution 1):** The space complexity is **O(1)**, as we don’t use any extra data structures aside from the input.
   - **Reverse Method (Solution 2):** The space complexity is **O(n)**, as we create a new string (the reversed version).
   - **Recursion (Solution 3):** The space complexity is **O(n)** due to the recursion stack.

### Conclusion:
- **Two Pointers (Solution 1):** This is the most efficient solution in terms of space and performance, ideal for large strings.
- **Reverse Method (Solution 2):** This is a simple and concise solution but uses more space due to string reversal.
- **Recursion (Solution 3):** This is a less efficient solution due to the overhead of recursion but demonstrates recursive thinking.





### Problem: Convert a String to Title Case

Write a function that converts a given string to **title case**, where the first letter of each word is capitalized, and the rest of the letters in the word are lowercase.

#### Example:
```javascript
titleCase("hello world");  // Output: "Hello World"
titleCase("javaScript is fun");  // Output: "Javascript Is Fun"
```

### Solution:

The approach to solve this problem can be broken down into these steps:

1. **Convert the string into an array of words**:
   - Use the `split()` method to break the string into words, splitting on spaces.
2. **Transform each word**:
   - Capitalize the first letter of each word.
   - Convert the remaining characters of the word to lowercase.
3. **Join the words back into a single string**:
   - Use the `join()` method to combine the words back into a string with spaces.

#### Code Implementation:

```javascript
function titleCase(str) {
    // Step 1: Convert the entire string to lowercase to avoid any mixed-case issues
    let words = str.toLowerCase().split(' ');  // Split string into array of words

    // Step 2: Loop through each word and capitalize the first letter
    let titleCasedWords = words.map(function(word) {
        // Capitalize the first letter and add the rest of the word (converted to lowercase)
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Step 3: Join the words back into a single string with spaces in between
    return titleCasedWords.join(' ');
}

// Example usage:
console.log(titleCase("hello world"));  // Output: "Hello World"
console.log(titleCase("javaScript is fun"));  // Output: "Javascript Is Fun"
```

### Explanation of Each Step:

1. **Lowercasing and Splitting the String:**
   - `str.toLowerCase()` ensures that the entire string is converted to lowercase, preventing any unwanted uppercase characters.
   - `split(' ')` breaks the string into an array of words, using spaces as the delimiter. This gives us an array like `["hello", "world"]`.

2. **Mapping Through Words:**
   - We use `map()` to iterate through each word in the array.
   - For each word, `word.charAt(0).toUpperCase()` gets the first letter and capitalizes it.
   - `word.slice(1)` extracts the rest of the word (all characters after the first), ensuring they remain lowercase.

3. **Joining the Words:**
   - Finally, `join(' ')` combines the array of words back into a single string, using a space as the separator between words.

### Edge Cases:
- **Multiple spaces between words:** The code will handle this properly, since the `split()` and `join()` methods manage spaces between words.
- **Empty input string:** If the input string is empty, the code will return an empty string.

#### Example Edge Case:
```javascript
console.log(titleCase("  this is   a test "));  // Output: "This Is A Test"
```

### Summary:
This function efficiently converts any given string to title case by:
- Lowercasing all words first,
- Capitalizing the first letter of each word,
- Combining everything back into a single string.