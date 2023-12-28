import { useEffect, useRef, useState } from 'react';
import IconLoading from 'src/assets/IconLoading';
import IconSearchInput from 'src/assets/IconSearchInput';
import useDebounce from 'src/hooks/useDebounce';
import Popover from '../Popover';
import SearchRecent from '../SearchRecent';
import MemberSearch from '../MemberSearch';

interface Props {
    isMobile?: boolean;
}

const InputSearch = ({ isMobile }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);
    const [isFocusInput, setIsFocusInput] = useState(false);
    const [valueSearch, setValueSearch] = useState('');
    const debouncedValue = useDebounce(valueSearch, 500);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setValueSearch(e.target.value);
        }
    };
    const handleClearInput = () => {
        setValueSearch('');
        setIsFocusInput(false);
    };

    useEffect(() => {}, [debouncedValue]);
    return (
        <div className={`${isMobile ? 'mx-0' : 'mx-4 mb-6'} rounded-lg bg-highlight-background relative`}>
            <Popover
                open={open}
                isToggle={false}
                setOpen={setOpen}
                renderPopover={
                    true ? <MemberSearch isMobile={isMobile} /> : isMobile && <SearchRecent isMobile={isMobile} />
                }
            >
                <input
                    onFocus={() => setIsFocusInput(true)}
                    onBlur={() => !valueSearch && setIsFocusInput(false)}
                    onChange={handleChange}
                    value={valueSearch}
                    ref={inputRef}
                    type="text"
                    className="block w-full py-[3px] px-4 bg-highlight-background h-[40px] rounded-lg border-none outline-none"
                />
            </Popover>
            <div className="absolute top-[50%] translate-y-[-50%] left-4 flex items-center justify-start">
                {!isFocusInput && (
                    <div className="mr-3">
                        <IconSearchInput />
                    </div>
                )}
                {!valueSearch && <div className=" text-secondary-icon">Search</div>}
            </div>
            {isFocusInput && (
                <button
                    onClick={handleClearInput}
                    className="absolute top-[50%] translate-y-[-50%] right-4 w-[20px] h-[20px] bg-[url(src/assets/AuthImg/TJztmXpWTmS.png)] bg-no-repeat bg-[-318px_-333px]"
                ></button>
            )}
            {/* <div className="absolute top-[30%] translate-y-[-50%] right-4 w-[18px] h-[18px] animate-loading-icon">
                    <IconLoading />
                </div> */}
        </div>
    );
};

export default InputSearch;
