import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from Node.js backend modifé !' })
})

app.use(express.static(path.join(__dirname, '../public')))

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`)
})
