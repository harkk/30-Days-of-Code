function main() {
  const n = parseInt(readLine(), 10);
  const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
  let newArr = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr += arr[i] + " ";
  }
  console.log(newArr);
} 