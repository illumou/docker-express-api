import express from 'express';
import * as dotenv from 'dotenv'
import { router }  from './routes'
const app = express();

dotenv.config()

app.use(express.json())
app.use('/api', router)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App listen on PORT ${port}`)
});