function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];

  const dict: any = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };

  var result: string[] = [];

  // degitsの文字列を1文字ずつ処理
  for (var i = 0; i < digits.length; i++) {
    const tempList = [];
    const targetStrs: string[] = dict[digits[i]];

    // 1文字目の場合、対象の文字列をそのままresultに代入
    if (!result.length) {
      result = targetStrs;
      continue;
    }

    for (const r of result) {
      for (const str of targetStrs) {
        tempList.push(r + str);
      }
    }
    result = tempList;
  }

  return result;
}

// Test Cases
console.log(letterCombinations("23"));
console.log(letterCombinations(""));
console.log(letterCombinations("239"));
