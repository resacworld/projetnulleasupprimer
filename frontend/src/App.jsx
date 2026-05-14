import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/hello')
      .then(r => r.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('Backend non accessible'))
  }, [])

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>React + Node.js</h1>
      <p>{message || 'Chargement...'}</p>
    </div>
  )
}

export default App
