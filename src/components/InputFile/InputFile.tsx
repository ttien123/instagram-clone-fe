import React, { useRef } from 'react';
import Button from '../Button';

interface Props {
    onChange?: (file: FileList | null) => void;
    content?: string;
    type?: string;
    isMultiple?: boolean;
}

const InputFile = ({ onChange, content = 'Select from computer', type = 'isbgButton', isMultiple }: Props) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUpload = () => {
        fileInputRef.current?.click();
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileFromLocal = e.target.files;
        onChange && onChange(fileFromLocal);
    };
    return (
        <div>
            <input
                className="hidden"
                type="file"
                accept=".jpg,.jpeg,.png,.mp4"
                multiple={isMultiple}
                ref={fileInputRef}
                onChange={onFileChange}
                onClick={(e) => ((e.target as any).value = null)}
            />
            <Button
                type="button"
                onClick={handleUpload}
                isbgButton={type === 'isbgButton'}
                isOnlyText={type === 'isOnlyText'}
                extendsClassName="text-[14px] font-semibold"
            >
                {content}
            </Button>
        </div>
    );
};

export default InputFile;
