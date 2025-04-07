import express, { Express, Request, Response } from 'express';
import path from 'path';
import getThemeData from './getThemeData';
import putThemeData from './putThemeData';

const app: Express = express();
const port = '8000';

app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../../frontend/dist')));

app.get('/api/theme', getThemeData);

app.put('/api/theme', putThemeData);

app.get('/{*splat}', (_: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, '../../frontend/dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`*** Server is running on port ${port} ***`);
});
