var findPeakElement = function(nums) {
  let peak = 0;

  for (let i = 1; i < nums.length; i++) {
      if (nums[peak] < nums[i]) {
          peak = i;
      }
  }

  return peak;
};

export default findPeakElement;
