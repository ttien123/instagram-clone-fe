interface Props {
    src: string;
}

const Avatar = ({ src }: Props) => {
    return (
        <div className={`w-full h-full rounded-[50%] overflow-hidden`}>
            <img src={src} alt="Member" className="block w-full h-full" />
        </div>
    );
};

export default Avatar;
