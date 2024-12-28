const partition = (items, left, right) => {
  const pivot = items[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [items[i], items[j]] = [items[j], items[i]];
      i++;
      j--;
    }
  }
  return i;
};

const quick = (items, left = 0, right = items.length - 1) => {
  if (items.length > 1) {
    const index = partition(items, left, right);
    if (left < index - 1) {
      quick(items, left, index - 1);
    }
    if (index < right) {
      quick(items, index, right);
    }
  }
  return items;
};

export default (items) => quick([...items]);
