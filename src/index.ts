import express, { Request, Response } from 'express';
import { ENV } from './configs/env';
import favoritesRouter from './routes/favoriteRoutes';
import cronJob from './configs/cron';


const app = express();

app.use(express.json());
if (ENV.NODE_ENV === "production") cronJob.start();

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Kumar',
    })
})

app.use("/favorites", favoritesRouter)

const PORT = ENV.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})
