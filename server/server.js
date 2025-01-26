import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import {router} from './routes/markdownRoutes.js';

dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/markdown',router)

const PORT=9000 || process.env.PORT;
app.listen(PORT,()=>{
    console.log(`PORT is listening from ${PORT}`);
})