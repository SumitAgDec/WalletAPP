const express = require('express')
const dotenv = require('dotenv')
const { connectToDB } = require('./config/dbconnection')
const CORS = require('cors')
dotenv.config()
const app = express()

const userRouter = require("./routes/user.routes")
const userWallet = require("./routes/wallet.routes")
const { restrictToLoggedInUserOnlt } = require('./middleware/auth.middleware')

const PORT = process.env.PORT

// DB connect 
connectToDB(process.env.MONGO_URI)

// middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(CORS())

// routes
app.use('/user', userRouter)
app.use('/wallet', userWallet)


app.listen(PORT, () => (console.log(`http://localhost:${PORT}`)))