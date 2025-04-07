import { Request, Response } from 'express';
import { getFileData } from './utils';

const getThemeData = async (_: Request, res: Response): Promise<void> => {
    try {
        const fileData = await getFileData();

        console.log('Got fileData: ');
        console.log(fileData);

        res.status(200).json(fileData);
    } catch (error: any) {
        console.log('getThemeData caught error: ');
        console.log(error.message);
        res.status(500).json({ error: 'Failed to read JSON' });
    }
};

export default getThemeData;
