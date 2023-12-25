import { InputHTMLAttributes } from 'react';
import type { UseFormRegister, RegisterOptions } from 'react-hook-form';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    errorsMessage?: string;
    classNameInput?: string;
    classNameError?: string;
    classNameLabel?: string;
    register?: UseFormRegister<any>;
    rules?: RegisterOptions;
    labelName?: string;
}

const Input = ({
    register,
    className,
    errorsMessage,
    name,
    rules,
    autoComplete,
    labelName,
    classNameInput = 'p-2 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
    classNameError = 'mt-1 mb-1 text-red-600 min-h-[2px] text-[12px]',
    classNameLabel = 'mb-1 font-semibold inline-block cursor-pointer',
    ...rest
}: Props) => {
    const registerResult = register && name ? register(name, rules) : null;

    return (
        <div className={className}>
            <label htmlFor={labelName} className={classNameLabel}>
                {labelName}
            </label>
            <input id={labelName} className={classNameInput} {...registerResult} {...rest} />
            <div className={classNameError}>{errorsMessage}</div>
        </div>
    );
};

export default Input;
