import * as yup from 'yup';

export const authSchema = yup.object({
    username: yup.string().required('Username is a required field').min(4, 'Username must be at least 4 characters'),
    fullName: yup.string().required('Full name is a required field').min(6, 'Username must be at least 6 characters'),
    contact: yup
        .string()
        .required('Email or mobile number is a required field')
        .test({
            name: 'Mobile number or email',
            message: 'Invalid email or phone number',
            test: function (value) {
                if (/^[0-9]{9,10}$/.test(value)) {
                    console.log('isPhoneNumber');
                    return true;
                }
                if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    return true;
                }
                return false;
            },
        }),
    password: yup.string().required('Password is a required field').min(8, 'Password must be at least 8 characters'),
});

export type AuthSchema = yup.InferType<typeof authSchema>;
