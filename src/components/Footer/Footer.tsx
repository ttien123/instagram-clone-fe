import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-[12px] text-secondary-text px-4 pb-[52px] max-w-[90%] mx-auto">
            <div className="flex items-center justify-center flex-wrap">
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">Meta</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">About</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">Blog</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">Jobs</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">Help</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">API</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">Privacy</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">Terms</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">Locations</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">Instagram</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">Lite</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">Threads</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">Contact</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">Uploading & Non-Users</span>
                <span className="mx-2 inline-block mb-3 hover:underline cursor-pointer">Meta Verified</span>
            </div>
            <div>
                <span className="mr-2">English</span> © 2023 Instagram from Meta
            </div>
        </footer>
    );
};

export default Footer;
