/**
 * @param {number[]} nums
 * @return {number}
 */

const pivotIndex = (nums) => {
  let decrease = nums.reduce((acc, curr) => (acc + curr), 0);
  let increase = 0;

  for (let i = 0; i < nums.length; i++) {
    decrease -= nums[i];
    if (increase === decrease) return i;
    increase += nums[i];
  }

  return -1;
};

export default pivotIndex;
