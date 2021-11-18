// Task 1 - add next numbers to the 3, 4, 5, 6
const nums = [1, 2];
// write code just down below
nums.push(3);
nums.push(4);
nums.push(5);
nums.push(6);
// Task 2 - add new user Dmytro and his age is 18
const users = [
  {
    name: "Borys",
    age: 101
  }
];
// write code just down below
users.push({
  name: "Dmytro",
  age: 18
});

// Task 3 - remove first 2 elements
const extraFirstNums = [101, 100, 1, 2, 3, 4];
// write code just down below
extraFirstNums.shift();
extraFirstNums.shift();
// Task 4 - remove last 2 elements
const extraLastNums = [1, 2, 3, 4, 100, 101];
// write code just down below
extraLastNums.pop();
extraLastNums.pop();
// Task 5- add 2 nums 0 and 1 at the start of array
const extraFirstElements = [2, 3, 4];
// write code just down below
extraFirstElements.unshift(1);
extraFirstElements.unshift(0);

// Task 6 - swap elements, that have indexes 0 and 3
const sortedArray = [4, 2, 3, 1];
// write code just down below
function swap(arr) {
  // change places of array elements
  [arr[0], arr[3]] = [arr[3], arr[0]];
}
swap(sortedArray, 1, 2, 3, 4);

export {
  nums,
  users,
  extraFirstNums,
  extraLastNums,
  extraFirstElements,
  sortedArray
};
