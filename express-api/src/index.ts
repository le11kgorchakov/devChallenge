import express, { Request, Response } from 'express'
import { config, ConnectionPool } from 'mssql'
import cors from 'cors'

const app = express()
app.use(cors())

const port = 5000

const mssqlServerConfig: config = {
  user: 'sa',
  password: 'inmotionnow123!',
  server: 'localhost', 
  database: 'DevChallengeDB',
  port: 1433,
  options: {
    enableArithAbort: true,
  }
}

app.get('/about', (request: Request, response: Response) => response.json({ name: 'inmotionnow express api', version: '0.0.0' }))

app.get('/tasks', async (request: Request, response: Response) => {
  const connection = await new ConnectionPool(mssqlServerConfig).connect()
  const result = await connection.query`select taskId, title, description from tasks` 
  connection.close()
  response.json(result.recordset) 
})

app.get('/users', async (request: Request, response: Response) => {
  const connection = await new ConnectionPool(mssqlServerConfig).connect()
  const result = await connection.query`select userId, firstName, lastName from users` 
  connection.close()
  response.json(result.recordset) 
})

app.listen(port, () => console.log(`listening on http://localhost:${port}`))