/* eslint-disable @typescript-eslint/no-explicit-any */
interface Theme {
    backgroundColor: string;
    foregroundColor: string;
}

export interface ThemeData {
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

export const themesAreEqual = (a: ThemeData, b: ThemeData): boolean => {
    return (
        a.currentTheme.backgroundColor === b.currentTheme.backgroundColor &&
        a.currentTheme.foregroundColor === b.currentTheme.foregroundColor &&
        a.previousTheme.backgroundColor === b.previousTheme.backgroundColor &&
        a.previousTheme.foregroundColor === b.previousTheme.foregroundColor &&
        a.draftTheme.backgroundColor === b.draftTheme.backgroundColor &&
        a.draftTheme.foregroundColor === b.draftTheme.foregroundColor
    );
};
