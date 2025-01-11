import express, { NextFunction } from 'express'
import morgan from 'morgan'
import cors from 'cors'








const app = express()
app.use(morgan('dev'));
app.use(cors())
app.use(express.static('public'))

let blacklist: string[] = [
]

app.use((req, res, next) => {
    let host = req.headers['origin'] || req.headers['referer']
    let sourceIndex = host?.indexOf("//") || undefined
    let source = host?.substring((sourceIndex as number) + 2)
    console.log(source)
    if(blacklist.indexOf(source as string) != -1){
         res.send("This source has been blacklisted, you are not allowed to connect")
         return;
    
    }
    next()
})
app.get("/", (req: any, res: any) => {

  
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000, () => {
    console.log("Server is running")
})  