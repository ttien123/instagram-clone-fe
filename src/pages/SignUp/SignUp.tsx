import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import IconFbAuth from 'src/assets/IconFbAuth';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import path from 'src/constants/path';
import { AuthSchema, authSchema } from 'src/utils/rules';

export type FormData = Pick<AuthSchema, 'username' | 'password' | 'contact' | 'fullName'>;
const registerSchema = authSchema.pick(['username', 'password', 'contact', 'fullName']);

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            username: '',
            fullName: '',
            password: '',
            contact: '',
        },
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });
    return (
        <div>
            <h2 className="mb-[10px] text-base text-secondary-text font-semibold text-center">
                Sign up to see photos and videos from your friends.
            </h2>
            <form onSubmit={onSubmit} noValidate>
                <div>
                    <Button isbgButton extendsClassName="flex w-full items-center justify-center" to={path.logined}>
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
                    <Input
                        placeholder="Mobile Number or Email"
                        name="contact"
                        type="text"
                        register={register}
                        errorsMessage={errors.contact?.message}
                    />
                    <Input
                        placeholder="Full Name"
                        name="fullName"
                        type="text"
                        register={register}
                        errorsMessage={errors.fullName?.message}
                    />
                    <Input
                        placeholder="Username"
                        name="username"
                        type="text"
                        register={register}
                        errorsMessage={errors.username?.message}
                    />
                    <Input
                        placeholder="Password"
                        name="password"
                        type="text"
                        register={register}
                        errorsMessage={errors.password?.message}
                    />
                </div>
                <div className="text-[12px] text-secondary-text text-center my-2">
                    By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
                </div>

                <div className="my-2">
                    <Button type="submit" isbgButton extendsClassName="flex w-full items-center justify-center">
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
    );
};

export default SignUp;
