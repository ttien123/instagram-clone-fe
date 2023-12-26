import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import IconFbAuth from 'src/assets/IconFbAuth';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import path from 'src/constants/path';
import { AuthSchema, authSchema } from 'src/utils/rules';

export type FormData = Pick<AuthSchema, 'username' | 'password'>;
const loginSchema = authSchema.pick(['username', 'password']);

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });
    return (
        <div className="mt-8">
            <form onSubmit={onSubmit} noValidate>
                <div>
                    <Input
                        placeholder="Phone number, username, or email"
                        name="username"
                        type="text"
                        register={register}
                        errorsMessage={errors.username?.message}
                    />
                    <Input
                        placeholder="Password"
                        name="password"
                        type="password"
                        register={register}
                        errorsMessage={errors.password?.message}
                    />
                </div>
                <div className="my-2">
                    <Button type="submit" isbgButton extendsClassName="flex w-full items-center justify-center">
                        <span className="">Sign in</span>
                    </Button>
                </div>
                <div className="my-[20px] h-[2px] w-full bg-separator relative">
                    <span className="text-secondary-text block absolute top-[-10px] left-[50%] translate-x-[-50%] bg-white px-4">
                        OR
                    </span>
                </div>
                <div>
                    <Button
                        isOnlyText
                        extendsClassName="flex w-full items-center justify-center text-[#385185] font-medium"
                        to={path.logined}
                    >
                        <span>
                            <IconFbAuth fill="#385185" />
                        </span>
                        <span className="ml-2">Login with Facebook</span>
                    </Button>
                </div>
                <div className="mt-3 text-center text-[12px]">
                    <Button isOnlyText>Forgot password</Button>
                </div>
            </form>
            <div className="text-right mt-4">
                Don't have an account?
                <Button isOnlyText extendsClassName="font-medium ml-2" to={path.signUp}>
                    Sign up
                </Button>
            </div>
        </div>
    );
};

export default SignIn;
