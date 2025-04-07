import { Request, Response } from 'express';
import { getFileData, isThemeData, putFileData } from './utils';

const putThemeData = async (req: Request, res: Response): Promise<void> => {
    try {
        const currentThemeData = await getFileData();

        const incomingThemeData = req.body;

        console.log('Processing incomingThemeData: ');
        console.log(incomingThemeData);

        console.log('Checking currentThemeData:  ');
        console.log(currentThemeData);

        if (!isThemeData(incomingThemeData) || !isThemeData(currentThemeData)) {
            console.log('Invalid theme data format');

            res.status(400).json({ error: 'Invalid theme data format' });
            return;
        }

        console.log('writing to file...');

        await putFileData(incomingThemeData);

        res.status(201).json(incomingThemeData);
    } catch (error: any) {
        console.log('putThemeData caught error: ');
        console.log(error.message);
        res.status(500).json({ error: 'Failed to save JSON' });
    }
};

export default putThemeData;
