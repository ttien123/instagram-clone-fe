import { useState, useId, type ElementType } from 'react';
import {
    useFloating,
    FloatingPortal,
    shift,
    offset,
    type Placement,
    flip,
    autoUpdate,
    useDismiss,
    useRole,
    useInteractions,
    useClick,
} from '@floating-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
    children: React.ReactNode;
    renderPopover: React.ReactNode;
    className?: string;
    classNamePosition?: string;
    as?: ElementType;
    placement?: Placement;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Popover({
    children,
    className,
    classNamePosition,
    renderPopover,
    as: Element = 'div',
    placement = 'bottom',
    setOpen,
    open,
}: Props) {
    // const [open, setOpen] = useState(initialOpen || false);

    const data = useFloating({
        open,
        onOpenChange: setOpen,
        middleware: [offset(10), flip(), shift()],
        whileElementsMounted: autoUpdate,
        transform: false,
        placement,
    });
    const { refs, floatingStyles, context } = data;
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([click, role, dismiss]);
    const id = useId();

    return (
        <Element className={className}>
            <div ref={refs.setReference} {...getReferenceProps()}>
                {children}
            </div>
            <FloatingPortal id={id}>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            ref={refs.setFloating}
                            initial={{
                                x: '-100%',
                            }}
                            animate={{
                                x: '0%',
                            }}
                            exit={{
                                x: '-100%',
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            style={{
                                ...floatingStyles,
                            }}
                            className={classNamePosition}
                            {...getFloatingProps()}
                        >
                            {renderPopover}
                        </motion.div>
                    )}
                </AnimatePresence>
            </FloatingPortal>
        </Element>
    );
}
