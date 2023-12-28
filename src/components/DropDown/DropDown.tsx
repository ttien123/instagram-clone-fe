import { useState } from 'react';
import {
    useFocus,
    useDismiss,
    autoUpdate,
    offset,
    flip,
    shift,
    useFloating,
    useClick,
    useInteractions,
} from '@floating-ui/react';

interface Props {
    children: React.ReactNode;
    renderPopover: React.ReactNode;
    classNameWrapper?: string;
}

const DropDown = ({ children, classNameWrapper, renderPopover }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
    });
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss]);
    return (
        <div ref={refs.setReference} {...getReferenceProps()} className={classNameWrapper}>
            {children}
            {isOpen && (
                <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                    {renderPopover}
                </div>
            )}
        </div>
    );
};

export default DropDown;
