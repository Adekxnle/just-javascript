function bubbleSort(originalArray) {
  let swapped = false;

  const array = [...originalArray];

  for (let i = 0; i < array.length; i++) {
    // set swapped back to false on every iteration
    swapped = false;

    console.log(array);

    // this loop is responsible for swapping the positions of array elements
    for (let j = 0; j < array.length; j++) {
      // compare array elements
      if (array[j + 1] < array[j]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        swapped = true;
      }
    }

    if (!swapped) {
      return array;
    }
  }

  return array;
}
