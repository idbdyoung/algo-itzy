function solution(lottos, win_nums) {
  let matched = 0;
  let countJoker = 0;
  const rankingList = {
      6: 1,
      5: 2,
      4: 3,
      3: 4,
      2: 5,
  };

  const getRanking = (matchedNum) => {
      if (rankingList.hasOwnProperty(matchedNum)) {
          return rankingList[matchedNum];
      } else {
          return 6;
      }
  };

  for (let i = 0; i < lottos.length; i++) {
      if (!lottos[i]) {
          countJoker++;
          continue;
      }

      for (let j = 0; j < win_nums.length; j++) {
          if (lottos[i] === win_nums[j]) {
              matched++;
              win_nums.splice(j, 1);
              break;
          }
      }
  }

  return [getRanking(matched + countJoker), getRanking(matched)];
};

export default solution;
