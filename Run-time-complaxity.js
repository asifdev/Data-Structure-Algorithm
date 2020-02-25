/*
 * Big O notation
 * O(1) => Constant time
 * O(n) => Linear time
 * O(n^2) => Quaratic time
 */

//O(n)
const sumUpToLong = n => {
  let total = 0; // Space complaxity O(1)
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
//O(3) ~ O(1)
const sumUpToShort = n => {
  return (n * (n + 1)) / 2;
};

//console.log(sumUpToLong(3));
//console.log(sumUpToShort(3));

//O(2n) ~ O(n)
const shoutOne = n => {
  // Space complaxity O(1)
  for (let i = 1; i <= n; i++) {
    console.log("Shouting One!");
  }

  // Space complaxity O(1)
  for (let j = 1; j <= n; j++) {
    console.log("Shouting One!");
  }
};

//O(4) ~ O(1)
const shoutTwo = n => {
  for (let i = 1; i <= 4; i++) {
    console.log("Shouting Two!");
  }
};

// shoutOne(3);
// shoutTwo(1000);

//O(n^2)
function shoutWordPairOne(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i] + " " + array[j]);
    }
  }
}

//O(n*m)
function shoutWordPairTwo(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(arr1[i] + " " + arr2[j]);
    }
  }
}

// shoutWordPairOne(["a", "b", "c"]);
// shoutWordPairTwo(["a", "b", "c"], ["x", "y"]);

const reverseString = string => {
  let reverse = ""; // Space Complexity O(n)
  for (let i = 0; i < string.length; i++) {
    reverse = string[i] + reverse;
  }
  console.log(reverse);
};

reverseString("apple");

/*
 * O(log n)
 * If the input/N is doubled then we have to do one more operation OR
 * For every operation we can eliminate half of the inputs
 */
