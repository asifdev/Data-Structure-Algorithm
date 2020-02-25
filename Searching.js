const inventory = ["backpack", "pen", "paper"];

// console.log(inventory.includes("pen"));
// console.log(inventory.indexOf("pen"));
// console.log(inventory.find(a => a === "pen"));

//Linear Search
const includes = (inputArray, value) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === value) {
      return true;
    }
  }
};

// console.log(includes(inventory, "pen"));

const indexOf = (inputArray, value) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === value) {
      return 1;
    }
  }
  return -1;
};

// console.log(indexOf(inventory, "pen2"));

const find = (inputArray, value) => {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === value) {
      return 1;
    }
  }
  return -1;
};

// console.log(indexOf(find, "pen2"));

//Binary search
const input = [10, 22, 33, 40, 60, 74, 88];

const binarySearch = (array, val) => {
  let lp = 0;
  let up = array.length - 1;

  // for (let i = 0; i < array.length; i++) {
  while (lp <= up) {
    let middle = Math.floor((lp + up) / 2);
    console.log(middle);
    if (array[middle] === val) {
      return true;
    } else if (array[middle] < val) {
      lp = middle + 1;
    } else {
      up = middle - 1;
    }
  }
  // }
  return false;
};

console.log(binarySearch(input, 10));
