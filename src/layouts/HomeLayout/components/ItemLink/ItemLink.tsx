import classNames from 'classnames';
import { useMatch } from 'react-router-dom';
import Button from 'src/components/Button';

interface Props {
    name: string;
    Icon?: () => JSX.Element;
    IconActive?: () => JSX.Element;
    to?: string;
    isShowAll?: boolean;
    src?: string;
    setIsShowAll: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemLink = ({ Icon, IconActive, name, to, isShowAll, setIsShowAll, src }: Props) => {
    const match = useMatch(`${to}`);
    const handleClick = () => {
        if (name === 'Create') {
            return;
        } else {
            if (name !== 'Messages') {
                setIsShowAll(true);
            } else {
                setIsShowAll(false);
            }
        }
    };
    return (
        <Button to={to} className="w-full cursor-pointer " onClick={handleClick}>
            <div className="flex items-center justify-center xl:justify-start py-3 px-[10px] my-1 w-full xl:hover:bg-hover-overlay transition-all duration-300 rounded-lg">
                {!src && IconActive && Icon && (
                    <div>{match && (name !== 'Messages' ? isShowAll : true) ? <IconActive /> : <Icon />}</div>
                )}
                {src && (
                    <div
                        className={`rounded-[50%] w-[28px] h-[28px] overflow-hidden border-[2px] flex-shrink-0 ${
                            match ? 'border-black' : 'border-transparent'
                        }`}
                    >
                        <img src={src} alt="avatar" className="block object-cover w-[24px] rounded-[50%] h-[24px] " />
                    </div>
                )}
                {isShowAll && (
                    <div
                        className={classNames(`hidden xl:block text-[16px] pl-4 font-medium `, {
                            'font-semibold': match && isShowAll,
                        })}
                    >
                        {name}
                    </div>
                )}
            </div>
        </Button>
    );
};

export default ItemLink;
