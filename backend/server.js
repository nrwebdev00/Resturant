import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors'


dotenv.config();

//DB Connection

const app = express();

app.use(express.json())


app.get('/', (req, res) => {
    res.send('API is Running....')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}.`.yellow.bold))