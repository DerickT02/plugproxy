import express from 'express'
import morgan from 'morgan'
import cors from 'cors'








const app = express()
app.use(morgan('dev'));
app.use(cors())
app.use(express.static('public'))
app.get("/", (req: any, res: any) => {
    let host = req.origin
    console.log(host) 
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000, () => {
    console.log("Server is running")
})  