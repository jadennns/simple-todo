export function SensorEmail(email: string) {
  let replaced = "";
  const splitted = email.split("@");
  for (let i = 0; i < splitted[0].length; i++) {
    replaced = replaced + "*";
  }
  return replaced + `@${splitted[1]}`;
}
