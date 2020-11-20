
const port = process.env.REACT_APP_API_PORT || 43000
const API_BASE = `http://localhost:${port}/api`

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