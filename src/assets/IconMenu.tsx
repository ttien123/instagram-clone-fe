const IconMenuActive = () => {
    return (
        <svg aria-label="Settings" fill="currentColor" height={24} role="img" viewBox="0 0 24 24" width={24}>
            <title>Settings</title>
            <path d="M3.5 6.5h17a1.5 1.5 0 0 0 0-3h-17a1.5 1.5 0 0 0 0 3Zm17 4h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Zm0 7h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Z" />
        </svg>
    );
};

const IconMenu = () => {
    return (
        <svg
            aria-label="Settings"
            className="x1lliihq x1n2onr6 x5n08af"
            fill="currentColor"
            height={24}
            role="img"
            viewBox="0 0 24 24"
            width={24}
        >
            <title>Settings</title>
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                x1={3}
                x2={21}
                y1={4}
                y2={4}
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                x1={3}
                x2={21}
                y1={12}
                y2={12}
            />
            <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                x1={3}
                x2={21}
                y1={20}
                y2={20}
            />
        </svg>
    );
};

export { IconMenu, IconMenuActive };
