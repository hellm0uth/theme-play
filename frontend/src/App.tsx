/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import './App.scss';
import ColorPicker from './ColorPicker';
import Preview from './Preview';
import { isThemeData, ThemeData } from './utils';
import ThemeButtons from './ThemeButtons';

const App = () => {
    const [themeData, setThemeData] = useState<ThemeData | null>(null);

    useEffect(() => {
        const applyInitialTheme = async () => {
            try {
                const fetchedData = await fetch('/api/theme');
                const fetchedThemeData = await fetchedData.json();

                console.log('applyInitialTheme: got fetchedThemeData:');
                console.log(fetchedThemeData);

                if (!isThemeData(fetchedThemeData)) {
                    throw new Error('Got invalid themeData');
                }

                setThemeData(fetchedThemeData);
            } catch (error: any) {
                window.alert('Something went wrong - please check logs');
                console.log('applyInitialTheme caught error: ' + error.message);
            }
        };

        applyInitialTheme();
    }, []);

    return (
        <div
            style={{
                backgroundColor: themeData?.currentTheme.backgroundColor,
                color: themeData?.currentTheme.foregroundColor,
            }}
        >
            <ColorPicker setThemeData={setThemeData} />
            <ThemeButtons
                setThemeData={setThemeData}
                themeData={themeData as ThemeData}
            />
            <Preview themeData={themeData as ThemeData} />
        </div>
    );
};

export default App;
