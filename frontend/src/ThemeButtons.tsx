/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeData, themesAreEqual } from './utils';

interface ThemeButtonsProps {
    themeData: ThemeData;
    setThemeData: React.Dispatch<React.SetStateAction<ThemeData | null>>;
}

const ThemeButtons = ({ themeData, setThemeData }: ThemeButtonsProps) => {
    const handleApply = async () => {
        const newThemeData = {
            currentTheme: themeData.draftTheme,
            previousTheme: themeData.currentTheme,
            draftTheme: themeData.draftTheme,
        };

        try {
            const putData = await fetch('/api/theme', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newThemeData),
            });

            const resultOfPut = await putData.json();

            console.log('handleApply: got resultOfPut: ');
            console.log(resultOfPut);

            if (!themesAreEqual(resultOfPut, newThemeData)) {
                throw new Error('resultOfPut and newThemeData do not match');
            }

            setThemeData(newThemeData);
        } catch (error: any) {
            window.alert('Something went wrong - please check logs');
            console.log('handleApply caught error: ' + error.message);
        }
    };

    const handleSaveDraft = async () => {
        try {
            const putData = await fetch('/api/theme', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(themeData),
            });

            const resultOfPut = await putData.json();

            console.log('handleSaveDraft: got resultOfPut: ');
            console.log(resultOfPut);

            if (!themesAreEqual(resultOfPut, themeData)) {
                throw new Error('resultOfPut and themeData do not match');
            }
        } catch (error: any) {
            window.alert('Something went wrong - please check logs');
            console.log('handleSaveDraft caught error: ' + error.message);
        }
    };

    const handleRevert = async () => {
        const newThemeData = {
            currentTheme: themeData.previousTheme,
            previousTheme: themeData.currentTheme,
            draftTheme: themeData.draftTheme,
        };

        try {
            const putData = await fetch('/api/theme', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newThemeData),
            });

            const resultOfPut = await putData.json();

            console.log('handleRevert: got resultOfPut: ');
            console.log(resultOfPut);

            if (!themesAreEqual(resultOfPut, newThemeData)) {
                throw new Error('resultOfPut and newThemeData do not match');
            }

            setThemeData(newThemeData);
        } catch (error: any) {
            window.alert('Something went wrong - please check logs');
            console.log('handleRevert caught error: ' + error.message);
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
            }}
        >
            <button onClick={handleApply}>Apply</button>
            <button onClick={handleSaveDraft}>Save Draft</button>
            <button onClick={handleRevert}>Revert to previous</button>
        </div>
    );
};

export default ThemeButtons;
