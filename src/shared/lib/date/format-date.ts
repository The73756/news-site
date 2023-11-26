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

export const getFormattedDate = (milliseconds: number) => {
  const date = new Date(milliseconds)
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  }

  return date.toLocaleString(undefined, options)
}
