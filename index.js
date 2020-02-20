function map(src, cb) {
  let r = []

  for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    r.push(cb(theElement))
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