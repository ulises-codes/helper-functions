export default function removeDuplicateChars(str: string) {
  return str
    .split('')
    .filter((char, i, self) => {
      return self.indexOf(char) == i;
    })
    .join('');
}
