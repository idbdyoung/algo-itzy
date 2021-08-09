const moveZeroes = (nums) => {
  let pointer = 0;

  while (nums.length > pointer) {
      if (nums[pointer] === 0) {
          const removedZero = nums.splice(pointer, 1);
          nums.push(removedZero[0]);
      } else {
          pointer += 1;
      }
  }

  return nums;
};

export default moveZeroes;
