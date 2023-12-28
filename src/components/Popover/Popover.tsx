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
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface Props {
    children: React.ReactNode;
    renderPopover: React.ReactNode;
    className?: string;
    classNamePosition?: string;
    as?: ElementType;
    placement?: Placement;
    isToggle?: boolean;
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
    isToggle,
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
    const click = useClick(context, {
        toggle: isToggle,
    });
    const dismiss = useDismiss(context);
    const role = useRole(context);
    const { getReferenceProps, getFloatingProps } = useInteractions([click, role, dismiss]);
    const id = useId();

    const animationNav: Variants = {
        open: {
            x: '0%',
        },
        closed: { x: '-100%' },
    };

    return (
        <Element className={className}>
            <div ref={refs.setReference} {...getReferenceProps()}>
                {children}
            </div>
            <FloatingPortal id={id}>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={'closed'}
                            animate={'open'}
                            exit={'closed'}
                            variants={isToggle ? animationNav : {}}
                            transition={{
                                duration: 0.5,
                            }}
                            ref={refs.setFloating}
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
