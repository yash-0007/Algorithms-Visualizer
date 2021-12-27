export async function* CocktailSort(array, swap, highlight, marksort) {
  let swapped = true;
  let start = 0;
  let end = array.length - 1;
  let cnt = 0;

  while (1) {
    swapped = false;
    for (let i = start; i < end; i++) {
      yield await highlight([i, i + 1]);
      if (array[i] > array[i + 1]) {
        yield await swap(i, i + 1);
        swapped = true;
      }
    }
    marksort(end);
    yield;
    cnt++;
    if (cnt === array.length) break;
    swapped = false;
    --end;
    for (let i = end - 1; i >= start; --i) {
      yield await highlight([i, i + 1]);
      if (array[i] > array[i + 1]) {
        yield await swap(i, i + 1);
        swapped = true;
      }
    }
    marksort(start);
    yield;
    cnt++;
    if (cnt === array.length) break;
    ++start;
  }
}
