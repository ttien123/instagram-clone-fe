import IconFbAuth from 'src/assets/IconFbAuth';
import Logo from 'src/assets/Logo';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import path from 'src/constants/path';
const SignUp = () => {
    return (
        <div className="w-full md:max-w-[350px] border-b-[rgb(219,219,219)] md:border px-6 md:px-10 md:border-[rgb(219,219,219)]">
            <div className="pb-[30px]">
                <div className="mt-9 mb-3 grid place-items-center">
                    <Logo width={174} height={50} />
                </div>
                <h2 className="mb-[10px] text-base text-secondary-text font-semibold text-center">
                    Sign up to see photos and videos from your friends.
                </h2>
                <form>
                    <div>
                        <Button isbgButton extendsClassName="flex w-full items-center justify-center">
                            <span>
                                <IconFbAuth />
                            </span>
                            <span className="ml-2">Login with Facebook</span>
                        </Button>
                    </div>
                    <div className="my-[20px] h-[2px] w-full bg-separator relative">
                        <span className="text-secondary-text block absolute top-[-10px] left-[50%] translate-x-[-50%] bg-white px-4">
                            OR
                        </span>
                    </div>
                    <div>
                        <Input placeholder="Mobile Number or Email" />
                        <Input placeholder="Full Name" />
                        <Input placeholder="Username" />
                        <Input placeholder="Password" />
                    </div>
                    <div className="text-[12px] text-secondary-text text-center my-2">
                        By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
                    </div>

                    <div className="my-2">
                        <Button isbgButton extendsClassName="flex w-full items-center justify-center">
                            <span className="">Sign up</span>
                        </Button>
                    </div>
                </form>
                <div className="text-right mt-4">
                    Have an account?
                    <Button isOnlyText extendsClassName="font-medium ml-2" to={path.signIn}>
                        Log in
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
