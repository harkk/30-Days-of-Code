function main() {
  let arr = [];
  for (let arr_i = 0; arr_i < 6; arr_i++) {
    arr[arr_i] = readLine().split(' ');
    arr[arr_i] = arr[arr_i].map(Number);
  }

  let totalSum = -63; // lowest possible total
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0, curSum = 0; j < arr[i].length - 2; j++) { //i=0; j=0     i=0; j=1    i=0; j=2    i=0; j=3
      curSum = arr[i][j] + //arr[0][0]    arr[0][1]   arr[0][2]   arr[0][3]
        arr[i][j + 1] + //arr[0][1]    arr[0][2]   arr[0][3]   arr[0][4]
        arr[i][j + 2] + //arr[0][2]    arr[0][3]   arr[0][4]   arr[0][5]
        arr[i + 1][j + 1] + //arr[1][1]    arr[1][2]   arr[1][3]   arr[1][4]
        arr[i + 2][j] + //arr[2][0]    arr[2][1]   arr[2][2]   arr[2][3]
        arr[i + 2][j + 1] + //arr[2][1]    arr[2][2]   arr[2][3]   arr[2][4]
        arr[i + 2][j + 2]; //arr[2][2]    arr[2][3]   arr[2][4]   arr[2][5]
      if (curSum > totalSum) {
        totalSum = curSum;
      }
    }
  }
  console.log(totalSum);
}