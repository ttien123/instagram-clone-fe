const ArrowIcon = ({ height = 24, width = 24 }: { width?: number; height?: number }) => {
    return (
        <svg aria-label="Back" fill="currentColor" height={height} role="img" viewBox="0 0 24 24" width={width}>
            <title>Back</title>
            <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z" />
        </svg>
    );
};

export default ArrowIcon;
