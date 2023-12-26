import avatar from 'src/assets/AuthImg/technology-computer-creative-design.jpg';
import Button from 'src/components/Button';
import path from 'src/constants/path';
const Logined = () => {
    return (
        <div className="">
            <div className="my-6 flex items-center justify-center overflow-hidden rounded-[50%]">
                <img src={avatar} alt="avatar" className="block w-[101.6px] h-[101.6px] rounded-[50%]" />
            </div>
            <div className="text-center mb-4">
                <Button isbgButton>
                    <span className="block px-4 font-semibold">Continue as t.tien_01</span>
                </Button>
            </div>
            <div className="text-center pt-2">
                Not t.tien_01?
                <Button isOnlyText extendsClassName="ml-2 font-medium" to={path.signIn}>
                    Switch accounts
                </Button>
            </div>
        </div>
    );
};

export default Logined;
