import { InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
    descriptionPost: string;
    classNameInput?: string;
    classNameWrapper?: string;
    placeholder?: string;
}

const WriteDescription = forwardRef<HTMLTextAreaElement, Props>(function WriteDescriptionInner(
    {
        descriptionPost,
        onChange,
        classNameWrapper,
        classNameInput = 'h-[168px] max-h-[168px] overscroll-y-auto',
        placeholder = 'Write a caption...',
    },
    ref,
) {
    let classNameInputLast = 'border-none outline-none block w-full max-w-full resize-none' + ' ' + classNameInput;

    return (
        <div className={classNameWrapper}>
            <textarea
                ref={ref}
                maxLength={2200}
                rows={1}
                autoCorrect="off"
                placeholder={placeholder}
                value={descriptionPost || ''}
                onChange={onChange}
                className={classNameInputLast}
            ></textarea>
        </div>
    );
});

export default WriteDescription;
