import {
    // ...
    useClick,
    useDismiss,
    useRole,
    useInteractions,
    useId,
    useFloating,
    FloatingOverlay,
    FloatingFocusManager,
} from '@floating-ui/react';
import { FC, PropsWithChildren, useState } from 'react';
import IconClosePost from 'src/assets/IconClosePost';

interface Props {
    renderPopover: React.ReactNode;
    extendsClassName?: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isBtnClose?: boolean;
    classNameChildren?: string;
}

const Dialog: FC<PropsWithChildren<Props>> = ({
    renderPopover,
    children,
    extendsClassName,
    isOpen,
    setIsOpen,
    isBtnClose,
    classNameChildren,
}) => {
    // const [isOpen, setIsOpen] = useState(false);
    const { refs, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
    });

    const click = useClick(context);
    const dismiss = useDismiss(context, {
        outsidePressEvent: 'mousedown',
    });
    const role = useRole(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);
    return (
        <>
            <div className={classNameChildren} ref={refs.setReference} {...getReferenceProps()}>
                {children}
            </div>
            {isOpen && (
                <FloatingOverlay
                    lockScroll
                    style={{ background: 'rgba(0, 0, 0, 0.8)' }}
                    className={`grid place-items-center ${extendsClassName}`}
                >
                    <FloatingFocusManager context={context}>
                        <>
                            <div
                                ref={refs.setFloating}
                                //   aria-labelledby={labelId}
                                //   aria-describedby={descriptionId}
                                {...getFloatingProps()}
                            >
                                {renderPopover}
                            </div>
                            {isBtnClose && (
                                <button className="absolute top-4 right-4 z-50" onClick={() => setIsOpen(false)}>
                                    <IconClosePost />
                                </button>
                            )}
                        </>
                    </FloatingFocusManager>
                </FloatingOverlay>
            )}
        </>
    );
};

export default Dialog;
