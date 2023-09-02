function bubblesortOnce(a) {
  // TODO
  let temp;
  const inner = [...a];
  for (let i = 0; i < inner.length - 1; i += 1) {
    if (inner[i] > inner[i + 1]) {
      temp = inner[i];
      inner[i] = inner[i + 1];
      inner[i + 1] = temp;
    }
  }
  return inner;
}
