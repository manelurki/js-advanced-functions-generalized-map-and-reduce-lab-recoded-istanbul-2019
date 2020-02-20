function map(arr, fn) {
  let r = []

  for (let i = 0; i < arr.length; i++) {
    let theElement = arr[i]
    r.push(fn(theElement))
  }

  return r;
}
function reduce(arr, fn, startingPoint) {
    let val = arr[0];
    let start = 1;
    if (startingPoint !== undefined) {
        val = startingPoint;
        start = 0;
    }
    for (let i = start; i < arr.length; i++) {
        val = fn(val, arr[i]);
    }
    return val;
}