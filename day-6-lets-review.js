function processData(input) {
  //Enter your code here
  let myWords = input.split("\n"); // splits into array [[# of strings],["Hacker"],["Rank"]]
  let evenChar = ""; // initialize even string
  let oddChar = ""; // initialize odd string

  for (let i = 1; i < myWords.length; i++) { // loop through the array values, starting with 1 since 0 is T, which represents number of test cases
    for (let j = 0; j < myWords[i].length; j++) { // loop through word
      if (j % 2 === 0) { // if  even then add character to evenChar
        evenChar += myWords[i][j];
      } else { // if not even (if odd), add to oddChar
        oddChar += myWords[i][j];
      }
    }
    console.log(evenChar + " " + oddChar); // print evenChar, a space, then oddChar
    evenChar = ""; // reset evenChar for next loop run through
    oddChar = ""; // reset oddChar for next loop run through
  }
}