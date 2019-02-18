function isPalindrome(str) {
   var reversedArrayOfstr = str.split("").reverse().join("");
   if(reversedArrayOfstr === str) return true;
     return false;
    // return true/false if the given string parameter is a palindrome one
}
console.log(isPalindrome("eye"));

function getTheSecondLargest(arr) {
   var sortedArr = arr.sort((a, b) => b - a);
   return sortedArr[1]
          // return the second largest number in the given array
}

const array = [97, 90, 2, 23, 1, 10] 
console.log(getTheSecondLargest(array));


function isLeapYearWithIfElse(year) {
   if(year % 4 === 0) return true;
   else if(year % 100 === 0) return false;
   else if(year % 400 === 0) return true;
   else return false;
   // return true/false if the given year parameter is a leap year
}

console.log(isLeapYearWithIfElse(100));

function isLeapYearWithSwitch(year) {
   let leapYear = false;
   switch(year % 4){
      case 0:
         leapYear = true;
         break;
      default:
         leapYear = false;
         break;
   }  
   return leapYear
    // return true/false if the given year parameter is a leap year
   // Use switch statement
}

console.log(isLeapYearWithSwitch(1998));

