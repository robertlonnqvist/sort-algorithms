export default function(items: readonly number[]): number[] {
  const arr = [...items];
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
      }
    }
  }
  return arr;
}
