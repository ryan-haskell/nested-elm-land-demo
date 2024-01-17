import express from 'express'

const port = process.env.PORT || 3001

const app = express()

app.get('/api', (req, res) =>
  res.json({
    message: 'Hello, backend!'
  })
)

app.listen(port, () =>
  console.log(`🚀 Ready at http://localhost:${port}/api`)
)

