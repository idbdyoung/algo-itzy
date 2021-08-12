/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
const findRotation = (mat, target) => {
  const rotateMatches = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
  };

  for (let height = 0; height < mat.length; height++) {
      for (let width = 0; width < mat[height].length; width++) {
          let tmpHeight = height;
          let tmpWidth = width;

          Object.keys(rotateMatches).forEach((key) => {
              const targetHeight = tmpWidth;
              const targetWidth = mat.length - (tmpHeight + 1);

              if (mat[height][width] === target[targetHeight][targetWidth]) {
                  rotateMatches[key] += 1;
              }
              tmpHeight = targetHeight;
              tmpWidth = targetWidth;
          });
      }
  }

  return Object.values(rotateMatches).includes(mat.length * mat.length);
};

export default findRotation;
