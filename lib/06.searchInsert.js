const searchInsert = (nums, target) => {
  const loop = (start, end) => {
      const mid = Math.floor((start + end) / 2);

      if (start === mid) {
        return target > nums[start] ? start + 1 : start;
      }

      if (nums[mid] === target) return mid;

      if (nums[mid] > target) {
          return loop(start, mid);
      } else {
          return loop(mid, end);
      }
  };

  return loop(0, nums.length);
};

export default searchInsert;
