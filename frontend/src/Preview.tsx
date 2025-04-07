import { ThemeData } from './utils';

interface PreviewProps {
    themeData: ThemeData;
}

const Preview = ({ themeData }: PreviewProps) => {
    return (
        <div
            style={{
                margin: '0.2rem',
                padding: '0.2rem',
            }}
        >
            <div>Preview:</div>
            <div
                className='previewArea'
                style={{
                    border: '1px solid black',
                    padding: '2rem',
                    background: themeData?.draftTheme.backgroundColor,
                    color: themeData?.draftTheme.foregroundColor,
                }}
            >
                Hello world!
            </div>
        </div>
    );
};

export default Preview;
