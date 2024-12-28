const _merge = (left, right) => {
  const result = [];

  let rightIndex = 0;
  let leftIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const merge = (input) => {
  const items = [...input];
  if (items.length < 2) {
    return items;
  }
  const middle = items.length / 2;
  const left = items.slice(0, middle);
  const right = items.slice(middle, items.length);

  return _merge(merge(left), merge(right));
};

export default merge;
