function combination (N, K) {
  const result = [];

  const loop = (arr, partial) => {
    for (let i = 0; i < arr.length; i++) {
      const copiedArr = Array.from(arr);
      const copiedPartial = Array.from(partial);
      const shiftedEl = copiedArr.splice(i, 1)[0];

      if (copiedPartial.length === 0) {
        copiedPartial.push(shiftedEl);
      } else {
        if (copiedPartial[copiedPartial.length - 1] < shiftedEl) {
            copiedPartial.push(shiftedEl);
        } else {
            continue;
        }
      }

      if (copiedPartial.length === K) result.push(copiedPartial);
      loop(copiedArr, copiedPartial);
    }
  };
  loop(N, []);

  return result;
}

const solution = (needs, r) => {
  const recipeList = [];

  for (let goods = 0; goods < needs.length; goods++) {
    for (let ingredient = 0; ingredient < needs[goods].length; ingredient++) {
      if (needs[goods][ingredient] === 1) {
        if (!recipeList[goods]) {
          recipeList[goods] = [ingredient];
        } else {
          recipeList[goods].push(ingredient);
        }
      }
    }
  }
  const ingredientList = [];

  for (let i = 0; i < needs[0].length; i++) {
    ingredientList.push(i);
  }
  const combinationList = combination(ingredientList, r);
  let isBestChoice = 0;

  combinationList.forEach((combination) => {
    let countPossibleMake = 0;

    for (let i = 0; i < recipeList.length; i++) {
      let count = 0;

      for (let j = 0; j < combination.length; j++) {
        if (recipeList[i].includes(combination[j])) {
          count++;
        }
      }

      if (count === recipeList[i].length) {
        countPossibleMake++;
      }
    }

    if (isBestChoice < countPossibleMake) {
      isBestChoice = countPossibleMake;
    }
  });

  return isBestChoice;
};

export default solution;
