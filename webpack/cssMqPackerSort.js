function compare(a, b) {
  if (a === b) {
    return 0
  }
  return a < b ? -1 : 1
}

function compareRev(a, b) {
  return -1 * compare(a, b)
}

function isMin(query) {
  return /min-width/g.test(query)
}

function isMax(query) {
  return /max-width/g.test(query)
}

function isSpan(query) {
  return isMin(query) && isMax(query)
}

function getSize(query) {
  const match = query.match(/\d+/g)
  if (match === null) {
    return null
  }
  return parseInt(match[0], 10)
}

function cssMqPackerSort(a, b) {
  const aSize = getSize(a)
  const bSize = getSize(b)

  if (aSize === null && bSize !== null) {
    return 1
  }
  if (aSize !== null && bSize === null) {
    return -1
  }
  if (isSpan(a) && isSpan(b)) {
    return compare(aSize, bSize)
  }
  if (isSpan(a) && !isSpan(b)) {
    return 1
  }
  if (!isSpan(a) && isSpan(b)) {
    return -1
  }
  if (isMin(a) && isMin(b)) {
    return compare(aSize, bSize)
  }
  if (isMax(a) && isMax(b)) {
    return compareRev(aSize, bSize)
  }
  if (isMin(a) && isMax(b)) {
    return 1
  }
  return -1
}

module.exports = cssMqPackerSort
