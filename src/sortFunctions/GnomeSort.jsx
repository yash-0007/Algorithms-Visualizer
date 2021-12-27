export async function* GnomeSort(array, swap, highlight, marksort) {
  let index = 0;
  let n = array.length;

  if (n === 1) {
    marksort(0);
    yield;
    return;
  }

  while (index < n) {
    if (index === 0) index++;
    if (array[index] >= array[index - 1]) {
      yield await highlight([index - 1, index]);
      index++;
    } else {
      yield await highlight([index - 1, index]);
      yield await swap(index - 1, index);
      index--;
    }
  }

  for (let i = 0; i < n; i++) {
    marksort(i);
    yield;
  }
}
