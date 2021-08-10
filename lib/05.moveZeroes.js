const moveZeroes = (nums) => {
  let pointer = 0;
  let countZero = 0;

  while (nums.length > pointer) {
    if (nums[pointer] === 0) {
      if (nums.length === pointer + countZero) break;
      const deletedZero = nums.splice(pointer, 1);
      nums.push(deletedZero[0]);
      countZero += 1;
    } else {
      pointer += 1;
    }
  }
  nums.push()

  return nums;
};

export default moveZeroes;
