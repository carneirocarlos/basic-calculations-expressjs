import express from 'express'
export const app = express()
const port = 3000

import { mean, variance } from './calculations/basic.js'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Variance
app.get('/calculations/variance/:inputs', (req, res) => {
  let inputs;

  try {
    inputs = JSON.parse("[" + req.params.inputs + "]")
  } catch (error) {
    res.status(400).send("error parsing inputs")
    return
  }
  
  res.send({"result" : variance(inputs)})
})

// Mean
app.get('/calculations/mean/:inputs', (req, res) => {
  let inputs;

  try {
    inputs = JSON.parse("[" + req.params.inputs + "]")
  } catch (error) {
    res.status(400).send("error parsing inputs")
    return
  }
  
  res.send({"result" : mean(inputs)})
})

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})