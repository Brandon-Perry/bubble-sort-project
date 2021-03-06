function swap(array, idx1, idx2) {
  let temp = array[idx1];     // save a copy of the first value
  array[idx1] = array[idx2];  // overwrite the first value with the second value
  array[idx2] = temp;         // overwrite the second value with the first value
}

// Use this pseudocode to implement the bubble sort
function bubbleSort(array) {
  // n := length(array)
  // repeat
  //  swapped = false
  //  for i := 1 to n - 1 inclusive do
  //
  //     /* if this pair is out of order */
  //     if A[i - 1] > A[i] then
  //
  //       /* swap them and remember something changed */
  //       swap(A[i - 1], A[i])
  //       swapped := true
  //
  //     end if
  //   end for
  // until not swapped

  let length = array.length;
  let swapped = false;
  while (swapped === false) {
    swapped = true
    

    for (let i = 0; i <= length-1; i++) {
      let current = array[i]
      let next = array[i+1]

      if (current > next) {
        swap(array, i, i+1)
        swapped = false;
      }
    }
  }

}


module.exports = {
  bubbleSort,
  swap
};
