import React from 'react';

const SkeletonSearch = () => {
    return (
        <div className="w-full">
            {Array(20)
                .fill(0)
                .map((_, index) => (
                    <div key={index} className="flex animate-pulse my-3 w-full px-6">
                        <div className="flex-shrink-0">
                            <span className="w-12 h-12 block bg-gray-200 rounded-full dark:bg-gray-700" />
                        </div>
                        <div className="ms-4 mt-2 w-full">
                            <ul className="mb-2 space-y-3">
                                <li className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700" />
                            </ul>
                            <h3 className="h-4 bg-gray-200 rounded-md dark:bg-gray-700" style={{ width: '60%' }} />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default SkeletonSearch;
