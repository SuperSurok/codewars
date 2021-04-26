function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 === null || a2 === null) return false;
  return a1.map(num => num ** 2).sort().toString() === a2.sort().toString();
}
