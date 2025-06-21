import express, { Request, Response } from 'express';
import { ENV } from './configs/env';


const app = express();

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Kumar',
    })
})

const PORT = ENV.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})
