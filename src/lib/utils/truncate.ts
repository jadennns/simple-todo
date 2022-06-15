export function truncateString(value: string, num: number) {
  if (value.length > num) {
    return value.slice(0, num) + "...";
  } else {
    return value;
  }
}
