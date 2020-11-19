
const API_BASE = 'http://localhost:43000/api'

const searchLot = (query) => {
  const params = new URLSearchParams({ query })
  return fetch(`${API_BASE}/search?${params}`)
    .then(response => response.json())
    .then(data => data)
}

const getLot = (lotCode) => {
  return fetch(`${API_BASE}/lots/${lotCode}`)
    .then(response => response.json())
    .then(data => data)
}

const getBreakdown = (lotCode, breakdownType) => {
  return fetch(`${API_BASE}/breakdown/${breakdownType}/${lotCode}`)
    .then(response => response.json())
    .then(data => data)
}

export {
  searchLot,
  getLot,
  getBreakdown
}