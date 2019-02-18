function isPalindrome(str) {
   // return true/false if the given string parameter is a palindrome one
   let arr = str.split("");
   arr = arr.reverse();
   arr = arr.join("");

   return str === arr;
}

function getTheSecondLargest(arr) {
   // return the second largest number in the given array
   if (arr.length < 2) {
      return "Array is too short!";
   }

   let tempArr = arr.sort();

   return tempArr[tempArr.length - 2];
}

function isLeapYearWithIfElse(year) {
   // return true/false if the given year parameter is a leap year

   return year % 4 === 0;
}

function isLeapYearWithSwitch(year) {
   // return true/false if the given year parameter is a leap year
   // Use switch statement
   let isLeapYear = false;

   switch (year % 4) {
      case 0:
         isLeapYear = true;
         break;
      default:
         isLeapYear = false;
         break;
   }

   return isLeapYear;
}
