import React from 'react';
import IconComment from 'src/assets/IconComment';
import { IconNotifications, IconNotificationsActive } from 'src/assets/IconNotifications';
import IconSaved from 'src/assets/IconSaved';
import IconShare from 'src/assets/IconShare';

const Social = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
                <div className="mr-4">
                    <IconNotifications />
                    {/* <IconNotificationsActive /> */}
                </div>
                <div className="mr-4">
                    <IconComment />
                </div>
                <div>
                    <IconShare />
                    {/* <IconNotificationsActive /> */}
                </div>
            </div>
            <div>
                <IconSaved width={24} height={24} />
            </div>
        </div>
    );
};

export default Social;
