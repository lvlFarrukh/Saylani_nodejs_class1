import express from 'express'

const port = process.env.PORT || 3000;

const app = express();
console.log("------------->",process.env.MDB);
app.get('/', (req, res) => {
    res.send("Pakistan Zindabad");
})

app.listen(port, () => {
    console.log(`Server run on localhost:${port}`)
})
