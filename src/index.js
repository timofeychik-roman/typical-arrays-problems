
exports.min = function min (array) {
  let minimum = array[0];
  for (let i = 0; i < array.length; i++){
    if (array[i] < minimum)
      minimum = array[i];
  }
  return minimum;
}

exports.max = function max (array) {
  let maximum = array[0];
  for (let i = 0; i < array.length; i++){
    if (array[i] > minimum)
      maximum = array[i];
  }
  return maximum;
}

exports.avg = function avg (array) {
  let average = 0;
  for (let i = 0; i < array.length; i++)
    average += array[i];
  average = average / array.length;
  return average;
}
