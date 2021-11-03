import express from 'express'

const port = process.env.PORT || 3000;

const app = express();
const pass = process.env.MDB | 123
app.get('/', (req, res) => {
    res.send("Pakistan Zindabad ", pass);
})

app.listen(port, () => {
    console.log(`Server run on localhost:${port}`)
})
