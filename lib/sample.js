/*
 *
 * Generate all permutations of a given array
 *
 * < Examples >
 *
 * getPermutations(["a", "b", "c"])
 * result : [["a", "b", "c"], ["a", "c", "b"], ["b", "a", "c"], ["b", "c", "a"], ["c", "a", "b"], ["c", "b", "a"]];
 *
 */


export default function getPermutation (arr) {
  const permutation = [];

  const loop = (orgArr, set) => {
    for (let i = 0; i < orgArr.length; i++) {
      const newSet = Array.from(set);
      const copiedArr = Array.from(orgArr);
      const el = copiedArr.splice(i, 1);
      newSet.push(el[0]);

      if (newSet.length === arr.length) return permutation.push(newSet);
      loop(copiedArr, newSet);
    }
  };
  loop(arr, []);

  return permutation;
}
