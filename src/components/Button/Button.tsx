import { Omit } from 'lodash';
import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import useSwitchMode from 'src/reducer/useSwtichMode';

interface Prop extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isOnlyText?: boolean;
    isbgButton?: boolean;
    isBtnType2?: boolean;
    extendsClassName?: string;
    className?: string;
    to?: string;
    href?: string;
}

const Button = ({
    children,
    isOnlyText,
    isbgButton,
    isBtnType2,
    extendsClassName,
    to,
    href,
    disabled,
    onClick,
    type = 'button',
    className,
    ...rest
}: Prop) => {
    const darkMode = useSwitchMode((state) => state.darkMode);
    let Comp: any = 'button';
    let newClassName = className;
    const props: Omit<Prop, 'children'> = {
        onClick,
        ...rest,
    };

    if (isOnlyText) {
        newClassName = 'text-primary-button hover:text-primary-button-hover';
    } else {
        if (isbgButton) {
            newClassName = 'px-4 py-[7px] text-white bg-primary-button hover:bg-primary-button-hover rounded-[8px]';
        }
    }

    if (isBtnType2) {
        newClassName =
            'h-[32px] flex items-center justify-center px-4 text-black font-semibold bg-highlight-background hover:bg-secondary-button-hover rounded-[8px] ' +
            (darkMode && ' text-white bg-secondary-button-background hover:bg-secondary-button-background');
    }

    if (extendsClassName) {
        newClassName = newClassName + ' ' + extendsClassName;
    }

    if (disabled) {
        delete props.onClick;
        newClassName = newClassName + ' ' + 'opacity-70 cursor-default hover:bg-primary-button';
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp type={type} className={newClassName} {...props}>
            {children}
        </Comp>
    );
};

export default Button;
