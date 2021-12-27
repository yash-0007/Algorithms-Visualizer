export async function* PancakeSort(array, swap, highlight, marksort) {
  let maxdex;
  let n = array.length;

  while (n > 1) {
    let index = 0;
    for (let i = 0; i < n; i++) {
      if (array[i] > array[index]) {
        index = i;
      }
    }
    maxdex = index;
    if (maxdex != n) {
      let left = 0;
      let k = maxdex;
      while (left < k) {
        yield await highlight([left, k]);
        yield await swap(left, k);
        k--;
        left++;
      }
      marksort(n - 1);
      yield;
      left = 0;
      k = n - 1;
      while (left < k) {
        yield await highlight([left, k]);
        yield await swap(left, k);
        k--;
        left++;
      }
    }
    n--;
  }
  marksort(0);
  yield;
}
