export default function hexToRGBA(h: string, a: number): string {
  if (h.length !== 7) return '';

  const r = '0x' + h[1] + h[2];
  const g = '0x' + h[3] + h[4];
  const b = '0x' + h[5] + h[6];
  return `rgba(${+r},${+g},${+b},${a})`;
}
