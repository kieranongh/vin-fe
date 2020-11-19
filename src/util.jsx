import React from 'react'

export const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const formatVolume = (vol) => {
  return `${formatNumber(vol)} L`
}

export const highlightQuery = (query, strToMatch, className) => {
  return findMatches([], query, strToMatch, 0, className)
}

export const findMatches = (arr, query, strToMatch, index, className) => {
  if (!strToMatch) {
    return arr
  }
  const matchIndex = strToMatch.indexOf(query, index)
  
  if (matchIndex === -1) {
    arr.push(strToMatch.substring(index))
    return arr
  }
  
  arr.push(strToMatch.substring(index, matchIndex))
  arr.push(<span className={className}>{query}</span>)

  const next = matchIndex + query.length
  if (next > strToMatch.length - 1) {
    return arr
  }
  return findMatches(arr, query, strToMatch, next)
}