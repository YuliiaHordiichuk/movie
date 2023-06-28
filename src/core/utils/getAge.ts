export function getAge(birthdate: Date) {
  const year = birthdate.getFullYear();
  const month = birthdate.getMonth();
  const day = birthdate.getDate();

  const birth = new Date(year, month - 1, day);
  const now = new Date();
  const diff = new Date(now.valueOf() - birth.valueOf());

  return Math.abs(diff.getFullYear() - 1970);
}
