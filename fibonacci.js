function fibonnaci(n) {
  let arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

function fibonnaciRecursive(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonnaciRecursive(n - 2) + fibonnaci(n - 1);
  }
}
