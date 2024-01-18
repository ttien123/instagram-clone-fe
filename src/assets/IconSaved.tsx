const IconSaved = ({ height = 18, width = 18 }: { width?: number; height?: number }) => {
    return (
        <svg aria-label="Saved" fill="currentColor" height={height} role="img" viewBox="0 0 24 24" width={width}>
            <title>Saved</title>
            <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
        </svg>
    );
};

export default IconSaved;
