import  express  from 'express'




const app = express()
app.use(express.static('public'))
app.get("/", (req: any, res: any) => {
    console.log()
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000, () => {
    console.log("Server is running")
}) 