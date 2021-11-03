import express from 'express'
import morgan from 'morgan'

const port = process.env.PORT || 3000;

const app = express();

app.use(morgan('short'))
app.get('/', (req, res) => {
    res.send("Pakistan Zindabad");
})

app.listen(3000, () => {
    console.log(`Server run on localhost:${port}`)
})
