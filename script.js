// 1.
function cauMot(arr1, arr2) {
  let arr = arr1.map((value, i) => {
    return [value, arr2[i]];
  });
  return arr;
}

let arr1 = [1, 2, 3],
  arr2 = [4, 5, 6];
console.log(cauMot(arr1, arr2));

// 2.
function cauHai(arr3, arr4) {
  let arr = [];
  if (arr3.length > arr4.length) {
    arr = arr4.map((value, i) => {
      return [arr3[i], value];
    });
  } else {
    arr = arr3.map((value, i) => {
      return [value, arr4[i]];
    });
  }
  return arr;
}
let arr3 = [1, 2, 3, 7],
  arr4 = [4, 5];
console.log(cauHai(arr3, arr4));

// 3.
function cauBa(arr5, arr6, arr7, arr8) {
  let newArr = [];
  let arr = arr5.map((value, i) => {
    return [value, arr6[i], arr7[i], arr8[i]];
  });

  for (let i = 0; i < arr.length; i++) {
    let a = arr[i];
    a.includes(undefined) ? [] : newArr.push(a);
  }
  console.log(newArr);
}

let arr5 = [1, 2],
  arr6 = [3, 4],
  arr7 = [5, 6, 7];
arr8 = [8, 9];
cauBa(arr5, arr6, arr7, arr8);
