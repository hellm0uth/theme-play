import { ThemeData } from './utils';

interface ColorPickerProps {
    setThemeData: React.Dispatch<React.SetStateAction<ThemeData | null>>;
}

const ColorPicker = ({ setThemeData }: ColorPickerProps) => {
    const colors: string[] = [
        'black',
        'white',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'purple',
    ];

    const handleBackgroundChange = (
        ev: React.ChangeEvent<HTMLInputElement>
    ) => {
        setThemeData(
            (prev) =>
                ({
                    ...prev,
                    draftTheme: {
                        ...prev?.draftTheme,
                        backgroundColor: ev.target.value,
                    },
                } as ThemeData)
        );
    };

    const handleForegroundChange = (
        ev: React.ChangeEvent<HTMLInputElement>
    ) => {
        setThemeData(
            (prev) =>
                ({
                    ...prev,
                    draftTheme: {
                        ...prev?.draftTheme,
                        foregroundColor: ev.target.value,
                    },
                } as ThemeData)
        );
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                margin: '0 auto',
            }}
        >
            <div>
                <div>Select a background color:</div>

                <form>
                    {colors.map((color) => (
                        <div key={color}>
                            <label>
                                <input
                                    type='radio'
                                    name='backgroundColorPicker'
                                    value={color}
                                    onChange={handleBackgroundChange}
                                />
                                {color}
                            </label>
                        </div>
                    ))}
                </form>
            </div>
            <div>
                <div>Select a foreground color:</div>

                <form>
                    {colors.map((color) => (
                        <div key={color}>
                            <label>
                                <input
                                    type='radio'
                                    name='foregroundColorPicker'
                                    value={color}
                                    onChange={handleForegroundChange}
                                />
                                {color}
                            </label>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};

export default ColorPicker;
