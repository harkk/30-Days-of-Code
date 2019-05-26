function processData(input) {
  //Enter your code here
  input = input.split("\n");
  let n = parseInt(input[0]); // number of entries
  let phoneBook = [];

  // add entries to the phone book.
  for (let i = 0; i < n; i++) {
    var newInput = input[i + 1];
    newInput = newInput.split(" ");
    phoneBook[newInput[0]] = newInput[1];
  }

  // check if in phone book.
  for (let i = n + 1; i < input.length; i++) {
    var num = phoneBook[input[i]];
    if (num !== undefined) {
      console.log(input[i] + '=' + num);
    } else {
      console.log('Not found');
    }
  }
} 
