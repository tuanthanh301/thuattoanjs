function sum(a, b) {
  return a + b;
}
console.log("Tổng 2 số : ", sum(5, 6));
function lengthStr(str) {
  return str.length;
}
console.log(lengthStr("Nguyễn Tuấn Thành"));
function square(n) {
  return n * n;
}
console.log("Bình phương: ", square(11));
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      arr[i] = max;
    }
  }
  return max;
}
console.log("Số lớn nhất trong mảng: ", findMax([44, 22, 11, 33]));
function shortestStr(arrStr) {
  let shortest = arrStr[0].length;
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i].length < shortest) {
      shortest = arrStr[i].length;
    }
  }
  return shortest;
}
console.log(
  "Chuỗi ngắn nhất trong mảng: ",
  shortestStr(["abc", "tuilathanh", "tuanthanhk428"])
);
function ascendingList(arrList) {
  // var arr = arrList.sort((a,b) => a - b);
  // console.log(arr);
  let temp;
  for (let i = 0; i < arrList.length - 1; i++) {
    for (let j = i + 1; j < arrList.length; j++) {
      if (arrList[i] > arrList[j]) {
        temp = arrList[i];
        arrList[i] = arrList[j];
        arrList[j] = temp;
      }
    }
  }
  return arrList;
}
console.log("Sắp xế mảng tăng dần: ", ascendingList([55, 34, 21, 39, 44, 11]));
function alphabetSort(arrList) {
  // var arr = arrList.sort((a,b) => a - b);
  // console.log(arr);
  let temp;
  for (let i = 0; i < arrList.length - 1; i++) {
    for (let j = i + 1; j < arrList.length; j++) {
      if (arrList[i] > arrList[j]) {
        temp = arrList[i];
        arrList[i] = arrList[j];
        arrList[j] = temp;
      }
    }
  }
  return arrList;
}
console.log(
  "Sắp xếp theo bảng chữ cái: ",
  alphabetSort(["banana", "apple", "orange", "grape"])
);
function medianNumber(arr) {
    let median;
    arr.sort((a,b) => a - b);
    if (arr.length % 2 == 0){
        median = (arr[arr.length/2 -1] + arr[arr.length/2])/2;
        return median;
    } else {
        median = arr[Math.floor(arr.length/2)];
        return median;

    }
}
console.log("Median: ",medianNumber([3,2,1,4,5]));
function numberWord(str) {
  var count = 1;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      count += 1;
    }
  }
  return count;
}
console.log("Số từ trong chuỗi: ", numberWord("Nguyễn Tuấn Thành"));
function countA(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "a") {
      count += 1;
    }
  }
  return count;
}
console.log("Số chữ a: ", countA("tuanthanhabc123abae"));
