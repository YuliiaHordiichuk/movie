export function getFormattedDate(date: Date) {
  const releaseYear = date.getFullYear();

  return `${date.getDay()}/${date.getMonth()}/${releaseYear}`;
}
