function sumNumbers(nums) {
  let sum = 0;
  nums.forEach(num => {
    if (typeof num !== 'number') {
      throw new Error('All elements in the array must be numbers');
    }
    sum += num;
  });
  return sum;
}

console.log(sumNumbers([1, 2, 3, 4, 5])); // Output: 15
