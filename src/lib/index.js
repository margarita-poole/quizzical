export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

export function parseQuotes(string) {
  let str = string
  str = str.replaceAll('&quot;', '"')
  str = str.replaceAll('&ldquo;', '"')
  str = str.replaceAll('&rdquo;', '"')
  str = str.replaceAll('&#039;', "'")
  str = str.replaceAll('&iacute;', 'í')
  str = str.replaceAll('&amp;', '&')
  str = str.replaceAll('&ouml;', 'Ö')
  str = str.replaceAll('&aring;', 'Å')
  str = str.replaceAll('&auml;', 'Á')
  return str
}