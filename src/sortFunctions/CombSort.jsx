export async function* CombSort(array, swap, highlight, marksort) {
  let length = array.length;
  let shrink = 1.3;
  let gap = length;
  let sorted = false;

  while (!sorted) {
    gap = parseInt(gap / shrink);
    if (gap <= 1) {
      sorted = true;
      gap = 1;
    }

    for (let i = 0; i < length - gap; i++) {
      let sm = gap + i;
      yield await highlight([i, sm]);
      if (array[i] > array[sm]) {
        yield await swap(i, sm);
        sorted = false;
      }
    }
  }

  for (let i = 0; i < length; i++) {
    marksort(i);
    yield;
  }
}
