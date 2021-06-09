export function isObjectEmpty(obj) {
  // because Object.keys(new Date()).length === 0;
  // we have to do some additional checks
  return (
    obj && // null and undefined check
    Object.keys(obj).length === 0 &&
    obj.constructor === Object
  );
}

export function sortKeywords(cards) {
  const keywordCounts = {};
  cards.forEach((card) => {
    keywordCounts[card.keyword] = keywordCounts[card.keyword]
      ? keywordCounts[card.keyword] + 1
      : 1;
  });
  let keywordsSorted = Object.keys(keywordCounts).sort(
    (a, b) => keywordCounts[b] - keywordCounts[a]
  );
  keywordsSorted = keywordsSorted.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  return keywordsSorted;
}

export function buildKeywordString(cards) {
  const keywords = sortKeywords(cards);
  let keywordString;
  if (keywords.length === 1) {
    [keywordString] = keywords;
  } else if (keywords.length === 2) {
    keywordString = `${keywords[0]} and ${keywords[1]}`;
  } else if (keywords.length === 3) {
    keywordString = `${keywords[0]}, ${keywords[1]}, and ${keywords[2]}`;
  } else {
    keywordString = `${keywords[0]}, ${keywords[1]}, and ${
      keywords.length - 2
    } other${keywords.length - 2 === 1 ? '' : 's'}`;
  }
  return keywordString;
}
