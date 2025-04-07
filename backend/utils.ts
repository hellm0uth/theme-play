import path from 'path';
import fs from 'fs/promises';

interface Theme {
    backgroundColor: string;
    foregroundColor: string;
}

interface ThemeData {
    currentTheme: Theme;
    previousTheme: Theme;
    draftTheme: Theme;
}

const isTheme = (obj: any): obj is Theme => {
    return (
        typeof obj === 'object' &&
        typeof obj.backgroundColor === 'string' &&
        typeof obj.foregroundColor === 'string'
    );
};

export const isThemeData = (data: any): data is ThemeData => {
    return (
        typeof data === 'object' &&
        isTheme(data.currentTheme) &&
        isTheme(data.previousTheme) &&
        isTheme(data.draftTheme)
    );
};

const filePath = path.join(__dirname, '../data.json');

export const getFileData = async () => {
    const fileContent = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContent);
};

export const putFileData = async (newData: ThemeData) => {
    await fs.writeFile(filePath, JSON.stringify(newData, null, 4), 'utf8');
};
