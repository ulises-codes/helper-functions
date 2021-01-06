const parseDigits = (num: string) => {
  const digits = num.split('').filter(char => char.match(/\d/));

  return digits;
};

export function reformatTel(num: string): string {
  const digits = parseDigits(num);

  if (digits.length !== 10) return num;

  const formattedNumber = `(${digits.slice(0, 3).join('')}) ${digits
    .slice(3, 6)
    .join('')}-${digits.slice(6, 10).join('')}`;

  return formattedNumber;
}

export function reformatOnBlur(
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  e.target.value = reformatTel(e.target.value);
}

export function formatTelHref(num: string): string {
  const digits = parseDigits(num);

  if (digits.length !== 10) return num;

  const href = `tel:+1-${digits
    .map((digit, i) => (i === 2 || i === 5 ? digit + '-' : digit))
    .join('')}`;

  return href;
}
