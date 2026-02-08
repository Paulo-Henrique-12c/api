import express from 'express'

const app = express()
const PORT = 3333

app.use(express.json())

app.get('/', (request, response) => {
  return response.json({
    message: "Olá Mundo. Estou utilizando fio dental e Vai Corinthians"
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})