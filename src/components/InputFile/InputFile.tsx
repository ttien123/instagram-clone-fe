import React, { useRef } from 'react';
import Button from '../Button';

interface Props {
    onChange?: (file: FileList | null) => void;
}

const InputFile = ({ onChange }: Props) => {
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
                multiple
                ref={fileInputRef}
                onChange={onFileChange}
                onClick={(e) => ((e.target as any).value = null)}
            />
            <Button type="button" onClick={handleUpload} isbgButton extendsClassName="text-[14px] font-semibold">
                Select from computer
            </Button>
        </div>
    );
};

export default InputFile;
