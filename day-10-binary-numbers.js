function main() {
  var n = parseInt(readLine());
  var count = 0;
  var binArr = n.toString(2).split('0'); // to give an array of 1s
  var max = Math.max(...binArr); // returns string eg. 11
  console.log(max.toString().length); // return length of array ie. # of 1's
}
