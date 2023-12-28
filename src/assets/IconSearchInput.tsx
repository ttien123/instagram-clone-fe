import React from 'react';

const IconSearchInput = () => {
    return (
        <svg aria-label="Search" fill="currentColor" height={16} role="img" viewBox="0 0 24 24" width={16}>
            <title>Search</title>
            <path
                d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                fill="none"
                stroke="rgb(142, 142, 142)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            />
            <line
                fill="none"
                stroke="rgb(142, 142, 142)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                x1="16.511"
                x2={22}
                y1="16.511"
                y2={22}
            />
        </svg>
    );
};

export default IconSearchInput;
