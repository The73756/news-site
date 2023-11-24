export const getFormattedDateTime = (milliseconds: number) => {
  const date = new Date(milliseconds)
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }
  return date.toLocaleString(undefined, options)
}
