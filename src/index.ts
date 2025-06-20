import express from 'express';
import { ENV_VARIABLES } from './configs/configs';


const app = express();

app.listen(ENV_VARIABLES.PORT, () => {
    console.log(`Server is running on: http://localhost:${ENV_VARIABLES.PORT}`);
})
