import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
    descriptionPost: string;
    classNameInput?: string;
    classNameWrapper?: string;
}

const Comment = ({
    descriptionPost,
    onChange,
    classNameWrapper,
    classNameInput = 'border-none outline-none block w-full max-w-full resize-none relative h-[168px] max-h-[168px] overscroll-y-auto',
}: Props) => {
    return (
        <div className={classNameWrapper}>
            <textarea
                placeholder="Write a caption..."
                value={descriptionPost || ''}
                onChange={onChange}
                className={classNameInput}
            ></textarea>
        </div>
    );
};

export default Comment;
