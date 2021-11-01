import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';

//Config
import connectDB from './config/db.js';
//MiddleWare
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
//Routes
import userRoutes from './routes/userRoutes.js';

dotenv.config();

//DB Connection
connectDB();

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(express.json())

//Routes
app.get('/', (req, res) => {
    res.send('API is Running....')
})

app.use('/api/users', userRoutes);

//Error Handling Middle Ware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}.`.yellow.bold))