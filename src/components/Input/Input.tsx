import { EmojiClickData } from 'emoji-picker-react';
import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import type { UseFormRegister, RegisterOptions } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    errorsMessage?: string;
    classNameInput?: string;
    classNameError?: string;
    classNameLabel?: string;
    classNameWrapInput?: string;
    register?: UseFormRegister<any>;
    rules?: RegisterOptions;
    description?: React.ReactNode;
}

const Input = ({
    register,
    className,
    errorsMessage,
    name,
    type = 'text',
    rules,
    autoComplete,
    classNameInput = 'p-[10px] w-full block h-full outline-none rounded-sm text-[12px] bg-secondary-background',
    classNameError = 'mt-1 mb-1 text-red-600 min-h-[2px] text-[12px]',
    classNameWrapInput = 'flex border border-stroke bg-secondary-background',
    ...rest
}: Props) => {
    const registerResult = register && name ? register(name, rules) : null;

    return (
        <div className={className}>
            <div className={classNameWrapInput}>
                <input type={type} className={classNameInput} {...registerResult} {...rest} />
            </div>
            <div className={classNameError}>{errorsMessage}</div>
        </div>
    );
};

export default Input;
