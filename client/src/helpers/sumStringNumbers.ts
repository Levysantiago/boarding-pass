export function sumStringNumbers({
  a,
  b,
  fixed,
}: {
  a: string;
  b: string;
  fixed?: number;
}): string {
  const result = parseFloat(a) + parseFloat(b);
  return result.toFixed(fixed);
}
