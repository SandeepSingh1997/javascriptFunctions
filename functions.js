class myArray {
  constructor(arr) {
    this.arr = arr;
  }

  map(func) {
    let newArray = [];
    for (let i = 0; i < this.arr.length; i++) {
      let arg = this.arr[i];
      newArray.push(func(arg));
    }
    return newArray;
  }

  filter(func) {
    let newArray = [];
    for (let i = 0; i < this.arr.length; i++) {
      let arg = this.arr[i];
      if (func(arg)) {
        newArray.push(arg);
      }
    }
    return newArray;
  }

  forEach(func) {
    for (let i = 0; i < this.arr.length; i++) {
      func(this.arr[i]);
    }
  }
}

//////////////////////////Map function Test Run

console.log("Map function");

function getDouble(arg) {
  return arg * 2;
}

let variable = new myArray([1, 2, 3, 4]);
let newMapArr = variable.map(getDouble);

newMapArr.forEach((ele) => {
  console.log(ele);
});

//////////////////////////Filter function Test Run

console.log("Filter function");

function isGrtThanTwo(arg) {
  return arg > 2 ? true : false;
}

let newFilterArr = variable.filter(isGrtThanTwo);

newFilterArr.forEach((ele) => {
  console.log(ele);
});

//////////////////////////forEach function Test Run

console.log("forEach function");

let test = [];
function increment(arg) {
  test.push(arg * 5);
}

let testVariable = new myArray([1, 2, 4, 5]);
testVariable.forEach(increment);

test.forEach((ele) => {
  console.log(ele);
});

//////////////////////////reduce function Test Run
